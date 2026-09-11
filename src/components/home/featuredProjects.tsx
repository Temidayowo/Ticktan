import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { projects } from "@/lib/projects";
import ProjectCard from "../portfolio/projectCard";

const featuredProjects = projects.filter((project) => project.featured);

const FeaturedProjects = () => {
  return (
    <section className="bg-gray-50">
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

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
