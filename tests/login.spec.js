// tests/login.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Authentication and Login Suite', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Successful login with valid standard credentials', async ({ page }) => {
    // 1. Perform login using the Page Object method
    await loginPage.login('standard_user', 'secret_sauce');

    // 2. Validate that we successfully landed on the products inventory page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('Failed login shows correct error message for locked user', async () => {
    // 1. Try logging in with a locked-out user
    await loginPage.login('locked_out_user', 'secret_sauce');

    // 2. Assert that the error message is visible and contains expected text
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out');
  });
});