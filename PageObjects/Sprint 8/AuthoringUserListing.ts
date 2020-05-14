import { ElementFinder, element, By } from "protractor";

export class AuthoringUserListingPageLocate{

    lnkCohortName:ElementFinder;
    btnCreateUser:ElementFinder;
    lnkUserName:ElementFinder;
    txtCreateUserFirstName:ElementFinder;
    txtCreateUserLastName:ElementFinder;
    btnGENERATE:ElementFinder;
    txtCreateUserEmail:ElementFinder;
    btnCreateUserCreate:ElementFinder;
    txtEditUserFirstName:ElementFinder;
    txtEditUserLastName:ElementFinder;
    txtEditEmail:ElementFinder;
    btnEditUserSave:ElementFinder;

    constructor(){

        this.lnkCohortName=element(By.xpath("//td[contains(text(),'Cohort 24')]"));
        this.btnCreateUser=element(By.xpath("//button[contains(text(),'Create User')]"));
        this.lnkUserName=element(By.xpath("//td[contains(text(),'Abhijeet')]"));
        this.txtCreateUserFirstName=element(By.xpath("//input[@ng-reflect-placeholder='First Name']"));
        this.txtCreateUserLastName=element(By.xpath("//input[@ng-reflect-placeholder='Last Name']"));
        this.btnGENERATE=element(By.xpath("//button[contains(text(),'Generate')]"));
        this.txtCreateUserEmail=element(By.xpath("//input[@ng-reflect-placeholder='Email']"));
        this.btnCreateUserCreate=element(By.xpath("//button[contains(text(),'CREATE')]"));
        this.txtEditUserFirstName=element(By.xpath("//input[@ng-reflect-placeholder='First Name']"));
        this.txtEditUserLastName=element(By.xpath("//input[@ng-reflect-placeholder='Last Name']"));
        this.txtEditEmail=element(By.xpath("//input[@ng-reflect-placeholder='Email']"));
        this.btnEditUserSave=element(By.xpath("//button[contains(text(),'Save')]"));
    }
}