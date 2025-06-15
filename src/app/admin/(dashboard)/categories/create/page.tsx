import { Metadata } from "next";
import AdminCreateCategoryForm from "@/components/features/category/admin/admin-create-category-form";

export const metadata: Metadata = {
  title: "Admin Create Category | SE",
  description: "Admin Create Category",
};

export default async function AdminCreateCategoryPage() {
  return (
    <section className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">Create Category</h1>
      <AdminCreateCategoryForm />
    </section>
  );
}
