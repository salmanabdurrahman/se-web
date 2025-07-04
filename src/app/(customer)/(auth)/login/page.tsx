import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login | SE",
  description: "Login to your account",
};

export default function CustomerLoginPage() {
  return (
    <section id="signin" className="flex min-h-screen flex-col bg-[#EFF3FA] pt-[30px] pb-[50px]">
      <div className="container mx-auto flex max-w-[1130px] flex-1 items-center justify-center py-5">
        <form
          action=""
          method="POST"
          className="flex w-[500px] flex-col gap-5 rounded-3xl border border-[#E5E5E5] bg-white p-[50px_30px]"
        >
          <div className="flex justify-center">
            <Image src="./assets/images/logos/logo-black.svg" alt="logo" width={158} height={42} />
          </div>
          <h1 className="text-2xl leading-[34px] font-bold">Sign In</h1>
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#FFC736]">
            <div className="flex shrink-0">
              <Image src="./assets/icons/sms.svg" alt="icon" width={24} height={24} />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full appearance-none font-semibold text-black outline-none placeholder:font-normal placeholder:text-[#616369]"
              placeholder="Write your email address"
              autoComplete="email"
              autoFocus
              required
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#FFC736]">
              <div className="flex shrink-0">
                <Image src="./assets/icons/lock.svg" alt="icon" width={24} height={24} />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full appearance-none font-semibold text-black outline-none placeholder:font-normal placeholder:text-[#616369]"
                placeholder="Write your password"
                required
              />
              <button type="button" className="reveal-password flex shrink-0">
                <Image src="./assets/icons/eye.svg" alt="icon" width={24} height={24} />
              </button>
            </div>
            <Link href="#" className="mr-0 ml-auto w-fit text-sm text-[#616369] underline">
              Forgot Password
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="cursor-pointer rounded-full bg-[#0D5CD7] p-[12px_24px] text-center font-semibold text-white"
            >
              Sign In to My Account
            </button>
            <Link
              href="/register"
              className="rounded-full border border-[#E5E5E5] bg-white p-[12px_24px] text-center font-semibold"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
