"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { heroCode } from "@/lib/data";
import { useTypewriter } from "@/lib/useTypewriter";

function formatValue(value: string | string[] | boolean): string {
  if (Array.isArray(value)) {
    return `[${value.map((v) => `"${v}"`).join(", ")}]`;
  }
  if (typeof value === "boolean") return String(value);
  return `"${value}"`;
}

function buildRawText() {
  const lines = [`const ${heroCode.varName} = {`];
  heroCode.fields.forEach((field) => {
    lines.push(`  ${field.key}: ${formatValue(field.value)},`);
  });
  lines.push("};");
  return lines.join("\n");
}

export function CodeBlock() {
  const rawText = useMemo(() => buildRawText(), []);
  const { displayed, done } = useTypewriter(rawText, { speed: 12 });
  const [activeField, setActiveField] = useState<string | null>(null);

  return (
    <div className="p-5 font-mono text-[12px] leading-6">
      {!done ? (
        <pre className="whitespace-pre-wrap text-muted">
          {displayed}
          <span className="animate-pulse text-accent-via">▍</span>
        </pre>
      ) : (
        <div>
          <p>
            <span className="text-accent-via">const</span>{" "}
            <span className="text-foreground">{heroCode.varName}</span> = {"{"}
          </p>
          {heroCode.fields.map((field) => {
            const value = field.value;
            return (
              <motion.p
                key={field.key}
                onMouseEnter={() => setActiveField(field.key)}
                onMouseLeave={() => setActiveField(null)}
                className={`pl-4 transition-colors ${
                  activeField === field.key ? "text-foreground" : "text-muted"
                }`}
              >
                <span className="text-accent-to">{field.key}</span>:{" "}
                {Array.isArray(value) ? (
                  <span>
                    [
                    {value.map((item, i) => (
                      <span key={item}>
                        <motion.span
                          whileHover={{ y: -2, scale: 1.05 }}
                          className="inline-block cursor-default text-emerald-400"
                        >
                          &quot;{item}&quot;
                        </motion.span>
                        {i < value.length - 1 && ", "}
                      </span>
                    ))}
                    ]
                  </span>
                ) : typeof value === "boolean" ? (
                  <span className="text-accent-from">{String(value)}</span>
                ) : (
                  <span className="text-amber-400">&quot;{value}&quot;</span>
                )}
                ,
              </motion.p>
            );
          })}
          <p>{"}"};</p>
        </div>
      )}
    </div>
  );
}
