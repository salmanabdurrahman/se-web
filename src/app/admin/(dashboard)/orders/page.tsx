import { Metadata } from "next";
import { adminOrderColumns as columns } from "@/components/features/order/admin-order-column";
import { AdminDataTable } from "@/components/ui/admin-data-table";

export const metadata: Metadata = {
  title: "Admin Orders | SE",
  description: "Admin Orders",
};

export default async function AdminOrdersPage() {
  return (
    <section className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">All Orders</h1>
      <AdminDataTable title="Order" columns={columns} data={[]} isReadOnly />
    </section>
  );
}
