import { ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "protractor";


export class MasterCopyJourneyPageLocate {

    //Client WebElements
      MasterTab:ElementFinder;
      CollectionItemCol: ElementFinder;
      Journey3dot:ElementFinder;
      JourneyDelete3dot:ElementFinder;
      CopyBtn:ElementFinder;
      btnDelete:ElementFinder;
      btnDeleteJustJourney:ElementFinder;
      searchJourney:ElementFinder;
      btnCopyJourney:ElementFinder;
      JourneyTitleTxt:ElementFinder;
      SaveBtn:ElementFinder;
      MomentatitleLnk:ElementFinder;
      ClientTab:ElementFinder;
      ChevronCol:ElementFinder;
      CopiedJourneytle:ElementFinder

      fldAutomationDonotDelete:ElementFinder;
      icnsearch:ElementFinder;
      btnClientCollection:ElementFinder;
      icnPetronasCollection:ElementFinder;
      icnAutomationDNDFolder:ElementFinder;

      //---------Master TO Maste Copy Journey--------
      icnMasterCollection:ElementFinder;
      icnQAcollection:ElementFinder;
      btnCopyHere:ElementFinder;
      icnFolder:ElementFinder;
      icnJourney:ElementFinder;
      threeDotJourneyMasterC:ElementFinder;
      icnDelete:ElementFinder;
      btnJourneyDlt:ElementFinder;
      


      
       

    constructor() {

        //Client WebElements
        this.icnAutomationDNDFolder = element(By.xpath("//span[contains(text(),'Automation Folder_DONOT DELETE ')]"));
        this.icnPetronasCollection = element(By.xpath("//span[contains(text(),'petronas ')]"));
        this.btnClientCollection = element(By.xpath("//div[contains(text(),'Client Collection')]"));
        this.icnsearch = element(By.xpath("//i[@class='author-icon icon-search']"));
        this.MasterTab = element(By.xpath("//div[contains(text(),'Master')]"));
        this.CollectionItemCol = element(By.xpath("//span[text()='QA Collection']"));
        this.Journey3dot = element(By.xpath("//p[contains(text(),'QA Master Journey Automation')]/ancestor::mat-card//button[@aria-label='menu']"));
        this.JourneyDelete3dot = element(By.xpath("//p[contains(text(),'QA Master Copy Journey Automation updated1')]/ancestor::mat-card//button[@aria-label='menu']"));  //(//a[@class='master-collection__card-box master-collection__journey ng-star-inserted']//following::p[contains(text(),'QA Master Copy Journey Automation')]//parent::div//parent::div//parent::div//preceding-sibling::div)[1]
        
        this.CopyBtn = element(By.xpath("//button[@name='copy']"));
        this.btnDelete = element(By.xpath("//button[@name='delete']"));
        this.btnDeleteJustJourney = element(By.xpath("//button[contains(text(),'Delete')]"));
        this.searchJourney = element(By.xpath("//input[@name='search collection']"));
        this.btnCopyJourney = element(By.xpath("//span[contains(text(),'Automation Folder_DONOT DELETE ')]/ancestor::div[contains(@class,'margin')]//button[contains(text(),' copy Here')]"));
        this.JourneyTitleTxt = element(By.xpath("//input[@ng-reflect-model='QA Master Journey Automation']")); 
        this.SaveBtn = element(By.xpath("//button[@name='save']"));
        this.MomentatitleLnk = element(By.xpath("//img[@alt='Momenta logo']"));
        this.ClientTab = element(By.xpath("(//div[@class='mat-tab-label-content'])[2]"));
        this.ChevronCol = element(By.xpath("//span[text()='Chevron Corporation']"));
        this.CopiedJourneytle = element(By.xpath("//p[contains(text(),'QA Master Copy Journey Automation updated1')]"));

        this.fldAutomationDonotDelete = element(By.xpath("//p[contains(text(),'Automation Folder_DONOT DELETE')]"));

        //---------Master TO Maste Copy Journey--------
        this.icnMasterCollection = element(By.xpath("//div[contains(text(),'Master Collection')]"));
        this.icnQAcollection = element(By.xpath("//span[contains(text(),'QA Collection ')]"));
        this.btnCopyHere = element(By.xpath("//span[contains(text(),'automation folder_donot delete ')]/ancestor::div[contains(@class,'margin')]//button[contains(text(),' copy Here')]"));
        this.icnFolder = element(By.xpath("//p[contains(text(),'automation folder_donot delete')]"));
        this.icnJourney = element(By.xpath("//p[contains(text(),'QA Master Copy Journey Automation to Master')]"));
        this.threeDotJourneyMasterC = element(By.xpath("//p[contains(text(),'QA Master Copy Journey Automation to Master')]/ancestor::mat-card//button[@aria-label='menu']"));
        this.icnDelete = element(By.xpath("//span[contains(text(),'Delete')]"));
        this.btnJourneyDlt = element(By.xpath("//button[contains(text(),'Delete')]"));

    }
}