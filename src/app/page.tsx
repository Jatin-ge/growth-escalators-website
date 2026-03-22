import { HeroSection } from "@/components/sections/HeroSection";
import { ClientLogoCarousel } from "@/components/ui/ClientLogoCarousel";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ProcessStepper } from "@/components/ui/ProcessStepper";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { IndustryCard } from "@/components/ui/IndustryCard";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/caseStudies";
import { testimonials } from "@/content/testimonials";
import { TrendingDown, DollarSign, ImageOff, FileText, ArrowRight } from "lucide-react";

const painPoints = [
  {
    icon: TrendingDown,
    title: "Your ROAS keeps dropping",
    description: "You're spending more on ads but seeing diminishing returns. CPMs rise, ROAS falls, and profitability disappears.",
  },
  {
    icon: DollarSign,
    title: "Ad spend feels like gambling",
    description: "No clear data on what's working. You're guessing rather than making strategic, data-backed decisions.",
  },
  {
    icon: ImageOff,
    title: "Creative fatigue is killing results",
    description: "The same ads running for months cause audience fatigue. You need a systematic creative testing process.",
  },
  {
    icon: FileText,
    title: "No clear growth strategy",
    description: "Tactics without strategy. You're trying things but don't have a clear roadmap to sustainable scale.",
  },
];

const process = [
  {
    step: "01",
    title: "Free Strategy Call",
    description: "We audit your current marketing, understand your goals, and identify the biggest growth opportunities.",
  },
  {
    step: "02",
    title: "Custom Growth Plan",
    description: "We build a tailored strategy — channels, budget allocation, creative direction, and 90-day milestones.",
  },
  {
    step: "03",
    title: "Rapid Implementation",
    description: "We move fast. Campaigns live within 1-2 weeks with proper tracking, creative, and targeting.",
  },
  {
    step: "04",
    title: "Optimize & Scale",
    description: "Weekly optimization cycles identify winners fast. We scale what works and cut what doesn't.",
  },
  {
    step: "05",
    title: "Report & Grow",
    description: "Clear, jargon-free weekly reports and monthly strategy reviews keep you in the loop at all times.",
  },
];

