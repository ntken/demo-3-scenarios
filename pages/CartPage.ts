import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(public page: Page) {}

  async verifyProductsInCart(productNames: string[]) {
    for (const name of productNames) {
      await expect(this.page.locator(`.cart_description:has-text('${name}')`)).toBeVisible();
    }
  }

  async verifyPricesAndQuantity() {
    // Lấy tất cả các hàng sản phẩm trong cart
    const rows = await this.page.locator('tr.cart_product').all();
    for (const row of rows) {
      // Kiểm tra giá, số lượng, tổng tiền từng sản phẩm
      await expect(row.locator('.cart_price')).toBeVisible();
      await expect(row.locator('.cart_quantity')).toBeVisible();
      await expect(row.locator('.cart_total_price')).toBeVisible();
    }
  }
}
