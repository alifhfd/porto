"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  List,
  Map,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import { Recommendation } from "@/types/project";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck: Shield,
  Shield,
  Zap,
  ClipboardList: List,
  List,
  Map,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Lightbulb,
};

interface RecommendationsProps {
  recommendations: Recommendation[];
}

export default function Recommendations({ recommendations }: RecommendationsProps) {
  return (
    <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3 font-mono">
          08 — Recommendations
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
          What Should Happen Next
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-xl">
          Insights without action are just trivia. These are the specific moves the business should make — prioritized by impact.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {recommendations.map((rec, i) => {
          const Icon = iconMap[rec.icon] ?? Lightbulb;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative p-7 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:shadow-md dark:hover:shadow-black/30 transition-all duration-300 overflow-hidden"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-300 group-hover:w-1.5"
                style={{ backgroundColor: rec.accentColor }}
              />
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${rec.accentColor}18` }}
              >
                <Icon className="w-5 h-5" style={{ color: rec.accentColor }} />
              </div>
              <h3 className="font-bold text-neutral-900 dark:text-white text-lg mb-3 leading-snug">
                {rec.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {rec.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
