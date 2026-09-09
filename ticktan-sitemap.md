# TICKTAN Website — Sitemap

## Public Site

### 1. Home (`/`)
- Hero section (headline, subline, CTA button → Get a Quote)
- Services snapshot (5 services, brief + link to Services page)
- Featured projects (2-3 case studies, link to full Portfolio)
- Testimonials / client logos strip
- Blog preview (latest 2-3 posts)
- Footer CTA → Get a Quote

### 2. About (`/about`)
- Company story ("Who We Are")
- Vision, Mission, Values
- What We Do

### 3. Services (`/services`)
- Overview of all 5: Design Consultancy, Building Construction, Project Management, Costing, Art
- Could be one page with sections, or `/services/[slug]` if each needs its own page later

### 4. Portfolio (`/portfolio`)
- Grid/list of past projects
- Each project links to a detail view (or expands inline) with: photos, size, scope, client
- Filter by service type (optional, phase 2)

### 5. Team (`/team`)
- Team member cards: photo, name, role, short bio
- Credentials/certifications listed

### 6. Blog (`/blog`)
- Listing page — post cards (title, excerpt, date, image)
- **`/blog/[slug]`** — individual post page

### 7. Get a Quote (`/get-a-quote`)
- Form fields: Name, Email, Phone, Company (optional), Project Type (dropdown), Project Location, Budget Range (optional), Message
- On submit:
  - Saves to database → visible in admin dashboard
  - Sends email notification to admin
  - Sends auto-reply confirmation to the submitter

### 8. Contact (`/contact`)
- Address, phone, email
- Map (optional)
- Could double as / link to the quote form

---

## Admin Dashboard (`/admin`) — Login Required

### Login (`/admin/login`)
- Simple email/password auth (single user for now, built to support more later)

### Blog Manager (`/admin/blog`)
- List of posts (draft/published status)
- Create/edit post (title, content, featured image, category)
- Delete post

### Quote Submissions (`/admin/quotes`)
- Table of all submissions (name, project type, date, status)
- View full details per submission
- Mark as contacted/closed (optional nice-to-have)

### Project Manager (`/admin/projects`)
- Add/edit/delete portfolio case studies
- Upload project photos

### (Later) Staff Management (`/admin/users`)
- Add/remove additional admin logins
- Not needed for v1 — just don't paint yourself into a corner architecturally

---

## Notes
- Blog and Quote submissions are the two things he'll touch most often post-launch — worth prioritizing making those admin screens simple and fast to use.
- Domain: ticktan.com (confirmed available)
