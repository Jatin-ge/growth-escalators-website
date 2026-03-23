import Link from "next/link";
import { Instagram, Linkedin, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/content/siteConfig";
import { services } from "@/content/services";

export function Footer() {
  return (
    <footer className="dark-section border-t" style={{ background: "#050505", borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="font-display text-xl">
              <span style={{ color: "#00E87B" }}>Growth</span>
              <span className="text-white"> Escalators</span>
            </Link>
            <p className="text-sm mt-4 leading-relaxed max-w-xs" style={{ color: "#8A8F98" }}>
              Performance marketing for D2C brands that scales revenue, not just ad spend.
            </p>
            <div className="flex gap-4 mt-6">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent" style={{ color: "#8A8F98" }}>
                <Instagram size={16} />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent" style={{ color: "#8A8F98" }}>
                <Linkedin size={16} />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent" style={{ color: "#8A8F98" }}>
                <Facebook size={16} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm transition-colors hover:text-white" style={{ color: "#8A8F98" }}>
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Results", href: "/results" },
                { label: "Book a Strategy Call", href: "/book-strategy-call" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-conditions" },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-white" style={{ color: "#8A8F98" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-3 text-sm transition-colors hover:text-white" style={{ color: "#8A8F98" }}>
                  <Phone size={13} className="shrink-0" style={{ color: "#00E87B" }} />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-sm transition-colors hover:text-white" style={{ color: "#8A8F98" }}>
                  <Mail size={13} className="shrink-0" style={{ color: "#00E87B" }} />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm" style={{ color: "#8A8F98" }}>
                  <MapPin size={13} className="shrink-0 mt-0.5" style={{ color: "#00E87B" }} />
                  <span>{siteConfig.contact.city}, {siteConfig.contact.state}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-sm" style={{ borderColor: "rgba(255,255,255,0.06)", color: "#8A8F98" }}>
          © 2026 Growth Escalators. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
