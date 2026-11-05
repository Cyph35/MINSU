import type { Region } from '@/data/types';

const ROWS = [
  { key: 'moro', label: 'Filipino Muslims', dot: 'bg-moro', text: 'text-moro' },
  { key: 'lumad', label: 'Indigenous Peoples', dot: 'bg-lumad', text: 'text-lumad' },
  { key: 'settler', label: 'Migrant-Settlers', dot: 'bg-settler', text: 'text-settler' },
] as const;

export function TriChips({ tri, compact = false }: { tri: Region['triPeople']; compact?: boolean }) {
  return (
    <ul className={compact ? 'space-y-1.5' : 'grid gap-3 sm:grid-cols-3'}>
      {ROWS.map((row) => {
        const list = tri[row.key];
        return (
          <li key={row.key} className={compact ? 'flex gap-2 text-sm leading-snug' : 'glass flex gap-2.5 rounded-xl p-3'}>
            <span className={`mt-1.5 inline-block size-2 shrink-0 rounded-full ${row.dot}`} aria-hidden />
            <span>
              <span className={`${row.text} font-semibold`}>{row.label}: </span>
              <span className="text-text">{list.length ? (compact ? list.slice(0, 3).join(', ') + (list.length > 3 ? '…' : '') : list.join(', ')) : '—'}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
