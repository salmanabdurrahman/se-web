import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";
import { CustomerProductWithRelations } from "@/types/customer.product.types";

interface CustomerNewReleaseProps {
  data: CustomerProductWithRelations[];
}

export default function CustomerNewRelease({ data }: CustomerNewReleaseProps) {
  return (
    <div id="new-release" className="flex flex-col gap-[30px]">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl leading-[34px] font-bold">
          New Releases <br /> From Official Stores
        </h2>
        <Link href="/catalogs" className="rounded-full border border-[#E5E5E5] p-[12px_24px] font-semibold">
          Explore All
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-[30px]">
        {data.map(product => (
          <Link href={`/detail-product/${product.id}`} className="product-card" key={product.id}>
            <div className="flex h-full w-full flex-col gap-[24px] rounded-[20px] bg-white p-5 ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
              <div className="flex h-[90px] w-full shrink-0 items-center justify-center overflow-hidden">
                <Image
                  src={product.images[0]}
                  className="h-full w-full object-contain"
                  alt="thumbnail"
                  width={320}
                  height={270}
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
        ))}
      </div>
    </div>
  );
}
