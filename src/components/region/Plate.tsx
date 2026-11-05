import Image from 'next/image';
import type { MediaItem } from '@/data/types';

/** An archival "plate": a captioned, credited photograph set into the chapter text. */
export function Plate({ item, n, align = 'right' }: { item: MediaItem; n: number; align?: 'left' | 'right' }) {
  if (!item.src) return null;
  return (
    <figure className={`my-2 border border-gold/30 bg-ink-2/60 p-2 md:w-[46%] ${align === 'right' ? 'md:float-right md:ml-8' : 'md:float-left md:mr-8'} mb-6`}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={item.src} alt={item.alt} fill sizes="(min-width:768px) 40vw, 100vw" className="plate-img object-cover" />
      </div>
      <figcaption className="px-1 pt-2 text-sm leading-snug">
        <span className="uppercase text-gold">Plate {n}.</span> {item.caption}
        <span className="mt-1 block text-[13px] text-muted">© {item.credit} · {item.license}</span>
      </figcaption>
    </figure>
  );
}
