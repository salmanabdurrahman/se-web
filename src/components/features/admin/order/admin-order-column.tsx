"use client";

import Link from "next/link";
import Image from "next/image";
import { useTransition } from "react";
import { ColumnDef } from "@tanstack/react-table";
import toast from "react-hot-toast";
import { MoreHorizontal } from "lucide-react";
import { deleteProduct } from "@/lib/actions/admin.product.actions";
import { formatCurrency, formatDate } from "@/lib/utils";
import { OrderWithRelations } from "@/types/admin.order.types";
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

export const adminOrderColumns: ColumnDef<OrderWithRelations>[] = [
  {
    id: "number",
    header: "No.",
    cell: ({ row }) => {
      const numberOfOrders = row.index;
      return numberOfOrders + 1;
    },
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    id: "products",
    header: "Products",
    cell: ({ row }) => {
      const order = row.original;

      return order.products.map(item => (
        <div key={item.product.id} className="flex items-center space-x-2">
          <Image
            src={item.product.images[0]}
            alt={item.product.name}
            title={item.product.name}
            width={50}
            height={50}
          />
          <span>{item.product.name}</span>
        </div>
      ));
    },
  },
  {
    id: "name",
    header: "Name",
    cell: ({ row }) => {
      const order = row.original;
      return order.detail?.name || "Unknown Customer";
    },
  },
  {
    id: "city",
    header: "City",
    cell: ({ row }) => {
      const order = row.original;
      return order.detail?.city || "Unknown City";
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const order = row.original;
      const status = order.status || "pending";
      const statusVariants: Record<string, "info" | "success" | "destructive"> = {
        pending: "info",
        success: "success",
        failed: "destructive",
      };

      return <Badge variant={statusVariants[status]}>{status.charAt(0).toUpperCase() + status.slice(1)}</Badge>;
    },
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
    cell: ({ row }) => {
      const order = row.original;
      return formatCurrency(order.totalPrice);
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

      async function handleDelete(id: string) {
        startTransition(async () => {
          // const result = await deleteProduct(id);
          // if (result.success) {
          //   toast.success(result.message);
          // } else {
          //   toast.error(result.message);
          // }
        });
      }

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
              <Link href={`/admin/orders/edit/${product.id}`}>Edit Order</Link>
            </DropdownMenuItem>
            {/* <DropdownMenuItem className="text-red-400" onSelect={() => handleDelete(product.id)} disabled={isPending}>
              {isPending ? "Deleting..." : "Delete Order"}
            </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
