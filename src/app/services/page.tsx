import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Our Services | Performance Marketing for D2C Brands | Growth Escalators",
  description: "Full-spectrum performance marketing services for D2C ecommerce brands — Meta Ads, Google Ads, CRO, Creative Strategy, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-bg-dark min-h-[40vh] flex items-center pt-20">
        <div className="max-w-[1280px] mx-auto px-6 py-16 text-center">
          <FadeInOnScroll>
            <span className="text-accent text-xs font-mono uppercase tracking-widest">What We Do</span>
            <h1 className="font-syne font-bold text-5xl md:text-6xl text-white mt-4 mb-6">
              Our Services
            </h1>
            <p className="text-text-secondary-dark text-xl max-w-2xl mx-auto">
              Everything you need to scale your D2C brand profitably — under one roof.
            </p>
          </FadeInOnScroll>
        </div>
      </section>
      <SectionWrapper variant="light">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
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
      </SectionWrapper>
      <CTASection />
    </>
  );
}
