import type { Metadata } from 'next';
import Link from 'next/link';
import { triPeople } from '@/data/triPeople';
import { CiteLinks } from '@/components/CiteLinks';
import { regions } from '@/data/regions';

export const metadata: Metadata = { title: 'The Tri-People', description: 'Filipino Muslims, Indigenous Peoples and Migrant-Settlers of Mindanao, Sulu and Palawan.' };

const ACCENT = { moro: 'text-moro border-moro', lumad: 'text-lumad border-lumad', settler: 'text-settler border-settler' } as const;

export default function TriPeoplePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">The Tri-People</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold sm:text-5xl">Three peoples, one shared homeland</h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
        “Tri-People” names the three communities of Mindanao, Sulu and Palawan. They are not walled-off blocs:
        families intermarry, languages mix, and many people belong to more than one story.
      </p>
      <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-2">
        {triPeople.map((p) => (
          <a key={p.id} href={`#${p.id}`} className={`rounded-full border px-4 py-2 text-sm ${ACCENT[p.id]} border-opacity-40 hover:bg-white/5`}>{p.title}</a>
        ))}
      </nav>
      {triPeople.map((p) => (
        <section key={p.id} id={p.id} aria-labelledby={`h-${p.id}`} className="mt-16 scroll-mt-24">
          <div className={`border-l-4 pl-5 ${ACCENT[p.id]}`}>
            <p className="text-xs uppercase tracking-[0.25em]">{p.subtitle}</p>
            <h2 id={`h-${p.id}`} className="mt-1 font-display text-3xl font-semibold text-text">{p.title}</h2>
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="prose-kalinaw space-y-4">
              {p.paragraphs.map((para, i) => <p key={i}>{para.text}<CiteLinks ids={para.cite} /></p>)}
            </div>
            <div className="glass rounded-[var(--radius-card)] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Peoples featured in this portal</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.groups.map((g) => <li key={g} className="rounded-full bg-white/5 px-3 py-1 text-sm">{g}</li>)}
              </ul>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted">Found in</p>
              <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                {regions.filter((r) => r.triPeople[p.id].length > 0).map((r) => (
                  <li key={r.slug}><Link href={`/regions/${r.slug}`} className="text-gold hover:underline">{r.shortName}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
