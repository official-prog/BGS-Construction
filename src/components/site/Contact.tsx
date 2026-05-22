import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Globe } from "lucide-react";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,oklch(0.52_0.12_215/0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-[1fr_1.1fr] gap-16">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--blue)] mb-4">07 Get a Quote</div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance">
            Free quote. <span className="italic gradient-ember-text">Honest answers.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-md">
            Call us, send a message, or reach out via bgsconstruction.ca. Barney answers personally and we'll get back to you fast, usually the same day.
          </p>

          <div className="mt-12 space-y-4">
            <a href="tel:6047862990" className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-[var(--blue)] cubic-cinema transition-colors group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-[var(--shadow-cinema)]" style={{ background: "var(--gradient-brand)" }}>
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Call directly</div>
                <div className="font-display text-2xl">604-786-2990</div>
              </div>
            </a>
            <a href="mailto:bgscontracting@gmail.com" className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-[var(--blue)] cubic-cinema transition-colors">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-[var(--shadow-cinema)]" style={{ background: "var(--gradient-brand)" }}>
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
                <div className="font-display text-xl">bgscontracting@gmail.com</div>
              </div>
            </a>
            <a href="mailto:info@bgsconstruction.ca" className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-[var(--blue)] cubic-cinema transition-colors">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-[var(--shadow-cinema)]" style={{ background: "var(--gradient-brand)" }}>
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
                <div className="font-display text-xl">info@bgsconstruction.ca</div>
              </div>
            </a>
            <a href="https://www.bgsconstruction.ca" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-[var(--blue)] cubic-cinema transition-colors">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-[var(--shadow-cinema)]" style={{ background: "var(--gradient-brand)" }}>
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Website</div>
                <div className="font-display text-xl">bgsconstruction.ca</div>
              </div>
            </a>
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-[var(--shadow-cinema)]" style={{ background: "var(--gradient-brand)" }}>
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Location</div>
                <div className="font-display text-lg">Okanagan Valley</div>
                <div className="text-muted-foreground text-sm">British Columbia, Canada</div>
              </div>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 60, rotateX: 12 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease }}
          style={{ transformPerspective: 1200 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="relative p-8 md:p-12 rounded-3xl border border-border bg-card metal-border shadow-[var(--shadow-cinema)]"
        >
          <div className="space-y-6">
            <Field label="Full Name" name="name" />
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Project Location" name="location" />
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Service needed</label>
              <select className="w-full bg-transparent border-b border-border focus:border-[var(--blue)] outline-none py-3 text-foreground cubic-cinema transition-colors">
                <option className="bg-card">Home Renovation</option>
                <option className="bg-card">Carpentry & Woodwork</option>
                <option className="bg-card">Timber Framing</option>
                <option className="bg-card">Concrete Forming</option>
                <option className="bg-card">Site Prep & Excavation</option>
                <option className="bg-card">Project Management</option>
                <option className="bg-card">Siding & Exterior</option>
                <option className="bg-card">Deck Build</option>
                <option className="bg-card">Other / Not sure</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Project details</label>
              <textarea rows={3} className="w-full bg-transparent border-b border-border focus:border-[var(--blue)] outline-none py-3 resize-none cubic-cinema transition-colors" />
            </div>

            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-white font-medium shadow-[var(--shadow-blue)] hover:scale-[1.01] cubic-cinema transition-all"
              style={{ background: "var(--gradient-brand)" }}
            >
              {sent ? "Thanks, Barney will be in touch soon!" : "Request my free quote"}
              {!sent && <Send className="w-4 h-4 group-hover:translate-x-1 cubic-cinema transition-transform" />}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</label>
      <input name={name} type={type} className="w-full bg-transparent border-b border-border focus:border-[var(--blue)] outline-none py-3 text-foreground cubic-cinema transition-colors" />
    </div>
  );
}
