import { expect, Locator, Page } from "@playwright/test";

export class InformationPage {

    readonly page: Page
    readonly firstNameInput: Locator
    readonly lastNameInput: Locator
    readonly zipcodeInput: Locator
    readonly continueBtn : Locator
    readonly cancelBtn : Locator
    readonly pageTitle: Locator

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.zipcodeInput = page.locator('[data-test="postalCode"]');
        this.continueBtn = page.locator('[data-test="continue"]');
        this.cancelBtn = page.locator('[data-test="cancel"]');
        this.pageTitle = page.locator('[data-test="title"]');

    }
    async inputFirstName(firstname: string, lastname: string, zipcode: string) {
        await this.firstNameInput.fill(firstname);
        await this.lastNameInput.fill(lastname);
        await this.zipcodeInput.fill(zipcode);
    }
    async clickContinueCheckout(){
        await this.continueBtn.click();
        await expect(this.pageTitle).toHaveText('Checkout: Overview');
    }
};