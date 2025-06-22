import { Brand } from "@prisma/client";
import prisma from "../prisma";

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
