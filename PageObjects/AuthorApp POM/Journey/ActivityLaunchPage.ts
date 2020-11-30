import { element, ElementFinder } from "protractor";
import { By } from "protractor";

export class ActivityLaunchLocate {

   btnJourneysPlus: ElementFinder;
   mnuCopyJourney: ElementFinder;
   txtSearchJourney: ElementFinder;
   btnFirstJourneyPreview: ElementFinder;
   btnFirstModulePreview: ElementFinder;
   ttlModule: ElementFinder;
   ttlFirstActivity: ElementFinder;
   btnFirstActivityStart: ElementFinder;
   ttlActivityPage: ElementFinder;
   btnActivityContinue: ElementFinder;
   btnActivityBack: ElementFinder;
   imgModuleProgress: ElementFinder;
   pcoActivityPage: ElementFinder;
   //activityTextContainer: ElementFinder;
   //activityTextFrame: ElementFinder;
   icnsrch:ElementFinder;
   icnQACollection:ElementFinder;
   btnPreviewQAMasterJourneyAutomation:ElementFinder;
   activityContent:ElementFinder;

   constructor() {
    
      this.btnJourneysPlus = element(By.xpath("//div[@class='main-container__box master-collection']//div[@class='master-collection__header']/button[@name='journey']/i[@class='author-icon icon-plus master-collection__header--plus']"));
      this.mnuCopyJourney = element(By.xpath("//span[contains(text(),'Copy Journey')]"));
      this.txtSearchJourney= element(By.xpath("//input[@placeholder='Search Collections']"))

      this.icnQACollection = element(By.xpath("//span[contains(text(),'QA Collection ')]"));
      this.btnPreviewQAMasterJourneyAutomation = element(By.xpath("//span[contains(text(),'Temp_Sanity_Jrn ')]/preceding::button[contains(text(),'Preview')]"));
      

    //  this.btnFirstJourneyPreview = element(By.xpath("//div[@class='modal-common__content ng-star-inserted']/div//button[@name='journey-preview']"));
    //  this.btnFirstJourneyPreview = element(By.xpath("(//span[text()='Preview'])[1]")); //  //button[@name='journey-preview']
      this.btnFirstJourneyPreview = element(By.xpath("//span[contains(text(),'QA Master Journey Automation ')]/ancestor::div[@class='journey-list margin-bottom-10 ng-star-inserted']//button[contains(text(),'Preview ')]"));

      this.icnsrch = element(By.xpath("//i[@class='author-icon icon-search']"));   
   //   this.btnFirstModulePreview = element(By.xpath("(//button[text()='Preview'])[1]"));
      this.btnFirstModulePreview = element(By.xpath("//button[@name='New Module 1Current Status Preview']"));
   //   this.ttlModule = element(By.xpath("//div[@class='plugin-module__info']//h2"));
      this.ttlModule = element(By.xpath("//div[@class='plugin-module__info']//h1"));

    //  this.ttlFirstActivity = element(By.xpath("(//div[@class='plugin-module__panel-view']//mat-panel-title)[1]"));
      this.ttlFirstActivity = element(By.xpath("//div[@class='plugin-module__panel-view']"));
      this.btnFirstActivityStart = element(By.xpath("(//button[@name='start'])[1]"));
      this.ttlActivityPage = element(By.xpath("(//h2[contains(text(),' New Activity 1 ')])[1]"));
      this.btnActivityContinue = element(By.xpath("//button[@name='Continue to Next Activity']"));
      this.btnActivityBack = element(By.xpath("//i[contains(@class,'icon-left-arrow')]"));
      this.imgModuleProgress = element(By.xpath("//div[@class = 'plugin-module-progress']"));
      this.pcoActivityPage = element(By.xpath("//p[contains(text(),'HI')]"));
      //this.activityTextContainer = element(By.xpath("//div[contains(@class,'text__container ')]//div[contains(@class,'view')]"));
      //this.activityTextFrame = element(By.xpath("//iframe[@class='plugin-activity__iframe']"));

      this.activityContent = element(By.xpath("//span[contains(text(),'BTS, also known as the Bangtan Boys, are a South Korean boy band consisting of members Jin, Suga, J-Hope, RM, Jimin, V, and Jungkook. The septet, who write and produce much of their own output, have branched out from their hip hop roots to incorporate a')]"));
   }

}