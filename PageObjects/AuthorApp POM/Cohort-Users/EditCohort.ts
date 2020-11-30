import { ElementFinder, element, By } from "protractor";

export class EditCohortPageLocate{

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
    txtToggleEnabled:ElementFinder;
    tglEnabled:ElementFinder;
    ttlCohort:ElementFinder;
    btnSaveChrSettings:ElementFinder;

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
        this.txtToggleEnabled=element(By.xpath("(//span[@class='ng-star-inserted'])[2]"));
        this.tglEnabled=element(By.xpath("//div[@class='mat-slide-toggle-thumb']"));
        this.ttlCohort=element(By.xpath("//button[contains(text(),' CohortEdit Cohort ')]"));
        this.btnSaveChrSettings=element(By.xpath("//button[contains(text(),'Save')]"));
    }
}