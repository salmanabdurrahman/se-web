import { CustomerProduct } from "@/types/customer.product.types";

interface CustomerTitleSectionProps {
  product: CustomerProduct;
}

export default function CustomerTitleSection({ product }: CustomerTitleSectionProps) {
  return (
    <section id="title" className="-mb-[100px] h-[150px] bg-[#EFF3FA]">
      <div className="container mx-auto flex max-w-[1130px] items-center justify-between">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl leading-9 font-bold">{product.name}</h1>
        </div>
        <div className="flex items-center justify-end gap-2">
          <div className="flex items-center">
            <div className="flex shrink-0">
              <img src="/assets/icons/Star.svg" alt="star" loading="lazy" />
            </div>
            <div className="flex shrink-0">
              <img src="/assets/icons/Star.svg" alt="star" loading="lazy" />
            </div>
            <div className="flex shrink-0">
              <img src="/assets/icons/Star.svg" alt="star" loading="lazy" />
            </div>
            <div className="flex shrink-0">
              <img src="/assets/icons/Star.svg" alt="star" loading="lazy" />
            </div>
            <div className="flex shrink-0">
              <img src="/assets/icons/Star-gray.svg" alt="star" loading="lazy" />
            </div>
          </div>
          <p className="font-semibold">({product._count.orders})</p>
        </div>
      </div>
    </section>
  );
}
