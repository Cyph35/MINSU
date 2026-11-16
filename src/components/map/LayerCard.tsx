'use client';
import Link from 'next/link';
import { PROVINCE_META } from './layers';
import { ADMIN_REGIONS, PROVINCE_INFO, SULU_NOTE } from '@/data/mapLayers';
import { InfoTip } from '@/components/InfoTip';
import { getRegion } from '@/data/regions';
import { CountUp } from '@/components/CountUp';

interface Props {
  kind: 'province' | 'admin';
  id: string;
  variant: 'floating' | 'sheet';
  style?: React.CSSProperties;
  onClose: () => void;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
}

const adminOf = (id: string) => ADMIN_REGIONS.find((a) => a.id === id)!;

/** Placard for the Provinces and Admin Regions map views. */
export function LayerCard({ kind, id, variant, style, onClose, onPointerEnter, onPointerLeave }: Props) {
  const sheet = variant === 'sheet';
  const shell = sheet
    ? 'glass-strong fixed inset-x-0 bottom-0 z-50 max-h-[78dvh] overflow-y-auto p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]'
    : 'glass-strong fixed z-50 w-[340px] p-5';

  let body: React.ReactNode;
  let title: string;
  if (kind === 'province') {
    const meta = PROVINCE_META[id];
    const info = PROVINCE_INFO[id];
    const admin = adminOf(meta.admin);
    const story = getRegion(meta.story)!;
    title = meta.name;
    body = (
      <>
        <p className="mt-1 text-sm text-muted">{admin.code} · {admin.name}</p>
        <dl className="mt-4 grid gap-3 text-sm">
          <div className="bg-white/5 p-2.5">
            <dt className="uppercase text-[13px] text-muted">Population (2020)</dt>
            <dd className="mt-0.5 font-semibold">{info.population ? <CountUp value={info.population} /> : '—'}{info.popNote && <span className="block text-[13px] font-normal text-muted">{info.popNote}</span>}</dd>
          </div>
          <div className="bg-white/5 p-2.5">
            <dt className="uppercase text-[13px] text-muted">Peoples</dt>
            <dd className="mt-0.5 leading-snug">{info.peoples.join(', ')}</dd>
          </div>
        </dl>
        {id === 'sulu' && <p className="mt-3 flex items-start gap-2 border-l-2 border-gold pl-3 text-sm"><InfoTip text={SULU_NOTE} label="About Sulu’s status" /> <span>Status changed in 2024 — see note.</span></p>}
        <Link href={`/regions/${story.slug}`} className="bg-gold mt-5 flex w-full items-center justify-center px-4 py-2.5 text-sm font-semibold text-ink">
          Read the story of {story.shortName} →
        </Link>
      </>
    );
  } else {
    const a = adminOf(id);
    const provs = Object.entries(PROVINCE_META).filter(([, m]) => m.admin === id);
    const stories = [...new Set(provs.map(([, m]) => m.story))].map((s) => getRegion(s)!);
    title = `${a.code} — ${a.name}`;
    body = (
      <>
        <p className="mt-1 text-sm text-muted">Regional center: {a.center}</p>
        <dl className="mt-4 grid gap-3 text-sm">
          <div className="bg-white/5 p-2.5">
            <dt className="uppercase text-[13px] text-muted">Population ({a.population.year})</dt>
            <dd className="mt-0.5 font-semibold"><CountUp value={a.population.value} />{a.population.note && <span className="block text-[13px] font-normal text-muted">{a.population.note}</span>}</dd>
          </div>
          <div className="bg-white/5 p-2.5">
            <dt className="uppercase text-[13px] text-muted">Provinces &amp; independent areas</dt>
            <dd className="mt-0.5 leading-snug">{provs.map(([, m]) => m.name.replace(' (Not a Province)', '')).join(', ')}</dd>
          </div>
        </dl>
        {a.note && <p className="mt-3 border-l-2 border-gold pl-3 text-sm leading-relaxed">{a.note}</p>}
        {id === 'barmm' && <p className="mt-2 flex items-start gap-2 text-sm"><InfoTip text={SULU_NOTE} label="About Sulu’s status" /> <span>Sulu is included here as in the course slides — see note.</span></p>}
        <p className="mt-4 uppercase text-[13px] text-muted">Stories in this region</p>
        <ul className="mt-1 flex flex-wrap gap-2">
          {stories.map((s) => (
            <li key={s.slug}><Link href={`/regions/${s.slug}`} className="inline-block border border-current/30 px-2.5 py-1 text-sm text-gold hover:bg-white/10">{s.shortName} →</Link></li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <div role="dialog" aria-label={`${title} preview`} data-testid="region-card" style={style} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} className={shell}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl leading-tight">{title}</h3>
        <button type="button" onClick={onClose} aria-label="Close preview" className="-mr-1 p-1.5 text-muted hover:bg-white/10">✕</button>
      </div>
      {body}
    </div>
  );
}
