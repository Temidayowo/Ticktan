"use client";

import { useActionState } from "react";
import { updateSettings, type SettingsFormState } from "@/app/admin/(dashboard)/settings/actions";

type SettingsFormProps = {
  defaultValues: {
    companyName: string;
    tagline: string | null;
    contactEmail: string | null;
    contactPhone: string | null;
    contactAddress: string | null;
    twitterUrl: string | null;
    linkedinUrl: string | null;
    instagramUrl: string | null;
    facebookUrl: string | null;
  };
};

const Field = ({
  id,
  label,
  defaultValue,
  error,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  defaultValue: string | null;
  error?: string;
  placeholder?: string;
  type?: string;
}) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-sm font-medium text-navy">
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue ?? ""}
      className="rounded-lg border border-border px-3.5 py-2.5 text-sm outline-none focus:border-coral"
    />
    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);

const initialState: SettingsFormState = undefined;

const SettingsForm = ({ defaultValues }: SettingsFormProps) => {
  const [state, formAction, pending] = useActionState(
    updateSettings,
    initialState
  );

  return (
    <form action={formAction} className="flex max-w-2xl flex-col gap-8">
      <section className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="font-semibold text-navy">Company details</h2>
        <Field
          id="companyName"
          label="Company name"
          defaultValue={defaultValues.companyName}
          error={state?.fieldErrors?.companyName?.[0]}
        />
        <Field
          id="tagline"
          label="Tagline"
          defaultValue={defaultValues.tagline}
        />
      </section>

      <section className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="font-semibold text-navy">Contact information</h2>
        <p className="text-sm text-muted-foreground">
          Shown in the site footer.
        </p>
        <Field
          id="contactEmail"
          label="Contact email"
          type="email"
          defaultValue={defaultValues.contactEmail}
          error={state?.fieldErrors?.contactEmail?.[0]}
        />
        <Field
          id="contactPhone"
          label="Contact phone"
          defaultValue={defaultValues.contactPhone}
        />
        <Field
          id="contactAddress"
          label="Address"
          defaultValue={defaultValues.contactAddress}
        />
      </section>

      <section className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="font-semibold text-navy">Social links</h2>
        <p className="text-sm text-muted-foreground">
          Leave blank to hide an icon from the footer.
        </p>
        <Field
          id="twitterUrl"
          label="X (Twitter)"
          placeholder="https://x.com/ticktan"
          defaultValue={defaultValues.twitterUrl}
          error={state?.fieldErrors?.twitterUrl?.[0]}
        />
        <Field
          id="linkedinUrl"
          label="LinkedIn"
          placeholder="https://linkedin.com/company/ticktan"
          defaultValue={defaultValues.linkedinUrl}
          error={state?.fieldErrors?.linkedinUrl?.[0]}
        />
        <Field
          id="instagramUrl"
          label="Instagram"
          placeholder="https://instagram.com/ticktan"
          defaultValue={defaultValues.instagramUrl}
          error={state?.fieldErrors?.instagramUrl?.[0]}
        />
        <Field
          id="facebookUrl"
          label="Facebook"
          placeholder="https://facebook.com/ticktan"
          defaultValue={defaultValues.facebookUrl}
          error={state?.fieldErrors?.facebookUrl?.[0]}
        />
      </section>

      {state?.success && (
        <p className="text-sm font-medium text-teal-600">Settings saved.</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-lg bg-coral px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral/80 disabled:opacity-60"
      >
        {pending ? "Saving…" : "Save settings"}
      </button>
    </form>
  );
};

export default SettingsForm;
