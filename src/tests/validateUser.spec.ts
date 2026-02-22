import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/loginpage';
import { invalidUsers, validUsers } from '../data/user'


const url = 'https://www.saucedemo.com/'

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLogin(url);
});

test.describe('Scenario : Validate permission for username', () => {
  test('ผู้ใช้งานเข้าสู่ระบบด้วย username & password ได้สำเร็จ', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const validuser = validUsers[0];

    await loginPage.login(validuser.username, validuser.password);
  });

  test('ผู้ใช้งานเข้าสู่ระบบด้วย username ที่ถูก Locked', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const invaliduser = invalidUsers[0];

    await loginPage.login(invaliduser.username, invaliduser.password);
    await loginPage.msgUserLockedLogin();
  });

  test('ผู้ใช้งานเข้าสู่ระบบด้วยการกรอก username ที่ผิด', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const invaliduser = invalidUsers[1];

    await loginPage.login(invaliduser.username, invaliduser.password);
    await loginPage.msgUserInvalidLogin();
  });
});