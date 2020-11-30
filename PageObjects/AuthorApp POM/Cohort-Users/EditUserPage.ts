import { ElementFinder, By, element } from "protractor";

export class EditUserPageLocate {

    btnUser:ElementFinder;




    lnkTitle1Journey:ElementFinder;

    txtFirstName:ElementFinder
    txtLastName:ElementFinder
    txtEmail:ElementFinder

    lnkUserFirstName:ElementFinder;

    btnCancel:ElementFinder
    btnGenerateAndEmail:ElementFinder;

    constructor() {

        this.btnUser = element(By.xpath("//div[@id='mat-tab-label-1-1']"));

        this.lnkTitle1Journey = element(By.xpath("//ul[@class='search-bar__ul-list user-landing-padding-20']/li[1]//span[@class='search-bar-title']"));

        this.lnkUserFirstName = element(By.xpath("//td[contains(.,'Jesna')]"));
          
       
        this.txtFirstName = element(By.xpath("//input[@id='mat-input-18']"));
        this.txtLastName = element(By.xpath("//input[@id='mat-input-19']"));
        this.txtEmail = element(By.xpath("//input[@id='mat-input-20']"));

        this.btnCancel = element(By.xpath("//button[@name='cancel-edit' and @class='btn-common btn-outline']"));
        this.btnGenerateAndEmail = element(By.xpath("//button[@class='btn-generate-pass btn-fill' and @name='cancel-edit']"));
        
        
    }

}