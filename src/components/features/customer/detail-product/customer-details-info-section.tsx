import Link from "next/link";

export default function CustomerDetailsInfoSection() {
  return (
    <section id="details-info" className="container mx-auto mt-[50px] flex max-w-[1030px] justify-between gap-5">
      <div className="flex w-full max-w-[650px] flex-col gap-[30px]">
        <div id="about" className="flex flex-col gap-[10px]">
          <h3 className="font-semibold">About Product</h3>
          <p className="leading-[32px]">
            iMac brings incredible, room-filling audio to any space. Two pairs of force-cancelling woofers create rich,
            deep bass — and each is balanced with a high-performance tweeter for a massive soundstage that takes music,
            movies, and more to the next level. 12-Core CPU 18-Core GPU 18GB Unified Memory 1TB SSD Storage¹ iMac also
            supports Spatial Audio with Dolby Atmos. And when you combine that with a 4.5K Retina display, it's like
            bringing the whole theater home.
          </p>
        </div>
        <div id="testi" className="flex flex-col gap-[10px]">
          <h3 className="font-semibold">Real Testimonials</h3>
          <div className="grid grid-cols-2 gap-5">
            {[1, 2, 3, 4].map((item, index) => (
              <div
                className="testi-card flex h-fit flex-col gap-5 rounded-[20px] border border-[#E5E5E5] bg-white p-5"
                key={index}
              >
                <div className="flex">
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
                <p className="line-clamp-2 leading-[28px] hover:line-clamp-none">
                  I do really love this product helped me to achieve my first million Lorem ipsum dolor sit amet.
                </p>
                <div className="flex items-center gap-[10px]">
                  <div className="flex h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full border border-[#E5E5E5] p-1">
                    <img
                      src="/assets/images/photos/p2.png"
                      className="h-full w-full rounded-full object-cover"
                      alt="photo"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-sm leading-[22px] font-semibold">Angga Risky</p>
                    <p className="text-xs leading-[18px]">12 January 2028</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex h-fit w-[302px] shrink-0 flex-col gap-5">
        <div className="flex w-full flex-col gap-[30px] rounded-3xl border border-[#E5E5E5] bg-white p-[30px]">
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Brand New</p>
            <p className="text-[32px] leading-[48px] font-bold">Rp 56.500.000</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex shrink-0">
                <img src="/assets/icons/tick-circle.svg" alt="icon" loading="lazy" />
              </div>
              <p className="font-semibold">Peti telur packaging</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex shrink-0">
                <img src="/assets/icons/tick-circle.svg" alt="icon" loading="lazy" />
              </div>
              <p className="font-semibold">Manual book instructions</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex shrink-0">
                <img src="/assets/icons/tick-circle.svg" alt="icon" loading="lazy" />
              </div>
              <p className="font-semibold">Customer service 24/7</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex shrink-0">
                <img src="/assets/icons/tick-circle.svg" alt="icon" loading="lazy" />
              </div>
              <p className="font-semibold">Free delivery Jababeka</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex shrink-0">
                <img src="/assets/icons/tick-circle.svg" alt="icon" loading="lazy" />
              </div>
              <p className="font-semibold">Kwitansi orisinal 100%</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="" className="rounded-full bg-[#0D5CD7] p-[12px_24px] text-center font-semibold text-white">
              Add to Cart
            </Link>
            <a
              href=""
              className="rounded-full border border-[#E5E5E5] bg-white p-[12px_24px] text-center font-semibold"
            >
              Save to Wishlist
            </a>
          </div>
        </div>
        <a href="">
          <div className="flex w-full items-center justify-between gap-2 rounded-3xl border border-[#E5E5E5] bg-white p-5">
            <div className="flex items-center gap-[10px]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFC736]">
                <img src="/assets/icons/cake.svg" alt="icon" loading="lazy" />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-semibold">Buy as a Gift</p>
                <p className="text-sm">Free Delivery</p>
              </div>
            </div>
            <div className="flex shrink-0">
              <img src="/assets/icons/arrow-right.svg" alt="icon" loading="lazy" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
