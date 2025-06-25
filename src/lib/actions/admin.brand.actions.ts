"use server";

import { revalidatePath } from "next/cache";
import { Brand } from "@prisma/client";
import prisma from "../prisma";
import { z } from "zod/v4";
import { deleteImage, uploadImage } from "../supabase";
import {
  ActionResult,
  adminBrandSchema as formSchema,
  adminEditBrandSchema as editFormSchema,
} from "@/types/admin.brand.types";

export async function getBrands(): Promise<Brand[]> {
  try {
    const brands = await prisma.brand.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });
    return brands;
  } catch (error) {
    console.error("Error fetching brands:", error);
    return [];
  }
}

export async function getBrandById(id: string): Promise<Brand | null> {
  try {
    const brand = await prisma.brand.findFirst({
      where: {
        id: Number.parseInt(id, 10),
      },
    });
    return brand;
  } catch (error) {
    console.error("Error fetching brand by ID:", error);
    return null;
  }
}

export async function createBrand(values: z.infer<typeof formSchema>): Promise<ActionResult> {
  const validatedFields = formSchema.safeParse(values);
  if (!validatedFields.success) {
    return { success: false, message: "Invalid form data." };
  }

  const { name, logo } = validatedFields.data;

  try {
    const existingBrand = await prisma.brand.findFirst({
      where: {
        name: { equals: name, mode: "insensitive" },
      },
    });

    if (existingBrand) {
      return { success: false, message: "Brand name already exists." };
    }

    const logoUrl = await uploadImage(logo, "brands");
    if (!logoUrl) {
      return { success: false, message: "Failed to upload brand logo." };
    }

    await prisma.brand.create({
      data: {
        name,
        logo: logoUrl,
      },
    });
  } catch (error) {
    console.error("Error creating brand:", error);
    return { success: false, message: "Failed to create brand." };
  }

  revalidatePath("/admin/brands");
  return { success: true, message: "Brand created successfully." };
}

export async function updateBrand(id: number, values: z.infer<typeof editFormSchema>): Promise<ActionResult> {
  const validatedFields = editFormSchema.safeParse(values);
  if (!validatedFields.success) {
    return { success: false, message: "Invalid form data." };
  }

  const { name, logo } = validatedFields.data;

  try {
    const existingBrand = await prisma.brand.findFirst({
      where: {
        name: { equals: name, mode: "insensitive" },
        NOT: {
          id,
        },
      },
    });

    if (existingBrand) {
      return { success: false, message: "Another brand with this name already exists." };
    }

    const currentBrand = await prisma.brand.findFirst({
      where: {
        id,
      },
    });

    if (!currentBrand) {
      return { success: false, message: "Brand not found." };
    }

    let logoUrl = currentBrand.logo;
    if (logo && logo instanceof File) {
      const uploadResult = await uploadImage(logo, "brands");

      if (!uploadResult) {
        return { success: false, message: "Failed to upload brand logo." };
      }

      logoUrl = uploadResult;

      if (currentBrand.logo && currentBrand.logo !== logoUrl) {
        await deleteImage(currentBrand.logo);
      }
    }

    await prisma.brand.update({
      where: {
        id,
      },
      data: {
        name,
        logo: logoUrl,
      },
    });
  } catch (error) {
    console.error("Error updating brand:", error);
    return { success: false, message: "Failed to update brand." };
  }

  revalidatePath("/admin/brands");
  return { success: true, message: "Brand updated successfully." };
}

export async function deleteBrand(id: number): Promise<ActionResult> {
  try {
    const brand = await prisma.brand.findFirst({
      where: {
        id,
      },
      select: {
        logo: true,
      },
    });

    if (!brand) {
      return { success: false, message: "Brand not found." };
    }

    if (brand && brand.logo) {
      await deleteImage(brand.logo);
    }

    await prisma.brand.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error("Error deleting brand:", error);
    return { success: false, message: "Failed to delete brand." };
  }

  revalidatePath("/admin/brands");
  return { success: true, message: "Brand deleted successfully." };
}
