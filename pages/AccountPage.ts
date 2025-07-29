import { Page, expect } from '@playwright/test';

export class AccountPage {
  constructor(public page: Page) {}

  async verifyAccountCreated() {
    await expect(this.page.locator('h2:has-text("Account Created!")')).toBeVisible();
  }

  async clickContinue() {
    await this.page.click('a[data-qa="continue-button"]');
  }
}
