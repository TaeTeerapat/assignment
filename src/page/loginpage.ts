import { expect, Locator, Page } from "@playwright/test";


export class LoginPage {
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passWordInput: Locator;
    readonly loginBtn: Locator;
    readonly msgErrorlogin: Locator

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.locator('#user-name');
        this.passWordInput = page.locator('#password');
        this.loginBtn = page.locator('[data-test="login-button"]');
        this.msgErrorlogin = page.locator('[data-test="error"]');
    }

    async gotoLogin(url: string) {
        await this.page.goto(url)
    }

    async login(username: string, password: string) {
        await this.userNameInput.fill(username);
        await this.passWordInput.fill(password);
        await this.loginBtn.click();
    }

    async msgUserInvalidLogin() {
        await expect(this.msgErrorlogin).toHaveText('Epic sadface: Username and password do not match any user in this service');
    }

    async msgUserLockedLogin() {
        await expect(this.msgErrorlogin).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    }
};