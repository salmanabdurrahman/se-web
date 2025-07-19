import { FilterStoreProvider } from "@/providers/filter-store-provider";
import CustomerLayoutShell from "@/components/layouts/customer/customer-layout-shell";

interface CustomerLayoutProps {
  children: React.ReactNode;
}

export default function CustomerLayout({ children }: CustomerLayoutProps) {
  return (
    <CustomerLayoutShell>
      <FilterStoreProvider>{children}</FilterStoreProvider>
    </CustomerLayoutShell>
  );
}
