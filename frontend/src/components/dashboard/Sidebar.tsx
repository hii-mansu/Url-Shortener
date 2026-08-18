"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Link as LinkIcon,
  BarChart3,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "URLs",
      href: "/dashboard/urls",
      icon: LinkIcon,
    },
    {
      name: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart3,
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <aside className="hidden w-64 shrink-0 border-r border-gray-200 bg-white md:block">
      <div className="sticky top-0 p-4">
        <h2 className="mb-8 px-3 text-lg font-semibold text-gray-900">
          Workspace
        </h2>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium ${
                  active
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}