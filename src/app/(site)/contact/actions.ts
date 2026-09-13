"use server";

import { prisma } from "@/lib/prisma";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in every field." };
  }

  if (!emailPattern.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    await prisma.contactMessage.create({
      data: { name, email, message },
    });
  } catch {
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again.",
    };
  }

  return {
    status: "success",
    message: "Thanks — we've received your message and will be in touch shortly.",
  };
}
