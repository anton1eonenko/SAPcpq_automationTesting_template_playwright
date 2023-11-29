import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class UserPageHeaderMenu extends BaseApplicationPage {
    constructor(page) {
        super(page);
    }; 

    Containers = {
        MainContainer: this.page.locator('[id="userPersonalizationTabs"]'),
    };

    Buttons = {
        UserDetails: this.Containers.MainContainer.locator('"User details"'), 
        ModifyPersonalDetails: this.Containers.MainContainer.locator('"Modify Personal Details"'), 
        ModifyPassword: this.Containers.MainContainer.locator('"Modify Password"')
    };
};