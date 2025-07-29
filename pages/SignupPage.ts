import { Page, expect } from '@playwright/test';

export class SignupPage {
  constructor(public page: Page) {}

  async signup(name: string, email: string) {
    await this.page.fill('input[name="name"]', name);
    await this.page.fill('input[data-qa="signup-email"]', email);
    await this.page.click('button[data-qa="signup-button"]');
  }

  async fillAccountInfo(user: any) {
    await this.page.check(`#id_gender1`);
    await this.page.fill('#password', user.password);
    await this.page.selectOption('#days', user.day);
    await this.page.selectOption('#months', user.month);
    await this.page.selectOption('#years', user.year);
    await this.page.check('#newsletter');
    await this.page.check('#optin');
  }

  async fillAddressInfo(user: any) {
    await this.page.fill('#first_name', user.firstName);
    await this.page.fill('#last_name', user.lastName);
    await this.page.fill('#company', user.company);
    await this.page.fill('#address1', user.address);
    await this.page.fill('#address2', user.address2);
    await this.page.selectOption('#country', user.country);
    await this.page.fill('#state', user.state);
    await this.page.fill('#city', user.city);
    await this.page.fill('#zipcode', user.zipcode);
    await this.page.fill('#mobile_number', user.mobile);
  }

  async createAccount() {
    await this.page.click('button[data-qa="create-account"]');
  }
}
