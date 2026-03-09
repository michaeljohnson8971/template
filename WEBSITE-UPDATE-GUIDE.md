# DABL Studio — Website Update Guide

This guide maps every placeholder and editable content item across the site, organized by page. Use it to quickly find and update text, images, links, and configuration.

---

## Table of Contents

1. [Global (Header, Footer, Meta)](#global)
2. [Home Page](#home-page)
3. [About Page](#about-page)
4. [Services Page](#services-page)
5. [Services Two Page (unpublished)](#services-two-page)
6. [Selected Work Page](#selected-work-page)
7. [Portfolio Page (unpublished)](#portfolio-page)
8. [Images & Assets](#images--assets)
9. [SEO & Anti-AI Scraping](#seo--anti-ai-scraping)
10. [Power Automate Integration](#power-automate-integration)

---

## Global

### Site Meta Tags & SEO
**File:** `index.html`

| Item | Current Value |
|------|---------------|
| Page title | `DABL Studio \| Economic Development Strategy & Consulting` |
| Meta description | `DABL Studio is an economic development consultancy...` |
| Keywords | Chicago policy research, urban planning, corridor planning, community wealth building, racial equality, equity, reparations, environmental planning, energy policy, renewables, municipal bonds + 15 more |
| Anti-AI meta tags | `noai`, `noimageai`, GPTBot/CCBot/Google-Extended blocked |
| OG URL | `https://dablstudio.com/` |
| OG image | `https://dablstudio.com/og-image.png` ⚠️ **PLACEHOLDER — file does not exist yet** |
| Canonical URL | `https://dablstudio.com/` |
| JSON-LD | `ProfessionalService` schema with Chicago geo-targeting + `WebSite` schema |

**To update:** Edit the values directly in `index.html`. Create/upload an `og-image.png` to the `public/` folder (recommended 1200×630px).

---

### Header / Navigation
**File:** `src/components/Header.tsx`

| Item | Current Value |
|------|---------------|
| Brand name | `DABL` / `Studio` |
| Nav items | `Home`, `About`, `Services` |

**To update:** Edit the `navItems` array or the brand text. Note: "Selected Work" and "Services Two" are intentionally **not** in the nav.

---

### Footer
**File:** `src/components/Footer.tsx`

| Item | Current Value |
|------|---------------|
| Brand name | `DABL Studio` |
| Tagline | `Economic development consultancy working with cities...` |
| Email | `hello@dablstudio.com` |
| LinkedIn URL | `https://linkedin.com` ⚠️ **PLACEHOLDER — not a real profile link** |
| Privacy Policy | Static text, not linked ⚠️ **PLACEHOLDER** |

**To update:** Replace the LinkedIn `href` with your actual profile URL. Add a real link to the Privacy Policy text.

---

## Home Page
**File:** `src/pages/Home.tsx`

### Hero Section
| Item | Current Value |
|------|---------------|
| Hero image | `src/assets/hero-cityscape.jpg` (imported) |
| Headline | `Building Stronger Local Economies...` |
| Subheadline | `Economic development consultancy working with cities...` |
| CTA button text | `Let's Talk` → links to `/services#contact` |
| Secondary CTA text | `View Work & Services` → links to `/services` |

### Value Pillars
Edit the `valuePillars` array. Each object has `title` and `description`.

### Areas of Work
Edit the `expertise` array. Each object has `title`, `description`, and `items` (bullet list).

### Selected Experience
Edit the `experiences` array. Each object has `title` and `description`.
- **"Selected Work" heading** is a clickable link to `/work` with hover arrow effect.

### Bottom CTA
| Item | Current Value |
|------|---------------|
| Heading | `Every Project Starts With a Conversation` |
| Response time note | `We typically respond within 1–2 business days.` |

---

## About Page
**File:** `src/pages/About.tsx`

### Hero Section
| Item | Current Value |
|------|---------------|
| Headline | `The Work Behind the Work` |
| Description | About DABL Studio's approach |

### Bio / Founder Section
| Item | Current Value |
|------|---------------|
| Profile photo | `src/assets/about-profile.jpg` |
| Bio paragraphs | 3 paragraphs of founder text |

### Credentials
Edit the `credentials` array. Three categories:
- **Education** — degree names
- **Professional Background** — experience items
- **Sector Experience** — sector items

### DABL Studio Section
Positioned below credentials. Contains company overview paragraphs.

### Values
Edit the `values` array. Each object has `title` and `description`.

### Values Image
Uses `src/assets/community-engagement.jpg`.

---

## Services Page
**File:** `src/pages/Services.tsx`

### Hero Section
| Item | Current Value |
|------|---------------|
| Headline | `How We Work` |
| Hero image | `src/assets/community-planning.jpg` |

### Service Areas
Edit the `services` array. Four categories, each with `title` and `items`.

### Engagement Models
Edit the `engagementModels` array. Each has `title` and `description`.

### Methodology
Edit the `methodology` array. Each has `step`, `title`, and `description`.

### Client Types
Edit the `clientTypes` array. Each has `category`, `image` (⚠️ all use `/placeholder.svg`), and `items`.
- **"See Clients' Projects"** link at bottom → navigates to `/work`

### Contact Form
| Item | Current Value |
|------|---------------|
| Contact email | `hello@dablstudio.com` |
| Inquiry types | `inquiryTypes` array |
| Referral sources | `referralSources` array |
| Backend | Power Automate webhook (see [integration section](#power-automate-integration)) |

---

## Services Two Page
**File:** `src/pages/ServicesTwo.tsx`
**Route:** `/services-two`
**Status:** ⚠️ **UNPUBLISHED** — not in the nav, accessible only via direct URL.

This is a duplicate of the Services page with the contact section replaced by an **embedded form** (iframe) compatible with **Microsoft Forms** or **Google Forms**.

### How to Activate the Contact Form

Edit `src/pages/ServicesTwo.tsx` and set the `FORM_EMBED_URL` constant:

```typescript
const FORM_EMBED_URL = "YOUR_FORM_URL_HERE";
```

**Microsoft Forms:**
1. Go to [forms.office.com](https://forms.office.com) → open your form → Share → Embed
2. Copy the `src` URL from the iframe code
3. Paste it as `FORM_EMBED_URL`

**Google Forms:**
1. Go to [docs.google.com/forms](https://docs.google.com/forms) → open your form → Send → `<>` Embed
2. Copy the `src` URL from the iframe code
3. Paste it as `FORM_EMBED_URL`

The page auto-detects the form platform and adjusts iframe height accordingly. A loading spinner shows while the form loads, and a fallback "email us" card displays when no URL is configured.

### All Other Sections
Identical to the main Services page. Edit the same arrays (`services`, `engagementModels`, `methodology`, `clientTypes`) — these are defined locally in the file.

---

## Selected Work Page
**File:** `src/pages/SelectedWork.tsx`
**Route:** `/work`
**Status:** ✅ **LIVE** — accessible via the "Selected Work" link on the Home page and "See Clients' Projects" on the Services page. **Not in the nav.**

### Project Data
Edit the `projects` array. Each project object has:

| Field | Description |
|-------|-------------|
| `title` | Project name |
| `client` | Client/partner name |
| `year` | Year completed |
| `category` | Category tag |
| `description` | Project summary paragraph |
| `outcomes` | Array of key outcome bullet points |

Projects display in alternating left/right layouts with image placeholders.

### Bottom CTA
| Item | Current Value |
|------|---------------|
| Heading | `Interested in Working Together?` |
| CTA link | `/services#contact` |

---

## Portfolio Page
**File:** `src/pages/portfolio/Portfolio.tsx`
**Status:** ⚠️ **UNPUBLISHED** — has a route file but may overlap with Selected Work page.

See the `projects` array for editable data. Structure is similar to Selected Work but includes category filter tags.

---

## Images & Assets

### Current images in `src/assets/`:
| File | Used In | Description |
|------|---------|-------------|
| `hero-cityscape.jpg` | Home hero | Main homepage background |
| `about-profile.jpg` | About bio section | Founder/team photo |
| `community-engagement.jpg` | About values section | Community photo |
| `community-planning.jpg` | Services hero | Planning session photo |

### Placeholder images needing replacement:
| Location | Current Value |
|----------|---------------|
| Services — Client Types (×4) | `/placeholder.svg` |
| Selected Work — Project images (×4) | Grey `bg-muted` placeholder divs |
| OG/social share image | `og-image.png` (doesn't exist yet) |

---

## SEO & Anti-AI Scraping

### SEO Files
| File | Purpose |
|------|---------|
| `index.html` | Meta tags, JSON-LD structured data, keywords |
| `public/sitemap.xml` | XML sitemap with all 4 pages (home, about, services, work) |
| `public/robots.txt` | Bot access rules |

### robots.txt Configuration
**File:** `public/robots.txt`

**Allowed bots:** Googlebot, Bingbot, Slurp, DuckDuckBot, Yandex, Twitterbot, facebookexternalhit, LinkedInBot, Slackbot, WhatsApp

**Blocked AI crawlers:** GPTBot, ChatGPT-User, CCBot, Google-Extended, anthropic-ai, ClaudeBot, Claude-Web, cohere-ai, Bytespider, PerplexityBot, Applebot-Extended, FacebookBot, Meta-ExternalAgent, omgili, Diffbot, img2dataset, Amazonbot

**Blocked scrapers:** SemrushBot, AhrefsBot, MJ12bot, DotBot, PetalBot

### To add new pages to sitemap:
Edit `public/sitemap.xml` and add a new `<url>` entry.

---

## Power Automate Integration
**File:** `src/pages/Services.tsx`

```typescript
const POWER_AUTOMATE_WEBHOOK_URL = "";
```

**To activate:**
1. Create a Power Automate flow with a "When an HTTP request is received" trigger
2. Copy the HTTP POST URL from the trigger
3. Paste it as the value of `POWER_AUTOMATE_WEBHOOK_URL`

The form sends this JSON payload:
```json
{
  "name": "string",
  "email": "string",
  "phone": "string | null",
  "organization": "string",
  "inquiryType": "string | null",
  "referralSource": "string | null",
  "message": "string",
  "submittedAt": "ISO 8601 datetime"
}
```

---

## Quick Checklist

- [ ] Replace LinkedIn placeholder URL in Footer
- [ ] Add Privacy Policy link in Footer
- [ ] Replace 4× Client Types placeholder images (Services page)
- [ ] Replace 4× Selected Work project image placeholders
- [ ] Create and upload `og-image.png` (1200×630px)
- [ ] Add Power Automate webhook URL (Services page)
- [ ] Add Microsoft Forms / Google Forms URL (Services Two page)
- [ ] Review all bio/description text for accuracy
- [ ] Update canonical URL if not using `dablstudio.com`
- [ ] Update `sameAs` array in JSON-LD with real social media URLs
