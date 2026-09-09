"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BrainCircuit,
  MessagesSquare,
  FlaskConical,
  Globe2,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { languages, learningJourney, type MilestoneIcon } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<MilestoneIcon, LucideIcon> = {
  graduation: GraduationCap,
  brain: BrainCircuit,
  prompt: MessagesSquare,
  testing: FlaskConical,
  webflow: Globe2,
  growth: TrendingUp,
};

function NodeIcon({ icon }: { icon: MilestoneIcon }) {
  const Icon = iconMap[icon];
  return (
    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-via/30" />
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-accent-from via-accent-via to-accent-to text-white shadow-lg">
        <Icon size={16} />
      </span>
    </div>
  );
}

export function LearningJourney() {
  return (
    <section className="bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Beyond the Degree"
          title="A Learning Journey, Still In Progress"
          description="Formal education kicked things off — everything since has been self-directed, one skill at a time."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute top-2 bottom-2 left-[19px] w-px bg-gradient-to-b from-accent-from via-accent-via to-accent-to md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {learningJourney.map((milestone, i) => {
              const alignRight = i % 2 === 1;
              return (
                <div
                  key={milestone.title}
                  className={`relative flex items-start gap-5 md:gap-0 ${
                    alignRight ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className="relative z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <NodeIcon icon={milestone.icon} />
                  </div>

                  <div className="hidden md:block md:w-1/2" />

                  <motion.div
                    initial={{ opacity: 0, x: alignRight ? 24 : -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                    className={`min-w-0 flex-1 md:w-1/2 ${
                      alignRight ? "md:pr-10 md:text-right" : "md:pl-10"
                    }`}
                  >
                    <div className="gradient-border inline-block w-full rounded-2xl bg-surface p-5 text-left">
                      <h3 className="text-sm font-bold text-foreground">{milestone.title}</h3>
                      {milestone.subtitle && (
                        <p className="mt-1 text-xs font-medium text-accent-via">
                          {milestone.subtitle}
                          {milestone.period ? ` · ${milestone.period}` : ""}
                        </p>
                      )}
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 flex max-w-md flex-wrap items-center justify-center gap-3"
        >
          {languages.map((lang) => (
            <span
              key={lang.name}
              className="rounded-full border border-surface-border bg-surface px-4 py-1.5 text-xs font-medium text-muted"
            >
              {lang.name} <span className="text-foreground/70">· {lang.level}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
