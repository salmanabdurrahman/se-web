"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import toast from "react-hot-toast";
import { Category } from "@prisma/client";
import { adminCategorySchema as formSchema } from "@/types/admin.category.types";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function AdminEditCategoryForm({ initialData }: { initialData: Category }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData.name || "",
    },
  });
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <Form {...form}>
      <form method="POST" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Category Name" {...field} required autoFocus />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end space-x-2">
          <Button size="sm" variant="outline" type="button" asChild>
            <Link href="/admin/categories">Back</Link>
          </Button>
          <Button size="sm" type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Editing..." : "Edit Category"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
