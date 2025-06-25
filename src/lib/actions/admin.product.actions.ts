import prisma from "../prisma";
import { ProductWithRelations } from "@/types/admin.product.types";

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
