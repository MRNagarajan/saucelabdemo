// pages/CartPage.ts
import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly removeButton: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.removeButton = page.getByRole('button', { name: 'Remove' });
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }

  async removeItem(): Promise<void> {
    await this.removeButton.click();
  }
}
