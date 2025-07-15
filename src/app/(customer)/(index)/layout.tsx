import CustomerLayoutShell from "@/components/layouts/customer/customer-layout-shell";

interface CustomerLayoutProps {
  children: React.ReactNode;
}

export default function CustomerLayout({ children }: CustomerLayoutProps) {
  return <CustomerLayoutShell>{children}</CustomerLayoutShell>;
}
