import { ElementFinder, element } from "protractor";
import { By } from "protractor";

export class BluePrintPageLocate{

    tabLifecycleEditStage:ElementFinder;
    icnPlusMakeVisible:ElementFinder;
    icnPlusMakeAvailable:ElementFinder;
    icnPlusRemoveAccess:ElementFinder;
    icnPlusMakeInvisible:ElementFinder;
    radioStaticMakeVisible:ElementFinder;
    radioStaticMakeAvailable:ElementFinder;
    radioStaticRemoveAccess:ElementFinder;
    radioStaticMakeInvisible:ElementFinder;
    selectDateTime:ElementFinder;
    arrowAddMinute:ElementFinder;
    btnSaveEditStage:ElementFinder;
    icnPlusIncreaseDays:ElementFinder;
    btnSetDateTime:ElementFinder;
    icnLocked:ElementFinder;

    drpCondition1:ElementFinder;
    drpCondition2:ElementFinder;
    drpCondition3:ElementFinder;
    drpCondition4:ElementFinder;

    optDays:ElementFinder;
    optAfter:ElementFinder;
    optActivityStart:ElementFinder;
    optBluePrintAct1:ElementFinder;

    //Participant locators

    myJourney:ElementFinder;
    btnStartModule1:ElementFinder;
    btnStartActivity1:ElementFinder;
    btnStartModule2:ElementFinder;
    btnStartActivity2:ElementFinder;
    icnLockedBP1:ElementFinder;
    ttlBluePrintStage2:ElementFinder;
    ttlBluePrintStage3:ElementFinder;
    btnStartModule4:ElementFinder;
    btnStartActivity4:ElementFinder;

    constructor(){

        this.tabLifecycleEditStage=element(By.xpath("//div[contains(text(),'Lifecycle')]"));
        this.icnPlusMakeVisible=element(By.xpath("//label[contains(text(),'Make Visible')]//following::span[contains(text(),'+')][1]"));
        this.icnPlusMakeAvailable=element(By.xpath("//label[contains(text(),'Make Available')]//following::span[contains(text(),'+')][1]"));
        this.icnPlusRemoveAccess=element(By.xpath("//label[contains(text(),'Remove Access')]//following::span[contains(text(),'+')][1]"));
        this.icnPlusMakeInvisible=element(By.xpath("//label[contains(text(),'Make Invisible')]//following::span[contains(text(),'+')][1]"));
        this.radioStaticMakeVisible=element(By.xpath("(//label[contains(text(),'Make Visible')]//following::span[contains(text(),'Static')][1])//preceding::div[@class='mat-radio-outer-circle'][1]"));
        this.radioStaticMakeAvailable=element(By.xpath("(//label[contains(text(),'Make Available')]//following::span[contains(text(),'Static')][1])//preceding::div[@class='mat-radio-outer-circle'][1]"));
        this.radioStaticRemoveAccess=element(By.xpath("(//label[contains(text(),'Remove Access')]//following::span[contains(text(),'Static')][1])//preceding::div[@class='mat-radio-outer-circle'][1]"));
        this.radioStaticMakeInvisible=element(By.xpath("(//label[contains(text(),'Make Invisible')]//following::span[contains(text(),'Static')][1])//preceding::div[@class='mat-radio-outer-circle'][1]"));
        this.selectDateTime=element(By.xpath("//input[@placeholder='Select Date Time']"));
        this.arrowAddMinute=element(By.xpath("//button[@aria-label='Add a minute']//span"));
        this.btnSaveEditStage=element(By.xpath("//button[contains(text(),'Save')]"));
        this.icnPlusIncreaseDays=element(By.xpath("//button[@name='Increase Duration']//span[contains(text(),'+')]"));
        this.btnSetDateTime=element(By.xpath("//span[contains(text(),'Set')]"));
        this.icnLocked=element(By.xpath("//i[@aria-label='Current Status Locked']"));

        this.drpCondition1=element(By.xpath("(//select[@name='Select Condition'])[1]"));
        this.drpCondition2=element(By.xpath("(//select[@name='Select Condition'])[2]"));
        this.drpCondition3=element(By.xpath("(//select[@name='Select Condition'])[3]"));
        this.drpCondition4=element(By.xpath("(//select[@name='Select Condition'])[4]"));

        this.optDays=element(By.xpath("//option[contains(text(),'Days')]"));
        this.optAfter=element(By.xpath("//option[contains(text(),'After')]"));
        this.optActivityStart=element(By.xpath("//option[contains(text(),'Activity Start')]"));
        this.optBluePrintAct1=element(By.xpath("//option[contains(text(),'BluePrint Activity 1')]"));

        //Participant Locator

        this.myJourney=element(By.xpath("//span[@class='plugin-sidenav__item-text'][contains(text(),'My Journey')]"));
        this.btnStartModule1=element(By.xpath("(//h3[contains(text(),'BluePrint Activity 1')]//following::span[contains(text(),'Start')])[1]"));
        this.btnStartActivity1=element(By.xpath("(//h2[contains(text(),'BluePrint Activity 1')]//following::span[contains(text(),'Start')])[1]"));
        this.btnStartModule2=element(By.xpath("(//h3[contains(text(),'BluePrint Module 2')]//following::span[contains(text(),'Start')])[1]"));
        this.btnStartActivity2=element(By.xpath("(//h2[contains(text(),'BluePrint Activity 2')]//following::span[contains(text(),'Start')])[1]"));
        this.icnLockedBP1=element(By.xpath("//h3[contains(text(),'BluePrint Module 1')]//following::i[@aria-label='Current Status Locked']"));
        this.ttlBluePrintStage2=element(By.xpath("(//h2[@class='plugin-journey__stage-title'])[2]"));
        this.ttlBluePrintStage3=element(By.xpath("(//h2[@class='plugin-journey__stage-title'])[3]"));
        this.btnStartModule4=element(By.xpath("((//h2[@class='plugin-journey__stage-title'])[4]//following::button//span[contains(text(),'Start')])[1]"));
        this.btnStartActivity4=element(By.xpath("(//h2[contains(text(),'BluePrint Activity 4')]//following::span[contains(text(),'Start')])[1]"));
    }
}