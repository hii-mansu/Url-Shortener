import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-md">
        <div className="border border-gray-200 bg-white p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              Create your account
            </h1>

            <p className="mt-2 text-sm text-gray-600">
              Start creating and managing your short links.
            </p>
          </div>

          <form className="space-y-5">
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
                placeholder="Your name"
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
                placeholder="you@example.com"
                className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Create a password"
                className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="h-11 w-full rounded-md bg-blue-600 text-sm font-medium text-white hover:bg-blue-700"
            >
              Create account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}