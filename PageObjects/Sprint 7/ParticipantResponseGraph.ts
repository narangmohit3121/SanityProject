import { ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "selenium-webdriver";

export class ParticipantResponseGraphPageLocate{

    btnStartModule2:ElementFinder;
    btnStartActivityResponseGraph:ElementFinder;
    ttlActivityPageResponseGraph:ElementFinder;
    singleSelectQuestion: ElementFinder;
    singleSelectOption: ElementFinder;
    singleSelectOptions: ElementArrayFinder;
    btnContinue:ElementFinder;
    multiSelectQuestion: ElementFinder;
    multiSelectOption1:ElementFinder;
    multiSelectOption2:ElementFinder;
    multiSelectOptions: ElementArrayFinder;

    constructor(){

        this.btnStartModule2=element(By.xpath("(//h3[contains(text(),'Module 2')]//following::button)[1]"));
        this.btnStartActivityResponseGraph=element(By.xpath("//h3[contains(text(),' Response_Graph_Abhijeet ')]//following::button"));
        this.ttlActivityPageResponseGraph=element(By.xpath("//h3[contains(text(),' Response_Graph_Abhijeet')]"));
        this.singleSelectQuestion=element(By.xpath("//p[contains(text(),'Page 1')]//following::h3[contains(text(),'Where is Statue of Liberty Located')]"));
        this.singleSelectOption=element(By.xpath("//label[@class='mat-radio-label']//following::h3[contains(text(),'New York')]"));
        this.singleSelectOptions=element.all(By.xpath("//div[@class='plugin-single__row-details ng-star-inserted']"));
        this.multiSelectQuestion=element(By.xpath("//p[contains(text(),'Page 2')]//following::h3[contains(text(),'Which of the following are Asian Countries')]"));
        this.multiSelectOption1=element(By.xpath("//label[@class='mat-checkbox-layout']//following::h3[contains(text(),'China')]"));
        this.multiSelectOption2=element(By.xpath("//label[@class='mat-checkbox-layout']//following::h3[contains(text(),'India')]"));
        this.multiSelectOptions=element.all(By.xpath("//div[@class='plugin-multiple__row-details ng-star-inserted']"));
    }

}