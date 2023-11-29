import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { SideMenu } from "../Components/SideMenu";
import { BaseApplicationPage } from "./BaseApplicationPage";
import { HeaderHomeMenu } from "../Components/Home/HeaderHomeMenu";
import { FiltersModal } from "../Components/Home/Modals/FiltersModal";
import { CategoriesDetails } from "../Components/Categories/CategoriesDetails";
import { MainCatalog } from "../Components/Home/MainCatalog";
import { HeaderMenu } from "../Components/HeaderMenu";
import { ModifyPassword } from "../Components/UserMenu/UserPage/ModifyPassword";
import { ModifyPersonalDetails } from "../Components/UserMenu/UserPage/ModifyPersonalDetails"; 
import { UserDetails } from "../Components/UserMenu/UserPage/UserDetails"; 
import { UserPageHeaderMenu } from "../Components/UserMenu/UserPage/UserPageHeaderMenu";

export class PageManager {
    page: Page; 
    loginPage;
    sideMenu; 
    baseApplicationPage;
    headerHomeMenu; 
    filtersModal; 
    categoriesDetails;
    mainCatalog;
    headerMenu;
    modifyPassword; 
    modifyPersonalDetails;
    userDetails; 
    userPageHeaderMenu;

    constructor(page) {
        this.page = page; 
        this.loginPage = new LoginPage(page); 
        this.sideMenu = new SideMenu(page); 
        this.baseApplicationPage = new BaseApplicationPage(page);
        this.headerHomeMenu = new HeaderHomeMenu(page); 
        this.filtersModal = new FiltersModal(page); 
        this.categoriesDetails = new CategoriesDetails(page);
        this.mainCatalog = new MainCatalog(page); 
        this.headerMenu = new HeaderMenu(page);
        this.modifyPassword = new ModifyPassword(page); 
        this.modifyPersonalDetails = new ModifyPersonalDetails(page); 
        this.userDetails = new UserDetails(page); 
        this.userPageHeaderMenu = new UserPageHeaderMenu(page); 
    }
}