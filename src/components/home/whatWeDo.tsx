import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const services = [
  {
    letter: "D",
    title: "Design Consultancy",
    description: "Concept, planning and architectural design tailored to your vision.",
  },
  {
    letter: "B",
    title: "Building Construction",
    description: "Quality builds executed on schedule with rigorous site standards.",
  },
  {
    letter: "P",
    title: "Project Management",
    description: "End-to-end coordination keeping timelines, teams and budgets aligned.",
  },
  {
    letter: "C",
    title: "Costing",
    description: "Accurate estimation and budgeting to keep every project financially sound.",
  },
  {
    letter: "A",
    title: "Art",
    description: "Bespoke murals and installations that give spaces character.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="bg-white">
      <div className="px-auto max-w-7xl mx-6 py-24 sm:mx-12 sm:py-28 md:mx-16 md:py-24 lg:mx-32">
        <p className="text-sm font-semibold uppercase tracking-wider text-coral">
          What We Do
        </p>
        <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-start md:gap-8">
          <h2 className="max-w-xl text-2xl font-extrabold text-navy md:text-3xl lg:text-4xl">
            Full-service capability, under one roof
          </h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            Every discipline your project needs — coordinated by a single
            team, so nothing gets lost between hand-offs.
          </p>
        </div>

        <Link
          href="/services"
          className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-coral"
        >
          View all services
          <FaArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
          {services.map(({ letter, title, description }) => (
            <div
              key={title}
              className="group flex flex-col gap-4 rounded-2xl border-[0.5px] border-border bg-gray-50 p-6 hover:shadow-sm transition-colors duration-300 hover:bg-navy"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-white text-lg font-bold text-navy transition-colors duration-300 group-hover:bg-coral group-hover:text-white">
                {letter}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-navy transition-colors duration-300 group-hover:text-white">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-white/70">
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

export default WhatWeDo;
