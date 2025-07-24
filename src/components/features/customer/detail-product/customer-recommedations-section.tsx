import Link from "next/link";

export default function CustomerRecommendationsSection() {
  return (
    <div id="recommedations" className="container mx-auto mt-[70px] flex max-w-[1130px] flex-col gap-[30px] pb-[100px]">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl leading-[34px] font-bold">
          Other Products <br /> You Might Need
        </h2>
      </div>
      <div className="grid grid-cols-5 gap-[30px]">
        <Link href={`/detail-product/1`} className="product-card">
          <div className="flex w-full flex-col gap-[24px] rounded-[20px] bg-white p-5 ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
            <div className="flex h-[90px] w-full shrink-0 items-center justify-center overflow-hidden">
              <img
                src="/assets/images/thumbnails/color_back_green__buxxfjccqjzm_large_2x-Photoroom 1.png"
                className="h-full w-full object-contain"
                alt="thumbnail"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-1">
                <p className="leading-[22px] font-semibold">iMac Green Energy</p>
                <p className="text-sm text-[#616369]">Desktops</p>
              </div>
              <p className="leading-[22px] font-semibold text-[#0D5CD7]">Rp 24.000.000</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
