import { By, element, ElementFinder } from "protractor";

export class RegistrationFlowPageLocate {
    industryDDArrow: ElementFinder;
    txtEnterAge: ElementFinder;
    leftNavigationMenu: ElementFinder;
    selectRegionText: ElementFinder;
    selectGenderText: ElementFinder;
    manageAccText: ElementFinder;
    continueBtn: ElementFinder;

    constructor() {

        this.industryDDArrow = element(By.xpath("//select[@name='Please select your industry']"));
        this.txtEnterAge = element(By.xpath("//textarea[@id='AGE']"));
        this.leftNavigationMenu = element(By.xpath("//mat-nav-list[@aria-label='main navigation']"));
        this.selectRegionText = element(By.xpath("//*[contains(text(),'select your location') or contains(text(),'select your region')]"));
        this.selectGenderText = element(By.xpath("//p[contains(text(),'GENDER') or contains(text(),'Gender')]"));
        this.manageAccText = element(By.xpath("//*[contains(text(),'Do you manage account?')]"));
        this.continueBtn = element(By.xpath("//span[text()='Continue']/ancestor::button"));
    }
}