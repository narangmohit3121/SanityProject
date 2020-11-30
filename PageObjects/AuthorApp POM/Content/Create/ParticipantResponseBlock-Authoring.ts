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
    selectDrpJourneyScriptOptTwo: ElementFinder;


    constructor(){
        this.txtLoginEmailId=element(By.xpath("//input[@type='email']"));
        this.btnNext=element(By.xpath("//span[contains(text(),'Next')]"));
        this.txtLoginPassword=element(By.xpath("//input[@type='password']"));
        this.btnLogin=element(By.xpath("//span[contains(text(),'Login')]"));
        this.lnkEditParticipantResponseHeader=element(By.xpath("(//button[contains(text(),'Edit Participant Response')])[1]"));
        this.ttlParticipantResponseWindow=element(By.xpath("//div[contains(@class,'header')]//h2"));
        this.drpJourneyScriptID=element(By.xpath("//input[contains(@name,'ID of response')]"));
        //this.drpJourneyScripIDarrow=element(By.xpath("//h2[contains(text(),'Participant Response')]//following::div[@class='mat-select-arrow']"));
        this.drpJourneyScriptOptOne=element(By.xpath("//span[contains(text(),' Journey No 1')]"));
        this.drpJourneyScriptOptTwo=element(By.xpath("//span[contains(text(),' Journey No 2')]"));
        this.selectDrpJourneyScriptOptTwo=element(By.xpath("//span[contains(text(),' Journey No 2')]/.."));
        this.lstJourneyScriptIDoptions=element.all(By.xpath("//div[contains(@class,'autocomplete')]//mat-option//span"));
        this.tglShowExcerciseLabel=element(By.css("mat-slide-toggle[name*='Exercise Label'] label"));
        this.btnParticipantResponseCancel=element(By.xpath("//mat-dialog-container//button[@name='cancel' and not(contains(@class,'close'))]"));
        this.btnParticipantResponseSave=element(By.xpath("//div[contains(@class,'submit')]//button[not(contains(@class,'create-field')) and contains(text(),'Ok')]"));
        this.btnParticipantResponseWindowCrossIcon=element(By.xpath("//i[contains(@class,'icon-plus')]"));
        this.txtClientSearchBar=element(By.xpath("//input[@class='search-bar__input ng-pristine ng-valid ng-touched']"));
        this.colPetronas=element(By.xpath("//span[contains(text(),'petronas')]"));
        this.cntParticipantResponseBlock=element(By.xpath("//p[contains(text(),'Participant Response Block')]"));
    }
}