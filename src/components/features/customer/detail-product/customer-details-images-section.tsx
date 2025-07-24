"use client";

import Flickity from "react-flickity-component";
import { CustomerProduct } from "@/types/customer.product.types";

interface CustomerDetailsImagesSectionProps {
  product: CustomerProduct;
}

export default function CustomerDetailsImagesSection({ product }: CustomerDetailsImagesSectionProps) {
  const flickityOptions = {
    cellAlign: "left",
    contain: true,
    pageDots: false,
    prevNextButtons: false,
  };

  return (
    <section id="details-images" className="main-carousel mt-[30px] overflow-x-hidden">
      <Flickity options={flickityOptions}>
        {product.images.map((image, index) => (
          <div className="image-card pr-5 first-of-type:pl-[calc((100vw-1130px-20px)/2)]" key={index}>
            <div className="flex h-[350px] w-[470px] shrink-0 items-center justify-center overflow-hidden rounded-[30px] border border-[#E5E5E5] bg-white p-10">
              <img
                src={image}
                className="h-full w-full object-contain"
                alt={`Product image ${index + 1}`}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </Flickity>
    </section>
  );
}
