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
      chevronCopyjourneyBtn:ElementFinder;
      JourneyTitleTxt:ElementFinder;
      SaveBtn:ElementFinder;
      MomentatitleLnk:ElementFinder;
      ClientTab:ElementFinder;
      ChevronCol:ElementFinder;
      CopiedJourneytle:ElementFinder

      fldAutomationDonotDelete:ElementFinder;

      
       

    constructor() {

        //Client WebElements
        this.MasterTab = element(By.xpath("//div[@id='mat-tab-label-0-0']"));
        this.CollectionItemCol = element(By.xpath("//span[text()='QA Collection']"));
        this.Journey3dot = element(By.xpath("//i[@class='author-icon icon-dots master-collection__icon']"));
        this.JourneyDelete3dot = element(By.xpath("(//a[@class='master-collection__card-box master-collection__journey ng-star-inserted']//following::p[contains(text(),'QA Master Copy Journey Automation')]//parent::div//parent::div//parent::div//preceding-sibling::div)[1]"));
        this.CopyBtn = element(By.xpath("//button[@name='copy']"));
        this.btnDelete = element(By.xpath("//button[@name='delete']"));
        this.btnDeleteJustJourney = element(By.xpath("//button[contains(text(),'Delete Just Journey')]"));
        this.searchJourney = element(By.xpath("//input[@name='search']"));
        this.chevronCopyjourneyBtn = element(By.xpath("//div[@class='modal-common__content ng-star-inserted']/div[1]//button[@name='journey-copy']"));
        this.JourneyTitleTxt = element(By.xpath("//input[@ng-reflect-model='QA Master Journey Automation']")); 
        this.SaveBtn = element(By.xpath("//button[@name='save']"));
        this.MomentatitleLnk = element(By.xpath("//h3[text()='Momenta']"));
        this.ClientTab = element(By.xpath("(//div[@class='mat-tab-label-content'])[2]"));
        this.ChevronCol = element(By.xpath("//span[text()='Chevron Corporation']"));
        this.CopiedJourneytle = element(By.xpath("//p[text()='QA Master Copy Journey Automation']"));

        this.fldAutomationDonotDelete = element(By.xpath("//p[contains(text(),'Automation Folder_DONOT DELETE')]"));
    }
}