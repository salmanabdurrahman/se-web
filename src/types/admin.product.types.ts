import { z } from "zod/v4";
import { Prisma } from "@prisma/client";

const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2 MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/jpg"];

export type ProductWithRelations = Prisma.ProductGetPayload<{
  include: {
    category: {
      select: {
        name: true;
      };
    };
    brand: {
      select: {
        name: true;
      };
    };
    _count: {
      select: {
        orders: true;
      };
    };
  };
}>;

export const adminProductSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Product name must be at least 3 characters long" })
    .max(100, { message: "Product name must be at most 100 characters long" })
    .trim(),
  images: z
    .array(z.instanceof(File))
    .min(1, { message: "Image is required" })
    .max(5, { message: "A maximum of 5 images can be uploaded" })
    .refine(files => files.every(file => file.size <= MAX_IMAGE_SIZE), {
      message: `Each image must be less than ${MAX_IMAGE_SIZE / 1024 / 1024} MB`,
    })
    .refine(files => files.every(file => ACCEPTED_IMAGE_TYPES.includes(file.type)), {
      message: "Only JPEG, JPG, PNG, and WebP image formats are allowed",
    }),
  description: z.string().min(10, { message: "Description must be at least 10 characters long" }).trim(),
  price: z.string().min(1, { message: "Price is required" }).trim(),
  stock: z.enum(["ready", "pre_order"], { message: "Stock must be either ready or pre_order" }),
  brandId: z.string().min(1, { message: "Brand is required" }),
  categoryId: z.string().min(1, { message: "Category is required" }),
  locationId: z.string().min(1, { message: "Location is required" }),
});

export const adminEditProductSchema = adminProductSchema.extend({
  images: z.array(z.instanceof(File)).optional(),
});

export interface ActionResult {
  success: boolean;
  message: string;
}
