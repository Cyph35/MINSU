import { test, expect } from '@playwright/test';

test('header, nav and footer render', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: /Sugilanon sa Kalinaw/ }).first()).toBeVisible();
  await expect(page.getByText('Ating Kuwento, Ating Kasaysayan').first()).toBeVisible();
  const nav = page.getByRole('navigation', { name: 'Primary' });
  for (const label of ['Interactive Map', 'The Tri-People', 'Peace Initiatives', 'About & AI Disclosure']) {
    await expect(nav.getByRole('link', { name: label })).toBeVisible();
  }
  await expect(page.locator('footer')).toContainText(
    'GEC110 Final Requirement – History of Filipino Muslims and Indigenous Peoples of Mindanao, Sulu, and Palawan',
  );
  await expect(page.locator('footer')).toContainText('IVY G. MASQUE');
});
