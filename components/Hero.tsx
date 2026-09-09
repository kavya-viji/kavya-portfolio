"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { withBasePath } from "@/lib/basePath";
import { GithubIcon, LinkedinIcon } from "./icons";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pt-10 pb-28 md:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-80 w-80 animate-blob rounded-full bg-accent-from/30 blur-3xl" />
        <div className="animation-delay-2000 absolute top-1/3 -right-24 h-96 w-96 animate-blob rounded-full bg-accent-via/25 blur-3xl" />
        <div className="animation-delay-4000 absolute -bottom-24 left-1/3 h-80 w-80 animate-blob rounded-full bg-accent-to/25 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-4"
          >
            <motion.div
              whileHover={{ rotate: 4, scale: 1.05 }}
              className="gradient-border relative h-14 w-14 shrink-0 overflow-hidden rounded-full md:hidden"
            >
              <Image
                src={profile.photoUrl}
                alt={profile.name}
                fill
                priority
                sizes="56px"
                className="object-cover"
              />
            </motion.div>
            <div className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-4 py-1.5 text-xs font-medium text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to new opportunities
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-2 font-mono text-sm text-accent-via"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-3 text-xl font-semibold text-foreground sm:text-2xl"
          >
            {profile.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-1 font-mono text-sm text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-accent-from via-accent-via to-accent-to px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-via/20 transition-transform hover:scale-[1.03]"
            >
              View Projects
            </a>
            <a
              href={withBasePath(profile.resumeUrl)}
              download
              className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent-via/60"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-8 flex items-center gap-4"
          >
            {[
              { icon: GithubIcon, href: profile.github, label: "GitHub" },
              { icon: LinkedinIcon, href: profile.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border text-muted transition-colors hover:border-accent-via/60 hover:text-foreground"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>

        <HeroVisual />
      </div>

      <motion.a
        href="#skills"
        aria-label="Scroll to skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 0.8 }, y: { duration: 1.6, repeat: Infinity } }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted sm:block"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
