import Image from "next/image";
import Link from "next/link";

export default function CustomerCategories() {
  return (
    <div id="categories" className="flex flex-col gap-[30px]">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl leading-[34px] font-bold">
          Browse Products <br /> by Categories
        </h2>
        <Link href="catalog.html" className="rounded-full border border-[#E5E5E5] p-[12px_24px] font-semibold">
          Explore All
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-[30px]">
        <Link href="/" className="categories-card">
          <div className="flex w-full items-center gap-[14px] rounded-[20px] bg-white p-5 ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0D5CD7]">
              <Image src="/assets/icons/mobile.svg" alt="icon" width={18} height={23} />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="leading-[22px] font-semibold">Phones</p>
              <p className="text-sm text-[#616369]">4,583 products</p>
            </div>
          </div>
        </Link>
        <Link href="/" className="categories-card">
          <div className="flex w-full items-center gap-[14px] rounded-[20px] bg-white p-5 ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0D5CD7]">
              <Image src="/assets/icons/game.svg" alt="icon" width={24} height={24} />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="leading-[22px] font-semibold">Games</p>
              <p className="text-sm text-[#616369]">4,583 products</p>
            </div>
          </div>
        </Link>
        <Link href="/" className="categories-card">
          <div className="flex w-full items-center gap-[14px] rounded-[20px] bg-white p-5 ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0D5CD7]">
              <Image src="/assets/icons/airpods.svg" alt="icon" width={24} height={24} />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="leading-[22px] font-semibold">Headsets</p>
              <p className="text-sm text-[#616369]">4,583 products</p>
            </div>
          </div>
        </Link>
        <Link href="/" className="categories-card">
          <div className="flex w-full items-center gap-[14px] rounded-[20px] bg-white p-5 ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0D5CD7]">
              <Image src="/assets/icons/box.svg" alt="icon" width={24} height={24} />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="leading-[22px] font-semibold">Essenstials</p>
              <p className="text-sm text-[#616369]">4,583 products</p>
            </div>
          </div>
        </Link>
        <Link href="/" className="categories-card">
          <div className="flex w-full items-center gap-[14px] rounded-[20px] bg-white p-5 ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0D5CD7]">
              <Image src="/assets/icons/lamp.svg" alt="icon" width={24} height={24} />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="leading-[22px] font-semibold">Lights</p>
              <p className="text-sm text-[#616369]">4,583 products</p>
            </div>
          </div>
        </Link>
        <Link href="/" className="categories-card">
          <div className="flex w-full items-center gap-[14px] rounded-[20px] bg-white p-5 ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0D5CD7]">
              <Image src="/assets/icons/watch.svg" alt="icon" width={24} height={24} />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="leading-[22px] font-semibold">Watches</p>
              <p className="text-sm text-[#616369]">4,583 products</p>
            </div>
          </div>
        </Link>
        <Link href="/" className="categories-card">
          <div className="flex w-full items-center gap-[14px] rounded-[20px] bg-white p-5 ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0D5CD7]">
              <Image src="/assets/icons/monitor.svg" alt="icon" width={24} height={24} />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="leading-[22px] font-semibold">Desktops</p>
              <p className="text-sm text-[#616369]">4,583 products</p>
            </div>
          </div>
        </Link>
        <Link href="/" className="categories-card">
          <div className="flex w-full items-center gap-[14px] rounded-[20px] bg-white p-5 ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0D5CD7]">
              <Image src="/assets/icons/cup.svg" alt="icon" width={24} height={24} />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="leading-[22px] font-semibold">Awards</p>
              <p className="text-sm text-[#616369]">4,583 products</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
