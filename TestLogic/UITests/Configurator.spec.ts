import {expect} from '@playwright/test'; 
import {test, BaseTest} from '../BaseTest'
import { Url } from '../../Utils/Url';
import Log from '../../Utils/Logger'


test.describe('Configurator tests. @Configurator', () => {
    test.beforeEach(async ({page, pageManager}) => {
        BaseTest.setFeatureSuite.configurator();

        Log.preStep('Open the page.')
        await page.goto(Url.CPQUrl);

        Log.preStep('Enter credentials.');
        await pageManager.loginPage.LogIn('aleonenko', 'Qwerty123');  
    }); 
    test('Check the price on the Configurator page after configuration. @Configurator', async ({pageManager}) => {
        Log.step('1. Select Category "QA: Hardware".');
        await pageManager.categoriesDetails.SelectNecessaryCategory('QA: Hardware'); 

        Log.step('2. Select "ASUS_antonleonenko" laptop and click on "Configure" button.'); 
        await pageManager.mainCatalog.ClickOnButtons.Configure('ASUS_antonleonenko'); 

        Log.step('3. Select "HD150" hard drive and "Blu-ray" optical drive'); 
        await pageManager.ASUS_antonleonenko.ChooseAttributes.HardDrive('HD150'); 
        await pageManager.ASUS_antonleonenko.ChooseAttributes.OpticalDrive('Blu-ray');

        Log.step('4. Do an assertation'); 
        await expect(pageManager.configuratorCommon.Elements.Total).toContainText('6,240.00');
    });
});