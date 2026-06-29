"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  AlertTriangle,
  MapPin,
  Percent,
  Users,
  Package,
  DollarSign,
  Clock,
  Lightbulb,
} from "lucide-react";
import { Insight } from "@/types/project";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  AlertTriangle,
  MapPin,
  Percent,
  Users,
  Package,
  DollarSign,
  Clock,
  Lightbulb,
};

interface InsightsProps {
  insights: Insight[];
}

export default function Insights({ insights }: InsightsProps) {
  return (
    <section className="py-28 px-6 md:px-12 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3 font-mono">
            07 — Key Insights
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
            What the Data Reveals
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-xl">
            Six findings that change how you see this business — each one backed by the numbers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {insights.map((insight, i) => {
            const Icon = iconMap[insight.icon] ?? Lightbulb;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.07,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-neutral-200 dark:hover:border-neutral-700 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-5 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
                  <Icon className="w-4.5 h-4.5 text-neutral-600 dark:text-neutral-300" />
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white text-base mb-2">
                  {insight.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {insight.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
