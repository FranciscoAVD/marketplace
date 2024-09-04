"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import {
  BellRingIcon,
  InboxIcon,
  PlusIcon,
  SettingsIcon,
  ShoppingBasketIcon,
  StoreIcon,
  TagIcon,
  XIcon,
} from "lucide-react";
import { cn, stringToSlug } from "@/lib/utils";
import { marketplaceCategories } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import NewItemSidebar from "../../new-item/_components/new-item-details";

const navigation = [
  { name: "Browse All", href: "/dashboard", icon: StoreIcon },
  { name: "Inbox", href: "/dashboard/inbox", icon: InboxIcon },
  {
    name: "Buying",
    href: "/dashboard/buying",
    icon: ShoppingBasketIcon,
  },
  {
    name: "Selling",
    href: "/dashboard/selling",
    icon: TagIcon,
  },
];

export function SidebarDesktop({ className }: { className?: string }) {
  const path = usePathname();
  return (
    <aside className={className}>
      {path === "/dashboard/new-item" ? (
        <NewItemSidebar />
      ) : (
        <DashboardSidebar path={path} />
      )}
    </aside>
  );
}
function DashboardSidebar({ path }: { path: string }) {
  return (
    <nav className="p-4">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <NavigationItems activePath={path} />
        </li>
        <li>
          <div className="text-xs font-semibold leading-6 text-neutral-400">
            Categories
          </div>
          <MarketplaceCategoryItems activePath={path} />
        </li>
        <li className="mt-auto">
          <Link
            href="/dashboard/settings"
            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-600"
          >
            <SettingsIcon
              aria-hidden="true"
              className="h-6 w-6 shrink-0 text-neutral-400 group-hover:text-neutral-600"
            />
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}

//Mobile
export function SidebarMobile({
  isOpen,
  set,
  path,
}: {
  isOpen: boolean;
  set: (value: boolean) => void;
  path: string;
}) {
  return (
    <Dialog open={isOpen} onClose={set} className="relative z-50 lg:hidden">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-neutral-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 flex">
        <DialogPanel
          transition
          className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
        >
          <TransitionChild>
            <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
              <button
                type="button"
                onClick={() => set(false)}
                className="-m-2.5 p-2.5"
              >
                <span className="sr-only">Close sidebar</span>
                <XIcon aria-hidden="true" className="h-6 w-6 text-white" />
              </button>
            </div>
          </TransitionChild>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 py-4">
            <Logo />
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <NavigationItems activePath={path} />
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-neutral-400">
                    Categories
                  </div>

                  <MarketplaceCategoryItems activePath={path} />
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-600"
                  >
                    <SettingsIcon
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0 text-neutral-400 group-hover:text-neutral-600"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

//COMPONENTS

//Dashboard
function NavigationItems({ activePath }: { activePath: string }) {
  return (
    <ul role="list" className="-mx-2 space-y-1">
      {navigation.map((item) => (
        <li key={item.name + "mobile"}>
          <Link
            href={item.href}
            className={cn(
              "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
              {
                "bg-neutral-50 text-neutral-600": activePath === item.href,
                "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-600":
                  activePath !== item.href,
              }
            )}
          >
            <item.icon
              aria-hidden="true"
              className={cn("h-6 w-6 shrink-0", {
                "text-neutral-600": activePath === item.href,
                "text-neutral-400 group-hover:text-neutral-600":
                  activePath !== item.href,
              })}
            />
            {item.name}
          </Link>
        </li>
      ))}
      <li>
        <Button
          className={`w-full justify-center gap-x-2 ${
            activePath === "/dashboard/new-item" && "hidden"
          }`}
          asChild
        >
          <Link href="/dashboard/new-item">
            <PlusIcon className="size-6" />
            Create new item
          </Link>
        </Button>
      </li>
    </ul>
  );
}
function MarketplaceCategoryItems({ activePath }: { activePath: string }) {
  return (
    <ul role="list" className="-mx-2 mt-2 space-y-1">
      {marketplaceCategories.map((cat) => (
        <li key={cat.name}>
          <Link
            href={cat.href + `/${stringToSlug(cat.name)}`}
            className={cn(
              "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
              {
                "bg-neutral-50 text-neutral-600":
                  activePath === cat.href + `/${stringToSlug(cat.name)}`,
                "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-600":
                  activePath !== cat.href + `/${stringToSlug(cat.name)}`,
              }
            )}
          >
            <span
              className={cn(
                "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white text-[0.625rem] font-medium",
                {
                  " text-neutral-600":
                    activePath === cat.href + `/${stringToSlug(cat.name)}`,
                  "text-neutral-400 group-hover:text-neutral-600":
                    activePath !== cat.href + `/${stringToSlug(cat.name)}`,
                }
              )}
            >
              <cat.icon />
            </span>
            <span className="truncate">{cat.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
