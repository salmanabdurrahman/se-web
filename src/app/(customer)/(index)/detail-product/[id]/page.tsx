import CustomerTitleSection from "@/components/features/customer/detail-product/customer-title-section";
import CustomerDetailsImagesSection from "@/components/features/customer/detail-product/customer-details-images-section";
import CustomerDetailsBenefitsSection from "@/components/features/customer/detail-product/customer-details-benefits-section";
import CustomerDetailsInfoSection from "@/components/features/customer/detail-product/customer-details-info-section";
import CustomerRecommendationsSection from "@/components/features/customer/detail-product/customer-recommedations-section";

export default async function CustomerDetailProductPage() {
  return (
    <>
      <CustomerTitleSection />
      <CustomerDetailsImagesSection />
      <CustomerDetailsBenefitsSection />
      <CustomerDetailsInfoSection />
      <CustomerRecommendationsSection />
    </>
  );
}
