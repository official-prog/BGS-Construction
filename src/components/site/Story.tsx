import { motion } from "framer-motion";
import { Award, ShieldCheck, BadgeCheck, Hammer } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const milestones = [
  { year: "The Beginning", title: "30+ years in the trade", body: "Barney Schofield learned carpentry the old way, on the tools, on the job, in every kind of weather. What started as a passion for building became a calling that now spans three decades of hands-on construction across British Columbia." },
  { year: "Residential", title: "Okanagan homes, built with care", body: "From Kelowna to Penticton, BGS has earned its reputation on residential builds, renovations, timber frames, decks, and siding that reflect the lifestyle and landscape of the valley." },
  { year: "Commercial", title: "Concrete, framing & project management", body: "Expanding into commercial work, BGS added concrete forming, full-site excavation, and end-to-end project management, coordinating trades and delivering results that hold up to scrutiny." },
  { year: "Today", title: "A team of 5, built for every build", body: "Barney leads a tight crew of 5 specialist tradespeople, fully licensed, insured, and committed to the same standard on every job, regardless of size. If you can build it, BGS can build it better." },
];

const badges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Award, label: "BC Certified" },
  { icon: BadgeCheck, label: "30+ Yrs Experience" },
  { icon: Hammer, label: "5-Star Rated" },
];

export function Story() {
  return (
    <section id="story" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--blue)] mb-4">05 Our Story</div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance">
              Local roots. <span className="italic gradient-ember-text">Lasting results.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl">
              BGS Construction was built in the Okanagan with one standard: show up, do the work, and do it right. Barney Schofield and his team of five bring hands-on dedication to every project, residential or commercial, renovation or new build.
            </p>
          </motion.div>

          <ol className="mt-14 relative border-l border-border pl-8 space-y-12">
            {milestones.map((m, i) => (
              <motion.li
                key={m.year}
                initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1, ease, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-[37px] top-2 w-3 h-3 rounded-full bg-[var(--blue)] shadow-[0_0_18px_var(--blue)]" />
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--blue)]">{m.year}</div>
                <h3 className="font-display text-2xl mt-1">{m.title}</h3>
                <p className="text-muted-foreground mt-2 max-w-md">{m.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="lg:sticky lg:top-32 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease }}
            className="p-8 rounded-2xl border border-border bg-card metal-border"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Our Promise</div>
            <p className="mt-4 font-display text-2xl leading-snug">
              Written quotes. No hidden costs. Workmanship you can see and touch. Barney is your single point of contact from first consultation to final walkthrough.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4" style={{ perspective: 1000 }}>
            {badges.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, z: -120, rotateX: 20 }}
                whileInView={{ opacity: 1, z: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.2, ease, delay: i * 0.12 }}
                animate={{ y: [0, -6, 0] }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl border border-border bg-card flex flex-col items-center gap-3 text-center"
                style={{ animationDuration: `${4 + i}s` }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-[var(--shadow-cinema)]" style={{ background: "var(--gradient-brand)" }}>
                  <b.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-medium">{b.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
