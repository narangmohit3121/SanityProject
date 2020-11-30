import { ElementFinder, By, element } from "protractor";

export class CreateUserPageLocate {

    btnUser:ElementFinder;
    lnkTitle1:ElementFinder;
    lnkCohortTitle:ElementFinder;
    btnCreateUser:ElementFinder;
    lblCreateUser:ElementFinder;
    lnkUserName:ElementFinder;
    lnkUserName2:ElementFinder;
    btnCreate:ElementFinder;
    btnCancelCreateUsr:ElementFinder;

    txtFirstName:ElementFinder
    txtLastName:ElementFinder
    txtEmail:ElementFinder

    lnkUserFirstName:ElementFinder;
    btnCohortFunction:ElementFinder;
    


    constructor() {

        this.btnUser = element(By.xpath("//div[text()='Cohorts/Users']")); ////div[@id='mat-tab-label-1-1']
        this.lnkTitle1 = element(By.xpath("(//a[@href='javascript:void(0)']//span)[1]"));
        this.lnkCohortTitle = element(By.xpath("(//tr[@class='mat-row ng-star-inserted']//td[2])[1]"));
        //this.btnCreateUser = element(By.xpath("(//button[@class='btn-common btn-outline'])[1]"));
        this.lblCreateUser = element(By.xpath("//h3[@class='modal-common__title generic-border']"));
        this.lnkUserName = element(By.xpath("//button[contains(text(),'Jesna')]"));
        this.lnkUserName2 = element(By.xpath("//button[contains(text(),'Adwerd')]"));
        this.btnCreateUser = element(By.xpath("//button[contains(text(),'Create User')]"));
        this.btnCreate=element(By.xpath("//button[contains(text(),'CREATE')]"));
        this.btnCancelCreateUsr = element(By.xpath("//button[contains(text(),'CANCEL')]"));


        this.lnkUserFirstName = element(By.xpath("//td[contains(.,'Kendell')]"));
          
       
        this.txtFirstName = element(By.xpath("//input[@id='mat-input-13']"));
        this.txtLastName = element(By.xpath("//input[@id='mat-input-14']"));
        this.txtEmail = element(By.xpath("//input[@id='mat-input-15']"));
    
        this.btnCohortFunction = element(By.xpath("//button[text()=' Cohort Functions ']"));
        
        

        
        
      

    }

}