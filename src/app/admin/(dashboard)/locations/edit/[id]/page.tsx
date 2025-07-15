import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getLocationById } from "@/lib/actions/admin.location.actions";
import AdminEditLocationForm from "@/components/features/admin/location/admin-edit-location-form";

export const metadata: Metadata = {
  title: "Admin Edit Location | SE",
  description: "Admin Edit Location",
};

export default async function AdminEditLocationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getLocationById(id);

  if (!data) {
    return redirect("/admin/locations");
  }

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">Edit Location</h1>
      <AdminEditLocationForm initialData={data} />
    </section>
  );
}
