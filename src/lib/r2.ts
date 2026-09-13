import "server-only";
import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";

export const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export const R2_BUCKET = process.env.R2_BUCKET_NAME!;

export function publicUrlFor(key: string) {
  return `${process.env.R2_PUBLIC_URL}/${key}`;
}

/**
 * Best-effort delete of an uploaded image given its public URL. Silently
 * ignores URLs that aren't ours (e.g. left over from before R2 was wired up)
 * and logs rather than throws, so a storage hiccup never blocks a DB delete.
 */
export async function deleteFromR2(url: string) {
  const publicBase = process.env.R2_PUBLIC_URL;
  if (!publicBase || !url.startsWith(`${publicBase}/`)) return;

  const key = url.slice(publicBase.length + 1);

  try {
    await r2.send(new DeleteObjectCommand({ Bucket: R2_BUCKET, Key: key }));
  } catch (error) {
    console.error(`Failed to delete R2 object "${key}":`, error);
  }
}

/** Extracts every <img src="..."> URL from stored post HTML. */
export function extractImageUrls(html: string): string[] {
  const urls = new Set<string>();
  const regex = /<img[^>]+src="([^"]+)"/gi;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(html)) !== null) {
    urls.add(match[1]);
  }
  return Array.from(urls);
}
