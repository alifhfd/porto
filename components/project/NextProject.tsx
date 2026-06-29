"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Project } from "@/types/project";

interface NextProjectProps {
  prev: Project | null;
  next: Project | null;
}

function ProjectCard({
  project,
  direction,
}: {
  project: Project;
  direction: "prev" | "next";
}) {
  const isNext = direction === "next";

  return (
    <Link href={`/projects/${project.slug}`} className="group block flex-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-xl dark:hover:shadow-black/40"
      >
        {/* Image */}
        <div className="relative aspect-[16/7] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          {project.coverImage && !project.coverImage.startsWith("/images") ? (
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-700 group-hover:scale-105 transition-transform duration-500" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Label */}
          <div
            className={`absolute top-4 ${isNext ? "right-4" : "left-4"} flex items-center gap-1.5 text-xs text-white/70 font-medium`}
          >
            {!isNext && <ArrowLeft className="w-3.5 h-3.5" />}
            <span className="uppercase tracking-widest font-mono">
              {isNext ? "Next Project" : "Previous Project"}
            </span>
            {isNext && <ArrowRight className="w-3.5 h-3.5" />}
          </div>

          {/* Title */}
          <div className={`absolute bottom-5 ${isNext ? "right-5 text-right" : "left-5"} pr-4`}>
            <p className="text-white font-bold text-xl leading-tight mb-1">
              {project.title}
            </p>
            <p className="text-white/60 text-sm line-clamp-1">{project.subtitle}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function NextProject({ prev, next }: NextProjectProps) {
  if (!prev && !next) return null;

  return (
    <section className="py-28 px-6 md:px-12 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3 font-mono">
            09 — More Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Keep Exploring
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4">
          {prev && <ProjectCard project={prev} direction="prev" />}
          {next && <ProjectCard project={next} direction="next" />}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
