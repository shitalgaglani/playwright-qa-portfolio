class ProductsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    
    // Locators
    this.title = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
    this.firstAddToCartButton = page.locator('.inventory_item button').first();
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
    this.shoppingCartLink = page.locator('.shopping_cart_link');
  }

  async getTitleText() {
    return await this.title.textContent();
  }

  async addFirstItemToCart() {
    await this.firstAddToCartButton.click();
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }
}

module.exports = { ProductsPage };