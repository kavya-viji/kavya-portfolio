"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function Carousel({
  children,
  className = "",
  showDots = true,
}: {
  children: ReactNode[];
  className?: string;
  showDots?: boolean;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync initial carousel position on mount
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={className}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">
          {children.map((child, i) => (
            <div key={i} className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_60%] lg:flex-[0_0_38%]">
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        {showDots ? (
          <div className="flex gap-2">
            {children.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === selectedIndex
                    ? "w-6 bg-gradient-to-r from-accent-from to-accent-to"
                    : "w-1.5 bg-surface-border"
                }`}
              />
            ))}
          </div>
        ) : (
          <span />
        )}

        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-foreground transition-colors hover:border-accent-via/60 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-foreground transition-colors hover:border-accent-via/60 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
