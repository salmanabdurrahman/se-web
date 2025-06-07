import { z } from "zod/v4";

export const adminLoginSchema = z.object({
  email: z.email({ message: "Email must be a valid email address" }).trim(),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }).trim(),
});

export type FormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
