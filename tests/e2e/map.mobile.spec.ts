import { test, expect } from '@playwright/test';

test('touch: first tap opens bottom sheet, CTA navigates', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-slug="soccsksargen"] path.shape').tap();
  const sheet = page.getByTestId('region-card');
  await expect(sheet).toBeVisible();
  await expect(sheet).toContainText('SOCCSKSARGEN & Sarangani Bay');
  await expect(page).toHaveURL(/\/$/);
  await sheet.getByRole('link', { name: 'Explore Deep Dive →' }).tap();
  await expect(page).toHaveURL(/\/regions\/soccsksargen$/);
});

test('mobile menu opens and links work', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Open menu' }).tap();
  await page.getByRole('navigation', { name: 'Mobile' }).getByRole('link', { name: 'Peace Initiatives' }).tap();
  await expect(page).toHaveURL(/peace-initiatives/);
});

test('no horizontal scroll on region page', async ({ page }) => {
  await page.goto('/regions/maguindanao-cotabato');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(0);
});
