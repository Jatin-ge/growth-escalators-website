"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/content/services";
import { industries } from "@/content/industries";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-[20px] saturate-150 border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
      style={scrolled ? { background: "rgba(5,5,5,0.85)" } : {}}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-xl font-normal">
          <span style={{ color: "#00E87B" }}>Growth</span>
          <span className="text-white"> Escalators</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="nav-link-underline flex items-center gap-1 transition-colors text-sm tracking-wide"
              style={{ color: "#8A8F98" }}
            >
              Services <ChevronDown size={13} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 pt-3 w-60"
                >
                  <div className="rounded-2xl p-2 shadow-2xl" style={{ background: "#111114", border: "1px solid rgba(255,255,255,0.08)" }}>
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block px-4 py-2.5 text-sm rounded-xl transition-colors hover:text-white hover:bg-white/[0.04]"
                        style={{ color: "#8A8F98" }}
                        onClick={() => setServicesOpen(false)}
                      >
                        {s.shortTitle}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button
              className="nav-link-underline flex items-center gap-1 transition-colors text-sm tracking-wide"
              style={{ color: "#8A8F98" }}
            >
              Industries <ChevronDown size={13} className={`transition-transform ${industriesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {industriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 pt-3 w-60"
                >
                  <div className="rounded-2xl p-2 shadow-2xl" style={{ background: "#111114", border: "1px solid rgba(255,255,255,0.08)" }}>
                    {industries.map((ind) => (
                      <Link
                        key={ind.slug}
                        href={`/industries/${ind.slug}`}
                        className="block px-4 py-2.5 text-sm rounded-xl transition-colors hover:text-white hover:bg-white/[0.04]"
                        style={{ color: "#8A8F98" }}
                        onClick={() => setIndustriesOpen(false)}
                      >
                        {ind.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/results" className="nav-link-underline transition-colors text-sm tracking-wide hover:text-white" style={{ color: "#8A8F98" }}>Results</Link>
          <Link href="/about" className="nav-link-underline transition-colors text-sm tracking-wide hover:text-white" style={{ color: "#8A8F98" }}>About</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/book-strategy-call"
            className="px-5 py-2.5 rounded-full text-black text-sm font-semibold transition-all duration-200 glow-pulse"
            style={{ background: "#00E87B" }}
          >
            Book a Call
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-16 z-50 px-8 py-12 overflow-y-auto"
            style={{ background: "#050505" }}
          >
            <nav className="flex flex-col gap-2">
              {[
                { label: "Services", href: "/services" },
                ...services.map(s => ({ label: s.shortTitle, href: `/services/${s.slug}` })),
              ].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    className={`block py-2 text-white transition-colors ${item.href === "/services" ? "font-semibold text-lg mt-2" : "pl-4 text-base hover:text-white"}`}
                    style={item.href !== "/services" ? { color: "#8A8F98" } : {}}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                <Link href="/results" className="block py-2 text-white font-semibold text-lg mt-2" onClick={() => setMobileOpen(false)}>Results</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 }}>
                <Link href="/about" className="block py-2 text-white font-semibold text-lg" onClick={() => setMobileOpen(false)}>About</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="mt-6">
                <Link
                  href="/book-strategy-call"
                  className="block w-full text-center px-6 py-4 rounded-full text-black font-semibold text-base"
                  style={{ background: "#00E87B" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Strategy Call
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
