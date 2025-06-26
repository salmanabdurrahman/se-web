import { Metadata } from "next";
import AdminCreateProductForm from "@/components/features/product/admin/admin-create-product-form";

export const metadata: Metadata = {
  title: "Admin Create Product | SE",
  description: "Admin Create Product",
};

export default async function AdminCreateProductPage() {
  return (
    <section className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">Create Product</h1>
      <AdminCreateProductForm />
    </section>
  );
}
