import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gray-900">URL Shortener</p>
          <p className="mt-1 text-sm text-gray-500">
            Simple links. Useful analytics.
          </p>
        </div>

        <nav className="flex gap-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>

          <Link href="/login" className="hover:text-gray-900">
            Login
          </Link>

          <Link href="/register" className="hover:text-gray-900">
            Register
          </Link>
        </nav>
      </div>
    </footer>
  );
}