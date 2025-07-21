"use client";

import { Brand, Category, Location } from "@prisma/client";
import { useFilterStore } from "@/providers/filter-store-provider";
import CustomerFilterSection from "./customer-filter-section";
import CustomerFilterCheckboxGroup from "./customer-filter-checkbox-group";
import { Button } from "@/components/ui/button";

interface CustomerProductFiltersProps {
  categories: Category[];
  brands: Brand[];
  locations: Location[];
}

export default function CustomerProductFilters({ categories, brands, locations }: CustomerProductFiltersProps) {
  const {
    minPrice,
    maxPrice,
    stocks,
    categories: selectedCategories,
    brands: selectedBrands,
    locations: selectedLocations,
    setPriceRange,
    toggleStock,
    toggleCategory,
    toggleBrand,
    toggleLocation,
    resetFilters,
  } = useFilterStore(state => state);

  return (
    <section className="flex h-fit flex-1 flex-col gap-5 rounded-[30px] border border-[#E5E5E5] bg-white p-[30px]">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl leading-[34px] font-bold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={resetFilters}>
          Reset All
        </Button>
      </div>
      <CustomerFilterSection title="Price Range">
        <div className="flex w-full max-w-[480px] items-center gap-[10px] rounded-full border border-[#E5E5E5] bg-white p-[12px_20px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#FFC736]">
          <div className="flex shrink-0">
            <img src="assets/icons/dollar-circle.svg" alt="icon" />
          </div>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            className="w-full appearance-none font-semibold text-black outline-none placeholder:font-normal placeholder:text-[#616369]"
            value={minPrice ?? ""}
            onChange={e => setPriceRange(Number(e.target.value) || null, maxPrice)}
            placeholder="Minimum price"
          />
        </div>
        <div className="flex w-full max-w-[480px] items-center gap-[10px] rounded-full border border-[#E5E5E5] bg-white p-[12px_20px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#FFC736]">
          <div className="flex shrink-0">
            <img src="assets/icons/dollar-circle.svg" alt="icon" />
          </div>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            className="w-full appearance-none font-semibold text-black outline-none placeholder:font-normal placeholder:text-[#616369]"
            value={maxPrice ?? ""}
            onChange={e => setPriceRange(minPrice, Number(e.target.value) || null)}
            placeholder="Maximum price"
          />
        </div>
      </CustomerFilterSection>
      <CustomerFilterSection title="Stocks">
        <label className="flex items-center gap-3 font-semibold" htmlFor="stockPreOrder">
          <input
            type="checkbox"
            id="stockPreOrder"
            name="stock"
            value="pre_order"
            className="flex h-6 w-6 shrink-0 appearance-none rounded-md ring-1 ring-[#0D5CD7] checked:border-[3px] checked:border-solid checked:border-white checked:bg-[#0D5CD7]"
            checked={stocks.includes("pre_order")}
            onChange={() => toggleStock("pre_order")}
          />
          <span>Pre Order</span>
        </label>
        <label className="flex items-center gap-3 font-semibold" htmlFor="stockReady">
          <input
            type="checkbox"
            id="stockReady"
            name="stock"
            value="ready"
            className="flex h-6 w-6 shrink-0 appearance-none rounded-md ring-1 ring-[#0D5CD7] checked:border-[3px] checked:border-solid checked:border-white checked:bg-[#0D5CD7]"
            checked={stocks.includes("ready")}
            onChange={() => toggleStock("ready")}
          />
          <span>Ready Stock</span>
        </label>
      </CustomerFilterSection>
      <CustomerFilterSection title="Categories">
        <CustomerFilterCheckboxGroup
          items={categories}
          name="category"
          selectedItems={selectedCategories}
          onToggle={toggleCategory}
        />
      </CustomerFilterSection>
      <CustomerFilterSection title="Brands">
        <CustomerFilterCheckboxGroup
          items={brands}
          name="brand"
          selectedItems={selectedBrands}
          onToggle={toggleBrand}
        />
      </CustomerFilterSection>
      <CustomerFilterSection title="Locations">
        <CustomerFilterCheckboxGroup
          items={locations}
          name="location"
          selectedItems={selectedLocations}
          onToggle={toggleLocation}
        />
      </CustomerFilterSection>
    </section>
  );
}
