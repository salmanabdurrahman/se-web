"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { adminLoginSchema, FormState } from "@/types/admin.auth.types";
import prisma from "../prisma";
import { lucia, validateRequest } from "../auth";

export async function adminLogin(_: FormState, formData: FormData) {
  const validatedFields = adminLoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid login credentials. Please try again.",
    };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await prisma.user.findFirst({
    where: {
      email: email,
      role: "superadmin",
    },
  });

  if (!existingUser) {
    return {
      message: "Invalid login credentials. Please try again.",
    };
  }

  const isPasswordValid = await bcrypt.compare(password, existingUser.password);
  if (!isPasswordValid) {
    return {
      message: "Invalid login credentials. Please try again.",
    };
  }

  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  (await cookies()).set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

  return redirect("/admin");
}

export async function adminLogout(_: FormState) {
  const { session } = await validateRequest();
  if (!session) {
    return {
      message: "Unauthorized action. Please log in again.",
    };
  }

  await lucia.invalidateSession(session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  (await cookies()).set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

  return redirect("/admin/login");
}
