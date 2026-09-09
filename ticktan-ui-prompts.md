# TICKTAN Website — UI Generation Prompts

**How to use this:** Paste the "General Design Context" block at the top of every prompt you send (or set it as a system/context message if your tool supports that), followed by the specific page prompt. This keeps every page visually consistent.

---

## GENERAL DESIGN CONTEXT (include with every prompt)

```
Design context for TICKTAN Limited — a construction, design, and project
management company based in Lagos, Nigeria.

Brand personality: Professional, trustworthy, modern, no-nonsense. This is a
B2B company working with corporate clients (banks, tech companies) on office
renovations and fit-outs — the design should feel premium and competent, not
flashy or playful.

Color palette:
- Primary dark: Navy #1B3A4A — used for headers, nav bars, dark section backgrounds
- Primary accent: Coral/Red #E85D42 — used for CTAs, buttons, numbered badges, accent bars
- Secondary accent: Blue #3BA8D4 — used sparingly for secondary highlights, links, hover states
- Neutral dark: Charcoal #1A1A1A — body text
- Neutral light: White #FFFFFF and light grey #F5F5F5 — backgrounds

Typography: Clean, modern sans-serif. Bold serif or bold sans for large
headlines (the brand uses a bold serif-style headline treatment in places).
Generous line height and spacing — avoid cramped layouts.

Layout patterns to reuse across pages:
- Numbered circular badges (coral background, white number) for step-by-step
  or feature lists
- Thin coral/red accent bar as a section divider or top border
- Card-based grids with light grey backgrounds and subtle borders for
  services/features/team members
- Dark navy full-width sections used to break up long white pages (e.g. for
  a stats section or CTA banner)
- Real photography (construction sites, office interiors, professional
  headshots) — not illustrations or icons as the primary visual

Overall feel: clean corporate site, generous whitespace, confident use of
the coral accent color against navy and white, mobile-responsive.
```

---

## PAGE-SPECIFIC PROMPTS

### 1. Home Page
```
Design a homepage for a construction/design consultancy company website.

Sections needed, top to bottom:
1. Hero — full-width, navy background, large bold headline (e.g. "Building
   trust, one project at a time"), short subtext, coral "Get a Quote" CTA
   button, background image of a construction/office project
2. Services snapshot — 5-column (or responsive grid) of service cards:
   Design Consultancy, Building Construction, Project Management, Costing,
   Art. Each card has an icon or letter badge, title, one-line description
3. Featured projects — 2-3 large project cards with photo, project name,
   and a short scope line, linking to full portfolio
4. Client logos strip — horizontal row of past client logos on a light
   background
5. Blog preview — 3 recent blog post cards (image, title, date)
6. Closing CTA banner — full-width navy or coral section, "Ready to start
   your project?" with a Get a Quote button

Keep it clean and confident, not cluttered. Navy header/nav bar sticky on
scroll.
```

### 2. About Page
```
Design an "About Us" page for a construction consultancy.

Sections:
1. Page header — short intro headline over a project photo or navy banner
2. Company story — "Who We Are" text block, 2-3 paragraphs, paired with a
   photo of the team or a project
3. Vision & Mission — two side-by-side cards, one navy background one
   coral background, white text, each with a short italicized statement
4. Core Values — 3-4 value cards in a row (icon/badge + title + one-line
   description), light grey background cards
5. "What We Do" — short paragraph section, could include a pull-quote
   style callout (e.g. "we under-promise and over-deliver")

Clean, text-forward page but broken up visually so it doesn't feel like a
wall of text.
```

### 3. Services Page
```
Design a services page listing 5 services: Design Consultancy, Building
Construction, Project Management, Costing, and Art.

Layout: each service gets its own full-width section alternating
image-left/text-right and text-left/image-right, so the page has visual
rhythm. Each section includes:
- Service name as a bold headline
- 2-3 sentence description
- Small "Past Clients" logo row if applicable
- Relevant photo (office interior, construction site, design rendering,
  etc. depending on service)

Add a sticky sub-navigation or anchor links at the top so users can jump
to a specific service.
```

