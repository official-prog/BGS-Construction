import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;
const areas = [
  "Kelowna, BC", "West Kelowna, BC", "Vernon, BC", "Penticton, BC",
  "Lake Country, BC", "Peachland, BC", "Summerland, BC", "Oliver, BC",
  "Osoyoos, BC", "Coldstream, BC", "Armstrong, BC", "Enderby, BC",
  "Salmon Arm, BC", "Merritt, BC", "Kamloops, BC", "Princeton, BC",
  "Keremeos, BC", "Naramata, BC", "Okanagan Falls, BC", "Westbank, BC",
];

export function ServiceArea() {
  return (
    <section id="area" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--blue)] mb-4">06 Service Area</div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance">
            Okanagan based. <span className="italic gradient-ember-text">Serving the entire valley.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl">
            BGS Construction serves homeowners and businesses across the Okanagan Valley and BC Interior. Free on-site consultations for all properties in our service area — call or visit bgsconstruction.ca to get started.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {areas.map((a, i) => (
              <motion.span
                key={a}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease, delay: i * 0.04 }}
                className="px-3 py-1.5 text-xs rounded-full border border-border text-muted-foreground hover:border-[var(--blue)] hover:text-[var(--blue)] cubic-cinema transition-colors cursor-default"
              >
                {a}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.4, ease }}
          className="relative aspect-square rounded-3xl border border-border overflow-hidden metal-border bg-card"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.16_0.03_220),oklch(0.09_0.02_220))]" />
          <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 400" fill="none">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="oklch(0.52 0.12 215 / 0.15)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <path d="M0 220 Q 100 180 200 210 T 400 200" stroke="oklch(0.52 0.12 215 / 0.5)" strokeWidth="1.2" fill="none" />
            <path d="M0 260 Q 150 240 250 270 T 400 250" stroke="oklch(0.52 0.12 215 / 0.3)" strokeWidth="1" fill="none" />
            <path d="M200 0 L 200 400" stroke="oklch(0.52 0.12 215 / 0.25)" strokeWidth="0.8" strokeDasharray="4 6" />
          </svg>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease, delay: 0.6 }}
            className="absolute top-[46%] left-[52%] -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              <span className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-[var(--blue)]/30 animate-ping" />
              <span className="absolute inset-0 w-24 h-24 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-[var(--blue)]/10 animate-pulse" />
              <div className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-[0_0_40px_var(--blue)]" style={{ background: "var(--gradient-brand)" }}>
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs uppercase tracking-[0.25em] text-[var(--blue)]">
                Okanagan Valley, BC
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
