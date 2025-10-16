import { test, expect } from '@playwright/test';

test('Create user Unique user- Verify user', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('div').filter({ hasText: /^Username$/ }).nth(2).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  //Verify that user has logged in
  await page.url().includes('/dashboard/index');
//await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByText('-- Select --').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.getByText('-- Select --').click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('a');
  await page.waitForTimeout(3000)  
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  // Click input >> nth=2
  await page.locator('input').nth(2).click();
  const ExpUserName = 'Abhi'+ Math.random() * 100;
  // Fill input >> nth=2
  await page.locator('input').nth(2).fill(ExpUserName);
  //await page.waitForTimeout(1000)
  // Click text=PasswordFor a strong password, please use a hard to guess combination of text wi >> input[type="password"]
  await page.locator('text=PasswordFor a strong password, please use a hard to guess combination of text wi >> input[type="password"]').click();

  // Fill text=PasswordFor a strong password, please use a hard to guess combination of text wi >> input[type="password"]
  await page.locator('text=PasswordFor a strong password, please use a hard to guess combination of text wi >> input[type="password"]').fill('Admin@123');
  await page.waitForTimeout(1000)
  // Click input[type="password"] >> nth=1
  await page.locator('input[type="password"]').nth(1).click();

  // Fill input[type="password"] >> nth=1
  await page.locator('input[type="password"]').nth(1).fill('Admin@123');

  // Click text=Save
  await page.locator('text=Save').click();
  //await page.waitForTimeout(1000)
  await page.waitForSelector(".orangehrm-container")
  await expect(page.locator(".orangehrm-container")).toContainText(ExpUserName)

});