import { render, screen } from '@testing-library/react';
import { STORY_PATHS, ADMIN_PATHS, PROVINCE_PATHS, PROVINCE_META } from '@/components/map/layers';
import { MindanaoMap } from '@/components/map/MindanaoMap';
import { regions } from '@/data/regions';
import { ADMIN_REGIONS, PROVINCE_INFO } from '@/data/mapLayers';

const noop = () => {};
const renderMap = (mode: 'story' | 'province' | 'admin') =>
  render(<MindanaoMap mode={mode} activeId={null} onHover={noop} onLeave={noop} onSelect={noop} />);

describe('map layers', () => {
  it('every story region has a shape, including Caraga', () => {
    for (const r of regions) expect(STORY_PATHS[r.svgId], r.svgId).toBeTruthy();
    expect(regions.some((r) => r.slug === 'caraga')).toBe(true);
  });
  it('admin layer has exactly the official regions', () => {
    expect(Object.keys(ADMIN_PATHS).sort()).toEqual(ADMIN_REGIONS.map((a) => a.id).sort());
  });
  it('Cotabato Province is in Region XII, Isabela City in Region IX, Lanao del Norte in Region X', () => {
    expect(PROVINCE_META.cotabato.admin).toBe('region-xii');
    expect(PROVINCE_META['city-of-isabela'].admin).toBe('region-ix');
    expect(PROVINCE_META['lanao-del-norte'].admin).toBe('region-x');
    expect(PROVINCE_META['maguindanao-del-sur'].admin).toBe('barmm');
    expect(PROVINCE_META.sulu.admin).toBe('barmm');
    expect(PROVINCE_META.palawan.admin).toBe('mimaropa');
  });
  it('has current provinces (Davao Occidental, Maguindanao del Norte/Sur)', () => {
    for (const p of ['davao-occidental', 'maguindanao-del-norte', 'maguindanao-del-sur', 'davao-de-oro', 'dinagat-islands']) expect(PROVINCE_PATHS[p], p).toBeTruthy();
  });
  it('every province shape has facts and a story region', () => {
    for (const id of Object.keys(PROVINCE_PATHS)) {
      expect(PROVINCE_INFO[id], id).toBeDefined();
      expect(regions.some((r) => r.slug === PROVINCE_META[id].story), id).toBe(true);
    }
  });
});

describe('MindanaoMap modes', () => {
  it('story mode: one link per story region', () => {
    renderMap('story');
    expect(screen.getAllByRole('link')).toHaveLength(regions.length);
    expect(screen.getByRole('link', { name: regions[0].name })).toBeTruthy();
  });
  it('province mode: one focusable shape per province', () => {
    renderMap('province');
    expect(screen.getAllByRole('link')).toHaveLength(Object.keys(PROVINCE_PATHS).length);
    expect(screen.getByRole('link', { name: 'Cotabato' })).toBeTruthy();
  });
  it('admin mode: one focusable shape per administrative region', () => {
    renderMap('admin');
    expect(screen.getAllByRole('link')).toHaveLength(ADMIN_REGIONS.length);
    expect(screen.getByRole('link', { name: 'Region XII — SOCCSKSARGEN' })).toBeTruthy();
  });
});
