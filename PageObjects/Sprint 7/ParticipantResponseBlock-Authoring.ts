import { ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "selenium-webdriver";

export class ParticipantResponseBlockPageLocate{

    txtLoginEmailId: ElementFinder;
    btnNext: ElementFinder;
    txtLoginPassword: ElementFinder;
    btnLogin: ElementFinder;
    lnkEditParticipantResponseHeader: ElementFinder;
    ttlParticipantResponseWindow: ElementFinder;
    drpJourneyScriptID:ElementFinder;
    //drpJourneyScripIDarrow: ElementFinder;
    drpJourneyScriptOptOne: ElementFinder;
    drpJourneyScriptOptTwo:ElementFinder;
    lstJourneyScriptIDoptions: ElementArrayFinder;
    tglShowExcerciseLabel: ElementFinder;
    btnParticipantResponseCancel: ElementFinder;
    btnParticipantResponseSave: ElementFinder;
    btnParticipantResponseWindowCrossIcon: ElementFinder;
    txtClientSearchBar: ElementFinder;
    colPetronas: ElementFinder;
    cntParticipantResponseBlock:ElementFinder;


    constructor(){
        this.txtLoginEmailId=element(By.xpath("//input[@type='email']"));
        this.btnNext=element(By.xpath("//span[contains(text(),'Next')]"));
        this.txtLoginPassword=element(By.xpath("//input[@type='password']"));
        this.btnLogin=element(By.xpath("//span[contains(text(),'Login')]"));
        this.lnkEditParticipantResponseHeader=element(By.xpath("//button[contains(text(),'Edit Participant Response')]"));
        this.ttlParticipantResponseWindow=element(By.xpath("//h2[contains(text(),'Participant Response')]"));
        this.drpJourneyScriptID=element(By.xpath("//h2[contains(text(),'Participant Response')]//following::input[@ng-reflect-placeholder='Journey Script ID']"));
        //this.drpJourneyScripIDarrow=element(By.xpath("//h2[contains(text(),'Participant Response')]//following::div[@class='mat-select-arrow']"));
        this.drpJourneyScriptOptOne=element(By.xpath("//span[contains(text(),' Journey No 1 ')]"));
        this.drpJourneyScriptOptTwo=element(By.xpath("//span[contains(text(),' Journey No 2 ')]"));
        this.lstJourneyScriptIDoptions=element.all(By.xpath("//div[@class='ng-tns-c59-471 ng-trigger ng-trigger-transformPanel mat-select-panel mat-primary']"));
        this.tglShowExcerciseLabel=element(By.xpath("//h2[contains(text(),'Participant Response')]//following::div[@class='mat-slide-toggle-thumb']"));
        this.btnParticipantResponseCancel=element(By.xpath("//button[contains(text(),'Cancel')]"));
        this.btnParticipantResponseSave=element(By.xpath("//button[contains(text(),'Save')]"));
        this.btnParticipantResponseWindowCrossIcon=element(By.xpath("//i[@class='momenta-icon author-icon icon-plus']"));
        this.txtClientSearchBar=element(By.xpath("//input[@class='search-bar__input ng-pristine ng-valid ng-touched']"));
        this.colPetronas=element(By.xpath("//span[contains(text(),'petronas')]"));
        this.cntParticipantResponseBlock=element(By.xpath("//p[contains(text(),'Participant Response Block')]"));
    }
}