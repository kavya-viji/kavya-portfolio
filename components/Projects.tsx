"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink, Sparkles } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { BrowserMockup } from "./BrowserMockup";
import { TiltCard } from "./TiltCard";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Project"
          description="A full-stack build outside the day job — designed, built, and shipped end to end."
        />

        {projects.map((project) => (
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
