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
//await page.getByRole('heading', { name: 'Dashboard' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByText('-- Select --').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.getByText('-- Select --').click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('a');
  await page.getByText('ahmad ahmad').nth(2).click();
  await page.waitForLoadState();
  //await page.waitForTimeout(5000)
  await page.getByLabel('Username*').click();
  
  const d = new Date();
  let ms = d.getTime();

  const ExpUserName = 'Jyothi' + ms;
  await page.getByLabel('Username*').fill(ExpUserName);
  await page.getByLabel('Password*').fill('admin123');
  await page.getByLabel('Confirm Password*').fill('admin123');

//   await page.getByRole('textbox').nth(2).click();
//   await page.getByRole('textbox').nth(2).fill('jyothi54');
//   await page.getByRole('textbox').nth(4).click();
//   await page.getByRole('textbox').nth(3).click();
//   await page.getByRole('textbox').nth(3).fill('admin123');
//   await page.getByRole('textbox').nth(4).click();
//   await page.getByRole('textbox').nth(4).fill('admin123');
  await page.getByRole('button', { name: 'Save' }).click();
//verify user created//
  //await expect(page.locator("//td[text()='"+ExpUserName+"']")).toHaveText(ExpUserName)

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('div:nth-child(8) > .oxd-table-row > div > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click();
  await page.locator('div:nth-child(8) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button').first().click();
  await page.getByRole('button', { name: ' Yes, Delete' }).click();
  await page.getByText('(10) Records Found').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.url().includes('/dashboard/index');
});