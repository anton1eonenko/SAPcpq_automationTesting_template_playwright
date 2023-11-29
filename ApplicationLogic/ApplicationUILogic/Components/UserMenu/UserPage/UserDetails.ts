import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class UserDetails extends BaseApplicationPage {
    constructor(page) {
        super(page)
    }; 

    Containers = {
        MainContainer: this.page.locator('[id="userDetailsTab"]'),
    };

    Buttons = {
        Calendar: this.Containers.MainContainer.locator('[title="Calendar"]').first(), 
        Save: this.Containers.MainContainer.locator('[class*="btn btn-primary"]'),
    }; 

    DropDowns = {
        DateFormat: this.Containers.MainContainer.locator('[id="selectFormat"]'), 
        DateSeparator: this.Containers.MainContainer.locator('[id="selectDate"]'), 
        NumberFormat: this.Containers.MainContainer.locator('[id="selectNumberFormat"]'), 
        DefaultMarket: this.Containers.MainContainer.locator('[id="selectDefaultMarket"]'), 
        DefaultDictionary: this.Containers.MainContainer.locator('[id="selectMLDictionary"]'), 
        UserTimeZone: this.Containers.MainContainer.locator('[id="userTimeZone"]'), 
        UserAddEditMeasurementLabelWeight: this.Containers.MainContainer.locator('[id="unitofMeasurement2"]'), 
        UserAddEditMeasurementLabelLength: this.Containers.MainContainer.locator('[id="unitofMeasurement3"]'), 
    }; 

    Checkboxes = {
        EnableAccessibilityFeatures: this.page.locator('//span[contains(text(),"Enable Accessibility Features")]/..//span[contains(@role, "presentation")]'),
        GrantAccessToYourCompanyAdmin: this.page.locator('//span[contains(text(),"Grant Access to your Company Admin")]/..//span[contains(@role, "presentation")]'), 
        GrantAccessToSupport: this.page.locator('//span[contains(text(),"Grant Access to support")]/..//span[contains(@role, "presentation")]'),
        OutOfOffice: this.page.locator('//span[contains(text(),"Out of office")]/..//span[contains(@role, "presentation")]')
    };

    async SelectDictionary(language: string) {      // not working yet, the problem with the pop-up window
        await this.DropDowns.DefaultDictionary.click();
        await this.page.waitForTimeout(2000);
        this.page.focus('//option[text()="${language}"]'); 
        await this.page.locator(`//option[text()="${language}"]`).click(); 
    }
};