import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class ShippingInfo extends BaseApplicationPage {
    constructor(page) {
        super(page)
    }; 

    Containers = {
        MainContainer: this.page.locator('[id="customFieldsBox"]'),
        CustomerContainer: this.page.locator('[class="cart-table-container"]'),
    }; 

    InputFields = {
        DeliveryDate: this.Containers.MainContainer.locator('[placeholder="dd/mm/yy"]'), 
        ShipTo: this.page.locator('//label[text()="Ship To"]//following-sibling::input'), 
        Name: this.Containers.CustomerContainer.locator('[id*="Name"]'), 
        Email: this.Containers.CustomerContainer.locator('[id*="Email"]'), 
        City: this.Containers.CustomerContainer.locator('[id*="City"]'), 
        State: this.Containers.CustomerContainer.locator('[id*="State"]'), 
        ZipCode: this.Containers.CustomerContainer.locator('[id*="Zip Code"]')
    }; 

    Buttons = {
        Calendar: this.Containers.MainContainer.locator('[title="Calendar"]'), 
        AddRow: this.Containers.CustomerContainer.locator('[id="Customer_addButton"]'), 
        LoadQuoteTableFromCustomTable: this.Containers.CustomerContainer.locator('[id*="executeAction"]'), 
        UploadExelFile: this.Containers.CustomerContainer.locator('[title="Upload Excel File"]'),
        Search: this.Containers.CustomerContainer.locator('[id*="search"]'),
        Save: this.page.locator('[id*="Save"]')
    }; 

    DropDown = {
        DownloadExcelFile: this.Containers.CustomerContainer.locator('[id*="Excel"]')
    };
};