import fs from 'fs';
import { test, expect } from '@playwright/test';

// Reads the JSON file and saves it  
let objects = fs.readFileSync('./tests/TestData/OrangeHRM_Login_All_TCs.json')
const users = JSON.parse(objects.toString());

// for (const record of users) {
// test(`WebOrder Login Functionality: ${record.test_case}`, async ({ page }) => {
test('OrangeHRM Login Functionality: ${record.test_case}', async ({ page }) => {
  for (const record of users) { 
  //console.log(record.name, record.password, record.exp_result);
  await page.waitForTimeout(5000);

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForTimeout(5000);

   await page.getByRole('textbox', { name: 'Username' }).fill('admin');
   await page.getByPlaceholder('password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    if ('Logout' == record.exp_res) {

         await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();

      //await expect(page.locator("//h6[@class=oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module]")).toHaveText(record.exp_res)
       await page.locator('text=Logout').click();
    //await page.waitForTimeout(1000)
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      await page.waitForLoadState(); // The promise resolves after 'load' event.

    } 
    else if ('Invalid credentials.' == record.exp_res)
    {
            await expect(page.locator("//span[@class=oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message]']")).toHaveText(record.exp_res)

    }
      else
    {
      //const name = await page.$eval("#ctl00_MainContent_status", el => el.textContent.trim())
      //expect(name).toBe('Invalid Login or Password.')
      //expect(name).toBe(record.exp_res)
      
      console.warn(`Unexpected expected result: ${record.exp_res}`);


    }
  }
});
