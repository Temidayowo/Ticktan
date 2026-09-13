import Image from "next/image";
import Link from "next/link";
import PlaceholderImage from "../ui/placeholder-image";
import type { ProjectWithImages } from "@/lib/data/projects";

const ProjectCard = ({ project }: { project: ProjectWithImages }) => {
  const coverImage = project.images[0];

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group relative isolate flex aspect-4/3 w-full overflow-hidden rounded-2xl"
    >
      {coverImage ? (
        <Image
          src={coverImage.url}
          alt={project.name}
          fill
          className="absolute inset-0 -z-10 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <PlaceholderImage className="absolute inset-0 -z-10 size-full transition-transform duration-500 group-hover:scale-105" />
      )}
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-navy via-navy/10 to-transparent" />
      <div className="mt-auto flex flex-col gap-1.5 p-6 sm:p-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-coral">
          {project.tag}
        </span>
        <h3 className="text-xl font-bold text-white sm:text-2xl">
          {project.name}
        </h3>
        <p className="max-w-md text-sm text-gray-200">{project.scope}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
