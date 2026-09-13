# TICKTAN Website — Master Build Prompt

Use this prompt (as-is, or lightly edited) when handing the project to Claude
to build. It covers design system, full sitemap, and feature requirements.

---

## PROJECT OVERVIEW

Build a company website for TICKTAN Limited, a construction, design, and
project management consultancy based in Lagos, Nigeria. The site needs to:
establish a professional online presence, showcase past projects and
services, and include a blog that the company can manage themselves through
an admin dashboard.

This is a B2B site — the primary audience is corporate decision-makers
(banks, tech companies, other businesses) evaluating TICKTAN for office
renovation, fit-out, and construction consulting work. No e-commerce, no
quote/lead form — contact happens via a simple contact page.

**Tech stack:**
- Next.js (frontend + admin, single codebase)
- Supabase (Postgres database, auth, file storage for blog/project images)
- Resend (for contact form email notifications — optional, only if contact
  form should email the admin directly rather than just storing a message)
- Hosted on Vercel
- Domain: ticktan.com

---

## DESIGN SYSTEM

**Brand personality:** Bold, confident, modern, professional. Premium B2B
feel — this should not look like a generic template. Avoid navy/blue as the
primary dark tone (deliberately moving away from the logo's original
palette, which read as clashing/dated).

**Color palette:**
- Primary dark (base): Charcoal `#1A1D21`
- Primary accent (bright, warm): Vivid Amber/Orange `#FF7A45`
- Secondary accent (bright, cool — for contrast/variety): Teal `#14B8A6`
- Neutral light: Off-white `#FAFAF9`
- Neutral mid: Warm grey `#6B7280`

The warm orange and cool teal are used deliberately as contrasting accents
against the charcoal base — orange for primary CTAs and key highlights, teal
used more sparingly for secondary accents, links, or hover states, so the
palette feels bold and energetic rather than flat.

**Typography:**
- Headings: Lora (bold serif — premium, established feel)
- Body: Inter (clean modern sans-serif — highly legible, works well in both
  the public site and admin dashboard)
- Both available free via Google Fonts

**Layout patterns to reuse across pages:**
- Numbered circular badges (orange background, white number) for
  step-by-step or feature lists
- Thin orange accent bar as a section divider
- Card-based grids with off-white backgrounds and subtle borders for
  services/portfolio/team
- Full-width charcoal sections to break up long pages (e.g. stats, CTA
  banners)
- Real photography (construction sites, office interiors, professional
  headshots) as the primary visual — not illustrations/icons
- Generous whitespace, confident contrast between charcoal/off-white/orange

---

## SITEMAP

### Public Site

**1. Home (`/`)**
- Hero — full-width charcoal background/overlay, bold Lora headline, short
  Inter subtext, orange CTA button ("View Our Services" or similar), teal
  outline secondary button ("Contact Us")
- Services snapshot — grid of 5 service cards (Design Consultancy, Building
  Construction, Project Management, Costing, Art)
- Featured projects — 2-3 project cards linking to full portfolio
- Client logos strip
- Blog preview — 3 recent posts
- Closing CTA banner

**2. About (`/about`)**
- Company story ("Who We Are")
- Vision & Mission (two contrasting cards — one charcoal, one orange)
- Core Values (3-4 cards)
- "What We Do" section

**3. Services (`/services`)**
- All 5 services, alternating image/text layout sections
- Past clients per service where applicable

**4. Portfolio (`/portfolio`)**
- Grid of project cards (photo, name, scope tag)
- Project detail view: gallery, description, size, scope, client name
- Optional filter by service type

**5. Team (`/team`)**
- Grid of team member cards: headshot, name, role, experience, credentials

**6. Blog (`/blog`)**
- Post listing — grid of cards (image, title, excerpt, date, category tag)
- **`/blog/[slug]`** — individual post page

**7. Contact (`/contact`)**
- Contact details (address, phone, email)
- Simple contact form (Name, Email, Message) — sends an email notification
  to admin on submission
- Optional map embed

### Admin Dashboard (`/admin`) — Login Required

**Login (`/admin/login`)**
- Simple email/password auth, single user for now, built to support
  additional staff logins later

**Blog Manager (`/admin/blog`)**
- List of posts (draft/published)
- Create/edit post: title, content (rich text or markdown), featured image
  upload, category, publish toggle
- Delete post

**Project Manager (`/admin/projects`)**
- Add/edit/delete portfolio case studies
- Multi-image upload per project
- Fields: name, description, size, scope, client name

**(Later, not v1) Staff Management (`/admin/users`)**
- Add/remove additional admin logins — architect the auth system so this
  can be added without a rebuild, but don't build the UI for it yet

---

## FEATURE SUMMARY (what's IN vs OUT)

**In scope:**
- Full public site (7 pages above)
- Blog with admin-manageable posting
- Portfolio with admin-manageable project entries
- Simple contact form with email notification
- Single admin login (extensible to more users later)
- Fully responsive/mobile-friendly
- SEO basics (meta titles/descriptions per page, semantic HTML)

**Explicitly out of scope for v1:**
- Quote request form/system (removed — not needed for B2B)
- Multiple staff logins (architecture supports it, but not built yet)
- Payment/e-commerce functionality
- Live chat
- Multi-language support

---

## NOTES FOR THE BUILDER

- Keep the admin dashboard functional and simple — it's an internal tool,
  prioritize clarity over visual polish
- Blog posting frequency will be occasional/monthly, so the post editor
  doesn't need to be highly sophisticated — a clean rich text or markdown
  editor is enough
- Use real project photos and content from the source material provided
  (TICKTAN's existing proposal deck) where available for portfolio/about
  copy, rather than placeholder lorem ipsum
