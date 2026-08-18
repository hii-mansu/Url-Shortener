import Link from "next/link";
import { ArrowLeft, User } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-3xl">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft size={16} />
        Back to dashboard
      </Link>

      <div className="mt-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Account
        </h1>

        <p className="mt-1 text-sm text-gray-600">
          Manage your account information.
        </p>
      </div>

      <div className="mt-8 border border-gray-200 bg-white">
        <div className="border-b border-gray-200 px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-500">
              <User size={24} />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">
                User
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                user@example.com
              </p>
            </div>
          </div>
        </div>

        <form className="p-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                defaultValue="User"
                className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                defaultValue="user@example.com"
                disabled
                className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 px-3 text-sm text-gray-500 outline-none"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end border-t border-gray-200 pt-6">
            <button
              type="submit"
              className="h-10 rounded-md bg-blue-600 px-5 text-sm font-medium text-white hover:bg-blue-700"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>

      <div className="mt-6 border border-red-200 bg-white p-6">
        <h2 className="font-semibold text-gray-900">
          Account actions
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Sign out from your current account.
        </p>

        <button
          type="button"
          className="mt-4 h-10 rounded-md border border-red-300 px-4 text-sm font-medium text-red-600 hover:bg-red-50"
        >
          Logout
        </button>
      </div>
    </div>
  );
}