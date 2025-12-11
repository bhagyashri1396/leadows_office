 const { test, expect } = require('@playwright/test');

test('Myntra URL Test', async ({ page }) => {
    await page.goto('https://www.myntra.com', { waitUntil: 'networkidle' });

    const pageTitle = await page.title();
    console.log('page title is :', pageTitle);

    const pageURL = page.url();
    console.log('page URL is :', pageURL);

    // Verify the page title
    await expect(page).toHaveTitle('Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra');

    // Or verify the URL
    await expect(page).toHaveURL('https://www.myntra.com/');
});
