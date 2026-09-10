import {
  FaCompassDrafting,
  FaHelmetSafety,
  FaClipboardList,
  FaCalculator,
  FaPalette,
} from "react-icons/fa6";
import PlaceholderImage from "../ui/placeholder-image";

const services = [
  {
    icon: FaCompassDrafting,
    title: "Design Consultancy",
    description:
      "Concept, planning and architectural design tailored to your vision. We translate business needs into spaces that work.",
    points: [
      "Space planning and concept design",
      "Architectural and interior drawings",
      "Material and finish selection",
    ],
  },
  {
    icon: FaHelmetSafety,
    title: "Building Construction",
    description:
      "Quality builds executed on schedule with rigorous site standards, from ground-up construction to full fit-outs.",
    points: [
      "Office and retail fit-outs",
      "Structural and civil works",
      "Site supervision and quality control",
    ],
  },
  {
    icon: FaClipboardList,
    title: "Project Management",
    description:
      "End-to-end coordination keeping timelines, teams and budgets aligned from kickoff through handover.",
    points: [
      "Schedule and vendor coordination",
      "Risk and quality management",
      "Single point of accountability",
    ],
  },
  {
    icon: FaCalculator,
    title: "Costing",
    description:
      "Accurate estimation and budgeting to keep every project financially sound, with no surprises mid-build.",
    points: [
      "Bill of quantities and estimation",
      "Budget tracking and cost control",
      "Value engineering",
    ],
  },
  {
    icon: FaPalette,
    title: "Art",
    description:
      "Bespoke murals and installations that give spaces character and reflect your brand identity.",
    points: [
      "Custom murals and wall art",
      "Bespoke installations",
      "Brand-led design elements",
    ],
  },
];

const ServicesList = () => {
  return (
    <section className="bg-white">
      <div className="px-auto max-w-7xl mx-6 py-16 sm:mx-12 sm:py-20 md:mx-16 md:py-24 lg:mx-32">
        <div className="flex flex-col gap-16 md:gap-20">
          {services.map(({ icon: Icon, title, description, points }, index) => (
            <div
              key={title}
              className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <PlaceholderImage className="aspect-4/3 w-full rounded-2xl" />

              <div className="flex flex-col gap-4">
                <span className="flex size-10 items-center justify-center rounded-xl bg-navy text-white">
                  <Icon className="size-4" />
                </span>
                <h2 className="text-2xl font-extrabold text-navy md:text-3xl">
                  {title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {description}
                </p>
                <ul className="mt-2 flex flex-col gap-2">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-muted-foreground md:text-base"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-coral" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
