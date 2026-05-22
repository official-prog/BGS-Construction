import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const items = [
  { quote: "Barney and his crew transformed our Kelowna home. The renovation was done on time, on budget, and the quality of the carpentry is something you can see and feel every single day. We couldn't be happier.", name: "Sandra M.", role: "Kelowna, BC · Home Renovation" },
  { quote: "BGS built us a beautiful cedar deck overlooking the lake. They listened to exactly what we wanted and delivered something even better. Professional from the first call to the final walkthrough.", name: "Dave & Lisa P.", role: "Penticton, BC · Custom Deck" },
  { quote: "We hired BGS for a full concrete forming and timber frame project on our Vernon property. Barney managed every trade, kept us in the loop, and the finished structure is exactly what we envisioned.", name: "Rob K.", role: "Vernon, BC · Timber Frame Build" },
];

export function Testimonials() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,oklch(0.52_0.12_215/0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="max-w-3xl mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--blue)] mb-4">04 Word of Mouth</div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance">
            What the Okanagan <span className="italic gradient-ember-text">says about our work.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, x: -60, rotateY: -12 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, ease, delay: i * 0.15 }}
              whileHover={{ y: -6, rotateY: 2 }}
              style={{ transformPerspective: 1200 }}
              className="relative p-8 rounded-2xl border border-border bg-card metal-border shadow-[var(--shadow-cinema)] cubic-cinema transition-all"
            >
              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-xl flex items-center justify-center shadow-[var(--shadow-blue)]" style={{ background: "var(--gradient-brand)" }}>
                <Quote className="w-5 h-5 text-white" />
              </div>
              <div className="flex gap-1 mb-5 text-[var(--blue)]">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <blockquote className="font-display text-xl leading-snug text-balance">"{t.quote}"</blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-medium">{t.name}</div>
                <div className="text-muted-foreground text-xs">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
