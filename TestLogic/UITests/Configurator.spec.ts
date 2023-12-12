import {expect} from '@playwright/test'; 
import {test, BaseTest} from '../BaseTest'
import { Url } from '../../Utils/Url';
import Log from '../../Utils/Logger'


test.describe('Configurator tests. @Configurator', () => {
    test.beforeEach(async ({page, pageManager}) => {
        BaseTest.setFeatureSuite.configurator();

        Log.preStep('Open the page.');
        await page.goto(Url.CPQUrl);

        Log.preStep('Enter credentials.');
        await pageManager.loginPage.LogIn('aleonenko', 'Qwerty123');  
    }); 
    test('Check the price on the Configurator page after configuration. @Configurator', async ({pageManager, page}) => {
        Log.step('1. Select Category "QA: Hardware".');
        await pageManager.categoriesDetails.SelectNecessaryCategory('QA: Hardware'); 

        Log.step('2. Select "ASUS_antonleonenko" laptop and click on "Configure" button.'); 
        await pageManager.mainCatalog.ClickOnButtons.Configure('ASUS_antonleonenko'); 

        Log.step('3. Select "HD150" hard drive and "Blu-ray" optical drive'); 
        await pageManager.ASUS_antonleonenko.ChooseAttributes.HardDrive('HD150'); 
        await pageManager.ASUS_antonleonenko.ChooseAttributes.OpticalDrive('Blu-ray');

        Log.step('4. Click on "Add to quote" button'); 
        await pageManager.configuratorCommon.Buttons.AddToQuote.click();

        Log.step('5. Get a number of quote'); 
        const quoteNumber = await pageManager.quoteHeader.Elements.QuoteNumber.innerText();

        Log.step('6. Go to existing quotes'); 
        await pageManager.sideMenu.SideMenuTabs.LoadExistingProjectQuotation.click(); 

        Log.step('7. Do an assertation: check the number of created quote');
        const quoteNumberInQuoteList = await page.locator('[data-title="Quote Number"]').first().innerText()
        await expect(`Quote #${quoteNumberInQuoteList}`).toBe(quoteNumber);
    });
});