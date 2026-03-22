import Link from "next/link";
import { Instagram, Linkedin, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/content/siteConfig";
import { services } from "@/content/services";

export function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-border-dark">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Col 1 - Logo & Description */}
          <div>
            <Link href="/" className="font-syne font-bold text-xl">
              <span className="text-accent">Growth</span>
              <span className="text-white"> Escalators</span>
            </Link>
            <p className="text-text-secondary-dark text-sm mt-4 leading-relaxed">
              Performance marketing for D2C brands that scales revenue, not just ad spend.
            </p>
            <div className="flex gap-4 mt-6">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-text-secondary-dark hover:text-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary-dark hover:text-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-text-secondary-dark hover:text-accent transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 - Services */}
          <div>
            <h4 className="font-syne font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-text-secondary-dark hover:text-white text-sm transition-colors">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Quick Links */}
          <div>
            <h4 className="font-syne font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-text-secondary-dark hover:text-white text-sm transition-colors">About</Link></li>
              <li><Link href="/results" className="text-text-secondary-dark hover:text-white text-sm transition-colors">Results</Link></li>
              <li><Link href="/book-strategy-call" className="text-text-secondary-dark hover:text-white text-sm transition-colors">Book a Strategy Call</Link></li>
              <li><Link href="/privacy-policy" className="text-text-secondary-dark hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="text-text-secondary-dark hover:text-white text-sm transition-colors">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="font-syne font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 text-text-secondary-dark hover:text-white text-sm transition-colors">
                  <Phone size={14} className="text-accent shrink-0" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 text-text-secondary-dark hover:text-white text-sm transition-colors">
                  <Mail size={14} className="text-accent shrink-0" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-text-secondary-dark text-sm">
                  <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.city}, {siteConfig.contact.state}, {siteConfig.contact.country}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-dark mt-12 pt-8 text-center text-text-secondary-dark text-sm">
          © 2026 Growth Escalators. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
