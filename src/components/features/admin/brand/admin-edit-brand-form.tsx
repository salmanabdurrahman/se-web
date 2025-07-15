"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { Brand } from "@prisma/client";
import toast from "react-hot-toast";
import { adminEditBrandSchema as formSchema } from "@/types/admin.brand.types";
import { updateBrand } from "@/lib/actions/admin.brand.actions";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function AdminEditBrandForm({ initialData }: { initialData: Brand }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData.name || "",
    },
  });
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await updateBrand(initialData.id, values);

    if (result.success) {
      toast.success(result.message);
      form.reset();
      router.push("/admin/brands");
    } else {
      toast.error(result.message);
    }
  }

  return (
    <Form {...form}>
      <form
        method="POST"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 py-6"
        encType="multipart/form-data"
      >
        <div className="grid w-full grid-cols-1 items-start gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Brand Name" {...field} required autoFocus />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="logo"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Logo</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={e => field.onChange(e.target.files ? e.target.files[0] : null)}
                  />
                </FormControl>
                <FormMessage />
                <div>
                  <p className="text-muted-foreground mb-2 text-sm">Current Logo:</p>
                  <Image
                    src={initialData.logo}
                    alt={initialData.name}
                    width={60}
                    height={60}
                    className="rounded-md object-cover"
                  />
                </div>
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-end space-x-2">
          <Button size="sm" variant="outline" type="button" asChild>
            <Link href="/admin/brands">Back</Link>
          </Button>
          <Button size="sm" type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Updating..." : "Update Brand"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
