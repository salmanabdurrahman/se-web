"use client";

import { createContext, ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";
import { CartStore, createCartStore } from "@/stores/cart-store";

export type CartStoreApi = ReturnType<typeof createCartStore>;

export const CartStoreContext = createContext<CartStoreApi | undefined>(undefined);

export interface CartStoreProviderProps {
  children: ReactNode;
}

export function CartStoreProvider({ children }: CartStoreProviderProps) {
  const storeRef = useRef<CartStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createCartStore();
  }

  return <CartStoreContext.Provider value={storeRef.current}>{children}</CartStoreContext.Provider>;
}

export function useCartStore<T>(selector: (store: CartStore) => T): T {
  const cartStoreContext = useContext(CartStoreContext);
  if (!cartStoreContext) {
    throw new Error("useCartStore must be used within a CartStoreProvider");
  }

  return useStore(cartStoreContext, selector);
}
