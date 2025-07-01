"use server";

import { revalidatePath } from "next/cache";
import prisma from "../prisma";
import { z } from "zod/v4";
import { deleteImage, uploadImage } from "../supabase";
import isEqual from "lodash/isEqual";
import {
  ActionResult,
  adminEditProductSchema as editFormSchema,
  adminProductSchema as formSchema,
  ProductWithRelations,
} from "@/types/admin.product.types";

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

export async function getProductById(id: string): Promise<ProductWithRelations | null> {
  try {
    const product = await prisma.product.findFirst({
      where: {
        id,
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
    return product;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
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

export async function updateProduct(id: string, values: z.infer<typeof editFormSchema>): Promise<ActionResult> {
  const validatedFields = editFormSchema.safeParse(values);
  if (!validatedFields.success) {
    return { success: false, message: "Invalid form data." };
  }

  const { name, images, description, price, stock, brandId, categoryId, locationId } = validatedFields.data;

  try {
    // check if another product with the same name exists, excluding the current product
    const existingProduct = await prisma.product.findFirst({
      where: {
        name: { equals: name, mode: "insensitive" },
        NOT: {
          id,
        },
      },
    });
    if (existingProduct) {
      return { success: false, message: "Another product with this name already exists." };
    }

    // fetch the current product to compare images
    const currentProduct = await prisma.product.findFirst({
      where: {
        id,
      },
    });
    if (!currentProduct) {
      return { success: false, message: "Product not found." };
    }

    let imagesUrls: string[] = currentProduct.images; // default value is a copy of current images
    if (images && images.length > 0 && images[0] instanceof File) {
      const validatedImages = formSchema.shape.images.safeParse(images);
      if (!validatedImages.success) {
        return { success: false, message: "Invalid image files." };
      }

      // upload new images
      const uploadResults = await Promise.all(
        images.map(async image => {
          const url = await uploadImage(image, "products");
          return url;
        })
      );
      if (uploadResults.some(url => !url)) {
        return { success: false, message: "Failed to upload one or more product images." };
      }

      imagesUrls = uploadResults as string[];
    }

    // update the product with new data
    await prisma.product.update({
      where: {
        id,
      },
      data: {
        name,
        images: imagesUrls,
        description,
        price: BigInt(price),
        stock,
        brandId: Number(brandId),
        categoryId: Number(categoryId),
        locationId: Number(locationId),
      },
    });

    // delete old images if they are not in the new images list
    if (currentProduct.images && !isEqual(currentProduct.images, imagesUrls)) {
      await Promise.all(
        currentProduct.images.map(async image => {
          return await deleteImage(image);
        })
      );
    }
  } catch (error) {
    console.error("Error updating product:", error);
    return { success: false, message: "Failed to update product." };
  }

  revalidatePath("/admin/products");
  return { success: true, message: "Product updated successfully." };
}

export async function deleteProduct(id: string): Promise<ActionResult> {
  try {
    const product = await prisma.product.findFirst({
      where: {
        id,
      },
      select: {
        images: true,
      },
    });
    if (!product) {
      return { success: false, message: "Product not found." };
    }

    await prisma.product.delete({
      where: {
        id,
      },
    });

    if (product.images && product.images.length > 0) {
      await Promise.all(
        product.images.map(async image => {
          return await deleteImage(image);
        })
      );
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    return { success: false, message: "Failed to delete product." };
  }

  revalidatePath("/admin/products");
  return { success: true, message: "Product deleted successfully." };
}
