'use client';
import { useId, useState } from 'react';

/** A small ⓘ button that reveals an explanatory tooltip on hover, focus or tap. */
export function InfoTip({ text, label }: { text: string; label: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <span className="relative inline-block" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-label={label}
        aria-describedby={open ? id : undefined}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="grid size-5 shrink-0 place-items-center rounded-full border border-current font-display text-xs leading-none italic"
      >
        i
      </button>
      {open && (
        <span role="tooltip" id={id} className="absolute bottom-full left-1/2 z-[70] mb-2 block w-64 -translate-x-1/2 border border-[#8a6a3e] bg-[#1c140d] p-3 text-left text-[13px] leading-relaxed not-italic text-[#f3e7d0] shadow-xl">
          {text}
        </span>
      )}
    </span>
  );
}
