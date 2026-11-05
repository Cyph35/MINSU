import { clampCardPosition } from '@/lib/position';

const card = { w: 320, h: 300 };
const vp = { w: 1280, h: 800 };

describe('clampCardPosition', () => {
  it('offsets 16px from the pointer by default', () => {
    expect(clampCardPosition({ x: 100, y: 100 }, card, vp)).toEqual({ x: 116, y: 116 });
  });
  it('flips to the left when the card would overflow the right edge', () => {
    const p = clampCardPosition({ x: 1200, y: 100 }, card, vp);
    expect(p.x + card.w).toBeLessThanOrEqual(vp.w - 8);
    expect(p.x).toBe(1200 - 16 - 320);
  });
  it('flips above the pointer near the bottom edge', () => {
    const p = clampCardPosition({ x: 100, y: 700 }, card, vp);
    expect(p.y).toBe(700 - 16 - 300);
  });
  it('never goes negative in a tiny viewport', () => {
    const p = clampCardPosition({ x: 10, y: 10 }, card, { w: 300, h: 280 });
    expect(p.x).toBeGreaterThanOrEqual(8);
    expect(p.y).toBeGreaterThanOrEqual(8);
  });
});