### 4. Portfolio Page
```
Design a portfolio/projects page for a construction company.

Layout: grid of project cards (2-3 columns responsive), each card shows a
featured photo, project name, and a short tag line (e.g. "Design & Build /
Remodeling / Turnkey"). On click/hover, reveal or link to more detail.

Include a filter bar at the top (by service type: Design, Build, Project
Management, etc. — optional, can be a phase-2 feature but leave visual
space for it).

Individual project detail view (or expanded card) should show: full photo
gallery, project description, size (m²), scope, and client name — similar
to a case study layout.
```

### 5. Team Page
```
Design a team page for a construction consultancy.

Layout: grid of team member cards (3-4 per row on desktop), each card has:
professional headshot, name, role/title (in coral accent color), years of
experience, and key certifications/credentials as small tags or a short
line.

Keep it clean and professional — headshots should feel corporate/formal,
consistent styling across all cards (same aspect ratio, same background
treatment).
```

### 6. Blog Listing Page
```
Design a blog listing page for a construction company's website.

Layout: grid or list of blog post cards, each showing: featured image,
post title, short excerpt (1-2 lines), publish date, and maybe a category
tag (in coral). 3-column grid on desktop, single column on mobile.

Include a simple category filter or search bar at the top if space allows.
Pagination or "load more" at the bottom.
```

### 7. Blog Post (Detail) Page
```
Design an individual blog post page.

Layout: centered content column (readable width, ~700px), featured image
at top, post title as large headline, publish date and category tag,
body content with clear typography hierarchy (headings, paragraphs,
possibly pull quotes), author info at the bottom (optional), and a
"related posts" section at the very bottom (3 cards).
```

### 8. Get a Quote Page
```
Design a quote request page/form for a construction company.

Layout: form-focused page, could be split-screen — left side has a short
persuasive headline + reassurance copy (e.g. "Tell us about your project
and we'll get back to you within 24 hours"), right side has the form.

Form fields: Full Name, Email, Phone Number, Company/Organization
(optional), Project Type (dropdown), Project Location, Estimated Budget
Range (optional), Project Details (textarea). Submit button in coral.

Include a subtle trust element near the form — client logos or a short
testimonial — to reduce form-abandonment anxiety.
```

### 9. Contact Page
```
Design a simple contact page for a construction company.

Layout: two-column — left side has contact details (address, phone,
email) in a clean list with icons, right side has an embedded map or a
short contact form. Navy or light grey background section. Keep it
minimal — this page supports the Get a Quote page, doesn't duplicate it.
```

### 10. Admin Login
```
Design a simple, clean admin login screen for an internal dashboard.

Centered card on a plain background (flat, no gradients), TICKTAN logo at
top, email and password fields, coral "Log In" button. Minimal,
functional, not customer-facing branding — just clean and trustworthy.
```

### 11. Admin Dashboard — Blog Manager
```
Design an admin dashboard screen for managing blog posts.

Layout: left sidebar navigation (Dashboard, Blog, Quotes, Projects), main
content area shows a table/list of blog posts with columns: title, status
(draft/published), date, and edit/delete actions. "New Post" button
top-right in coral. Include a simple post editor view (title field, rich
text/markdown editor area, featured image upload, publish toggle).

Keep it functional and clean — this is an internal tool, prioritize
clarity and ease of use over visual flourish.
```

### 12. Admin Dashboard — Quote Submissions
```
Design an admin dashboard screen for viewing quote requests.

Layout: same sidebar navigation as other admin screens. Main area shows a
table of submissions: name, project type, date submitted, status
(new/contacted/closed). Clicking a row expands or opens a detail view
showing all submitted form fields. Status can be updated via a dropdown
or button. New/unread submissions should be visually distinct (e.g. bold
text or a small badge).
```

### 13. Admin Dashboard — Project Manager
```
Design an admin dashboard screen for managing portfolio projects.

Layout: same sidebar navigation. Grid or list of existing projects with
thumbnail, name, and edit/delete actions. "Add Project" button in coral.
Editor view includes: project name, description, size, scope, client
name, and a multi-image upload area for the project gallery.
```
