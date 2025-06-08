import { Metadata } from "next";
import AdminLayoutShell from "@/components/layouts/admin/admin-layout-shell.tsx";

export const metadata: Metadata = {
  title: "Admin Dashboard | SE",
  description: "Admin Dashboard",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <AdminLayoutShell>{children}</AdminLayoutShell>
    </main>
  );
}
