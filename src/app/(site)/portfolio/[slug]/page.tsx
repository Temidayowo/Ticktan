import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";
import PlaceholderImage from "@/components/ui/placeholder-image";
import ProjectHeader from "@/components/portfolio/projectHeader";
import ProjectCard from "@/components/portfolio/projectCard";
import CtaBanner from "@/components/home/ctaBanner";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.name} | TickTan Limited`,
    description: project.scope,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <ProjectHeader project={project} />

      <section className="bg-white">
        <div className="px-auto max-w-7xl mx-6 py-16 sm:mx-12 sm:py-20 md:mx-16 md:py-24 lg:mx-32">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <PlaceholderImage className="aspect-4/3 w-full rounded-2xl sm:col-span-2" />
            <PlaceholderImage className="aspect-4/3 w-full rounded-2xl" />
            <PlaceholderImage className="aspect-4/3 w-full rounded-2xl" />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-16">
            <div className="flex flex-col gap-6 md:col-span-2">
              <h2 className="text-2xl font-extrabold text-navy md:text-3xl">
                Project overview
              </h2>
              {project.description.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-relaxed text-muted-foreground md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <dl className="flex flex-col gap-6 rounded-2xl bg-gray-50 p-6 md:p-8">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Client
                </dt>
                <dd className="mt-1 text-base font-bold text-navy">
                  {project.client}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Size
                </dt>
                <dd className="mt-1 text-base font-bold text-navy">
                  {project.size}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Scope
                </dt>
                <dd className="mt-1 text-base font-bold text-navy">
                  {project.tag}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="px-auto max-w-7xl mx-6 py-16 sm:mx-12 sm:py-20 md:mx-16 md:py-24 lg:mx-32">
          <h2 className="text-2xl font-extrabold text-navy md:text-3xl">
            More projects
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedProjects.map((related) => (
              <ProjectCard key={related.slug} project={related} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
