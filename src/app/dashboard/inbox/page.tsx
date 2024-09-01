"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
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
    <main className="pt-10 bg-neutral-100 overflow-hidden">
      <div className="flex flex-col gap-y-4 max-w-5xl lg:h-[80%] mx-auto">
        <section className="bg-white border rounded-lg shadow-md">
          <div className="border-b  p-2 pb-0">
            <Button
              variant={"ghost"}
              onClick={() => setInbox("selling")}
              className={cn(
                inbox === "selling" && "border-b-4 border-neutral-900",
                "rounded-none"
              )}
            >
              Selling
            </Button>
            <Button
              variant={"ghost"}
              onClick={() => setInbox("buying")}
              className={cn(
                inbox === "buying" && "border-b-4 border-neutral-900",
                "rounded-none"
              )}
            >
              Buying
            </Button>
          </div>
          <div className="p-2 pb-4 space-x-2 space-y-2">
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
          <ul className="h-full p-1 overflow-y-scroll">
            {Array.from({ length: 8 }, (_, idx) => (
              <li key={idx}>
                <Link
                  href="/dashboard"
                  className="flex gap-x-4 py-5 px-4 border-b hover:bg-neutral-100 cursor-pointer"
                >
                  <div className="h-12 w-12 flex-none rounded-full bg-neutral-200" />
                  <div className="flex-auto">
                    <div className="flex items-baseline justify-between gap-x-4">
                      <p className="text-sm  leading-6">
                        <span className="uppercase font-semibold">
                          Headphones
                        </span>{" "}
                        - Joel Embid
                      </p>
                      <p className="flex-none text-xs text-gray-600">2D</p>
                    </div>
                    <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deserunt, necessitatibus placeat aliquid reprehenderit
                      error ducimus accusantium eos non fugit officia
                      dignissimos nisi vitae quas ipsam. Consequatur, blanditiis
                      beatae eveniet ducimus soluta in quam at architecto
                      necessitatibus alias ipsum temporibus id.
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
