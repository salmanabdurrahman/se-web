import { z } from "zod/v4";

export const customerOrderSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(100, { message: "Name must be at most 100 characters long" })
    .trim(),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters long" })
    .max(255, { message: "Address must be at most 255 characters long" })
    .trim(),
  city: z.string().min(2, { message: "City must be at least 2 characters long" }).trim(),
  postalCode: z
    .string()
    .min(5, { message: "Postal code must be at least 5 characters long" })
    .max(10, { message: "Postal code must be at most 10 characters long" })
    .trim(),
  note: z.string().max(255, { message: "Note must be at most 255 characters long" }).trim().optional(),
  phone: z
    .string()
    .min(5, { message: "Phone number must be at least 5 characters long" })
    .max(20, { message: "Phone number must be at most 20 characters long" })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        address?: string[];
        city?: string[];
        postalCode?: string[];
        note?: string[];
        phone?: string[];
      };
      message?: string;
      success?: boolean;
    }
  | undefined;
