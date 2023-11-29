import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class ModifyPassword extends BaseApplicationPage {
    constructor(page) {
        super(page)
    }; 

    Containers = {
        MainContainer: this.page.locator('[id="modifyPasswordWrapper"]')
    };

    Fields = {
        Password: this.Containers.MainContainer.locator('[id="password"]'), 
        NewPassword: this.Containers.MainContainer.locator('[id="newPass"]'), 
        RetypeNewPassword: this.Containers.MainContainer.locator('[id="retNewPass"]')
    }; 

    Buttons = {
        ChangePassword: this.Containers.MainContainer.locator('[data-bind*="saveChangedPassword"]')
    };
};