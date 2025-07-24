import { generateRandomNumber } from "@/lib/utils";

export default function CustomerTitleSection() {
  return (
    <section id="title" className="-mb-[100px] h-[150px] bg-[#EFF3FA]">
      <div className="container mx-auto flex max-w-[1130px] items-center justify-between">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl leading-9 font-bold">iMac Pro Anniv Edition 100th</h1>
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
          <p className="font-semibold">({generateRandomNumber(3)})</p>
        </div>
      </div>
    </section>
  );
}
