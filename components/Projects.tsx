"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, ExternalLink, Rocket, Sparkles } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { BrowserMockup } from "./BrowserMockup";
import { TiltCard } from "./TiltCard";

function WorkCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <TiltCard className="gradient-border flex h-full flex-col rounded-2xl bg-surface p-6">
        {project.company && (
          <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-surface-border bg-background-alt px-2.5 py-1 text-[11px] font-medium text-muted">
            <Briefcase size={11} /> Built at {project.company}
          </span>
        )}
        <h4 className="mb-2 text-lg font-bold text-foreground">{project.name}</h4>
        <p className="mb-4 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mb-5 space-y-2">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-2 text-xs leading-relaxed text-muted">
              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent-via" />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-surface-border bg-background-alt px-2.5 py-1 font-mono text-[11px] text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href="#experience"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-via transition-colors hover:text-accent-to"
          >
            View full case study ↓
          </a>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function Projects() {
  const professional = projects.filter((p) => p.category === "professional");
  const personal = projects.filter((p) => p.category === "personal");

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          description="A mix of product work built as part of my day job, and things I designed and shipped independently."
        />

        <div className="mb-6 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-from to-accent-via text-white">
            <Briefcase size={15} />
          </span>
          <div>
            <h3 className="text-sm font-bold text-foreground">Professional Work</h3>
            <p className="text-xs text-muted">Product features built as part of my engineering role</p>
          </div>
        </div>

        <div className="mb-20 grid gap-6 md:grid-cols-2">
          {professional.map((project, i) => (
            <WorkCard key={project.name} project={project} index={i} />
          ))}
        </div>

        <div className="mb-6 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-via to-accent-to text-white">
            <Rocket size={15} />
          </span>
          <div>
            <h3 className="text-sm font-bold text-foreground">Personal Builds</h3>
            <p className="text-xs text-muted">Independent projects, designed and shipped end to end</p>
          </div>
        </div>

        {personal.map((project) => (
          <div key={project.name} className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              {project.featured && (
                <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-from via-accent-via to-accent-to px-3 py-1 text-xs font-semibold text-white">
                  <Sparkles size={12} /> Personal Build
                </span>
              )}
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                {project.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {project.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {project.highlights.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-via" />
                    {point}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-surface-border bg-surface px-3 py-1 font-mono text-xs text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-from via-accent-via to-accent-to px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-via/20 transition-transform hover:scale-[1.03]"
                >
                  View Live Project <ExternalLink size={15} />
                </a>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <TiltCard>
                <BrowserMockup />
              </TiltCard>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
