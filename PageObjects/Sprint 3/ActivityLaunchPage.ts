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

   constructor() {
    
      this.btnJourneysPlus = element(By.xpath("//div[@class='main-container__box master-collection']//div[@class='master-collection__header']/button[@name='journey']/i[@class='author-icon icon-plus master-collection__header--plus']"));
      this.mnuCopyJourney = element(By.xpath("//span[contains(text(),'Copy Journey')]"));
      this.txtSearchJourney= element(By.xpath("//input[@placeholder='Search journey']"))
      this.btnFirstJourneyPreview = element(By.xpath("//div[@class='modal-common__content ng-star-inserted']/div//button[@name='journey-preview']"));
      this.btnFirstModulePreview = element(By.xpath("(//button[text()='Preview'])[1]"));
      this.ttlModule = element(By.xpath("//div[@class='plugin-module__info']//h2"));
      this.ttlFirstActivity = element(By.xpath("(//div[@class='plugin-module__panel-view']//mat-panel-title)[1]"));
      this.btnFirstActivityStart = element(By.xpath("(//button[@name='start'])[1]"));
      this.ttlActivityPage = element(By.xpath("//h2[contains(@class,'plugin-activity-subtitle')]"));
      this.btnActivityContinue = element(By.xpath("//span[contains(text(),'Continue')]"));
      this.btnActivityBack = element(By.xpath("//i[contains(@class,'icon-left-arrow')]"));
      this.imgModuleProgress = element(By.xpath("//div[@class = 'plugin-module-progress']"));
      this.pcoActivityPage = element(By.xpath("//div[@class='col fr-view ng-star-inserted']"));
      //this.activityTextContainer = element(By.xpath("//div[contains(@class,'text__container ')]//div[contains(@class,'view')]"));
      //this.activityTextFrame = element(By.xpath("//iframe[@class='plugin-activity__iframe']"));
   }

}