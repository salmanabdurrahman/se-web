"use client";

import Flickity from "react-flickity-component";

export default function CustomerDetailsImagesSection() {
  const flickityOptions = {
    cellAlign: "left",
    contain: true,
    pageDots: false,
    prevNextButtons: false,
  };

  return (
    <section id="details-images" className="main-carousel mt-[30px]">
      <Flickity options={flickityOptions}>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div className="image-card pr-5 first-of-type:pl-[calc((100vw-1130px-20px)/2)]" key={index}>
            <div className="flex h-[350px] w-[470px] shrink-0 items-center justify-center overflow-hidden rounded-[30px] border border-[#E5E5E5] bg-white p-10">
              <img
                src="/assets/images/thumbnails/color_back_green__buxxfjccqjzm_large_2x-Photoroom 1.png"
                className="h-full w-full object-contain"
                alt="thumbnail"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </Flickity>
    </section>
  );
}
