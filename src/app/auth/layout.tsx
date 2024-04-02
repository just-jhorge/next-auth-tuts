import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-red-500 to-blue-500">
      {children}
    </div>
  );
}
