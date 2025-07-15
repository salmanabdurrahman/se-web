import Image from "next/image";
import Link from "next/link";

export default function CustomerBrands() {
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
        <Link href="/" className="logo-card">
          <div className="flex w-full items-center justify-center rounded-[20px] bg-white p-[30px_20px] ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
            <div className="flex h-[30px] w-full shrink-0 items-center justify-center overflow-hidden">
              <Image
                src="/assets/images/logos/microsoft.svg"
                className="h-full w-full object-contain"
                alt="thumbnail"
                width={142}
                height={30}
              />
            </div>
          </div>
        </Link>
        <Link href="/" className="logo-card">
          <div className="flex w-full items-center justify-center rounded-[20px] bg-white p-[30px_20px] ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
            <div className="flex h-[30px] w-full shrink-0 items-center justify-center overflow-hidden">
              <Image
                src="/assets/images/logos/apple.svg"
                className="h-full w-full object-contain"
                alt="thumbnail"
                width={88}
                height={30}
              />
            </div>
          </div>
        </Link>
        <Link href="/" className="logo-card">
          <div className="flex w-full items-center justify-center rounded-[20px] bg-white p-[30px_20px] ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
            <div className="flex h-[30px] w-full shrink-0 items-center justify-center overflow-hidden">
              <Image
                src="/assets/images/logos/samsung.svg"
                className="h-full w-full object-contain"
                alt="thumbnail"
                width={92}
                height={30}
              />
            </div>
          </div>
        </Link>
        <Link href="/" className="logo-card">
          <div className="flex w-full items-center justify-center rounded-[20px] bg-white p-[30px_20px] ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
            <div className="flex h-[30px] w-full shrink-0 items-center justify-center overflow-hidden">
              <Image
                src="/assets/images/logos/huawei.svg"
                className="h-full w-full object-contain"
                alt="thumbnail"
                width={138}
                height={30}
              />
            </div>
          </div>
        </Link>
        <Link href="/" className="logo-card">
          <div className="flex w-full items-center justify-center rounded-[20px] bg-white p-[30px_20px] ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
            <div className="flex h-[30px] w-full shrink-0 items-center justify-center overflow-hidden">
              <Image
                src="/assets/images/logos/nokia.svg"
                className="h-full w-full object-contain"
                alt="thumbnail"
                width={120}
                height={30}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
