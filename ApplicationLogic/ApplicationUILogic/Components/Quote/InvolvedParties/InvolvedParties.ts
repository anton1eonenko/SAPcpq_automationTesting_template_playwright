import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class InvolvedParties extends BaseApplicationPage {
    constructor(page) {
        super(page);
    }; 

    Containers = {
        HeaderContainer: this.page.locator('[role="toolbar"]'), 
        TableContainer: this.page.locator('[id="involvedPartiesTable"]'),
    };

    DropDowns = {
        CreateInvolvedParty: this.Containers.HeaderContainer.locator('[id="addInvolvedPartyButton"]'), 
        DeleteInvolvedParty: this.Containers.HeaderContainer.locator('[title="Delete Involved Party"]'),
        ColumnLayot: this.Containers.HeaderContainer.locator('[title="Column layout"]')
    }; 

    Fields = {
        // depends on customization
    }
}