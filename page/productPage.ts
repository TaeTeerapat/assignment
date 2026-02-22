import { expect, Locator, Page } from "@playwright/test";

export class ProductPage {
    readonly page: Page;
    readonly pageTitle: Locator
    readonly addProduct: Locator
    readonly iconCart: Locator
    readonly checkProductName: Locator

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('[data-test="title"]');
        this.addProduct = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.iconCart = page.locator('[data-test="shopping-cart-link"]');
        this.checkProductName = page.locator('[data-test="inventory-item-name"]');
    }

    async displayProductPage() {
        await expect(this.pageTitle).toHaveText('Products');
    }
    async addProductToCart(productName: String) {
        const formatProduct = productName.toLowerCase().replace(/\s+/g, "-");
        await this.page.locator(`[data-test="add-to-cart-${formatProduct}"]`).click();
    }
    async checkIconCart() {
        await expect(this.iconCart).toHaveText('2');
    }
    async checkProductList() {
        const productName = await this.checkProductName.allTextContents();
        expect(productName).toContain('Sauce Labs Bolt T-Shirt');
        expect(productName).toContain('Sauce Labs Bike Light');
    }
    async clickIconCart() {
        await this.iconCart.click();
        await expect(this.pageTitle).toHaveText('Your Cart');
    }
};
