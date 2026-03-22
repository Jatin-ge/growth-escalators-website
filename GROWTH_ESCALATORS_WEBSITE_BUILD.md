# GROWTH ESCALATORS — COMPLETE WEBSITE BUILD SPEC
# Claude Code Execution Prompt — Read ENTIRELY before writing any code

---

## EXECUTIVE SUMMARY

Build a complete, production-ready Next.js marketing website for **Growth Escalators**, a performance marketing agency in Jaipur, India specializing in Meta Ads & CRO for D2C ecommerce brands. The site must be dynamic, visually striking, CRO-optimized, SEO-architected, and ready to generate inbound leads (strategy call bookings).

**This is NOT a template site. This must feel premium, confident, and alive with motion.**

---

## SECTION 1: TECHNICAL FOUNDATION

### Stack
- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3+
- **Animation:** Framer Motion (npm: framer-motion)
- **Icons:** Lucide React (npm: lucide-react)
- **Fonts:** Google Fonts loaded via next/font/google
- **Images:** next/image with WebP optimization
- **Deployment:** Vercel (auto-deploy from GitHub)

### GitHub Setup
```bash
# Initialize repo
mkdir growth-escalators-website && cd growth-escalators-website
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*" --use-npm
git init
git remote add origin https://github.com/Jatin-ge/growth-escalators-website.git
```

After the full build is complete:
```bash
git add .
git commit -m "feat: complete Growth Escalators website v1"
git branch -M main
git push -u origin main
```

### Project Structure
```
src/
├── app/
│   ├── layout.tsx                    # Root layout with fonts, metadata, header/footer
│   ├── page.tsx                      # Homepage
│   ├── services/
│   │   ├── page.tsx                  # Services hub
│   │   ├── meta-ads/page.tsx
│   │   ├── google-ads/page.tsx
│   │   ├── cro/page.tsx
│   │   ├── creative-strategy/page.tsx
│   │   ├── funnels-automation/page.tsx
│   │   ├── ecommerce-marketing/page.tsx
│   │   └── website-development/page.tsx
│   ├── industries/
│   │   ├── page.tsx                  # Industries hub
│   │   ├── d2c-ecommerce/page.tsx
│   │   ├── skincare-beauty/page.tsx
│   │   ├── fashion-apparel/page.tsx
│   │   ├── health-wellness/page.tsx
│   │   ├── jewellery-accessories/page.tsx
│   │   ├── ayurveda-organic/page.tsx
│   │   └── real-estate/page.tsx
│   ├── results/
│   │   ├── page.tsx                  # Case studies hub
│   │   ├── odra-organics/page.tsx
│   │   ├── paraizo/page.tsx
│   │   ├── swarnsootra/page.tsx
│   │   └── atatika-studios/page.tsx
│   ├── about/page.tsx
│   ├── book-strategy-call/page.tsx
│   ├── privacy-policy/page.tsx
│   └── terms-conditions/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionWrapper.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── FadeInOnScroll.tsx
│   │   ├── ProcessStepper.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── ClientLogoCarousel.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── IndustryCard.tsx
│   │   ├── CaseStudyCard.tsx
│   │   ├── CTASection.tsx
│   │   └── CalEmbed.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── ProblemSection.tsx
│       ├── SolutionSection.tsx
│       └── ResultsSection.tsx
├── content/
│   ├── services.ts                   # All service page data
│   ├── industries.ts                 # All industry page data
│   ├── caseStudies.ts                # All case study data
│   ├── testimonials.ts               # Testimonial data
│   └── siteConfig.ts                 # Global config (contact info, social links, etc.)
├── lib/
│   ├── metadata.ts                   # SEO metadata generator utility
│   └── utils.ts                      # Shared utilities
└── styles/
    └── globals.css                   # Tailwind base + custom CSS variables
```

### Content-Driven Architecture
All page content lives in `/src/content/` as TypeScript files with typed data. Service pages, industry pages, and case study pages all use shared template components that consume this data. Adding a new page = adding a new entry to the content file + creating the route file that imports the template.

---

## SECTION 2: DESIGN SYSTEM

### Aesthetic Direction: "Dark Confidence Meets Clean Precision"

The design alternates between dark sections (hero areas, CTA blocks, case study showcases) and light sections (content, services, FAQs). The dark sections feel bold and premium. The light sections feel clean and trustworthy. The accent color (electric green) creates energy and draws the eye to CTAs and key metrics.

### Color Palette

Define these in tailwind.config.ts as custom colors AND in globals.css as CSS variables:

```
Background Dark:    #0A0A0A   (near-black, used for dark sections)
Background Dark 2:  #111111   (slightly lighter dark, for cards on dark bg)
Background Light:   #FAFAFA   (off-white, used for light sections)
Background Light 2: #FFFFFF   (pure white, for cards on light bg)
Accent Primary:     #00E87B   (electric green — CTAs, highlights, metrics)
Accent Hover:       #00FF8C   (brighter green for hover states)
Accent Muted:       #00E87B1A (green at 10% opacity, for subtle backgrounds)
Text Primary Dark:  #FFFFFF   (white text on dark backgrounds)
Text Secondary Dark:#94A3B8   (muted text on dark backgrounds)
Text Primary Light: #0F172A   (near-black text on light backgrounds)
Text Secondary Light:#64748B  (muted text on light backgrounds)
Border Dark:        #1E293B   (subtle borders on dark backgrounds)
Border Light:       #E2E8F0   (subtle borders on light backgrounds)
```

### Typography

Use `next/font/google` to load:

- **Display/Headings:** `Syne` — Bold, geometric, distinctive. Weight 700-800. Used for all H1, H2, H3 headings.
- **Body:** `DM Sans` — Clean, modern, highly readable. Weight 400 (regular) and 500 (medium). Used for all body text, descriptions, nav items.
- **Mono/Metrics:** `JetBrains Mono` — Used exclusively for numbers in metric displays (ROAS, revenue figures, percentages) to give them a data-driven feel.

**Type Scale (desktop / mobile):**
```
H1 (Hero):        64px / 40px    font-weight: 800   line-height: 1.1    Syne
H2 (Section):     48px / 32px    font-weight: 700   line-height: 1.15   Syne
H3 (Subsection):  32px / 24px    font-weight: 700   line-height: 1.2    Syne
H4 (Card title):  24px / 20px    font-weight: 700   line-height: 1.3    Syne
Body Large:        18px / 16px    font-weight: 400   line-height: 1.7    DM Sans
Body:              16px / 15px    font-weight: 400   line-height: 1.7    DM Sans
Body Small:        14px / 13px    font-weight: 400   line-height: 1.6    DM Sans
Metric Number:     56px / 36px    font-weight: 700   line-height: 1.0    JetBrains Mono
Metric Label:      14px / 12px    font-weight: 500   line-height: 1.4    DM Sans uppercase tracking-wider
```

### Spacing & Layout
```
Max Content Width:   1280px (mx-auto px-6)
Section Padding:     py-24 (96px) on desktop, py-16 (64px) on mobile
Card Border Radius:  rounded-2xl (16px)
Card Padding:        p-8 (32px)
Component Gap:       gap-8 (32px) standard, gap-12 (48px) for major sections
```

### Animation Principles (Framer Motion)

**Page load:** Staggered fade-in from bottom (y: 30 → 0, opacity: 0 → 1) with 0.1s delay between elements.

**Scroll reveal:** Use Framer Motion's `useInView` hook. Elements fade up (y: 40 → 0) with opacity transition. Duration: 0.6s. Ease: [0.25, 0.1, 0.25, 1].

**Counters:** AnimatedCounter component that counts from 0 to target number when scrolled into view. Duration: 2s. Use easeOut.

**Hover on cards:** scale(1.02), subtle shadow increase, 0.3s transition.

**CTA buttons:** On hover, background brightens, subtle scale(1.05), 0.2s transition.

**Logo carousel:** Infinite horizontal scroll using CSS animation (translateX), 30s duration, linear, paused on hover.

**Mobile:** Reduce all animation distances by 50%. Disable parallax. Keep fade-ins but simplify.

### Backgrounds & Texture

**Dark sections:** Not flat #0A0A0A. Add a very subtle noise/grain texture overlay (CSS background with SVG noise pattern at 2-3% opacity) to give depth. Optionally add a very faint radial gradient of the accent color at 3-5% opacity behind hero headings.

**Light sections:** Clean #FAFAFA with no texture. Let the content breathe.

**Hero section specifically:** Dark background with an animated gradient mesh or subtle moving particles effect using CSS/canvas. Keep it performant — no heavy WebGL.

---

## SECTION 3: GLOBAL COMPONENTS

### Header (components/layout/Header.tsx)
- Fixed/sticky at top with backdrop-blur on scroll (transparent at top, bg-dark/80 backdrop-blur-xl on scroll)
- Logo on the left: Text logo "Growth Escalators" in Syne Bold with the accent green on "Growth" — OR use an SVG logo if available at the current site's logo URL. For now, use text logo.
- Navigation links center-right: Services (dropdown), Industries (dropdown), Results, About
- CTA button far right: "Book a Call" → links to /book-strategy-call/
- Mobile: Hamburger menu → full-screen overlay menu with staggered animation
- Dropdown menus: Clean, dark dropdown with links to individual service/industry pages. Appears on hover (desktop) or tap (mobile).

