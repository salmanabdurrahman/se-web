import { LucideProps } from "lucide-react";

export type NavigationItem = {
  title: string;
  url: string;
  icon?: React.ComponentType<LucideProps>;
};
