export type Project = {
  slug: string;
  name: string;
  tag: string;
  client: string;
  size: string;
  scope: string;
  description: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "corporate-hq-renovation",
    name: "Corporate HQ Renovation",
    tag: "Commercial",
    client: "Sterling Bank",
    size: "12,000 sq ft",
    scope:
      "Full office fit-out and interior redesign for a 12,000 sq ft banking headquarters.",
    description: [
      "Sterling Bank needed its Lagos headquarters renovated without disrupting daily operations. We phased the fit-out floor by floor, keeping the branch and back-office teams fully operational throughout.",
      "The result is a modern, open-plan workspace with upgraded meeting facilities, a redesigned client reception, and a lighting and finish palette that reflects the bank's refreshed brand identity.",
    ],
    featured: true,
  },
  {
    slug: "tech-campus-build-out",
    name: "Tech Campus Build-Out",
    tag: "Corporate",
    client: "Meridian Tech",
    size: "28,000 sq ft",
    scope:
      "Design, construction and project management for a multi-floor tech office space.",
    description: [
      "Meridian Tech's growing engineering team needed a campus that could flex between focused work, collaboration and client demos. We designed and built four floors around that brief, from concept through handover.",
      "Our project management team coordinated architects, MEP contractors and furniture vendors under one schedule, delivering the space two weeks ahead of the client's lease deadline.",
    ],
    featured: true,
  },
  {
    slug: "retail-bank-branch-fit-out",
    name: "Retail Bank Branch Fit-Out",
    tag: "Retail Fit-Out",
    client: "Zenith Group",
    size: "3,200 sq ft",
    scope:
      "Turnkey branch renovation delivered on an accelerated 8-week timeline.",
    description: [
      "Zenith Group needed a flagship branch renovated over a single low-traffic season, with zero tolerance for delay past the reopening date. We ran design, procurement and construction in parallel to hit an 8-week build.",
      "The finished branch includes a redesigned customer floor, upgraded security and vault infrastructure, and a self-service banking zone built around the client's new retail format.",
    ],
    featured: true,
  },
  {
    slug: "community-health-centre",
    name: "Community Health Centre",
    tag: "Public / Civic",
    client: "Lagos State Ministry of Health",
    size: "9,500 sq ft",
    scope:
      "Design consultancy, build and costing for a new outpatient care facility.",
    description: [
      "This outpatient facility required a design that met public health infrastructure standards on a fixed public-sector budget. Our costing team worked alongside the design team from the earliest concepts to keep scope and budget aligned.",
      "We delivered consultation rooms, a pharmacy, waiting areas and administrative offices, built to the durability and hygiene standards required of a public healthcare facility.",
    ],
    featured: true,
  },
  {
    slug: "harborview-trading-floor",
    name: "Harborview Trading Floor",
    tag: "Commercial",
    client: "Harborview Ltd",
    size: "6,800 sq ft",
    scope:
      "High-density trading floor fit-out with redundant power and acoustic control.",
    description: [
      "A trading floor has zero tolerance for downtime, so every electrical and data run on this project was designed with full redundancy. We worked around a live production environment to deliver the upgrade in stages.",
      "Acoustic treatment and sightline planning were central to the brief, keeping desk density high without compromising the traders' ability to communicate across the floor.",
    ],
  },
  {
    slug: "coastline-capital-headquarters",
    name: "Coastline Capital Headquarters",
    tag: "Corporate",
    client: "Coastline Capital",
    size: "18,500 sq ft",
    scope:
      "Full design, build and project management for a new investment firm HQ.",
    description: [
      "Coastline Capital's move into a new headquarters was an opportunity to establish a physical identity to match its growth. We led design, construction and project management as a single team from site selection through move-in.",
      "The finished office balances private meeting suites for client-facing teams with an open trading and research floor, unified by a material palette that reflects the firm's brand.",
    ],
  },
  {
    slug: "nova-industries-showroom",
    name: "Nova Industries Showroom",
    tag: "Retail Fit-Out",
    client: "Nova Industries",
    size: "4,100 sq ft",
    scope:
      "Flagship showroom design and build with custom art installation.",
    description: [
      "Nova Industries wanted a flagship showroom that felt like a brand experience rather than a sales floor. We paired the fit-out with a commissioned art installation from our in-house art team to anchor the space.",
      "Custom display fixtures, feature lighting and a redesigned entrance sequence give the showroom a presence that stands apart from the surrounding retail strip.",
    ],
  },
  {
    slug: "civic-arts-pavilion",
    name: "Civic Arts Pavilion",
    tag: "Public / Civic",
    client: "Lagos City Council",
    size: "7,200 sq ft",
    scope:
      "Design consultancy and commissioned public art for a community pavilion.",
    description: [
      "This community pavilion needed to serve as flexible public event space while anchoring a broader civic redevelopment. We led design consultancy alongside the council's planning team through approvals and construction.",
      "A large-scale commissioned mural and outdoor installation, delivered by our art studio, gives the pavilion a distinct civic identity within the surrounding district.",
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const projectTags = Array.from(
  new Set(projects.map((project) => project.tag))
);
