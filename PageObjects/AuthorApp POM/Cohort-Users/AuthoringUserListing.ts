import { ElementFinder, element, By, ElementArrayFinder } from "protractor";

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
    lstUserName:ElementArrayFinder;
    arrwUsers:ElementFinder;
    ttlUser:ElementFinder;

    constructor(){

        this.lnkCohortName=element(By.xpath("//td[contains(text(),'Cohort 24')]"));
        this.btnCreateUser=element(By.xpath("//button[contains(text(),'Create User')]"));
        this.lnkUserName=element(By.xpath("//button[contains(text(),'Abhijeet')]"));
        this.txtCreateUserFirstName=element(By.xpath("//input[@ng-reflect-placeholder='First Name']"));
        this.txtCreateUserLastName=element(By.xpath("//input[@ng-reflect-placeholder='Last Name']"));
        this.btnGENERATE=element(By.xpath("//button[contains(text(),'Generate')]"));
        this.txtCreateUserEmail=element(By.xpath("//input[@ng-reflect-placeholder='Email']"));
        this.btnCreateUserCreate=element(By.xpath("//button[contains(text(),'CREATE')]"));
        this.txtEditUserFirstName=element(By.xpath("//input[@ng-reflect-placeholder='First Name']"));
        this.txtEditUserLastName=element(By.xpath("//input[@ng-reflect-placeholder='Last Name']"));
        this.txtEditEmail=element(By.xpath("//input[@ng-reflect-placeholder='Email']"));
        this.btnEditUserSave=element(By.xpath("//button[contains(text(),'Save')]"));
        this.lstUserName=element.all(By.xpath("//button[@name='User Click']"));
        this.arrwUsers=element(By.xpath("(//div[@class='mat-sort-header-pointer-right ng-trigger ng-trigger-rightPointer'])[1]"));
        this.ttlUser=element(By.xpath("//button[@aria-label='Change sorting for fname']"));
    }
}