import CustomerCategories from "@/components/features/customer/home/customer-categories";
import CustomerPicked from "@/components/features/customer/home/customer-picked";
import CustomerBrands from "@/components/features/customer/home/customer-brands";
import CustomerNewRelease from "@/components/features/customer/home/customer-new-release";
import { getCategories } from "@/lib/actions/customer.category.actions";

export default async function CustomerContentSection() {
  const [categories] = await Promise.all([getCategories()]);

  return (
    <section id="content" className="container mx-auto flex max-w-[1130px] flex-col gap-[50px] pt-[50px] pb-[100px]">
      <CustomerCategories data={categories} />
      <CustomerPicked />
      <CustomerBrands />
      <CustomerNewRelease />
    </section>
  );
}
