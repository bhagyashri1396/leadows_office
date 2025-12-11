  npx// @ts-check
import { test, expect } from '@playwright/test';

test('Login page', async ({ page }) => {
  await page.goto('https://twine.myneuron.in/auth/login');

  const pageTitle = await page.title();
  console.log('Page title is:', pageTitle);

  await expect(page).toHaveTitle('Twine-Login');

  const pageURL = page.url();
  console.log('Page URL is:', pageURL);
  
  await expect(page).toHaveURL('https://twine.myneuron.in/auth/login');
});
