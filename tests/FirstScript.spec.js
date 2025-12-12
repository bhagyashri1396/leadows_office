import { test, expect } from '@playwright/test';

test('Login page', async ({ page }) => {
  await page.goto('https://twine.myneuron.in/auth/login',{waitUntil: 'networkidle'});

  const pageTitle = await page.title();
  console.log('Page title is:', pageTitle);

  const pageURL = page.url();
  console.log('Page URL is:', pageURL);

  await expect(page).toHaveTitle('Twine');
  
  await expect(page).toHaveURL('https://twine.myneuron.in/auth/login');

  
});
