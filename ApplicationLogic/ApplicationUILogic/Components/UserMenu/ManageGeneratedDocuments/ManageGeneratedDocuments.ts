import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";


export class ManageGeneratedDocuments extends BaseApplicationPage {
    constructor(page) {
        super(page)
    }; 

    Containers = {
        MainContainer: this.page.locator('[class*="manage-generated-quotes-page"]'), 
    };

    Buttons = {
        DeleteSelected: this.Containers.MainContainer.locator('[value="Delete Selected"]'), 
        DeleteAll: this.Containers.MainContainer.locator('[value="Delete All"]'), 
        SelectAll: this.Containers.MainContainer.locator('[value="Select All"]'), 
        Search: this.Containers.MainContainer.locator('[value="Search"]'),
        Delete: this.Containers.MainContainer.locator('[alt*="Delete"]'),
    }; 

    InputFields = {
        FileName: this.Containers.MainContainer.locator('[name*="FilterFilename"]'), 
        Size: this.Containers.MainContainer.locator('[name*="FilterFilesize"]'), 
        DateTimeCreated: this.Containers.MainContainer.locator('[name*="FilterDate_Created"]')

    }; 

    Checkboxes = {
        SelectCheckbox: this.Containers.MainContainer.locator('[name*="idForDelete"]')
    };
}