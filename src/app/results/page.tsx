import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { CTASection } from "@/components/ui/CTASection";
import { caseStudies } from "@/content/caseStudies";

export const metadata: Metadata = {
  title: "Client Results & Case Studies | Growth Escalators",
  description: "Real results from real D2C brands. See how Growth Escalators has scaled brands with profitable Meta Ads and Google Ads campaigns.",
};

export default function ResultsPage() {
  return (
    <>
      <section className="bg-bg-dark min-h-[40vh] flex items-center pt-20">
        <div className="max-w-[1280px] mx-auto px-6 py-16 text-center">
          <FadeInOnScroll>
            <span className="text-accent text-xs font-mono uppercase tracking-widest">Proof of Work</span>
            <h1 className="font-syne font-bold text-5xl md:text-6xl text-white mt-4 mb-6">
              Results We&apos;ve Delivered
            </h1>
            <p className="text-text-secondary-dark text-xl max-w-2xl mx-auto">
              No cherry-picked metrics. No vanity numbers. Real campaigns, real brands, real results.
            </p>
          </FadeInOnScroll>
        </div>
      </section>
      <SectionWrapper variant="dark">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
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
      </SectionWrapper>
      <CTASection />
    </>
  );
}
