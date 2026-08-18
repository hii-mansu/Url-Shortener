"use client";

import Link from "next/link";
import { User, ChevronDown } from "lucide-react";
import { useState } from "react";

const isLoggedIn = true;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold text-gray-900"
        >
          URL Shortener
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Home
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Dashboard
              </Link>

              <Link
                href="/dashboard/urls"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                My URLs
              </Link>

              <Link
                href="/dashboard/analytics"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Analytics
              </Link>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center gap-2 rounded-full border border-gray-200 px-2 py-1.5 hover:bg-gray-50"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                    <User size={17} />
                  </span>

                  <ChevronDown
                    size={15}
                    className="text-gray-500"
                  />
                </button>

                {isMenuOpen && (
                  <div className="absolute right-0 top-12 z-50 w-56 border border-gray-200 bg-white py-2 shadow-lg">
                    <div className="border-b border-gray-100 px-4 py-3">
                      <p className="text-sm font-medium text-gray-900">
                        User
                      </p>

                      <p className="mt-1 truncate text-xs text-gray-500">
                        user@example.com
                      </p>
                    </div>

                    <div className="py-1">
                      <Link
                        href="/dashboard"
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Dashboard
                      </Link>

                      <Link
                        href="/dashboard/profile"
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Profile
                      </Link>

                      <Link
                        href="/dashboard/urls"
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        My URLs
                      </Link>

                      <Link
                        href="/dashboard/analytics"
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Analytics
                      </Link>
                    </div>

                    <div className="border-t border-gray-100 pt-1">
                      <button
                        type="button"
                        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Get started
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}