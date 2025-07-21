import { ReactNode } from "react";

interface CustomerFilterSectionProps {
  title: string;
  children: ReactNode;
}

export default function CustomerFilterSection({ title, children }: CustomerFilterSectionProps) {
  return (
    <>
      <div className="categories flex flex-col gap-[14px]">
        <p className="leading-[22px] font-semibold">{title}</p>
        {children}
      </div>
      <hr className="border-[#E5E5E5]" />
    </>
  );
}
