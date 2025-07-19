export default function CustomerProductFilters() {
  return (
    <form
      action=""
      className="flex h-fit flex-1 flex-col gap-5 rounded-[30px] border border-[#E5E5E5] bg-white p-[30px]"
    >
      <h2 className="text-2xl leading-[34px] font-bold">Filters</h2>
      <div className="price flex flex-col gap-[14px]">
        <p className="leading-[22px] font-semibold">Range Harga</p>
        <div className="flex w-full max-w-[480px] items-center gap-[10px] rounded-full border border-[#E5E5E5] bg-white p-[12px_20px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#FFC736]">
          <div className="flex shrink-0">
            <img src="assets/icons/dollar-circle.svg" alt="icon" />
          </div>
          <input
            type="number"
            id="min-price"
            name="min-price"
            className="w-full appearance-none font-semibold text-black outline-none placeholder:font-normal placeholder:text-[#616369]"
            placeholder="Minimum price"
          />
        </div>
        <div className="flex w-full max-w-[480px] items-center gap-[10px] rounded-full border border-[#E5E5E5] bg-white p-[12px_20px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#FFC736]">
          <div className="flex shrink-0">
            <img src="assets/icons/dollar-circle.svg" alt="icon" />
          </div>
          <input
            type="number"
            id="max-price"
            name="max-price"
            className="w-full appearance-none font-semibold text-black outline-none placeholder:font-normal placeholder:text-[#616369]"
            placeholder="Maximum price"
          />
        </div>
      </div>
      <hr className="border-[#E5E5E5]" />
      <div className="stocks flex flex-col gap-[14px]">
        <p className="leading-[22px] font-semibold">Stocks</p>
        <label className="flex items-center gap-3 font-semibold">
          <input
            type="checkbox"
            name="stock"
            className="flex h-6 w-6 shrink-0 appearance-none rounded-md ring-1 ring-[#0D5CD7] checked:border-[3px] checked:border-solid checked:border-white checked:bg-[#0D5CD7]"
          />
          <span>Pre Order</span>
        </label>
        <label className="flex items-center gap-3 font-semibold">
          <input
            type="checkbox"
            name="stock"
            className="flex h-6 w-6 shrink-0 appearance-none rounded-md ring-1 ring-[#0D5CD7] checked:border-[3px] checked:border-solid checked:border-white checked:bg-[#0D5CD7]"
          />
          <span>Ready Stock</span>
        </label>
      </div>
      <hr className="border-[#E5E5E5]" />
      <div className="brands flex flex-col gap-[14px]">
        <p className="leading-[22px] font-semibold">Brands</p>
        <label className="flex items-center gap-3 font-semibold">
          <input
            type="checkbox"
            name="brand"
            className="flex h-6 w-6 shrink-0 appearance-none rounded-md ring-1 ring-[#0D5CD7] checked:border-[3px] checked:border-solid checked:border-white checked:bg-[#0D5CD7]"
          />
          <span>Apple</span>
        </label>
      </div>
      <hr className="border-[#E5E5E5]" />
      <div className="locations flex flex-col gap-[14px]">
        <p className="leading-[22px] font-semibold">Locations</p>
        <label className="flex items-center gap-3 font-semibold">
          <input
            type="checkbox"
            name="loc"
            className="flex h-6 w-6 shrink-0 appearance-none rounded-md ring-1 ring-[#0D5CD7] checked:border-[3px] checked:border-solid checked:border-white checked:bg-[#0D5CD7]"
          />
          <span>Bandung</span>
        </label>
      </div>
    </form>
  );
}
