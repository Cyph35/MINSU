'use client';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type React from 'react';
import { MindanaoMap } from './MindanaoMap';
import { RegionPreviewCard } from './RegionPreviewCard';
import { LayerCard } from './LayerCard';
import { PROVINCE_META } from './layers';
import { ADMIN_COLORS, ADMIN_REGIONS, MAP_MODES, type MapMode } from '@/data/mapLayers';
import { regions, getRegion } from '@/data/regions';
import { clampCardPosition, type Point } from '@/lib/position';

const CARD = { w: 340, h: 440 };
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];

function useCanHover() {
  const [canHover, setCanHover] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const set = () => setCanHover(mq.matches);
    set();
    mq.addEventListener('change', set);
    return () => mq.removeEventListener('change', set);
  }, []);
  return canHover;
}

export function MapHero() {
  const router = useRouter();
  const canHover = useCanHover();
  const [active, setActive] = useState<string | null>(null);
  const [listHover, setListHover] = useState<string | null>(null);
  const [mode, setModeState] = useState<MapMode>('story');
  const [pinned, setPinned] = useState(false);
  useEffect(() => {
    const v = new URLSearchParams(window.location.search).get('view');
    if (v === 'province' || v === 'admin' || v === 'story') setModeState(v);
  }, []);
  const setMode = (m: MapMode) => {
    setModeState(m); setActive(null); setPinned(false);
    const url = new URL(window.location.href);
    if (m === 'story') url.searchParams.delete('view'); else url.searchParams.set('view', m);
    window.history.replaceState(null, '', url);
  };
  const [anchor, setAnchor] = useState<Point>({ x: 0, y: 0 });
  const [cardSize, setCardSize] = useState(CARD);
  const cardRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<number | undefined>(undefined);
  const pinnedRef = useRef(false);
  useEffect(() => { pinnedRef.current = pinned; }, [pinned]);

  const cancelHide = () => window.clearTimeout(hideTimer.current);
  const scheduleHide = useCallback(() => {
    if (pinnedRef.current) return;
    cancelHide();
    hideTimer.current = window.setTimeout(() => setActive(null), 220);
  }, []);

  const onHover = useCallback((slug: string, e: React.PointerEvent | React.FocusEvent) => {
    if ('pointerType' in e && e.pointerType !== 'mouse') return; // touch handled on click
    if (pinnedRef.current) return;
    cancelHide();
    setActive(slug);
    if ('clientX' in e) setAnchor({ x: e.clientX, y: e.clientY });
    else {
      const r = (e.currentTarget as Element).getBoundingClientRect();
      setAnchor({ x: r.right, y: r.top + r.height / 2 });
    }
  }, []);

  const onSelect = useCallback((slug: string, e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    if (mode === 'admin') { setActive(slug); setPinned(true); return; } // admin regions open a pinned card
    if (!canHover && 'button' in e && active !== slug) {
      setActive(slug); // first tap on touch: open the bottom sheet
      return;
    }
    router.push(`/regions/${mode === 'province' ? PROVINCE_META[slug].story : slug}`);
  }, [active, canHover, router, mode]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setActive(null); setPinned(false); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useLayoutEffect(() => {
    const el = cardRef.current?.firstElementChild as HTMLElement | null;
    if (el) setCardSize({ w: el.offsetWidth, h: el.offsetHeight });
  }, [active]);

  const region = active && mode === 'story' ? getRegion(active) : undefined;
  const close = () => { setActive(null); setPinned(false); };
  const pos = typeof window === 'undefined' ? anchor : clampCardPosition(anchor, cardSize, { w: window.innerWidth, h: window.innerHeight });

  return (
    <section aria-labelledby="map-heading" className="relative">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 pt-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:pt-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Plate I · An Atlas of the Tri-People</p>
          <h1 id="map-heading" className="mt-3 max-w-3xl font-display text-4xl leading-[1.1] font-bold sm:text-5xl">
            Stories of peace from the lands of the <em className="text-gold">Tri-People</em>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {canHover ? 'Hover' : 'Tap'} a region to meet its peoples — Filipino Muslims, Indigenous Peoples (Lumad) and
            Migrant-Settlers — then open its story of shared history, heritage and peacebuilding.
          </p>
          <div data-testid="map-frame" className="relative mt-6 border border-gold/30 bg-ink-2/70 p-2 shadow-[inset_0_0_80px_rgba(0,0,0,0.5)] sm:p-3" onPointerLeave={() => canHover && scheduleHide()}>
            <div role="radiogroup" aria-label="Map view" className="absolute right-3 top-3 z-10 flex border border-gold/50 bg-ink/95 text-sm shadow-lg sm:right-5 sm:top-5">
              {MAP_MODES.map((m) => (
                <button key={m.id} type="button" role="radio" aria-checked={mode === m.id} onClick={() => setMode(m.id)}
                  className="px-2.5 py-1.5 text-muted transition hover:text-text aria-checked:bg-gold aria-checked:font-semibold aria-checked:text-ink sm:px-3.5">
                  {m.label}
                </button>
              ))}
            </div>
            <MindanaoMap mode={mode} activeId={active ?? listHover} onHover={onHover} onLeave={scheduleHide} onSelect={onSelect} />
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 px-2 pb-1 text-sm italic text-muted" aria-label="Map legend">
              {mode === 'story' ? (
                <li>Eleven story regions — hover or tap one to preview, click to read its story.</li>
              ) : (
                ADMIN_REGIONS.map((a) => (
                  <li key={a.id} className="flex items-center gap-1.5">
                    <span className="size-2.5" style={{ background: ADMIN_COLORS[a.id] }} aria-hidden />
                    {a.code}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <aside aria-label="Regions list" className="lg:pt-28">
          <p className="text-sm uppercase tracking-[0.2em] text-gold">{mode === 'story' ? 'Index of Regions' : mode === 'province' ? 'Index of Provinces' : 'Administrative Regions'}</p>
          <div className="weave-rule mt-2" aria-hidden />
          <ul className={`mt-2 grid grid-cols-2 gap-x-4 ${mode === "province" ? "lg:max-h-[560px] lg:grid-cols-2 lg:overflow-y-auto lg:text-sm" : "lg:grid-cols-1"}`}>
            {(mode === 'story'
              ? regions.map((r) => ({ id: r.slug, label: r.shortName, href: `/regions/${r.slug}` }))
              : mode === 'admin'
                ? ADMIN_REGIONS.map((a) => ({ id: a.id, label: `${a.code} · ${a.name.replace(' (Palawan)', '')}`, href: '#' }))
                : Object.entries(PROVINCE_META).sort((a, b) => a[1].name.localeCompare(b[1].name)).map(([id, m]) => ({ id, label: m.name.replace(' (Not a Province)', ''), href: `/regions/${m.story}` }))
            ).map((item, i) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onPointerEnter={() => setListHover(item.id)}
                  onPointerLeave={() => setListHover(null)}
                  onFocus={() => setListHover(item.id)}
                  onBlur={() => setListHover(null)}
                  onClick={(e) => { e.preventDefault(); if (mode === 'admin') { setActive(item.id); setPinned(true); } else router.push(item.href); }}
                  data-active={(active ?? listHover) === item.id}
                  className="group flex items-baseline gap-3 border-b border-dotted border-line px-1 py-1.5 text-[16px] transition hover:text-gold data-[active=true]:text-gold"
                >
                  {mode === 'story' && <span className="w-8 font-display italic text-gold/80">{ROMAN[i]}.</span>}
                  <span className="leading-tight">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {region && canHover && (
        <div ref={cardRef}>
          <RegionPreviewCard
            region={region}
            variant="floating"
            style={{ left: pos.x, top: pos.y }}
            onClose={() => setActive(null)}
            onPointerEnter={cancelHide}
            onPointerLeave={scheduleHide}
          />
        </div>
      )}
      {active && mode !== 'story' && (
        <div ref={cardRef}>
          <LayerCard
            kind={mode}
            id={active}
            variant={canHover ? 'floating' : 'sheet'}
            style={canHover ? { left: pos.x, top: pos.y } : undefined}
            onClose={close}
            onPointerEnter={cancelHide}
            onPointerLeave={scheduleHide}
          />
        </div>
      )}
      {region && !canHover && (
        <>
          <button type="button" aria-label="Close preview" className="fixed inset-0 z-40 bg-black/40" onClick={() => setActive(null)} />
          <RegionPreviewCard region={region} variant="sheet" onClose={() => setActive(null)} />
        </>
      )}
    </section>
  );
}
