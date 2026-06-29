"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

interface BusinessProblemProps {
  problems: string[];
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
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="group relative p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                  <HelpCircle className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {problem}
                </p>
              </div>

              {/* Number accent */}
              <span className="absolute top-4 right-5 text-4xl font-black text-neutral-100 dark:text-neutral-800 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
