import { Phone, Mail, Globe } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="BGS Construction" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Full-service construction serving the Okanagan Valley and BC Interior. Renovations, carpentry, timber framing, concrete, siding, and decks. Licensed and insured.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--blue)] mb-4">Quick Links</div>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="#services" className="hover:text-[var(--blue)] cubic-cinema transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-[var(--blue)] cubic-cinema transition-colors">Projects</a>
              <a href="#story" className="hover:text-[var(--blue)] cubic-cinema transition-colors">About Us</a>
              <a href="#area" className="hover:text-[var(--blue)] cubic-cinema transition-colors">Service Area</a>
              <a href="#contact" className="hover:text-[var(--blue)] cubic-cinema transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--blue)] mb-4">Contact Us</div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="tel:6047862990" className="flex items-center gap-3 hover:text-[var(--blue)] cubic-cinema transition-colors">
                <Phone className="w-4 h-4 text-[var(--blue)]" />
                604-786-2990
              </a>
              <a href="mailto:bgscontracting@gmail.com" className="flex items-center gap-3 hover:text-[var(--blue)] cubic-cinema transition-colors">
                <Mail className="w-4 h-4 text-[var(--blue)]" />
                bgscontracting@gmail.com
              </a>
              <a href="mailto:info@bgsconstruction.ca" className="flex items-center gap-3 hover:text-[var(--blue)] cubic-cinema transition-colors">
                <Mail className="w-4 h-4 text-[var(--blue)]" />
                info@bgsconstruction.ca
              </a>
              <a href="https://www.bgsconstruction.ca" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[var(--blue)] cubic-cinema transition-colors">
                <Globe className="w-4 h-4 text-[var(--blue)]" />
                bgsconstruction.ca
              </a>
              <div className="text-muted-foreground leading-relaxed">
                Okanagan Valley<br />British Columbia, Canada
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/p/BGS-Construction-61559855762357/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-[var(--blue)] hover:text-[var(--blue)] cubic-cinema transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} BGS Construction. Licensed · Insured · Okanagan Valley, BC.</div>
          <div className="italic text-[var(--blue)]">Built by hand. Built to last.</div>
        </div>
      </div>
    </footer>
  );
}
