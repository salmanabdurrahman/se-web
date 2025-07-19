import { createStore } from "zustand/vanilla";
import { ProductStock } from "@prisma/client";

export type FilterState = {
  search: string;
  minPrice: number | null;
  maxPrice: number | null;
  stocks: ProductStock[];
  categories: number[];
  brands: number[];
  locations: number[];
};

export type FilterActions = {
  setSearch: (search: string) => void;
  setPriceRange: (minPrice: number | null, maxPrice: number | null) => void;
  toggleStock: (stock: ProductStock) => void;
  toggleCategory: (categoryId: number) => void;
  toggleBrand: (brandId: number) => void;
  toggleLocation: (locationId: number) => void;
  resetFilters: () => void;
};

export type FilterStore = FilterState & FilterActions;

export const defaultInitState: FilterState = {
  search: "",
  minPrice: null,
  maxPrice: null,
  stocks: [],
  categories: [],
  brands: [],
  locations: [],
};

export function createFilterStore(initState: FilterState = defaultInitState) {
  return createStore<FilterStore>()(set => ({
    ...initState,

    setSearch: search => set(state => ({ ...state, search })),

    setPriceRange: (minPrice, maxPrice) => set(state => ({ ...state, minPrice, maxPrice })),

    toggleStock: stock =>
      set(state => {
        const stocks = state.stocks.includes(stock) ? state.stocks.filter(s => s !== stock) : [...state.stocks, stock];
        return { ...state, stocks };
      }),

    toggleCategory: categoryId =>
      set(state => {
        const categories = state.categories.includes(categoryId)
          ? state.categories.filter(id => id !== categoryId)
          : [...state.categories, categoryId];
        return { ...state, categories };
      }),

    toggleBrand: brandId =>
      set(state => {
        const brands = state.brands.includes(brandId)
          ? state.brands.filter(id => id !== brandId)
          : [...state.brands, brandId];
        return { ...state, brands };
      }),

    toggleLocation: locationId =>
      set(state => {
        const locations = state.locations.includes(locationId)
          ? state.locations.filter(id => id !== locationId)
          : [...state.locations, locationId];
        return { ...state, locations };
      }),

    resetFilters: () => set(() => ({ ...defaultInitState })),
  }));
}
