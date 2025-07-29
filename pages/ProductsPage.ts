import { Page, expect } from '@playwright/test';

export class ProductsPage {
  constructor(public page: Page) {}

  async scrollToBrandKookieKids() {
    // Scroll to Kookie Kids anchor to ensure products below are visible
    const anchor = this.page.locator('a[href="/brand_products/Kookie Kids"]');
    await anchor.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(1000);
  }

  async addProductToCartByName(productName: string, productId: string) {
    // Hover on the correct productinfo text-center by product name
    const productInfo = this.page.locator('.productinfo.text-center', { hasText: productName });
    await productInfo.scrollIntoViewIfNeeded();
    await productInfo.hover();
    // Click the correct add-to-cart button by data-product-id
    const addBtn = productInfo.locator(`a.btn.add-to-cart[data-product-id="${productId}"]`);
    await addBtn.waitFor({ state: 'visible', timeout: 10000 });
    await addBtn.click({ force: true, timeout: 10000 });
  }

  async clickContinueShopping() {
    // Wait for modal to appear and click the correct Continue Shopping button
    const modalBtn = this.page.locator('button.close-modal.btn-success');
    await modalBtn.waitFor({ state: 'visible', timeout: 10000 });
    await modalBtn.click({ force: true });
  }

  async clickViewCart() {
    // Click the correct View Cart link in the modal (with text 'View Cart')
    const viewCart = this.page.locator('a[href="/view_cart"]', { hasText: 'View Cart' });
    await viewCart.first().waitFor({ state: 'visible', timeout: 10000 });
    await viewCart.first().click();
  }

  // (Logic updated above)
}
