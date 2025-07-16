import Image from "next/image";
import Link from "next/link";
import { CustomerBrand } from "@/types/customer.brand.types";

interface CustomerBrandProps {
  data: CustomerBrand[];
}

export default function CustomerBrands({ data }: CustomerBrandProps) {
  return (
    <div id="brands" className="flex flex-col gap-[30px]">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl leading-[34px] font-bold">
          Explore Our <br /> Popular Brands
        </h2>
        <Link href="catalog.html" className="rounded-full border border-[#E5E5E5] p-[12px_24px] font-semibold">
          Explore All
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-[30px]">
        {data.map(brand => (
          <Link href="" className="logo-card" key={brand.id}>
            <div className="flex w-full items-center justify-center rounded-[20px] bg-white p-[30px_20px] ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
              <div className="flex h-[30px] w-full shrink-0 items-center justify-center overflow-hidden">
                <Image
                  src={brand.logo}
                  className="h-full w-full object-contain"
                  alt={brand.name}
                  width={300}
                  height={200}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
