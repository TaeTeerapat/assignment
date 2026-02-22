import { Locator, Page, expect } from "@playwright/test";

export class CheckoutPage {
    readonly page: Page
    readonly finishBtn: Locator
    readonly pageTitleCheckoutSuccess: Locator
    readonly productPrice: Locator
    readonly toTolPrice: Locator
    readonly taxPrice: Locator


    constructor(page: Page) {
        this.page = page;
        this.finishBtn = page.locator('[data-test="finish"]');
        this.pageTitleCheckoutSuccess = page.locator('[data-test="complete-header"]');
        this.productPrice = page.locator('[data-test="inventory-item-price"]');
        this.toTolPrice = page.locator('[data-test="total-label"]');
        this.taxPrice = page.locator('[data-test="tax-label"]');
    }

    async checkProductPrice() {
        const tax = await this.taxPrice.textContent();
        const toTalTax = parseFloat(tax?.replace(/[^\d.]/g, '') ?? '0');
        console.log('Tax:', toTalTax);

        const productPrice = await this.productPrice.allTextContents();
        const prices = productPrice.map((priceStr) => parseFloat(priceStr.replace(/[^\d.]/g, '')));

        const totalPrice = prices.reduce((sum, p) => sum + p, 0);
        console.log('ราคาสินค้า:', prices);
        console.log('Item total:', totalPrice);

        const finalTotal = toTalTax + totalPrice;
        console.log('Total:', finalTotal);

        const totalText = await this.toTolPrice.textContent();
        const totalProducts = parseFloat(totalText?.replace(/[^\d.]/g, '') ?? '0');
        console.log('Total:', totalProducts);

        expect(totalProducts).toBeCloseTo(finalTotal, 2);
    }


    async clickFinishBtn() {
        await this.finishBtn.click();
        await expect(this.pageTitleCheckoutSuccess).toHaveText('Thank you for your order!');
    }

    async test (){
        
    }
};