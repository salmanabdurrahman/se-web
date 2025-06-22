import { Metadata } from "next";
import AdminCreateBrandForm from "@/components/features/brand/admin/admin-create-brand-form";

export const metadata: Metadata = {
  title: "Admin Create Brand | SE",
  description: "Admin Create Brand",
};

export default function AdminCreateBrandPage() {
  return (
    <section className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">Create Brand</h1>
      <AdminCreateBrandForm />
    </section>
  );
}
