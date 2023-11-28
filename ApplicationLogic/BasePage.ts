import {Page} from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly pageLocator: string;

  constructor(page : Page) {
    this.page = page;
  };

};