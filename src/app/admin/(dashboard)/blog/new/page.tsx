import PostForm from "@/components/admin/post-form";
import { createPost } from "../actions";

export default function NewPostPage() {
  return (
    <div className="flex max-w-3xl flex-col gap-6">
      <h1 className="text-2xl font-bold text-navy">New blog post</h1>
      <PostForm action={createPost} submitLabel="Create post" />
    </div>
  );
}
