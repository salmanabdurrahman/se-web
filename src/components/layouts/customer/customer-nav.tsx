"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransition } from "react";
import { User } from "lucia";
import { customerLogout } from "@/lib/actions/customer.auth.actions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CustomerNavProps {
  user: User | null;
}

export default function CustomerNav({ user }: CustomerNavProps) {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function isActive(path: string) {
    return pathname === path || pathname.startsWith(path);
  }

  async function handleLogout() {
    startTransition(async () => {
      await customerLogout();
    });
  }

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
          {user && user.role === "customer" ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white p-1 shadow-md transition-all duration-300 hover:border-[#FFC736] hover:shadow-lg focus:ring-2 focus:ring-[#FFC736] focus:outline-none">
                  <Image
                    src={`https://i.pravatar.cc/100?u=${encodeURIComponent(user.name)}`}
                    className="h-full w-full rounded-full object-cover"
                    alt={user.name}
                    width={48}
                    height={48}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-60 rounded-2xl border-2 border-[#FFC736] bg-white p-2 shadow-2xl"
                align="end"
              >
                <DropdownMenuLabel className="px-3 py-2 font-bold text-[#0D5CD7]">
                  Hi, {user.name.split(" ")[0]}!
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/profile">
                  <DropdownMenuItem className="rounded-lg px-3 py-2 font-semibold text-[#0D5CD7] transition-all duration-200 hover:bg-[#EFF3FA] hover:text-[#0D5CD7]">
                    My Profile
                  </DropdownMenuItem>
                </Link>
                <Link href="/profile/orders">
                  <DropdownMenuItem className="rounded-lg px-3 py-2 font-semibold text-[#0D5CD7] transition-all duration-200 hover:bg-[#EFF3FA] hover:text-[#0D5CD7]">
                    My Orders
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <button
                    type="button"
                    className="w-full cursor-pointer justify-start rounded-lg px-3 py-2 font-semibold text-red-500 transition-all duration-200 hover:bg-[#FFECEC] hover:text-red-600"
                    disabled={isPending}
                    onClick={handleLogout}
                  >
                    {isPending ? "Logging out..." : "Logout"}
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href="/login" className="rounded-full bg-white p-[12px_20px] font-semibold">
                Sign In
              </Link>
              <Link href="/register" className="rounded-full bg-white p-[12px_20px] font-semibold">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
