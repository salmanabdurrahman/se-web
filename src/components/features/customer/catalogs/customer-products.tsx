import Image from "next/image";

export default function CustomerProducts() {
  return (
    <div className="flex h-fit w-[780px] flex-col gap-[30px] rounded-[30px] border border-[#E5E5E5] bg-white p-[30px]">
      <h2 className="text-2xl leading-[34px] font-bold">Products</h2>
      <div className="grid grid-cols-3 gap-[30px]">
        <a href="" className="product-card">
          <div className="flex w-full flex-col gap-[24px] rounded-[20px] bg-white p-5 ring-1 ring-[#E5E5E5] transition-all duration-300 hover:ring-2 hover:ring-[#FFC736]">
            <div className="flex h-[90px] w-full shrink-0 items-center justify-center overflow-hidden">
              <Image
                src="/assets/images/thumbnails/color_back_green__buxxfjccqjzm_large_2x-Photoroom 1.png"
                className="h-full w-full object-contain"
                alt="thumbnail"
                width={320}
                height={70}
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
        </a>
      </div>
    </div>
  );
}
