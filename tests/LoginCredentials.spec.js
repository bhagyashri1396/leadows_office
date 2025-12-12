import {test,expect} from '@playwright/test';

test('Login Page',async({page})=> {

    await page.goto('https://twine.myneuron.in/auth/login',{ waitUntil: 'networkidle'});

     const pageTitle = await page.title();
    console.log('page title is :', pageTitle);

    // title and url check
    await expect(page).toHaveTitle('Twine');

    await expect(page).toHaveURL('https://twine.myneuron.in/auth/login');
 
 
 //Fill username and password 

  await page.fill('input[type="email"]','bhagyashri');
  await page.fill('input[type="password"]','Leadows@2005');

  //Click on login button

  await expect(page.locator('button:has-text("Continue")')).toBeEnabled();

  await page.click('button:has-text("Continue")');

// wait for5 navigation after login 

await page.waitForLoadState('networkidle');

})