// tests/saucedemo.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

const USERNAME = 'standard_user';
const PASSWORD = 'secret_sauce';

test.describe('SauceDemo E2E Tests', () => {
  //test.describe.configure({ retries: 2 });  // 2 retries for these tests
  test('Login, add item to cart, remove item', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await page.goto('https://www.saucedemo.com/');
    await loginPage.login(USERNAME, PASSWORD);

    await expect(page).toHaveURL(/inventory/);
    await inventoryPage.addItemToCart();
    await inventoryPage.goToCart();
    await page.screenshot({ path: './/screenshots/screenshot1.png' });

    //console.log(page.url);
    await expect(page).toHaveURL(`https://www.saucedemo.com/inventory.html`);
    await cartPage.removeItem();
    await page.screenshot({ path: './/screenshots/screenshot2.png' });

  });
});
