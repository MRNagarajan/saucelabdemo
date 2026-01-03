// pages/InventoryPage.ts
import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly addToCartButtons: Locator;
  readonly shoppingCartLink: Locator;
  readonly removeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButtons = page.getByRole('button', { name: 'Add to cart' });
    this.shoppingCartLink = page.getByRole('link', { name: 'Shopping Cart' });
    //this.shoppingCartLink = page.getByRole('link', { name: /Shopping Cart/,});
    this.removeButton = page.getByRole('button', { name: 'Remove' });
  }

  async addItemToCart(): Promise<void> {
    await this.addToCartButtons.first().click();
  }

  async goToCart(): Promise<void> {
    console.log(this.shoppingCartLink.selectText)
   // await this.shoppingCartLink.click();
  }
}
