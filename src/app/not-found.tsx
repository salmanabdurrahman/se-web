import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import "./globals-landing.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "404 Not Found | SE",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <section
      id="not-found"
      className={`flex min-h-screen flex-col bg-[#EFF3FA] pt-[30px] pb-[50px] ${poppins.className}`}
    >
      <div className="container mx-auto flex max-w-[1130px] flex-1 items-center justify-center py-5">
        <div className="flex w-[500px] flex-col gap-8 rounded-3xl border border-[#E5E5E5] bg-white p-[50px_30px] text-center">
          <div className="flex justify-center">
            <Image
              src="/assets/images/logos/logo-black.svg"
              alt="Simple E-commerce Logo"
              width={158}
              height={42}
              priority
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl leading-tight font-extrabold text-black md:text-5xl">404</h1>
            <h2 className="text-2xl leading-[34px] font-bold">Page Not Found</h2>
            <p className="text-base text-[#616369]">
              Oops! The page you are looking for does not exist. It might have been moved or deleted.
            </p>
          </div>
          <Link
            href="/"
            className="cursor-pointer rounded-full bg-[#0D5CD7] p-[12px_24px] text-center font-semibold text-white transition-all duration-300 hover:bg-blue-800"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
