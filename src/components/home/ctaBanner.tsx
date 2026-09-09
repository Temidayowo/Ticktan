import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const CtaBanner = () => {
  return (
    <section className="bg-coral">
      <div className="px-auto max-w-7xl mx-6 py-16 text-center sm:mx-12 sm:py-20 md:mx-16 lg:mx-32">
        <h2 className="mx-auto max-w-2xl text-2xl font-extrabold text-white md:text-3xl lg:text-4xl">
          Ready to start your project?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/90 md:text-base">
          Tell us what you&apos;re building and we&apos;ll get back to you
          with a clear scope and timeline.
        </p>
        <Link
          href="/get-a-quote"
          className="mt-8 inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-coral transition-colors duration-300 hover:bg-white/90"
        >
          Get a Quote
          <FaArrowRight className="size-4 shrink-0" />
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
