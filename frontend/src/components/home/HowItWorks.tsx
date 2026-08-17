const steps = [
  {
    number: "01",
    title: "Paste your URL",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iusto!",
  },
  {
    number: "02",
    title: "Create your link",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iusto!",
  },
  {
    number: "03",
    title: "Share and track",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iusto!.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-blue-600">
            How it works
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">
            Shorten a URL in three simple steps.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-sm font-medium text-gray-400">
                {step.number}
              </span>

              <h3 className="mt-4 font-semibold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}