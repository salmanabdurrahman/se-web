import { Metadata } from "next";
import { getBrands } from "@/lib/actions/admin.brand.actions";
import { getCategories } from "@/lib/actions/admin.category.actions";
import { getLocations } from "@/lib/actions/admin.location.actions";
import AdminCreateProductForm from "@/components/features/admin/product/admin-create-product-form";

export const metadata: Metadata = {
  title: "Admin Create Product | SE",
  description: "Admin Create Product",
};

export default async function AdminCreateProductPage() {
  const [brands, categories, locations] = await Promise.all([getBrands(), getCategories(), getLocations()]);

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">Create Product</h1>
      <AdminCreateProductForm brands={brands} categories={categories} locations={locations} />
    </section>
  );
}
