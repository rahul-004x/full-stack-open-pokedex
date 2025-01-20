import { test, expect } from '@playwright/test'

test.describe('Pokedex', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8080')
  })

  test('front page can be opened', async ({ page }) => {
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('clicking a pokemon shows its details', async ({ page }) => {
    await page.getByText('ivysaur').click()
    await page.waitForLoadState('networkidle')
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})