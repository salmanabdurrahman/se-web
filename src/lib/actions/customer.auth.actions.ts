"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "../prisma";
import { lucia, validateRequest } from "../auth";
import bcrypt from "bcrypt";
import { customerLoginSchema, customerRegisterSchema, FormState } from "@/types/customer.auth.types";

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

export async function customerRegister(_: FormState, formData: FormData) {
  const validatedFields = customerRegisterSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await prisma.user.findFirst({
    where: {
      email,
      role: "customer",
    },
  });
  if (existingUser) {
    return {
      message: "Email is already registered. Please use a different email address.",
    };
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: "customer",
    },
  });
  if (!user) {
    return {
      message: "Failed to create account. Please try again later.",
    };
  }

  const session = await lucia.createSession(user.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  (await cookies()).set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  return redirect("/");
}

export async function customerLogout() {
  const { session } = await validateRequest();
  if (!session) {
    return redirect("/login");
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  (await cookies()).set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  return redirect("/login");
}
