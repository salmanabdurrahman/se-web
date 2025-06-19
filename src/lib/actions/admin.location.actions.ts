"use server";

import { revalidatePath } from "next/cache";
import { Location } from "@prisma/client";
import prisma from "../prisma";
import { z } from "zod/v4";
import { adminLocationSchema as formSchema, ActionResult } from "@/types/admin.location.types";

export async function getLocations(): Promise<Location[]> {
  try {
    const locations = await prisma.location.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });
    return locations;
  } catch (error) {
    console.error("Error fetching locations:", error);
    return [];
  }
}

export async function getLocationById(id: string): Promise<Location | null> {
  try {
    const location = await prisma.location.findFirst({
      where: {
        id: parseInt(id, 10),
      },
    });
    return location;
  } catch (error) {
    console.error("Error fetching location by ID:", error);
    return null;
  }
}

export async function createLocation(values: z.infer<typeof formSchema>): Promise<ActionResult> {
  const validatedFields = formSchema.safeParse(values);
  if (!validatedFields.success) {
    return { success: false, message: "Invalid form data." };
  }

  const { name } = validatedFields.data;

  try {
    const existingLocation = await prisma.location.findFirst({
      where: {
        name: { equals: name, mode: "insensitive" },
      },
    });

    if (existingLocation) {
      return { success: false, message: "Location with this name already exists." };
    }

    await prisma.location.create({
      data: {
        name: name,
      },
    });
  } catch (error) {
    console.error("Error creating location:", error);
    return { success: false, message: "Failed to create location." };
  }

  revalidatePath("/admin/locations");
  return { success: true, message: "Location created successfully." };
}

export async function updateLocation(id: number, values: z.infer<typeof formSchema>): Promise<ActionResult> {
  const validatedFields = formSchema.safeParse(values);
  if (!validatedFields.success) {
    return { success: false, message: "Invalid form data." };
  }

  const { name } = validatedFields.data;

  try {
    const existingLocation = await prisma.location.findFirst({
      where: {
        name: { equals: name, mode: "insensitive" },
        NOT: {
          id: id,
        },
      },
    });

    if (existingLocation) {
      return { success: false, message: "Another location with this name already exists." };
    }

    await prisma.location.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    });
  } catch (error) {
    console.error("Error updating location:", error);
    return { success: false, message: "Failed to update location." };
  }

  revalidatePath("/admin/locations");
  return { success: true, message: "Location updated successfully." };
}

export async function deleteLocation(id: number): Promise<ActionResult> {
  const existingLocation = await prisma.location.findFirst({
    where: {
      id,
    },
  });

  if (!existingLocation) {
    return { success: false, message: "Location not found." };
  }

  try {
    await prisma.location.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error("Error deleting location:", error);
    return { success: false, message: "Failed to delete location." };
  }

  revalidatePath("/admin/locations");
  return { success: true, message: "Location deleted successfully." };
}
