import { test, expect } from '@playwright/test';

test('homepage loads and shows cards', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('heading', { name: /TV Shows by Genre/i })).toBeVisible();
  await expect(page.getByLabel('Search for a show:')).toBeVisible();
  // Check that at least one show card is visible
  const cardCount = await page.locator('.show-card').count();
  expect(cardCount).toBeGreaterThan(0);
});
