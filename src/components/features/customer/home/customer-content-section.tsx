import CustomerCategories from "@/components/features/customer/home/customer-categories";
import CustomerPicked from "@/components/features/customer/home/customer-picked";
import CustomerBrands from "@/components/features/customer/home/customer-brands";
import CustomerNewRelease from "@/components/features/customer/home/customer-new-release";
import { getCategories } from "@/lib/actions/customer.category.actions";
import { getBrands } from "@/lib/actions/customer.brand.actions";
import { getLatestProducts, getPopularProducts } from "@/lib/actions/customer.product.actions";

export default async function CustomerContentSection() {
  const [categories, popularProducts, brands, latestProducts] = await Promise.all([
    getCategories(),
    getPopularProducts(),
    getBrands(),
    getLatestProducts(),
  ]);

  return (
    <section id="content" className="container mx-auto flex max-w-[1130px] flex-col gap-[50px] pt-[50px] pb-[100px]">
      <CustomerCategories data={categories} />
      <CustomerPicked data={popularProducts} />
      <CustomerBrands data={brands} />
      <CustomerNewRelease data={latestProducts} />
    </section>
  );
}
