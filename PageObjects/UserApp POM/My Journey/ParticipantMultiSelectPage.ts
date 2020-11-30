import { ElementFinder, element, ElementArrayFinder } from "protractor";
//import { By } from "selenium-webdriver";
import { By } from "protractor";

export class ParticipantActivityMultiSelectPageLocate {

    p_emailID: ElementFinder;
    p_password: ElementFinder;
    p_loginButton: ElementFinder;
    p_myJourneyTitle: ElementFinder;
    p_moduleStartButton: ElementFinder;
    p_activityStartButton: ElementFinder;
    p_moduleTitle: ElementFinder;
    p_activityTitle: ElementFinder;
    p_multiselectoption1: ElementFinder;
    p_multiselectoption2: ElementFinder;
    p_multiselectoption3: ElementFinder;
    p_multiselectoptionframe1: ElementFinder;
    p_multiselectoptionframe2: ElementFinder;
    p_multiselectoptionframe3: ElementFinder;
    p_multiselectclicked: ElementArrayFinder;

    angularCheckbox:ElementFinder;
    protracotCheckbox:ElementFinder;
    postmanCheckbox:ElementFinder
    genkinCheckbox:ElementFinder;
    bitBucketCheckbox:ElementFinder;


    // Multiselect dropdown
    OurCustomersLbl:ElementFinder;
    NothingSelectedDD:ElementFinder;
    NothingSelectedDDArrow:ElementFinder;
    MicrosoftCheckBoxOption:ElementFinder;
    CocaColaCheckBoxOption:ElementFinder;
    PetronasCheckBoxOption:ElementFinder;
    ChevronCheckBoxOption:ElementFinder;


    constructor() {
        this.p_emailID = element(By.id('mat-input-0'));
        this.p_password = element(By.id('password__field'));
        this.p_loginButton = element(By.xpath("//span[contains(text(),'Login')]"));
        this.p_myJourneyTitle = element(By.xpath("//h1[contains(text(),'My Journey')]"));
        this.p_moduleStartButton = element(By.xpath("//h6[contains(text(),'Opportunities and trends in the industry')]//parent::div//parent::div//following-sibling::div[@class='plugin-journey__right']//button"));
        this.p_activityStartButton = element(By.xpath("//div[contains(text(),'What is important in this industry to succeed')]//following::div[@class='flex-view'][1]//button"));
        this.p_moduleTitle = element(By.xpath("//h3[contains(text(),'Opportunities and trends in the industry')]"));
        this.p_activityTitle = element(By.xpath("//span[contains(text(),'What is important in this industry to succeed')]"));
        this.p_multiselectoption1 = element(By.xpath("(//div[@class='mat-checkbox-inner-container'])[1]"));
        this.p_multiselectoption2 = element(By.xpath("(//div[@class='mat-checkbox-inner-container'])[2]"));
        this.p_multiselectoption3 = element(By.xpath("(//div[@class='mat-checkbox-inner-container'])[3]"));
        this.p_multiselectclicked = element.all(By.xpath("//div[@class='ng-star-inserted plugin-multiple__row-details active']"));
        //this.p_multiselectoptionframe1 = element(By.xpath("(//div[@class='plugin-multiple__row-details ng-star-inserted'])[1]"));
        this.p_multiselectoptionframe1 = element(By.xpath("(//div[@class='ng-star-inserted plugin-multiple__row-details active'])[1]"));
        //this.p_multiselectoptionframe2 = element(By.xpath("(//div[@class='plugin-multiple__row-details ng-star-inserted'])[2]"));
        this.p_multiselectoptionframe2 = element(By.xpath("(//div[@class='ng-star-inserted plugin-multiple__row-details active'])[2]"));
        this.p_multiselectoptionframe3 = element(By.xpath("(//div[@class='plugin-multiple__row-details ng-star-inserted'])[3]"));
      
        this.angularCheckbox = element(By.xpath("//span[contains(text(),'Angular')]/ancestor::mat-checkbox//label[contains(@class,'mat-checkbox-layout')]"));
        this.protracotCheckbox = element(By.xpath("//span[contains(text(),'Protractor')]/ancestor::mat-checkbox//label[contains(@class,'mat-checkbox-layout')]"));
        this.postmanCheckbox = element(By.xpath("//span[contains(text(),'Postman')]/ancestor::mat-checkbox//label[contains(@class,'mat-checkbox-layout')]"));
        this.genkinCheckbox = element(By.xpath("//span[contains(text(),'Jenkin')]/ancestor::mat-checkbox//label[contains(@class,'mat-checkbox-layout')]"));
        this.bitBucketCheckbox = element(By.xpath("//span[contains(text(),'Bit Bucket')]/ancestor::mat-checkbox//label[contains(@class,'mat-checkbox-layout')]"));
       
        // Multiselect dropdown
        this.OurCustomersLbl = element(By.xpath("//p[@class='plugin-multiple__title activity-header__title-container activity__title']"));
        this.NothingSelectedDD = element(By.xpath("//div[@class='mat-select-value']"));
        this.NothingSelectedDDArrow = element(By.xpath("//div[@class='mat-select-arrow']"));
        this.MicrosoftCheckBoxOption = element(By.xpath("//span[contains(.,'Microsoft')]"));
        this.CocaColaCheckBoxOption = element(By.xpath("//span[contains(.,'Coca Cola')]"));
        this.PetronasCheckBoxOption = element(By.xpath("//span[contains(.,'Petronas')]"));
        this.ChevronCheckBoxOption = element(By.xpath("//span[contains(.,'Chevron')]"));
        



   
    }
}