import { Metadata } from "next";
import { redirect } from "next/navigation";
import { validateRequest } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Admin Login | SE",
  description: "Admin Login Page",
};

export default async function AdminLoginLayout({ children }: { children: React.ReactNode }) {
  const { user } = await validateRequest();
  if (user && user.role === "superadmin") {
    return redirect("/admin");
  }

  return <main>{children}</main>;
}
