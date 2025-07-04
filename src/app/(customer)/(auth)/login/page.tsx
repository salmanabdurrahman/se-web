import { Metadata } from "next";
import CustomerLoginForm from "@/components/features/auth/customer/customer-login-form";

export const metadata: Metadata = {
  title: "Login | SE",
  description: "Login to your account",
};

export default function CustomerLoginPage() {
  return (
    <section id="signin" className="flex min-h-screen flex-col bg-[#EFF3FA] pt-[30px] pb-[50px]">
      <CustomerLoginForm />
    </section>
  );
}
