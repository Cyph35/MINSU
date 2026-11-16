'use client';
import { useEffect, useRef, useState } from 'react';
import { formatNumber } from '@/lib/format';

/**
 * Rolls a number up from 0 to its real value the first time it scrolls into view
 * (and again whenever `value` changes). Server render, no-JS, reduced-motion and
 * screen readers all get the exact figure.
 */
export function CountUp({ value, duration = 1400 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!el || reduce || typeof IntersectionObserver === 'undefined') {
      setShown(value);
      return;
    }
    let raf = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setShown(Math.round(value * eased));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      setShown(0);
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        run();
      }
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} aria-label={formatNumber(value)}>
      <span aria-hidden>{formatNumber(shown)}</span>
    </span>
  );
}
