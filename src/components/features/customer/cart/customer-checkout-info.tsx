"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { useCartStore } from "@/providers/cart-store-provider";
import { formatCurrency } from "@/lib/utils";
import { createOrder } from "@/lib/actions/customer.order.actions";

export default function CustomerCheckoutInfo() {
  const { items, clearCart } = useCartStore(state => state);
  const grandTotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const router = useRouter();

  // bind the createOrder function with the current items in the cart
  const createOrderWithItems = createOrder.bind(null, items);
  const [state, action, pending] = useActionState(createOrderWithItems, undefined);

  useEffect(() => {
    if (state?.message && !state.success) {
      toast.error(state.message);
    }

    if (state?.success && state?.redirectUrl) {
      toast.success(state?.message || "Order placed successfully!");
      router.push(state.redirectUrl);
      clearCart();
    }
  }, [state, clearCart, router]);

  return (
    <form
      method="POST"
      action={action}
      id="checkout-info"
      className="container mx-auto mt-[50px] flex max-w-[1130px] justify-between gap-5 pb-[100px]"
    >
      <div className="flex h-fit w-[650px] shrink-0 flex-col gap-4">
        <h2 className="text-2xl leading-[34px] font-bold">Your Shipping Address</h2>
        <div className="flex flex-col gap-5 rounded-3xl border border-[#E5E5E5] bg-white p-[30px]">
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#FFC736]">
            <div className="flex shrink-0">
              <img src="/assets/icons/profile-circle.svg" alt="icon" loading="lazy" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full appearance-none font-semibold text-black outline-none placeholder:font-normal placeholder:text-[#616369]"
              placeholder="Write your real complete name"
              required
              autoFocus
            />
          </div>
          {state?.errors?.name && <p className="text-sm text-red-400">{state.errors.name[0]}</p>}
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#FFC736]">
            <div className="flex shrink-0">
              <img src="/assets/icons/house-2.svg" alt="icon" loading="lazy" />
            </div>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full appearance-none font-semibold text-black outline-none placeholder:font-normal placeholder:text-[#616369]"
              placeholder="Write your active house address"
              required
            />
          </div>
          {state?.errors?.address && <p className="text-sm text-red-400">{state.errors.address[0]}</p>}
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#FFC736]">
            <div className="flex shrink-0">
              <img src="/assets/icons/global.svg" alt="icon" loading="lazy" />
            </div>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full appearance-none font-semibold text-black outline-none placeholder:font-normal placeholder:text-[#616369]"
              placeholder="City"
              required
            />
          </div>
          {state?.errors?.city && <p className="text-sm text-red-400">{state.errors.city[0]}</p>}
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#FFC736]">
            <div className="flex shrink-0">
              <img src="/assets/icons/location.svg" alt="icon" loading="lazy" />
            </div>
            <input
              type="number"
              id="postalCode"
              name="postalCode"
              className="w-full appearance-none font-semibold text-black outline-none placeholder:font-normal placeholder:text-[#616369]"
              placeholder="Post code"
              required
            />
          </div>
          {state?.errors?.postalCode && <p className="text-sm text-red-400">{state.errors.postalCode[0]}</p>}
          <div className="flex items-start gap-[10px] rounded-[20px] border border-[#E5E5E5] p-[12px_20px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#FFC736]">
            <div className="flex shrink-0">
              <img src="/assets/icons/note.svg" alt="icon" loading="lazy" />
            </div>
            <textarea
              name="note"
              id="note"
              className="w-full resize-none appearance-none font-semibold text-black outline-none placeholder:font-normal placeholder:text-[#616369]"
              rows={6}
              placeholder="Additional notes for courier"
              defaultValue={""}
            />
          </div>
          {state?.errors?.note && <p className="text-sm text-red-400">{state.errors.note[0]}</p>}
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#FFC736]">
            <div className="flex shrink-0">
              <img src="/assets/icons/call.svg" alt="icon" loading="lazy" />
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full appearance-none font-semibold text-black outline-none placeholder:font-normal placeholder:text-[#616369]"
              placeholder="Write your phone number or whatsapp"
              required
            />
          </div>
          {state?.errors?.phone && <p className="text-sm text-red-400">{state.errors.phone[0]}</p>}
        </div>
      </div>
      <div className="flex h-fit flex-1 shrink-0 flex-col gap-4">
        <h2 className="text-2xl leading-[34px] font-bold">Payment Details</h2>
        <div className="flex w-full flex-col gap-[30px] rounded-3xl border border-[#E5E5E5] bg-white p-[30px]">
          <a href="">
            <div className="flex w-full items-center justify-between gap-2 rounded-3xl border border-[#E5E5E5] bg-white p-5">
              <div className="flex items-center gap-[10px]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFC736]">
                  <img src="/assets/icons/cake.svg" alt="icon" loading="lazy" />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-semibold">100% It's Original</p>
                  <p className="text-sm">We don't sell fake products</p>
                </div>
              </div>
              <div className="flex shrink-0">
                <img src="/assets/icons/arrow-right.svg" alt="icon" loading="lazy" />
              </div>
            </div>
          </a>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                  <img src="/assets/icons/tick-circle.svg" alt="icon" loading="lazy" />
                </div>
                <p>Sub Total</p>
              </div>
              <p className="font-semibold">{formatCurrency(grandTotal)}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                  <img src="/assets/icons/tick-circle.svg" alt="icon" loading="lazy" />
                </div>
                <p>Insurance 12%</p>
              </div>
              <p className="font-semibold">{formatCurrency(0)}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                  <img src="/assets/icons/tick-circle.svg" alt="icon" loading="lazy" />
                </div>
                <p>Shipping (Flat)</p>
              </div>
              <p className="font-semibold">{formatCurrency(0)}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                  <img src="/assets/icons/tick-circle.svg" alt="icon" loading="lazy" />
                </div>
                <p>Warranty Original</p>
              </div>
              <p className="font-semibold">{formatCurrency(0)}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                  <img src="/assets/icons/tick-circle.svg" alt="icon" loading="lazy" />
                </div>
                <p>PPN 11%</p>
              </div>
              <p className="font-semibold">{formatCurrency(0)}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Grand Total</p>
            <p className="text-[32px] leading-[48px] font-bold text-[#0D5CD7] underline">
              {formatCurrency(grandTotal)}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="rounded-full bg-[#0D5CD7] p-[12px_24px] text-center font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
              disabled={pending || items.length === 0}
            >
              {pending ? "Processing your order..." : "Checkout Now"}
            </button>
            <a
              href=""
              className="rounded-full border border-[#E5E5E5] bg-white p-[12px_24px] text-center font-semibold"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}
