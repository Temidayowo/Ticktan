const Philosophy = () => {
  return (
    <section className="bg-white">
      <div className="px-auto max-w-3xl mx-6 py-16 text-center sm:mx-12 sm:py-20 md:mx-auto md:py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-coral">
          What We Do
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          We bring design, construction, project management, costing and art
          together under one roof, so nothing gets lost between hand-offs
          and no discipline is an afterthought. Every project moves through
          the same team, start to finish.
        </p>
        <blockquote className="mt-8 border-l-4 border-coral pl-6 text-left text-xl font-bold italic text-navy md:text-2xl">
          &ldquo;We under-promise and over-deliver.&rdquo;
        </blockquote>
      </div>
    </section>
  );
};

export default Philosophy;
