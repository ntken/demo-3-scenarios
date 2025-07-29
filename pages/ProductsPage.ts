import { Page, expect } from '@playwright/test';

export class ProductsPage {
  constructor(public page: Page) {}

  async scrollToBrandKookieKids() {
    // Scroll đến anchor Kookie Kids để đảm bảo các sản phẩm phía dưới xuất hiện
    const anchor = this.page.locator('a[href="/brand_products/Kookie Kids"]');
    await anchor.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(1000);
  }

  async addProductToCartByName(productName: string, productId: string) {
    // Hover vào đúng productinfo text-center theo tên sản phẩm
    const productInfo = this.page.locator('.productinfo.text-center', { hasText: productName });
    await productInfo.scrollIntoViewIfNeeded();
    await productInfo.hover();
    // Click đúng button add-to-cart theo data-product-id
    const addBtn = productInfo.locator(`a.btn.add-to-cart[data-product-id="${productId}"]`);
    await addBtn.waitFor({ state: 'visible', timeout: 10000 });
    await addBtn.click({ force: true, timeout: 10000 });
  }

  async clickContinueShopping() {
    // Chờ modal hiện ra và click đúng button Continue Shopping
    const modalBtn = this.page.locator('button.close-modal.btn-success');
    await modalBtn.waitFor({ state: 'visible', timeout: 10000 });
    await modalBtn.click({ force: true });
  }

  async clickViewCart() {
    // Click đúng link View Cart trong modal (có text 'View Cart')
    const viewCart = this.page.locator('a[href="/view_cart"]', { hasText: 'View Cart' });
    await viewCart.first().waitFor({ state: 'visible', timeout: 10000 });
    await viewCart.first().click();
  }

  // (Đã cập nhật logic ở trên)
}
