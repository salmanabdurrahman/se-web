import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getBrandById } from "@/lib/actions/admin.brand.actions";
import AdminEditBrandForm from "@/components/features/brand/admin/admin-edit-brand-form";

export const metadata: Metadata = {
  title: "Admin Edit Brand | SE",
  description: "Admin Edit Brand",
};

export default async function AdminEditBrandPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getBrandById(id);

  if (!data) {
    return redirect("/admin/brands");
  }

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">Edit Brand</h1>
      <AdminEditBrandForm initialData={data} />
    </section>
  );
}
