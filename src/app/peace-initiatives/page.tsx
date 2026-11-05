import type { Metadata } from 'next';
import { peaceTimeline, grassroots } from '@/data/peaceTimeline';
import { CiteLinks } from '@/components/CiteLinks';

export const metadata: Metadata = { title: 'Peace Initiatives', description: 'From colonial conflict to the Bangsamoro: a timeline of peace in Mindanao, Sulu and Palawan.' };

const KIND = {
  conflict: { label: 'Conflict', dot: 'bg-oxblood', text: 'text-oxblood' },
  accord: { label: 'Peace accord', dot: 'bg-emerald', text: 'text-emerald' },
  law: { label: 'Law & governance', dot: 'bg-gold', text: 'text-gold' },
  grassroots: { label: 'Grassroots & justice', dot: 'bg-sky', text: 'text-sky' },
} as const;

export default function PeacePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-emerald">Peace Initiatives</p>
      <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">The long road to <span className="text-emerald">kalinaw</span></h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
        Peace in Mindanao has been built on two tracks: agreements and laws negotiated by governments and liberation
        fronts, and everyday peace kept by elders, religious leaders, women and youth in their communities.
      </p>

      <ul className="mt-8 flex flex-wrap gap-4 text-xs" aria-label="Legend">
        {Object.values(KIND).map((k) => (
          <li key={k.label} className="flex items-center gap-2 text-muted"><span className={`size-2.5 rounded-full ${k.dot}`} />{k.label}</li>
        ))}
      </ul>

      <ol className="relative mt-10 border-l border-line pl-8" aria-label="Peace process timeline">
        {peaceTimeline.map((e) => {
          const k = KIND[e.kind];
          return (
            <li key={e.year + e.title} className="relative mb-10 last:mb-0">
              <span className={`absolute -left-[37px] top-1.5 size-3.5 rounded-full ring-4 ring-ink ${k.dot}`} aria-hidden />
              <p className="font-display text-2xl text-text">{e.year}</p>
              <p className={`text-[13px] uppercase tracking-[0.2em] ${k.text}`}>{k.label}</p>
              <h2 className="mt-1 text-lg font-semibold">{e.title}</h2>
              <p className="mt-1.5 max-w-3xl leading-relaxed text-muted">{e.body}<CiteLinks ids={e.cite} /></p>
            </li>
          );
        })}
      </ol>

      <section className="mt-20" aria-labelledby="grassroots">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Beyond the negotiating table</p>
        <h2 id="grassroots" className="mt-3 font-display text-3xl font-semibold">How communities keep the peace</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {grassroots.map((g) => (
            <li key={g.title} className="glass rounded-[var(--radius-card)] p-6">
              <h3 className="font-display text-xl text-emerald">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{g.body}<CiteLinks ids={g.cite} /></p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
