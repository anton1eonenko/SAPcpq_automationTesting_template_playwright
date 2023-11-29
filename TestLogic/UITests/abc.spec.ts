import {expect} from '@playwright/test'; 
import {test} from '../BaseTest'
import { DefaultDictionaryEnum } from '../../Enums/Components/UserMenu/UserPage/UserDetailsEnums';
import { Url } from '../../Utils/Url';
import Log from '../../Utils/Logger'

test.describe('abc', async () => {
    test('abc', async ({pageManager, page}) => {
        Log.step('1. Заходим на страницу');
        await page.goto(Url.CPQUrl);
        Log.step('2. Вводим креды');
        await pageManager.loginPage.LogIn('aleonenko', 'Qwerty123');  
        Log.step('3. Выбираем категорию Хардвэйр');
        await pageManager.categoriesDetails.SelectNecessaryCategory('QA: Hardware'); 
        Log.step('4. Выбираем нужный ноут');
        await pageManager.mainCatalog.ClickOnButtons.Add('ASUS_antonleonenko');
    })
})