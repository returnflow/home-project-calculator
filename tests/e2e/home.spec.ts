import { expect, test } from '@playwright/test'

test('home page renders the heading', async ({ page }) => {
  await page.goto('/')
  await expect(
    page.getByRole('heading', { name: 'Home Project Calculator', level: 1 }),
  ).toBeVisible()
})
