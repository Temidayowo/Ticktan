import Link from "next/link";
import { FaArrowRight, FaRegCalendar } from "react-icons/fa6";
import PlaceholderImage from "../ui/placeholder-image";

const posts = [
  {
    title: "5 things to check before signing an office fit-out contract",
    date: "August 12, 2026",
  },
  {
    title: "How we deliver bank branch renovations without downtime",
    date: "July 28, 2026",
  },
  {
    title: "Budgeting for a commercial build: what actually drives cost",
    date: "July 9, 2026",
  },
];

const BlogPreview = () => {
  return (
    <section className="bg-white">
      <div className="px-auto max-w-7xl mx-6 py-16 sm:mx-12 sm:py-20 md:mx-16 md:py-24 lg:mx-32">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-coral">
              From the blog
            </p>
            <h2 className="mt-4 max-w-xl text-2xl font-extrabold text-navy md:text-3xl lg:text-4xl">
              Latest insights
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-coral"
          >
            View all posts
            <FaArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ title, date }) => (
            <Link
              key={title}
              href="/blog"
              className="group flex flex-col gap-4"
            >
              <PlaceholderImage className="aspect-video w-full rounded-2xl transition-opacity group-hover:opacity-80" />
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-navy">{title}</h3>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FaRegCalendar className="size-3.5" />
                  {date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
