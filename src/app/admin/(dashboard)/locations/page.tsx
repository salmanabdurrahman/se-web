import { Metadata } from "next";
import { getLocations } from "@/lib/actions/admin.location.actions";
import { AdminDataTable } from "@/components/ui/admin-data-table";
import { adminLocationColumns as columns } from "@/components/features/admin/location/admin-location-column";

export const metadata: Metadata = {
  title: "Admin Locations | SE",
  description: "Admin Locations",
};

export default async function AdminLocationsPage() {
  const data = await getLocations();

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">All Locations</h1>
      <AdminDataTable title="Location" columns={columns} data={data} />
    </section>
  );
}
