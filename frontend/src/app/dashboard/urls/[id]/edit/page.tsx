import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EditUrlPage() {
  return (
    <div className="max-w-2xl">
      <Link
        href="/dashboard/urls"
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft size={16} />
        Back to URLs
      </Link>

      <div className="mt-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Edit URL
        </h1>

        <p className="mt-1 text-sm text-gray-600">
          Update your short link settings.
        </p>
      </div>

      <div className="mt-8 border border-gray-200 bg-white p-6">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="originalUrl"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Original URL
            </label>

            <input
              id="originalUrl"
              type="url"
              defaultValue="https://example.com/products/new-product"
              className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="expiresAt"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Expiration date
            </label>

            <input
              id="expiresAt"
              type="datetime-local"
              className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-blue-500"
            />

            <p className="mt-2 text-xs text-gray-500">
              Leave empty if the link should not expire.
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4"
              />

              <span className="text-sm font-medium text-gray-900">
                Active
              </span>
            </label>

            <div className="flex gap-3">
              <Link
                href="/dashboard/urls"
                className="flex h-10 items-center rounded-md border border-gray-300 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="h-10 rounded-md bg-blue-600 px-5 text-sm font-medium text-white hover:bg-blue-700"
              >
                Save changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}