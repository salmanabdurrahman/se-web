import { UserRole } from "@prisma/client";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

const adminData = {
  name: "Super Admin",
  email: "superadmin@simpleecommerce.com",
  password: bcrypt.hashSync("admin123", 10),
  role: UserRole.superadmin,
};

export async function seed() {
  await prisma.user.create({
    data: adminData,
  });
}

seed();
