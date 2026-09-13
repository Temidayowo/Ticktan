"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/require-admin";
import { deleteFromR2 } from "@/lib/r2";

const teamMemberSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  role: z.string().trim().min(1, "Role is required."),
  experience: z.string().trim().min(1, "Experience is required."),
  credentials: z.string().trim().min(1, "Credentials are required."),
  photoUrl: z.string().trim().optional(),
});

export type TeamMemberFormState =
  | { error?: string; fieldErrors?: Record<string, string[]> }
  | undefined;

export async function createTeamMember(
  _prevState: TeamMemberFormState,
  formData: FormData
): Promise<TeamMemberFormState> {
  await requireAdminSession();

  const parsed = teamMemberSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors };
  }

  const { name, role, experience, credentials, photoUrl } = parsed.data;
  const order = await prisma.teamMember.count();

  await prisma.teamMember.create({
    data: {
      name,
      role,
      experience,
      credentials,
      photoUrl: photoUrl || null,
      order,
    },
  });

  revalidatePath("/about");
  redirect("/admin/team");
}

export async function updateTeamMember(
  id: string,
  _prevState: TeamMemberFormState,
  formData: FormData
): Promise<TeamMemberFormState> {
  await requireAdminSession();

  const parsed = teamMemberSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors };
  }

  const existing = await prisma.teamMember.findUnique({ where: { id } });
  if (!existing) {
    return { error: "Team member not found." };
  }

  const { name, role, experience, credentials, photoUrl } = parsed.data;

  if (existing.photoUrl && existing.photoUrl !== photoUrl) {
    await deleteFromR2(existing.photoUrl);
  }

  await prisma.teamMember.update({
    where: { id },
    data: {
      name,
      role,
      experience,
      credentials,
      photoUrl: photoUrl || null,
    },
  });

  revalidatePath("/about");
  redirect("/admin/team");
}

export async function deleteTeamMember(id: string) {
  await requireAdminSession();
  const member = await prisma.teamMember.delete({ where: { id } });

  if (member.photoUrl) {
    await deleteFromR2(member.photoUrl);
  }

  revalidatePath("/about");
  redirect("/admin/team");
}
