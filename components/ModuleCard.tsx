"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import type { Module } from "@/lib/data";
import { TiltCard } from "./TiltCard";

export function ModuleCard({ module, index }: { module: Module; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
      className="h-full"
    >
      <TiltCard className="gradient-border flex h-full flex-col rounded-2xl bg-surface p-6">
        <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-from via-accent-via to-accent-to text-white">
          <Layers size={16} />
        </span>
        <h4 className="mb-2 text-base font-bold text-foreground">{module.title}</h4>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
          {module.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {module.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-surface-border bg-background-alt px-2.5 py-1 font-mono text-[11px] text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </TiltCard>
    </motion.div>
  );
}
