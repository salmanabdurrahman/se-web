import prisma from "../prisma";
import { CustomerProductWithRelations } from "@/types/customer.product.types";

export async function getPopularProducts(): Promise<CustomerProductWithRelations[]> {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        orders: {
          _count: "desc",
        },
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
      take: 10,
    });
    return products;
  } catch (error) {
    console.error("Error fetching popular products:", error);
    return [];
  }
}

export async function getLatestProducts(): Promise<CustomerProductWithRelations[]> {
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
      },
      take: 10,
    });
    return products;
  } catch (error) {
    console.error("Error fetching latest products:", error);
    return [];
  }
}
