import { UserRole } from "@prisma/client";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

const adminData = {
  name: "Super Admin",
  email: "superadmin@simpleecommerce.com",
  password: await bcrypt.hash("admin123", 10),
  role: UserRole.superadmin,
};

const initialCategories = [
  {
    name: "Electronics",
    createdAt: new Date("2025-05-10T10:00:00Z"),
    updatedAt: new Date("2025-05-10T10:00:00Z"),
  },
  {
    name: "Men's Clothing",
    createdAt: new Date("2025-05-11T11:30:00Z"),
    updatedAt: new Date("2025-05-11T11:30:00Z"),
  },
  {
    name: "Women's Clothing",
    createdAt: new Date("2025-05-12T09:45:00Z"),
    updatedAt: new Date("2025-05-12T09:45:00Z"),
  },
  {
    name: "Health & Beauty",
    createdAt: new Date("2025-05-15T14:00:00Z"),
    updatedAt: new Date("2025-05-15T14:00:00Z"),
  },
  {
    name: "Books & Stationery",
    createdAt: new Date("2025-05-20T16:20:00Z"),
    updatedAt: new Date("2025-05-20T16:20:00Z"),
  },
  {
    name: "Sports & Outdoor",
    createdAt: new Date("2025-06-01T08:00:00Z"),
    updatedAt: new Date("2025-06-01T08:00:00Z"),
  },
  {
    name: "Toys & Hobbies",
    createdAt: new Date("2025-06-05T18:00:00Z"),
    updatedAt: new Date("2025-06-05T18:00:00Z"),
  },
  {
    name: "Food & Beverages",
    createdAt: new Date("2025-06-10T12:00:00Z"),
    updatedAt: new Date("2025-06-10T12:00:00Z"),
  },
  {
    name: "Household Appliances",
    createdAt: new Date("2025-06-12T09:00:00Z"),
    updatedAt: new Date("2025-06-12T09:00:00Z"),
  },
  {
    name: "Accessories",
    createdAt: new Date("2025-06-15T15:30:00Z"),
    updatedAt: new Date("2025-06-15T15:30:00Z"),
  },
  {
    name: "Computers & Laptops",
    createdAt: new Date("2025-06-18T10:45:00Z"),
    updatedAt: new Date("2025-06-18T10:45:00Z"),
  },
  {
    name: "Phones & Tablets",
    createdAt: new Date("2025-06-20T13:00:00Z"),
    updatedAt: new Date("2025-06-20T13:00:00Z"),
  },
  {
    name: "Baby Products",
    createdAt: new Date("2025-06-22T08:30:00Z"),
    updatedAt: new Date("2025-06-22T08:30:00Z"),
  },
  {
    name: "Automotive",
    createdAt: new Date("2025-06-25T17:00:00Z"),
    updatedAt: new Date("2025-06-25T17:00:00Z"),
  },
  {
    name: "Kitchen Utensils",
    createdAt: new Date("2025-06-28T11:15:00Z"),
    updatedAt: new Date("2025-06-28T11:15:00Z"),
  },
];

export async function seed() {
  await prisma.user.create({
    data: adminData,
  });

  await prisma.category.createMany({
    data: initialCategories,
    skipDuplicates: true,
  });
}

seed();
