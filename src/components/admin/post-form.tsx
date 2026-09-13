"use client";

import { useActionState, useState } from "react";
import type { PostFormState } from "@/app/admin/(dashboard)/blog/actions";
import RichTextEditor from "./rich-text-editor";
import ImageUpload from "./image-upload";

type PostFormProps = {
  action: (state: PostFormState, formData: FormData) => Promise<PostFormState>;
  submitLabel: string;
  defaultValues?: {
    title: string;
    excerpt: string;
    content: string;
    category: string;
    coverImageUrl: string | null;
    status: "DRAFT" | "PUBLISHED";
  };
};

const CATEGORIES = [
  "Design",
  "Construction",
  "Project Management",
  "Costing",
  "Art",
];

const PostForm = ({ action, submitLabel, defaultValues }: PostFormProps) => {
  const [state, formAction, pending] = useActionState(action, undefined);
  const [content, setContent] = useState(defaultValues?.content ?? "");
  const [coverImageUrl, setCoverImageUrl] = useState<string | null>(
    defaultValues?.coverImageUrl ?? null
  );

  return (
    <form action={formAction} className="flex flex-col gap-6">
      {state?.error && (
        <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-destructive">
          {state.error}
        </p>
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="title" className="text-sm font-medium text-navy">
          Title
        </label>
        <input
          id="title"
          name="title"
          defaultValue={defaultValues?.title}
          required
          className="rounded-lg border border-border px-3.5 py-2.5 text-sm outline-none focus:border-coral"
        />
        {state?.fieldErrors?.title && (
          <p className="text-xs text-destructive">
            {state.fieldErrors.title[0]}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="category" className="text-sm font-medium text-navy">
            Category
          </label>
          <select
            id="category"
            name="category"
            defaultValue={defaultValues?.category ?? CATEGORIES[0]}
            className="rounded-lg border border-border px-3.5 py-2.5 text-sm outline-none focus:border-coral"
          >
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="status" className="text-sm font-medium text-navy">
            Status
          </label>
          <select
            id="status"
            name="status"
            defaultValue={defaultValues?.status ?? "DRAFT"}
            className="rounded-lg border border-border px-3.5 py-2.5 text-sm outline-none focus:border-coral"
          >
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Published</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="excerpt" className="text-sm font-medium text-navy">
          Excerpt
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          rows={2}
          defaultValue={defaultValues?.excerpt}
          required
          className="rounded-lg border border-border px-3.5 py-2.5 text-sm outline-none focus:border-coral"
        />
        {state?.fieldErrors?.excerpt && (
          <p className="text-xs text-destructive">
            {state.fieldErrors.excerpt[0]}
          </p>
        )}
      </div>

      <ImageUpload
        label="Cover image"
        value={coverImageUrl}
        onChange={setCoverImageUrl}
      />
      <input type="hidden" name="coverImageUrl" value={coverImageUrl ?? ""} />

      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-navy">Content</span>
        <RichTextEditor content={content} onChange={setContent} />
        <input type="hidden" name="content" value={content} />
        {state?.fieldErrors?.content && (
          <p className="text-xs text-destructive">
            {state.fieldErrors.content[0]}
          </p>
        )}
      </div>

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

export default PostForm;
