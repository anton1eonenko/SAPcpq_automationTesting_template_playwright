import {expect} from '@playwright/test'; 
import {test, BaseTest} from '../BaseTest'; 
import { Data, Url } from '../../Utils/Url';

test.describe('Login tests', async () => {
    test.beforeEach(async () => {
        BaseTest.setFeatureSuite.login(); 
    }); 

    test('Login', async ({pageManager, page}) => {
        await page.goto(Url.CPQUrl);
        await pageManager.loginPage.LogIn(Data.login, Data.password);
        expect(page).toHaveURL('https://claritylabs-tst.cpq.cloud.sap/Catalogue/CategoryTree.aspx'); 
    });
});