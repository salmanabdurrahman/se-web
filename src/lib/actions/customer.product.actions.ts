"use server";

import prisma from "../prisma";
import { Prisma } from "@prisma/client";
import { FilterState } from "@/stores/filter-store";
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

export async function getFilteredProducts(
  filter: FilterState,
  take: number = 9
): Promise<CustomerProductWithRelations[]> {
  try {
    const whereClause: Prisma.ProductWhereInput = {
      AND: [
        filter.search.trim() !== ""
          ? {
              OR: [
                {
                  name: {
                    contains: filter.search,
                    mode: "insensitive",
                  },
                },
                {
                  brand: {
                    name: {
                      contains: filter.search,
                      mode: "insensitive",
                    },
                  },
                },
                {
                  category: {
                    name: {
                      contains: filter.search,
                      mode: "insensitive",
                    },
                  },
                },
              ],
            }
          : {},

        filter.minPrice && filter.minPrice !== 0
          ? {
              price: {
                gte: filter.minPrice,
              },
            }
          : {},

        filter.maxPrice && filter.maxPrice !== 0
          ? {
              price: {
                lte: filter.maxPrice,
              },
            }
          : {},

        filter.stocks.length > 0
          ? {
              stock: {
                in: filter.stocks,
              },
            }
          : {},

        filter.categories.length > 0
          ? {
              categoryId: {
                in: filter.categories,
              },
            }
          : {},

        filter.brands.length > 0
          ? {
              brandId: {
                in: filter.brands,
              },
            }
          : {},

        filter.locations.length > 0
          ? {
              locationId: {
                in: filter.locations,
              },
            }
          : {},
      ],
    };

    const products = prisma.product.findMany({
      where: whereClause,
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
      take,
    });
    return products;
  } catch (error) {
    console.error("Error fetching filtered products:", error);
    return [];
  }
}
