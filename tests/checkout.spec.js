const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');

test.describe('Products and Checkout Flow Suite', () => {
  let loginPage;
  let productsPage;
  let cartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);

    // Login before each checkout test
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('User can add item to cart and verify cart badge count', async () => {
    await productsPage.addFirstItemToCart();
    await expect(productsPage.shoppingCartBadge).toHaveText('1');
  });

  test('User can proceed from cart to checkout page', async ({ page }) => {
    await productsPage.addFirstItemToCart();
    await productsPage.goToCart();
    await expect(cartPage.cartItem).toBeVisible();

    await cartPage.clickCheckout();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
  });
});