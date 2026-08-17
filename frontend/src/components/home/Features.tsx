import { BarChart3, Link2, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "Simple short links",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, molestiae.",
  },
  {
    icon: BarChart3,
    title: "Useful analytics",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestias similique itaque quam quae animi?",
  },
  {
    icon: ShieldCheck,
    title: "Control your links",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, illo!",
  },
];

export default function Features() {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-blue-600">
            Everything you need
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">
            A simple way to manage your links.
          </h2>

          <p className="mt-4 text-gray-600">
            Create, manage, and understand your short links without
            unnecessary complexity.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="border border-gray-200 bg-white p-6"
              >
                <Icon size={22} className="text-blue-600" />

                <h3 className="mt-5 font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}