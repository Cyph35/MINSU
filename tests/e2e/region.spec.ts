import { test, expect } from '@playwright/test';

const SLUGS = ['lanao', 'maguindanao-cotabato', 'zamboanga', 'basilan', 'sulu', 'tawi-tawi', 'davao', 'northern-mindanao', 'soccsksargen', 'caraga', 'palawan'];

for (const slug of SLUGS) {
  test(`region ${slug} renders with five tabs`, async ({ page }) => {
    await page.goto(`/regions/${slug}`);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('tab')).toHaveCount(5);
    await expect(page.getByRole('tabpanel', { name: 'Historical Roots' })).toBeVisible();
  });
}

test('?tab=heritage opens the heritage tab and citations link to /about', async ({ page }) => {
  await page.goto('/regions/lanao?tab=heritage');
  const panel = page.getByRole('tabpanel', { name: 'Shared Heritage' });
  await expect(panel).toBeVisible();
  const cite = panel.locator('sup a').first();
  await expect(cite).toHaveAttribute('href', /^\/about#src-/);
});

test('gallery shows images, placeholders and opens a lightbox', async ({ page }) => {
  await page.goto('/regions/palawan?tab=gallery');
  await expect(page.getByTestId('gallery-item')).toHaveCount(10);
  await expect(page.getByText('audio placeholder')).toBeVisible();
  await page.getByRole('button', { name: /Open image/ }).first().click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
});

test('unknown region returns the 404 page', async ({ page }) => {
  const res = await page.goto('/regions/foo');
  expect(res?.status()).toBe(404);
  await expect(page.getByText('Hindi nakita')).toBeVisible();
});

test('history chapter has a regional timeline and inline photographs', async ({ page }) => {
  await page.goto('/regions/lanao');
  const panel = page.getByRole('tabpanel', { name: 'Historical Roots' });
  await expect(panel.getByRole('list', { name: 'Regional timeline' }).getByRole('listitem')).toHaveCount(7);
  await expect(panel.locator('figure img')).toHaveCount(2);
});

test('peoples tab profiles each group', async ({ page }) => {
  await page.goto('/regions/maguindanao-cotabato?tab=peoples');
  const panel = page.getByRole('tabpanel', { name: 'Peoples' });
  await expect(panel.getByRole('heading', { name: 'Teduray' })).toBeVisible();
  await expect(panel.locator('article')).toHaveCount(5);
});

test('heritage chapter lists landmarks', async ({ page }) => {
  await page.goto('/regions/palawan?tab=heritage');
  const panel = page.getByRole('tabpanel', { name: 'Shared Heritage' });
  await expect(panel.getByRole('heading', { name: 'Tubbataha Reefs' })).toBeVisible();
});
