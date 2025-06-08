import { Archive, Folder, Home, MapPinned, ShoppingBasket, ShoppingCart, Users } from "lucide-react";
import { NavigationItem } from "@/types/navigation.types";

export const adminSidebarItems: NavigationItem[] = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Categories",
    url: "/admin/categories",
    icon: Archive,
  },
  {
    title: "Locations",
    url: "/admin/locations",
    icon: MapPinned,
  },
  {
    title: "Brands",
    url: "/admin/brands",
    icon: Folder,
  },
  {
    title: "Products",
    url: "/admin/products",
    icon: ShoppingCart,
  },
  {
    title: "Orders",
    url: "/admin/orders",
    icon: ShoppingBasket,
  },
  {
    title: "Customers",
    url: "/admin/customers",
    icon: Users,
  },
];
