"use client";

import { Plus, X } from "lucide-react";
import { useState } from "react";

interface CreateUrlModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CreateUrlModal({
  open,
  onClose,
}: CreateUrlModalProps) {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
      <div className="w-full max-w-md border border-gray-200 bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Create short URL
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Enter a URL to create a short link.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-900"
          >
            <X size={20} />
          </button>
        </div>

        <form className="mt-6 space-y-5">
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
              placeholder="https://example.com/your-long-url"
              className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="expiresAt"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Expiration date
              <span className="ml-1 font-normal text-gray-400">
                (optional)
              </span>
            </label>

            <input
              id="expiresAt"
              type="datetime-local"
              className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="h-10 rounded-md border border-gray-300 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
  type="button"
  onClick={() => setIsCreateOpen(true)}
  className="flex h-10 items-center gap-2 rounded-md bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700"
>
  <Plus size={17} />
  Create URL
</button>
          </div>
        </form>
      </div>
      <CreateUrlModal
  open={isCreateOpen}
  onClose={() => setIsCreateOpen(false)}
/>
    </div>
  );
}