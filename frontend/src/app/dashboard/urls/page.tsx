"use client";

import CreateUrlModal from "@/src/components/urls/CreateUrlModal";
import DeleteUrlModal from "@/src/components/urls/DeleteUrlModal";
import {
  Copy,
  ExternalLink,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import { useState } from "react";

const urls = [
  {
    id: "1",
    shortCode: "aB72xQ",
    originalUrl: "https://example.com/products/new-product",
    clicks: 248,
    status: "Active",
    createdAt: "Aug 13, 2026",
  },
  {
    id: "2",
    shortCode: "kP91mZ",
    originalUrl: "https://example.com/blog/how-to-grow",
    clicks: 126,
    status: "Active",
    createdAt: "Aug 12, 2026",
  },
  {
    id: "3",
    shortCode: "xR42nL",
    originalUrl: "https://example.com/summer-sale",
    clicks: 89,
    status: "Expired",
    createdAt: "Aug 10, 2026",
  },
];

export default function URLsPage() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            My URLs
          </h1>

          <p className="mt-1 text-sm text-gray-600">
            Create and manage your short links.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsCreateOpen(true)}
          className="flex h-10 items-center gap-2 rounded-md bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700"
        >
          <Plus size={17} />
          Create URL
        </button>
      </div>

      {/* URLs table */}
      <div className="mt-8 overflow-hidden border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-5 py-3 font-medium text-gray-600">
                  Short URL
                </th>

                <th className="px-5 py-3 font-medium text-gray-600">
                  Original URL
                </th>

                <th className="px-5 py-3 font-medium text-gray-600">
                  Clicks
                </th>

                <th className="px-5 py-3 font-medium text-gray-600">
                  Status
                </th>

                <th className="px-5 py-3 font-medium text-gray-600">
                  Created
                </th>

                <th className="px-5 py-3 font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {urls.map((url) => (
                <tr
                  key={url.id}
                  className="border-b border-gray-100 last:border-0"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">
                        /{url.shortCode}
                      </span>

                      <button
                        type="button"
                        className="text-gray-400 hover:text-gray-900"
                        title="Copy short URL"
                      >
                        <Copy size={15} />
                      </button>
                    </div>
                  </td>

                  <td className="max-w-xs truncate px-5 py-4 text-gray-600">
                    {url.originalUrl}
                  </td>

                  <td className="px-5 py-4 text-gray-600">
                    {url.clicks}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={
                        url.status === "Active"
                          ? "text-green-600"
                          : "text-gray-500"
                      }
                    >
                      {url.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-gray-600">
                    {url.createdAt}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="text-gray-400 hover:text-gray-900"
                        title="Open short URL"
                      >
                        <ExternalLink size={16} />
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsDeleteOpen(true)}
                        className="text-gray-400 hover:text-gray-900"
                        title="More actions"
                      >
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <CreateUrlModal
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
      />

      <DeleteUrlModal
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      />
    </div>
  );
}