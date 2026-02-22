import { expect, Locator, Page } from "@playwright/test";


export class LoginPage {
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passWordInput: Locator;
    readonly loginBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.locator('#user-name');
        this.passWordInput = page.locator('#password');
        this.loginBtn = page.locator('[data-test="login-button"]');
    }

    async gotoLogin(url: string) {
        await this.page.goto(url)
    }

    async login(username: string, password: string) {
        await this.userNameInput.fill(username);
        await this.passWordInput.fill(password);
        await this.loginBtn.click();
    }

};