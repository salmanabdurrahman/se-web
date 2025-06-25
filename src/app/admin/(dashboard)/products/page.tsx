import { Metadata } from "next";
import { adminProductColumns as columns } from "@/components/features/product/admin/admin-product-column";
import { AdminDataTable } from "@/components/ui/admin-data-table";

export const metadata: Metadata = {
  title: "Admin Products | SE",
  description: "Admin Products",
};

export default function AdminProductsPage() {
  return (
    <section className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">All Products</h1>
      <AdminDataTable title="Product" columns={columns} data={[]} />
    </section>
  );
}
