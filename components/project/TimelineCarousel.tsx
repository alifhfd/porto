"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import {
  Database,
  Wrench,
  BarChart2,
  Layout,
  Lightbulb,
  Cpu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { TimelinePhase } from "@/types/project";

const iconMap: Record<string, React.ElementType> = {
  Database,
  Wrench,
  BarChart2,
  Layout,
  Lightbulb,
  Brain: Cpu, // Brain doesn't exist in older lucide-react, use Cpu instead
  Cpu,
};

interface TimelineCarouselProps {
  timeline: TimelinePhase[];
}

export default function TimelineCarousel({ timeline }: TimelineCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-28 bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3 font-mono">
            05 — Project Timeline
          </p>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight mb-2">
                How This Project Came Together
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-xl">
                Each phase builds on the last — from raw file to executive insight.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
        <div className="flex gap-4 px-6 md:px-12">
          {timeline.map((phase, i) => {
            const Icon = iconMap[phase.icon] ?? Database;
            const isActive = i === selectedIndex;

            return (
              <motion.div
                key={i}
                animate={{
                  scale: isActive ? 1 : 0.92,
                  opacity: isActive ? 1 : 0.55,
                }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex-none w-[300px] md:w-[360px]"
                onClick={() => emblaApi?.scrollTo(i)}
              >
                <div
                  className={`relative p-7 rounded-3xl h-full border transition-all duration-300 ${
                    isActive
                      ? "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 shadow-xl shadow-black/5 dark:shadow-black/30"
                      : "bg-neutral-100 dark:bg-neutral-900/50 border-neutral-200/50 dark:border-neutral-800"
                  }`}
                >
                  <span className="absolute top-6 right-7 text-5xl font-black text-neutral-100 dark:text-neutral-800 select-none leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-6 ${
                      isActive
                        ? "bg-neutral-900 dark:bg-white"
                        : "bg-neutral-200 dark:bg-neutral-800"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isActive
                          ? "text-white dark:text-neutral-900"
                          : "text-neutral-500 dark:text-neutral-400"
                      }`}
                    />
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3 leading-tight">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {phase.description}
                  </p>

                  {phase.image && isActive && (
                    <div className="mt-6 rounded-xl overflow-hidden aspect-video bg-neutral-100 dark:bg-neutral-800">
                      <img
                        src={phase.image}
                        alt={phase.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-1.5 mt-8 px-6">
        {timeline.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === selectedIndex
                ? "w-6 h-2 bg-neutral-900 dark:bg-white"
                : "w-2 h-2 bg-neutral-300 dark:bg-neutral-700"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
