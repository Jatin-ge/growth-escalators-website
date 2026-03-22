import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "About Growth Escalators | D2C Performance Marketing Agency",
  description: "Meet the team behind Growth Escalators — Jaipur's leading D2C performance marketing agency helping brands scale profitably.",
};

const teamMembers = [
  { name: "Jatin Agrawal", role: "Founder & Growth Strategist", initials: "JA", description: "Growth strategist with deep expertise in D2C performance marketing. Has scaled 50+ brands across Meta and Google." },
  { name: "Sanskriti Gupta", role: "Creative Manager", initials: "SG", description: "Leads creative strategy and production, turning brand stories into high-converting ad campaigns." },
  { name: "Vishal", role: "Meta Ads Manager", initials: "VM", description: "Meta Ads specialist with hands-on experience managing high-budget campaigns across D2C categories." },
  { name: "Nimisha Daiya", role: "Graphic Designer", initials: "ND", description: "Designs scroll-stopping visuals that balance brand aesthetics with performance-driven creative principles." },
  { name: "Keshav Vaishnav", role: "Video Editor", initials: "KV", description: "Crafts compelling video content — from UGC-style creatives to polished brand films — that converts." },
];

const values = [
  { title: "Profit First", description: "Every decision is filtered through your unit economics. We don't optimize for metrics that don't move the needle on your profitability." },
  { title: "Full Transparency", description: "No hidden fees, no confusing reports. You always know exactly what's happening with your money and why." },
  { title: "Obsessive Testing", description: "We never assume. Every hypothesis gets tested, every winner gets scaled, every loser gets cut fast." },
  { title: "Long-Term Thinking", description: "We build marketing systems for sustainable growth, not quick wins that burn out in 30 days." },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-bg-dark min-h-[50vh] flex items-center pt-20">
        <div className="max-w-[1280px] mx-auto px-6 py-20">
          <FadeInOnScroll>
            <span className="text-accent text-xs font-mono uppercase tracking-widest">About Us</span>
            <h1 className="font-syne font-bold text-5xl md:text-6xl text-white mt-4 mb-6 max-w-3xl">
              We&apos;re Growth Obsessed, Not Vanity Metric Obsessed
            </h1>
            <p className="text-text-secondary-dark text-xl max-w-2xl leading-relaxed">
              Growth Escalators is a performance marketing agency built specifically for D2C ecommerce brands. Based in Jaipur, we&apos;ve scaled 50+ brands across India.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* 2. Story */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto">
          <FadeInOnScroll>
            <span className="text-accent text-xs font-mono uppercase tracking-widest">Our Story</span>
            <h2 className="font-syne font-bold text-4xl text-text-primary-light mt-3 mb-8">
              Why We Started Growth Escalators
            </h2>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.1}>
            <p className="text-text-secondary-light leading-relaxed text-lg mb-6">
              We started Growth Escalators because we kept seeing the same problem: D2C founders with incredible products who were hemorrhaging money on ads that didn&apos;t work, working with generalist agencies that didn&apos;t understand ecommerce.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <p className="text-text-secondary-light leading-relaxed text-lg mb-6">
              The D2C space is unique. Margins are tight, competition is intense, and the difference between a profitable campaign and a money-losing one often comes down to knowing your numbers — CAC, LTV, contribution margin — better than anyone else.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.3}>
            <p className="text-text-secondary-light leading-relaxed text-lg">
              We built Growth Escalators to be the agency we wished existed. One that thinks like a business partner, not just an ad manager. One that ties every decision to revenue and profitability. One that D2C founders can actually trust with their growth.
            </p>
          </FadeInOnScroll>
        </div>
      </SectionWrapper>

      {/* 3. Team */}
      <SectionWrapper variant="light">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-mono uppercase tracking-widest">The Team</span>
            <h2 className="font-syne font-bold text-4xl text-text-primary-light mt-3 mb-4">
              Meet the People Behind Your Growth
            </h2>
          </div>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <FadeInOnScroll key={member.name} delay={i * 0.1}>
              <div className="bg-white border border-border-light rounded-2xl p-8 hover:border-accent/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent/20 flex items-center justify-center mb-4">
                  <span className="font-syne font-bold text-accent text-lg">{member.initials}</span>
                </div>
                <h3 className="font-syne font-bold text-text-primary-light text-lg mb-1">{member.name}</h3>
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-text-secondary-light text-sm leading-relaxed">{member.description}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* 4. Values */}
      <SectionWrapper variant="light">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-mono uppercase tracking-widest">Our Values</span>
            <h2 className="font-syne font-bold text-4xl text-text-primary-light mt-3 mb-4">
              What We Stand For
            </h2>
          </div>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <FadeInOnScroll key={value.title} delay={i * 0.1}>
              <div className="p-8 rounded-2xl border border-border-light bg-white hover:border-accent/30 transition-colors">
                <div className="w-2 h-8 rounded-full bg-accent mb-4" />
                <h3 className="font-syne font-bold text-text-primary-light text-xl mb-3">{value.title}</h3>
                <p className="text-text-secondary-light leading-relaxed">{value.description}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* 5. CTA */}
      <CTASection />
    </>
  );
}
