import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ProjectForm from "@/components/admin/project-form";
import { updateProject } from "../actions";

type EditProjectPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditProjectPage({
  params,
}: EditProjectPageProps) {
  const { id } = await params;
  const project = await prisma.project.findUnique({
    where: { id },
    include: { images: { orderBy: { order: "asc" } } },
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="flex max-w-3xl flex-col gap-6">
      <h1 className="text-2xl font-bold text-navy">Edit project</h1>
      <ProjectForm
        action={updateProject.bind(null, project.id)}
        submitLabel="Save changes"
        defaultValues={{
          name: project.name,
          tag: project.tag,
          client: project.client,
          size: project.size,
          scope: project.scope,
          description: project.description,
          featured: project.featured,
          images: project.images.map((image) => image.url),
        }}
      />
    </div>
  );
}
