"use client";

import { motion } from "framer-motion";
import { ExternalLink, Maximize2 } from "lucide-react";
import { Project } from "@/types/project";

interface DashboardProps {
  project: Project;
}

export default function Dashboard({ project }: DashboardProps) {
  return (
    <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3 font-mono">
          06 — Final Dashboard
        </p>
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight mb-2">
              The Finished Dashboard
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-xl">
              Built for decision-makers, not data scientists. Every visual is designed to answer a business question in under 5 seconds.
            </p>
          </div>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-semibold rounded-full hover:opacity-80 transition-opacity"
            >
              <ExternalLink className="w-4 h-4" />
              View Full Dashboard
            </a>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="group relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl shadow-black/10 dark:shadow-black/40 cursor-zoom-in"
      >
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white">
            <Maximize2 className="w-3.5 h-3.5" />
            View full size
          </div>
        </div>

        {/* Image or placeholder */}
        {project.dashboardImage && project.dashboardImage.startsWith("/images") ? (
          <div className="aspect-[16/9] bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 flex items-center justify-center">
            <p className="text-neutral-400 dark:text-neutral-600 text-sm">
              Dashboard preview — {project.dashboardImage}
            </p>
          </div>
        ) : (
          <img
            src={project.dashboardImage}
            alt={`${project.title} dashboard`}
            className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
          />
        )}
      </motion.div>
    </section>
  );
}
