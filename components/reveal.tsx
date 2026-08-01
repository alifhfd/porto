"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealVariant = "up" | "down" | "left" | "right" | "zoom" | "fade";

interface RevealProps {
  children: ReactNode;
  /** jeda dalam milidetik */
  delay?: number;
  variant?: RevealVariant;
  /** berapa persen elemen harus terlihat sebelum animasi jalan (0-1) */
  amount?: number;
  /** intensitas blur awal dalam px, set 0 untuk mematikan efek blur */
  blur?: number;
  className?: string;
  as?: ElementType;
}

const OFFSET: Record<RevealVariant, { y: string; x: string; scale: string }> = {
  up: { y: "30px", x: "0", scale: "1" },
  down: { y: "-30px", x: "0", scale: "1" },
  left: { y: "0", x: "36px", scale: "1" },
  right: { y: "0", x: "-36px", scale: "1" },
  zoom: { y: "16px", x: "0", scale: "0.94" },
  fade: { y: "0", x: "0", scale: "1" },
};

/**
 * Pembungkus animasi scroll.
 * Sengaja tanpa library animasi: hanya IntersectionObserver + transition CSS,
 * dan observer langsung diputus setelah terpicu sekali.
 */
export function Reveal({
  children,
  delay = 0,
  variant = "up",
  amount = 0.15,
  blur = 8,
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
      const t = window.setTimeout(() => setVisible(true), 60);
      return () => window.clearTimeout(t);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: amount, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [amount]);

  const o = OFFSET[variant];

  return (
    <Tag
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={
        {
          "--reveal-x": o.x,
          "--reveal-y": o.y,
          "--reveal-scale": o.scale,
          "--reveal-blur": `${blur}px`,
          "--reveal-delay": `${delay}ms`,
        } as React.CSSProperties
      }
    >
      {children}
    </Tag>
  );
}

/**
 * Bungkus banyak anak sekaligus dengan jeda bertingkat.
 * Jeda dijaga di rentang 70-140ms supaya tidak terasa lambat.
 */
export function RevealGroup({
  children,
  step = 90,
  start = 0,
  variant = "up",
  blur = 8,
  className,
}: {
  children: ReactNode[];
  step?: number;
  start?: number;
  variant?: RevealVariant;
  blur?: number;
  className?: string;
}) {
  return (
    <>
      {children.map((child, i) => (
        <Reveal
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          delay={start + i * step}
          variant={variant}
          blur={blur}
          className={className}
        >
          {child}
        </Reveal>
      ))}
    </>
  );
}