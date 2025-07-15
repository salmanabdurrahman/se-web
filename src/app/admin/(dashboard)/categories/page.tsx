import { Metadata } from "next";
import { getCategories } from "@/lib/actions/admin.category.actions";
import { columns } from "@/components/features/admin/category/admin-columns";
import { AdminDataTable } from "@/components/ui/admin-data-table";
import { adminDummyCategories } from "@/constants/dummy-data";

export const metadata: Metadata = {
  title: "Admin Categories | SE",
  description: "Admin Categories",
};

export default async function AdminCategoriesPage() {
  const data = await getCategories();

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">All Categories</h1>
      <AdminDataTable title="Category" columns={columns} data={data} />
    </section>
  );
}
