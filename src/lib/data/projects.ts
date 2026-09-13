import "server-only";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@/generated/prisma/client";

const withImages = {
  images: { orderBy: { order: "asc" as const } },
} satisfies Prisma.ProjectInclude;

export type ProjectWithImages = Prisma.ProjectGetPayload<{
  include: typeof withImages;
}>;

export function getProjects() {
  return prisma.project.findMany({
    orderBy: { order: "asc" },
    include: withImages,
  });
}

export function getFeaturedProjects() {
  return prisma.project.findMany({
    where: { featured: true },
    orderBy: { order: "asc" },
    include: withImages,
  });
}

export function getProjectBySlug(slug: string) {
  return prisma.project.findUnique({
    where: { slug },
    include: withImages,
  });
}

export async function getProjectTags() {
  const rows = await prisma.project.findMany({
    select: { tag: true },
    distinct: ["tag"],
  });
  return rows.map((row) => row.tag);
}
