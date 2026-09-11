import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import type { Project } from "@/lib/projects";

const ProjectHeader = ({ project }: { project: Project }) => {
  return (
    <section className="relative isolate flex w-full items-center overflow-hidden">
      <Image
        src="/image/home-hero.jpg"
        alt="Background description"
        fill
        className="-z-10 object-cover"
        priority
      />
      <div className="absolute inset-0 z-10 bg-navy/85" />

      <div className="relative z-20 px-auto w-full mx-6 py-32 sm:mx-12 sm:py-36 md:mx-16 md:py-40 lg:mx-32">
        <Link
          href="/portfolio"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-coral"
        >
          <FaArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
          All projects
        </Link>

        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-coral">
          {project.tag}
        </p>
        <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          {project.name}
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-200 sm:text-base md:text-lg">
          {project.scope}
        </p>
      </div>
    </section>
  );
};

export default ProjectHeader;
