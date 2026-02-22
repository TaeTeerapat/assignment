import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/loginpage';
import { ProductPage } from '../page/productPage';
import { YourCardPage } from '../page/yourcartPage';
import { InformationPage } from '../page/informationPage';
import { CheckoutPage } from '../page/checkoutPage';
import { validUsers } from '../data/user'

const url = 'https://www.saucedemo.com/'

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLogin(url);
});

test.describe('Scenario : Verify that a user can complete a full purchase journey, from logging in to logging out, on the Sauce Demo website', () => {
  test('user สามารถทำการเลือกซื้อสินค้าพร้อม checkout สำเร็จ', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const yourcardPage = new YourCardPage(page);
    const informationPage = new InformationPage(page);
    const checkoutPage = new CheckoutPage(page);
    const validuser = validUsers[0];

    await loginPage.login(validuser.username, validuser.password);
    await productPage.displayProductPage();
    await productPage.addProductToCart('Sauce Labs Bolt T-Shirt');
    await productPage.addProductToCart('Sauce Labs Bike Light');
    await productPage.checkIconCart();
    await productPage.clickIconCart();
    await productPage.checkProductList();
    await yourcardPage.clickCheckOutBtn();
    await informationPage.inputFirstName('Qa' , 'Test' , '12120');
    await informationPage.clickContinueCheckout();
    await checkoutPage.checkProductPrice();
    await checkoutPage.clickFinishBtn();
  });
});
