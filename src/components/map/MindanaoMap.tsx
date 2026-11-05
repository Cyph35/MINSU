'use client';
import type React from 'react';
import { ADMIN_PATHS, MAP_VIEWBOX, PROVINCE_META, PROVINCE_PATHS, STORY_PATHS } from './layers';
import { regions } from '@/data/regions';
import { ADMIN_COLORS, ADMIN_REGIONS, SULU_NOTE, type MapMode } from '@/data/mapLayers';

export interface MapShape { id: string; label: string; d: string; href: string; fill?: string }

/** The clickable shapes for each map mode. */
export function shapesFor(mode: MapMode): MapShape[] {
  if (mode === 'story') return regions.map((r) => ({ id: r.slug, label: r.name, d: STORY_PATHS[r.svgId], href: `/regions/${r.slug}` }));
  if (mode === 'admin') return ADMIN_REGIONS.map((a) => ({ id: a.id, label: `${a.code} — ${a.name}`, d: ADMIN_PATHS[a.id], href: '#', fill: ADMIN_COLORS[a.id] }));
  return Object.entries(PROVINCE_PATHS).map(([id, d]) => ({ id, label: PROVINCE_META[id].name, d, href: `/regions/${PROVINCE_META[id].story}`, fill: ADMIN_COLORS[PROVINCE_META[id].admin] }));
}

/** Small island groups get an enlarged invisible hit area so they are easy to hover and tap. */
const SMALL = new Set(['sulu', 'tawi-tawi', 'basilan', 'city-of-isabela', 'camiguin', 'dinagat-islands', 'special-geographic-area']);

const SEAS = [
  { x: 300, y: 470, label: 'Sulu Sea' },
  { x: 560, y: 770, label: 'Celebes Sea' },
  { x: 760, y: 250, label: 'Bohol Sea' },
];

export interface MindanaoMapProps {
  mode: MapMode;
  activeId: string | null;
  onHover: (id: string, e: React.PointerEvent | React.FocusEvent) => void;
  onLeave: () => void;
  onSelect: (id: string, e: React.MouseEvent | React.KeyboardEvent) => void;
}

export function MindanaoMap({ mode, activeId, onHover, onLeave, onSelect }: MindanaoMapProps) {
  const shapes = shapesFor(mode);
  const coast = Object.values(STORY_PATHS);
  return (
    <svg viewBox={MAP_VIEWBOX} className="h-auto w-full" role="group" aria-label={`Map of Mindanao, Sulu and Palawan — ${mode} view`}>
      <defs>
        <pattern id="sea-grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M80 0H0V80" fill="none" stroke="rgb(196 149 74 / 0.10)" strokeWidth="0.8" strokeDasharray="2 4" />
        </pattern>
        <pattern id="sea-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
          <path d="M0 0V6" stroke="rgb(196 149 74 / 0.05)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="1000" height="1000" fill="url(#sea-hatch)" />
      <rect x="0" y="0" width="1000" height="1000" fill="url(#sea-grid)" />
      <rect x="6" y="6" width="988" height="791" fill="none" stroke="rgb(196 149 74 / 0.45)" strokeWidth="1.2" />
      <rect x="13" y="13" width="974" height="777" fill="none" stroke="rgb(196 149 74 / 0.25)" strokeWidth="0.6" strokeDasharray="1 5" />
      {/* coastline water-lines, as on engraved charts */}
      <g aria-hidden fill="none" strokeLinejoin="round">
        {coast.map((d, i) => <path key={`a${i}`} d={d} stroke="rgb(196 149 74 / 0.10)" strokeWidth="9" />)}
        {coast.map((d, i) => <path key={`b${i}`} d={d} stroke="rgb(196 149 74 / 0.16)" strokeWidth="4" />)}
      </g>
      {SEAS.map((s) => (
        <text key={s.label} x={s.x} y={s.y} textAnchor="middle" className="fill-muted/80 font-display italic" fontSize="22" letterSpacing="5" aria-hidden>
          {s.label}
        </text>
      ))}
      {shapes.map((s) => (
        <a
          key={`${mode}-${s.id}`}
          href={s.href}
          role="link"
          aria-label={s.label}
          tabIndex={0}
          className="map-region"
          data-active={activeId === s.id}
          data-slug={s.id}
          style={s.fill ? ({ '--fill': s.fill, '--fill-opacity': mode === 'province' ? 0.62 : 0.85 } as React.CSSProperties) : undefined}
          onPointerEnter={(e) => onHover(s.id, e)}
          onPointerMove={(e) => e.pointerType === 'mouse' && onHover(s.id, e)}
          onPointerLeave={(e) => e.pointerType === 'mouse' && onLeave()}
          onFocus={(e) => onHover(s.id, e)}
          onBlur={onLeave}
          onClick={(e) => onSelect(s.id, e)}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelect(s.id, e); }}
        >
          {SMALL.has(s.id) && <path d={s.d} fill="transparent" stroke="transparent" strokeWidth="14" />}
          <path className="shape" d={s.d} fillRule="evenodd" />
        </a>
      ))}
      {/* Sulu status marker — native tooltip on hover, readable label for screen readers */}
      <g transform="translate(440 596)" role="img" aria-label={`Note on Sulu: ${SULU_NOTE}`} data-testid="sulu-note" className="cursor-help">
        <title>{SULU_NOTE}</title>
        <line x1="0" y1="10" x2="-6" y2="30" stroke="rgb(217 168 90 / 0.8)" strokeWidth="1" strokeDasharray="2 2" />
        <circle r="10" fill="#1c140d" stroke="#d9a85a" strokeWidth="1.4" />
        <text y="4.5" textAnchor="middle" fontSize="13" fill="#f3e7d0" className="font-display italic">i</text>
        <text x="16" y="5" fontSize="12.5" fill="#f3e7d0" className="italic">Sulu: see note</text>
      </g>
      <g transform="translate(520 150)" aria-hidden className="pointer-events-none" stroke="rgb(196 149 74 / 0.7)" fill="none">
        <circle r="46" strokeWidth="0.8" />
        <circle r="38" strokeWidth="0.5" strokeDasharray="1 3" />
        <path d="M0 -60 L7 0 L0 60 L-7 0 Z" fill="rgb(196 149 74 / 0.35)" strokeWidth="0.8" />
        <path d="M-60 0 L0 7 L60 0 L0 -7 Z" fill="rgb(196 149 74 / 0.15)" strokeWidth="0.8" />
        <path d="M-30 -30 L4 -4 L30 30 L-4 4 Z M30 -30 L4 4 L-30 30 L-4 -4 Z" strokeWidth="0.5" />
        <text y="-66" textAnchor="middle" fontSize="16" fill="rgb(234 219 192 / 0.8)" stroke="none" className="font-display">N</text>
      </g>
      <g transform="translate(22 712)" aria-hidden className="pointer-events-none">
        <rect width="200" height="74" fill="rgb(28 20 13 / 0.85)" stroke="rgb(196 149 74 / 0.6)" strokeWidth="1" />
        <rect x="5" y="5" width="190" height="64" fill="none" stroke="rgb(196 149 74 / 0.3)" strokeWidth="0.6" />
        <text x="100" y="34" textAnchor="middle" fontSize="19" className="font-display italic" fill="#eadbc0">Mapa ng MINSUPALA</text>
        <text x="100" y="55" textAnchor="middle" fontSize="9.5" letterSpacing="2" fill="#a8927a">MINDANAO · SULU · PALAWAN</text>
      </g>
    </svg>
  );
}
