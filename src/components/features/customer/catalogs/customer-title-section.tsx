"use client";

import { useEffect, useState } from "react";
import { useFilterStore } from "@/providers/filter-store-provider";
import useDebounce from "@/hooks/use-debounce";

export default function CustomerTitleSection() {
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search);
  const setFilterSearch = useFilterStore(state => state.setSearch);

  useEffect(() => {
    setFilterSearch(debouncedSearch);
  }, [debouncedSearch, setFilterSearch]);

  return (
    <div id="title" className="-mb-[100px] h-[150px] bg-[#EFF3FA]">
      <div className="container mx-auto flex max-w-[1130px] items-center justify-between">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl leading-9 font-bold">Our Product Catalog</h1>
        </div>
        <div className="flex w-full max-w-[480px] items-center gap-[10px] rounded-full border border-[#E5E5E5] bg-white p-[12px_20px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#FFC736]">
          <input
            type="text"
            id="search"
            name="search"
            className="w-full appearance-none font-semibold text-black outline-none placeholder:font-normal placeholder:text-[#616369]"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search product by name, brand, category"
            autoComplete="search"
          />
          <div className="flex shrink-0">
            <img src="assets/icons/search-normal.svg" alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
