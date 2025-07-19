import CustomerProductFilters from "./customer-product-filters";
import CustomerProducts from "./customer-products";

export default function CustomerCatalogSection() {
  return (
    <div id="catalog" className="container mx-auto mt-[50px] flex max-w-[1130px] gap-[30px] pb-[100px]">
      <CustomerProductFilters />
      <CustomerProducts />
    </div>
  );
}
