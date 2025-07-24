import Link from "next/link";
import { formatCurrency } from "@/lib/utils";
import { CustomerProductWithRelations } from "@/types/customer.product.types";

interface CustomerRecommendationsSectionProps {
  products: CustomerProductWithRelations[];
}

export default function CustomerRecommendationsSection({ products }: CustomerRecommendationsSectionProps) {
  return (
    <section
      id="recommedations"
      className="container mx-auto mt-[70px] flex max-w-[1130px] flex-col gap-[30px] pb-[100px]"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl leading-[34px] font-bold">
          Other Products <br /> You Might Need
        </h2>
      </div>
      <div className="grid grid-cols-5 gap-[30px]">
        {products.map(product => (
          <Link href={`/detail-product/${product.id}`} className="product-card" key={product.id}>
            <div className="flex h-full w-full flex-col gap-[24px] rounded-[20px] bg-white p-5 ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
              <div className="flex h-[90px] w-full shrink-0 items-center justify-center overflow-hidden">
                <img
                  src={product.images[0]}
                  className="h-full w-full object-contain"
                  alt={product.name}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-col gap-1">
                  <p className="leading-[22px] font-semibold">{product.name}</p>
                  <p className="text-sm text-[#616369]">{product.category.name}</p>
                </div>
                <p className="leading-[22px] font-semibold text-[#0D5CD7]">{formatCurrency(product.price)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
