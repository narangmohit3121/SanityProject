import { ElementFinder, element } from "protractor";
import { By } from "protractor";

export class ClientCopyJourneyPageLocate{

 //Client WebElements ----------------------------- Need to check why these are part of AdminLanding
 tabClient: ElementFinder;
 colPetronas: ElementFinder;
 colChevron: ElementFinder;
 txtClientSearch: ElementFinder;

 ttlPetronas: ElementFinder;
 btnJourneyPlus: ElementFinder;
 btnCopyCopyJourney: ElementFinder;
 mnuCopyJourney: ElementFinder;
 btnPreviewCopyJourney: ElementFinder;
 //journeyList: ElementFinder;

 //Copy Journey WebElements ---------------------- - Need to check why these are part of AdminLanding
 //momentaDialogContainer: ElementFinder;
 txtJourneyTitle: ElementFinder;
 txtJourneyDescription: ElementFinder;
 btnJourneyAuthSave: ElementFinder;
 toastMessageTitleismandatory:ElementFinder;
 SearchCollectionTxt:ElementFinder;
 SearchCollectionICON:ElementFinder;
 MasterTabLbl:ElementFinder;
 AutomationCopyJourneySelectBtn:ElementFinder;
 AutomationCopyJourneyTestCopied:ElementFinder;


 constructor() {
    //Client WebElements
    this.tabClient = element(By.id('mat-tab-label-0-1'));
    this.colPetronas = element(By.xpath("//span[@class='search-bar-title'][contains(text(),'petronas')]"));
    this.colChevron = element(By.xpath("//span[@class='search-bar-title'][contains(text(),'Chevron Corporation')]"));
    this.txtClientSearch = element(By.xpath("//input[@placeholder='Filter Collections']"));
    
    this.ttlPetronas = element(By.xpath("//h4[contains(text(),'Petronas')]"));
    this.btnJourneyPlus = element(By.xpath("//button[@aria-label='journey']"));
    this.btnCopyCopyJourney = element(By.xpath("(//button[contains(text(),'Copy')])[1]"));
    this.mnuCopyJourney = element(By.xpath("//span[contains(text(),'Copy Journey')]"))
    this.btnPreviewCopyJourney = element("(//button[contains(text(),'Preview')])[1]");

    this.SearchCollectionTxt = element(By.xpath("//input[@name='search collection']"));
    this.SearchCollectionICON = element(By.xpath("//i[@class='author-icon icon-search']"))

    this.AutomationCopyJourneySelectBtn = element(By.xpath("//button[@class='btn-common btn-outline']"))
    
    
  //  this.MasterTabLbl = element("(//div[@class='mat-tab-label-content'])[3]");

    //this.journeyList = element(By.xpath("//div[@class='journey-list__cont ng-star-inserted']//child::div[@class='journey-list__box journey-list--right']"));

    //Copy Journey WebElements
    //this.momentaDialogContainer = element(By.css('.mat-dialog-container ng-tns-c23-11 ng-trigger ng-trigger-dialogContainer ng-star-inserted'));
    this.txtJourneyTitle = element(By.xpath("//input[@name='Journey Title']"));
    this.txtJourneyDescription = element(By.id('mat-input-3'));
    this.btnJourneyAuthSave = element(By.xpath("//button[contains(text(),'SAVE')]"));
    this.toastMessageTitleismandatory = element(By.xpath("//div[contains(text(),' Title is mandatory. ')]"));// //div[contains(@class,'toast-error')]
    this.AutomationCopyJourneyTestCopied = element(By.xpath("//p[contains(text(),'AutomationCopyJourneyTest')]"));

    
}

}