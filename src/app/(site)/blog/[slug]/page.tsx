import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaRegCalendar, FaTag } from "react-icons/fa6";
import { getPublishedPostBySlug, getPublishedPosts } from "@/lib/data/posts";
import CtaBanner from "@/components/home/ctaBanner";

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | TickTan Limited`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="relative isolate flex w-full items-center overflow-hidden bg-navy">
        <div className="relative z-20 px-auto w-full mx-6 py-32 sm:mx-12 sm:py-36 md:mx-16 md:py-40 lg:mx-32">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-coral"
          >
            <FaArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
            All articles
          </Link>

          <span className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-coral">
            <FaTag className="size-3.5" />
            {post.category}
          </span>
          <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <span className="mt-6 flex items-center gap-2 text-sm text-gray-300">
            <FaRegCalendar className="size-3.5" />
            {formatDate(post.publishedAt ?? post.createdAt)}
          </span>
        </div>
      </section>

      {post.coverImageUrl && (
        <section className="bg-white">
          <div className="px-auto max-w-5xl mx-6 pt-10 sm:mx-12 md:mx-16 lg:mx-auto">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
              <Image
                src={post.coverImageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      <section className="bg-white">
        <div className="px-auto max-w-3xl mx-6 py-16 sm:mx-12 sm:py-20 md:mx-16 md:py-24 lg:mx-auto">
          <div
            className="prose prose-neutral max-w-none prose-headings:font-heading prose-headings:text-navy prose-a:text-coral"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
