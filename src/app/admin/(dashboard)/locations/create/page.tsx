import { Metadata } from "next";
import AdminCreateLocationForm from "@/components/features/location/admin/admin-create-location-form";

export const metadata: Metadata = {
  title: "Admin Create Location | SE",
  description: "Admin Create Location",
};

export default async function AdminCreateLocationPage() {
  return (
    <section className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">Create Location</h1>
      <AdminCreateLocationForm />
    </section>
  );
}
