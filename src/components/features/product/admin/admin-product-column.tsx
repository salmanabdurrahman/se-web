"use client";

import Link from "next/link";
import Image from "next/image";
import { useTransition } from "react";
import { ColumnDef } from "@tanstack/react-table";
import toast from "react-hot-toast";
import { MoreHorizontal } from "lucide-react";
import { deleteBrand } from "@/lib/actions/admin.brand.actions";
import { formatCurrency, formatDate } from "@/lib/utils";
import { ProductWithRelations } from "@/types/admin.product.types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export const adminProductColumns: ColumnDef<ProductWithRelations>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "images",
    header: "Image",
    cell: ({ row }) => {
      const product = row.original;
      return <Image src={product.images[0]} alt={product.name} title={product.name} width={70} height={70} />;
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const product = row.original;
      return formatCurrency(product.price);
    },
  },
  {
    accessorKey: "brand",
    header: "Brand",
    cell: ({ row }) => {
      const product = row.original;
      return product.brand ? product.brand.name : "No Brand";
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const product = row.original;
      return product.category ? product.category.name : "No Category";
    },
  },
  {
    accessorKey: "stock",
    header: "Status",
    cell: ({ row }) => {
      const product = row.original;
      return <Badge>{product.stock}</Badge>;
    },
  },
  {
    accessorKey: "orders",
    header: "Total Orders",
    cell: ({ row }) => {
      const product = row.original;
      return product._count.orders;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      return formatDate(date);
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => {
      const date = new Date(row.getValue("updatedAt"));
      return formatDate(date);
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const product = row.original;
      const [isPending, startTransition] = useTransition();

      //   async function handleDelete(id: number) {
      //     startTransition(async () => {
      //       const result = await deleteBrand(id);

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
              <Link href={`/admin/products/edit/${product.id}`}>Edit Product</Link>
            </DropdownMenuItem>
            {/* <DropdownMenuItem className="text-red-400" onSelect={() => handleDelete(product.id)} disabled={isPending}>
              {isPending ? "Deleting..." : "Delete Product"}
            </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
