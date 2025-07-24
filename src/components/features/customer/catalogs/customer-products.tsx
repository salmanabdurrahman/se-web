"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import { formatCurrency } from "@/lib/utils";
import { getFilteredProducts } from "@/lib/actions/customer.product.actions";
import { useFilterStore } from "@/providers/filter-store-provider";
import { CustomerProductWithRelations } from "@/types/customer.product.types";

interface CustomerProductsProps {
  initialProducts: CustomerProductWithRelations[];
}

export default function CustomerProducts({ initialProducts }: CustomerProductsProps) {
  const [products, setProducts] = useState<CustomerProductWithRelations[]>(initialProducts);
  const [isPending, startTransition] = useTransition();
  const filters = useFilterStore(state => state);

  useEffect(() => {
    startTransition(async () => {
      const newProducts = await getFilteredProducts(filters);
      setProducts(newProducts);
    });
  }, [filters]);

  if (isPending) {
    return (
      <div className="flex h-fit w-[780px] flex-col gap-[30px] rounded-[30px] border border-[#E5E5E5] bg-white p-[30px]">
        <h2 className="text-center text-2xl leading-[34px] font-bold">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="flex h-fit w-[780px] flex-col gap-[30px] rounded-[30px] border border-[#E5E5E5] bg-white p-[30px]">
      <h2 className="text-2xl leading-[34px] font-bold">Products</h2>
      <div className="grid grid-cols-3 gap-[30px]">
        {products.length > 0 ? (
          products.map(product => (
            <Link href={`/detail-product/${product.id}`} className="product-card" key={product.id}>
              <div className="flex w-full flex-col gap-[24px] rounded-[20px] bg-white p-5 ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
                <div className="flex h-[90px] w-full shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src={product.images[0]}
                    className="h-full w-full object-contain"
                    alt={product.name}
                    width={320}
                    height={70}
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-1">
                    <p className="leading-[22px] font-semibold">{product.name}</p>
                    <p className="text-sm text-[#616369]">{product.category.name}</p>
                  </div>
                  <p className="leading-[22px] font-semibold text-[#0D5CD7]">{formatCurrency(product.price)}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-3 text-center text-[#616369]">No products found</p>
        )}
      </div>
    </div>
  );
}
