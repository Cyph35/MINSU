import { regions } from '@/data/regions';
import { getSource } from '@/data/sources';

describe.each(regions.map((r) => [r.slug, r] as const))('extended profile: %s', (_slug, r) => {
  it('has people profiles for at least two of the three peoples', () => {
    expect(r.peoples.length).toBeGreaterThanOrEqual(3);
    expect(new Set(r.peoples.map((p) => p.group)).size).toBeGreaterThanOrEqual(2);
  });
  it('has a regional timeline and landmarks', () => {
    expect(r.timeline.length).toBeGreaterThanOrEqual(5);
    expect(r.landmarks.length).toBeGreaterThanOrEqual(3);
  });
  it('every new citation resolves', () => {
    for (const x of [...r.peoples, ...r.timeline, ...r.landmarks]) {
      expect(x.cite.length).toBeGreaterThan(0);
      for (const id of x.cite) expect(getSource(id), id).toBeDefined();
    }
  });
  it('has at least 8 credited photographs, all captioned in prose', () => {
    const imgs = r.media.filter((m) => m.kind === 'image');
    expect(imgs.length).toBeGreaterThanOrEqual(8);
    for (const m of imgs) expect(m.caption).not.toMatch(/\.(jpe?g|png)$|^File:/i);
  });
  it('inline figures point at real images', () => {
    for (const i of [...r.inline.history, ...r.inline.heritage]) expect(r.media[i]?.kind).toBe('image');
  });
});
