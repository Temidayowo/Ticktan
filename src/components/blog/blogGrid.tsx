import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaRegCalendar, FaTag } from "react-icons/fa6";
import PlaceholderImage from "../ui/placeholder-image";
import { getPublishedPosts } from "@/lib/data/posts";

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);

const BlogGrid = async () => {
  const posts = await getPublishedPosts();

  return (
    <section className="bg-gray-50">
      <div className="px-auto max-w-7xl mx-6 py-16 sm:mx-12 sm:py-20 md:mx-16 md:py-24 lg:mx-32">
        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No posts published yet — check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-4 overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                {post.coverImageUrl ? (
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={post.coverImageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transition-opacity group-hover:opacity-80"
                    />
                  </div>
                ) : (
                  <PlaceholderImage className="aspect-video w-full transition-opacity group-hover:opacity-80" />
                )}
                <div className="flex flex-col gap-2 p-6 pt-0">
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-coral">
                    <FaTag className="size-3" />
                    {post.category}
                  </span>
                  <h3 className="text-base font-bold text-navy">
                    {post.title}
                  </h3>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FaRegCalendar className="size-3.5" />
                    {formatDate(post.publishedAt ?? post.createdAt)}
                  </span>
                  <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors group-hover:text-coral">
                    Read more
                    <FaArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
