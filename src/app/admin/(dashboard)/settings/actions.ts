"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/require-admin";

const optionalUrl = z
  .union([z.literal(""), z.url("Enter a valid URL.")])
  .optional()
  .transform((value) => (value ? value : undefined));

const settingsSchema = z.object({
  companyName: z.string().trim().min(1, "Company name is required."),
  tagline: z.string().trim().optional(),
  contactEmail: z
    .union([z.literal(""), z.email("Enter a valid email.")])
    .optional()
    .transform((value) => (value ? value : undefined)),
  contactPhone: z.string().trim().optional(),
  contactAddress: z.string().trim().optional(),
  twitterUrl: optionalUrl,
  linkedinUrl: optionalUrl,
  instagramUrl: optionalUrl,
  facebookUrl: optionalUrl,
});

export type SettingsFormState =
  | { success?: boolean; fieldErrors?: Record<string, string[]> }
  | undefined;

export async function updateSettings(
  _prevState: SettingsFormState,
  formData: FormData
): Promise<SettingsFormState> {
  await requireAdminSession();

  const parsed = settingsSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors };
  }

  const data = parsed.data;

  await prisma.siteSettings.upsert({
    where: { id: "singleton" },
    update: data,
    create: { id: "singleton", ...data },
  });

  revalidatePath("/", "layout");
  revalidatePath("/admin/settings");

  return { success: true };
}
