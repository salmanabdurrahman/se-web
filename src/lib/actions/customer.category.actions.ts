"use server";

import prisma from "../prisma";
import { CustomerCategoryWithRelations } from "@/types/customer.category.types";

export async function getCategories(): Promise<CustomerCategoryWithRelations[]> {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        products: {
          _count: "desc",
        },
      },
      include: {
        _count: {
          select: {
            products: true,
          },
        },
      },
      take: 8, // limit to 8 categories
    });
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
