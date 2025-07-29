import { test, expect } from '../fixtures/custom-fixtures';
import products from '../data/products.json';

test('Scenario 2: Add Products in Cart', async ({ homePage, productsPage, cartPage, page }) => {
  // Step 1-3: Launch browser, go to home, verify
  await homePage.goto();
  await homePage.isVisible();

  // Step 4: Click 'Products'
  await homePage.clickProducts();

  // Scroll to Kookie Kids brand to ensure products below are visible
  await productsPage.scrollToBrandKookieKids();

  // Step 5: Hover first product (Blue Top), add to cart
  await productsPage.addProductToCartByName('Blue Top', '1');

  // Step 6: Click 'Continue Shopping'
  await productsPage.clickContinueShopping();

  // Step 7: Hover second product (Men Tshirt), add to cart
  await productsPage.addProductToCartByName('Men Tshirt', '2');

  // Step 8: Click 'View Cart'
  await productsPage.clickViewCart();

  // Step 9: Verify both products in cart
  await cartPage.verifyProductsInCart(['Blue Top', 'Men Tshirt']);

  // Step 10: Verify prices, quantity, total
  await cartPage.verifyPricesAndQuantity();
});
