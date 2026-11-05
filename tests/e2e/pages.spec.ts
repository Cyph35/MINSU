import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('tri-people page has the three peoples', async ({ page }) => {
  await page.goto('/tri-people');
  for (const h of ['Filipino Muslims (Bangsamoro)', 'Indigenous Peoples (Lumad)', 'Migrant-Settlers']) {
    await expect(page.getByRole('heading', { name: h })).toBeVisible();
  }
});

test('peace timeline includes the key accords', async ({ page }) => {
  await page.goto('/peace-initiatives');
  const tl = page.getByRole('list', { name: 'Peace process timeline' });
  for (const y of ['1976', '1996', '2014', '2018', '2019', '2026']) await expect(tl).toContainText(y);
});

test('about page has disclosure, integrity and every cited source anchor', async ({ page }) => {
  await page.goto('/about');
  await expect(page.getByRole('heading', { name: 'AI Disclosure' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Academic Integrity' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Image Credits' })).toBeVisible();
  const hrefs = new Set<string>();
  for (const path of ['/regions/lanao', '/peace-initiatives', '/tri-people']) {
    await page.goto(path);
    for (const h of await page.locator('a[href^="/about#src-"]').evaluateAll((as) => as.map((a) => a.getAttribute('href')!))) hrefs.add(h);
  }
  await page.goto('/about');
  for (const h of hrefs) await expect(page.locator(h.replace('/about', ''))).toHaveCount(1);
});

for (const path of ['/', '/regions/lanao', '/about']) {
  test(`no serious accessibility violations on ${path}`, async ({ page }) => {
    await page.goto(path);
    const res = await new AxeBuilder({ page }).analyze();
    const serious = res.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
    expect(serious.map((v) => `${v.id}: ${v.nodes[0]?.target}`)).toEqual([]);
  });
}
