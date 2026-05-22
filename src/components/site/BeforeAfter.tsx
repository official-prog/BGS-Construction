import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function BeforeAfter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(55);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.0]);
  const imgX = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const handleMove = useCallback((clientX: number) => {
    if (!dragRef.current) return;
    const rect = dragRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, x)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!(e as MouseEvent).buttons && e.type === "mousemove") return;
      const cx = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      handleMove(cx);
    };
    const node = dragRef.current;
    if (!node) return;
    node.addEventListener("mousemove", onMove as EventListener);
    node.addEventListener("touchmove", onMove as EventListener);
    return () => {
      node.removeEventListener("mousemove", onMove as EventListener);
      node.removeEventListener("touchmove", onMove as EventListener);
    };
  }, [handleMove]);

  return (
    <section id="portfolio" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--blue)] mb-4">03 Portfolio</div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance">
              Before. After. <span className="italic gradient-ember-text">Verified.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Drag the seam — every project is photo-documented before and after, with a written completion report and sign-off from the client.
          </p>
        </motion.div>

        <motion.div
          ref={dragRef}
          onMouseMove={(e) => handleMove(e.clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, ease }}
          className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-border metal-border select-none cursor-ew-resize shadow-[var(--shadow-cinema)]"
        >
          <motion.img style={{ scale: imgScale, x: imgX }} src={afterImg} alt="After BGS Construction project completion" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <motion.div style={{ width: `${pos}%` }} className="absolute inset-y-0 left-0 overflow-hidden" transition={{ duration: 0.2, ease }}>
            <motion.img style={{ scale: imgScale, x: imgX }} src={beforeImg} alt="Before BGS Construction project start" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-foreground/90 bg-background/40 backdrop-blur px-3 py-1.5 rounded-full">Before</div>
          </motion.div>
          <div className="absolute bottom-6 right-6 text-xs uppercase tracking-[0.3em] text-foreground/90 bg-background/40 backdrop-blur px-3 py-1.5 rounded-full">After</div>

          {/* seam handle */}
          <div style={{ left: `${pos}%` }} className="absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-[var(--blue)] to-transparent shadow-[0_0_30px_var(--blue)] -translate-x-1/2 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full gradient-metal border border-foreground/30 flex items-center justify-center shadow-[var(--shadow-cinema)]">
              <div className="flex gap-0.5">
                <span className="w-0.5 h-4 bg-background/80" />
                <span className="w-0.5 h-4 bg-background/80" />
              </div>
            </div>
          </div>

          <motion.div initial={{ x: "-100%" }} whileInView={{ x: "200%" }} viewport={{ once: true }} transition={{ duration: 2, ease, delay: 0.6 }} className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-foreground/10 to-transparent pointer-events-none" />
        </motion.div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {[
            ["Kelowna, BC", "Full home renovation"],
            ["Penticton, BC", "Custom deck build · cedar"],
            ["Vernon, BC", "Siding & exterior remodel"],
            ["West Kelowna, BC", "Timber frame addition"],
          ].map(([place, scope]) => (
            <div key={place} className="border-t border-border pt-4">
              <div className="font-display text-xl">{place}</div>
              <div className="text-muted-foreground text-xs mt-1">{scope}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
