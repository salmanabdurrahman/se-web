import { redirect } from "next/navigation";
import { validateRequest } from "@/lib/auth";
import { getPopularProducts, getProductById } from "@/lib/actions/customer.product.actions";
import CustomerTitleSection from "@/components/features/customer/detail-product/customer-title-section";
import CustomerDetailsImagesSection from "@/components/features/customer/detail-product/customer-details-images-section";
import CustomerDetailsBenefitsSection from "@/components/features/customer/detail-product/customer-details-benefits-section";
import CustomerDetailsInfoSection from "@/components/features/customer/detail-product/customer-details-info-section";
import CustomerRecommendationsSection from "@/components/features/customer/detail-product/customer-recommedations-section";

interface CustomerDetailProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function CustomerDetailProductPage({ params }: CustomerDetailProductPageProps) {
  const { id } = await params;
  const { session } = await validateRequest();
  const [product, popularProducts] = await Promise.all([getProductById(id), getPopularProducts(5)]);

  if (!product) {
    return redirect("/catalogs");
  }

  return (
    <>
      <CustomerTitleSection product={product} />
      <CustomerDetailsImagesSection product={product} />
      <CustomerDetailsBenefitsSection />
      <CustomerDetailsInfoSection product={product} isLoggedIn={!!session} />
      <CustomerRecommendationsSection products={popularProducts} />
    </>
  );
}
