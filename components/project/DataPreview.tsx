"use client";

import { motion } from "framer-motion";
import { Table } from "lucide-react";
import { TablePreview } from "@/types/project";

interface DataPreviewProps {
  tablePreview: TablePreview;
}

export default function DataPreview({ tablePreview }: DataPreviewProps) {
  const { headers, rows } = tablePreview;

  return (
    <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3 font-mono">
          04 — Data Preview
        </p>
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight mb-2">
              Dataset Preview
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm flex items-center gap-1.5">
              <Table className="w-3.5 h-3.5" />
              Showing first {rows.length} rows only
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                {headers.map((header) => (
                  <th
                    key={header}
                    className="sticky top-0 px-4 py-3.5 text-left text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider whitespace-nowrap bg-neutral-50 dark:bg-neutral-900"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-neutral-950 divide-y divide-neutral-100 dark:divide-neutral-900">
              {rows.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className="hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors"
                >
                  {row.map((cell, cellIdx) => (
                    <td
                      key={cellIdx}
                      className="px-4 py-3 text-neutral-700 dark:text-neutral-300 whitespace-nowrap font-mono text-xs"
                    >
                      {String(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}
