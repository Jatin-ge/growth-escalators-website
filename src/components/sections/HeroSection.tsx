"use client";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  const reduce = useReducedMotion();

  const clients = ["Paraizo", "Swarnsootra", "Odra Organics", "Atatika Studios", "Exzept"];

  return (
    <section className="dark-section relative min-h-screen flex items-center pt-16" style={{ background: "#050505" }}>
      {/* Gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,232,123,0.07) 0%, transparent 70%)",
            top: "-100px",
            right: "-100px",
            animation: reduce ? "none" : "meshShift 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)",
            bottom: "0px",
            left: "-100px",
          }}
        />
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-center">
          {/* Left content */}
          <div className="max-w-3xl">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs font-semibold uppercase mb-6"
              style={{ color: "#00E87B", letterSpacing: "0.2em" }}
            >
              Performance Marketing for D2C Brands
            </motion.p>

            <motion.h1
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-white leading-[1.05] mb-6"
              style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
            >
              <motion.span
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="block"
              >
                We Scale D2C Brands
              </motion.span>
              <motion.span
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="block"
              >
                to{" "}
                <em className="not-italic" style={{ color: "#00E87B" }}>Profitable</em>
              </motion.span>
              <motion.span
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="block"
              >
                Growth
              </motion.span>
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
              style={{ color: "#8A8F98" }}
            >
              Stop burning ad budget on agencies that report on impressions. We optimize for revenue, ROAS, and actual business growth.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href="/book-strategy-call"
                className="px-8 py-4 rounded-full text-black font-semibold text-base transition-all duration-200 glow-pulse"
                style={{ background: "#00E87B" }}
              >
                Book Your Free Strategy Call
              </Link>
              <Link
                href="/results"
                className="px-8 py-4 rounded-full border text-white font-semibold text-base transition-all duration-200 hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              >
                See Our Results
              </Link>
            </motion.div>

            {/* Client badges */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap gap-2 items-center"
            >
              <span className="text-xs mr-1" style={{ color: "#8A8F98" }}>Trusted by</span>
              {clients.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1 rounded-full text-xs"
                  style={{ color: "#8A8F98", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
                >
                  {c}
                </span>
              ))}
              <span className="text-xs" style={{ color: "#8A8F98" }}>+ 45 more</span>
            </motion.div>
          </div>

          {/* Right side — floating metric cards */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {[
              { value: "4.2x", label: "Average ROAS", delay: "0s" },
              { value: "₹2Cr+", label: "Ad Spend Managed", delay: "0.5s" },
              { value: "50+", label: "D2C Brands Scaled", delay: "1s" },
            ].map((metric) => (
              <div
                key={metric.label}
                className="glass-card rounded-2xl p-6"
                style={{ animation: reduce ? "none" : `float 6s ease-in-out ${metric.delay} infinite` }}
              >
                <div className="font-mono font-bold text-4xl mb-1" style={{ color: "#00E87B" }}>{metric.value}</div>
                <div className="text-sm uppercase tracking-wider" style={{ color: "#8A8F98" }}>{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/20" />
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00E87B" }} />
        </motion.div>
      </div>
    </section>
  );
}
