import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class ModifyPersonalDetails extends BaseApplicationPage {
    constructor(page) {
        super(page);
    }; 

    Containers = {
        MainContainer: this.page.locator('[id="modifyPersonalDetailsTab"]'),
    };

    Fields = {
        FirtsName: this.Containers.MainContainer.locator('[id="firstName"]'), 
        LastName: this.Containers.MainContainer.locator('[id="lastName"]'), 
        Email: this.Containers.MainContainer.locator('[id="email"]'), 
        IDCode: this.Containers.MainContainer.locator('[id="idCode"]'), 
        Address1: this.Containers.MainContainer.locator('[id="address1"]'), 
        Address2: this.Containers.MainContainer.locator('[id="address2"]'), 
        City: this.Containers.MainContainer.locator('[id="city"]'), 
        ZIPCode: this.Containers.MainContainer.locator('[id="zip"]'), 
        Phone: this.Containers.MainContainer.locator('[id="phone"]'), 
        Fax: this.Containers.MainContainer.locator('[id="fax"]'), 
        Check_SalesRegion: this.Containers.MainContainer.locator('[id="customFields0"]'), 
        Cl_SalesRegion: this.Containers.MainContainer.locator('[id="customFields1"]'), 
        Kti_SalesRegion: this.Containers.MainContainer.locator('[id="customFields2"]'), 
        KYA_SalesRegion: this.Containers.MainContainer.locator('[id="customFields3"]')
    }; 

    DropDowns = {
        CountryAndRegion: this.Containers.MainContainer.locator('[id="country"]')
    };
};