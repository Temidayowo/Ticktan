import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import PostForm from "@/components/admin/post-form";
import { updatePost } from "../actions";

type EditPostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditPostPage({ params }: EditPostPageProps) {
  const { id } = await params;
  const post = await prisma.post.findUnique({ where: { id } });

  if (!post) {
    notFound();
  }

  return (
    <div className="flex max-w-3xl flex-col gap-6">
      <h1 className="text-2xl font-bold text-navy">Edit post</h1>
      <PostForm
        action={updatePost.bind(null, post.id)}
        submitLabel="Save changes"
        defaultValues={{
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          category: post.category,
          coverImageUrl: post.coverImageUrl,
          status: post.status,
        }}
      />
    </div>
  );
}
