"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-bg-dark/90 backdrop-blur-xl border-b border-border-dark" : "bg-transparent"}`}>
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-syne font-bold text-xl">
          <span className="text-accent">Growth</span>
          <span className="text-white"> Escalators</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="flex items-center gap-1 text-text-secondary-dark hover:text-white transition-colors text-sm font-medium">
              Services <ChevronDown size={14} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2 w-64">
                <div className="bg-bg-dark-2 border border-border-dark rounded-2xl p-3 shadow-2xl">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="block px-4 py-2 text-sm text-text-secondary-dark hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                      {s.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div className="relative" onMouseEnter={() => setIndustriesOpen(true)} onMouseLeave={() => setIndustriesOpen(false)}>
            <button className="flex items-center gap-1 text-text-secondary-dark hover:text-white transition-colors text-sm font-medium">
              Industries <ChevronDown size={14} />
            </button>
            {industriesOpen && (
              <div className="absolute top-full left-0 pt-2 w-64">
                <div className="bg-bg-dark-2 border border-border-dark rounded-2xl p-3 shadow-2xl">
                  {industries.map((ind) => (
                    <Link key={ind.slug} href={`/industries/${ind.slug}`} className="block px-4 py-2 text-sm text-text-secondary-dark hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                      {ind.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/results" className="text-text-secondary-dark hover:text-white transition-colors text-sm font-medium">Results</Link>
          <Link href="/about" className="text-text-secondary-dark hover:text-white transition-colors text-sm font-medium">About</Link>
        </nav>

        <div className="hidden md:block">
          <Button href="/book-strategy-call" size="sm" variant="primary">Book a Call</Button>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-dark border-t border-border-dark px-6 py-8">
          <nav className="flex flex-col gap-4">
            <p className="text-xs text-text-secondary-dark uppercase tracking-wider">Services</p>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="text-white text-sm pl-3" onClick={() => setMobileOpen(false)}>
                {s.shortTitle}
              </Link>
            ))}
            <p className="text-xs text-text-secondary-dark uppercase tracking-wider mt-2">Industries</p>
            {industries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="text-white text-sm pl-3" onClick={() => setMobileOpen(false)}>
                {ind.title}
              </Link>
            ))}
            <Link href="/results" className="text-white text-sm mt-2" onClick={() => setMobileOpen(false)}>Results</Link>
            <Link href="/about" className="text-white text-sm" onClick={() => setMobileOpen(false)}>About</Link>
            <Button href="/book-strategy-call" size="md" variant="primary" className="mt-4 w-full">Book a Call</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
