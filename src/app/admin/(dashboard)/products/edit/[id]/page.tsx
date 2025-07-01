import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getBrands } from "@/lib/actions/admin.brand.actions";
import { getCategories } from "@/lib/actions/admin.category.actions";
import { getLocations } from "@/lib/actions/admin.location.actions";
import { getProductById } from "@/lib/actions/admin.product.actions";
import AdminEditProductForm from "@/components/features/product/admin/admin-edit-product-form";

export const metadata: Metadata = {
  title: "Admin Edit Product | SE",
  description: "Admin Edit Product",
};

interface AdminEditProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function AdminEditProductPage({ params }: AdminEditProductPageProps) {
  const [brands, categories, locations] = await Promise.all([getBrands(), getCategories(), getLocations()]);
  const { id } = await params;
  const data = await getProductById(id);

  if (!data) {
    return redirect("/admin/products");
  }

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">Edit Product</h1>
      <AdminEditProductForm brands={brands} categories={categories} locations={locations} initialData={data} />
    </section>
  );
}
