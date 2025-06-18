"use server";

import { revalidatePath } from "next/cache";
import { Category } from "@prisma/client";
import prisma from "../prisma";
import { z } from "zod/v4";
import { adminCategorySchema as formSchema, ActionResult } from "@/types/admin.category.types";

export async function getCategories(): Promise<Category[]> {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function getCategoryById(id: string): Promise<Category | null> {
  try {
    const category = await prisma.category.findFirst({
      where: {
        id: parseInt(id, 10),
      },
    });
    return category;
  } catch (error) {
    console.error("Error fetching category by ID:", error);
    return null;
  }
}

export async function createCategory(values: z.infer<typeof formSchema>): Promise<ActionResult> {
  const validatedFields = formSchema.safeParse(values);
  if (!validatedFields.success) {
    return { success: false, message: "Invalid form data." };
  }

  const { name } = validatedFields.data;

  try {
    const existingCategory = await prisma.category.findFirst({
      where: {
        name: { equals: name, mode: "insensitive" },
      },
    });

    if (existingCategory) {
      return { success: false, message: "Category with this name already exists." };
    }

    await prisma.category.create({
      data: {
        name: name,
      },
    });
  } catch (error) {
    console.error("Error creating category:", error);
    return { success: false, message: "Failed to create category." };
  }

  revalidatePath("/admin/categories");
  return { success: true, message: "Category created successfully." };
}

export async function updateCategory(id: number, values: z.infer<typeof formSchema>): Promise<ActionResult> {
  const validatedFields = formSchema.safeParse(values);
  if (!validatedFields.success) {
    return { success: false, message: "Invalid form data." };
  }

  const { name } = validatedFields.data;

  try {
    const existingCategory = await prisma.category.findFirst({
      where: {
        name: { equals: name, mode: "insensitive" },
        NOT: {
          id: id,
        },
      },
    });

    if (existingCategory) {
      return { success: false, message: "Another category with this name already exists." };
    }

    await prisma.category.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    });
  } catch (error) {
    console.error("Error updating category:", error);
    return { success: false, message: "Failed to update category." };
  }

  revalidatePath("/admin/categories");
  return { success: true, message: "Category updated successfully." };
}
