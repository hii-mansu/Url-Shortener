import {
  MousePointerClick,
  Monitor,
  Smartphone,
  Globe,
} from "lucide-react";

const browsers = [
  { name: "Chrome", value: 142 },
  { name: "Firefox", value: 48 },
  { name: "Safari", value: 35 },
  { name: "Edge", value: 23 },
];

const devices = [
  { name: "Desktop", value: 168 },
  { name: "Mobile", value: 72 },
  { name: "Tablet", value: 8 },
];

const countries = [
  { name: "India", value: 126 },
  { name: "United States", value: 34 },
  { name: "United Kingdom", value: 18 },
  { name: "Germany", value: 12 },
];

export default function AnalyticsPage() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Analytics
        </h1>

        <p className="mt-1 text-sm text-gray-600">
          Understand how people interact with your short links.
        </p>
      </div>

      {/* Total clicks */}
      <div className="mt-8 border border-gray-200 bg-white p-6">
        <div className="flex items-center gap-3">
          <MousePointerClick
            size={20}
            className="text-blue-600"
          />

          <div>
            <p className="text-sm text-gray-500">
              Total clicks
            </p>

            <p className="mt-1 text-3xl font-semibold text-gray-900">
              248
            </p>
          </div>
        </div>
      </div>

      {/* Browser / Device */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <AnalyticsCard
          title="Browsers"
          icon={<Monitor size={18} />}
          data={browsers}
        />

        <AnalyticsCard
          title="Devices"
          icon={<Smartphone size={18} />}
          data={devices}
        />
      </div>

      {/* Countries */}
      <div className="mt-6">
        <AnalyticsCard
          title="Countries"
          icon={<Globe size={18} />}
          data={countries}
        />
      </div>
    </div>
  );
}

function AnalyticsCard({
  title,
  icon,
  data,
}: {
  title: string;
  icon: React.ReactNode;
  data: {
    name: string;
    value: number;
  }[];
}) {
  return (
    <div className="border border-gray-200 bg-white p-6">
      <div className="flex items-center gap-2">
        <span className="text-gray-500">{icon}</span>

        <h2 className="font-semibold text-gray-900">
          {title}
        </h2>
      </div>

      <div className="mt-5 space-y-4">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between"
          >
            <span className="text-sm text-gray-600">
              {item.name}
            </span>

            <span className="text-sm font-medium text-gray-900">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}