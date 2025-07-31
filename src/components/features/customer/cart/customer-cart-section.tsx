"use client";

import { useCartStore } from "@/providers/cart-store-provider";
import { formatCurrency } from "@/lib/utils";

export default function CustomerCartSection() {
  const { items } = useCartStore(state => state);

  return (
    <section id="cart" className="container mx-auto mt-[50px] flex max-w-[1130px] flex-col gap-5">
      {items.length > 0 ? (
        items.map(item => (
          <div
            className="product-total-card flex items-center justify-between rounded-[20px] border border-[#E5E5E5] bg-white p-5"
            key={item.product.id}
          >
            <div className="flex w-[340px] items-center gap-5">
              <div className="flex h-[70px] w-[120px] shrink-0 items-center justify-center overflow-hidden">
                <img
                  src={item.product.images[0]}
                  className="h-full w-full object-contain"
                  alt={item.product.name}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="leading-[22px] font-semibold">{item.product.name}</p>
                <p className="text-sm text-[#616369]">{item.product.category}</p>
              </div>
            </div>
            <div className="flex w-[150px] flex-col gap-1">
              <p className="text-sm text-[#616369]">Price</p>
              <p className="leading-[22px] font-semibold text-[#0D5CD7]">{formatCurrency(item.product.price)}</p>
            </div>
            <div className="flex w-[120px] flex-col gap-1">
              <p className="text-sm text-[#616369]">Quantity</p>
              <div className="flex items-center gap-3">
                <button className="flex h-6 w-6 shrink-0">
                  <img src="assets/icons/minus-cirlce.svg" alt="minus" loading="lazy" />
                </button>
                <p className="leading-[22px] font-semibold text-[#0D5CD7]">{item.quantity}</p>
                <button className="flex h-6 w-6 shrink-0">
                  <img src="assets/icons/add-circle.svg" alt="plus" loading="lazy" />
                </button>
              </div>
            </div>
            <div className="flex w-[150px] flex-col gap-1">
              <p className="text-sm text-[#616369]">Total</p>
              <p className="leading-[22px] font-semibold text-[#0D5CD7]">
                {formatCurrency(item.product.price * item.quantity)}
              </p>
            </div>
            <button className="rounded-full border border-[#E5E5E5] bg-white p-[12px_24px] text-center font-semibold">
              Remove
            </button>
          </div>
        ))
      ) : (
        <div className="flex h-64 items-center justify-center">
          <p className="text-lg text-gray-500">Your cart is empty</p>
        </div>
      )}
    </section>
  );
}
