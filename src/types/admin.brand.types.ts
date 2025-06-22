import { z } from "zod/v4";

export const adminBrandSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Brand name must be at least 3 characters long" })
    .max(100, { message: "Brand name must be at most 100 characters long" })
    .trim(),
  logo: z
    .file({ message: "Brand logo is required" })
    .max(1_000_000, { message: "Brand logo size must be less than 1MB" })
    .mime(["image/jpeg", "image/png", "image/webp"], {
      message: "Brand logo must be a valid image file with a  type of jpeg, png, or webp",
    }),
});
