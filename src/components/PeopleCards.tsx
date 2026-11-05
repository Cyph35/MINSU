'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getRegion } from '@/data/regions';

interface Pillar {
  id: 'moro' | 'lumad' | 'settler';
  title: string;
  color: string;
  bar: string;
  body: string;
  /** [story-region slug, gallery index] pairs for the photos revealed on hover */
  photos: [string, number][];
}

const PILLARS: Pillar[] = [
  {
    id: 'moro', title: 'Filipino Muslims', color: 'text-moro', bar: 'bg-moro',
    body: 'Thirteen Islamized ethnolinguistic groups — among them the Meranaw, Maguindanaon, Tausug, Sama and Yakan — heirs to sultanates that governed Mindanao and Sulu for centuries.',
    photos: [['lanao', 3], ['sulu', 5], ['tawi-tawi', 1]],
  },
  {
    id: 'lumad', title: 'Indigenous Peoples (Lumad)', color: 'text-lumad', bar: 'bg-lumad',
    body: 'Dozens of non-Islamized peoples — Teduray, Subanen, Manobo, B’laan, T’boli, Higaonon, Pala’wan, Tagbanwa and many more — with their own lands, laws and spiritual traditions.',
    photos: [['soccsksargen', 6], ['northern-mindanao', 7], ['davao', 7]],
  },
  {
    id: 'settler', title: 'Migrant-Settlers', color: 'text-settler', bar: 'bg-settler',
    body: 'Families from the Visayas and Luzon who arrived in growing waves from the early 1900s and now form the majority in much of Mindanao and Palawan.',
    photos: [['soccsksargen', 4], ['northern-mindanao', 2], ['zamboanga', 4]],
  },
];

/** The three Tri-People cards: hover, focus or tap to unfold a strip of photographs below. */
export function PeopleCards() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <ul className="mt-10 grid items-start gap-4 md:grid-cols-3">
      {PILLARS.map((p) => {
        const isOpen = open === p.id;
        const photos = p.photos.map(([slug, i]) => getRegion(slug)?.media[i]).filter((m) => m?.src);
        return (
          <li
            key={p.id}
            data-open={isOpen}
            data-testid={`people-card-${p.id}`}
            className="group glass relative p-6 transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.45)] data-[open=true]:shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
            onMouseEnter={() => setOpen(p.id)}
            onMouseLeave={() => setOpen((o) => (o === p.id ? null : o))}
            onFocus={() => setOpen(p.id)}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`photos-${p.id}`}
              onClick={() => setOpen((o) => (o === p.id ? null : p.id))}
              className="block w-full text-left"
            >
              <span className={`block h-px w-12 transition-all duration-300 group-hover:w-24 group-data-[open=true]:w-24 ${p.bar}`} aria-hidden />
              <h3 className={`mt-3 flex items-baseline justify-between gap-3 font-display text-2xl font-semibold ${p.color}`}>
                {p.title}
                <span className={`text-base transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden>▾</span>
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
            </button>

            {/* grid-rows trick: animates height from 0 to auto */}
            <div
              id={`photos-${p.id}`}
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-line pt-5">
                  {photos.map((m, i) => (
                    <figure key={m!.src} className={i === 0 ? 'col-span-3' : ''}>
                      <div className={`relative overflow-hidden border border-gold/30 ${i === 0 ? 'aspect-[16/9]' : 'aspect-square'}`}>
                        <Image src={m!.src!} alt={m!.alt} fill sizes="(min-width:768px) 30vw, 90vw" className="plate-img object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      {i === 0 && <figcaption className="mt-1.5 text-[13px] leading-snug text-muted">{m!.caption} — © {m!.credit}, {m!.license}</figcaption>}
                    </figure>
                  ))}
                  <p className="col-span-3 mt-1 text-[13px] leading-snug text-muted">
                    {photos.slice(1).map((m) => m!.caption).join(' · ')}
                  </p>
                </div>
                <Link href={`/tri-people#${p.id}`} className={`mt-4 inline-block text-sm underline underline-offset-4 ${p.color}`}>
                  Learn more about the {p.title.replace(' (Lumad)', '')} →
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
