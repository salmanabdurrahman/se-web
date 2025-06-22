"use server";

import { Brand } from "@prisma/client";
import prisma from "../prisma";
import { z } from "zod/v4";
import { adminBrandSchema as formSchema } from "@/types/admin.brand.types";

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

export async function createBrand(values: z.infer<typeof formSchema>) {
  console.log(values);
}
