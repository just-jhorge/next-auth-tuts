import { Badge } from "./ui/badge";
import { ExtendedUser } from "../../next-auth";
import { Card, CardContent, CardHeader } from "./ui/card";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-[600px] shadow-sm rounded-sm">
      <CardHeader>
        <p className="text-xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row items-center justify-between rounded-sm border p-3 shadow-sm">
          <p className="text-sm font-medium">ID</p>
          <p className="text-xs truncate max-w-[180px] font-mono p-1 bg-slate-100 rounded-sm">
            {user?.id}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-sm border p-3 shadow-sm">
          <p className="text-sm font-medium">Name</p>
          <p className="text-xs truncate max-w-[180px] font-mono p-1 bg-slate-100 rounded-sm">
            {user?.name}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-sm border p-3 shadow-sm">
          <p className="text-sm font-medium">Email</p>
          <p className="text-xs truncate max-w-[180px] font-mono p-1 bg-slate-100 rounded-sm">
            {user?.email}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-sm border p-3 shadow-sm">
          <p className="text-sm font-medium">Role</p>
          <p className="text-xs truncate max-w-[180px] font-mono p-1 bg-slate-100 rounded-sm">
            {user?.role}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-sm border p-3 shadow-sm">
          <p className="text-sm font-medium">Two Factor Enabled</p>
          <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
            {user?.isTwoFactorEnabled ? "ON" : "OFF"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
