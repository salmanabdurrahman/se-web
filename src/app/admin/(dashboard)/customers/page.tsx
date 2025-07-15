import { Metadata } from "next";
import { getOrders } from "@/lib/actions/admin.order.actions";
import { adminCustomerColumns as columns } from "@/components/features/admin/customer/admin-customer-column";
import { AdminDataTable } from "@/components/ui/admin-data-table";

export const metadata: Metadata = {
  title: "Admin Customers | SE",
  description: "Admin Customers",
};

export default async function AdminCustomersPage() {
  return (
    <section className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">All Customers</h1>
      <AdminDataTable title="Customer" columns={columns} data={[]} isReadOnly />
    </section>
  );
}
