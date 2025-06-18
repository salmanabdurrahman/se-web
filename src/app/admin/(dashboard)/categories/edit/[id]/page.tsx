import { Metadata } from "next";
import { redirect } from "next/navigation";
import AdminEditCategoryForm from "@/components/features/category/admin/admin-edit-category-form";
import { getCategoryById } from "@/lib/actions/admin.category.actions";

export const metadata: Metadata = {
  title: "Admin Edit Category | SE",
  description: "Admin Edit Category",
};

export default async function AdminEditCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getCategoryById(id);

  if (!data) {
    return redirect("/admin/categories");
  }

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">Edit Category</h1>
      <AdminEditCategoryForm initialData={data} />
    </section>
  );
}
