import { BaseApplicationPage } from "../../Pages/BaseApplicationPage";

export class HeaderHomeMenu extends BaseApplicationPage {
    constructor(page){
        super(page)
    }; 

    Containers = {
        HeaderContainer: this.MainContainers.HomeContainer.locator(this.page.locator('[id="catalogHeaderContainer"]'))
    }

    Buttons = {
        Search: this.Containers.HeaderContainer.locator('[title="Search"]'),
        Filters: this.Containers.HeaderContainer.locator('[title="Filters"]'), 
        Sort: this.Containers.HeaderContainer.locator('[title="Sort"]'), 
        SwitchToTabularOrListView: this.Containers.HeaderContainer.locator('[title="Switch to Tabular/List View"]'), 
        ShowAllProducts: this.Containers.HeaderContainer.locator('[title="Show all products"]')
    }
}