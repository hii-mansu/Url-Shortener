import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 text-center">
        <p className="mb-4 text-sm font-medium text-blue-600">
          Simple URL shortening
        </p>

        <h1 className="mx-auto max-w-3xl text-5xl font-semibold tracking-tight text-gray-900">
          Short links that are easy to share and track.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          Create short, reliable links and keep track of how they perform
          with simple analytics.
        </p>

        <div className="mx-auto mt-10 flex max-w-2xl gap-3">
          <input
            type="url"
            placeholder="Paste your long URL"
            className="h-12 flex-1 rounded-md border border-gray-300 px-4 text-sm outline-none focus:border-blue-500"
          />

          <button
            type="button"
            className="h-12 rounded-md bg-blue-600 px-6 text-sm font-medium text-white hover:bg-blue-700"
          >
            Shorten URL
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          No complicated setup. Create a short link in seconds.
        </p>

        <div className="mt-16">
          <Link
            href="/register"
            className="text-sm font-medium text-gray-900 underline underline-offset-4"
          >
            Create a free account →
          </Link>
        </div>
      </section>
    </main>
  );
}