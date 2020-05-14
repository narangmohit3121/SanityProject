import { ElementFinder, element, By } from "protractor";

export class ConditionalActivityPageLocate{


    cntConditionalActivityPage:ElementFinder;
    fldSprint9:ElementFinder;
    btnlnkEditPage1:ElementFinder;
    btnlnkEditPage2:ElementFinder;
    btnlnkEditPage3:ElementFinder;
    txtUserRole:ElementFinder;
    btnSavePageDivider:ElementFinder;
    btnExitEditor:ElementFinder;
    btnPublish:ElementFinder;
    tabContent:ElementFinder;
    btnContinue:ElementFinder;
    rdSingleSelect:ElementFinder;
    btnGoToNxtModule:ElementFinder;
    btnSecurityAlertStart:ElementFinder;
    ttlConditionalModule:ElementFinder;

    constructor(){

        this.cntConditionalActivityPage=element(By.xpath("//p[contains(text(),'Conditional Activity Page')]"));
        this.fldSprint9=element(By.xpath("//p[contains(text(),'Sprint 9')]"));    
        this.btnlnkEditPage1=element(By.xpath("(//button[contains(text(),'Edit Page')])[1]"));
        this.btnlnkEditPage2=element(By.xpath("(//button[contains(text(),'Edit Page')])[2]"));
        this.btnlnkEditPage3=element(By.xpath("(//button[contains(text(),'Edit Page')])[3]"));
        this.txtUserRole=element(By.xpath("(//textarea[contains(@class,'mat-input-element mat-form-field-autofill-control')])[5]"));
        this.btnSavePageDivider=element(By.xpath("//button[contains(text(),'Save')]"));
        this.btnExitEditor=element(By.xpath("//span[contains(text(),'SAVE DRAFT')]"));
        this.btnPublish=element(By.xpath("//span[contains(text(),'PUBLISH ')]"));
        this.tabContent=element(By.xpath("//div[contains(text(),'Content')]"));
        this.btnContinue=element(By.xpath("//span[contains(text(),'Continue')]"));
        this.rdSingleSelect=element(By.xpath("//label[@class='mat-radio-label']"));
        this.btnGoToNxtModule=element(By.xpath("//span[contains(text(),'Go to Next Module')]"));
        this.btnSecurityAlertStart=element(By.xpath("//span[contains(text(),'Start')]"));
        this.ttlConditionalModule=element(By.xpath("//h1[contains(text(),'Conditional Module')]"));
    }
}