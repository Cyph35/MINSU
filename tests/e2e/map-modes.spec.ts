import { test, expect } from '@playwright/test';

test('map view toggle sits at the top right of the map and switches between three views', async ({ page }) => {
  await page.goto('/');
  const toggle = page.getByRole('radiogroup', { name: 'Map view' });
  await expect(toggle).toBeVisible();
  for (const label of ['Story Regions', 'Provinces', 'Admin Regions']) await expect(toggle.getByRole('radio', { name: label })).toBeVisible();
  const map = page.getByTestId('map-frame');
  const [t, m] = [await toggle.boundingBox(), await map.boundingBox()];
  expect(t!.x + t!.width).toBeGreaterThan(m!.x + m!.width * 0.6);
  expect(t!.y).toBeLessThan(m!.y + 80);

  await toggle.getByRole('radio', { name: 'Provinces' }).click();
  await expect(page).toHaveURL(/view=province/);
  await expect(map.getByRole('link', { name: 'Davao Occidental' })).toHaveCount(1);
  await expect(map.getByRole('link', { name: 'Maguindanao del Sur' })).toHaveCount(1);

  await toggle.getByRole('radio', { name: 'Admin Regions' }).click();
  await expect(page).toHaveURL(/view=admin/);
  await expect(map.getByRole('link', { name: 'Region XIII — Caraga' })).toHaveCount(1);
});

test('province card shows administrative region and peoples', async ({ page }) => {
  await page.goto('/?view=province');
  await page.getByTestId('map-frame').getByRole('link', { name: 'Cotabato', exact: true }).focus();
  const card = page.getByTestId('region-card');
  await expect(card).toContainText('Cotabato');
  await expect(card).toContainText('Region XII');
  await expect(card).toContainText('Manobo');
});

test('admin card lists its provinces and links to story regions', async ({ page }) => {
  await page.goto('/?view=admin');
  await page.getByTestId('map-frame').getByRole('link', { name: 'Region X — Northern Mindanao' }).focus();
  const card = page.getByTestId('region-card');
  await expect(card).toContainText('Lanao del Norte');
  await expect(card).toContainText('Camiguin');
  await expect(card.getByRole('link', { name: /Northern Mindanao/ }).first()).toBeVisible();
});

test('Caraga now has its own story page', async ({ page }) => {
  await page.goto('/regions/caraga');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Caraga');
});
