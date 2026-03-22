import { CaseStudy } from "@/content/caseStudies";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CTASection } from "@/components/ui/CTASection";
import { Star, CheckCircle } from "lucide-react";

interface CaseStudyPageTemplateProps {
  caseStudy: CaseStudy;
}

export function CaseStudyPageTemplate({ caseStudy }: CaseStudyPageTemplateProps) {
  const isComingSoon = caseStudy.heroMetric === "---";

  return (
    <>
      {/* 1. Hero (Dark) */}
      <section className="bg-bg-dark min-h-[60vh] flex items-center pt-20">
        <div className="max-w-[1280px] mx-auto px-6 py-20">
          <FadeInOnScroll>
            <span className="text-accent text-xs font-mono uppercase tracking-widest">{caseStudy.industry}</span>
            <h1 className="font-syne font-bold text-5xl md:text-6xl text-white mt-4 mb-6">
              {caseStudy.brandName}
            </h1>
            {!isComingSoon ? (
              <div className="mb-8">
                <div className="font-mono font-bold text-7xl md:text-8xl text-accent">
                  {caseStudy.heroMetric}
                </div>
                <div className="text-text-secondary-dark text-lg uppercase tracking-wider mt-2">
                  {caseStudy.heroMetricLabel}
                </div>
              </div>
            ) : (
              <div className="mb-8">
                <div className="font-mono font-bold text-5xl text-text-secondary-dark">Case Study Coming Soon</div>
              </div>
            )}
            <p className="text-text-secondary-dark text-xl max-w-2xl leading-relaxed">
              {caseStudy.description}
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* 2. Summary (Light) */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto">
          <FadeInOnScroll>
            <span className="text-accent text-xs font-mono uppercase tracking-widest">Overview</span>
            <h2 className="font-syne font-bold text-4xl text-text-primary-light mt-3 mb-6">
              About {caseStudy.brandName}
            </h2>
            <p className="text-text-secondary-light leading-relaxed text-lg">{caseStudy.summary}</p>
          </FadeInOnScroll>
        </div>
      </SectionWrapper>

      {/* 3. Challenge (Light) */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto">
          <FadeInOnScroll>
            <span className="text-accent text-xs font-mono uppercase tracking-widest">The Challenge</span>
            <h2 className="font-syne font-bold text-4xl text-text-primary-light mt-3 mb-6">
              What We Were Up Against
            </h2>
            <p className="text-text-secondary-light leading-relaxed text-lg">{caseStudy.challenge}</p>
          </FadeInOnScroll>
        </div>
      </SectionWrapper>

      {/* 4. Strategy (Light) */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto">
          <FadeInOnScroll>
            <span className="text-accent text-xs font-mono uppercase tracking-widest">Strategy</span>
            <h2 className="font-syne font-bold text-4xl text-text-primary-light mt-3 mb-8">
              Our Approach
            </h2>
          </FadeInOnScroll>
          <div className="space-y-4">
            {caseStudy.strategy.map((step, i) => (
              <FadeInOnScroll key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-border-light bg-white">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={16} className="text-accent" />
                  </div>
                  <p className="text-text-secondary-light leading-relaxed">{step}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 5. Results (Dark) */}
      <SectionWrapper variant="dark">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-mono uppercase tracking-widest">Results</span>
            <h2 className="font-syne font-bold text-4xl text-white mt-3 mb-4">
              The Numbers
            </h2>
          </div>
        </FadeInOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {caseStudy.results.map((result, i) => (
            <FadeInOnScroll key={i} delay={i * 0.1}>
              <div className="bg-bg-dark-2 border border-border-dark rounded-2xl p-6 text-center">
                {result.numeric > 0 ? (
                  <div className="font-mono font-bold text-4xl text-accent mb-2">
                    {result.prefix && <span className="font-dm-sans">{result.prefix}</span>}
                    <AnimatedCounter target={result.numeric} suffix={result.suffix} />
                  </div>
                ) : (
                  <div className="font-mono font-bold text-2xl text-accent mb-2">{result.value}</div>
                )}
                <div className="text-text-secondary-dark text-sm uppercase tracking-wider">{result.label}</div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* 6. Testimonial (Light) if available */}
      {caseStudy.testimonial && (
        <SectionWrapper variant="light">
          <div className="max-w-2xl mx-auto text-center">
            <FadeInOnScroll>
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-text-secondary-light text-xl leading-relaxed mb-8 italic">
                &quot;{caseStudy.testimonial.quote}&quot;
              </blockquote>
              <div>
                <p className="font-syne font-bold text-text-primary-light">{caseStudy.testimonial.name}</p>
                <p className="text-text-secondary-light text-sm">{caseStudy.testimonial.role}</p>
              </div>
            </FadeInOnScroll>
          </div>
        </SectionWrapper>
      )}

      {/* 7. CTA */}
      <CTASection />
    </>
  );
}
