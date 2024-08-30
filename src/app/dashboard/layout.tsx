import DashboardHeader from "./_components/header";
import { SidebarDesktop } from "./_components/sidebar/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid lg:grid-cols-[18rem_1fr] grid-rows-[4rem_1fr] h-screen">
      <DashboardHeader className="sticky top-0 lg:col-span-full" />
      <SidebarDesktop className="hidden lg:block h-full overflow-y-auto"/>
      {children}
    </div>
  );
}
