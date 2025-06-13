import { Metadata } from "next";
import { columns } from "@/components/features/category/admin/admin-columns";
import { AdminDataTable } from "@/components/ui/admin-data-table";
import { adminDummyCategories } from "@/constants/dummy-data";

export const metadata: Metadata = {
  title: "Admin Categories | SE",
  description: "Admin Categories",
};

export default async function AdminCategoriesPage() {
  return (
    <section className="container mx-auto py-10">
      <AdminDataTable title="Category" columns={columns} data={adminDummyCategories} />
    </section>
  );
}
