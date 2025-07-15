import CustomerNav from "./customer-nav";

interface CustomerLayoutShellProps {
  children: React.ReactNode;
}

export default function CustomerLayoutShell({ children }: CustomerLayoutShellProps) {
  return (
    <>
      <CustomerNav />
      {children}
    </>
  );
}
