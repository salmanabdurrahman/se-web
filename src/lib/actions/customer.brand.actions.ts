import prisma from "../prisma";
import { CustomerBrand } from "@/types/customer.brand.types";

export async function getBrands(): Promise<CustomerBrand[]> {
  try {
    const brands = await prisma.brand.findMany({
      orderBy: {
        products: {
          _count: "desc",
        },
      },
      select: {
        id: true,
        name: true,
        logo: true,
      },
      take: 5,
    });
    return brands;
  } catch (error) {
    console.error("Error fetching brands:", error);
    return [];
  }
}
