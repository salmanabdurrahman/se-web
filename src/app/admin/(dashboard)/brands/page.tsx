import { Metadata } from "next";
import { adminBrandColumns as columns } from "@/components/features/admin/brand/admin-brand-column";
import { AdminDataTable } from "@/components/ui/admin-data-table";
import { getBrands } from "@/lib/actions/admin.brand.actions";

export const metadata: Metadata = {
  title: "Admin Brands | SE",
  description: "Admin Brands",
};

export default async function AdminBrandsPage() {
  const data = await getBrands();

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">All Brands</h1>
      <AdminDataTable title="Brand" columns={columns} data={data} />
    </section>
  );
}
