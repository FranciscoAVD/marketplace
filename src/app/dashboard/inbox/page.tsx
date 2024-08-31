"use client";

import { Button } from "@/components/ui/button";
import React from "react";
const filters = [
  "All",
  "Pending payment",
  "Paid",
  "To be shipped",
  "Shipped",
  "Cash on delivery",
  "Completed",
];
export default function DashboardInbox() {
  const [inbox, setInbox] = React.useState<"selling" | "buying">("selling");
  return (
    <main className="pt-10 bg-neutral-100">
      <div className="flex flex-col gap-y-4 max-w-5xl lg:h-[700px] mx-auto">
        <section className="bg-white border rounded-lg shadow-md">
          <div className="border-b  p-2 pb-1">
            <Button
              variant={"ghost"}
              className={
                inbox === "selling"
                  ? "border-b-2 border-indigo-500 rounded-none"
                  : ""
              }
            >
              Selling
            </Button>
            <Button variant={"ghost"}>Buying</Button>
          </div>
          <div className="p-2 pb-4 space-x-4 space-y-2">
            <span className="block pl-4 text-black/70 font-medium text-sm">
              Filter by label
            </span>
            {filters.map((f) => (
              <Button variant={"secondary"} className="rounded-full">
                {f}
              </Button>
            ))}
          </div>
        </section>
        <section className="grow bg-white border rounded-lg shadow-md overflow-hidden">
          <ul className="h-full px-4 overflow-y-scroll">
            {Array.from({ length: 10 }, (_, idx) => (
              <li key={idx} className="flex justify-between gap-x-6 py-5 border-b">
                <div className="flex min-w-0 gap-x-4">
                  <div className="size-10 rounded-full bg-neutral-200"/>
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      Leslie Alexander
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      leslie.alexander@example.com
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    Co-Founder / CEO
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
