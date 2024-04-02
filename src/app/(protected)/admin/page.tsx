"use client";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Role } from "@prisma/client";
import { toast } from "sonner";

export default function AdminPage() {
  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        toast.error(data.error);
      }

      if (data.success) {
        toast.success(data.success);
      }
    });
  };

  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        toast.success("Allowed API route!");
      } else {
        toast.error("Forbidden API route!");
      }
    });
  };

  return (
    <Card className="w-[600px] rounded-sm shadow-sm">
      <CardHeader>
        <p className="text-xl font-semibold text-center">Admin</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <RoleGate allowedRole={Role.ADMIN}>
          <FormSuccess message="You are allowed to view this page" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-sm border p-3 font-medium">
          <p className="text-sm font-mediu">Admin-only API route</p>
          <Button onClick={onApiRouteClick}>Click to test</Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-sm border p-3 font-medium">
          <p className="text-sm font-mediu">Admin-only server action</p>
          <Button onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
}
