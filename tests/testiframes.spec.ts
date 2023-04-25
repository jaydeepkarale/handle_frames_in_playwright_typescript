import { test, expect } from '@playwright/test';

test('has success message', async ({ page }) => {  
  await page.goto('https://codepen.io/getform/pen/jRoexL');  
  await page.frameLocator('iframe[name="CodePen"]').getByPlaceholder('Enter email').fill('test@test.com');  
  await page.frameLocator('iframe[name="CodePen"]').getByPlaceholder('Enter your name').fill('Test user');
  await page.frameLocator('iframe[name="CodePen"]').getByRole('combobox', { name: 'Favourite Platform' }).selectOption('Gitlab');
  await page.frameLocator('iframe[name="CodePen"]').getByRole('button', { name: 'Submit' }).click();
  await expect(page.frameLocator('iframe[name="CodePen"]').getByText('We received your submission, thank you!')).toBeVisible();
});


test('has search typescript tutorials', async ({ page }) => {  
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe');    
    await page.frameLocator('iframe[name="iframeResult"]').frameLocator('iframe[title="W3Schools Free Online Web Tutorials"]').getByPlaceholder('Search our tutorials, e.g. HTML').fill('typescript');
    await page.frameLocator('iframe[name="iframeResult"]').frameLocator('iframe[title="W3Schools Free Online Web Tutorials"]').getByRole('button', { name: '' }).click();
    await page.frameLocator('iframe[name="iframeResult"]').frameLocator('iframe[title="W3Schools Free Online Web Tutorials"]').getByRole('link', { name: 'Start learning TypeScript now »' }).click();  
});
