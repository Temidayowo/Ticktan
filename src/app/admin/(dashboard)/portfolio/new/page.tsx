import ProjectForm from "@/components/admin/project-form";
import { createProject } from "../actions";

export default function NewProjectPage() {
  return (
    <div className="flex max-w-3xl flex-col gap-6">
      <h1 className="text-2xl font-bold text-navy">New project</h1>
      <ProjectForm action={createProject} submitLabel="Create project" />
    </div>
  );
}
