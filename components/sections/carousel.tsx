"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Project } from "@/types/project";

function getAccent(): string {
  return "var(--primary)";
}

// ─── Individual Card ──────────────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: (slug: string) => void;
  onLeave: () => void;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const accent = getAccent();

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 12,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 12,
    });
  }, []);

  const hasRealImage = Boolean(project.coverImage);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onHover(project.slug)}
      onMouseLeave={() => {
        onLeave();
        setMousePos({ x: 0, y: 0 });
      }}
      animate={{
        width: isHovered ? 420 : 320,
        filter: isHovered ? "brightness(1.15)" : "brightness(0.8)",
        scale: isHovered ? 1.03 : 1,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      className="relative shrink-0 cursor-pointer select-none"
      style={{
        height: 520,
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: isHovered
          ? `0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px var(--border), 0 0 60px color-mix(in oklch, var(--primary) 22%, transparent)`
          : "0 16px 40px rgba(0,0,0,0.4)",
      }}
    >
      {/* ── Cover image / placeholder ── */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: isHovered ? mousePos.x : 0,
          y: isHovered ? mousePos.y : 0,
          scale: isHovered ? 1.12 : 1.0,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 22 }}
        style={{ willChange: "transform" }}
      >
        {hasRealImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            draggable={false}
            sizes="(max-width: 768px) 320px, 420px"
          />
        ) : (
          /* Placeholder gradient when no image */
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(135deg,
                color-mix(in oklch, var(--primary) 30%, transparent) 0%,
                color-mix(in oklch, var(--primary) 8%, var(--background)) 60%,
                var(--background) 100%)`,
            }}
          />
        )}
      </motion.div>

      {/* Base gradient overlay — lebih gelap agar teks terbaca */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.15) 100%)",
        }}
      />

      {/* Accent glow on hover */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(ellipse at bottom left, color-mix(in oklch, var(--primary) 20%, transparent) 0%, transparent 70%)`,
        }}
      />

      {/* Card number */}
      <div
        className="absolute top-6 right-6 font-mono text-xs tracking-widest"
        style={{ color: "rgba(255,255,255,0.3)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Accent line top */}
      <motion.div
        className="absolute top-0 left-8 right-8 h-px"
        animate={{ opacity: isHovered ? 1 : 0, scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        style={{
          background: `linear-gradient(to right, transparent, ${accent}, transparent)`,
        }}
      />

      {/* Tech stack pills */}
      <motion.div
        className="absolute top-6 left-6 flex flex-wrap gap-1.5"
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -8 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
        {project.techStack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <motion.p
          animate={{ opacity: isHovered ? 0.6 : 0, y: isHovered ? 0 : 8 }}
          transition={{ duration: 0.25 }}
          className="text-xs font-mono tracking-widest uppercase mb-2"
          style={{ color: accent }}
        >
          Case Study
        </motion.p>

        <motion.h3
          animate={{ y: isHovered ? -4 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="font-semibold tracking-tight text-white mb-2"
          style={{ fontSize: 22, lineHeight: 1.2 }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 12 }}
          transition={{ type: "spring", stiffness: 260, damping: 28, delay: 0.04 }}
          className="text-sm leading-relaxed mb-5 line-clamp-2"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          {project.subtitle}
        </motion.p>

        <motion.div
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 16 }}
          transition={{ type: "spring", stiffness: 260, damping: 28, delay: 0.08 }}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white rounded-xl"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 16px rgba(0,0,0,0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            View Case Study
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Nav Button ───────────────────────────────────────────────────────────────
function NavButton({ direction, onClick, visible }: { direction: "left" | "right"; onClick: () => void; visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
          className="absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
          style={{
            [direction === "left" ? "left" : "right"]: 16,
            width: 48, height: 48, borderRadius: "50%",
            background: "rgba(18,18,20,0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            cursor: "pointer", color: "white",
          }}
          aria-label={direction === "left" ? "Previous" : "Next"}
        >
          {direction === "left" ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 4l-5 5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// ─── Main Carousel ────────────────────────────────────────────────────────────
export default function ProjectsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const momentumFrame = useRef<number | null>(null);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  // ── Wheel / trackpad ────────────────────────────────────────────────────────
useEffect(() => {
  const el = trackRef.current;
  if (!el) return;
  const onWheel = (e: WheelEvent) => {
    const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
    if (isHorizontal) {
      // Scroll horizontal trackpad → intercept langsung
      e.preventDefault();
      el.scrollLeft += e.deltaX;
    } else {
      // Scroll vertikal → hanya intercept kalau carousel masih bisa gerak
      const canScroll =
        (e.deltaY > 0 && el.scrollLeft < el.scrollWidth - el.clientWidth - 8) ||
        (e.deltaY < 0 && el.scrollLeft > 8);
      if (canScroll) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
      // Kalau tidak bisa scroll lagi → event bubble ke halaman (scroll vertikal normal)
    }
  };
  el.addEventListener("wheel", onWheel, { passive: false });
  return () => el.removeEventListener("wheel", onWheel);
}, []);

  const cancelMomentum = () => { if (momentumFrame.current) cancelAnimationFrame(momentumFrame.current); };

  const applyMomentum = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    velocity.current *= 0.92;
    if (Math.abs(velocity.current) < 0.5) return;
    el.scrollLeft += velocity.current;
    momentumFrame.current = requestAnimationFrame(applyMomentum);
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    cancelMomentum();
    setIsDragging(true);
    dragStartX.current = e.clientX;
    scrollStartX.current = trackRef.current?.scrollLeft ?? 0;
    lastX.current = e.clientX;
    velocity.current = 0;
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    velocity.current = lastX.current - e.clientX;
    lastX.current = e.clientX;
    trackRef.current.scrollLeft = scrollStartX.current + (dragStartX.current - e.clientX);
  }, [isDragging]);

  const onMouseUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    momentumFrame.current = requestAnimationFrame(applyMomentum);
  }, [isDragging, applyMomentum]);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => { window.removeEventListener("mousemove", onMouseMove); window.removeEventListener("mouseup", onMouseUp); };
  }, [onMouseMove, onMouseUp]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = trackRef.current;
      if (!el) return;
      if (e.key === "ArrowRight") el.scrollBy({ left: 340, behavior: "smooth" });
      if (e.key === "ArrowLeft") el.scrollBy({ left: -340, behavior: "smooth" });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollBy = (dir: number) => { trackRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" }); };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 48, scale: 0.94 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 220, damping: 26 } },
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full overflow-hidden"
      style={{
        background: "transparent", // ← transparan, star background terlihat
        padding: "80px 0 96px",
        minHeight: 720,
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 40% at 50% 100%, color-mix(in oklch, var(--primary) 6%, transparent) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
          style={{ 
            maxWidth: 640,
            paddingLeft: "max(32px, calc((100vw - 1200px) / 2))" 
          }}
        >
        <p className="text-xs font-medium tracking-[0.22em] uppercase mb-3" style={{ color: "var(--primary)" }}>
          Selected Work
        </p>
        <h2
          className="font-semibold"
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--foreground)",
          }}
        >
          Projects that define
          <br />
          <span style={{ color: "var(--muted-foreground)" }}>a new standard.</span>
        </h2>
      </motion.div>

      {/* Carousel + nav */}
      <div className="relative">
        <NavButton direction="left" onClick={() => scrollBy(-1)} visible={canScrollLeft} />
        <NavButton direction="right" onClick={() => scrollBy(1)} visible={canScrollRight} />

        {/* Edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--background), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--background), transparent)" }} />

        {/* Scrollable track */}
        <motion.div
          ref={trackRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          onMouseDown={onMouseDown}
          className="flex gap-5 overflow-x-auto overflow-y-hidden"
          style={{
            paddingLeft: "max(32px, calc((100vw - 1200px) / 2))",
            paddingRight: "max(32px, calc((100vw - 1200px) / 2))",
            paddingBottom: 24,
            paddingTop: 8,
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>
          {projects.map((project, i) => (
            <motion.div key={project.slug} variants={cardVariants} style={{ scrollSnapAlign: "start", flexShrink: 0 }}>
              <ProjectCard
                project={project}
                index={i}
                isHovered={hoveredSlug === project.slug}
                onHover={setHoveredSlug}
                onLeave={() => setHoveredSlug(null)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex justify-center gap-1.5 mt-8"
      >
        {projects.map((project) => {
          const isActive = hoveredSlug === project.slug;
          return (
            <div
              key={project.slug}
              className="rounded-full transition-all duration-300"
              style={{
                width: isActive ? 20 : 4,
                height: 4,
                background: isActive ? "var(--primary)" : "var(--border)",
              }}
            />
          );
        })}
      </motion.div>
    </section>
  );
}