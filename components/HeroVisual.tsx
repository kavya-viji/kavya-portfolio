"use client";

import { useRef } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { profile } from "@/lib/data";
import { withBasePath } from "@/lib/basePath";
import { CodeBlock } from "./CodeBlock";
import { FloatingBadge } from "./FloatingBadge";

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 16 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div className="relative mx-auto hidden w-full max-w-sm flex-col items-center gap-7 md:flex">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-[4/5] w-[85%]"
        style={{ perspective: 1000 }}
      >
        <div className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent-from via-accent-via to-accent-to opacity-30 blur-3xl" />

        <motion.div
          style={{ rotateX, rotateY }}
          whileHover={{ scale: 1.02 }}
          className="gradient-border absolute inset-0 overflow-hidden rounded-[2rem] bg-surface shadow-2xl"
        >
          <Image
            src={withBasePath(profile.photoUrl)}
            alt={profile.name}
            fill
            priority
            sizes="(max-width: 768px) 0px, 340px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </motion.div>

        <FloatingBadge className="-left-8 top-8" delay={0.6}>
          <span aria-hidden>⚛️</span> React & Next.js
        </FloatingBadge>
        <FloatingBadge className="-right-6 top-1/2" delay={1.1} duration={4.5}>
          <span aria-hidden>♿</span> A11y-first
        </FloatingBadge>
        <FloatingBadge className="-left-6 bottom-10" delay={0.85} duration={3.6}>
          <span aria-hidden>✨</span> AI-native
        </FloatingBadge>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="gradient-border w-full rounded-2xl bg-surface/95 shadow-2xl backdrop-blur-sm"
      >
        <CodeBlock />
      </motion.div>
    </div>
  );
}
