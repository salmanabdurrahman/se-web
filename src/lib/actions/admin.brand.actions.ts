"use server";

import { revalidatePath } from "next/cache";
import { Brand } from "@prisma/client";
import prisma from "../prisma";
import { z } from "zod/v4";
import { uploadFile } from "../supabase";
import { ActionResult, adminBrandSchema as formSchema } from "@/types/admin.brand.types";

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

    const uploadedLogo = await uploadFile(logo, "brands");
    if (!uploadedLogo) {
      return { success: false, message: "Failed to upload brand logo." };
    }

    await prisma.brand.create({
      data: {
        name,
        logo: uploadedLogo.path,
      },
    });
  } catch (error) {
    console.error("Error creating brand:", error);
    return { success: false, message: "Failed to create brand." };
  }

  revalidatePath("/admin/brands");
  return { success: true, message: "Brand created successfully." };
}
