import Sidebar from "@/src/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div>
      <Sidebar />

      <main>{children}</main>
    </div>
  );
}