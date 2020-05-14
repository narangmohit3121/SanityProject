import { element, ElementFinder } from "protractor";
import { By } from "protractor";

export class AddDescriptionPageLocate{
btnEditModuleMenu:ElementFinder;
btnOptionEditModule:ElementFinder;
txtModuleDescription:ElementFinder;
btnSaveModuleEdits:ElementFinder;
btnJourneySave:ElementFinder;
btnJourneyPublish:ElementFinder;
btnCancelJourney:ElementFinder;
participantMyJourney:ElementFinder;
//moduleDescriptionMyJourney:ElementFinder;
btnAddJourney:ElementFinder;
btnBackToJourney:ElementFinder;
participantHome: ElementFinder;
moduleDescriptionParticipant: ElementFinder;
errorToast:ElementFinder;

constructor(){
    //this.btnEditModuleMenu = element(By.xpath("//p[contains(text(),'Module 1A')]/ancestor::mat-panel-title/following-sibling::mat-panel-description//button"));
    this.btnOptionEditModule = element(By.xpath("//div[@class='mat-menu-content']/button[contains(text(),'Edit Module')]"));
    this.txtModuleDescription = element(By.xpath("//div[@class='cdk-overlay-pane']//input[@placeholder='Desciption']"));
    //this.txtModuleDescription = element(By.xpath("//div[@class='cdk-overlay-pane']//input[@ng-reflect-placeholder='Desciption']"));
    this.btnSaveModuleEdits = element(By.xpath("//div[@class='cdk-overlay-pane']//button[text()='Done']"));
    this.btnJourneySave = element(By.xpath("//button[@name='save']"));
    this.btnJourneyPublish = element(By.xpath("//button[@name='publish']"));
    this.btnCancelJourney = element(By.xpath("//button[@name='cancel']"));
    this.participantMyJourney = element(By.xpath("//a[@aria-label='My Journey']"));
    this.participantHome = element(By.xpath("//a[@aria-label='Home']"));
    this.moduleDescriptionParticipant = element(By.xpath("//div[@class='plugin-module__info']/p"));
    this.btnAddJourney = element(By.xpath("//div[@class='master-collection__header']/button[contains(@aria-label,'journey')]"));
    this.btnBackToJourney = element(By.xpath("//button[@name='Back']"));
    this.errorToast = element(By.xpath("//div[contains(@class,'toast-error')]"));
}

}