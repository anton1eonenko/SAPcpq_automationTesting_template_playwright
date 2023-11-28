import { BaseApplicationPage } from "../Pages/BaseApplicationPage";

export class HeaderMenu extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }

    Containers = {
        MainContainer: this.page.locator('[id="headerContainer"]').first(), 
        UserMenuDropdownContainer: this.page.locator('[id="userMenuDropdownContainer"]')
    };

    Buttons = {
        UserMenu: this.Containers.MainContainer.locator('[id="userMenu"]'), 
        RecentlyViewed: this.Containers.MainContainer.locator('[id="recentlyVisitedMenu"]'), 
        NewProjectOrQuotation: this.Containers.MainContainer.locator('[aria-label="New Project/Quotation"]')
    };

    UserMenuOptions = {
        UserPage: this.Containers.UserMenuDropdownContainer.locator('"User Page"'), 
        ManageGeneratedDocuments: this.Containers.UserMenuDropdownContainer.locator('"Manage Generated Documents"'), 
        QuoteLayout: this.Containers.UserMenuDropdownContainer.locator('"Quote Layout"'), 
        Reports: this.Containers.UserMenuDropdownContainer.locator('"Reports"'), 
        SignOut: this.Containers.UserMenuDropdownContainer.locator('"Sign Out"')
    }
}