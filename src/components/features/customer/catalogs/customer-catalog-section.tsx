import { getBrands } from "@/lib/actions/admin.brand.actions";
import { getCategories } from "@/lib/actions/admin.category.actions";
import { getLocations } from "@/lib/actions/admin.location.actions";
import CustomerProductFilters from "./customer-product-filters";
import CustomerProducts from "./customer-products";

export default async function CustomerCatalogSection() {
  const [categories, brands, locations] = await Promise.all([getCategories(), getBrands(), getLocations()]);

  return (
    <div id="catalog" className="container mx-auto mt-[50px] flex max-w-[1130px] gap-[30px] pb-[100px]">
      <CustomerProductFilters categories={categories} brands={brands} locations={locations} />
      <CustomerProducts />
    </div>
  );
}
