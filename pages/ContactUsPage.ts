import { Page, expect } from '@playwright/test';

export class ContactUsPage {
  constructor(public page: Page) {}

  async verifyGetInTouchVisible() {
    await this.page.waitForTimeout(200); // prevent race condition
    await expect(this.page.locator('h2:has-text("Get In Touch")')).toBeVisible();
  }

  async fillContactForm(data: any) {
    await this.page.getByRole('textbox', { name: 'Name' }).fill(data.name);
    await this.page.getByRole('textbox', { name: 'Email', exact: true }).fill(data.email);
    await this.page.getByRole('textbox', { name: 'Subject' }).fill(data.subject);
    await this.page.getByRole('textbox', { name: 'Your Message Here' }).fill(data.message);
  }

  async uploadFile(filePath: string) {
    await this.page.getByRole('button', { name: 'Choose File' }).setInputFiles(filePath);
  }

  async submit() {
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  async verifySuccessMessage() {
    // Verify the actual success message selector
    const msg = this.page.locator('div.status.alert.alert-success');
    await expect(msg).toBeVisible({ timeout: 10000 });
    await expect(msg).toContainText('Success! Your details have been submitted successfully.');
  }
}

