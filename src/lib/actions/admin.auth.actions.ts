"use server";

import { adminLoginSchema, FormState } from "@/types/admin.auth.types";

export async function adminLogin(state: FormState, formData: FormData) {
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

  // TODO: Implement the actual login logic here, such as checking credentials against a database.
  // For now, we will just log the validated fields.
  console.log("Admin Login Attempt:", { validatedFields });
}
