import { expect } from '@playwright/test';
import test from "../lambdatest-setup";

test('has success message', async ({ page }, testInfo ) => {  
  /*
  Test if demo email and demo name can be entered in the codepen form and select Gitlab as platform and click Submit.
  On submitting we should be able to verify the success message is displayed
  */  
  await page.goto('https://codepen.io/getform/pen/jRoexL');
  await page.frameLocator('iframe[name="CodePen"]').getByPlaceholder('Enter email').fill('test@test.com');  
  await page.frameLocator('iframe[name="CodePen"]').getByPlaceholder('Enter your name').fill('Test user');
  await page.frameLocator('iframe[name="CodePen"]').getByRole('combobox', { name: 'Favourite Platform' }).selectOption('Gitlab');
  await page.frameLocator('iframe[name="CodePen"]').getByRole('button', { name: 'Submit' }).click();
  await expect(page.frameLocator('iframe[name="CodePen"]').getByText('We received your submission, thank you!')).toBeVisible();
});


test('w3 schools has typescript tutorials', async ({ page }) => {  
  /*
  Test if demo website has a search bar and we are able to search for TypeScript tutorials.
  */
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe');
    await page.frameLocator('iframe[name="iframeResult"]').frameLocator('iframe[title="W3Schools Free Online Web Tutorials"]').getByPlaceholder('Search our tutorials, e.g. HTML').fill('typescript');
    await page.frameLocator('iframe[name="iframeResult"]').frameLocator('iframe[title="W3Schools Free Online Web Tutorials"]').getByRole('button', { name: '' }).click();
    await expect(page.frameLocator('iframe[name="iframeResult"]').frameLocator('iframe[title="W3Schools Free Online Web Tutorials"]').getByRole('link', { name: 'Start learning TypeScript now »' })).toBeVisible();
});
