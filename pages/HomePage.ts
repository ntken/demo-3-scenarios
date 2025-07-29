import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(public page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async isVisible() {
    await expect(this.page.locator('a:has-text("Home")')).toBeVisible();
  }

  async clickSignupLogin() {
    await this.page.click('a:has-text("Signup / Login")');
  }

  async clickProducts() {
    await this.page.click('a:has-text("Products")');
  }

  async clickContactUs() {
    await this.page.click('a:has-text("Contact us")');
  }

  async loggedInAs(username: string) {
    await expect(this.page.locator(`text=Logged in as ${username}`)).toBeVisible();
  }

  async clickHome() {
    await this.page.click('a:has-text("Home")');
  }
}

