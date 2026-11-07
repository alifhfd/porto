"use client";

import { useRef, type PointerEvent } from "react";
import { motion, useSpring } from "framer-motion";
import { HelpCircle } from "lucide-react";

interface BusinessProblemProps {
  problems: string[];
}

function QuestionCard({ problem, index }: { problem: string; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 260, damping: 24 });
  const rotateY = useSpring(0, { stiffness: 260, damping: 24 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    rotateX.set((0.5 - y) * 7);
    rotateY.set((x - 0.5) * 7);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: "preserve-3d" }}
      className="group relative rounded-2xl border border-neutral-100 bg-white p-6 pb-14 transition-colors duration-200 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/60 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-sky-800"
    >
      <div className="flex items-start gap-4">
        <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
          <HelpCircle className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
        </div>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {problem}
        </p>
      </div>
      <span className="absolute bottom-4 right-5 text-2xl font-black leading-none text-sky-400 select-none pointer-events-none">
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  );
}

export default function BusinessProblem({ problems }: BusinessProblemProps) {
  return (
    <section className="py-28 px-6 md:px-12 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3 font-mono">
            03 — Business Problem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
            Questions This Analysis Answers
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-xl text-base leading-relaxed mb-14">
            Every chart and model was built to answer a specific business question. Here's what we set out to investigate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, i) => (
            <QuestionCard key={i} problem={problem} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
