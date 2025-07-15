import CustomerCategories from "@/components/features/customer/home/customer-categories";
import CustomerPicked from "@/components/features/customer/home/customer-picked";
import CustomerBrands from "@/components/features/customer/home/customer-brands";
import CustomerNewRelease from "@/components/features/customer/home/customer-new-release";

export default function CustomerContentSection() {
  return (
    <section id="content" className="container mx-auto flex max-w-[1130px] flex-col gap-[50px] pt-[50px] pb-[100px]">
      <CustomerCategories />
      <CustomerPicked />
      <CustomerBrands />
      <CustomerNewRelease />
    </section>
  );
}
