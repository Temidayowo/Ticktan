import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCirclePlay } from "react-icons/fa6";
import { Button } from "../ui/button";

const stats = [
  { value: "15+", label: "Projects delivered" },
  { value: "15 yrs", label: "Industry experience" },
  { value: "98%", label: "Client retention" },
];

const Hero = () => {
  return (
    <section className="relative isolate flex min-h-screen w-full items-center overflow-hidden md:min-h-[37.5rem]">
      <Image
        src="/image/home-hero.jpg"
        alt="Background description"
        fill
        className="-z-10 object-cover"
        priority
      />
      <div className="absolute inset-0 z-10 bg-navy/85" />

      <div className="relative z-20 px-auto w-full mx-6 py-24 sm:mx-12 sm:py-28 md:mx-16 md:py-40 lg:mx-32">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex max-w-xl flex-col gap-6 md:gap-8">
            <h1 className=" text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Building trust, one project at a time
            </h1>
            <p className="font-inter text-sm leading-relaxed text-gray-200 sm:text-base md:text-lg">
              From concept to completion, we deliver design, construction and
              project management with precision, transparency and craftsmanship
              at every stage.
            </p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:gap-6">
              <Button
                render={<Link href="/get-a-quote" />}
                nativeButton={false}
                className="flex h-auto w-full items-center justify-center gap-3 rounded-2xl bg-coral px-6 py-4 text-base text-white transition-colors duration-300 hover:bg-coral/80 sm:w-auto sm:px-8 sm:text-lg"
              >
                Get a Quote
                <FaArrowRight className="size-4 shrink-0" />
              </Button>
              <Link
                href="/portfolio"
                className="group flex items-center justify-center gap-3 text-base font-semibold text-white transition-colors hover:text-coral sm:justify-start"
              >
                <FaCirclePlay className="size-5 shrink-0" />
                View our work
              </Link>
            </div>

            <div className="mt-2 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-6">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="font-heading text-2xl font-bold text-white sm:text-3xl">
                    {value}
                  </span>
                  <span className="text-xs text-gray-300 sm:text-sm">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
