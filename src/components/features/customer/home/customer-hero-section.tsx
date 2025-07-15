import Image from "next/image";
import Link from "next/link";

export default function CustomerHeroSection() {
  return (
    <section id="hero" className="bg-[#EFF3FA] pb-[50px]">
      <div className="container mx-auto flex max-w-[1130px] items-center justify-between gap-1">
        <div className="flex flex-col gap-[30px]">
          <div className="flex w-fit items-center gap-[10px] rounded-full bg-white p-[8px_16px]">
            <div className="flex h-[22px] w-[22px] shrink-0">
              <Image src="/assets/icons/crown.svg" alt="icon" width={22} height={23} />
            </div>
            <p className="text-sm font-semibold">Most Popular 100th Product in Belanja</p>
          </div>
          <div className="flex flex-col gap-[14px]">
            <h1 className="text-[55px] leading-[55px] font-bold">Working Faster 10x</h1>
            <p className="text-lg leading-[34px] text-[#6A7789]">
              Dolor si amet lorem super-power features riches than any other platform devices AI integrated.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="rounded-full bg-[#0D5CD7] p-[18px_24px] font-semibold text-white">
              Add to Cart
            </Link>
            <Link href="/" className="rounded-full bg-white p-[18px_24px] font-semibold">
              View Details
            </Link>
          </div>
        </div>
        <div className="relative flex h-[360px] w-[588px] shrink-0 overflow-hidden">
          <Image
            src="/assets/images/banners/mba13-m2-digitalmat-gallery-1-202402-Photoroom 2.png"
            className="object-contain"
            alt="icon"
            width={1766}
            height={1080}
            priority
          />
          <div className="absolute top-[60%] flex items-center gap-[10px] rounded-3xl bg-white p-[14px_16px]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFC736]">
              <Image src="/assets/icons/code-circle.svg" className="h-6 w-6" alt="icon" width={24} height={24} />
            </div>
            <p className="text-sm font-semibold">
              Bonus Mac OS <br /> Capitan Pro
            </p>
          </div>
          <div className="absolute top-[30%] right-0 flex flex-col items-center gap-[10px] rounded-3xl bg-white p-[14px_16px]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFC736]">
              <Image src="/assets/icons/star-outline.svg" className="h-6 w-6" alt="icon" width={24} height={24} />
            </div>
            <p className="text-center text-sm font-semibold">
              Include <br /> Warranty
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-[50px] flex max-w-[1130px] items-center justify-center gap-10">
        <div className="flex items-center gap-[10px]">
          <div className="flex h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full border-[5px] border-white">
            <Image
              src="/assets/images/photos/p1.png"
              className="h-full w-full object-cover"
              alt="photo"
              width={80}
              height={80}
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="text-sm leading-[22px] font-semibold">Awesome product!</p>
            <p className="text-xs leading-[18px]">Jemmie Pemilia</p>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="flex h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full border-[5px] border-white">
            <Image
              src="/assets/images/photos/p2.png"
              className="h-full w-full object-cover"
              alt="photo"
              width={80}
              height={80}
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="text-sm leading-[22px] font-semibold">Money saver 25%</p>
            <p className="text-xs leading-[18px]">Angga Risky</p>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="flex h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full border-[5px] border-white">
            <Image
              src="/assets/images/photos/p3.png"
              className="h-full w-full object-cover"
              alt="photo"
              width={80}
              height={80}
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="text-sm leading-[22px] font-semibold">I love the warranty</p>
            <p className="text-xs leading-[18px]">Petina Malaka</p>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="flex h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full border-[5px] border-white">
            <Image
              src="/assets/images/photos/p4.png"
              className="h-full w-full object-cover"
              alt="photo"
              width={80}
              height={80}
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="text-sm leading-[22px] font-semibold">Big deals ever!</p>
            <p className="text-xs leading-[18px]">Udin Sarifun</p>
          </div>
        </div>
      </div>
    </section>
  );
}
