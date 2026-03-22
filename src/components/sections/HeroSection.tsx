"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-dark">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #00E87B 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "gradientShift 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #00E87B 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "gradientShift 12s ease-in-out infinite reverse",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="inline-block text-accent text-xs font-mono font-semibold uppercase tracking-[0.2em] mb-6 px-4 py-2 rounded-full border border-accent/20 bg-accent/5">
            Performance Marketing for D2C Brands
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-syne font-bold text-5xl md:text-7xl text-white leading-tight mb-6 max-w-5xl mx-auto"
        >
          We Scale D2C Brands to{" "}
          <span
            className="text-accent"
            style={{
              textShadow: "0 0 40px rgba(0, 232, 123, 0.3)",
            }}
          >
            Profitable Growth
          </span>{" "}
          Through Meta Ads &amp; CRO
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-text-secondary-dark text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Stop guessing with your ad spend. We build data-driven marketing systems that turn browsers into buyers — consistently, profitably, and at scale.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent/30 blur-xl rounded-full" />
            <Button href="/book-strategy-call" size="lg" variant="primary" className="relative">
              Book Free Strategy Call
            </Button>
          </div>
          <Button href="/results" size="lg" variant="secondary">
            View Our Results
          </Button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-text-secondary-dark text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["JA", "SG", "VM", "ND"].map((initials, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-accent/20 border-2 border-bg-dark flex items-center justify-center text-accent text-xs font-bold"
                >
                  {initials}
                </div>
              ))}
            </div>
            <span>Trusted by <span className="text-white font-semibold">50+ D2C brands</span> across India</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border-dark" />
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 fill-accent text-accent" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>4.9/5 average rating</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary-dark"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
