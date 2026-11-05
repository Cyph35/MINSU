'use client';
import { useEffect, useRef, useState } from 'react';

export const TAB_IDS = ['history', 'peoples', 'heritage', 'youth', 'gallery'] as const;
export type TabId = (typeof TAB_IDS)[number];
const LABELS: Record<TabId, string> = { history: 'Historical Roots', peoples: 'Peoples', heritage: 'Shared Heritage', youth: 'Youth & Peace Action', gallery: 'Media Gallery' };

export function RegionTabs({ panels }: { panels: Record<TabId, React.ReactNode> }) {
  const [tab, setTab] = useState<TabId>('history');
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get('tab');
    if (q && (TAB_IDS as readonly string[]).includes(q)) setTab(q as TabId);
  }, []);

  const select = (t: TabId, focus = false) => {
    setTab(t);
    const url = new URL(window.location.href);
    url.searchParams.set('tab', t);
    window.history.replaceState(null, '', url);
    if (focus) refs.current[t]?.focus();
  };

  const onKey = (e: React.KeyboardEvent) => {
    const i = TAB_IDS.indexOf(tab);
    if (e.key === 'ArrowRight') select(TAB_IDS[(i + 1) % TAB_IDS.length], true);
    if (e.key === 'ArrowLeft') select(TAB_IDS[(i - 1 + TAB_IDS.length) % TAB_IDS.length], true);
  };

  return (
    <div>
      <div role="tablist" aria-label="Region story" onKeyDown={onKey} className="sticky top-[76px] z-30 -mx-4 flex gap-1 overflow-x-auto border-b border-line bg-ink px-4 sm:mx-0 sm:px-0">
        {TAB_IDS.map((t) => (
          <button
            key={t}
            ref={(el) => { refs.current[t] = el; }}
            role="tab"
            id={`tab-${t}`}
            aria-selected={tab === t}
            aria-controls={`panel-${t}`}
            tabIndex={tab === t ? 0 : -1}
            onClick={() => select(t)}
            className="relative shrink-0 whitespace-nowrap px-4 py-3.5 text-sm text-muted transition hover:text-text aria-selected:text-gold"
          >
            {LABELS[t]}
            {tab === t && <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-gold" aria-hidden />}
          </button>
        ))}
      </div>
      {TAB_IDS.map((t) => (
        <div key={t} role="tabpanel" id={`panel-${t}`} aria-labelledby={`tab-${t}`} hidden={tab !== t} className="pt-8">
          {panels[t]}
        </div>
      ))}
    </div>
  );
}
