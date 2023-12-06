import {test as base, Page} from '@playwright/test'; 
import { PageManager } from '../ApplicationLogic/ApplicationUILogic/Pages/PageManager';
import { allure } from "allure-playwright";

export type TestOptions = {
    domain: string
}

export const test = base.extend<TestOptions & {pageManager: PageManager}> ({
    domain: ['', {option: true}], 

    pageManager: async ({page}, use) => {
        const pageManager = new PageManager(page); 
        await use(pageManager); 
    }, 
}); 

export class BaseTest {

    static setFeatureSuite = {
        quote: () => allure.suite('Quote'), 
        configurator: () => allure.suite('Configurator'),
        login: () => allure.suite('Login'), 
    }
};

