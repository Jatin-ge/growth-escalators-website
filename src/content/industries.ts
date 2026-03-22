export interface Industry {
  slug: string;
  title: string;
  description: string;
  heroHeadline: string;
  subheadline: string;
  metaTitle: string;
  metaDescription: string;
  challenges: { title: string; description: string }[];
  ourApproach: string;
  relevantServiceSlugs: string[];
  relatedCaseStudySlugs: string[];
}

export const industries: Industry[] = [
  {
    slug: "d2c-ecommerce",
    title: "D2C Ecommerce",
    description: "Full-funnel performance marketing for direct-to-consumer ecommerce brands scaling profitably.",
    heroHeadline: "Scale Your D2C Brand to 8-Figures With Profitable Marketing",
    subheadline: "We specialize in D2C ecommerce growth — from first ad to repeat customer, we build systems that scale revenue predictably.",
    metaTitle: "D2C Ecommerce Marketing Agency | Growth Escalators",
    metaDescription: "Performance marketing for D2C ecommerce brands. Meta Ads, Google Ads, and CRO specialists helping brands scale to 8-figures.",
    challenges: [
      { title: "Rising CAC", description: "Customer acquisition costs increasing every year while margins stay the same." },
      { title: "Platform Dependency", description: "Over-reliance on one platform (usually Meta) creating fragile revenue streams." },
      { title: "Attribution Gaps", description: "Multi-touch attribution getting harder with iOS privacy changes and cookie restrictions." },
      { title: "LTV Optimization", description: "Acquiring customers but not maximizing their lifetime value through proper retention marketing." },
    ],
    ourApproach: "We take a full-funnel approach to D2C ecommerce growth. Starting with your unit economics — CAC, LTV, and contribution margin — we build a marketing system where every channel is profitable independently. We run Meta and Google together with a unified strategy, implement proper tracking and attribution, and layer in email/SMS automation to maximize LTV. The result is a predictable, scalable growth engine.",
    relevantServiceSlugs: ["meta-ads", "google-ads", "cro", "funnels-automation"],
    relatedCaseStudySlugs: ["odra-organics", "paraizo"],
  },
  {
    slug: "skincare-beauty",
    title: "Skincare & Beauty",
    description: "Specialized performance marketing for skincare and beauty brands building loyal customer bases.",
    heroHeadline: "Grow Your Skincare Brand With Performance Marketing That Converts",
    subheadline: "The skincare market is crowded. We help your brand cut through the noise with targeted campaigns that reach the right customers at the right moment.",
    metaTitle: "Skincare & Beauty Brand Marketing | Growth Escalators",
    metaDescription: "Performance marketing for skincare and beauty D2C brands. Meta Ads and Google Ads specialists helping beauty brands scale profitably.",
    challenges: [
      { title: "High Competition", description: "Competing against established brands with massive budgets on the same ad placements." },
      { title: "Ingredient Education", description: "Customers need to understand why your formulation is better before they buy." },
      { title: "Repeat Purchase Dependency", description: "Skincare success depends on subscription and repeat purchase rates, not just first purchases." },
      { title: "UGC & Trust", description: "Customers rely heavily on real results and reviews before trying new skincare brands." },
    ],
    ourApproach: "For skincare brands, we focus heavily on before/after content, ingredient education, and social proof. We build Meta campaigns that first educate (awareness), then build trust (consideration), then convert. We layer in strong retargeting with testimonial-led creatives and a robust email sequence focused on repeat purchase and subscription conversion.",
    relevantServiceSlugs: ["meta-ads", "creative-strategy", "funnels-automation", "cro"],
    relatedCaseStudySlugs: ["odra-organics"],
  },
  {
    slug: "fashion-apparel",
    title: "Fashion & Apparel",
    description: "Performance-driven marketing for fashion and apparel brands scaling D2C revenue.",
    heroHeadline: "Drive Consistent Fashion Sales With Data-Driven Performance Marketing",
    subheadline: "Fashion is a visual, emotional purchase. We build campaigns that showcase your brand story while driving profitable sales at scale.",
    metaTitle: "Fashion & Apparel D2C Marketing | Growth Escalators",
    metaDescription: "Performance marketing for fashion and apparel D2C brands. Meta Shopping, Google Shopping, and creative-led campaigns for fashion brands.",
    challenges: [
      { title: "High Return Rates", description: "Fashion has some of the highest return rates in ecommerce, impacting actual revenue numbers." },
      { title: "Seasonal Demand", description: "Fashion brands face extreme seasonality, requiring careful budget planning and campaign timing." },
      { title: "Size & Variant Complexity", description: "Managing campaigns across multiple sizes, colors, and variants creates complexity." },
      { title: "Brand vs Performance", description: "Balancing brand-building (long-term) with immediate revenue driving campaigns." },
    ],
    ourApproach: "We specialize in fashion D2C marketing with a strong emphasis on visual storytelling and Google Shopping feed optimization. We manage catalog campaigns on Meta, optimize product titles and descriptions for Shopping, and build retargeting sequences around browsed categories. Seasonal planning is built into our strategy from day one.",
    relevantServiceSlugs: ["meta-ads", "google-ads", "creative-strategy", "ecommerce-marketing"],
    relatedCaseStudySlugs: ["paraizo", "atatika-studios"],
  },
  {
    slug: "health-wellness",
    title: "Health & Wellness",
    description: "Compliant, effective performance marketing for health and wellness brands.",
    heroHeadline: "Scale Your Health & Wellness Brand Compliantly and Profitably",
    subheadline: "Health products require a delicate balance of educational marketing and compliant ad copy. We know exactly how to navigate the restrictions.",
    metaTitle: "Health & Wellness Brand Marketing | Growth Escalators",
    metaDescription: "Performance marketing for health and wellness D2C brands. Compliant Meta Ads and Google Ads for supplements, fitness, and wellness brands.",
    challenges: [
      { title: "Ad Policy Restrictions", description: "Health claims in ads regularly get rejected, requiring careful copy and creative strategies." },
      { title: "Trust & Credibility", description: "Customers are skeptical of health product claims and need significant trust-building before buying." },
      { title: "Regulated Claims", description: "What you can say about health products is heavily regulated by FSSAI and ASCI." },
      { title: "Long Consideration Phase", description: "Health purchases often take weeks of research, requiring long attribution windows and strong nurture sequences." },
    ],
    ourApproach: "Health brands require an education-first approach to advertising. We build top-of-funnel campaigns around educational content — how the product works, the science behind it, and real customer results. We're experienced with Meta and Google health ad policies and know how to create compelling, compliant ad copy. Long consideration cycles mean we invest heavily in retargeting and email nurture.",
    relevantServiceSlugs: ["meta-ads", "funnels-automation", "cro", "creative-strategy"],
    relatedCaseStudySlugs: ["odra-organics", "swarnsootra"],
  },
  {
    slug: "jewellery-accessories",
    title: "Jewellery & Accessories",
    description: "Luxury-focused performance marketing for jewellery and accessories brands.",
    heroHeadline: "Grow Your Jewellery Brand With Performance Marketing That Reflects Your Value",
    subheadline: "Jewellery is an emotional, high-consideration purchase. We build campaigns that trigger desire and trust to drive consistent sales.",
    metaTitle: "Jewellery Brand Marketing | Growth Escalators",
    metaDescription: "Performance marketing for jewellery and accessories D2C brands. Meta Ads and Google Shopping for fine jewellery and fashion accessories.",
    challenges: [
      { title: "High Purchase Hesitation", description: "Customers spend weeks researching before buying jewellery, requiring strong nurture sequences." },
      { title: "Visual Presentation", description: "Jewellery photography and video quality directly impacts conversion rates." },
      { title: "Trust & Authenticity", description: "Buyers need strong trust signals — certification, reviews, return policy — before purchasing." },
      { title: "Gifting vs Self-Purchase", description: "Jewellery buyers split between gifting occasions and self-purchase require different campaign approaches." },
    ],
    ourApproach: "Jewellery marketing requires exceptional creative and strong social proof. We build visually rich campaigns showcasing craftsmanship and quality, backed by customer testimonials and certification badges. We create gifting campaigns around key occasions (Diwali, Valentine's Day, Anniversaries) and evergreen self-purchase campaigns. Strong retargeting with scarcity and social proof closes high-consideration buyers.",
    relevantServiceSlugs: ["meta-ads", "creative-strategy", "cro", "google-ads"],
    relatedCaseStudySlugs: ["swarnsootra"],
  },
  {
    slug: "ayurveda-organic",
    title: "Ayurveda & Organic",
    description: "Performance marketing for Ayurveda, herbal, and organic product brands.",
    heroHeadline: "Bring Ancient Wisdom to Modern Customers With Digital Marketing",
    subheadline: "Ayurveda and organic brands have powerful stories to tell. We help you reach customers who are actively seeking natural alternatives.",
    metaTitle: "Ayurveda & Organic Brand Marketing | Growth Escalators",
    metaDescription: "Performance marketing for Ayurveda, herbal, and organic D2C brands. Compliant campaigns that connect authentic brands with conscious consumers.",
    challenges: [
      { title: "Educating the Market", description: "Many customers don't understand Ayurvedic ingredients, requiring extensive education campaigns." },
      { title: "Premium Price Justification", description: "Organic and natural products command premium prices that need strong value articulation." },
      { title: "Trust & Authenticity", description: "Customers are wary of greenwashing and want proof of authenticity and sourcing standards." },
      { title: "Long Purchase Cycle", description: "Natural product buyers research extensively before switching from their existing products." },
    ],
    ourApproach: "Authentic storytelling is the foundation of Ayurveda and organic brand marketing. We focus on ingredient sourcing stories, founder narratives, and the science behind traditional formulations. Educational content builds top-of-funnel awareness, while strong before/after results and certifications close the sale. We target conscious consumer segments on Meta with interest and behavioral targeting.",
    relevantServiceSlugs: ["meta-ads", "creative-strategy", "funnels-automation", "cro"],
    relatedCaseStudySlugs: ["odra-organics"],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    description: "Lead generation and digital marketing for real estate developers and agencies.",
    heroHeadline: "Generate Quality Real Estate Leads With Performance Marketing",
    subheadline: "Real estate is a high-value, long-cycle category. We build lead generation campaigns that attract serious buyers and maximize lead quality.",
    metaTitle: "Real Estate Digital Marketing | Growth Escalators",
    metaDescription: "Performance marketing and lead generation for real estate developers and agencies. Meta Ads and Google Ads specialists for property brands.",
    challenges: [
      { title: "Lead Quality", description: "Getting form fills is easy. Getting serious buyers ready to purchase is the real challenge." },
      { title: "High CPL", description: "Real estate leads are expensive — poor targeting quickly burns through budget with low ROI." },
      { title: "Long Sales Cycles", description: "Real estate purchases take months of nurturing, requiring sophisticated follow-up systems." },
      { title: "Targeting Restrictions", description: "Meta has special ad category restrictions for real estate that require specialized knowledge to navigate." },
    ],
    ourApproach: "Real estate lead generation requires precision targeting and a strong lead nurture system. We build Meta campaigns within Special Ad Category compliance, targeting by income, location, and behavioral signals. Google Search captures high-intent buyers actively searching for properties. Every lead enters an automated nurture sequence with property details, testimonials, and walk-through videos to warm them before sales follow-up.",
    relevantServiceSlugs: ["meta-ads", "google-ads", "funnels-automation", "website-development"],
    relatedCaseStudySlugs: [],
  },
];
