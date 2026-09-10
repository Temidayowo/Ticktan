const steps = [
  {
    number: "01",
    title: "Consult",
    description:
      "We learn your goals, constraints and timeline before a single drawing gets made.",
  },
  {
    number: "02",
    title: "Design & Cost",
    description:
      "Concept design and accurate costing, so you know the full scope before committing.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Construction executed on schedule, with one team accountable from site to snag list.",
  },
  {
    number: "04",
    title: "Handover",
    description:
      "A finished space, delivered as promised — on time, on budget, on spec.",
  },
];

const Process = () => {
  return (
    <section className="bg-muted">
      <div className="px-auto max-w-7xl mx-6 py-16 sm:mx-12 sm:py-20 md:mx-16 md:py-24 lg:mx-32">
        <p className="text-sm font-semibold uppercase tracking-wider text-coral">
          How We Work
        </p>
        <h2 className="mt-4 max-w-xl text-2xl font-extrabold text-navy md:text-3xl">
          A single team, start to finish
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {steps.map(({ number, title, description }) => (
            <div
              key={number}
              className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm"
            >
              <span className="font-sora text-3xl font-bold text-coral">
                {number}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-navy">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
