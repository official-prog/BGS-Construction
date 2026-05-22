import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const links = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#portfolio" },
  { label: "About Us", href: "#story" },
  { label: "Service Area", href: "#area" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between glass border-b border-border/60">
        <a href="#top" className="flex items-center select-none">
          <img src={logo} alt="BGS Construction" className="h-12 w-auto object-contain" />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[var(--blue)] cubic-cinema transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:6047862990"
          className="group inline-flex items-center gap-2 rounded-full border border-border/80 px-4 py-2 text-sm font-medium hover:border-[var(--blue)] hover:text-[var(--blue)] cubic-cinema transition-colors"
        >
          <Phone className="w-4 h-4 text-[var(--blue)]" />
          <span className="hidden sm:inline">604-786-2990</span>
        </a>
      </div>
    </motion.header>
  );
}
