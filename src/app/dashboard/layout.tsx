import Sidebar from "./_components/sidebar/sidebar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
      <Sidebar />
      {children}
      </>
    );
  }