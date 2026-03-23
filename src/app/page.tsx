"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  TrendingDown,
  DollarSign,
  ImageOff,
  FileText,
  Star,
  Plus,
  Minus,
  Target,
  Search,
  TrendingUp,
  Palette,
  GitBranch,
  ShoppingBag,
  Code,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnScroll, AnimatedCounter } from "@/components/ui/Motion";
import { services } from "@/content/services";
import { caseStudies } from "@/content/caseStudies";
import { testimonials } from "@/content/testimonials";
import { industries } from "@/content/industries";

// Icon map for services
const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string; style?: React.CSSProperties }>> = {
  Target, Search, TrendingUp, Palette, GitBranch, ShoppingBag, Code,
};

// ─── HERO ────────────────────────────────────────────────────────────────────
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const shouldReduce = !!prefersReducedMotion;
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, shouldReduce ? 0 : -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const clients = ["Paraizo", "Swarnsootra", "Odra Organics", "Atatika Studios", "Exzept"];
  const metrics = [
    { value: "4.2x", label: "Average ROAS", float: "float-slow" },
    { value: "₹2Cr+", label: "Ad Spend Managed", float: "float-medium" },
    { value: "50+", label: "Brands Scaled", float: "float-fast" },
  ];

  return (
    <section
      ref={heroRef}
      className="noise-overlay relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Ambient glow orbs */}
      <div
        className={`absolute rounded-full pointer-events-none ${shouldReduce ? "" : "float-slow"}`}
        style={{
          width: 800, height: 800,
          top: "-20%", right: "-10%",
          background: "radial-gradient(circle, rgba(0,232,123,0.07) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
      <div
        className={`absolute rounded-full pointer-events-none ${shouldReduce ? "" : "float-medium"}`}
        style={{
          width: 600, height: 600,
          bottom: "-20%", left: "-15%",
          background: "radial-gradient(circle, rgba(79,70,229,0.04) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.025,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 w-full max-w-[1280px] mx-auto px-6 pt-24 pb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: 7 cols */}
          <div className="lg:col-span-7">
            <motion.p
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[13px] uppercase font-semibold mb-6"
              style={{ letterSpacing: "0.2em", color: "var(--accent)" }}
            >
              Performance Marketing for D2C Brands
            </motion.p>

            <motion.h1
              initial={shouldReduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.35 }}
              className="font-display text-white mb-6"
              style={{ fontSize: "clamp(44px, 7vw, 88px)", lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 400 }}
            >
              <motion.span
                initial={shouldReduce ? false : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="block"
              >
                We Scale D2C Brands
              </motion.span>
              <motion.span
                initial={shouldReduce ? false : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="block"
              >
                to{" "}
                <em style={{ color: "var(--accent)", fontStyle: "normal" }}>Profitable</em>
              </motion.span>
              <motion.span
                initial={shouldReduce ? false : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                className="block"
              >
                Growth
              </motion.span>
            </motion.h1>

            <motion.p
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8 leading-relaxed max-w-[520px]"
              style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "var(--text-muted)" }}
            >
              Stop burning ad budget on agencies that report on impressions. We optimize for revenue, ROAS, and actual business growth.
            </motion.p>

            <motion.div
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href="/book-strategy-call"
                className="pulse-glow inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-black hover:scale-[1.03] transition-transform duration-200"
                style={{ background: "var(--accent)" }}
              >
                Book Your Free Strategy Call <ArrowRight size={16} />
              </Link>
              <Link
                href="/results"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white border transition-colors duration-200"
                style={{ borderColor: "rgba(255,255,255,0.15)", backgroundColor: "transparent" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                See Our Results
              </Link>
            </motion.div>

            <motion.div
              initial={shouldReduce ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="text-sm" style={{ color: "var(--text-muted)" }}>Trusted by</span>
              {clients.map(c => (
                <span
                  key={c}
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "var(--text-muted)",
                  }}
                >
                  {c}
                </span>
              ))}
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>+45 more</span>
            </motion.div>

            {/* Mobile metrics */}
            <div className="lg:hidden grid grid-cols-3 gap-3 mt-10">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <div className="font-mono font-bold text-2xl" style={{ color: "var(--accent)" }}>{m.value}</div>
                  <div className="text-[10px] uppercase tracking-widest mt-1" style={{ color: "var(--text-muted)" }}>{m.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: 5 cols — floating metric cards (desktop only) */}
          <div className="hidden lg:block lg:col-span-5 relative h-[520px]">
            {/* Decorative orb behind cards */}
            <div
              className="absolute"
              style={{
                width: 300, height: 300,
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                background: "radial-gradient(circle, rgba(0,232,123,0.06) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />
            {metrics.map((m, i) => {
              const positions: Array<React.CSSProperties> = [
                { top: "8%", left: "5%" },
                { top: "38%", right: "5%" },
                { top: "66%", left: "18%" },
              ];
              const rotations = ["2deg", "-1deg", "1.5deg"];
              const pos = positions[i];
              return (
                <motion.div
                  key={m.label}
                  initial={shouldReduce ? false : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 + i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  className={`glass-card absolute p-6 ${m.float}`}
                  style={{ ...pos, minWidth: 160, transform: `rotate(${rotations[i]})` }}
                >
                  <div className="font-mono font-bold" style={{ fontSize: 36, color: "var(--accent)" }}>{m.value}</div>
                  <div className="text-[11px] uppercase tracking-widest mt-1" style={{ color: "var(--text-muted)" }}>{m.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={shouldReduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
      >
        <div
          className="scroll-line w-px"
          style={{ height: 40, background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.35))" }}
        />
        <div
          className="float-fast rounded-full"
          style={{ width: 6, height: 6, background: "var(--accent)" }}
        />
      </motion.div>
    </section>
  );
}

// ─── LOGO MARQUEE ────────────────────────────────────────────────────────────
function LogoMarquee() {
  const brands = ["Paraizo", "Swarnsootra", "Odra Organics", "Atatika Studios", "Exzept", "Yellow Diaries", "Flight Ticket Fare", "Elixzor"];
  const doubled = [...brands, ...brands];

  return (
    <section className="noise-overlay py-10 relative" style={{ background: "var(--bg-dark)" }}>
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none z-10" style={{ background: "linear-gradient(to right, var(--bg-dark), transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none z-10" style={{ background: "linear-gradient(to left, var(--bg-dark), transparent)" }} />

      <FadeIn className="text-center mb-6">
        <p className="text-[13px] uppercase tracking-[0.18em]" style={{ color: "var(--text-muted)" }}>
          Trusted by 50+ D2C brands across India
        </p>
      </FadeIn>

      <div className="overflow-hidden">
        <div className="animate-marquee flex gap-12 w-max">
          {doubled.map((brand, i) => (
            <span
              key={i}
              className="text-[15px] font-medium whitespace-nowrap cursor-default transition-opacity duration-200"
              style={{ color: "rgba(255,255,255,0.3)", opacity: 0.3 }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "0.6")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "0.3")}
            >
              {brand}
              <span className="mx-8" style={{ color: "rgba(255,255,255,0.1)" }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROBLEM SECTION ─────────────────────────────────────────────────────────
function ProblemSection() {
  const painPoints = [
    {
      icon: TrendingDown,
      title: "Your ROAS keeps dropping",
      description: "CPMs keep rising while returns shrink. Every rupee of ad spend feels less efficient than last month.",
    },
    {
      icon: DollarSign,
      title: "Ad spend feels like gambling",
      description: "Random testing without a framework. You're guessing at audiences and creatives instead of running data-backed experiments.",
    },
    {
      icon: ImageOff,
      title: "Creative fatigue is killing results",
      description: "Your best-performing ads from 3 months ago are now dead. And your pipeline of fresh creatives is empty.",
    },
    {
      icon: FileText,
      title: "No clear growth strategy",
      description: "Tactics everywhere but no unified roadmap. Each channel operates in isolation. Nothing compounds.",
    },
  ];

  return (
    <section className="py-24 sm:py-32" style={{ background: "var(--bg-light)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-[13px] uppercase font-semibold tracking-[0.2em] mb-4" style={{ color: "var(--accent)" }}>The Problem</p>
          <h2 className="font-display mb-4" style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "var(--text-dark)", fontWeight: 400 }}>
            Does This Sound Familiar?
          </h2>
          <p style={{ color: "var(--text-dark-muted)", fontSize: 17 }}>Most D2C brands hit the same walls. Here&apos;s why your growth has stalled.</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {painPoints.map((p, i) => {
            const Icon = p.icon;
            return (
              <FadeIn key={p.title} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div
                  className="light-card p-8 relative"
                  style={{ marginTop: i % 2 === 1 ? 24 : 0 }}
                >
                  {/* Left accent border */}
                  <div
                    className="absolute left-0 top-4 bottom-4 rounded-full transition-all duration-300"
                    style={{ width: 3, background: "var(--accent)" }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "var(--accent-dim)" }}
                  >
                    <Icon size={22} style={{ color: "var(--accent)" }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold mb-2 text-[20px]" style={{ color: "var(--text-dark)" }}>{p.title}</h3>
                  <p style={{ color: "var(--text-dark-muted)", fontSize: 15, lineHeight: 1.7 }}>{p.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── PROCESS SECTION ─────────────────────────────────────────────────────────
function ProcessSection() {
  const steps = [
    { num: "01", title: "Audit", desc: "We tear apart your ad account, funnel, and creatives to find exactly what's broken — and what's worth saving." },
    { num: "02", title: "Strategy", desc: "We build a data-backed 90-day growth plan with clear ROAS, CAC, and revenue targets. No more guessing." },
    { num: "03", title: "Creative", desc: "Our in-house team — strategist, designer, editor — produces 10–15 new creatives monthly. Designed to convert, not just look good." },
    { num: "04", title: "Execute", desc: "We launch, test, and optimize daily. Losers get killed fast. Winners get scaled hard." },
    { num: "05", title: "Scale", desc: "Once we find profitable combinations, we scale spend systematically while protecting your margins and CAC." },
  ];

  return (
    <section className="py-24 sm:py-32" style={{ background: "var(--bg-light)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="mb-16">
          <p className="text-[13px] uppercase font-semibold tracking-[0.2em] mb-4" style={{ color: "var(--accent)" }}>Our Approach</p>
          <h2 className="font-display max-w-[600px]" style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "var(--text-dark)", fontWeight: 400, lineHeight: 1.1 }}>
            We Don&apos;t Just Run Ads.<br />We Build Growth Systems.
          </h2>
        </FadeIn>

        <div className="relative max-w-[720px] pl-4">
          {/* Vertical connecting line */}
          <div className="absolute left-7 top-7 bottom-7 w-px" style={{ background: "linear-gradient(to bottom, rgba(0,232,123,0.3), transparent)" }} />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.08}>
                <div className="flex gap-6 items-start">
                  <div
                    className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center border-2 transition-colors duration-300 cursor-default"
                    style={{
                      borderColor: "rgba(0,232,123,0.4)",
                      background: "transparent",
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "var(--accent-dim)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                  >
                    <span className="font-mono font-bold text-sm" style={{ color: "var(--accent)" }}>{step.num}</span>
                  </div>
                  <div className="pt-3">
                    <h4 className="font-semibold text-[22px] mb-1.5" style={{ color: "var(--text-dark)" }}>{step.title}</h4>
                    <p style={{ color: "var(--text-dark-muted)", fontSize: 15, lineHeight: 1.7, maxWidth: 440 }}>{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES SECTION ─────────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section className="noise-overlay py-24 sm:py-32" style={{ background: "var(--bg-dark)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-[13px] uppercase font-semibold tracking-[0.2em] mb-4" style={{ color: "var(--accent)" }}>What We Do</p>
          <h2 className="font-display text-white" style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 400 }}>
            Services Built for D2C Growth
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => {
            const Icon = iconMap[s.icon] || Target;
            return (
              <StaggerItem key={s.slug}>
                <Link href={`/services/${s.slug}`} className="glass-card block p-8 group h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                    style={{ background: "var(--accent-dim)" }}
                  >
                    <Icon size={22} style={{ color: "var(--accent)" }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-white text-[20px] mb-2">{s.shortTitle}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7 }} className="mb-5">{s.description}</p>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200"
                    style={{ color: "var(--accent)" }}
                  >
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ─── RESULTS SECTION ─────────────────────────────────────────────────────────
function ResultsSection() {
  return (
    <section className="py-24 sm:py-32" style={{ background: "var(--bg-light)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="mb-16">
          <p className="text-[13px] uppercase font-semibold tracking-[0.2em] mb-4" style={{ color: "var(--accent)" }}>Results</p>
          <h2 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "var(--text-dark)", fontWeight: 400 }}>
            Results speak for themselves.
          </h2>
        </FadeIn>

        <div className="space-y-5 mb-10">
          {caseStudies.map((cs) => (
            <ScaleOnScroll key={cs.slug}>
              <div className="light-card p-8 sm:p-10 relative overflow-hidden">
                {/* Accent top gradient line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: "linear-gradient(to right, var(--accent), transparent)" }}
                />
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                  {/* Content */}
                  <div className="flex-1">
                    <span
                      className="text-[11px] uppercase font-semibold tracking-widest px-3 py-1.5 rounded-full inline-block mb-4"
                      style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                    >
                      {cs.industry}
                    </span>
                    <h3 className="font-display mb-3" style={{ fontSize: "clamp(24px, 3vw, 32px)", color: "var(--text-dark)", fontWeight: 400 }}>
                      {cs.brandName}
                    </h3>
                    <p style={{ color: "var(--text-dark-muted)", fontSize: 15, lineHeight: 1.7 }} className="mb-5 max-w-lg">
                      {cs.summary.slice(0, 150)}{cs.summary.length > 150 ? "…" : ""}
                    </p>
                    <Link
                      href={`/results/${cs.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold group transition-all duration-200"
                      style={{ color: "var(--accent)" }}
                    >
                      Read case study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  {/* Metrics */}
                  <div className="flex gap-4 shrink-0">
                    {cs.results.slice(0, 2).map((r, j) => (
                      <div
                        key={j}
                        className="text-center p-5 rounded-2xl min-w-[110px]"
                        style={{ background: "var(--accent-dim)" }}
                      >
                        <div className="font-mono font-bold text-2xl" style={{ color: "var(--accent)" }}>{r.value}</div>
                        <div className="text-[11px] uppercase tracking-widest mt-1" style={{ color: "var(--text-dark-muted)" }}>{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScaleOnScroll>
          ))}
        </div>

        <FadeIn className="text-center">
          <Link
            href="/results"
            className="inline-flex items-center gap-2 font-semibold transition-all duration-200 group"
            style={{ color: "var(--accent)", fontSize: 15 }}
          >
            View all case studies <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── INDUSTRIES SECTION ───────────────────────────────────────────────────────
function IndustriesSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="noise-overlay py-24 sm:py-32" style={{ background: "var(--bg-dark)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-[13px] uppercase font-semibold tracking-[0.2em] mb-4" style={{ color: "var(--accent)" }}>Industries</p>
          <h2 className="font-display text-white" style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 400 }}>
            Deep Expertise Where It Matters
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => {
              const isHovered = hovered === ind.slug;
              return (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  onMouseEnter={() => setHovered(ind.slug)}
                  onMouseLeave={() => setHovered(null)}
                  className="px-6 py-3.5 rounded-full font-medium text-[15px] transition-all duration-200"
                  style={{
                    background: isHovered ? "var(--accent)" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${isHovered ? "var(--accent)" : "rgba(255,255,255,0.08)"}`,
                    color: isHovered ? "#000" : "var(--text-muted)",
                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  {ind.title}
                </Link>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── METRICS BAND ──────────────────────────────────────────────────────────────
function MetricsBand() {
  return (
    <section className="noise-overlay py-20" style={{ background: "var(--bg-dark-elevated)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { target: 50, suffix: "+", label: "Brands Scaled" },
            { target: 2, prefix: "₹", suffix: "Cr+", label: "Ad Spend Managed" },
            { target: 4, suffix: ".2x", label: "Average ROAS" },
            { target: 100, suffix: "+", label: "Campaigns Launched" },
          ].map((m, i) => (
            <FadeIn key={m.label} delay={i * 0.1}>
              <div className="glass-card p-8 text-center">
                <AnimatedCounter target={m.target} prefix={m.prefix || ""} suffix={m.suffix || ""} label={m.label} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS SECTION ─────────────────────────────────────────────────────
function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32" style={{ background: "var(--bg-light)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-[13px] uppercase font-semibold tracking-[0.2em] mb-4" style={{ color: "var(--accent)" }}>Client Feedback</p>
          <h2 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "var(--text-dark)", fontWeight: 400 }}>
            What Brands Say About Us
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="light-card p-8">
                <div className="font-display text-[72px] leading-none mb-2 select-none" style={{ color: "rgba(0,232,123,0.1)" }}>&ldquo;</div>
                <p className="font-display italic text-[16px] leading-relaxed mb-6 -mt-4" style={{ color: "var(--text-dark)" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={13} style={{ fill: "var(--accent)", color: "var(--accent)" }} />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-black"
                    style={{ background: "var(--accent)" }}
                  >
                    {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold" style={{ color: "var(--text-dark)" }}>{t.name}</p>
                    <p className="text-[12px]" style={{ color: "var(--text-dark-muted)" }}>{t.company}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ─── FAQ SECTION ──────────────────────────────────────────────────────────────
function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    { q: "What's your minimum ad spend requirement?", a: "We typically work with brands spending ₹1L+ per month on paid ads. This gives us enough data to test, learn, and optimize effectively." },
    { q: "How long before I see results?", a: "Most brands see meaningful improvements within 30 days. Significant scaling typically happens by month 2–3 as we build data and optimize." },
    { q: "Do you work with Shopify and WooCommerce brands?", a: "Yes, we work with both. We can also work with custom ecommerce platforms as long as proper tracking is in place." },
    { q: "What if I've been burned by agencies before?", a: "We hear this often. That's why we start with a free strategy call — no contracts, no pressure. We'll audit your current setup and tell you honestly whether we can help." },
    { q: "Do you handle creatives or do I need to provide them?", a: "We handle everything in-house. Our team includes a creative strategist, graphic designer, and video editor. You don't need to worry about creative production." },
    { q: "What metrics do you optimize for?", a: "Revenue, ROAS, CAC, and profitability. Not impressions, not reach, not clicks. We focus on the metrics that actually show up in your bank account." },
  ];

  return (
    <section className="py-24 sm:py-32" style={{ background: "var(--bg-light)" }}>
      <div className="max-w-[720px] mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-[13px] uppercase font-semibold tracking-[0.2em] mb-4" style={{ color: "var(--accent)" }}>FAQs</p>
          <h2 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "var(--text-dark)", fontWeight: 400 }}>
            Questions Founders Ask
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                <button
                  className="w-full flex items-center justify-between py-6 text-left"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                >
                  <span
                    className="text-[17px] font-semibold pr-6 transition-colors duration-200"
                    style={{ color: openIdx === i ? "var(--accent)" : "var(--text-dark)" }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{
                      background: openIdx === i ? "var(--accent)" : "transparent",
                      border: openIdx === i ? "none" : "1px solid rgba(0,0,0,0.15)",
                    }}
                  >
                    {openIdx === i
                      ? <Minus size={14} color="#000" />
                      : <Plus size={14} style={{ color: "var(--text-dark-muted)" }} />
                    }
                  </span>
                </button>
                <AnimatePresence>
                  {openIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[15px] leading-relaxed max-w-[90%]" style={{ color: "var(--text-dark-muted)" }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── FINAL CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="noise-overlay py-28 sm:py-36 relative overflow-hidden" style={{ background: "var(--bg-dark)" }}>
      {/* Dramatic glow orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600, height: 600,
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(0,232,123,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div className="max-w-[640px] mx-auto px-6 text-center relative z-10">
        <FadeIn>
          <h2
            className="font-display text-white mb-6"
            style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 400 }}
          >
            Ready to Scale?
          </h2>
          <p className="mb-10 leading-relaxed" style={{ color: "var(--text-muted)", fontSize: 18 }}>
            We work with a limited number of brands each month. If your brand is doing ₹5L+/month and you want profitable growth — let&apos;s talk.
          </p>
          <Link
            href="/book-strategy-call"
            className="pulse-glow inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold text-black text-base mb-5 hover:scale-[1.03] transition-transform duration-200"
            style={{ background: "var(--accent)" }}
          >
            Book Your Free Strategy Call <ArrowRight size={18} />
          </Link>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Free strategy call · No commitment · 30 minutes
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── PAGE ASSEMBLY ────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoMarquee />
      <ProblemSection />
      <ProcessSection />
      <ServicesSection />
      <MetricsBand />
      <ResultsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
