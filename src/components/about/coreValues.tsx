import {
  FaHandshake,
  FaScaleBalanced,
  FaShieldHalved,
  FaBullseye,
} from "react-icons/fa6";

const values = [
  {
    icon: FaHandshake,
    title: "Integrity",
    description: "We do what we say, on time and on budget.",
  },
  {
    icon: FaBullseye,
    title: "Excellence",
    description: "Rigorous standards from concept to final walkthrough.",
  },
  {
    icon: FaScaleBalanced,
    title: "Transparency",
    description: "Clear communication at every stage, no surprises.",
  },
  {
    icon: FaShieldHalved,
    title: "Accountability",
    description: "We own outcomes, not just tasks.",
  },
];

const CoreValues = () => {
  return (
    <section className="bg-white">
      <div className="px-auto max-w-7xl mx-6 py-16 sm:mx-12 sm:py-20 md:mx-16 md:py-24 lg:mx-32">
        <p className="text-sm font-semibold uppercase tracking-wider text-coral">
          Core Values
        </p>
        <h2 className="mt-4 max-w-xl text-2xl font-extrabold text-navy md:text-3xl">
          What guides how we work
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl bg-muted p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-navy text-white">
                <Icon className="size-4" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-navy">{title}</h3>
                <p className="text-sm text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
