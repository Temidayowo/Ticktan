"use client";

import { useActionState, useState } from "react";
import type { ProjectFormState } from "@/app/admin/(dashboard)/portfolio/actions";
import MultiImageUpload from "./multi-image-upload";

type ProjectFormProps = {
  action: (
    state: ProjectFormState,
    formData: FormData
  ) => Promise<ProjectFormState>;
  submitLabel: string;
  defaultValues?: {
    name: string;
    tag: string;
    client: string;
    size: string;
    scope: string;
    description: string;
    featured: boolean;
    images: string[];
  };
};

const ProjectForm = ({
  action,
  submitLabel,
  defaultValues,
}: ProjectFormProps) => {
  const [state, formAction, pending] = useActionState(action, undefined);
  const [images, setImages] = useState<string[]>(defaultValues?.images ?? []);

  return (
    <form action={formAction} className="flex flex-col gap-6">
      {state?.error && (
        <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-destructive">
          {state.error}
        </p>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-navy">
            Project name
          </label>
          <input
            id="name"
            name="name"
            defaultValue={defaultValues?.name}
            required
            className="rounded-lg border border-border px-3.5 py-2.5 text-sm outline-none focus:border-coral"
          />
          {state?.fieldErrors?.name && (
            <p className="text-xs text-destructive">
              {state.fieldErrors.name[0]}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="tag" className="text-sm font-medium text-navy">
            Scope tag
          </label>
          <input
            id="tag"
            name="tag"
            placeholder="e.g. Commercial, Corporate, Retail Fit-Out"
            defaultValue={defaultValues?.tag}
            required
            className="rounded-lg border border-border px-3.5 py-2.5 text-sm outline-none focus:border-coral"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="client" className="text-sm font-medium text-navy">
            Client
          </label>
          <input
            id="client"
            name="client"
            defaultValue={defaultValues?.client}
            required
            className="rounded-lg border border-border px-3.5 py-2.5 text-sm outline-none focus:border-coral"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="size" className="text-sm font-medium text-navy">
            Size
          </label>
          <input
            id="size"
            name="size"
            placeholder="e.g. 12,000 sq ft"
            defaultValue={defaultValues?.size}
            required
            className="rounded-lg border border-border px-3.5 py-2.5 text-sm outline-none focus:border-coral"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="scope" className="text-sm font-medium text-navy">
          Scope summary
        </label>
        <textarea
          id="scope"
          name="scope"
          rows={2}
          placeholder="One sentence describing the project — shown on the portfolio cards."
          defaultValue={defaultValues?.scope}
          required
          className="rounded-lg border border-border px-3.5 py-2.5 text-sm outline-none focus:border-coral"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="description"
          className="text-sm font-medium text-navy"
        >
          Full description
        </label>
        <textarea
          id="description"
          name="description"
          rows={8}
          placeholder="Leave a blank line between paragraphs."
          defaultValue={defaultValues?.description}
          required
          className="rounded-lg border border-border px-3.5 py-2.5 text-sm outline-none focus:border-coral"
        />
        {state?.fieldErrors?.description && (
          <p className="text-xs text-destructive">
            {state.fieldErrors.description[0]}
          </p>
        )}
      </div>

      <label className="flex w-fit items-center gap-2 text-sm font-medium text-navy">
        <input
          type="checkbox"
          name="featured"
          defaultChecked={defaultValues?.featured}
          className="size-4 rounded border-border accent-coral"
        />
        Feature on homepage
      </label>

      <MultiImageUpload label="Project photos" value={images} onChange={setImages} />
      <input type="hidden" name="images" value={JSON.stringify(images)} />

      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-lg bg-coral px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral/80 disabled:opacity-60"
      >
        {pending ? "Saving…" : submitLabel}
      </button>
    </form>
  );
};

export default ProjectForm;
