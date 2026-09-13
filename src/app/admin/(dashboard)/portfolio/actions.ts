"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/require-admin";
import { uniqueSlug } from "@/lib/slug";

const projectSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  tag: z.string().trim().min(1, "Scope tag is required."),
  client: z.string().trim().min(1, "Client is required."),
  size: z.string().trim().min(1, "Size is required."),
  scope: z.string().trim().min(1, "Scope summary is required."),
  description: z.string().trim().min(1, "Description is required."),
  featured: z.string().optional(),
  images: z.string().optional(),
});

export type ProjectFormState =
  | { error?: string; fieldErrors?: Record<string, string[]> }
  | undefined;

function parseImages(json?: string): string[] {
  if (!json) return [];
  try {
    const parsed = JSON.parse(json);
    return Array.isArray(parsed)
      ? parsed.filter((url): url is string => typeof url === "string")
      : [];
  } catch {
    return [];
  }
}

export async function createProject(
  _prevState: ProjectFormState,
  formData: FormData
): Promise<ProjectFormState> {
  await requireAdminSession();

  const parsed = projectSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors };
  }

  const { name, tag, client, size, scope, description, featured, images } =
    parsed.data;
  const imageUrls = parseImages(images);

  const slug = await uniqueSlug(name, async (candidate) =>
    Boolean(await prisma.project.findUnique({ where: { slug: candidate } }))
  );

  const order = await prisma.project.count();

  const project = await prisma.project.create({
    data: {
      name,
      tag,
      client,
      size,
      scope,
      description,
      slug,
      order,
      featured: featured === "on",
      images: { create: imageUrls.map((url, index) => ({ url, order: index })) },
    },
  });

  revalidatePath("/portfolio");
  revalidatePath("/");
  redirect(`/admin/portfolio/${project.id}`);
}

export async function updateProject(
  id: string,
  _prevState: ProjectFormState,
  formData: FormData
): Promise<ProjectFormState> {
  await requireAdminSession();

  const parsed = projectSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors };
  }

  const existing = await prisma.project.findUnique({ where: { id } });
  if (!existing) {
    return { error: "Project not found." };
  }

  const { name, tag, client, size, scope, description, featured, images } =
    parsed.data;
  const imageUrls = parseImages(images);

  const slug =
    name === existing.name
      ? existing.slug
      : await uniqueSlug(name, async (candidate) => {
          if (candidate === existing.slug) return false;
          return Boolean(
            await prisma.project.findUnique({ where: { slug: candidate } })
          );
        });

  await prisma.$transaction([
    prisma.projectImage.deleteMany({ where: { projectId: id } }),
    prisma.project.update({
      where: { id },
      data: {
        name,
        tag,
        client,
        size,
        scope,
        description,
        slug,
        featured: featured === "on",
        images: {
          create: imageUrls.map((url, index) => ({ url, order: index })),
        },
      },
    }),
  ]);

  revalidatePath("/portfolio");
  revalidatePath(`/portfolio/${existing.slug}`);
  if (slug !== existing.slug) revalidatePath(`/portfolio/${slug}`);
  revalidatePath("/");
  redirect("/admin/portfolio");
}

export async function deleteProject(id: string) {
  await requireAdminSession();
  const project = await prisma.project.delete({ where: { id } });
  revalidatePath("/portfolio");
  revalidatePath(`/portfolio/${project.slug}`);
  revalidatePath("/");
  redirect("/admin/portfolio");
}
