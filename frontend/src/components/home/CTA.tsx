import Link from "next/link";

export default function CTA() {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
          Ready to create your first short link?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Create an account and start managing your links with simple
          analytics.
        </p>

        <Link
          href="/register"
          className="mt-8 inline-flex h-11 items-center rounded-md bg-blue-600 px-6 text-sm font-medium text-white hover:bg-blue-700"
        >
          Get started
        </Link>
      </div>
    </section>
  );
}