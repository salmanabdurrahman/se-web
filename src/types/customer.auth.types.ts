import { z } from "zod/v4";

export const customerLoginSchema = z.object({
  email: z.email({ message: "Email must be a valid email address" }).trim(),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }).trim(),
});

export const customerRegisterSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters long" }).trim(),
  email: z.email({ message: "Email must be a valid email address" }).min(1, { message: "Email is required" }).trim(),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }).trim(),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
