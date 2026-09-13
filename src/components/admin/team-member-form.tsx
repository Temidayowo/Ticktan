"use client";

import { useActionState, useState } from "react";
import type { TeamMemberFormState } from "@/app/admin/(dashboard)/team/actions";
import ImageUpload from "./image-upload";

type TeamMemberFormProps = {
  action: (
    state: TeamMemberFormState,
    formData: FormData
  ) => Promise<TeamMemberFormState>;
  submitLabel: string;
  defaultValues?: {
    name: string;
    role: string;
    experience: string;
    credentials: string;
    photoUrl: string | null;
  };
};

const TeamMemberForm = ({
  action,
  submitLabel,
  defaultValues,
}: TeamMemberFormProps) => {
  const [state, formAction, pending] = useActionState(action, undefined);
  const [photoUrl, setPhotoUrl] = useState<string | null>(
    defaultValues?.photoUrl ?? null
  );

  return (
    <form action={formAction} className="flex flex-col gap-6">
      {state?.error && (
        <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-destructive">
          {state.error}
        </p>
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-navy">
          Name
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
        <label htmlFor="role" className="text-sm font-medium text-navy">
          Role
        </label>
        <input
          id="role"
          name="role"
          placeholder="e.g. Principal Architect"
          defaultValue={defaultValues?.role}
          required
          className="rounded-lg border border-border px-3.5 py-2.5 text-sm outline-none focus:border-coral"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="experience"
            className="text-sm font-medium text-navy"
          >
            Experience
          </label>
          <input
            id="experience"
            name="experience"
            placeholder="e.g. 18 years"
            defaultValue={defaultValues?.experience}
            required
            className="rounded-lg border border-border px-3.5 py-2.5 text-sm outline-none focus:border-coral"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="credentials"
            className="text-sm font-medium text-navy"
          >
            Credentials
          </label>
          <input
            id="credentials"
            name="credentials"
            placeholder="e.g. NIA, RIBA"
            defaultValue={defaultValues?.credentials}
            required
            className="rounded-lg border border-border px-3.5 py-2.5 text-sm outline-none focus:border-coral"
          />
        </div>
      </div>

      <ImageUpload label="Photo" value={photoUrl} onChange={setPhotoUrl} />
      <input type="hidden" name="photoUrl" value={photoUrl ?? ""} />

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

export default TeamMemberForm;
