export interface CaseStudy {
  slug: string;
  brandName: string;
  industry: string;
  heroMetric: string;
  heroMetricLabel: string;
  heroMetricNumeric: number;
  heroMetricSuffix: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  challenge: string;
  strategy: string[];
  results: { label: string; value: string; numeric: number; suffix: string; prefix?: string }[];
  testimonial?: { quote: string; name: string; role: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "odra-organics",
    brandName: "Odra Organics",
    industry: "Skincare & Ayurveda",
    heroMetric: "3.8x",
    heroMetricLabel: "Return on Ad Spend",
    heroMetricNumeric: 38,
    heroMetricSuffix: "x",
    description: "How we scaled Odra Organics from ₹2L/month to ₹12L/month in revenue through strategic Meta Ads and CRO.",
    metaTitle: "Odra Organics Case Study | 3.8x ROAS | Growth Escalators",
    metaDescription: "How Growth Escalators scaled Odra Organics from ₹2L to ₹12L monthly revenue with Meta Ads and CRO.",
    summary: "Odra Organics is a Jaipur-based Ayurvedic skincare brand with a strong product line but no digital marketing foundation. They came to us with ₹2L/month in revenue and a goal to scale to ₹10L+ without sacrificing profitability.",
    challenge: "Odra Organics had tried running Meta Ads independently with poor results — a ROAS of 1.2x that barely covered ad costs. Their product pages had low conversion rates, their ad creative was generic, and they had no email automation to capture customer LTV. The brand had real potential but needed a complete marketing system overhaul.",
    strategy: [
      "Conducted a full CRO audit of the Shopify store and implemented 12 key improvements including better product descriptions, trust badges, and a streamlined checkout flow",
      "Rebuilt Meta Ads account from scratch with a clear funnel structure — cold traffic education campaigns, mid-funnel social proof campaigns, and bottom-funnel conversion campaigns",
      "Developed a content-first creative strategy focusing on ingredient education and customer transformation stories",
      "Set up Klaviyo with a 6-email welcome sequence, 3-email abandon cart sequence, and a post-purchase upsell sequence",
      "Implemented UTM tracking and Meta Conversions API for accurate attribution despite iOS privacy changes",
    ],
    results: [
      { label: "ROAS Achieved", value: "3.8x", numeric: 38, suffix: "x" },
      { label: "Monthly Revenue", value: "₹12L+", numeric: 12, suffix: "L+", prefix: "₹" },
      { label: "Revenue Growth", value: "6x", numeric: 6, suffix: "x" },
      { label: "Conversion Rate Improvement", value: "2.4x", numeric: 24, suffix: "x" },
    ],
    testimonial: {
      quote: "Growth Escalators completely transformed our digital marketing. We went from barely breaking even on ads to having a system that consistently delivers 3.8x ROAS.",
      name: "Founder",
      role: "Odra Organics",
    },
  },
  {
    slug: "paraizo",
    brandName: "Paraizo",
    industry: "Fashion & Apparel",
    heroMetric: "4.5x",
    heroMetricLabel: "Return on Ad Spend",
    heroMetricNumeric: 45,
    heroMetricSuffix: "x",
    description: "Scaling Paraizo's fashion brand from zero digital presence to ₹8L/month through Meta and Google Shopping.",
    metaTitle: "Paraizo Case Study | 4.5x ROAS | Growth Escalators",
    metaDescription: "How Growth Escalators scaled Paraizo fashion brand to ₹8L/month revenue with Meta Ads and Google Shopping.",
    summary: "Paraizo is a contemporary fashion brand from Jaipur specializing in ethnic-modern fusion wear. They launched their D2C channel with us, going from zero online sales to a profitable ecommerce business.",
    challenge: "Paraizo was exclusively selling through offline channels and wanted to build a D2C revenue stream. The challenge was building brand awareness from scratch in a competitive fashion market while maintaining profitability from the first month of advertising.",
    strategy: [
      "Set up and optimized a Shopify store with conversion-focused product pages, size guides, and a seamless checkout experience",
      "Launched Google Shopping with fully optimized product feed — titles, descriptions, and custom labels for category segmentation",
      "Built Meta catalog campaigns with dynamic product ads targeting lookalike audiences from offline customer data",
      "Created a visual brand story through carousel and video ads showcasing styling inspiration and outfit combinations",
      "Implemented Google Search campaigns targeting high-intent keywords in the ethnic fusion wear category",
    ],
    results: [
      { label: "ROAS Achieved", value: "4.5x", numeric: 45, suffix: "x" },
      { label: "Monthly Revenue", value: "₹8L+", numeric: 8, suffix: "L+", prefix: "₹" },
      { label: "Time to Profitability", value: "45 Days", numeric: 45, suffix: " Days" },
      { label: "Online Orders/Month", value: "200+", numeric: 200, suffix: "+" },
    ],
  },
  {
    slug: "swarnsootra",
    brandName: "Swarnsootra",
    industry: "Jewellery & Accessories",
    heroMetric: "5.1x",
    heroMetricLabel: "Return on Ad Spend",
    heroMetricNumeric: 51,
    heroMetricSuffix: "x",
    description: "How Swarnsootra achieved 5.1x ROAS on Meta Ads while scaling a premium jewellery brand online.",
    metaTitle: "Swarnsootra Case Study | 5.1x ROAS | Growth Escalators",
    metaDescription: "How Growth Escalators achieved 5.1x ROAS for Swarnsootra jewellery brand with Meta Ads and creative strategy.",
    summary: "Swarnsootra is a Jaipur-based fine jewellery brand known for traditional craftsmanship with contemporary design. They approached us to build a profitable D2C digital channel for their premium gold and silver jewellery.",
    challenge: "Jewellery advertising on Meta is notoriously difficult — high product prices mean long consideration cycles, and creative quality is critical. Previous agencies had delivered 1.5-2x ROAS with generic product photography campaigns that didn't capture the brand's craftsmanship story.",
    strategy: [
      "Developed a high-quality visual creative strategy with focus on craftsmanship, heritage, and occasion-based storytelling",
      "Built separate campaigns for gifting occasions (Diwali, Anniversary, Valentine's Day) and evergreen self-purchase",
      "Implemented strong retargeting sequences with scarcity messaging and customer testimonials",
      "Set up Google Search campaigns targeting branded and category keywords",
      "Created a post-purchase LTV program with email sequences encouraging repeat purchase and referrals",
    ],
    results: [
      { label: "ROAS Achieved", value: "5.1x", numeric: 51, suffix: "x" },
      { label: "Revenue in 6 Months", value: "₹25L+", numeric: 25, suffix: "L+", prefix: "₹" },
      { label: "AOV Achieved", value: "₹4,500", numeric: 4500, suffix: "", prefix: "₹" },
      { label: "Repeat Purchase Rate", value: "28%", numeric: 28, suffix: "%" },
    ],
  },
  {
    slug: "atatika-studios",
    brandName: "Atatika Studios",
    industry: "Fashion & Lifestyle",
    heroMetric: "---",
    heroMetricLabel: "Coming Soon",
    heroMetricNumeric: 0,
    heroMetricSuffix: "",
    description: "Atatika Studios — a lifestyle fashion brand we recently onboarded. Full case study coming soon.",
    metaTitle: "Atatika Studios Case Study | Growth Escalators",
    metaDescription: "Atatika Studios growth story with Growth Escalators — coming soon.",
    summary: "Atatika Studios is a premium lifestyle and fashion brand we recently onboarded. We are in the early stages of their digital marketing transformation. Full results and case study coming soon.",
    challenge: "Atatika Studios needed a complete digital marketing foundation — from website optimization to paid media setup. They had strong products but zero digital presence.",
    strategy: [
      "Complete Shopify store design and development with conversion-focused architecture",
      "Setting up Meta and Google Ads from scratch with a full funnel strategy",
      "Developing brand visual identity for ad creative across all platforms",
      "Implementing email marketing automation with Klaviyo",
    ],
    results: [
      { label: "Status", value: "Active", numeric: 0, suffix: "" },
      { label: "Channels Live", value: "3", numeric: 3, suffix: "" },
      { label: "Full Results", value: "Coming Soon", numeric: 0, suffix: "" },
    ],
  },
];
