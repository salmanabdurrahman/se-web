import CustomerTitleSection from "@/components/features/customer/cart/customer-title-section";
import CustomerCartSection from "@/components/features/customer/cart/customer-cart-section";
import CustomerCheckoutInfo from "@/components/features/customer/cart/customer-checkout-info";

export default function CustomerCartPage() {
  return (
    <>
      <CustomerTitleSection />
      <CustomerCartSection />
      <CustomerCheckoutInfo />
    </>
  );
}