const homepageFAQ = [
  {
    question: "What types of brands do you work with?",
    answer: "We specialize in D2C ecommerce brands — primarily in categories like skincare, fashion, jewellery, health & wellness, and home products. We work best with brands doing ₹5L+ per month in revenue that are ready to invest in growth.",
  },
  {
    question: "What's the minimum ad spend you work with?",
    answer: "We typically require a minimum of ₹1 lakh/month in ad spend. This ensures we have enough data to optimize effectively and that our fee structure makes sense for both parties.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Most brands see meaningful improvements in ROAS within 4-6 weeks. Significant revenue growth typically happens in months 2-3 as we gather data, identify winning creative and audiences, and begin scaling.",
  },
  {
    question: "Do you work on performance-based fees?",
    answer: "We work on a management fee model, not pure performance. This ensures we can dedicate the right resources without cutting corners. We are incentivized by your growth — happy clients are long-term clients.",
  },
  {
    question: "Which platforms do you manage?",
    answer: "Our core focus is Meta Ads (Facebook & Instagram) and Google Ads (Search, Shopping, Performance Max). We also support email marketing, CRO, and landing page optimization as part of full-stack engagements.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Client Logo Carousel */}
      <section className="bg-bg-dark border-y border-border-dark py-2">
        <div className="max-w-[1280px] mx-auto px-6">
          <p className="text-center text-text-secondary-dark text-xs font-mono uppercase tracking-widest mb-4">
            Brands We&apos;ve Scaled
          </p>
          <ClientLogoCarousel />
        </div>
      </section>

      {/* 3. Stats Section */}
      <SectionWrapper variant="dark">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
              Numbers That Tell the Story
            </h2>
            <p className="text-text-secondary-dark text-lg">Real results across 50+ D2C brands</p>
          </div>
        </FadeInOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 50, suffix: "+", label: "Brands Scaled", prefix: "" },
            { value: 2, suffix: "Cr+", label: "Ad Spend Managed", prefix: "₹" },
            { value: 42, suffix: "", label: "Avg ROAS (4.2x)", prefix: "" },
            { value: 100, suffix: "+", label: "Campaigns Run", prefix: "" },
          ].map((stat, i) => (
            <FadeInOnScroll key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="font-mono font-bold text-5xl md:text-6xl text-accent mb-2">
                  {stat.prefix && <span className="font-dm-sans">{stat.prefix}</span>}
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-text-secondary-dark text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* 4. Pain Points (Light) */}
      <SectionWrapper variant="light">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-mono uppercase tracking-widest">The Problem</span>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-text-primary-light mt-3 mb-4">
              Does This Sound Familiar?
            </h2>
            <p className="text-text-secondary-light text-lg max-w-2xl mx-auto">
              Most D2C brands face the same challenges when trying to scale with paid advertising.
            </p>
          </div>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((point, i) => (
            <FadeInOnScroll key={i} delay={i * 0.1}>
              <div className="flex gap-4 p-6 rounded-2xl border border-border-light bg-white hover:border-accent/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <point.icon size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-syne font-bold text-text-primary-light mb-2">{point.title}</h3>
                  <p className="text-text-secondary-light text-sm leading-relaxed">{point.description}</p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* 5. Services (Light) */}
      <SectionWrapper variant="light">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-mono uppercase tracking-widest">What We Do</span>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-text-primary-light mt-3 mb-4">
              Our Services
            </h2>
            <p className="text-text-secondary-light text-lg max-w-2xl mx-auto">
              Full-spectrum performance marketing for D2C brands that want to scale profitably.
            </p>
          </div>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, i) => (
            <FadeInOnScroll key={service.slug} delay={i * 0.08}>
              <ServiceCard
                title={service.shortTitle}
                description={service.description}
                href={`/services/${service.slug}`}
                icon={service.icon}
              />
            </FadeInOnScroll>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/services" variant="outline" size="md">
            View All Services <ArrowRight size={16} className="ml-2 inline" />
          </Button>
        </div>
      </SectionWrapper>

      {/* 6. How We Work (Dark) */}
      <SectionWrapper variant="dark">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-mono uppercase tracking-widest">How We Work</span>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mt-3 mb-4">
              Our Process
            </h2>
            <p className="text-text-secondary-dark text-lg max-w-2xl mx-auto">
              From first call to profitable scale — here&apos;s exactly how we work.
            </p>
          </div>
        </FadeInOnScroll>
        <ProcessStepper steps={process} />
      </SectionWrapper>

      {/* 7. Case Studies (Dark) */}
      <SectionWrapper variant="dark">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-mono uppercase tracking-widest">Proof of Work</span>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mt-3 mb-4">
              Results We&apos;ve Delivered
            </h2>
            <p className="text-text-secondary-dark text-lg max-w-2xl mx-auto">
              Real brands, real campaigns, real numbers.
            </p>
          </div>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.filter(c => c.heroMetric !== "---").map((cs, i) => (
            <FadeInOnScroll key={cs.slug} delay={i * 0.1}>
              <CaseStudyCard
                title={cs.brandName}
                industry={cs.industry}
                metric={cs.heroMetric}
                metricLabel={cs.heroMetricLabel}
                description={cs.description}
                href={`/results/${cs.slug}`}
              />
            </FadeInOnScroll>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/results" variant="outline" size="md">
            View All Case Studies <ArrowRight size={16} className="ml-2 inline" />
          </Button>
        </div>
      </SectionWrapper>

      {/* 8. Industries (Light) */}
      <SectionWrapper variant="light">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-mono uppercase tracking-widest">Industries</span>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-text-primary-light mt-3 mb-4">
              We Know Your Market
            </h2>
            <p className="text-text-secondary-light text-lg max-w-2xl mx-auto">
              Deep expertise across the categories that matter most for D2C growth.
            </p>
          </div>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.slice(0, 6).map((industry, i) => (
            <FadeInOnScroll key={industry.slug} delay={i * 0.08}>
              <IndustryCard
                title={industry.title}
                description={industry.description}
                href={`/industries/${industry.slug}`}
              />
            </FadeInOnScroll>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/industries" variant="outline" size="md">
            View All Industries <ArrowRight size={16} className="ml-2 inline" />
          </Button>
        </div>
      </SectionWrapper>

      {/* 9. Testimonials (Light) */}
      <SectionWrapper variant="light">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-mono uppercase tracking-widest">Testimonials</span>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-text-primary-light mt-3 mb-4">
              What Our Clients Say
            </h2>
          </div>
        </FadeInOnScroll>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {testimonials.map((t, i) => (
            <div key={i} className="shrink-0">
              <TestimonialCard
                quote={t.quote}
                name={t.name}
                company={t.company}
                rating={t.rating}
              />
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 10. Why Us (Dark) */}
      <SectionWrapper variant="dark">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeInOnScroll direction="left">
            <div>
              <span className="text-accent text-xs font-mono uppercase tracking-widest">Why Growth Escalators</span>
              <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mt-3 mb-6">
                We Think Like Business Owners, Not Ad Managers
              </h2>
              <p className="text-text-secondary-dark leading-relaxed mb-8">
                Most agencies optimize for vanity metrics — impressions, reach, clicks. We optimize for what actually matters: profitable revenue growth. Every decision we make is filtered through the lens of your unit economics.
              </p>
              <ul className="space-y-4">
                {[
                  "D2C-only focus — we know your challenges deeply",
                  "Full-funnel approach from awareness to retention",
                  "Weekly reporting with clear, actionable insights",
                  "Dedicated account manager + specialist team",
                  "No long-term lock-in contracts",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-text-secondary-dark text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll direction="right">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "ROAS Avg", value: "4.2x", sub: "Across all clients" },
                { label: "Client Retention", value: "90%", sub: "Stay 6+ months" },
                { label: "Avg Revenue Growth", value: "3.5x", sub: "In 90 days" },
                { label: "Response Time", value: "<4hrs", sub: "Business hours" },
              ].map((stat, i) => (
                <div key={i} className="bg-bg-dark-2 border border-border-dark rounded-2xl p-6">
                  <div className="font-mono font-bold text-3xl text-accent mb-1">{stat.value}</div>
                  <div className="font-syne font-bold text-white text-sm mb-1">{stat.label}</div>
                  <div className="text-text-secondary-dark text-xs">{stat.sub}</div>
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </SectionWrapper>

      {/* 11. FAQ (Light) */}
      <SectionWrapper variant="light">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-mono uppercase tracking-widest">FAQ</span>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-text-primary-light mt-3 mb-4">
              Common Questions
            </h2>
          </div>
        </FadeInOnScroll>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={homepageFAQ} />
        </div>
      </SectionWrapper>

      {/* 12. CTA */}
      <CTASection />
    </>
  );
}
