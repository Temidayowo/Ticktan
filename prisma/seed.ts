import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const projects = [
  {
    slug: "corporate-hq-renovation",
    name: "Corporate HQ Renovation",
    tag: "Commercial",
    client: "Sterling Bank",
    size: "12,000 sq ft",
    scope:
      "Full office fit-out and interior redesign for a 12,000 sq ft banking headquarters.",
    description:
      "Sterling Bank needed its Lagos headquarters renovated without disrupting daily operations. We phased the fit-out floor by floor, keeping the branch and back-office teams fully operational throughout.\n\nThe result is a modern, open-plan workspace with upgraded meeting facilities, a redesigned client reception, and a lighting and finish palette that reflects the bank's refreshed brand identity.",
    featured: true,
    order: 0,
  },
  {
    slug: "tech-campus-build-out",
    name: "Tech Campus Build-Out",
    tag: "Corporate",
    client: "Meridian Tech",
    size: "28,000 sq ft",
    scope:
      "Design, construction and project management for a multi-floor tech office space.",
    description:
      "Meridian Tech's growing engineering team needed a campus that could flex between focused work, collaboration and client demos. We designed and built four floors around that brief, from concept through handover.\n\nOur project management team coordinated architects, MEP contractors and furniture vendors under one schedule, delivering the space two weeks ahead of the client's lease deadline.",
    featured: true,
    order: 1,
  },
  {
    slug: "retail-bank-branch-fit-out",
    name: "Retail Bank Branch Fit-Out",
    tag: "Retail Fit-Out",
    client: "Zenith Group",
    size: "3,200 sq ft",
    scope:
      "Turnkey branch renovation delivered on an accelerated 8-week timeline.",
    description:
      "Zenith Group needed a flagship branch renovated over a single low-traffic season, with zero tolerance for delay past the reopening date. We ran design, procurement and construction in parallel to hit an 8-week build.\n\nThe finished branch includes a redesigned customer floor, upgraded security and vault infrastructure, and a self-service banking zone built around the client's new retail format.",
    featured: true,
    order: 2,
  },
  {
    slug: "community-health-centre",
    name: "Community Health Centre",
    tag: "Public / Civic",
    client: "Lagos State Ministry of Health",
    size: "9,500 sq ft",
    scope:
      "Design consultancy, build and costing for a new outpatient care facility.",
    description:
      "This outpatient facility required a design that met public health infrastructure standards on a fixed public-sector budget. Our costing team worked alongside the design team from the earliest concepts to keep scope and budget aligned.\n\nWe delivered consultation rooms, a pharmacy, waiting areas and administrative offices, built to the durability and hygiene standards required of a public healthcare facility.",
    featured: true,
    order: 3,
  },
  {
    slug: "harborview-trading-floor",
    name: "Harborview Trading Floor",
    tag: "Commercial",
    client: "Harborview Ltd",
    size: "6,800 sq ft",
    scope:
      "High-density trading floor fit-out with redundant power and acoustic control.",
    description:
      "A trading floor has zero tolerance for downtime, so every electrical and data run on this project was designed with full redundancy. We worked around a live production environment to deliver the upgrade in stages.\n\nAcoustic treatment and sightline planning were central to the brief, keeping desk density high without compromising the traders' ability to communicate across the floor.",
    featured: false,
    order: 4,
  },
  {
    slug: "coastline-capital-headquarters",
    name: "Coastline Capital Headquarters",
    tag: "Corporate",
    client: "Coastline Capital",
    size: "18,500 sq ft",
    scope:
      "Full design, build and project management for a new investment firm HQ.",
    description:
      "Coastline Capital's move into a new headquarters was an opportunity to establish a physical identity to match its growth. We led design, construction and project management as a single team from site selection through move-in.\n\nThe finished office balances private meeting suites for client-facing teams with an open trading and research floor, unified by a material palette that reflects the firm's brand.",
    featured: false,
    order: 5,
  },
  {
    slug: "nova-industries-showroom",
    name: "Nova Industries Showroom",
    tag: "Retail Fit-Out",
    client: "Nova Industries",
    size: "4,100 sq ft",
    scope:
      "Flagship showroom design and build with custom art installation.",
    description:
      "Nova Industries wanted a flagship showroom that felt like a brand experience rather than a sales floor. We paired the fit-out with a commissioned art installation from our in-house art team to anchor the space.\n\nCustom display fixtures, feature lighting and a redesigned entrance sequence give the showroom a presence that stands apart from the surrounding retail strip.",
    featured: false,
    order: 6,
  },
  {
    slug: "civic-arts-pavilion",
    name: "Civic Arts Pavilion",
    tag: "Public / Civic",
    client: "Lagos City Council",
    size: "7,200 sq ft",
    scope:
      "Design consultancy and commissioned public art for a community pavilion.",
    description:
      "This community pavilion needed to serve as flexible public event space while anchoring a broader civic redevelopment. We led design consultancy alongside the council's planning team through approvals and construction.\n\nA large-scale commissioned mural and outdoor installation, delivered by our art studio, gives the pavilion a distinct civic identity within the surrounding district.",
    featured: false,
    order: 7,
  },
];

