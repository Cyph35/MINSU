import Link from 'next/link';
import { getSource } from '@/data/sources';
import { sourceNumber } from '@/components/region/CitedParagraph';

export function CiteLinks({ ids }: { ids: string[] }) {
  return (
    <>
      {ids.map((id) => (
        <sup key={id} className="ml-0.5">
          <Link href={`/about#src-${id}`} className="text-gold hover:underline" aria-label={`Source ${sourceNumber(id)}: ${getSource(id)?.title ?? id}`}>[{sourceNumber(id)}]</Link>
        </sup>
      ))}
    </>
  );
}
