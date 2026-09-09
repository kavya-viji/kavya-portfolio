"use client";

import { useEffect, useRef, useState } from "react";

export function useTypewriter(text: string, options?: { speed?: number; start?: boolean }) {
  const speed = options?.speed ?? 14;
  const start = options?.start ?? true;
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!start) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- sync final state for reduced-motion users
      setDisplayed(text);
      setDone(true);
      return;
    }

    indexRef.current = 0;
    setDisplayed("");
    setDone(false);

    const interval = setInterval(() => {
      indexRef.current += 1;
      setDisplayed(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, start, speed]);

  return { displayed, done };
}
