import Image from "next/image";
import Link from "next/link";

export default function CustomerPicked() {
  return (
    <div id="picked" className="flex flex-col gap-[30px]">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl leading-[34px] font-bold">
          Most Picked <br /> Quality Products
        </h2>
        <Link href="catalog.html" className="rounded-full border border-[#E5E5E5] p-[12px_24px] font-semibold">
          Explore All
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-[30px]">
        <Link href="details.html" className="product-card">
          <div className="flex w-full flex-col gap-[24px] rounded-[20px] bg-white p-5 ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
            <div className="flex h-[90px] w-full shrink-0 items-center justify-center overflow-hidden">
              <Image
                src="/assets/images/thumbnails/color_back_green__buxxfjccqjzm_large_2x-Photoroom 1.png"
                className="h-full w-full object-contain"
                alt="thumbnail"
                width={320}
                height={270}
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-1">
                <p className="leading-[22px] font-semibold">iMac Green Energy</p>
                <p className="text-sm text-[#616369]">Desktops</p>
              </div>
              <p className="leading-[22px] font-semibold text-[#0D5CD7]">Rp 24.000.000</p>
            </div>
          </div>
        </Link>
        <Link href="details.html" className="product-card">
          <div className="flex w-full flex-col gap-[24px] rounded-[20px] bg-white p-5 ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
            <div className="flex h-[90px] w-full shrink-0 items-center justify-center overflow-hidden">
              <Image
                src="/assets/images/thumbnails/iphone15pro-digitalmat-gallery-3-202309-Photoroom 1.png"
                className="h-full w-full object-contain"
                alt="thumbnail"
                width={220}
                height={270}
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-1">
                <p className="leading-[22px] font-semibold">Smartwei Pro 18</p>
                <p className="text-sm text-[#616369]">Phones</p>
              </div>
              <p className="leading-[22px] font-semibold text-[#0D5CD7]">Rp 11.000.000</p>
            </div>
          </div>
        </Link>
        <Link href="details.html" className="product-card">
          <div className="flex w-full flex-col gap-[24px] rounded-[20px] bg-white p-5 ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
            <div className="flex h-[90px] w-full shrink-0 items-center justify-center overflow-hidden">
              <Image
                src="/assets/images/banners/mba13-m2-digitalmat-gallery-1-202402-Photoroom 2.png"
                className="h-full w-full object-contain"
                alt="thumbnail"
                width={176}
                height={1080}
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-1">
                <p className="leading-[22px] font-semibold">MacBook Pro X</p>
                <p className="text-sm text-[#616369]">Laptops</p>
              </div>
              <p className="leading-[22px] font-semibold text-[#0D5CD7]">Rp 24.000.000</p>
            </div>
          </div>
        </Link>
        <Link href="details.html" className="product-card">
          <div className="flex w-full flex-col gap-[24px] rounded-[20px] bg-white p-5 ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
            <div className="flex h-[90px] w-full shrink-0 items-center justify-center overflow-hidden">
              <Image
                src="/assets/images/thumbnails/airpods-max-select-skyblue-202011-Photoroom 1.png"
                className="h-full w-full object-contain"
                alt="thumbnail"
                width={364}
                height={270}
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-1">
                <p className="leading-[22px] font-semibold">Tuli Nyaman</p>
                <p className="text-sm text-[#616369]">Headsets</p>
              </div>
              <p className="leading-[22px] font-semibold text-[#0D5CD7]">Rp 3.500.000.000</p>
            </div>
          </div>
        </Link>
        <Link href="details.html" className="product-card">
          <div className="flex w-full flex-col gap-[24px] rounded-[20px] bg-white p-5 ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
            <div className="flex h-[90px] w-full shrink-0 items-center justify-center overflow-hidden">
              <Image
                src="/assets/images/thumbnails/imac24-digitalmat-gallery-1-202310-Photoroom 1.png"
                className="h-full w-full object-contain"
                alt="thumbnail"
                width={364}
                height={270}
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-1">
                <p className="leading-[22px] font-semibold">Warna iMac Jadi</p>
                <p className="text-sm text-[#616369]">Desktops</p>
              </div>
              <p className="leading-[22px] font-semibold text-[#0D5CD7]">Rp 89.000.000</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
