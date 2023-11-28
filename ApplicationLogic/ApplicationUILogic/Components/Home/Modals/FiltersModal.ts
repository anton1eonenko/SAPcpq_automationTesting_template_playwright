import { BasePage } from "../../../../BasePage";

export class FiltersModal extends BasePage {
    constructor(page) {
        super(page)
    }; 

    DropDownLocators = {
        MainDropDownLocator: this.page.locator('[id="FilterDropdown"]')
    }

    Fields = {
        Name: this.DropDownLocators.MainDropDownLocator.locator('[id="Name"]'), 
        Description: this.DropDownLocators.MainDropDownLocator.locator('[id="Description"]'), 
        PartNumber: this.DropDownLocators.MainDropDownLocator.locator('[id="PartNumber"]'), 
        Type: this.DropDownLocators.MainDropDownLocator.locator('[id="Type"]'), 
        PriceLower: this.DropDownLocators.MainDropDownLocator.locator('[id="PriceLower"]'), 
        PriceHigher: this.DropDownLocators.MainDropDownLocator.locator('[id="PriceHigher"]')
    }

    Buttons = {
        Ok: this.DropDownLocators.MainDropDownLocator.locator('"Ok"'), 
        Cancel: this.DropDownLocators.MainDropDownLocator.locator('"Cancel"')
    }

}