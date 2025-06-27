"use server";

import { revalidatePath } from "next/cache";
import prisma from "../prisma";
import { z } from "zod/v4";
import { uploadImage } from "../supabase";
import { ActionResult, adminProductSchema as formSchema, ProductWithRelations } from "@/types/admin.product.types";

export async function getProducts(): Promise<ProductWithRelations[]> {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        updatedAt: "desc",
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
        brand: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            orders: true,
          },
        },
      },
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function createProduct(values: z.infer<typeof formSchema>): Promise<ActionResult> {
  const validatedFields = formSchema.safeParse(values);
  if (!validatedFields.success) {
    return { success: false, message: "Invalid form data." };
  }

  const { name, images, description, price, stock, brandId, categoryId, locationId } = validatedFields.data;

  try {
    const existingProduct = await prisma.product.findFirst({
      where: {
        name: { equals: name, mode: "insensitive" },
      },
    });
    if (existingProduct) {
      return { success: false, message: "Product name already exists." };
    }

    const imagesUrls = await Promise.all(
      images.map(async image => {
        const url = await uploadImage(image, "products");
        return url;
      })
    );
    if (imagesUrls.some(url => !url) || imagesUrls.length === 0) {
      return { success: false, message: "Failed to upload one or more product images." };
    }

    await prisma.product.create({
      data: {
        name,
        images: imagesUrls as string[],
        description,
        price: BigInt(price),
        stock,
        brandId: Number(brandId),
        categoryId: Number(categoryId),
        locationId: Number(locationId),
      },
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return { success: false, message: "Failed to create product." };
  }

  revalidatePath("/admin/products");
  return { success: true, message: "Product created successfully." };
}
