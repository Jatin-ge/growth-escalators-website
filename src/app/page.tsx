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
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/caseStudies";
import { testimonials } from "@/content/testimonials";
import { TrendingDown, DollarSign, ImageOff, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

const homepageFAQs = [
  { question: "What's your minimum ad spend requirement?", answer: "We typically work with brands spending ₹1L+ per month on paid ads. This gives us enough data to test, learn, and optimize effectively." },
  { question: "How long before I see results?", answer: "Most brands see meaningful improvements within 30 days. Significant scaling typically happens by month 2-3 as we build data and optimize." },
  { question: "Do you work with Shopify and WooCommerce brands?", answer: "Yes, we work with both. We can also work with custom ecommerce platforms as long as proper tracking is in place." },
  { question: "What if I've been burned by agencies before?", answer: "We hear this often. That's why we start with a free strategy call — no contracts, no pressure. We'll audit your current setup and tell you honestly whether we can help." },
  { question: "Do you handle creatives or do I need to provide them?", answer: "We handle everything in-house. Our team includes a creative strategist, graphic designer, and video editor. You don't need to worry about creative production." },
  { question: "What metrics do you optimize for?", answer: "Revenue, ROAS, CAC, and profitability. Not impressions, not reach, not clicks. We focus on the metrics that actually show up in your bank account." },
  { question: "How do you report on performance?", answer: "Weekly performance updates with key metrics. Monthly deep-dive reviews with strategy adjustments. You always know exactly how your campaigns are performing." },
];

const processSteps = [
  { step: "01", title: "Audit", description: "We tear apart your ad account, funnel, and creatives to find what's actually broken." },
  { step: "02", title: "Strategy", description: "We build a data-backed growth plan with clear ROAS, CAC, and revenue targets." },
  { step: "03", title: "Creative", description: "Our in-house team produces scroll-stopping creatives designed for conversion, not likes." },
  { step: "04", title: "Execute", description: "We launch, test, and optimize daily. We kill losers fast and scale winners aggressively." },
  { step: "05", title: "Scale", description: "Once we find profitable combinations, we scale spend while protecting your margins." },
];

const painPoints = [
  { icon: TrendingDown, title: "Stuck ROAS", description: "Your ROAS has been hovering between 1.5x–2.5x for months. You've tried new audiences, new budgets — nothing moves the needle." },
  { icon: DollarSign, title: "Rising CAC", description: "Customer acquisition costs keep climbing. Every month you spend more to get the same results — or worse." },
  { icon: ImageOff, title: "Creative Fatigue", description: "The same ad formats that worked 3 months ago have completely stopped performing. Your creative pipeline is dry." },
  { icon: FileText, title: "Vanity Metrics Reports", description: "Your agency sends you reports full of impressions, reach, and clicks. But your bank account tells a different story." },
];

export default function HomePage() {
  const featuredCaseStudies = caseStudies.slice(0, 3);

  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Client Logo Carousel */}
      <ClientLogoCarousel />

      {/* 3. Problem Section */}
      <SectionWrapper variant="light">
        <FadeInOnScroll>
          <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>Sound Familiar?</p>
          <h2 className="font-display mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", color: "#0A0A0A" }}>Does This Sound Familiar?</h2>
          <p className="text-lg mb-16 max-w-xl" style={{ color: "#5C5F66" }}>Most D2C brands hit the same walls. Here&apos;s why your growth has stalled.</p>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((point, i) => (
            <FadeInOnScroll key={point.title} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div
                className="bg-white rounded-2xl p-8 border-l-4 hover:-translate-y-1 transition-all duration-300"
                style={{
                  borderLeftColor: "#00E87B",
                  marginTop: i % 2 === 1 ? "24px" : "0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.04)",
                }}
              >
                <point.icon size={32} strokeWidth={1.5} style={{ color: "#00E87B" }} className="mb-4" />
                <h3 className="font-semibold text-xl mb-2" style={{ color: "#0A0A0A" }}>{point.title}</h3>
                <p className="leading-relaxed" style={{ color: "#5C5F66" }}>{point.description}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* 4. Solution/Approach Section */}
      <SectionWrapper variant="light" className="border-t" style={{ borderColor: "rgba(0,0,0,0.04)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeInOnScroll>
            <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>Our Approach</p>
            <h2 className="font-display mb-6" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", color: "#0A0A0A" }}>We Don&apos;t Just Run Ads. We Build Growth Systems.</h2>
            <p className="text-lg leading-relaxed" style={{ color: "#5C5F66" }}>
              Most agencies manage campaigns. We engineer profitable growth systems that coordinate ads, creatives, CRO, and retention into one machine.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <ProcessStepper steps={processSteps} />
          </FadeInOnScroll>
        </div>
      </SectionWrapper>

      {/* 5. Services — Bento Grid */}
      <SectionWrapper variant="light" className="border-t" style={{ borderColor: "rgba(0,0,0,0.04)" }}>
        <FadeInOnScroll>
          <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>What We Do</p>
          <h2 className="font-display mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", color: "#0A0A0A" }}>Services Built for D2C Growth</h2>
          <p className="text-lg mb-12" style={{ color: "#5C5F66" }}>Everything you need to scale revenue profitably.</p>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <FadeInOnScroll key={service.slug} delay={i * 0.07} className={i === 0 ? "lg:col-span-2" : ""}>
              <ServiceCard
                title={service.title}
                description={service.description}
                href={`/services/${service.slug}`}
                icon={service.icon}
                featured={i === 0}
              />
            </FadeInOnScroll>
          ))}
        </div>
        <FadeInOnScroll className="mt-8 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all" style={{ color: "#00E87B" }}>
            Explore All Services <ArrowRight size={16} />
          </Link>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* 6. Results/Metrics */}
      <SectionWrapper variant="dark">
        <FadeInOnScroll>
          <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>Results That Matter</p>
          <h2 className="font-display text-white mb-16" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1" }}>Numbers That Tell the Story</h2>
        </FadeInOnScroll>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {[
            { target: 50, suffix: "+", label: "Brands Scaled" },
            { target: 2, prefix: "₹", suffix: "Cr+", label: "Ad Spend Managed" },
            { target: 4, suffix: ".2x", label: "Average ROAS" },
            { target: 100, suffix: "+", label: "Campaigns Launched" },
          ].map((stat, i) => (
            <FadeInOnScroll key={stat.label} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-8 text-center" style={{ boxShadow: "0 0 40px rgba(0,232,123,0.03)" }}>
                <div className="font-mono font-bold mb-2" style={{ fontSize: "clamp(40px, 6vw, 72px)", lineHeight: "1.0", color: "#00E87B" }}>
                  <AnimatedCounter target={stat.target} prefix={stat.prefix || ""} suffix={stat.suffix || ""} />
                </div>
                <div className="text-xs uppercase tracking-widest" style={{ color: "#8A8F98" }}>{stat.label}</div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredCaseStudies.map((cs, i) => (
            <FadeInOnScroll key={cs.slug} delay={i * 0.1}>
              <CaseStudyCard
                title={cs.brandName}
                industry={cs.industry}
                metric={cs.heroMetric}
                metricLabel={cs.heroMetricLabel}
                description={cs.summary}
                href={`/results/${cs.slug}`}
              />
            </FadeInOnScroll>
          ))}
        </div>
        <FadeInOnScroll className="text-center">
          <Link href="/results" className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all" style={{ color: "#00E87B" }}>
            View All Case Studies <ArrowRight size={16} />
          </Link>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* 7. Industries */}
      <SectionWrapper variant="light">
        <FadeInOnScroll>
          <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>Industries We Scale</p>
          <h2 className="font-display mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", color: "#0A0A0A" }}>Deep Expertise in the Verticals That Matter</h2>
          <p className="text-lg mb-12" style={{ color: "#5C5F66" }}>We don&apos;t work with everyone. We&apos;ve built deep expertise in these specific verticals.</p>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className="flex flex-wrap gap-4">
            {industries.map((ind) => (
              <IndustryCard key={ind.slug} title={ind.title} description={ind.description} href={`/industries/${ind.slug}`} />
            ))}
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* 8. About Preview */}
      <SectionWrapper variant="light" className="border-t" style={{ borderColor: "rgba(0,0,0,0.04)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeInOnScroll direction="left">
            <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>Who We Are</p>
            <h2 className="font-display mb-6" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", color: "#0A0A0A" }}>Built by Marketers, Not Salespeople</h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#5C5F66" }}>
              Growth Escalators was founded with one belief: your ad budget should be treated like our own money. Every rupee is tracked, tested, and optimized for revenue. We&apos;re a small, focused team in Jaipur that works with D2C brands across India — and we only take on clients we know we can genuinely help.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all" style={{ color: "#00E87B" }}>
              Meet the Team <ArrowRight size={16} />
            </Link>
          </FadeInOnScroll>
          <FadeInOnScroll direction="right" delay={0.2}>
            <div
              className="rounded-2xl aspect-square flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #0C0C0E, #111114)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="text-center">
                <div className="font-display mb-2" style={{ fontSize: "64px", color: "rgba(255,255,255,0.1)" }}>GE</div>
                <div className="text-sm" style={{ color: "#8A8F98" }}>Jaipur, India</div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </SectionWrapper>

      {/* 9. Testimonials */}
      <SectionWrapper variant="light" className="border-t" style={{ borderColor: "rgba(0,0,0,0.04)" }}>
        <FadeInOnScroll>
          <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>Client Feedback</p>
          <h2 className="font-display mb-12" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", color: "#0A0A0A" }}>What Brands Say About Working With Us</h2>
        </FadeInOnScroll>
        <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
          {testimonials.map((t, i) => (
            <div key={i} className="snap-start shrink-0">
              <TestimonialCard quote={t.quote} name={t.name} company={t.company} rating={t.rating} />
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 10. FAQ */}
      <SectionWrapper variant="light" className="border-t" style={{ borderColor: "rgba(0,0,0,0.04)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeInOnScroll>
            <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>Questions</p>
            <h2 className="font-display mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", color: "#0A0A0A" }}>Frequently Asked Questions</h2>
            <p className="leading-relaxed" style={{ color: "#5C5F66" }}>
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link href="/book-strategy-call" className="hover:underline" style={{ color: "#00E87B" }}>Book a call</Link> and we&apos;ll answer everything.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.15}>
            <FAQAccordion items={homepageFAQs} />
          </FadeInOnScroll>
        </div>
      </SectionWrapper>

      {/* 11. CTA */}
      <CTASection />
    </>
  );
}
