"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomerNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path);
  };

  return (
    <header className="bg-[#EFF3FA] pt-[30px] pb-[50px]">
      <nav className="container mx-auto flex max-w-[1130px] items-center justify-between rounded-3xl bg-[#0D5CD7] p-5">
        <div className="flex shrink-0">
          <Image src="/assets/images/logos/logo.svg" alt="icon" width={157} height={42} />
        </div>
        <ul className="flex items-center gap-[30px]">
          <li
            className={`font-bold transition-all duration-300 hover:text-[#FFC736] ${isActive("/catalogs") ? "text-[#FFC736]" : "text-white"}`}
          >
            <Link href="/catalogs">Catalogs</Link>
          </li>
          <li
            className={`font-bold transition-all duration-300 hover:text-[#FFC736] ${isActive("/categories") ? "text-[#FFC736]" : "text-white"}`}
          >
            <Link href="/">Categories</Link>
          </li>
          <li
            className={`font-bold transition-all duration-300 hover:text-[#FFC736] ${isActive("/testimonials") ? "text-[#FFC736]" : "text-white"}`}
          >
            <Link href="/">Testimonials</Link>
          </li>
          <li
            className={`font-bold transition-all duration-300 hover:text-[#FFC736] ${isActive("/rewards") ? "text-[#FFC736]" : "text-white"}`}
          >
            <Link href="/">Rewards</Link>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <Link href="/cart">
            <div className="flex h-12 w-12 shrink-0">
              <Image src="/assets/icons/cart.svg" alt="icon" width={48} height={48} />
            </div>
          </Link>
          <Link href="/login" className="rounded-full bg-white p-[12px_20px] font-semibold">
            Sign In
          </Link>
          <Link href="/register" className="rounded-full bg-white p-[12px_20px] font-semibold">
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
