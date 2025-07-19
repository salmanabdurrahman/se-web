"use client";

import { createContext, ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";
import { createFilterStore, FilterStore } from "@/stores/filter-store";

export type FilterStoreApi = ReturnType<typeof createFilterStore>;

export const FilterStoreContext = createContext<FilterStoreApi | undefined>(undefined);

export interface FilterStoreProviderProps {
  children: ReactNode;
}

export function FilterStoreProvider({ children }: FilterStoreProviderProps) {
  const storeRef = useRef<FilterStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createFilterStore();
  }

  return <FilterStoreContext.Provider value={storeRef.current}>{children}</FilterStoreContext.Provider>;
}

export default function useFilterStore<T>(selector: (store: FilterStore) => T): T {
  const filterStoreContext = useContext(FilterStoreContext);
  if (!filterStoreContext) {
    throw new Error("useFilterStore must be used within a FilterStoreProvider");
  }

  return useStore(filterStoreContext, selector);
}
