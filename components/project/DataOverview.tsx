"use client";

import { motion } from "framer-motion";
import { Database, FileText, Scale, Download, Grid, Layers } from "lucide-react";
import { DatasetInfo } from "@/types/project";

interface DataOverviewProps {
  dataset: DatasetInfo;
}

const metaItems = (dataset: DatasetInfo) => [
  { icon: Database, label: "Dataset", value: dataset.name },
  { icon: FileText, label: "Source", value: dataset.source },
  { icon: Layers, label: "Rows", value: dataset.rows.toLocaleString() },
  { icon: Grid, label: "Columns", value: dataset.columns.toString() },
  { icon: FileText, label: "Format", value: dataset.fileFormat },
  ...(dataset.license ? [{ icon: Scale, label: "License", value: dataset.license }] : []),
];

export default function DataOverview({ dataset }: DataOverviewProps) {
  const items = metaItems(dataset);

  return (
    <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3 font-mono">
          02 — Data Overview
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
          About the Dataset
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 max-w-xl text-base leading-relaxed mb-14">
          Real-world data sourced directly from a public repository. No synthetic records — every row reflects actual transactions.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-neutral-200 dark:hover:border-neutral-700 transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-3">
              <item.icon className="w-4 h-4 text-neutral-400" />
              <span className="text-xs text-neutral-400 font-medium uppercase tracking-wide">
                {item.label}
              </span>
            </div>
            <p className="text-lg font-semibold text-neutral-900 dark:text-white leading-tight">
              {item.value}
            </p>
          </motion.div>
        ))}
      </div>

      {dataset.downloadUrl && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8"
        >
          <a
            href={dataset.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-semibold rounded-full hover:opacity-80 transition-opacity"
          >
            <Download className="w-4 h-4" />
            Download Dataset
          </a>
        </motion.div>
      )}
    </section>
  );
}
