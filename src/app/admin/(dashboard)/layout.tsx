import { Metadata } from "next";
import { redirect } from "next/navigation";
import { validateRequest } from "@/lib/auth";
import AdminLayoutShell from "@/components/layouts/admin/admin-layout-shell.tsx";

export const metadata: Metadata = {
  title: "Admin Dashboard | SE",
  description: "Admin Dashboard",
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user } = await validateRequest();
  if (!user || user.role !== "superadmin") {
    return redirect("/admin/login");
  }

  return (
    <>
      <AdminLayoutShell>{children}</AdminLayoutShell>
    </>
  );
}