const teamMembers = [
  {
    name: "Adaeze Okafor",
    role: "Principal Architect",
    experience: "18 years",
    credentials: "NIA, RIBA",
    order: 0,
  },
  {
    name: "Chinedu Umeh",
    role: "Head of Construction",
    experience: "15 years",
    credentials: "COREN",
    order: 1,
  },
  {
    name: "Folake Adeyemi",
    role: "Director of Project Management",
    experience: "12 years",
    credentials: "PMP",
    order: 2,
  },
  {
    name: "Tunde Bakare",
    role: "Lead Cost Consultant",
    experience: "10 years",
    credentials: "NIQS",
    order: 3,
  },
];

const posts = [
  {
    slug: "5-things-to-check-before-signing-an-office-fit-out-contract",
    title: "5 things to check before signing an office fit-out contract",
    category: "Construction",
    excerpt:
      "Before you sign, make sure your fit-out contract actually protects your timeline and your budget.",
    content:
      "<p>An office fit-out contract looks straightforward until something goes wrong on site. Here are five things worth checking before you sign.</p><h2>1. Scope of works</h2><p>Make sure the scope is itemised, not just summarised. Vague line items are where disputes start.</p><h2>2. Payment milestones</h2><p>Tie payments to inspected, completed stages — not just calendar dates.</p><h2>3. Variation process</h2><p>Know exactly how a change order gets priced and approved before work starts on it.</p><h2>4. Handover standard</h2><p>Define what \"complete\" means, including snagging and defects liability period.</p><h2>5. Delay responsibility</h2><p>Understand who absorbs cost for delays outside the contractor's control.</p>",
  },
  {
    slug: "how-we-deliver-bank-branch-renovations-without-downtime",
    title: "How we deliver bank branch renovations without downtime",
    category: "Project Management",
    excerpt:
      "Renovating a live bank branch means the branch can never actually close. Here's how we plan for that.",
    content:
      "<p>A retail bank branch can't simply shut its doors for a renovation. Our approach phases construction around live operating hours.</p><h2>Phased zoning</h2><p>We split the floor plate into zones so only one section is ever under construction at a time.</p><h2>Out-of-hours works</h2><p>Noisy, disruptive work is scheduled overnight or on bank holidays wherever possible.</p><h2>Daily coordination</h2><p>A daily stand-up with branch management keeps customer-facing staff ahead of any changes.</p>",
  },
  {
    slug: "budgeting-for-a-commercial-build-what-actually-drives-cost",
    title: "Budgeting for a commercial build: what actually drives cost",
    category: "Costing",
    excerpt:
      "Square footage isn't the main cost driver on a commercial build — these factors matter more.",
    content:
      "<p>Clients often budget by square footage alone, but a handful of other factors move the number far more.</p><h2>MEP complexity</h2><p>Mechanical, electrical and plumbing work is usually the single largest cost variable.</p><h2>Finish level</h2><p>The gap between a standard and premium finish package can be significant per square foot.</p><h2>Site access</h2><p>A constrained downtown site with limited loading access costs more to build than an open one.</p>",
  },
  {
    slug: "designing-offices-that-hold-up-after-the-fit-out-photos-fade",
    title: "Designing offices that hold up after the fit-out photos fade",
    category: "Design",
    excerpt:
      "A striking day-one photoshoot means little if the space doesn't hold up to daily use two years in.",
    content:
      "<p>The best office designs are judged two years after handover, not on the day of the photoshoot.</p><h2>Durable materials in high-traffic zones</h2><p>Reception floors, stair nosings and corridor walls take the most abuse — spec accordingly.</p><h2>Flexible furniture layouts</h2><p>Teams reorganise constantly; furniture systems should move with them without a full refit.</p>",
  },
  {
    slug: "what-a-project-manager-actually-does-on-a-corporate-build",
    title: "What a project manager actually does on a corporate build",
    category: "Project Management",
    excerpt:
      "The project manager's job is mostly invisible when it's done well — here's what that work looks like.",
    content:
      "<p>Clients rarely see the bulk of a project manager's work, because when it's done well, problems never reach them.</p><h2>Sequencing trades</h2><p>Coordinating which contractor is on site, and when, so no one is waiting on someone else.</p><h2>Budget tracking</h2><p>Flagging cost overruns while there's still time to make a decision about them.</p>",
  },
  {
    slug: "when-bespoke-art-is-worth-it-in-a-commercial-space",
    title: "When bespoke art is worth it in a commercial space",
    category: "Art",
    excerpt:
      "Commissioned art isn't always the right call for a commercial fit-out. Here's when it earns its cost.",
    content:
      "<p>A commissioned art piece costs meaningfully more than stock prints — it's worth it in specific situations.</p><h2>Anchor spaces</h2><p>A reception or lobby that sets the tone for every visitor benefits most from a bespoke piece.</p><h2>Brand storytelling</h2><p>Art that reflects a client's history or industry does work that generic decor can't.</p>",
  },
];

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@ticktan.com";
  const adminPassword = process.env.ADMIN_PASSWORD ?? "ChangeMe123!";
  const passwordHash = await bcrypt.hash(adminPassword, 10);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      name: "Ticktan Admin",
      passwordHash,
      role: "ADMIN",
    },
  });

  await prisma.siteSettings.upsert({
    where: { id: "singleton" },
    update: {},
    create: {
      id: "singleton",
      companyName: "Ticktan Limited",
      tagline:
        "Design, construction and project management, delivered with precision, transparency and craftsmanship.",
      contactEmail: "info@ticktan.com",
      contactAddress: "Lagos, Nigeria",
    },
  });

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: {},
      create: project,
    });
  }

  // TeamMember has no natural unique key, so only seed it once — otherwise
  // re-running `prisma db seed` would duplicate the roster on every run.
  const teamMemberCount = await prisma.teamMember.count();
  if (teamMemberCount === 0) {
    await prisma.teamMember.createMany({ data: teamMembers });
  }

  const now = Date.now();
  for (const [index, post] of posts.entries()) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {},
      create: {
        ...post,
        status: "PUBLISHED",
        // Stagger publish dates so the most "recent" post is first, like the
        // original hardcoded list, without every seeded post sharing one timestamp.
        publishedAt: new Date(now - index * 1000 * 60 * 60 * 24 * 14),
        authorId: admin.id,
      },
    });
  }

  console.log("Seed complete.");
  console.log(`Admin login: ${adminEmail} / ${adminPassword}`);
  if (!process.env.ADMIN_PASSWORD) {
    console.log(
      "Set ADMIN_EMAIL and ADMIN_PASSWORD env vars before seeding a real environment — change this password after first login."
    );
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
