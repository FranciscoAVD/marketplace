import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NewItemSidebar() {
  return (
    <>
      <Link href="/dashboard" className="flex gap-x-2 p-2 w-fit ">
        <ChevronLeft className="size-6 bg-neutral-200 rounded-full" />
        Back 
      </Link>
      New Item Sidebar
    </>
  );
}
