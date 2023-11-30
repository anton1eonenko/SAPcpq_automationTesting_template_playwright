import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class CustomFields extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }; 

    Containers = {
        MainContainer: this.page.locator('[id="cartCustomFields"]'),
    }

    InputFields = {
        CustomerCode: this.page.locator('//label[text()="Customer Code"]//following-sibling::input'),
        CustomerName: this.page.locator('//label[text()="Customer Name"]//following-sibling::input'), 
        MMR: this.page.locator('//label[text()="Customer Name"]//following-sibling::input'),
        MOL_WAREHOUSE_COPY: this.page.locator('//label[text()="MOL_WAREHOUSE_COPY"]//following-sibling::input'), 
        VNCartHasLaptop: this.page.locator('//label[text()="VN Cart Has Laptop"]//following-sibling::input'), 
        EndCustomerCountry: this.page.locator('//label[text()="End Customer Country"]//following-sibling::input'), 
        EndCustomerName: this.page.locator('//label[text()="End Customer Name"]//following-sibling::input'), 
        EPROwner: this.page.locator('//label[text()="EPR Owner"]//following-sibling::input'), 
        EPRCreator: this.page.locator('//label[text()="EPR Creator"]//following-sibling::input'), 
        EPRFinalApprover: this.page.locator('//label[text()="EPR Final Approver"]//following-sibling::input'), 
        OpportunityOwner: this.page.locator('//label[text()="Opportunity Owner"]//following-sibling::input'), 
        VNResponsibleApproverId: this.page.locator('//label[text()="VN Responsible Approver Id"]//following-sibling::input'), 
        QuoteStatusAO: this.page.locator('//label[text()="Quote Status AO"]//following-sibling::input'), 
        APUShipBeforeDate: this.page.locator('//label[text()="APU Ship before date"]//following-sibling::input'),
        VKA_Duration: this.page.locator('//label[text()="VKA_Duration"]//following-sibling::input'), 
        Allow_Paste: this.page.locator('//label[text()="Allow_Paste"]//following-sibling::input'), 
        AVApproveVersion: this.page.locator('//label[text()="AV ApproveVersion"]//following-sibling::input'), 
        Opportunity: this.page.locator('//label[text()="Opportunity"]//following-sibling::input'), 
    };

    Buttons = {
        CollapseAndExpand: this.Containers.MainContainer.locator('[title="Collapse/Expand Section"]'),
    };

    DropDowns = {
        DealType: this.page.locator('//label[text()="Deal Type"]//following-sibling::select'), 
        Warehouse: this.page.locator('//label[text()="Warehouse"]//following-sibling::select'), 
        Standard: this.page.locator('//label[text()="Warehouse"]//following-sibling::select')
    }
}