"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="border-y border-surface-border bg-surface/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <p className="gradient-text text-3xl font-bold sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs font-medium tracking-wide text-muted sm:text-sm">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
