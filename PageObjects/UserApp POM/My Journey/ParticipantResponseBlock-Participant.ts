import { ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "selenium-webdriver";

export class ParticipantResponseBlockUserPageLocate{

    btnStartModule:ElementFinder;
    btnStartActivity:ElementFinder;
    ttlActivityPage:ElementFinder;
    singleSelectQuestion: ElementFinder;
    singleSelectOption: ElementFinder;
    singleSelectOptions: ElementArrayFinder;
    btnContinue:ElementFinder;
    multiSelectQuestion: ElementFinder;
    multiSelectOption:ElementFinder;
    multiSelectOptions: ElementArrayFinder;
    multiSelectQuestionResponseBlockPage: ElementFinder;
    singleSelectQuestionResponseBlockPage: ElementFinder;
    singleSelectAnswerResponseBlockPage: ElementFinder;
    multiSelectAnswerResponseBlockPage: ElementFinder;


    constructor(){
        this.btnStartModule=element(By.xpath("(//h3[contains(text(),'Module 1')]//following::button)[1]"));
        this.btnStartActivity=element(By.xpath("//h3[contains(text(),' Participant_Response_Block_Abhijeet ')]//following::button"));
        this.ttlActivityPage=element(By.xpath("//h3[contains(text(),' Participant_Response_Block_Abhijeet')]"));
        this.singleSelectQuestion=element(By.xpath("//p[contains(text(),'Page 1')]//following::h3[contains(text(),'Please select appropriate answer for Single Select')]"));
        this.singleSelectOption=element(By.xpath("//label[@class='mat-radio-label']//following::h3[contains(text(),'Test Single Select 2')]"));
        this.singleSelectOptions=element.all(By.xpath("//div[@class='plugin-single__row-details ng-star-inserted']"));    
        this.btnContinue=element(By.xpath("//span[contains(text(),'Continue')]"));
        this.multiSelectQuestion=element(By.xpath("//p[contains(text(),'Page 2')]//following::h3[contains(text(),'Please select appropriate answer for Multiple Select')]"));
        this.multiSelectOption=element(By.xpath("//label[@class='mat-checkbox-layout']//following::h3[contains(text(),'Test Multi Select 2')]"));
        this.multiSelectOptions=element.all(By.xpath("//div[@class='plugin-multiple__row-details ng-star-inserted']"));
        this.multiSelectQuestionResponseBlockPage=element(By.xpath("//p[contains(text(),'Page 3')]//following::span[contains(text(),'Please select appropriate answer for Multiple Select')]"));
        this.singleSelectQuestionResponseBlockPage=element(By.xpath("//p[contains(text(),'Page 3')]//following::span[contains(text(),'Please select appropriate answer for Single Select')]"));
        this.singleSelectAnswerResponseBlockPage=element(By.xpath("//span[contains(text(),'Please select appropriate answer for Single Select')]//following::span[contains(text(),'Test Single Select 2')]"));
        this.multiSelectAnswerResponseBlockPage=element(By.xpath("//span[contains(text(),'Please select appropriate answer for Multiple Select')]//following::span[contains(text(),'Test Multi Select 2')]"));


    }
}