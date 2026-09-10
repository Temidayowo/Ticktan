import Image from "next/image";

const PageHeader = () => {
  return (
    <section className="relative isolate flex w-full items-center overflow-hidden">
      <Image
        src="/image/home-hero.jpg"
        alt="Background description"
        fill
        className="-z-10 object-cover"
        priority
      />
      <div className="absolute inset-0 z-10 bg-navy/85" />

      <div className="relative z-20 px-auto w-full mx-6 py-32 sm:mx-12 sm:py-36 md:mx-16 md:py-44 lg:mx-32">
        <p className="text-sm font-semibold uppercase tracking-wider text-coral">
          Contact Us
        </p>
        <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Let&apos;s talk about your project
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-200 sm:text-base md:text-lg">
          Tell us what you&apos;re building and we&apos;ll get back to you
          with a clear scope and timeline.
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
