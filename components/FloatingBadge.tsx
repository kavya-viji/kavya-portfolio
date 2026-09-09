"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function FloatingBadge({
  children,
  className = "",
  delay = 0,
  duration = 4,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={`absolute z-20 flex items-center gap-1.5 rounded-full border border-surface-border bg-surface/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-lg backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}
