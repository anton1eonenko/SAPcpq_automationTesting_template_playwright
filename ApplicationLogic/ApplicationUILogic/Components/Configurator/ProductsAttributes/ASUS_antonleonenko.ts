import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";


export class ASUS_antonleonenko extends BaseApplicationPage {
    constructor(page) {
        super(page);
    }; 

    Containers = {
        MainContainer: this.page.locator('[id="attributesContainer"]'),
    }; 

    ChooseAttributes = {
        HardDrive: async (param: string) => await this.page.locator(`//span[contains(.,"${param}")]/preceding-sibling::input//parent::*/parent::*`).click(), 
        OpticalDrive: async (param: string) => await this.page.locator(`//span[contains(.,"${param}")]/preceding-sibling::input//parent::*/parent::*`).click(), 
    };
};