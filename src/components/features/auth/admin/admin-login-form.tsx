"use client";

import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { adminLogin } from "@/lib/actions/admin.auth.actions";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AdminLoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const [state, action, pending] = useActionState(adminLogin, undefined);

  useEffect(() => {
    if (state?.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Admin Login Panel</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form method="POST" action={action}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name="email" placeholder="asepbensin@gmail.com" required autoFocus />
                {state?.errors?.email && <p className="text-sm text-red-400">{state.errors.email[0]}</p>}
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" name="password" placeholder="Enter your password" required />
                {state?.errors?.password && <p className="text-sm text-red-400">{state.errors.password[0]}</p>}
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full" disabled={pending}>
                  {pending ? "Logging in..." : "Login"}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
