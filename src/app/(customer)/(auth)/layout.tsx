import { redirect } from "next/navigation";
import { validateRequest } from "@/lib/auth";

interface CustomerAuthLayoutProps {
  children: React.ReactNode;
}

export default async function CustomerAuthLayout({ children }: CustomerAuthLayoutProps) {
  const { user } = await validateRequest();
  if (user && user.role === "customer") return redirect("/");

  return <>{children}</>;
}
