import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(public page: Page) {}

  async verifyProductsInCart(productNames: string[]) {
    for (const name of productNames) {
      await expect(this.page.locator(`.cart_description:has-text('${name}')`)).toBeVisible();
    }
  }

  async verifyPricesAndQuantity() {
    // Get all product rows in the cart
    const rows = await this.page.locator('tr.cart_product').all();
    for (const row of rows) {
      // Verify price, quantity, and total for each product
      await expect(row.locator('.cart_price')).toBeVisible();
      await expect(row.locator('.cart_quantity')).toBeVisible();
      await expect(row.locator('.cart_total_price')).toBeVisible();
    }
  }
}
