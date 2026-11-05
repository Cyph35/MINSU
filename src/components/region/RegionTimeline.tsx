import type { RegionEvent } from '@/data/types';
import { CiteLinks } from '@/components/CiteLinks';

export function RegionTimeline({ events }: { events: RegionEvent[] }) {
  return (
    <ol aria-label="Regional timeline" className="relative mt-4 border-l border-gold/40 pl-6">
      {events.map((e) => (
        <li key={e.year + e.event} className="relative mb-5 last:mb-0">
          <span className="absolute -left-[29px] top-2 size-2.5 rotate-45 bg-gold" aria-hidden />
          <p className="font-display text-xl text-gold">{e.year}</p>
          <p className="leading-relaxed">{e.event}<CiteLinks ids={e.cite} /></p>
        </li>
      ))}
    </ol>
  );
}
