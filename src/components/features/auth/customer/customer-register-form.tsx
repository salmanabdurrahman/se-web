"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function CustomerRegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  function handlePasswordToggle() {
    setShowPassword(prev => !prev);
  }

  return (
    <div className="container mx-auto flex max-w-[1130px] flex-1 items-center justify-center py-5">
      <form
        action=""
        method="POST"
        className="flex w-[500px] flex-col gap-5 rounded-3xl border border-[#E5E5E5] bg-white p-[50px_30px]"
      >
        <div className="flex justify-center">
          <Image src="/assets/images/logos/logo-black.svg" alt="logo" width={158} height={42} priority />
        </div>
        <h1 className="text-2xl leading-[34px] font-bold">Sign Up</h1>
        <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#FFC736]">
          <div className="flex shrink-0">
            <Image src="/assets/icons/profile-circle.svg" alt="icon" width={24} height={24} />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full appearance-none font-semibold text-black outline-none placeholder:font-normal placeholder:text-[#616369]"
            placeholder="Write your complete name"
            autoComplete="name"
            autoFocus
            required
          />
        </div>
        <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#FFC736]">
          <div className="flex shrink-0">
            <Image src="/assets/icons/sms.svg" alt="icon" width={24} height={24} />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full appearance-none font-semibold text-black outline-none placeholder:font-normal placeholder:text-[#616369]"
            placeholder="Write your email address"
            autoComplete="email"
            required
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#FFC736]">
            <div className="flex shrink-0">
              <Image src="/assets/icons/lock.svg" alt="icon" width={24} height={24} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full appearance-none font-semibold text-black outline-none placeholder:font-normal placeholder:text-[#616369]"
              placeholder="Write your password"
              required
            />
            <button type="button" className="reveal-password flex shrink-0" onClick={handlePasswordToggle}>
              <Image src="/assets/icons/eye.svg" alt="icon" width={24} height={24} />
            </button>
          </div>
          {/* <a href className="mr-0 ml-auto w-fit text-sm text-[#616369] underline">
              Forgot Password
            </a> */}
        </div>
        <div className="flex flex-col gap-3">
          <button
            type="submit"
            className="rounded-full bg-[#0D5CD7] p-[12px_24px] text-center font-semibold text-white"
          >
            Create New Account
          </button>
          <Link
            href="/login"
            className="rounded-full border border-[#E5E5E5] bg-white p-[12px_24px] text-center font-semibold"
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}
