"use server";

import prisma from "../prisma";
import { OrderWithRelations } from "@/types/admin.order.types";

export async function getOrders(): Promise<OrderWithRelations[]> {
  try {
    const orders = await prisma.order.findMany({
      orderBy: {
        updatedAt: "desc",
      },
      include: {
        detail: {
          select: {
            name: true,
            city: true,
          },
        },
        products: {
          select: {
            product: {
              select: {
                id: true,
                name: true,
                images: true,
              },
            },
          },
        },
      },
    });
    return orders;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
}
