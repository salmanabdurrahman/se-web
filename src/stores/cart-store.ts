import { createStore } from "zustand/vanilla";

export type CartItem = {
  product: {
    id: number;
    name: string;
    price: number;
    images: string[];
    category: string;
  };
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};

export type CartActions = {
  addItem: (item: CartItem) => void;
  removeItem: (productId: number) => void;
  updateItemQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
};

export type CartStore = CartState & CartActions;

export const defaultInitState: CartState = {
  items: [],
};

export function createCartStore(initState: CartState = defaultInitState) {
  return createStore<CartStore>()(set => ({
    ...initState,

    addItem: item =>
      set(state => {
        const existingItem = state.items.find(i => i.product.id === item.product.id);
        if (existingItem) {
          return {
            items: state.items.map(i =>
              i.product.id === item.product.id ? { ...i, quantity: i.quantity + item.quantity } : i
            ),
          };
        }
        return { items: [...state.items, item] };
      }),

    removeItem: productId => set(state => ({ items: state.items.filter(i => i.product.id !== productId) })),

    updateItemQuantity: (productId, quantity) =>
      set(state => ({
        items: state.items.map(i => (i.product.id === productId ? { ...i, quantity } : i)).filter(i => i.quantity > 0),
      })),

    clearCart: () => set(() => ({ ...defaultInitState })),
  }));
}
