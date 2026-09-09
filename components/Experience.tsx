"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { ModuleCard } from "./ModuleCard";
import { Carousel } from "./Carousel";

export function Experience() {
  const [activeCompany, setActiveCompany] = useState(0);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  const company = experience[activeCompany];
  const caseStudy = company.caseStudies?.[activeCaseStudy];

  function selectCompany(i: number) {
    setActiveCompany(i);
    setActiveCaseStudy(0);
  }

  return (
    <section id="experience" className="bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="What I've Built"
          title="Experience, Beyond the Bullet Points"
          description="Not just where I worked — the actual modules, features, and engineering problems I shipped."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {experience.map((entry, i) => (
            <button
              key={entry.company}
              type="button"
              onClick={() => selectCompany(i)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                activeCompany === i ? "text-white" : "text-muted hover:text-foreground"
              }`}
            >
              {activeCompany === i && (
                <motion.span
                  layoutId="company-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-from via-accent-via to-accent-to"
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                />
              )}
              <span className="relative">{entry.company}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={company.company}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <div className="mb-8 rounded-2xl border border-surface-border bg-surface p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-foreground">
                  {company.role} <span className="text-accent-via">@ {company.company}</span>
                </h3>
                <span className="rounded-full border border-surface-border px-3 py-1 font-mono text-xs text-muted">
                  {company.period}
                </span>
              </div>
              <p className="mt-1 flex items-center gap-1 text-xs text-muted">
                <MapPin size={13} /> {company.location}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{company.summary}</p>
            </div>

            {company.caseStudies ? (
              <div>
                <div className="mb-6 flex flex-wrap gap-2">
                  {company.caseStudies.map((cs, i) => (
                    <button
                      key={cs.name}
                      type="button"
                      onClick={() => setActiveCaseStudy(i)}
                      className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                        activeCaseStudy === i
                          ? "border-accent-via bg-accent-via/10 text-accent-via"
                          : "border-surface-border text-muted hover:text-foreground"
                      }`}
                    >
                      {cs.name}
                    </button>
                  ))}
                </div>

                {caseStudy && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={caseStudy.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="mb-5 text-sm font-medium text-muted">{caseStudy.tagline}</p>
                      <Carousel>
                        {caseStudy.modules.map((module, i) => (
                          <ModuleCard key={module.title} module={module} index={i} />
                        ))}
                      </Carousel>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            ) : (
              <ul className="space-y-3">
                {company.highlights?.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex gap-2.5 rounded-xl border border-surface-border bg-surface p-4 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-via" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
