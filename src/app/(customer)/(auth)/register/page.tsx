import { Metadata } from "next";
import CustomerRegisterForm from "@/components/features/auth/customer/customer-register-form";

export const metadata: Metadata = {
  title: "Register | SE",
  description: "Create a new account",
};

export default function CustomerRegisterPage() {
  return (
    <section id="signup" className="flex min-h-screen flex-col bg-[#EFF3FA] pt-[30px] pb-[50px]">
      <CustomerRegisterForm />
    </section>
  );
}
