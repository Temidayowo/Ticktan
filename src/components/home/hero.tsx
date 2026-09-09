import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";

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

      <div className="relative z-20 px-auto w-full mx-6 py-24 sm:mx-12 sm:py-28 md:mx-16 md:py-48 lg:mx-32">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex max-w-xl flex-col gap-6 md:gap-8">
            <h1 className="font-playfair text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Building trust one project at a time
            </h1>
            <p className="font-inter text-sm leading-relaxed text-gray-200 sm:text-base md:text-lg">
              From concept to completion, we deliver design, construction and
              project management with precision, transparency and craftsmanship
              at every stage.
            </p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:gap-6">
              <Button
                render={<Link href="/get-a-quote" />}
                className="flex h-auto w-full items-center justify-center gap-3 rounded-2xl bg-coral px-6 py-4 text-base text-white transition-colors duration-300 hover:bg-coral/80 sm:w-auto sm:px-8 sm:text-lg"
              >
                Get a Quote
                <FaArrowRight className="size-4 shrink-0" />
              </Button>
              <Button
                render={<Link href="/contact" />}
                className="flex h-auto w-full items-center justify-center gap-3 rounded-2xl border border-coral bg-transparent px-6 py-4 text-base text-white transition-colors duration-300 hover:bg-coral sm:w-auto sm:px-8 sm:text-lg"
              >
                Contact Us
                <FaArrowRight className="size-4 shrink-0" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
