'use client';
import Link from 'next/link';
import type { Region } from '@/data/types';
import { TriChips } from '@/components/TriChips';
import { formatNumber } from '@/lib/format';

interface Props {
  region: Region;
  variant: 'floating' | 'sheet';
  style?: React.CSSProperties;
  onClose: () => void;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
}

export function RegionPreviewCard({ region, variant, style, onClose, onPointerEnter, onPointerLeave }: Props) {
  const sheet = variant === 'sheet';
  return (
    <div
      role="dialog"
      aria-label={`${region.name} preview`}
      data-testid="region-card"
      style={style}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      className={
        sheet
          ? 'glass-strong fixed inset-x-0 bottom-0 z-50 max-h-[78dvh] overflow-y-auto rounded-t-3xl p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-2xl'
          : 'glass-strong fixed z-50 w-[340px] rounded-[var(--radius-card)] p-5 shadow-2xl shadow-black/40'
      }
    >
      {sheet && <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/20" aria-hidden />}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl leading-tight text-text">{region.name}</h3>
        {sheet && (
          <button type="button" onClick={onClose} aria-label="Close preview" className="-mr-1 rounded-full p-1.5 text-muted hover:bg-white/10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        )}
      </div>
      <p className="mt-1 text-xs text-muted">{region.provinces}</p>

      <p className="mt-4 text-[13px] uppercase tracking-[0.18em] text-muted">Tri-People composition</p>
      <div className="mt-2"><TriChips tri={region.triPeople} compact /></div>

      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-lg bg-white/5 p-2.5">
          <dt className="text-[13px] uppercase tracking-wider text-muted">Population ({region.population.year})</dt>
          <dd className="mt-0.5 font-semibold tabular-nums">{formatNumber(region.population.value)}</dd>
        </div>
        <div className="rounded-lg bg-white/5 p-2.5">
          <dt className="text-[13px] uppercase tracking-wider text-muted">Languages</dt>
          <dd className="mt-0.5 leading-snug">{region.languages.slice(0, 3).join(', ')}</dd>
        </div>
      </dl>

      <p className="mt-4 border-l-2 border-gold pl-3 text-[13px] leading-relaxed text-text">{region.culturalMarker}</p>

      <Link
        href={`/regions/${region.slug}`}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-gold-soft"
      >
        Explore Deep Dive →
      </Link>
    </div>
  );
}
