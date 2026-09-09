"use client";

import { motion } from "framer-motion";
import { ChefHat, Flower2, Scissors } from "lucide-react";
import { hobbies, type Hobby } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<Hobby["icon"], typeof ChefHat> = {
  cooking: ChefHat,
  craft: Scissors,
  Mehandi: Flower2,
};

const gradientMap: Record<Hobby["icon"], string> = {
  cooking: "from-amber-400 via-orange-400 to-accent-via",
  craft: "from-accent-from via-accent-via to-pink-400",
  Mehandi: "from-accent-via via-fuchsia-400 to-accent-to",
};

export function BeyondWork() {
  return (
    <section className="overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Off the Clock"
          title="When I'm Not Coding"
          description="A few things that keep the other half of my brain busy."
        />

        <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-14 pt-4">
          {hobbies.map((hobby, i) => {
            const Icon = iconMap[hobby.icon];
            return (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 30, rotate: hobby.rotate }}
                whileInView={{ opacity: 1, y: 0, rotate: hobby.rotate }}
                whileHover={{ rotate: 0, scale: 1.05, y: -8 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-64 shrink-0 rounded-2xl border border-surface-border bg-surface p-3 shadow-xl"
              >
                <div
                  className={`flex h-40 items-center justify-center rounded-xl bg-gradient-to-br ${gradientMap[hobby.icon]}`}
                >
                  <Icon
                    size={52}
                    className="text-white drop-shadow-md"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="px-2 py-4 text-center">
                  <h3 className="text-base font-bold text-foreground">
                    {hobby.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {hobby.blurb}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
