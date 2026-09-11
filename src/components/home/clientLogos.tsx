import { FaBuilding } from "react-icons/fa6";

const clients = [
  "Sterling Bank",
  "Zenith Group",
  "Meridian Tech",
  "Coastline Capital",
  "Harborview Ltd",
  "Nova Industries",
];

const ClientLogos = () => {
  return (
    <section className="bg-white">
      <div className="px-auto max-w-7xl mx-6 py-12 sm:mx-12 md:mx-16 lg:mx-32">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted by teams across industries
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clients.map((client) => (
            <span
              key={client}
              className="flex items-center gap-2 text-lg font-bold text-navy/40 transition-colors hover:text-navy/70"
            >
              <FaBuilding className="size-4.5 shrink-0" />
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
