import { getBrands } from "@/lib/actions/admin.brand.actions";
import { getCategories } from "@/lib/actions/admin.category.actions";
import { getLocations } from "@/lib/actions/admin.location.actions";
import { getFilteredProducts } from "@/lib/actions/customer.product.actions";
import { defaultInitState } from "@/stores/filter-store";
import CustomerProductFilters from "./customer-product-filters";
import CustomerProducts from "./customer-products";

export default async function CustomerCatalogSection() {
  const [categories, brands, locations, products] = await Promise.all([
    getCategories(),
    getBrands(),
    getLocations(),
    getFilteredProducts(defaultInitState),
  ]);

  return (
    <div id="catalog" className="container mx-auto mt-[50px] flex max-w-[1130px] gap-[30px] pb-[100px]">
      <CustomerProductFilters categories={categories} brands={brands} locations={locations} />
      <CustomerProducts initialProducts={products} />
    </div>
  );
}
