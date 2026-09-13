import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaRegCalendar } from "react-icons/fa6";
import PlaceholderImage from "../ui/placeholder-image";
import { getRecentPublishedPosts } from "@/lib/data/posts";

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);

const BlogPreview = async () => {
  const posts = await getRecentPublishedPosts(3);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray-50">
      <div className="px-auto max-w-7xl mx-6 py-16 sm:mx-12 sm:py-20 md:mx-16 md:py-24 lg:mx-32">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-coral">
              Insights
            </p>
            <h2 className="mt-4 max-w-xl text-2xl font-extrabold text-navy md:text-3xl lg:text-4xl">
              From the blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-coral"
          >
            View all articles
            <FaArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FaRegCalendar className="size-3.5" />
                  {formatDate(post.publishedAt ?? post.createdAt)}
                </span>
                <h3 className="text-base font-bold text-navy">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
