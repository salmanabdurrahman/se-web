"use client";

import Link from "next/link";
import { useTransition } from "react";
import { ColumnDef } from "@tanstack/react-table";
import toast from "react-hot-toast";
import { MoreHorizontal } from "lucide-react";
import { deleteProduct } from "@/lib/actions/admin.product.actions";
import { formatDate } from "@/lib/utils";
import { CustomerWithRelations } from "@/types/admin.customer.types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const adminCustomerColumns: ColumnDef<CustomerWithRelations>[] = [
  {
    id: "number",
    header: "No.",
    cell: ({ row }) => {
      const numberOfCustomers = row.index;
      return numberOfCustomers + 1;
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    id: "phone",
    header: "Phone",
    cell: ({ row }) => {
      const customer = row.original;
      return customer.orders[0]?.detail?.phone || "Unknown Phone";
    },
  },
  {
    id: "city",
    header: "City",
    cell: ({ row }) => {
      const customer = row.original;
      return customer.orders[0]?.detail?.city || "Unknown City";
    },
  },
  {
    id: "transaction",
    header: "Total Transactions",
    cell: ({ row }) => {
      const customer = row.original;
      return customer._count.orders || 0;
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
