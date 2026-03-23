import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { CTASection } from "@/components/ui/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Growth Escalators",
  description: "Growth Escalators was founded with one belief: your ad budget should be treated like our own money. Meet the team behind the results.",
};

const team = [
  { name: "Jatin Agrawal", role: "Founder & Growth Strategist", description: "Leads strategy and growth architecture for all client accounts.", initials: "JA" },
  { name: "Sanskriti Gupta", role: "Creative Manager", description: "Oversees all creative production and brand strategy.", initials: "SG" },
  { name: "Vishal", role: "Meta Ads Manager", description: "Manages Meta Ads campaigns and performance optimization.", initials: "V" },
  { name: "Nimisha Daiya", role: "Graphic Designer", description: "Designs high-converting ad creatives and brand assets.", initials: "ND" },
  { name: "Keshav Vaishnav", role: "Video Editor", description: "Produces video ads and UGC-style content for all platforms.", initials: "KV" },
];

const values = [
  { title: "Every Rupee is Accountable", description: "We treat your ad budget like our own money. Every decision is made with profitability in mind." },
  { title: "Data Over Opinions", description: "Every decision backed by metrics, not gut feelings. We test, we measure, we optimize." },
  { title: "Partners, Not Vendors", description: "We embed into your team, not just send reports. Your success is our success." },
  { title: "Creatives That Convert", description: "Beautiful is good. Beautiful AND profitable is better. We never sacrifice performance for aesthetics." },
];

export default function AboutPage() {
  return (
    <>
      <section className="dark-section pt-32 pb-24 relative overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[600px] h-[600px] rounded-full top-0 right-0"
            style={{ background: "radial-gradient(circle, rgba(0,232,123,0.05) 0%, transparent 70%)" }}
          />
        </div>
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeInOnScroll>
            <span className="text-xs font-semibold uppercase mb-6 block" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>About Us</span>
            <h1 className="font-display text-white mb-6 max-w-3xl" style={{ fontSize: "clamp(48px, 8vw, 96px)", lineHeight: "1.05" }}>
              Built by Marketers Who Spend Real Ad Budgets
            </h1>
            <p className="text-xl leading-relaxed max-w-2xl" style={{ color: "#8A8F98" }}>
              We know what it feels like to watch ad spend disappear without results. That&apos;s why we built Growth Escalators differently.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-start">
          <FadeInOnScroll direction="left">
            <p className="text-xs font-semibold uppercase mb-6" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>Our Story</p>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: "#5C5F66" }}>
              <p>Growth Escalators was founded after watching too many D2C brands waste money on agencies that cared more about their retainer than your results. We saw founders frustrated by reports full of impressions and reach — while their revenue stayed flat.</p>
              <p className="font-display italic text-2xl leading-snug" style={{ color: "#0A0A0A" }}>
                &ldquo;Your ad budget should be treated like it&apos;s our own money.&rdquo;
              </p>
              <p>That&apos;s the principle we built this agency on. Every rupee we spend on your campaigns is tracked, tested, and justified by data. We only scale what&apos;s working. We kill what isn&apos;t. And we report on the metrics that actually matter: revenue, ROAS, and profitability.</p>
              <p>We&apos;re a small, focused team in Jaipur. We work with a limited number of brands at a time because we believe in depth over breadth. When you work with us, you get the full team — not an account manager who outsources everything.</p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll direction="right" delay={0.2}>
            <div
              className="rounded-2xl aspect-square flex items-center justify-center sticky top-24"
              style={{
                background: "linear-gradient(135deg, #0C0C0E, #111114)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="text-center">
                <div className="font-display mb-4" style={{ fontSize: "80px", color: "rgba(255,255,255,0.06)" }}>GE</div>
                <div className="text-sm" style={{ color: "#8A8F98" }}>Jaipur, Rajasthan</div>
                <div className="text-xs mt-1" style={{ color: "rgba(138,143,152,0.5)" }}>India</div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light" className="border-t" style={{ borderColor: "rgba(0,0,0,0.04)" }}>
        <FadeInOnScroll>
          <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>The Team</p>
          <h2 className="font-display mb-12" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", color: "#0A0A0A" }}>
            The People Behind the Results
          </h2>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <FadeInOnScroll key={member.name} delay={i * 0.08}>
              <div
                className="bg-white rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300"
                style={{
                  marginTop: i % 3 === 1 ? "24px" : "0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-semibold text-black text-lg mb-5"
                  style={{ background: "linear-gradient(135deg, #00E87B, #00FF8C)" }}
                >
                  {member.initials}
                </div>
                <h3 className="font-display text-2xl mb-1" style={{ color: "#0A0A0A" }}>{member.name}</h3>
                <p className="text-sm font-semibold mb-3" style={{ color: "#00E87B" }}>{member.role}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#5C5F66" }}>{member.description}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light" className="border-t" style={{ borderColor: "rgba(0,0,0,0.04)" }}>
        <FadeInOnScroll>
          <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>What We Stand For</p>
          <h2 className="font-display mb-12" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", color: "#0A0A0A" }}>Our Values</h2>
        </FadeInOnScroll>
        <div className="space-y-8">
          {values.map((v, i) => (
            <FadeInOnScroll key={v.title} delay={i * 0.08}>
              <div
                className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 items-start pb-8"
                style={{ borderBottom: i < values.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none" }}
              >
                <h3 className="font-display text-2xl" style={{ color: "#0A0A0A" }}>{v.title}</h3>
                <p className="text-lg leading-relaxed" style={{ color: "#5C5F66" }}>{v.description}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
