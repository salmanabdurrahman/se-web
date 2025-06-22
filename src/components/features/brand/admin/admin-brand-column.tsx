"use client";

import Link from "next/link";
import { useTransition } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Brand } from "@prisma/client";
import toast from "react-hot-toast";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteLocation } from "@/lib/actions/admin.location.actions";
import { formatDate } from "@/lib/utils";
import { getPublicUrl } from "@/lib/supabase";

export const adminBrandColumns: ColumnDef<Brand>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "logo",
    header: "Logo",
    cell: ({ row }) => {
      const brand = row.original;
      const storageUrl = getPublicUrl(brand.logo);

      return <img src={storageUrl} alt={brand.name} title={brand.name} width={60} loading="lazy" />;
    },
  },
  {
    accessorKey: "createdAt",
    header: () => "Created At",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      const formatted = formatDate(date);

      return formatted;
    },
  },
  {
    accessorKey: "updatedAt",
    header: () => "Updated At",
    cell: ({ row }) => {
      const date = new Date(row.getValue("updatedAt"));
      const formatted = formatDate(date);

      return formatted;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const brand = row.original;
      const [isPending, startTransition] = useTransition();

      //   async function handleDelete(id: number) {
      //     startTransition(async () => {
      //       const result = await deleteLocation(id);

      //       if (result.success) {
      //         toast.success(result.message);
      //       } else {
      //         toast.error(result.message);
      //       }
      //     });
      //   }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-green-400" asChild>
              <Link href={`/admin/brands/edit/${brand.id}`}>Edit Brand</Link>
            </DropdownMenuItem>
            {/* <DropdownMenuItem className="text-red-400" onSelect={() => handleDelete(brand.id)} disabled={isPending}>
                            {isPending ? "Deleting..." : "Delete Location"}
                          </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
