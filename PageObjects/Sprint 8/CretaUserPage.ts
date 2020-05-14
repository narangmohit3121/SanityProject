import { ElementFinder, By, element } from "protractor";

export class CreateUserPageLocate {

    btnUser:ElementFinder;
    lnkTitle1:ElementFinder;
    lnkCohortTitle:ElementFinder;
    btnCreateUser:ElementFinder;
    lblCreateUser:ElementFinder;

    btnCreate:ElementFinder

    txtFirstName:ElementFinder
    txtLastName:ElementFinder
    txtEmail:ElementFinder

    lnkUserFirstName:ElementFinder;
    


    constructor() {

        this.btnUser = element(By.xpath("//div[@id='mat-tab-label-1-1']"));
        this.lnkTitle1 = element(By.xpath("(//a[@href='javascript:void(0)']//span)[1]"));
        this.lnkCohortTitle = element(By.xpath("(//tr[@class='mat-row ng-star-inserted']//td[2])[1]"));
        this.btnCreateUser = element(By.xpath("(//button[@class='btn-common btn-outline'])[1]"));
        this.lblCreateUser = element(By.xpath("//h3[@class='modal-common__title generic-border']"));

        this.btnCreateUser = element(By.xpath("//button[text()='CREATE']"));


        this.lnkUserFirstName = element(By.xpath("//td[contains(.,'Kendell')]"));
          
       
        this.txtFirstName = element(By.xpath("//input[@id='mat-input-13']"));
        this.txtLastName = element(By.xpath("//input[@id='mat-input-14']"));
        this.txtEmail = element(By.xpath("//input[@id='mat-input-15']"));

        
        

        
        
      

    }

}