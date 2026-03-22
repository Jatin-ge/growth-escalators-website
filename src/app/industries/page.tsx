import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { IndustryCard } from "@/components/ui/IndustryCard";
import { CTASection } from "@/components/ui/CTASection";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries We Serve | D2C Ecommerce Marketing | Growth Escalators",
  description: "Performance marketing expertise across D2C ecommerce categories — Skincare, Fashion, Jewellery, Health & Wellness, Ayurveda, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-bg-dark min-h-[40vh] flex items-center pt-20">
        <div className="max-w-[1280px] mx-auto px-6 py-16 text-center">
          <FadeInOnScroll>
            <span className="text-accent text-xs font-mono uppercase tracking-widest">Industries</span>
            <h1 className="font-syne font-bold text-5xl md:text-6xl text-white mt-4 mb-6">
              We Know Your Market
            </h1>
            <p className="text-text-secondary-dark text-xl max-w-2xl mx-auto">
              Deep expertise across the D2C categories that matter. We speak your language and understand your challenges.
            </p>
          </FadeInOnScroll>
        </div>
      </section>
      <SectionWrapper variant="light">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <FadeInOnScroll key={industry.slug} delay={i * 0.08}>
              <IndustryCard
                title={industry.title}
                description={industry.description}
                href={`/industries/${industry.slug}`}
              />
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>
      <CTASection />
    </>
  );
}
