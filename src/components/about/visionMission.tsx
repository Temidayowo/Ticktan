const VisionMission = () => {
  return (
    <section className="bg-muted">
      <div className="px-auto max-w-7xl mx-6 py-16 sm:mx-12 sm:py-20 md:mx-16 md:py-24 lg:mx-32">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl bg-navy p-8 md:p-10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Vision
            </h3>
            <p className="text-xl italic leading-relaxed text-white md:text-2xl">
              &ldquo;To be West Africa&apos;s most trusted partner for
              design, construction and project delivery.&rdquo;
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl bg-coral p-8 md:p-10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70">
              Mission
            </h3>
            <p className="text-xl italic leading-relaxed text-white md:text-2xl">
              &ldquo;We deliver every project with precision, transparency
              and craftsmanship, so our clients can focus on their business,
              not their building.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
