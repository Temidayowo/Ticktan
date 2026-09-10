import PlaceholderImage from "../ui/placeholder-image";

const CompanyStory = () => {
  return (
    <section className="bg-white">
      <div className="px-auto max-w-7xl mx-6 py-16 sm:mx-12 sm:py-20 md:mx-16 md:py-24 lg:mx-32">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <PlaceholderImage className="aspect-4/3 w-full rounded-2xl" />

          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-coral">
              Who We Are
            </p>
            <h2 className="text-2xl font-extrabold text-navy md:text-3xl">
              Built for clients who can&apos;t afford guesswork
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              TICKTAN Limited is a Lagos-based design, construction and
              project management consultancy. We work with banks, tech
              companies and corporate teams on office renovations and
              fit-outs where downtime and delay carry a real cost.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Rather than handing clients off between separate architects,
              contractors and consultants, we keep design, build, project
              management, costing and finishing under one team — so
              decisions made on day one still hold up on delivery day.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              That approach has made us the team corporate clients call back
              for the next project, and the one before it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
