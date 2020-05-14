import { element, ElementFinder, ElementArrayFinder } from "protractor";
import { By } from "protractor";

export class RegistrationFlowPageLocate {
    industryDDArrow: ElementFinder;
    txtEnterAge:ElementFinder;
    leftNavigationMenu:ElementFinder;
    selectRegionText: ElementFinder;
    selectGenderText: ElementFinder;
    manageAccText: ElementFinder;
    continueBtn: ElementFinder;
    
    constructor() {
        //this.industryDDArrow = element(By.xpath("//div[@class='mat-select-arrow']"));
        //this.industryDDArrow = element(By.xpath("//i[contains(@class,'pv-icon-down-open')]"));
        this.industryDDArrow = element(By.xpath("//select[@name='Please select your industry']"));
        this.txtEnterAge = element(By.xpath("//textarea[@id='AGE']"));
        this.leftNavigationMenu = element(By.xpath("//mat-nav-list[@aria-label='main navigation']"));
        this.selectRegionText = element(By.xpath("//h1[contains(text(),'Please select your region')]")); 
        this.selectGenderText = element(By.xpath("//p[contains(text(),'GENDER')]"));     
        this.manageAccText = element(By.xpath("//h1[contains(text(),'Do you manage accounts?')]"));
        this.continueBtn = element(By.xpath("//span[text()='Continue']/ancestor::button"));     
    }
}