### Footer (components/layout/Footer.tsx)
- Dark background (#0A0A0A)
- 4-column grid on desktop (Logo+description | Services links | Quick Links | Contact info)
- Logo and one-line description: "Performance marketing for D2C brands that scales revenue, not just ad spend."
- Services column: Links to all 7 service pages
- Quick Links: About, Results, Book a Strategy Call, Blog (coming soon), Privacy Policy, Terms & Conditions
- Contact: +91 77338 88883, Info@growthescalators.com, Jaipur, Rajasthan, India
- Social icons: Instagram (https://www.instagram.com/growthescalators/), LinkedIn (https://www.linkedin.com/company/growth-escalators/), Facebook (https://www.facebook.com/growthescalators/)
- Bottom bar: "© 2026 Growth Escalators. All Rights Reserved."

### SectionWrapper (components/ui/SectionWrapper.tsx)
- Props: `variant` ("dark" | "light"), `className`, `children`, `id`
- Handles background color, padding, max-width container
- Dark variant: bg-[#0A0A0A] with noise texture overlay
- Light variant: bg-[#FAFAFA]
- All sections use this wrapper for consistency

### FadeInOnScroll (components/ui/FadeInOnScroll.tsx)
- Framer Motion wrapper component
- Uses `useInView` with `once: true` and `margin: "-100px"`
- Props: `children`, `delay` (default 0), `direction` ("up" | "left" | "right", default "up")
- Animates from opacity 0 + translateY(40px) to opacity 1 + translateY(0)

### Button (components/ui/Button.tsx)
- Props: `variant` ("primary" | "secondary" | "outline"), `size` ("sm" | "md" | "lg"), `href`, `children`
- Primary: bg-accent text-black font-semibold, hover:bg-accent-hover, rounded-xl
- Secondary: bg-white/10 text-white, hover:bg-white/20, rounded-xl (for dark backgrounds)
- Outline: border-2 border-accent text-accent, hover:bg-accent hover:text-black, rounded-xl
- All buttons have slight scale on hover and transition-all duration-200

### AnimatedCounter (components/ui/AnimatedCounter.tsx)
- Props: `target` (number), `suffix` (string, e.g., "x", "%", "Cr+", "L+"), `prefix` (string, e.g., "₹"), `duration` (default 2000ms)
- Counts from 0 to target when scrolled into view
- Uses JetBrains Mono font for the number
- Uses DM Sans for prefix/suffix

### CTASection (components/ui/CTASection.tsx)
- Reusable dark-background CTA block used at bottom of every page
- Headline: "Ready to Scale Your D2C Brand?"
- Subtext: "We work with a limited number of brands each month to ensure every client gets the attention they deserve. If your brand is doing ₹5L+/month and you want profitable growth — let's talk."
- CTA Button: "Book Your Free Strategy Call" → /book-strategy-call/
- Subtle accent glow effect behind the button

### CalEmbed (components/ui/CalEmbed.tsx)
- Embeds Cal.com booking widget
- Cal.com link: https://cal.com/growthescalators/book/d2c-strategy
- Use Cal.com's embed script: load via next/script
- Style the container to match the site's dark/light theme

### FAQAccordion (components/ui/FAQAccordion.tsx)
- Props: `items` (array of { question: string, answer: string })
- Clean accordion with + / - toggle icon
- Smooth height animation using Framer Motion's AnimatePresence
- Only one item open at a time

### ProcessStepper (components/ui/ProcessStepper.tsx)
- Props: `steps` (array of { number: string, title: string, description: string })
- Horizontal layout on desktop with connecting lines between steps
- Vertical layout on mobile
- Each step has a numbered circle (accent green), title, description
- Steps animate in sequentially on scroll

### ClientLogoCarousel (components/ui/ClientLogoCarousel.tsx)
- Infinite horizontal scroll, CSS animation
- For now, use placeholder gray rectangles with brand names as text (Odra Organics, Paraizo, Swarnsootra, Atatika Studios, and add these: Exzept, Yellow Diaries, Flight Ticket Fare, Elixzor)
- 8 logos, duplicated for seamless infinite scroll
- Pause on hover
- Monochrome/muted style (grayscale or white logos on dark, gray logos on light)

### ServiceCard (components/ui/ServiceCard.tsx)
- Props: `title`, `description`, `href`, `icon` (Lucide icon name)
- Card with icon, title, one-line description, arrow link
- Hover: slight lift + accent border glow

### IndustryCard (components/ui/IndustryCard.tsx)
- Props: `title`, `description`, `href`, `imageUrl` (optional)
- Card with optional background image/gradient, title overlay
- Hover: scale effect

### CaseStudyCard (components/ui/CaseStudyCard.tsx)
- Props: `title`, `industry`, `metric`, `metricLabel`, `description`, `href`
- Large card with industry tag, brand name, headline metric (using JetBrains Mono), description
- Hover: reveal "Read Case Study →" link

### TestimonialCard (components/ui/TestimonialCard.tsx)
- Props: `quote`, `name`, `title`, `company`, `rating` (number)
- Card with quote text, star rating, attribution
- Clean, minimal design

---

## SECTION 4: CONTENT DATA FILES

### src/content/siteConfig.ts
```typescript
export const siteConfig = {
  name: "Growth Escalators",
  tagline: "Performance Marketing for D2C Brands",
  description: "We scale D2C ecommerce brands through profitable Meta Ads, Google Ads, and CRO. Based in Jaipur, serving brands across India.",
  url: "https://growthescalators.com",
  contact: {
    phone: "+91 77338 88883",
    email: "Info@growthescalators.com",
    address: "264/103-104, Sector 26, Sanganer, Pratap Nagar, Jaipur, Rajasthan 302033",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
  },
  social: {
    instagram: "https://www.instagram.com/growthescalators/",
    linkedin: "https://www.linkedin.com/company/growth-escalators/",
    facebook: "https://www.facebook.com/growthescalators/",
  },
  booking: {
    calLink: "https://cal.com/growthescalators/book/d2c-strategy",
  },
  stats: {
    brandsScaled: "50+",
    adSpendManaged: "2Cr+",
    avgROAS: "4.2x",
    campaignsRun: "100+",
  },
};
```

### src/content/services.ts
```typescript
export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  heroHeadline: string;
  heroSubheadline: string;
  metaTitle: string;
  metaDescription: string;
  icon: string; // Lucide icon name
  shortDescription: string;
  problemPoints: string[];
  approach: { step: string; title: string; description: string }[];
  deliverables: string[];
  relatedCaseStudies: string[]; // slugs
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "meta-ads",
    title: "Meta Ads Management",
    shortTitle: "Meta Ads",
    heroHeadline: "Meta Ads That Actually Drive Revenue",
    heroSubheadline: "Profitable Facebook & Instagram campaigns that scale your D2C brand — not just your ad spend. We optimize for ROAS, CAC, and real revenue growth.",
    metaTitle: "Meta Ads Management for D2C Brands | Growth Escalators",
    metaDescription: "Expert Meta Ads management for D2C ecommerce brands. We scale revenue through data-driven Facebook & Instagram advertising. Based in Jaipur, serving brands across India.",
    icon: "Target",
    shortDescription: "Data-driven Facebook & Instagram advertising that scales revenue profitably.",
    problemPoints: [
      "Your ROAS has been stuck between 1.5x-2.5x and nothing you try moves the needle",
      "CPMs keep climbing but your creative strategy hasn't evolved beyond static images",
      "You're testing audiences randomly instead of following a structured framework",
      "Your current agency sends reports full of impressions and reach — but revenue hasn't grown"
    ],
    approach: [
      { step: "01", title: "Account Audit", description: "We tear apart your ad account structure, audiences, creatives, and pixel setup to find exactly what's broken." },
      { step: "02", title: "Strategy Build", description: "We design a full-funnel campaign architecture — prospecting, retargeting, and retention — with clear ROAS and CAC targets." },
      { step: "03", title: "Creative Sprint", description: "Our in-house team produces 10-15 scroll-stopping creatives per month — UGC, static, video — all designed for conversion." },
      { step: "04", title: "Launch & Test", description: "Structured creative and audience testing with daily optimization. We kill losers fast and scale winners aggressively." },
      { step: "05", title: "Scale", description: "Once we find profitable combinations, we scale spend systematically while protecting your margins and CAC." }
    ],
    deliverables: [
      "Daily ad account monitoring & optimization",
      "3-5 new creative tests launched weekly",
      "Full-funnel campaign architecture (prospecting + retargeting + retention)",
      "Weekly performance reports with ROAS, CAC, and revenue metrics",
      "Monthly strategy reviews and next-month planning",
      "Landing page and checkout flow recommendations",
      "Custom audience and lookalike strategy",
      "Pixel and CAPI setup and maintenance"
    ],
    relatedCaseStudies: ["paraizo", "swarnsootra"],
    faqs: [
      { question: "What's the minimum monthly ad spend you work with?", answer: "We typically work with brands spending ₹1L+ per month on Meta Ads. Below that threshold, the data volume isn't sufficient for our testing framework to work effectively." },
      { question: "How quickly will I see results?", answer: "Most brands see meaningful improvements within the first 30 days as we restructure the account and launch new creatives. Significant scaling typically happens by month 2-3." },
      { question: "Do you handle the creatives or do I need to provide them?", answer: "We handle everything. Our in-house creative team (designer + video editor + creative strategist) produces all ad creatives as part of our service." },
      { question: "What makes you different from other Meta Ads agencies?", answer: "We optimize for revenue, not vanity metrics. We have an in-house creative team. And we treat your ad budget like our own money — every rupee is accountable." }
    ]
  },
  {
    slug: "google-ads",
    title: "Google Ads Management",
    shortTitle: "Google Ads",
    heroHeadline: "Google Ads That Capture High-Intent Buyers",
    heroSubheadline: "Reach customers actively searching for products like yours. We build Google Ads campaigns that convert searchers into buyers at profitable CAC.",
    metaTitle: "Google Ads Management for D2C & Ecommerce | Growth Escalators",
    metaDescription: "Google Ads management for D2C and ecommerce brands. Search, Shopping, and Performance Max campaigns optimized for revenue. Jaipur-based agency serving India.",
    icon: "Search",
    shortDescription: "Search, Shopping, and Performance Max campaigns that capture high-intent buyers.",
    problemPoints: [
      "Your Google Ads account is burning budget on broad, irrelevant search terms",
      "Shopping campaigns are running but ROAS doesn't justify the spend",
      "You're not sure if Performance Max is actually working or just cannibalizing branded searches",
      "No clear structure separating prospecting from branded traffic"
    ],
    approach: [
      { step: "01", title: "Account Audit", description: "We analyze your search terms, campaign structure, bidding strategy, and conversion tracking to find waste and opportunity." },
      { step: "02", title: "Campaign Architecture", description: "We restructure your account with clean separation: branded, non-branded, shopping, and performance max — each with its own targets." },
      { step: "03", title: "Feed & Landing Page Optimization", description: "We optimize your product feed for Shopping and ensure landing pages match search intent for maximum Quality Score." },
      { step: "04", title: "Launch & Optimize", description: "We launch restructured campaigns with proper bidding strategies and optimize based on actual revenue data, not just clicks." },
      { step: "05", title: "Scale Winners", description: "We identify your most profitable products, audiences, and keywords, then systematically increase spend where returns are strongest." }
    ],
    deliverables: [
      "Full account restructure and campaign architecture",
      "Search, Shopping, and Performance Max campaign management",
      "Negative keyword management and search term monitoring",
      "Product feed optimization for Shopping campaigns",
      "Conversion tracking setup and validation",
      "Weekly performance reports with revenue attribution",
      "Monthly strategy reviews",
      "Landing page recommendations for conversion optimization"
    ],
    relatedCaseStudies: ["paraizo"],
    faqs: [
      { question: "Do you manage both Search and Shopping campaigns?", answer: "Yes. We manage Search, Shopping, Performance Max, Display, and YouTube campaigns — depending on what makes sense for your brand's goals and budget." },
      { question: "How do you handle Performance Max campaigns?", answer: "We set up PMax with proper asset groups, audience signals, and campaign-level targets. We also monitor for branded search cannibalization and ensure PMax is actually driving incremental revenue." },
      { question: "Can you work alongside our Meta Ads?", answer: "Absolutely. Most of our clients run both Meta and Google. We coordinate across platforms to ensure consistent messaging and proper attribution." }
    ]
  },
  {
    slug: "cro",
    title: "Conversion Rate Optimization",
    shortTitle: "CRO",
    heroHeadline: "Turn More Visitors Into Paying Customers",
    heroSubheadline: "Your traffic is expensive. CRO makes every click count by optimizing your landing pages, product pages, and checkout flow for maximum conversions.",
    metaTitle: "CRO Services for D2C Ecommerce | Growth Escalators",
    metaDescription: "Conversion Rate Optimization for D2C ecommerce. We optimize landing pages, product pages, and checkout flows to increase revenue from your existing traffic.",
    icon: "TrendingUp",
    shortDescription: "Landing page, product page, and checkout optimization to maximize revenue from existing traffic.",
    problemPoints: [
      "You're driving traffic but your conversion rate is stuck below 2%",
      "Cart abandonment is over 70% and you don't know why",
      "Your landing pages look good but don't convert",
      "You've never systematically tested headlines, layouts, or checkout flows"
    ],
    approach: [
      { step: "01", title: "Conversion Audit", description: "We analyze your full funnel — landing pages, product pages, cart, checkout — to identify the biggest conversion leaks." },
      { step: "02", title: "Heatmap & Behavior Analysis", description: "We use session recordings and heatmaps to understand exactly how visitors interact with your pages and where they drop off." },
      { step: "03", title: "Hypothesis & Prioritization", description: "We build a prioritized list of test hypotheses based on data — not guesswork — focusing on changes with the highest potential revenue impact." },
      { step: "04", title: "Test & Implement", description: "We design and implement A/B tests on your highest-traffic pages, measuring impact on actual revenue — not just clicks." },
      { step: "05", title: "Iterate & Compound", description: "Winners get implemented permanently. Learnings feed the next round of tests. Conversion rate compounds over time." }
    ],
    deliverables: [
      "Full-funnel conversion audit with prioritized recommendations",
      "Heatmap and session recording analysis",
      "Landing page design and copy optimization",
      "Product page optimization (layout, imagery, copy, CTAs)",
      "Checkout flow optimization (reduce abandonment)",
      "A/B test design, implementation, and analysis",
      "Monthly CRO reports with test results and revenue impact",
      "Ongoing optimization recommendations"
    ],
    relatedCaseStudies: ["odra-organics", "swarnsootra"],
    faqs: [
      { question: "How is CRO different from just redesigning my website?", answer: "CRO is data-driven. Instead of guessing what looks better, we test specific changes and measure their impact on actual revenue. Every change is validated by data." },
      { question: "How much traffic do I need for CRO to work?", answer: "For meaningful A/B tests, you need at least 1,000-2,000 visitors per month to the pages being tested. Below that, we focus on best-practice implementation rather than split testing." },
      { question: "What kind of conversion rate improvements can I expect?", answer: "Results vary by brand, but most of our clients see 20-50% improvement in conversion rate within the first 2-3 months of systematic optimization." }
    ]
  },
  {
    slug: "creative-strategy",
    title: "Creative Strategy & Ad Production",
    shortTitle: "Creative Strategy",
    heroHeadline: "Scroll-Stopping Creatives That Convert",
    heroSubheadline: "Your ads are only as good as your creatives. Our in-house team produces data-informed ad creatives — static, video, and UGC — designed to stop thumbs and drive purchases.",
    metaTitle: "Ad Creative Strategy & Production for D2C | Growth Escalators",
    metaDescription: "In-house creative team producing high-converting ad creatives for D2C brands. Static ads, video ads, UGC content — all optimized for Meta and Google platforms.",
    icon: "Palette",
    shortDescription: "In-house creative team producing high-converting static, video, and UGC ad content.",
    problemPoints: [
      "Your creatives have fatigued and performance is declining week over week",
      "You're relying on the same 3-4 ad formats that worked six months ago",
      "Your agency outsources creative work to freelancers who don't understand your brand",
      "You know you need video and UGC but don't have the team to produce it"
    ],
    approach: [
      { step: "01", title: "Creative Audit", description: "We analyze your existing ad creatives, identify what's working and what's fatigued, and map creative gaps in your funnel." },
      { step: "02", title: "Creative Strategy", description: "We build a creative testing roadmap covering formats (static, video, UGC, carousel), hooks, angles, and messaging frameworks." },
      { step: "03", title: "Production Sprint", description: "Our in-house team — creative strategist, graphic designer, and video editor — produces a batch of 10-15 creatives per sprint." },
      { step: "04", title: "Test & Learn", description: "We launch creatives into structured tests, identify top performers within 48-72 hours, and extract learnings for the next batch." },
      { step: "05", title: "Scale Winners", description: "Winning creatives get variations and iterations. We build creative 'families' around proven hooks and angles." }
    ],
    deliverables: [
      "Monthly creative strategy and testing roadmap",
      "10-15 new ad creatives per month (mix of static, video, carousel)",
      "UGC-style video content production",
      "Ad copy and hook writing",
      "Creative performance analysis and reporting",
      "Competitor creative analysis",
      "Trend monitoring and adaptation"
    ],
    relatedCaseStudies: ["paraizo", "odra-organics"],
    faqs: [
      { question: "Do you have an in-house creative team?", answer: "Yes. We have a dedicated creative strategist, graphic designer, and video editor. All creative production happens in-house — we don't outsource to freelancers." },
      { question: "How many creatives do you produce per month?", answer: "Typically 10-15 creatives per month, including a mix of static images, video ads, carousels, and UGC-style content. Volume depends on your testing velocity needs." },
      { question: "Can you work with our existing brand guidelines?", answer: "Absolutely. We work within your brand guidelines while pushing creative boundaries. Performance always comes first, but we never compromise your brand identity." }
    ]
  },
  {
    slug: "funnels-automation",
    title: "Marketing Funnels & Automation",
    shortTitle: "Funnels & Automation",
    heroHeadline: "Automated Funnels That Nurture & Convert",
    heroSubheadline: "From first click to repeat purchase — we build automated marketing funnels that nurture leads, recover abandoned carts, and turn one-time buyers into loyal customers.",
    metaTitle: "Marketing Funnels & Automation for D2C | Growth Escalators",
    metaDescription: "Marketing funnel design and automation for D2C brands. Email sequences, WhatsApp flows, abandoned cart recovery, and post-purchase nurture — all automated.",
    icon: "GitBranch",
    shortDescription: "Automated email, WhatsApp, and funnel systems that nurture leads and recover revenue.",
    problemPoints: [
      "You're spending money on ads but have no follow-up system for leads who don't buy immediately",
      "Cart abandonment emails are either nonexistent or generic templates that nobody opens",
      "Your post-purchase experience is 'order confirmation and silence'",
      "You know you should be doing email/WhatsApp marketing but haven't set it up properly"
    ],
    approach: [
      { step: "01", title: "Funnel Mapping", description: "We map your entire customer journey — from ad click to repeat purchase — and identify every drop-off point and automation opportunity." },
      { step: "02", title: "Sequence Design", description: "We design email and WhatsApp sequences for every stage: welcome, abandoned cart, post-purchase, win-back, and VIP nurture." },
      { step: "03", title: "Build & Integrate", description: "We set up the entire automation infrastructure — email platform, WhatsApp API, triggers, and workflows — connected to your store." },
      { step: "04", title: "Launch & Monitor", description: "We launch sequences with proper deliverability practices and monitor open rates, click rates, and revenue attribution." },
      { step: "05", title: "Optimize", description: "We continuously test subject lines, send times, content, and offers to maximize revenue from automated flows." }
    ],
    deliverables: [
      "Complete funnel strategy and customer journey mapping",
      "Email automation sequences (welcome, abandoned cart, post-purchase, win-back)",
      "WhatsApp automation flows",
      "Landing page and lead capture optimization",
      "Email/WhatsApp template design and copywriting",
      "Deliverability monitoring and optimization",
      "Monthly performance reporting on automation revenue"
    ],
    relatedCaseStudies: ["odra-organics"],
    faqs: [
      { question: "Which email platform do you use?", answer: "We work with multiple platforms depending on your needs and budget. We can set up and manage Brevo, Klaviyo, or integrate with your existing email platform." },
      { question: "Can you set up WhatsApp automation?", answer: "Yes. We build WhatsApp automation flows using the Meta WhatsApp Business API — including order confirmations, abandoned cart reminders, and promotional broadcasts." },
      { question: "How much revenue can I expect from email/WhatsApp automation?", answer: "Well-optimized email and WhatsApp automation typically contributes 15-30% of total ecommerce revenue. If you're currently doing zero automation, this is essentially free revenue." }
    ]
  },
  {
    slug: "ecommerce-marketing",
    title: "Ecommerce Marketing",
    shortTitle: "Ecommerce Marketing",
    heroHeadline: "Full-Stack Growth for Ecommerce Brands",
    heroSubheadline: "Ads alone don't build a brand. We combine paid acquisition, CRO, creative, and retention into a unified growth system that scales your ecommerce revenue sustainably.",
    metaTitle: "Ecommerce Marketing Agency for D2C Brands | Growth Escalators",
    metaDescription: "Full-stack ecommerce marketing for D2C brands — Meta Ads, Google Ads, CRO, creative production, and automation combined into one growth system.",
    icon: "ShoppingBag",
    shortDescription: "Unified growth system combining ads, CRO, creative, and retention for ecommerce brands.",
    problemPoints: [
      "You have 3-4 different agencies or freelancers handling different channels with no coordination",
      "Your ad team doesn't talk to your CRO team, and neither talks to your email team",
      "Revenue spikes when you spend more on ads, but profitability drops",
      "You want one partner who owns the entire growth system — not just one piece"
    ],
    approach: [
      { step: "01", title: "Growth Audit", description: "We audit your entire ecommerce operation — ads, website, checkout, email, retention — and identify the highest-leverage growth opportunities." },
      { step: "02", title: "Strategy Roadmap", description: "We build a 90-day growth plan that coordinates paid acquisition, creative, CRO, and retention into one unified system with shared KPIs." },
      { step: "03", title: "Execute Across Channels", description: "One team manages everything — ads, creatives, landing pages, email, WhatsApp — ensuring consistency and speed." },
      { step: "04", title: "Measure What Matters", description: "We track the metrics that matter: revenue, ROAS, CAC, AOV, LTV, and repeat purchase rate — not impressions and clicks." },
      { step: "05", title: "Compound Growth", description: "Every month, improvements in one area compound with others. Better creatives improve ROAS. Better CRO improves CAC. Better retention improves LTV." }
    ],
    deliverables: [
      "Comprehensive ecommerce growth audit",
      "90-day growth strategy roadmap",
      "Meta Ads + Google Ads management",
      "Creative production (static, video, UGC)",
      "Landing page and checkout optimization",
      "Email and WhatsApp automation",
      "Monthly growth reviews with full-funnel reporting",
      "Quarterly strategy refresh"
    ],
    relatedCaseStudies: ["paraizo", "swarnsootra", "odra-organics"],
    faqs: [
      { question: "Is this different from just hiring you for Meta Ads?", answer: "Yes. Ecommerce Marketing is our full-stack offering. Instead of just running ads, we manage your entire growth system — ads, creatives, CRO, and retention — as one coordinated effort." },
      { question: "What platforms do you work with?", answer: "We work primarily with Shopify and WooCommerce stores. We can also work with custom ecommerce platforms if they have proper tracking in place." },
      { question: "How is pricing structured for this?", answer: "Full-stack ecommerce marketing is a monthly retainer. Pricing depends on your current revenue, ad spend, and scope of services. We'll discuss specifics on the strategy call." }
    ]
  },
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Website Dev",
    heroHeadline: "Websites Built to Convert, Not Just Look Pretty",
    heroSubheadline: "We build high-performance ecommerce websites and landing pages that are fast, mobile-optimized, and designed with conversion as the primary objective.",
    metaTitle: "Ecommerce Website Development | Growth Escalators",
    metaDescription: "High-performance ecommerce website development for D2C brands. Shopify, WooCommerce, and custom builds optimized for speed, mobile, and conversions.",
    icon: "Code",
    shortDescription: "High-performance ecommerce websites and landing pages built for speed and conversion.",
    problemPoints: [
      "Your website loads slowly and you're losing impatient mobile shoppers",
      "Your product pages don't sell — they just list features",
      "Your checkout flow has unnecessary friction that's costing you sales",
      "Your current site looks dated and doesn't build trust with new visitors"
    ],
    approach: [
      { step: "01", title: "Discovery & Strategy", description: "We understand your brand, audience, and goals to design a website strategy focused on conversion, not just aesthetics." },
      { step: "02", title: "UX & Wireframing", description: "We map user flows and create wireframes that prioritize the buyer journey — from landing to checkout to confirmation." },
      { step: "03", title: "Design & Development", description: "We design and build your site with performance at the core — fast loading, mobile-first, SEO-optimized, and conversion-focused." },
      { step: "04", title: "Testing & Launch", description: "We rigorously test across devices, browsers, and connection speeds before launching your site." },
      { step: "05", title: "Optimize Post-Launch", description: "We monitor performance after launch and make data-driven adjustments to improve conversion rates." }
    ],
    deliverables: [
      "Custom website design (Shopify, WooCommerce, or custom)",
      "Mobile-first responsive development",
      "Page speed optimization (Core Web Vitals compliant)",
      "SEO-optimized site structure and metadata",
      "Conversion-focused product and landing page design",
      "Payment gateway integration",
      "Analytics setup (GA4, Meta Pixel)",
      "Post-launch support and optimization"
    ],
    relatedCaseStudies: ["odra-organics"],
    faqs: [
      { question: "Which platforms do you build on?", answer: "We work with Shopify, WooCommerce, and custom builds using Next.js or React. We'll recommend the right platform based on your specific needs and budget." },
      { question: "How long does a website project take?", answer: "A typical ecommerce website takes 4-8 weeks from kickoff to launch, depending on complexity, number of products, and custom requirements." },
      { question: "Do you provide ongoing support after launch?", answer: "Yes. We offer ongoing maintenance and optimization packages to keep your site fast, secure, and continuously improving." }
    ]
  }
];
```

### src/content/industries.ts
```typescript
export interface Industry {
  slug: string;
  title: string;
  heroHeadline: string;
  heroSubheadline: string;
  metaTitle: string;
  metaDescription: string;
  challenges: { title: string; description: string }[];
  approach: string;
  relevantServices: string[]; // service slugs
  relatedCaseStudies: string[]; // case study slugs
}

export const industries: Industry[] = [
  {
    slug: "d2c-ecommerce",
    title: "D2C Ecommerce",
    heroHeadline: "Performance Marketing Built for D2C Brands",
    heroSubheadline: "We work exclusively with D2C ecommerce brands. We understand your margins, your metrics, and your growth challenges — because that's all we do.",
    metaTitle: "D2C Ecommerce Marketing Agency | Growth Escalators",
    metaDescription: "Performance marketing agency specializing in D2C ecommerce brands. Meta Ads, Google Ads, CRO, and creative — all optimized for profitable growth.",
    challenges: [
      { title: "Rising Customer Acquisition Costs", description: "CPMs are climbing every quarter. Without a sophisticated creative and targeting strategy, CAC eats into your margins until scaling becomes unprofitable." },
      { title: "Creative Fatigue Cycles", description: "What worked last month stops working this month. D2C brands need a constant pipeline of fresh, tested creatives to maintain performance." },
      { title: "Attribution Complexity", description: "With iOS privacy changes and multi-touch journeys, knowing which channels actually drive revenue is harder than ever." },
      { title: "Scaling Without Breaking", description: "Going from ₹10L to ₹50L/month in revenue requires fundamentally different strategies than what got you to ₹10L." }
    ],
    approach: "We embed ourselves into your growth operation. We don't just run ads — we optimize your entire acquisition funnel from first impression to repeat purchase. Our team handles Meta Ads, Google Ads, creative production, landing page optimization, and email/WhatsApp automation as one coordinated system. Every decision is driven by data: ROAS, CAC, AOV, LTV, and contribution margin.",
    relevantServices: ["meta-ads", "google-ads", "cro", "creative-strategy", "ecommerce-marketing"],
    relatedCaseStudies: ["paraizo", "swarnsootra", "odra-organics"]
  },
  {
    slug: "skincare-beauty",
    title: "Skincare & Beauty",
    heroHeadline: "Scale Your Skincare Brand Profitably",
    heroSubheadline: "Beauty brands face unique challenges — high return rates, visual-first selling, and fierce competition. We know how to navigate all of it.",
    metaTitle: "Performance Marketing for Skincare & Beauty Brands | Growth Escalators",
    metaDescription: "Performance marketing for skincare and beauty D2C brands. We scale beauty brands through Meta Ads, creative strategy, and CRO optimized for the beauty vertical.",
    challenges: [
      { title: "Visual-First Selling", description: "Skincare and beauty purchases are driven by how products look and feel. Your creatives need to convey texture, results, and aspiration in 3 seconds." },
      { title: "High Return Rates", description: "Shade mismatches, texture issues, and unmet expectations drive returns. Your funnel needs to set correct expectations before purchase." },
      { title: "UGC Dependency", description: "Before/after content and user reviews are essential for beauty brands but hard to produce consistently at scale." },
      { title: "Meta's Ad Restrictions", description: "Before/after imagery, health claims, and body-related messaging face strict Meta ad policies. Your creative team needs to know the guardrails." }
    ],
    approach: "We combine high-converting visual creatives (UGC, lifestyle imagery, tutorial-style video) with targeted Meta Ads campaigns and conversion-optimized product pages. For skincare brands, we focus heavily on building trust through social proof, setting clear product expectations to reduce returns, and creating educational content that moves customers from awareness to purchase.",
    relevantServices: ["meta-ads", "creative-strategy", "cro"],
    relatedCaseStudies: ["odra-organics"]
  },
  {
    slug: "fashion-apparel",
    title: "Fashion & Apparel",
    heroHeadline: "Performance Marketing for Fashion Brands That Sell",
    heroSubheadline: "Fashion moves fast. Your marketing needs to move faster. We help apparel brands scale revenue through paid ads and conversion optimization.",
    metaTitle: "Performance Marketing for Fashion & Apparel Brands | Growth Escalators",
    metaDescription: "Performance marketing for fashion and apparel D2C brands. Meta Ads, Google Shopping, creative production, and CRO for fashion ecommerce.",
    challenges: [
      { title: "Seasonal Demand Swings", description: "Fashion is seasonal. Your ad strategy needs to anticipate demand shifts and adjust budgets, creatives, and offers accordingly." },
      { title: "High SKU Complexity", description: "Managing ads across hundreds or thousands of SKUs requires smart catalog segmentation and dynamic creative strategies." },
      { title: "Size & Fit Returns", description: "Returns due to sizing issues eat margins. Your product pages need to minimize this through better imagery, size guides, and social proof." },
      { title: "Brand vs. Performance Tension", description: "Fashion brands need beautiful aesthetics AND conversion performance. Most agencies sacrifice one for the other." }
    ],
    approach: "For fashion brands, we build campaigns around seasonal collections, trending styles, and inventory priorities. Our creative strategy blends brand-building aesthetics with performance-driven hooks. We use dynamic product ads, Google Shopping, and conversion-optimized lookbook-style landing pages to drive purchases while maintaining brand integrity.",
    relevantServices: ["meta-ads", "google-ads", "creative-strategy", "cro"],
    relatedCaseStudies: ["paraizo"]
  },
  {
    slug: "health-wellness",
    title: "Health & Wellness",
    heroHeadline: "Grow Your Health & Wellness Brand with Precision",
    heroSubheadline: "Health products require trust. We build ad campaigns and funnels that educate, build credibility, and convert health-conscious consumers.",
    metaTitle: "Performance Marketing for Health & Wellness Brands | Growth Escalators",
    metaDescription: "Performance marketing for health and wellness D2C brands. Compliant advertising, educational funnels, and conversion optimization for supplements, fitness, and wellness products.",
    challenges: [
      { title: "Ad Policy Compliance", description: "Health claims, before/after imagery, and supplement advertising face strict platform policies. One wrong move gets your ad account restricted." },
      { title: "Education-Heavy Buying Cycle", description: "Health-conscious consumers research extensively before purchasing. Your funnel needs educational touchpoints, not just product ads." },
      { title: "Trust & Credibility", description: "Customers need to trust your ingredients, sourcing, and claims. Social proof, certifications, and expert endorsements are critical." },
      { title: "Subscription & Retention", description: "Health products are naturally repeat purchases. If you're not building subscription and retention funnels, you're leaving money on the table." }
    ],
    approach: "We build compliant, education-first ad funnels for health and wellness brands. This means creative that educates rather than just sells, landing pages that build trust through social proof and ingredient transparency, and post-purchase automation that drives repeat purchases and subscription upgrades.",
    relevantServices: ["meta-ads", "funnels-automation", "cro", "creative-strategy"],
    relatedCaseStudies: ["odra-organics"]
  },
  {
    slug: "jewellery-accessories",
    title: "Jewellery & Accessories",
    heroHeadline: "Scale Your Jewellery Brand Online",
    heroSubheadline: "Jewellery is an emotional purchase. We create ad experiences that capture attention, build desire, and convert browsers into buyers.",
    metaTitle: "Performance Marketing for Jewellery & Accessories Brands | Growth Escalators",
    metaDescription: "Performance marketing for jewellery and accessories D2C brands. High-AOV ad strategies, visual-first creative, and conversion optimization.",
    challenges: [
      { title: "High AOV, Longer Decision Cycle", description: "Jewellery purchases are considered purchases. Customers browse multiple times before buying. Your retargeting strategy needs to be sophisticated." },
      { title: "Visual Quality is Everything", description: "Poor product photography kills conversions instantly. Your ads and product pages need to showcase quality through exceptional imagery." },
      { title: "Trust for High-Ticket Purchases", description: "Buying jewellery online requires significant trust. Your site and ads need to communicate authenticity, quality, and return policies clearly." },
      { title: "Gifting Seasonality", description: "Major revenue spikes happen around festivals, weddings, and gifting seasons. Your ad calendar needs to capitalize on these windows." }
    ],
    approach: "For jewellery brands, we focus on visual-first creative strategies (high-quality product photography, lifestyle imagery, try-on style video content), sophisticated retargeting sequences for the longer buying cycle, and conversion optimization focused on building trust through reviews, certifications, and clear policies. We also plan and execute seasonal campaigns around key gifting periods.",
    relevantServices: ["meta-ads", "creative-strategy", "cro"],
    relatedCaseStudies: ["swarnsootra"]
  },
  {
    slug: "ayurveda-organic",
    title: "Ayurveda & Organic",
    heroHeadline: "Grow Your Ayurveda Brand in the Digital Age",
    heroSubheadline: "Traditional products, modern marketing. We help Ayurveda and organic brands reach health-conscious consumers through data-driven digital campaigns.",
    metaTitle: "Performance Marketing for Ayurveda & Organic Brands | Growth Escalators",
    metaDescription: "Performance marketing for Ayurveda and organic D2C brands. Compliant advertising, educational content strategy, and conversion optimization for natural products.",
    challenges: [
      { title: "Bridging Traditional & Digital", description: "Ayurveda products have deep heritage but need modern marketing. The challenge is communicating ancient wisdom through digital-first channels." },
      { title: "Ad Compliance for Health Products", description: "Ayurveda products face extra scrutiny from ad platforms. Claims need to be carefully worded to stay compliant while remaining compelling." },
      { title: "Education Before Purchase", description: "Many consumers are unfamiliar with Ayurvedic ingredients and their benefits. Your marketing needs to educate before it can sell." },
      { title: "Building a Premium Perception", description: "Organic and Ayurvedic products command premium pricing. Your brand needs to justify that premium through storytelling, quality signals, and social proof." }
    ],
    approach: "We build marketing systems for Ayurveda and organic brands that lead with education and storytelling. Our ad strategy focuses on content that explains ingredients and benefits (compliant with platform policies), builds brand authority through expert content and testimonials, and converts educated consumers through optimized product pages and checkout flows.",
    relevantServices: ["meta-ads", "creative-strategy", "funnels-automation", "cro"],
    relatedCaseStudies: ["odra-organics"]
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    heroHeadline: "Lead Generation for Real Estate That Actually Converts",
    heroSubheadline: "Not all leads are created equal. We generate high-quality, pre-qualified real estate leads through targeted Meta and Google Ads campaigns.",
    metaTitle: "Real Estate Performance Marketing & Lead Generation | Growth Escalators",
    metaDescription: "Real estate lead generation through Meta Ads and Google Ads. We generate pre-qualified leads for developers, agents, and real estate brands in India.",
    challenges: [
      { title: "Lead Quality Over Quantity", description: "Getting 500 leads that don't pick up the phone is worse than 50 qualified ones who are ready to visit. Quality filtering is essential." },
      { title: "High CPL in Competitive Markets", description: "Real estate advertising is expensive. Without optimized campaigns and strong creative, your cost per lead spirals out of control." },
      { title: "Long Sales Cycles", description: "Real estate purchases take weeks or months. Your lead nurturing system needs to keep prospects engaged until they're ready to buy." },
      { title: "Local Targeting Precision", description: "Real estate is hyperlocal. Your ads need to target the right audience within specific geographic areas — not waste budget on irrelevant locations." }
    ],
    approach: "For real estate, we focus on lead quality over volume. We build Meta Ads and Google Ads campaigns with pre-qualification steps (multi-step forms, budget qualifiers) to filter out low-quality leads. Combined with automated email and WhatsApp nurture sequences, we ensure your sales team only talks to genuinely interested, qualified prospects.",
    relevantServices: ["meta-ads", "google-ads", "funnels-automation"],
    relatedCaseStudies: []
  }
];
```

### src/content/caseStudies.ts
```typescript
export interface CaseStudy {
  slug: string;
  brandName: string;
  industry: string;
  industrySlug: string;
  heroMetric: string;
  heroMetricLabel: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  challenge: string;
  strategy: string;
  results: { metric: string; label: string }[];
  services: string[];
  testimonial?: { quote: string; name: string; title: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "odra-organics",
    brandName: "Odra Organics",
    industry: "Ayurveda & Organic",
    industrySlug: "ayurveda-organic",
    heroMetric: "---",
    heroMetricLabel: "Metrics coming soon",
    metaTitle: "Odra Organics Case Study | Growth Escalators",
    metaDescription: "How Growth Escalators helped Odra Organics scale their organic D2C brand through Meta Ads, creative strategy, and conversion optimization.",
    summary: "Odra Organics, founded by Aniket, is an organic and Ayurveda-focused D2C brand. They came to us looking to scale their online revenue through paid advertising while maintaining their brand's authentic, natural positioning.",
    challenge: "Odra Organics was struggling to scale their Meta Ads profitably. Creative fatigue was setting in, their conversion rate was below industry benchmarks, and their ad account structure wasn't optimized for scaling. They needed a partner who understood both performance marketing and the nuances of marketing organic/Ayurveda products within platform compliance guidelines.",
    strategy: "We rebuilt their Meta Ads account structure from the ground up, implemented a systematic creative testing framework producing 10+ new creatives per month, optimized their product pages for higher conversion rates, and set up automated email flows for abandoned cart recovery and post-purchase nurture. Our creative strategy focused on education-first content that communicated ingredient benefits while staying compliant with ad platform policies.",
    results: [
      { metric: "---", label: "ROAS Achieved" },
      { metric: "---", label: "Revenue Growth" },
      { metric: "---", label: "Conversion Rate Improvement" },
      { metric: "---", label: "Reduction in CAC" }
    ],
    services: ["Meta Ads", "Creative Strategy", "CRO", "Funnels & Automation"],
    testimonial: undefined
  },
  {
    slug: "paraizo",
    brandName: "Paraizo",
    industry: "Fashion & Apparel",
    industrySlug: "fashion-apparel",
    heroMetric: "---",
    heroMetricLabel: "Metrics coming soon",
    metaTitle: "Paraizo Case Study — Fashion D2C Growth | Growth Escalators",
    metaDescription: "How Growth Escalators helped Paraizo, a fashion D2C brand, scale revenue through Meta Ads and performance marketing.",
    summary: "Paraizo is a fashion and apparel D2C brand looking to scale their online presence and revenue through paid advertising. They needed a performance marketing partner who could handle both the creative and media buying sides of their growth.",
    challenge: "Paraizo needed to scale their Meta Ads and Google Ads campaigns while maintaining profitable ROAS. Their previous approach lacked structured creative testing, and their campaigns weren't segmented for different stages of the customer journey. They needed a systematic approach to both audience targeting and creative production.",
    strategy: "We implemented a full-funnel Meta Ads strategy with distinct prospecting, retargeting, and retention campaigns. Our creative team produced fashion-focused ad content mixing lifestyle imagery, product showcases, and UGC-style content. We also optimized their Google Shopping campaigns and implemented conversion tracking improvements for better attribution.",
    results: [
      { metric: "---", label: "ROAS Achieved" },
      { metric: "---", label: "Monthly Revenue Scaled To" },
      { metric: "---", label: "Ad Spend Managed Monthly" },
      { metric: "---", label: "Creative Tests Per Month" }
    ],
    services: ["Meta Ads", "Google Ads", "Creative Strategy"],
    testimonial: undefined
  },
  {
    slug: "swarnsootra",
    brandName: "Swarnsootra",
    industry: "Jewellery & Accessories",
    industrySlug: "jewellery-accessories",
    heroMetric: "---",
    heroMetricLabel: "Metrics coming soon",
    metaTitle: "Swarnsootra Case Study — Jewellery Brand Growth | Growth Escalators",
    metaDescription: "How Growth Escalators helped Swarnsootra, a jewellery D2C brand, scale through Meta Ads, creative strategy, and conversion rate optimization.",
    summary: "Swarnsootra is a jewellery brand that needed to establish and scale their online D2C presence. The high-AOV nature of jewellery purchases required a sophisticated approach to building trust and driving conversions.",
    challenge: "As a jewellery brand selling high-ticket items online, Swarnsootra faced the challenge of building enough trust to convert browsers into buyers. Their product photography was good but their ad strategy wasn't optimized for the longer consideration cycle typical of jewellery purchases. They also needed help with retargeting and conversion optimization.",
    strategy: "We built a multi-touch Meta Ads strategy designed for high-AOV products — awareness campaigns featuring lifestyle and aspiration-driven creatives, consideration campaigns with detailed product showcases and social proof, and conversion campaigns with urgency and trust elements. We also optimized their product pages with better imagery presentation, reviews integration, and trust signals like return policies and authenticity guarantees.",
    results: [
      { metric: "---", label: "ROAS Achieved" },
      { metric: "---", label: "Revenue Growth" },
      { metric: "---", label: "Conversion Rate Improvement" },
      { metric: "---", label: "Average Order Value" }
    ],
    services: ["Meta Ads", "Creative Strategy", "CRO"],
    testimonial: undefined
  },
  {
    slug: "atatika-studios",
    brandName: "Atatika Studios",
    industry: "App Marketing",
    industrySlug: "",
    heroMetric: "---",
    heroMetricLabel: "Metrics coming soon",
    metaTitle: "Atatika Studios Case Study — App Install Campaign | Growth Escalators",
    metaDescription: "How Growth Escalators drove app installs for Atatika Studios through targeted Meta Ads campaigns and creative optimization.",
    summary: "Atatika Studios needed to drive app downloads at scale through performance marketing. This was a different challenge from our typical D2C ecommerce work — focused on cost-per-install optimization rather than ROAS.",
    challenge: "Atatika Studios needed to grow their app user base quickly and cost-effectively. They had limited experience with performance marketing for app installs and needed a partner who could build and optimize campaigns from scratch, including creative production and audience targeting.",
    strategy: "We designed a Meta Ads campaign structure specifically for app install optimization. Our creative team produced engaging video and static ad content highlighting the app's key features and value proposition. We tested multiple audience segments, creative formats, and messaging angles to drive down cost-per-install while maintaining user quality.",
    results: [
      { metric: "---", label: "Total App Installs" },
      { metric: "---", label: "Cost Per Install" },
      { metric: "---", label: "Campaign Duration" },
      { metric: "---", label: "Install-to-Active Rate" }
    ],
    services: ["Meta Ads", "Creative Strategy"],
    testimonial: undefined
  }
];
```

### src/content/testimonials.ts
```typescript
export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Growth Escalators has been fantastic to work with. They consistently deliver strong results, with noticeable improvements in traffic and conversions. Communication is clear, and they provide great insights to help optimize our campaigns.",
    name: "Muaaz Shaikh",
    company: "Client",
    rating: 5
  },
  {
    quote: "Have experienced excellent service from Growth Escalators. From the initial consultation to the final launch, the team was incredibly professional and attentive to our needs. Team is attentive to our feedback, making adjustments quickly and efficiently.",
    name: "Richa Jain",
    company: "Client",
    rating: 5
  },
  {
    quote: "Excellent affordable service. The team delivers quality work consistently.",
    name: "Dr. Sumit Doraya",
    company: "Client",
    rating: 5
  },
  {
    quote: "I have an amazing experience working with Growth Escalators team. They truly understand digital marketing.",
    name: "Diwakar Kumar",
    company: "Client",
    rating: 5
  }
];
```

---

## SECTION 5: PAGE-BY-PAGE SPECIFICATIONS

### 5.1 HOMEPAGE (src/app/page.tsx)

This is the most important page. It must convert cold traffic into strategy call bookings.

**Section 1 — Hero (Dark background)**
- Layout: Full viewport height (min-h-screen), centered content
- Background: Dark (#0A0A0A) with subtle animated gradient mesh effect (use CSS radial gradients with the accent green at 5% opacity, slowly shifting position via CSS animation). Add a subtle noise texture overlay.
- Eyebrow text: Small, uppercase, tracking-wider, accent green color — "PERFORMANCE MARKETING FOR D2C BRANDS"
- H1 Headline: "We Scale D2C Brands to Profitable Growth Through Meta Ads & CRO" — Syne, 64px, white, bold
- Subheadline: "Stop burning ad budget on agencies that report on impressions. We optimize for revenue, ROAS, and actual business growth." — DM Sans, 18px, muted white
- CTA Row: Two buttons side by side
  - Primary: "Book Your Free Strategy Call" → /book-strategy-call/
  - Secondary (outline): "See Our Results" → /results/
- Below CTAs: Small text with social proof — "Trusted by 50+ D2C brands across India" with a row of 4-5 tiny client logos
- Scroll indicator: Animated chevron at bottom of viewport

**Section 2 — Client Logo Carousel (Dark background, continuation of hero)**
- ClientLogoCarousel component
- 8 logos: Odra Organics, Paraizo, Swarnsootra, Atatika Studios, Exzept, Yellow Diaries, Flight Ticket Fare, Elixzor
- Auto-scrolling infinite loop
- For now, render brand names as styled text placeholders in rounded pill shapes (since we don't have logo files). These can be replaced with actual logo images later.

**Section 3 — Problem/Agitation (Light background)**
- FadeInOnScroll wrapper
- Eyebrow: "SOUND FAMILIAR?"
- H2: "This Is Why Your D2C Brand Isn't Scaling"
- 4 pain point cards in 2x2 grid on desktop, stacked on mobile:
  1. Icon: TrendingDown | "Stuck ROAS" | "Your ROAS has been hovering between 1.5x-2.5x for months. You've tried new audiences, new budgets — nothing moves the needle."
  2. Icon: DollarSign | "Rising CAC" | "Customer acquisition costs keep climbing. Every month you spend more to get the same results — or worse."
  3. Icon: ImageOff | "Creative Fatigue" | "The same ad formats that worked 3 months ago have completely stopped performing. Your creative pipeline is dry."
  4. Icon: FileText | "Vanity Metrics Reports" | "Your agency sends you reports full of impressions, reach, and clicks. But your bank account tells a different story."
- Each card: white background, subtle border, rounded-2xl, icon in accent green, title in dark, description in muted text

**Section 4 — Solution / How We're Different (Light background)**
- FadeInOnScroll
- Eyebrow: "OUR APPROACH"
- H2: "We Don't Just Run Ads. We Build Growth Systems."
- Subtext: "Most agencies manage campaigns. We engineer profitable growth systems that coordinate ads, creatives, CRO, and retention into one machine."
- ProcessStepper with 5 steps:
  1. "Audit" — "We tear apart your ad account, funnel, and creatives to find what's actually broken."
  2. "Strategy" — "We build a data-backed growth plan with clear ROAS, CAC, and revenue targets."
  3. "Creative" — "Our in-house team produces scroll-stopping creatives designed for conversion, not likes."
  4. "Execute" — "We launch, test, and optimize daily. We kill losers fast and scale winners aggressively."
  5. "Scale" — "Once we find profitable combinations, we scale spend while protecting your margins."

**Section 5 — Core Services (Light background)**
- Eyebrow: "WHAT WE DO"
- H2: "Services Built for D2C Growth"
- Grid: 3 columns on desktop, 1 on mobile. Show all 7 services using ServiceCard component.
- Primary services (Meta Ads, CRO, Ecommerce Marketing) can be slightly larger or have an accent border to stand out.
- Each card links to its respective service page.
- Below the grid: "Explore All Services →" link to /services/

**Section 6 — Results / Metrics (Dark background)**
- Eyebrow: "RESULTS THAT MATTER"
- H2: "We Let the Numbers Do the Talking"
- Stat row using AnimatedCounter (4 metrics in a row):
  - "50+" label: "Brands Scaled"
  - "₹2Cr+" label: "Ad Spend Managed"
  - "4.2x" label: "Average ROAS"
  - "100+" label: "Campaigns Launched"
  NOTE: These are placeholder numbers. Use them for now — Jatin will update with real numbers.
- Below stats: 2-3 CaseStudyCard components showing featured case studies (Paraizo, Swarnsootra, Odra Organics)
- "View All Case Studies →" link to /results/

**Section 7 — Industries (Light background)**
- Eyebrow: "INDUSTRIES WE SCALE"
- H2: "Deep Expertise in the Verticals That Matter"
- Grid of IndustryCards: D2C Ecommerce, Skincare & Beauty, Fashion & Apparel, Health & Wellness, Jewellery & Accessories, Ayurveda & Organic, Real Estate
- Each card links to its industry page
- 3-column on desktop, 2 on tablet, 1 on mobile

**Section 8 — About Preview (Light background)**
- Split layout: Text on left, image placeholder on right
- Eyebrow: "WHO WE ARE"
- H2: "Built by Marketers, Not Salespeople"
- Body text: "Growth Escalators was founded with one belief: your ad budget should be treated like our own money. Every rupee is tracked, tested, and optimized for revenue. We're a small, focused team in Jaipur that works with D2C brands across India — and we only take on clients we know we can genuinely help."
- "Meet the Team →" link to /about/
- Right side: Placeholder for team photo or an abstract graphic

**Section 9 — Testimonials (Light background)**
- Eyebrow: "CLIENT FEEDBACK"
- H2: "What Brands Say About Working With Us"
- Horizontal scrollable row of TestimonialCards (4 testimonials)
- Each card shows quote, name, company, star rating
- Google review badge/link: "Rated 5.0 on Google Reviews"

**Section 10 — FAQ (Light background)**
- Eyebrow: "QUESTIONS"
- H2: "Frequently Asked Questions"
- FAQAccordion with these items:
  1. Q: "What's your minimum ad spend requirement?" A: "We typically work with brands spending ₹1L+ per month on paid ads. This gives us enough data to test, learn, and optimize effectively."
  2. Q: "How long before I see results?" A: "Most brands see meaningful improvements within 30 days. Significant scaling typically happens by month 2-3 as we build data and optimize."
  3. Q: "Do you work with Shopify and WooCommerce brands?" A: "Yes, we work with both. We can also work with custom ecommerce platforms as long as proper tracking is in place."
  4. Q: "What if I've been burned by agencies before?" A: "We hear this often. That's why we start with a free strategy call — no contracts, no pressure. We'll audit your current setup and tell you honestly whether we can help."
  5. Q: "Do you handle creatives or do I need to provide them?" A: "We handle everything in-house. Our team includes a creative strategist, graphic designer, and video editor. You don't need to worry about creative production."
  6. Q: "What metrics do you optimize for?" A: "Revenue, ROAS, CAC, and profitability. Not impressions, not reach, not clicks. We focus on the metrics that actually show up in your bank account."
  7. Q: "How do you report on performance?" A: "Weekly performance updates with key metrics. Monthly deep-dive reviews with strategy adjustments. You always know exactly how your campaigns are performing."

**Section 11 — Final CTA (Dark background)**
- CTASection component

**Section 12 — Footer**
- Footer component

---

### 5.2 SERVICE PAGES (Template Pattern)

Create a reusable `ServicePageTemplate` component in `src/components/templates/ServicePageTemplate.tsx` that accepts a `Service` object from the content file and renders:

1. **Hero (Dark):** H1 from `heroHeadline`, subheadline from `heroSubheadline`, CTA button
2. **Problem (Light):** "Challenges" section with `problemPoints` as cards
3. **Approach (Light):** ProcessStepper from `approach` data
4. **Deliverables (Light):** Clean list/grid from `deliverables`
5. **Related Case Studies (Dark):** CaseStudyCards from `relatedCaseStudies`
6. **FAQ (Light):** FAQAccordion from `faqs`
7. **CTA (Dark):** CTASection

Each service page (e.g., `src/app/services/meta-ads/page.tsx`) simply imports the template and passes the correct service data:
```typescript
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { services } from "@/content/services";

const service = services.find(s => s.slug === "meta-ads")!;

export const metadata = { title: service.metaTitle, description: service.metaDescription };

export default function MetaAdsPage() {
  return <ServicePageTemplate service={service} />;
}
```

The `/services/` hub page lists all services with brief descriptions and links to individual pages.

---

### 5.3 INDUSTRY PAGES (Template Pattern)

Same approach. Create `IndustryPageTemplate` in `src/components/templates/IndustryPageTemplate.tsx` that accepts an `Industry` object and renders:

1. **Hero (Dark):** H1 from `heroHeadline`, subheadline
2. **Challenges (Light):** Industry-specific challenge cards
3. **Our Approach (Light):** Prose from `approach`
4. **Relevant Services (Light):** ServiceCards for `relevantServices`
5. **Related Case Studies (Dark):** CaseStudyCards from `relatedCaseStudies`
6. **CTA (Dark):** CTASection

Each industry page imports the template and passes data. The `/industries/` hub page lists all industries.

---

### 5.4 CASE STUDY PAGES (Template Pattern)

Create `CaseStudyPageTemplate` in `src/components/templates/CaseStudyPageTemplate.tsx` that accepts a `CaseStudy` object and renders:

1. **Hero (Dark):** Brand name, industry tag, hero metric (large, JetBrains Mono)
2. **Summary (Light):** One paragraph overview
3. **The Challenge (Light):** What the brand was struggling with
4. **Our Strategy (Light):** What GE did
5. **The Results (Dark):** Metrics grid using AnimatedCounter — show all `results` items. Since metrics are "---" (placeholder), render them as "Coming Soon" or styled dashes until real data is filled in.
6. **Testimonial (Light):** If available
7. **CTA (Dark):** "Want results like this?" + CTASection

The `/results/` hub page shows all case studies as a grid with industry filter tags.

---

### 5.5 ABOUT PAGE (src/app/about/page.tsx)

1. **Hero (Dark):** H1 "Built by Marketers Who Spend Real Ad Budgets" / Subheadline about GE's philosophy
2. **The Story (Light):** 2-3 paragraphs about why Jatin started GE. Tone: honest, founder-to-founder. Write compelling copy about how GE was born from seeing brands waste money on agencies that optimize for vanity metrics instead of revenue. Emphasize the "your budget is our budget" philosophy.
3. **The Team (Light):** Grid of team members:
   - Jatin Agrawal — Founder & Growth Strategist
   - Sanskriti Gupta — Creative Manager
   - Vishal — Meta Ads Manager
   - Nimisha Daiya — Graphic Designer
   - Keshav Vaishnav — Video Editor
   Each card: circular placeholder avatar (use initials in accent-colored circle), name, title, one-line description of their role.
4. **Values (Light):** 4 values as cards:
   - "Every Rupee is Accountable" — We treat your ad budget like our own money
   - "Data Over Opinions" — Every decision backed by metrics, not gut feelings
   - "Partners, Not Vendors" — We embed into your team, not just send reports
   - "Creatives That Convert" — Beautiful is good. Beautiful AND profitable is better.
5. **CTA (Dark):** CTASection

---

### 5.6 BOOK STRATEGY CALL PAGE (src/app/book-strategy-call/page.tsx)

1. **Hero (Dark):** H1 "Let's Talk Growth" / Subheadline: "Book a free 30-minute strategy call. We'll audit your current setup and tell you exactly where the growth opportunities are."
2. **What to Expect (Light):** Left side: list of what the call covers. Right side: Cal.com embed.
   - "In this call, we'll cover:"
   - "→ Your current ad performance and what's working (and what isn't)"
   - "→ Quick audit of your funnel and creative strategy"
   - "→ The biggest growth opportunities we can see"
   - "→ Whether we're a good fit to work together"
   - "This is a real strategy session — not a sales pitch."
3. Cal.com embed: Use Cal.com's embed integration. URL: https://cal.com/growthescalators/book/d2c-strategy

---

### 5.7 PRIVACY POLICY & TERMS (Standard Legal Pages)

Simple light-background pages with standard privacy policy and terms of service content. Use placeholder legal text — Jatin will update with actual legal content. Keep styling minimal — just clean typography.

---

## SECTION 6: SEO SPECIFICATIONS

### Metadata for Every Page
- Generate unique `title` and `description` for each page using Next.js Metadata API
- Format: `{Page Title} | Growth Escalators`
- Homepage title: "Growth Escalators | Performance Marketing Agency for D2C Brands"
- All pages should export metadata using the data from content files

### Open Graph / Social Sharing
- og:title, og:description, og:image for every page
- Default og:image: Create a simple branded OG image (1200x630) with the GE logo and tagline — or use a solid dark background with text
- og:type: "website"
- twitter:card: "summary_large_image"

### JSON-LD Structured Data (in root layout or per-page)
```json
// Homepage — Organization schema
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Growth Escalators",
  "url": "https://growthescalators.com",
  "logo": "https://growthescalators.com/logo.png",
  "description": "Performance marketing agency for D2C ecommerce brands",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "264/103-104, Sector 26, Sanganer, Pratap Nagar",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "postalCode": "302033",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-77338-88883",
    "contactType": "sales",
    "email": "Info@growthescalators.com"
  },
  "sameAs": [
    "https://www.instagram.com/growthescalators/",
    "https://www.linkedin.com/company/growth-escalators/",
    "https://www.facebook.com/growthescalators/"
  ]
}

// Service pages — Service schema
// Case study pages — Article schema
// Add LocalBusiness schema for Jaipur presence
```

### Technical SEO
- Generate `sitemap.xml` using Next.js sitemap generation (app/sitemap.ts)
- Generate `robots.txt` (app/robots.ts) — allow all, reference sitemap
- Canonical URLs on every page
- Proper heading hierarchy (one H1 per page, H2s for sections, H3s for subsections)
- All images: descriptive alt text, next/image with width/height, lazy loading
- Internal linking: Every service page links to related case studies and industries. Every industry page links to related services. Every case study links back to the service and industry pages.

---

## SECTION 7: PERFORMANCE REQUIREMENTS

- **Lighthouse target:** 90+ on Performance, Accessibility, Best Practices, SEO
- **Core Web Vitals:** LCP < 2.5s, FID/INP < 200ms, CLS < 0.1
- **Images:** Use next/image exclusively. WebP format. Proper sizing.
- **Fonts:** Use next/font/google with display: "swap" to avoid layout shift
- **Animations:** Use Framer Motion's `useReducedMotion` hook to respect user preferences. Keep animations GPU-accelerated (transform, opacity only).
- **Bundle size:** Keep client-side JS minimal. Use server components where possible (Next.js App Router default). Only mark components as "use client" when they need interactivity (animations, accordions, etc.).

---

## SECTION 8: BUILD ORDER

Execute in this exact order:

### Phase 1: Foundation
1. Initialize Next.js project with TypeScript + Tailwind
2. Configure tailwind.config.ts with custom colors, fonts, spacing
3. Set up globals.css with CSS variables, base styles, noise texture
4. Set up fonts in root layout (Syne, DM Sans, JetBrains Mono via next/font/google)
5. Create all content data files (siteConfig, services, industries, caseStudies, testimonials)
6. Create utility components (Button, SectionWrapper, FadeInOnScroll)

### Phase 2: Layout
7. Build Header with navigation, mobile menu, dropdowns
8. Build Footer
9. Wire up root layout with Header + Footer

### Phase 3: Homepage
10. Build all section components for the homepage
11. Build shared components (AnimatedCounter, ProcessStepper, FAQAccordion, ClientLogoCarousel, CTASection, ServiceCard, IndustryCard, CaseStudyCard, TestimonialCard)
12. Assemble the homepage with all 12 sections

### Phase 4: Template Pages
13. Build ServicePageTemplate and all 7 service pages
14. Build IndustryPageTemplate and all 7 industry pages
15. Build CaseStudyPageTemplate and all 4 case study pages
16. Build hub/pillar pages (/services/, /industries/, /results/)

### Phase 5: Standalone Pages
17. Build About page
18. Build Book Strategy Call page with Cal.com embed
19. Build Privacy Policy and Terms pages

### Phase 6: SEO & Polish
20. Add metadata to all pages
21. Add JSON-LD structured data
22. Create sitemap.ts and robots.ts
23. Add internal linking throughout
24. Test responsive design across breakpoints
25. Performance audit and optimization

### Phase 7: Deploy
26. Git add, commit, push to GitHub
27. Verify Vercel auto-deployment

---

## SECTION 9: CRITICAL REMINDERS

1. **DO NOT use placeholder images from external URLs** (no unsplash, no placeholder.com, no lorem picsum). Use colored gradient blocks, CSS shapes, or SVG illustrations as placeholders instead.

2. **Every page must have unique SEO metadata** — no duplicate titles or descriptions.

3. **All components that use hooks, event handlers, or browser APIs must have "use client" directive.** Server components are the default in App Router.

4. **The content data files are the source of truth.** All page content comes from these files. To update copy later, Jatin only needs to edit these TypeScript files.

5. **Mobile-first responsive design.** Test every component at 375px width.

6. **The accent green (#00E87B) should be used sparingly** — only for CTAs, key metrics, hover states, and small highlights. Not for large background areas.

7. **Dark sections should have the subtle noise texture.** Light sections should be clean.

8. **Animations should feel premium, not gimmicky.** Smooth, purposeful motion. No bouncing, no spinning, no excessive delays.

9. **Cal.com embed:** Use their official embed method. Script tag: `<script type="text/javascript" src="https://app.cal.com/embed/embed.js"></script>` — then use `Cal("inline", { elementOrSelector: "#cal-embed", calLink: "growthescalators/book/d2c-strategy" })`. Wrap this in a client component with useEffect.

10. **The header should be transparent on the hero section and become solid (with backdrop blur) on scroll.** Use an intersection observer or scroll event.

11. **Git: Push everything in one commit at the end.** Message: "feat: complete Growth Escalators website v1"

---

## SECTION 10: COPY TONE GUIDE

All copy on the site should follow these principles:

- **Speak like a founder talking to another founder.** Not like an agency pitch deck.
- **Use "we" and "you" — never "our esteemed clients" or "your esteemed brand."**
- **Lead with outcomes, not processes.** "We scale revenue" not "We utilize comprehensive strategies."
- **Use specific numbers over vague adjectives.** "4.2x ROAS" beats "excellent returns."
- **Short sentences. Punchy paragraphs.** No sentence should be longer than 20 words if possible.
- **Acknowledge pain points directly.** "Your ROAS is stuck." Not "Some brands experience challenges with their returns."
- **No buzzwords:** synergy, leverage, cutting-edge, holistic, best-in-class, innovative, revolutionary. None of these.
- **Allowed power words:** profitable, scale, revenue, data-driven, accountable, systematic, in-house, focused.

---

END OF SPEC. Build this website. Make it exceptional.
