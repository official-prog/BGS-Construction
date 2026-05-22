import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Mail, Clock } from "lucide-react";
import heroRoof from "@/assets/hero-roof.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[720px] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <img
          src={heroRoof}
          alt="BGS Construction — quality builds across the Okanagan Valley, BC"
          className="w-full h-full object-cover"
          fetchPriority="high"
          width={1920}
          height={1280}
        />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,oklch(0.52_0.12_215/0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <div className="absolute inset-0 grain" />

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 h-full flex flex-col justify-end pb-24 px-6"
      >
        <div className="mx-auto max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease, delay: 0.4 }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--blue)] mb-6"
          >
            <span className="w-8 h-px bg-[var(--blue)]" />
            Okanagan Valley, BC &amp; Surrounding Areas · Licensed &amp; Insured
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60, filter: "blur(18px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.6, ease, delay: 0.55 }}
            className="font-display text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl"
          >
            Built by hand.{" "}
            <span className="italic gradient-ember-text">Built to last.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.85 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground"
          >
            Full-service construction across the Okanagan Valley. Renovations, carpentry, timber framing, concrete forming, excavation, siding, and decks — delivered with 30 years of craftsmanship and a crew that signs their work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 18 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, ease, delay: 1.05 }}
            style={{ transformPerspective: 800 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full px-7 py-4 text-white font-medium shadow-[var(--shadow-blue)] hover:scale-[1.02] hover:shadow-[0_30px_80px_-15px_var(--blue)] cubic-cinema transition-all"
              style={{ background: "var(--gradient-brand)" }}
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 cubic-cinema transition-transform" />
            </a>
            <a
              href="tel:6047862990"
              className="inline-flex items-center gap-3 rounded-full px-7 py-4 border border-border/80 hover:border-[var(--blue)] cubic-cinema transition-colors"
            >
              <Phone className="w-4 h-4 text-[var(--blue)]" /> 604-786-2990
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.3 }}
            className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-muted-foreground max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[var(--blue)]" />
              <a href="mailto:info@bgsconstruction.ca" className="hover:text-foreground cubic-cinema transition-colors">info@bgsconstruction.ca</a>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-[var(--blue)]" />
              <span>Mon–Sat · Available for consultations</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-[var(--blue)] opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-[var(--blue)]" />
              </span>
              30+ years of hands-on experience
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground/70"
      >
        scroll
      </motion.div>
    </section>
  );
}
