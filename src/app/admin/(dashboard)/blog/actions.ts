"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import sanitizeHtml from "sanitize-html";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/require-admin";
import { uniqueSlug } from "@/lib/slug";
import { deleteFromR2, extractImageUrls } from "@/lib/r2";

const postSchema = z.object({
  title: z.string().trim().min(3, "Title must be at least 3 characters."),
  excerpt: z.string().trim().min(1, "Excerpt is required."),
  content: z.string().trim().min(1, "Content is required."),
  category: z.string().trim().min(1, "Category is required."),
  coverImageUrl: z.string().trim().optional(),
  status: z.enum(["DRAFT", "PUBLISHED"]),
});

export type PostFormState =
  | { error?: string; fieldErrors?: Record<string, string[]> }
  | undefined;

function sanitize(html: string) {
  return sanitizeHtml(html, {
    allowedTags: [
      "p",
      "br",
      "strong",
      "em",
      "s",
      "u",
      "h2",
      "h3",
      "ul",
      "ol",
      "li",
      "blockquote",
      "a",
      "img",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      img: ["src", "alt"],
    },
    allowedSchemes: ["http", "https"],
  });
}

export async function createPost(
  _prevState: PostFormState,
  formData: FormData
): Promise<PostFormState> {
  const user = await requireAdminSession();

  const parsed = postSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors };
  }

  const { title, excerpt, content, category, coverImageUrl, status } =
    parsed.data;

  const slug = await uniqueSlug(title, async (candidate) =>
    Boolean(await prisma.post.findUnique({ where: { slug: candidate } }))
  );

  const post = await prisma.post.create({
    data: {
      title,
      excerpt,
      category,
      status,
      content: sanitize(content),
      coverImageUrl: coverImageUrl || null,
      publishedAt: status === "PUBLISHED" ? new Date() : null,
      authorId: user.id,
      slug,
    },
  });

  revalidatePath("/blog");
  revalidatePath("/");
  redirect(`/admin/blog/${post.id}`);
}

export async function updatePost(
  id: string,
  _prevState: PostFormState,
  formData: FormData
): Promise<PostFormState> {
  await requireAdminSession();

  const parsed = postSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors };
  }

  const existing = await prisma.post.findUnique({ where: { id } });
  if (!existing) {
    return { error: "Post not found." };
  }

  const { title, excerpt, content, category, coverImageUrl, status } =
    parsed.data;

  const slug =
    title === existing.title
      ? existing.slug
      : await uniqueSlug(title, async (candidate) => {
          if (candidate === existing.slug) return false;
          return Boolean(
            await prisma.post.findUnique({ where: { slug: candidate } })
          );
        });

  await prisma.post.update({
    where: { id },
    data: {
      title,
      excerpt,
      category,
      status,
      slug,
      content: sanitize(content),
      coverImageUrl: coverImageUrl || null,
      publishedAt:
        status === "PUBLISHED" ? existing.publishedAt ?? new Date() : existing.publishedAt,
    },
  });

  revalidatePath("/blog");
  revalidatePath(`/blog/${existing.slug}`);
  if (slug !== existing.slug) revalidatePath(`/blog/${slug}`);
  revalidatePath("/");
  redirect("/admin/blog");
}

export async function deletePost(id: string) {
  await requireAdminSession();
  const post = await prisma.post.delete({ where: { id } });

  const imageUrls = new Set(extractImageUrls(post.content));
  if (post.coverImageUrl) imageUrls.add(post.coverImageUrl);
  await Promise.all([...imageUrls].map(deleteFromR2));

  revalidatePath("/blog");
  revalidatePath(`/blog/${post.slug}`);
  revalidatePath("/");
  redirect("/admin/blog");
}
