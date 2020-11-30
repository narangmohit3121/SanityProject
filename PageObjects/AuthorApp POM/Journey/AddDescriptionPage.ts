import { element, ElementFinder } from "protractor";
import { By } from "protractor";

export class AddDescriptionPageLocate{
    
btnEditModuleMenu:ElementFinder;
ThreeDotsOfNewModule1A:ElementFinder;
btnOptionEditModule:ElementFinder;
txtModuleDescription:ElementFinder;
btnSaveModuleEdits:ElementFinder;
btnJourneySave:ElementFinder;
btnJourneyPublish:ElementFinder;
btnCancelJourney:ElementFinder;
participantMyJourney:ElementFinder;
//moduleDescriptionMyJourney:ElementFinder;
UpdatedmoduleDescriptionParticipant:ElementFinder;
btnAddJourney:ElementFinder;
btnBackToJourney:ElementFinder;
participantHome: ElementFinder;
moduleDescriptionParticipant: ElementFinder;
errorToast:ElementFinder;



constructor(){
    //this.btnEditModuleMenu = element(By.xpath("//p[contains(text(),'Module 1A')]/ancestor::mat-panel-title/following-sibling::mat-panel-description//button"));
    
  //  this.ThreeDotsOfNewModule1A = element(By.xpath("(//i[@class='author-icon icon-dots master-collection__icon'])[3]"));
    this.ThreeDotsOfNewModule1A = element(By.xpath("//p[contains(text(),'New Module 1A')]/ancestor::div[@class='cdk-drop-list ng-star-inserted']//button[contains(@name,'menu')]"));

    this.btnOptionEditModule = element(By.xpath("//div[@class='mat-menu-content']/button[contains(text(),'Edit Module')]"));
    this.txtModuleDescription = element(By.xpath("//textarea[@name='description']"));
    //this.txtModuleDescription = element(By.xpath("//div[@class='cdk-overlay-pane']//input[@ng-reflect-placeholder='Desciption']"));
    this.btnSaveModuleEdits = element(By.xpath("//button[@class='btn-common btn-fill']"));
    this.btnJourneySave = element(By.xpath("//button[@name='save']"));
    this.btnJourneyPublish = element(By.xpath("//button[@name='publish']"));
    this.btnCancelJourney = element(By.xpath("//button[@name='cancel']"));
    this.participantMyJourney = element(By.xpath("//a[@aria-label='My Journey']"));
    this.participantHome = element(By.xpath("//a[@aria-label='Home']"));
    this.moduleDescriptionParticipant = element(By.xpath("//div[@class='plugin-module__info']/p"));
    this.UpdatedmoduleDescriptionParticipant = element(By.xpath("//p[@class='plugin-module__dis']"));

    this.btnAddJourney = element(By.xpath("//div[@class='master-collection__header']/button[contains(@aria-label,'journey')]"));
    this.btnBackToJourney = element(By.xpath("//button[@name='Back']"));
    this.errorToast = element(By.xpath("//div[contains(@class,'toast-error')]"));
}

}