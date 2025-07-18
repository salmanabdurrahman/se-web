import { validateRequest } from "@/lib/auth";
import CustomerNav from "./customer-nav";

interface CustomerLayoutShellProps {
  children: React.ReactNode;
}

export default async function CustomerLayoutShell({ children }: CustomerLayoutShellProps) {
  const { user } = await validateRequest();

  return (
    <>
      <CustomerNav user={user} />
      {children}
    </>
  );
}
