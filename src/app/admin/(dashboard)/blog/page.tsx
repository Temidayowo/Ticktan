import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deletePost } from "./actions";
import ConfirmSubmitButton from "@/components/admin/confirm-submit-button";

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);

export default async function AdminBlogPage() {
  const posts = await prisma.post.findMany({
    orderBy: { updatedAt: "desc" },
  });

  return (
    <div className="flex min-w-0 flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-navy">Blog posts</h1>
        <Link
          href="/admin/blog/new"
          className="rounded-lg bg-coral px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral/80"
        >
          New post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="rounded-2xl bg-white p-8 text-center text-muted-foreground shadow-sm">
          No posts yet.
        </p>
      ) : (
        <div className="min-w-0 overflow-x-auto rounded-2xl bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-6 py-3 font-medium">Title</th>
                <th className="px-6 py-3 font-medium">Category</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Updated</th>
                <th className="px-6 py-3 font-medium">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {posts.map((post) => (
                <tr key={post.id}>
                  <td className="px-6 py-4 font-medium text-navy">
                    {post.title}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {post.category}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        post.status === "PUBLISHED"
                          ? "bg-teal-100 text-teal-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {post.status === "PUBLISHED" ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {formatDate(post.updatedAt)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/admin/blog/${post.id}`}
                        className="rounded-lg px-3 py-1.5 font-medium text-navy transition-colors hover:bg-gray-100"
                      >
                        Edit
                      </Link>
                      <form action={deletePost.bind(null, post.id)}>
                        <ConfirmSubmitButton
                          confirmMessage={`Delete "${post.title}"? This can't be undone.`}
                          className="rounded-lg px-3 py-1.5 font-medium text-destructive transition-colors hover:bg-red-50"
                        >
                          Delete
                        </ConfirmSubmitButton>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
