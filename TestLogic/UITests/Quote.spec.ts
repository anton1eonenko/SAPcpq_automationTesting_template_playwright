import {expect} from '@playwright/test'; 
import {test, BaseTest} from '../BaseTest'
import { Url } from '../../Utils/Url';
import Log from '../../Utils/Logger'

test.describe('Quote tests. @Quote', async () => {
    test.beforeEach(async ({pageManager, page}) => {
        BaseTest.setFeatureSuite.quote();

        Log.preStep('Open the page.')
        await page.goto(Url.CPQUrl);

        Log.preStep('Enter credentials.');
        await pageManager.loginPage.LogIn('aleonenko', 'Qwerty123');  
      });
    test('Check the price of the product on the Quote page. @Quote', async ({pageManager}) => {
        Log.step('1. Select Category "QA: Hardware".');
        await pageManager.categoriesDetails.SelectNecessaryCategory('QA: Hardware'); 
        
        Log.step('2. Choose a necessary laptop and click on "Add" button.');
        await pageManager.mainCatalog.ClickOnButtons.Add('ASUS_antonleonenko');

        Log.step('3. Get the price of the product and do an assertation.'); 
        await expect(pageManager.totals.Fields.Price).toHaveText('6,000.00');
    });
});