"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./icons";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "kavya-k-1b623918b",
    href: profile.linkedin,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "kavya-viji",
    href: profile.github,
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Something Great"
          description="I'm open to new opportunities and collaborations. Reach out through any of the channels below."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="gradient-border group flex items-center gap-4 rounded-2xl bg-surface p-5 transition-transform hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-from via-accent-via to-accent-to text-white">
                <link.icon size={18} />
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-wide text-muted">
                  {link.label}
                </span>
                <span className="block text-sm font-semibold text-foreground">
                  {link.value}
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
