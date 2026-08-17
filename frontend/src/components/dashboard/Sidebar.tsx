"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <aside>
      <h2>URL Shortener</h2>

      <nav>
        <Link
          href="/dashboard"
          className={isActive("/dashboard") ? "active" : ""}
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/urls"
          className={isActive("/dashboard/urls") ? "active" : ""}
        >
          URLs
        </Link>

        <Link
          href="/dashboard/analytics"
          className={isActive("/dashboard/analytics") ? "active" : ""}
        >
          Analytics
        </Link>
      </nav>
    </aside>
  );
}