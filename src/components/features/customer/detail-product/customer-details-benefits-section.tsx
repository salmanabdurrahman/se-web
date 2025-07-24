export default function CustomerDetailsBenefitsSection() {
  return (
    <section
      id="details-benefits"
      className="container mx-auto mt-[50px] flex max-w-[1130px] items-center justify-center gap-[50px]"
    >
      <div className="flex items-center gap-[10px]">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFC736]">
          <img src="/assets/icons/star-outline.svg" alt="icon" loading="lazy" />
        </div>
        <p className="text-sm font-semibold">
          Include Official <br /> Warranty
        </p>
      </div>
      <div className="h-12 border-[0.5px] border-[#E5E5E5]" />
      <div className="flex items-center gap-[10px]">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFC736]">
          <img src="/assets/icons/code-circle.svg" alt="icon" loading="lazy" />
        </div>
        <p className="text-sm font-semibold">
          Bonus Mac OS <br /> Capitan Pro
        </p>
      </div>
      <div className="h-12 border-[0.5px] border-[#E5E5E5]" />
      <div className="flex items-center gap-[10px]">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFC736]">
          <img src="/assets/icons/like.svg" alt="icon" loading="lazy" />
        </div>
        <p className="text-sm font-semibold">
          100% Original <br /> From Factory
        </p>
      </div>
      <div className="h-12 border-[0.5px] border-[#E5E5E5]" />
      <div className="flex items-center gap-[10px]">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFC736]">
          <img src="/assets/icons/tag.svg" alt="icon" loading="lazy" />
        </div>
        <p className="text-sm font-semibold">
          Free Tax On <br /> Every Sale
        </p>
      </div>
    </section>
  );
}
