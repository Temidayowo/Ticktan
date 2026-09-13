import slugify from "slugify";

export function slugifyTitle(title: string) {
  return slugify(title, { lower: true, strict: true, trim: true });
}

/**
 * Appends "-2", "-3", etc. until `isTaken` reports the slug is free.
 * Used so two posts/projects with the same title don't collide.
 */
export async function uniqueSlug(
  base: string,
  isTaken: (slug: string) => Promise<boolean>
) {
  const baseSlug = slugifyTitle(base) || "untitled";
  let slug = baseSlug;
  let suffix = 2;

  while (await isTaken(slug)) {
    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }

  return slug;
}
