"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "../prisma";
import { lucia } from "../auth";
import bcrypt from "bcrypt";
import { customerLoginSchema, FormState } from "@/types/customer.auth.types";

export async function customerLogin(_: FormState, formData: FormData) {
  const validatedFields = customerLoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await prisma.user.findFirst({
    where: {
      email,
      role: "customer",
    },
  });
  if (!existingUser) {
    return {
      message: "Invalid login credentials. Please try again.",
    };
  }

  const isValidPassword = await bcrypt.compare(password, existingUser.password);
  if (!isValidPassword) {
    return {
      message: "Invalid login credentials. Please try again.",
    };
  }

  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  (await cookies()).set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  return redirect("/");
}
