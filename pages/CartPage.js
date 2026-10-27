class CartPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    
    // Locators
    this.cartItem = page.locator('.cart_item');
    this.checkoutButton = page.locator('#checkout');
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };