"use client";

import { useActionState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/(site)/contact/actions";

const initialState: ContactFormState = { status: "idle", message: "" };

const inputClasses =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-muted-foreground focus:border-coral";

const ContactForm = () => {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-navy">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-navy">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-semibold text-navy">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="What's this about?"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project"
          className={inputClasses}
        />
      </div>

      {state.status !== "idle" && (
        <p
          aria-live="polite"
          className={`text-sm font-medium ${
            state.status === "success" ? "text-navy" : "text-destructive"
          }`}
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex w-fit items-center justify-center gap-3 rounded-2xl bg-coral px-8 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-coral/80 disabled:opacity-60"
      >
        {pending ? "Sending..." : "Send Message"}
        <FaArrowRight className="size-4 shrink-0" />
      </button>
    </form>
  );
};

export default ContactForm;
