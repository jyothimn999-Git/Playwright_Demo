import { test, expect } from '@playwright/test';

test('Orange HRM-verify login functionality', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForTimeout(5000);
  await expect(page.locator("//img[@alt='company-branding']")).toBeVisible();
  // await page.getByPlaceholder('username').fill('admin');
  // await page.pause();
  // await page.getByPlaceholder('password').fill('admin123');
  // //await page.getByRole('textbox', { name: 'Username' }).fill('admmin');
  // //await page.getByRole('textbox', { name: 'password:' }).fill('admin123');
  // await page.getByRole('button', { name: 'Login' }).click();
   await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
  // //await page.getByRole('button', { name: /submit/i }).click();
  // await page.locator("//input[@name='username']").fill('admin');
  // await page.locator("//input[@name='password']").fill('admin123');
  // await page.locator("//button[@type='submit']").click();

    
});