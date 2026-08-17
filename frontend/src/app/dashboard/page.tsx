import {
  Link2,
  MousePointerClick,
  Activity,
  Clock3,
} from "lucide-react";

const stats = [
  {
    title: "Total URLs",
    value: "24",
    icon: Link2,
  },
  {
    title: "Total Clicks",
    value: "1,284",
    icon: MousePointerClick,
  },
  {
    title: "Active Links",
    value: "21",
    icon: Activity,
  },
  {
    title: "Expired Links",
    value: "3",
    icon: Clock3,
  },
];

export default function DashboardPage() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-gray-600">
          Overview of your short links and their performance.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="border border-gray-200 bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  {stat.title}
                </p>

                <Icon
                  size={18}
                  className="text-gray-400"
                />
              </div>

              <p className="mt-3 text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 border border-gray-200 bg-white p-6">
        <h2 className="font-semibold text-gray-900">
          Recent URLs
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Your recently created short links will appear here.
        </p>
      </div>
    </div>
  );
}