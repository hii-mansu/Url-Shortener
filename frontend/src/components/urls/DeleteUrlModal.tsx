"use client";

import { X, Trash2 } from "lucide-react";

interface DeleteUrlModalProps {
  open: boolean;
  onClose: () => void;
}

export default function DeleteUrlModal({
  open,
  onClose,
}: DeleteUrlModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
      <div className="w-full max-w-md border border-gray-200 bg-white p-6 shadow-lg">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-50">
              <Trash2 size={18} className="text-red-600" />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">
                Delete URL?
              </h2>

              <p className="mt-1 text-sm leading-5 text-gray-500">
                This action cannot be undone. The short link and its
                analytics will be permanently deleted.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-900"
          >
            <X size={19} />
          </button>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="h-10 rounded-md border border-gray-300 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            type="button"
            className="h-10 rounded-md bg-red-600 px-4 text-sm font-medium text-white hover:bg-red-700"
          >
            Delete URL
          </button>
        </div>
      </div>
    </div>
  );
}