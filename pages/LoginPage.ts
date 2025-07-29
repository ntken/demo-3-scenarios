import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(public page: Page) {}

  async login(email: string, password: string) {
    await this.page.fill('input[data-qa="login-email"]', email);
    await this.page.fill('input[data-qa="login-password"]', password);
    await this.page.click('button[data-qa="login-button"]');
  }
}
