import { expect, Locator, Page } from "@playwright/test";

export class YourCardPage {
    readonly page: Page;
    readonly checkoutBtn: Locator
    readonly pageTitle: Locator
    
    constructor(page: Page) {
        this.page = page;
        this.checkoutBtn = page.locator('[data-test="checkout"]');
        this.pageTitle = page.locator('[data-test="title"]')
        
    }

    async clickCheckOutBtn() {
        await this.checkoutBtn.click();
        await expect(this.pageTitle).toHaveText('Checkout: Your Information');
    }
};