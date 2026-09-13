import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteProject } from "./actions";
import ConfirmSubmitButton from "@/components/admin/confirm-submit-button";

export default async function AdminPortfolioPage() {
  const projects = await prisma.project.findMany({
    orderBy: { order: "asc" },
    include: { images: true },
  });

  return (
    <div className="flex min-w-0 flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-navy">Portfolio projects</h1>
        <Link
          href="/admin/portfolio/new"
          className="rounded-lg bg-coral px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral/80"
        >
          New project
        </Link>
      </div>

      {projects.length === 0 ? (
        <p className="rounded-2xl bg-white p-8 text-center text-muted-foreground shadow-sm">
          No projects yet.
        </p>
      ) : (
        <div className="min-w-0 overflow-x-auto rounded-2xl bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Client</th>
                <th className="px-6 py-3 font-medium">Tag</th>
                <th className="px-6 py-3 font-medium">Photos</th>
                <th className="px-6 py-3 font-medium">Featured</th>
                <th className="px-6 py-3 font-medium">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {projects.map((project) => (
                <tr key={project.id}>
                  <td className="px-6 py-4 font-medium text-navy">
                    {project.name}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {project.client}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {project.tag}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {project.images.length}
                  </td>
                  <td className="px-6 py-4">
                    {project.featured && (
                      <span className="rounded-full bg-coral/10 px-2.5 py-1 text-xs font-semibold text-coral">
                        Featured
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/admin/portfolio/${project.id}`}
                        className="rounded-lg px-3 py-1.5 font-medium text-navy transition-colors hover:bg-gray-100"
                      >
                        Edit
                      </Link>
                      <form action={deleteProject.bind(null, project.id)}>
                        <ConfirmSubmitButton
                          confirmMessage={`Delete "${project.name}"? This can't be undone.`}
                          className="rounded-lg px-3 py-1.5 font-medium text-destructive transition-colors hover:bg-red-50"
                        >
                          Delete
                        </ConfirmSubmitButton>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
