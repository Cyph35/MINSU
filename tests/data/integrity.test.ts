import { regions, getRegion, REGION_SLUGS } from '@/data/regions';
import { sources, getSource } from '@/data/sources';

const allCites = (r: (typeof regions)[number]) => [
  ...r.population.cite,
  ...r.history.flatMap((p) => p.cite),
  ...r.heritage.flatMap((p) => p.cite),
];

describe('content integrity', () => {
  it('has every planned region, in order', () => {
    expect(regions.map((r) => r.slug)).toEqual([...REGION_SLUGS]);
  });
  it('slugs and svgIds are unique', () => {
    expect(new Set(regions.map((r) => r.slug)).size).toBe(regions.length);
    expect(new Set(regions.map((r) => r.svgId)).size).toBe(regions.length);
  });
  it('source ids are unique', () => {
    expect(new Set(sources.map((s) => s.id)).size).toBe(sources.length);
  });
  it('getRegion resolves and rejects', () => {
    expect(getRegion('lanao')?.name).toBe('Lanao del Sur & Lake Lanao Basin');
    expect(getRegion('foo')).toBeUndefined();
  });
  describe.each(REGION_SLUGS.map((s) => [s]))('%s', (slug) => {
    const r = () => getRegion(slug)!;
    it('exists', () => expect(getRegion(slug)).toBeDefined());
    it('every citation resolves', () => {
      for (const id of allCites(r())) expect(getSource(id), `missing source ${id}`).toBeDefined();
    });
    it('every factual paragraph cites at least one source', () => {
      for (const p of [...r().history, ...r().heritage]) expect(p.cite.length).toBeGreaterThan(0);
    });
    it('meets content minimums', () => {
      expect(r().culturalMarker.length).toBeLessThanOrEqual(200);
      expect(r().media.length).toBeGreaterThanOrEqual(4);
      expect(r().history.length).toBeGreaterThanOrEqual(3);
      expect(r().heritage.length).toBeGreaterThanOrEqual(3);
      expect(r().youthPeace.length).toBeGreaterThanOrEqual(3);
      expect(r().population.year).toBeGreaterThanOrEqual(2015);
      expect(r().languages.length).toBeGreaterThan(0);
    });
    it('every media item is credited and licensed', () => {
      for (const m of [r().heroImage, ...r().media]) {
        expect(m.credit.trim()).not.toBe('');
        expect(m.license.trim()).not.toBe('');
        expect(m.alt.trim()).not.toBe('');
      }
    });
  });
});
