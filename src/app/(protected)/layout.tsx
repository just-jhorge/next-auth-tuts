import React from "react";
import Navbar from "./_components/navbar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-gray-200">
      <Navbar />
      {children}
    </div>
  );
}
