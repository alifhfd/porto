"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { motion, useSpring } from "framer-motion";

interface TiltGlowCardProps {
  children: ReactNode;
  className: string;
}

export default function TiltGlowCard({ children, className }: TiltGlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 260, damping: 24 });
  const rotateY = useSpring(0, { stiffness: 260, damping: 24 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    rotateX.set((0.5 - y) * 6);
    rotateY.set((x - 0.5) * 6);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className="h-full" style={{ perspective: 1000 }}>
      <motion.div
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
        whileHover={{ y: -4, boxShadow: "0 18px 48px rgba(14,165,233,0.2)" }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
