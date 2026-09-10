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
          Blog
        </p>
        <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Insights on design, build and delivery
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-200 sm:text-base md:text-lg">
          Notes from the field — what we&apos;re learning on corporate
          fit-outs, renovations and builds across Lagos.
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
