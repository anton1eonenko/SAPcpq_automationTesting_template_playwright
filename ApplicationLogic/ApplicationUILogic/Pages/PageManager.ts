import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { SideMenu } from "../Components/SideMenu";
import { BaseApplicationPage } from "./BaseApplicationPage";
import { HeaderHomeMenu } from "../Components/Home/HeaderHomeMenu";
import { FiltersModal } from "../Components/Home/Modals/FiltersModal";
import { CategoriesDetails } from "../Components/Categories/CategoriesDetails";
import { MainCatalog } from "../Components/Home/MainCatalog";

export class PageManager {
    page: Page; 
    loginPage;
    sideMenu; 
    baseApplicationPage;
    headerHomeMenu; 
    filtersModal; 
    categoriesDetails;
    mainCatalog;




    constructor(page) {
        this.page = page; 
        this.loginPage = new LoginPage(page); 
        this.sideMenu = new SideMenu(page); 
        this.baseApplicationPage = new BaseApplicationPage(page);
        this.headerHomeMenu = new HeaderHomeMenu(page); 
        this.filtersModal = new FiltersModal(page); 
        this.categoriesDetails = new CategoriesDetails(page);
        this.mainCatalog = new MainCatalog(page); 
    }
}