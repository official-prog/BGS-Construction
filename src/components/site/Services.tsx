import { motion } from "framer-motion";
import { Hammer, Building2, Home, Layers, ShieldCheck, FileSearch } from "lucide-react";
import shingles from "@/assets/shingles.jpg";
import commercial from "@/assets/commercial.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  { icon: Hammer, title: "Carpentry & Woodwork", body: "Custom framing, finishing, and structural carpentry across the Okanagan. Barney and the team bring 30+ years of hands-on expertise to every joint, beam, and detail." },
  { icon: Building2, title: "Timber Framing", body: "Exposed timber frames, post-and-beam structures, and custom builds that define the look of Okanagan homes. Engineered for beauty and built for BC's climate." },
  { icon: Layers, title: "Concrete Forming", body: "Foundations, retaining walls, slabs, and forming work handled with precision. Proper prep, code-compliant pours, and clean finishes every time." },
  { icon: FileSearch, title: "Site Prep & Excavation", body: "Land clearing, grading, and excavation across the valley. We coordinate access, drainage, and safety before the first shovel hits the ground." },
  { icon: ShieldCheck, title: "Project Management", body: "One point of contact from planning to punch list. We coordinate trades, timelines, permits, and inspections so your build runs on schedule and on budget." },
  { icon: Home, title: "Siding & Decks", body: "Hardie board, cedar, vinyl, and composite siding systems plus custom deck builds. Exterior work that stands up to Okanagan summers and wet winters." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--blue)] mb-4">02 Services</div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance">
            Every trade, every build. <span className="italic gradient-ember-text">Done right.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
            One dedicated crew, one point of contact, and a written quote before any work begins. From a single deck to a full custom build, BGS Construction covers the Okanagan Valley with craftsmanship that holds.
          </p>
        </motion.div>

        {/* feature pair */}
        <div className="mt-20 grid lg:grid-cols-2 gap-6">
          {[{ img: shingles, kicker: "Residential", title: "Renovations built for Okanagan living", copy: "Full home renovations, room additions, and remodels executed by a crew with 30+ years in the trade. Clean finishes, on-schedule delivery, and no surprises on the final invoice." },
            { img: commercial, kicker: "Commercial & Custom", title: "Timber frames & commercial builds", copy: "Post-and-beam structures, commercial fit-outs, and large-scale builds across BC's interior. Structural integrity, engineered details, and project management from slab to roof peak." }].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 60, filter: "blur(14px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card metal-border cubic-cinema transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.2, ease }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute top-6 left-6 text-xs uppercase tracking-[0.3em] text-[var(--blue)]">{f.kicker}</div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-3xl tracking-tight">{f.title}</h3>
                <p className="mt-3 text-muted-foreground">{f.copy}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* service grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/70 rounded-2xl overflow-hidden border border-border">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative p-8 bg-card cubic-cinema transition-all hover:bg-secondary"
            >
              <motion.div
                whileHover={{ rotate: -6, scale: 1.08 }}
                transition={{ duration: 0.6, ease }}
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-[var(--shadow-cinema)]"
                style={{ background: "var(--gradient-brand)" }}
              >
                <s.icon className="w-5 h-5 text-white" />
              </motion.div>
              <h3 className="font-display text-2xl tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              <div className="mt-6 text-xs text-[var(--blue)] opacity-0 group-hover:opacity-100 cubic-cinema transition-opacity">
                Get a free quote →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
