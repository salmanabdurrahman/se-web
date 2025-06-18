import { z } from "zod/v4";

export type AdminCategories = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export const adminCategorySchema = z.object({
  name: z
    .string()
    .min(3, { message: "Category name must be at least 3 characters long" })
    .max(100, { message: "Category name must be at most 100 characters long" })
    .trim(),
});

export interface ActionResult {
  success: boolean;
  message: string;
}
