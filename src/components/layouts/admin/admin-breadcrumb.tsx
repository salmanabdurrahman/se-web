"use client";

import { usePathname } from "next/navigation";
import { SlashIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function AdminBreadcrumb() {
  const pathname = usePathname();
  const breadcrumbItems = pathname.split("/").filter(item => item !== "");

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink href={`/${breadcrumbItems.slice(0, index + 1).join("/")}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </BreadcrumbLink>
            {index < breadcrumbItems.length - 1 && (
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
