import { ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "protractor";

export class ParticipantActivitySingleSelectPageLocate {

    p_emailID: ElementFinder;
    p_password: ElementFinder;
    p_loginButton: ElementFinder;
    p_myJourneyTitle: ElementFinder;
    p_moduleStartButton: ElementFinder;
    p_activityStartButton: ElementFinder;
    p_moduleTitle: ElementFinder;
    p_activityTitle: ElementFinder;
    p_singleselectoption1: ElementFinder;
    p_singleselectoption2: ElementFinder;
    p_singleselectoption3: ElementFinder;
    p_singleselectoptionframe1: ElementFinder;
    p_singleselectoptionframe2: ElementFinder;
    p_singleselectoptionframe3: ElementFinder;
    p_singleselectclicked: ElementArrayFinder;
    p_singleSelectCheckedOption: ElementFinder;


    constructor() {
        this.p_emailID = element(By.id('mat-input-0'));
        this.p_password = element(By.id('password__field'));
        this.p_loginButton = element(By.xpath("//span[contains(text(),'Login')]"));
        this.p_myJourneyTitle = element(By.xpath("//h1[contains(text(),'My Journey')]"));
        this.p_moduleStartButton = element(By.xpath("//h6[contains(text(),'Opportunities and trends in the industry')]//parent::div//parent::div//following-sibling::div[@class='plugin-journey__right']//button"));
        this.p_activityStartButton = element(By.xpath("//h3[contains(text(),'Round 1: Opportunities and trends in the industry')]//following::div[@class='flex-view'][1]//button"));
        this.p_moduleTitle = element(By.xpath("//h3[contains(text(),'Opportunities and trends in the industry')]"));
        this.p_activityTitle = element(By.xpath("//span[contains(text(),'Round 1: Opportunities and trends in the industry')]"));
        this.p_singleselectoption1 = element(By.xpath("(//div[@class='mat-radio-inner-circle'])[1]"));
        this.p_singleselectoption2 = element(By.xpath("(//div[@class='mat-radio-inner-circle'])[2]"));
        this.p_singleselectoption3 = element(By.xpath("(//div[@class='mat-radio-inner-circle'])[3]"));
        this.p_singleselectclicked = element.all(By.xpath("//mat-radio-button[@class='plugin-common__radio mat-radio-button mat-accent mat-radio-checked']"));
        this.p_singleselectoptionframe1 = element(By.xpath("(//label[@class='mat-radio-label'])[1]"));
        this.p_singleselectoptionframe2 = element(By.xpath("(//label[@class='mat-radio-label'])[2]"));
        this.p_singleselectoptionframe3 = element(By.xpath("(//label[@class='mat-radio-label'])[3]"));
        this.p_singleSelectCheckedOption = element(By.xpath("(//div[@class='mat-radio-inner-circle'])[2]/../../.."));
    }
}