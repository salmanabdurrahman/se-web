import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login | SE",
  description: "Admin Login Page",
};

export default function AdminLoginLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
