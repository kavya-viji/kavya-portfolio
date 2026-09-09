"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Code2,
  GitBranch,
  Plug,
  Server,
  Shield,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skillGroups, type SkillIcon } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<SkillIcon, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  state: GitBranch,
  api: Plug,
  practices: Shield,
  tools: Wrench,
  ai: Sparkles,
};

export function Skills() {
  const [active, setActive] = useState<string>("All");

  const visibleSkills = useMemo(() => {
    const groups = active === "All" ? skillGroups : skillGroups.filter((g) => g.category === active);
    const seen = new Set<string>();
    const list: { skill: string; color: string }[] = [];
    groups.forEach((group) => {
      group.skills.forEach((skill) => {
        const key = `${skill}`;
        if (seen.has(key)) return;
        seen.add(key);
        list.push({ skill, color: group.color });
      });
    });
    return list;
  }, [active]);

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills & Technologies"
          description="Pick a category to filter — or browse everything I reach for when building a product end to end."
        />

        <div className="mb-10 flex flex-wrap items-start justify-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={() => setActive("All")}
            className="group flex w-20 shrink-0 flex-col items-center gap-2"
          >
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all ${
                active === "All"
                  ? "border-transparent bg-gradient-to-br from-accent-from via-accent-via to-accent-to text-white shadow-lg"
                  : "border-surface-border bg-surface text-muted group-hover:text-foreground"
              }`}
            >
              <Sparkles size={20} />
            </span>
            <span
              className={`flex h-8 w-full items-start justify-center text-center text-xs font-semibold leading-tight ${
                active === "All" ? "text-foreground" : "text-muted"
              }`}
            >
              All
            </span>
          </button>

          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon];
            const isActive = active === group.category;
            return (
              <button
                key={group.category}
                type="button"
                onClick={() => setActive(group.category)}
                className="group flex w-20 shrink-0 flex-col items-center gap-2"
              >
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border transition-all"
                  style={
                    isActive
                      ? {
                          background: `linear-gradient(135deg, ${group.color}, ${group.color}99)`,
                          borderColor: "transparent",
                          color: "#fff",
                          boxShadow: `0 8px 24px -8px ${group.color}88`,
                        }
                      : undefined
                  }
                >
                  <span
                    className={
                      isActive
                        ? ""
                        : "flex h-full w-full items-center justify-center rounded-2xl border border-surface-border bg-surface text-muted group-hover:text-foreground"
                    }
                  >
                    <Icon size={20} />
                  </span>
                </span>
                <span
                  className={`flex h-8 w-full items-start justify-center text-center text-xs font-semibold leading-tight ${
                    isActive ? "text-foreground" : "text-muted"
                  }`}
                >
                  {group.category}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2.5"
        >
          <AnimatePresence mode="popLayout">
            {visibleSkills.map(({ skill, color }) => (
              <motion.span
                key={skill}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-2 rounded-full border border-surface-border bg-surface px-3.5 py-2 text-xs font-medium text-foreground/90 shadow-sm"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: color }}
                />
                {skill}
              </motion.span>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
