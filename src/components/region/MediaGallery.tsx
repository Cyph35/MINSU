'use client';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import type { MediaItem } from '@/data/types';

function LinkCard({ item }: { item: MediaItem }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface to-ink-2 p-4 text-center transition-colors hover:from-surface-2"
    >
      <span className="grid size-12 place-items-center rounded-full border border-gold/40 text-gold" aria-hidden>
        {item.kind === 'audio' ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        )}
      </span>
      <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-gold group-hover:underline">{item.linkLabel} ↗</span>
    </a>
  );
}

export function MediaGallery({ items }: { items: MediaItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [broken, setBroken] = useState<Set<number>>(new Set());
  const viewable = items.map((m, i) => ({ m, i })).filter(({ m, i }) => m.kind === 'image' && m.src && !broken.has(i));
  const step = useCallback((d: number) => {
    setOpen((cur) => {
      if (cur === null) return cur;
      const pos = viewable.findIndex((v) => v.i === cur);
      return viewable[(pos + d + viewable.length) % viewable.length].i;
    });
  }, [viewable]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, step]);

  const current = open !== null ? items[open] : null;
  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((m, i) => {
          const isImage = m.kind === 'image' && m.src && !broken.has(i);
          return (
            <li key={i} className="glass overflow-hidden rounded-[var(--radius-card)]" data-testid="gallery-item">
              <figure>
                <div className="relative aspect-[4/3]">
                  {isImage ? (
                    <button type="button" className="group absolute inset-0 cursor-zoom-in" onClick={() => setOpen(i)} aria-label={`Open image: ${m.caption}`}>
                      <Image src={m.src!} alt={m.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="plate-img object-cover transition duration-500 group-hover:scale-[1.03]" onError={() => setBroken((b) => new Set(b).add(i))} />
                    </button>
                  ) : (
                    <LinkCard item={m} />
                  )}
                </div>
                <figcaption className="p-4">
                  <p className="text-sm leading-snug">{m.caption}</p>
                  <p className="mt-1.5 text-[13px] text-muted">
                    {m.href ? m.credit : <>© {m.credit} · {m.license}{m.sourceUrl && <> · <a href={m.sourceUrl} target="_blank" rel="noreferrer" className="underline hover:text-text">source</a></>}</>}
                  </p>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
      {current && current.src && (
        <div role="dialog" aria-modal="true" aria-label={current.caption} className="fixed inset-0 z-[60] flex flex-col bg-black/90 p-4 backdrop-blur" onClick={() => setOpen(null)}>
          <div className="flex justify-end gap-2">
            <button type="button" className="rounded-full bg-white/10 px-3 py-1.5 text-sm" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous image">←</button>
            <button type="button" className="rounded-full bg-white/10 px-3 py-1.5 text-sm" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next image">→</button>
            <button type="button" className="rounded-full bg-white/10 px-3 py-1.5 text-sm" onClick={() => setOpen(null)} aria-label="Close">✕</button>
          </div>
          <div className="relative my-4 flex-1" onClick={(e) => e.stopPropagation()}>
            <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
          </div>
          <p className="mx-auto max-w-3xl text-center text-sm text-text" onClick={(e) => e.stopPropagation()}>
            {current.caption} <span className="text-muted">— © {current.credit} · {current.license}</span>
          </p>
        </div>
      )}
    </>
  );
}
