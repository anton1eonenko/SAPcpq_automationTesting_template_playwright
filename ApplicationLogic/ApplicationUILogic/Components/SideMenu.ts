import { BaseApplicationPage } from "../Pages/BaseApplicationPage";

export class SideMenu extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }

    Containers = {
        SideMenuContainer: this.page.locator('[id="sideMenuContainer"]'), 
        SetupMenuDropdownContainer: this.page.locator('[id="setupMenuDropdownContainer"]').first(), 
    }

    SideMenuTabs = {
        LoadExistingProjectQuotation: this.Containers.SideMenuContainer.locator('[title="Load Existing Project/Quotation"]'), 
        Catalog: this.Containers.SideMenuContainer.locator('[title="Catalog"]'), 
        Setup: this.Containers.SideMenuContainer.locator('[title="Setup"]').first(),
    }

    SetupMenuOptions = {
        Setup: this.Containers.SetupMenuDropdownContainer.locator('"Setup"'), 
        DeveloperConsole: this.Containers.SetupMenuDropdownContainer.locator('" Developer Console"'), 
        ScriptWorkbench: this.Containers.SetupMenuDropdownContainer.locator('" Script Workbench"'), 
        Log: this.Containers.SetupMenuDropdownContainer.locator('" Log"')

    }

    async OpenMenuTab(tab) {
        
    }
}