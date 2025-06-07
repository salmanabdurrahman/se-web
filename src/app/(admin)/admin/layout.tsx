import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | SE",
  description: "Admin Dashboard",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
