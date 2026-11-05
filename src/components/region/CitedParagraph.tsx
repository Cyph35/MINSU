import Link from 'next/link';
import type { Cited } from '@/data/types';
import { sources, getSource } from '@/data/sources';

export const sourceNumber = (id: string) => sources.findIndex((s) => s.id === id) + 1;

export function CitedParagraph({ p }: { p: Cited }) {
  return (
    <p>
      {p.text}
      {p.cite.map((id) => {
        const s = getSource(id);
        return (
          <sup key={id} className="ml-0.5">
            <Link href={`/about#src-${id}`} className="text-gold hover:underline" title={s ? `${s.author}, ${s.title} (${s.year})` : id} aria-label={`Source ${sourceNumber(id)}: ${s?.title ?? id}`}>
              [{sourceNumber(id)}]
            </Link>
          </sup>
        );
      })}
    </p>
  );
}
