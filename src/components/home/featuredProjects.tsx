import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import PlaceholderImage from "../ui/placeholder-image";

const projects = [
  {
    name: "Corporate HQ Renovation",
    scope: "Full office fit-out and interior redesign for a 12,000 sq ft banking headquarters.",
  },
  {
    name: "Tech Campus Build-Out",
    scope: "Design, construction and project management for a multi-floor tech office space.",
  },
  {
    name: "Retail Bank Branch Fit-Out",
    scope: "Turnkey branch renovation delivered on an accelerated 8-week timeline.",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="bg-white">
      <div className="px-auto max-w-7xl mx-6 py-16 sm:mx-12 sm:py-20 md:mx-16 md:py-24 lg:mx-32">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-coral">
              Our Work
            </p>
            <h2 className="mt-4 max-w-xl text-2xl font-extrabold text-navy md:text-3xl lg:text-4xl">
              Featured projects
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-coral"
          >
            View full portfolio
            <FaArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ name, scope }) => (
            <Link
              key={name}
              href="/portfolio"
              className="group flex flex-col gap-4"
            >
              <PlaceholderImage className="aspect-4/3 w-full rounded-2xl transition-opacity group-hover:opacity-80" />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-navy">{name}</h3>
                <p className="text-sm text-muted-foreground">{scope}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
