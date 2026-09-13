"use client";

import { useState } from "react";
import type { ProjectWithImages } from "@/lib/data/projects";
import ProjectCard from "./projectCard";

type PortfolioGridProps = {
  projects: ProjectWithImages[];
  tags: string[];
};

const PortfolioGrid = ({ projects, tags }: PortfolioGridProps) => {
  const [active, setActive] = useState("All");
  const filters = ["All", ...tags];

  const filtered =
    active === "All"
      ? projects
      : projects.filter((project) => project.tag === active);

  return (
    <section className="bg-white">
      <div className="px-auto max-w-7xl mx-6 py-16 sm:mx-12 sm:py-20 md:mx-16 md:py-24 lg:mx-32">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 ${
                active === filter
                  ? "bg-navy text-white"
                  : "bg-gray-50 text-navy hover:bg-gray-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-muted-foreground">
            No projects in this category yet.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGrid;
