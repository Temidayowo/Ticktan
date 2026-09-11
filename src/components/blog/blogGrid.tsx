import Link from "next/link";
import { FaArrowRight, FaRegCalendar, FaTag } from "react-icons/fa6";
import PlaceholderImage from "../ui/placeholder-image";

const posts = [
  {
    title: "5 things to check before signing an office fit-out contract",
    category: "Construction",
    date: "August 12, 2026",
  },
  {
    title: "How we deliver bank branch renovations without downtime",
    category: "Project Management",
    date: "July 28, 2026",
  },
  {
    title: "Budgeting for a commercial build: what actually drives cost",
    category: "Costing",
    date: "July 9, 2026",
  },
  {
    title: "Designing offices that hold up after the fit-out photos fade",
    category: "Design",
    date: "June 22, 2026",
  },
  {
    title: "What a project manager actually does on a corporate build",
    category: "Project Management",
    date: "June 3, 2026",
  },
  {
    title: "When bespoke art is worth it in a commercial space",
    category: "Art",
    date: "May 18, 2026",
  },
];

const BlogGrid = () => {
  return (
    <section className="bg-gray-50">
      <div className="px-auto max-w-7xl mx-6 py-16 sm:mx-12 sm:py-20 md:mx-16 md:py-24 lg:mx-32">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ title, category, date }) => (
            <Link
              key={title}
              href="/blog"
              className="group flex flex-col gap-4 overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <PlaceholderImage className="aspect-video w-full transition-opacity group-hover:opacity-80" />
              <div className="flex flex-col gap-2 p-6 pt-0">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-coral">
                  <FaTag className="size-3" />
                  {category}
                </span>
                <h3 className="text-base font-bold text-navy">{title}</h3>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FaRegCalendar className="size-3.5" />
                  {date}
                </span>
                <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors group-hover:text-coral">
                  Read more
                  <FaArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
