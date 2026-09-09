"use client";

import { motion } from "framer-motion";

export function BrowserMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-surface-border bg-background-alt shadow-xl">
      <div className="flex items-center gap-1.5 border-b border-surface-border bg-surface px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-3 truncate rounded-md bg-background px-3 py-1 font-mono text-[10px] text-muted">
          gym-management.app/dashboard
        </span>
      </div>

      <div className="grid grid-cols-[2.2rem_1fr] gap-3 p-4">
        <div className="flex flex-col items-center gap-3 rounded-xl bg-surface py-3">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`h-4 w-4 rounded-md ${
                i === 0
                  ? "bg-gradient-to-br from-accent-from to-accent-to"
                  : "bg-surface-border"
              }`}
            />
          ))}
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {["Members", "Active", "Revenue"].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-lg border border-surface-border bg-surface p-2.5"
              >
                <p className="text-[9px] uppercase tracking-wide text-muted">{label}</p>
                <p className="mt-1 text-sm font-bold text-foreground">
                  {i === 0 ? "482" : i === 1 ? "96%" : "₹2.1L"}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="rounded-lg border border-surface-border bg-surface p-3">
            <div className="mb-2 flex items-end gap-1.5 h-16">
              {[40, 65, 30, 80, 55, 95, 70].map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
                  className="flex-1 rounded-sm bg-gradient-to-t from-accent-from to-accent-to"
                />
              ))}
            </div>
            <p className="font-mono text-[9px] text-muted">weekly check-ins</p>
          </div>

          <div className="space-y-1.5">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-lg border border-surface-border bg-surface p-2"
              >
                <span className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-accent-via to-accent-to" />
                <div className="flex-1 space-y-1">
                  <span className="block h-1.5 w-2/3 rounded bg-surface-border" />
                  <span className="block h-1.5 w-1/3 rounded bg-surface-border" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
