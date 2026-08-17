import Link from "next/link";
import {
  ArrowLeft,
  Copy,
  ExternalLink,
  MousePointerClick,
} from "lucide-react";

export default function URLDetailsPage() {
  const url = {
    shortCode: "aB72xQ",
    originalUrl: "https://example.com/products/new-product",
    clicks: 248,
    status: "Active",
    createdAt: "Aug 13, 2026",
    expiresAt: "Never",
  };

  return (
    <div>
      <Link
        href="/dashboard/urls"
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft size={16} />
        Back to URLs
      </Link>

      <div className="mt-6 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            URL Details
          </h1>

          <p className="mt-1 text-sm text-gray-600">
            View information about your short link.
          </p>
        </div>

        <span className="text-sm font-medium text-green-600">
          Active
        </span>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="border border-gray-200 bg-white p-6 lg:col-span-2">
          <p className="text-sm text-gray-500">
            Short URL
          </p>

          <div className="mt-2 flex items-center gap-3">
            <a
              href={`/${url.shortCode}`}
              className="text-lg font-medium text-blue-600 hover:underline"
            >
              /{url.shortCode}
            </a>

            <button
              type="button"
              className="text-gray-400 hover:text-gray-900"
              title="Copy short URL"
            >
              <Copy size={17} />
            </button>

            <button
              type="button"
              className="text-gray-400 hover:text-gray-900"
              title="Open URL"
            >
              <ExternalLink size={17} />
            </button>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-500">
              Original URL
            </p>

            <p className="mt-2 break-all text-sm text-gray-900">
              {url.originalUrl}
            </p>
          </div>
        </div>

        <div className="border border-gray-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <MousePointerClick
              size={20}
              className="text-blue-600"
            />

            <div>
              <p className="text-sm text-gray-500">
                Total clicks
              </p>

              <p className="text-2xl font-semibold text-gray-900">
                {url.clicks}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 border border-gray-200 bg-white p-6">
        <h2 className="font-semibold text-gray-900">
          Link information
        </h2>

        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          <div>
            <p className="text-sm text-gray-500">
              Created
            </p>

            <p className="mt-1 text-sm text-gray-900">
              {url.createdAt}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Expires
            </p>

            <p className="mt-1 text-sm text-gray-900">
              {url.expiresAt}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Status
            </p>

            <p className="mt-1 text-sm text-green-600">
              {url.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}