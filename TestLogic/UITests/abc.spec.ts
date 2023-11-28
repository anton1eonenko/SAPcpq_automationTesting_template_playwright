import {expect} from '@playwright/test'; 
import {test} from '../BaseTest'


test.describe('abc', async () => {
    test('abc', async ({pageManager, page}) => {
        await page.goto('https://claritylabs-tst.cpq.cloud.sap/Login.aspx')
        await pageManager.loginPage.LogIn('', ''); 
        await pageManager.categoriesDetails.SelectNecessaryCategory('QA: Hardware');
        await pageManager.mainCatalog.ClickOnButtons.Favorites('ASUS_antonleonenko');
    })
})