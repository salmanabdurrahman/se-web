import { Metadata } from "next";
import { AdminDataTable } from "@/components/features/category/admin/admin-data-table";
import { columns } from "@/components/features/category/admin/admin-columns";
import { adminDummyCategories } from "@/constants/dummy-data";

export const metadata: Metadata = {
  title: "Admin Categories | SE",
  description: "Admin Categories",
};

export default async function AdminCategoriesPage() {
  return (
    <section className="container mx-auto py-10">
      <AdminDataTable columns={columns} data={adminDummyCategories} />
    </section>
  );
}
