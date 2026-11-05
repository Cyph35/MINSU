import { test, expect } from '@playwright/test';

test('hovering a region shows the glass preview card', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-slug="lanao"] path.shape').hover();
  const card = page.getByTestId('region-card');
  await expect(card).toBeVisible();
  await expect(card).toContainText('Lanao del Sur & Lake Lanao Basin');
  await expect(card).toContainText('Population (2020)');
  await expect(card.getByRole('link', { name: 'Explore Deep Dive →' })).toBeVisible();
  const box = (await card.boundingBox())!;
  const vp = page.viewportSize()!;
  expect(box.x + box.width).toBeLessThanOrEqual(vp.width);
  expect(box.y + box.height).toBeLessThanOrEqual(vp.height);
});

test('clicking a region navigates to its profile', async ({ page }) => {
  await page.goto('/');
  // Davao's bounding-box center lies in the Davao Gulf, so click a point inside the land itself.
  const shape = page.locator('[data-slug="davao"] path.shape');
  await shape.scrollIntoViewIfNeeded();
  const p = await shape.evaluate((el) => {
    const path = el as SVGPathElement; const pt = path.ownerSVGElement!.createSVGPoint(); const bb = path.getBBox();
    for (let i = 0; i < 100; i++) {
      pt.x = bb.x + bb.width * (0.2 + 0.6 * ((i * 7) % 10) / 10); pt.y = bb.y + bb.height * (0.2 + 0.6 * Math.floor(i / 10) / 10);
      if (path.isPointInFill(pt)) { const m = path.getScreenCTM()!; return { x: pt.x * m.a + m.e, y: pt.y * m.d + m.f }; }
    }
    throw new Error('no fill point');
  });
  await page.mouse.click(p.x, p.y);
  await expect(page).toHaveURL(/\/regions\/davao$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Davao Region');
});

test('keyboard: Tab reaches a region, focus shows the card, Enter navigates', async ({ page }) => {
  await page.goto('/');
  const lanao = page.getByRole('link', { name: 'Lanao del Sur & Lake Lanao Basin' }).first();
  await lanao.focus();
  await expect(page.getByTestId('region-card')).toBeVisible();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/\/regions\/lanao$/);
});

test('Escape closes the preview card', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Palawan' }).first().focus();
  await expect(page.getByTestId('region-card')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByTestId('region-card')).toHaveCount(0);
});

test('hovering inside each mainland region hits that region, not a neighbor', async ({ page }) => {
  await page.goto('/');
  for (const slug of ['davao', 'soccsksargen', 'maguindanao-cotabato', 'northern-mindanao', 'lanao', 'zamboanga']) {
    const shape = page.locator(`[data-slug="${slug}"] path.shape`);
    await shape.scrollIntoViewIfNeeded();
    const hit = await shape.evaluate((el) => {
      const path = el as SVGPathElement;
      const svg = path.ownerSVGElement!;
      const pt = svg.createSVGPoint();
      const bb = path.getBBox();
      for (let i = 0; i < 100; i++) {
        pt.x = bb.x + bb.width * (0.2 + 0.6 * ((i * 7) % 10) / 10);
        pt.y = bb.y + bb.height * (0.2 + 0.6 * Math.floor(i / 10) / 10);
        if (path.isPointInFill(pt)) {
          const m = path.getScreenCTM()!;
          return document.elementFromPoint(pt.x * m.a + m.e, pt.y * m.d + m.f)?.closest('a')?.getAttribute('data-slug');
        }
      }
      return 'no-fill-point';
    });
    expect(hit, slug).toBe(slug);
  }
});
