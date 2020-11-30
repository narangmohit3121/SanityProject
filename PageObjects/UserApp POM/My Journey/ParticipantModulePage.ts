import { ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "protractor";

export class ParticipantModulePageLocate {

    myJourneyLinkLnk:ElementFinder;
    moduleOne:ElementFinder;
    moduleTwo:ElementFinder;
    journeyTitle:ElementFinder;
    p_moduleStageTitle: ElementFinder;

    p_moduleTitle: ElementFinder;
    moduleCompletionPageLbl:ElementFinder;
    
    p_moduleDescription: ElementFinder;
    p_modulePoints: ElementFinder;
    p_moduleActivities: ElementFinder;
    p_moduleMinutes: ElementFinder;
    oneActivityStartBtn:ElementFinder;
    activityContinuetBtn:ElementFinder;
    activitymoduleOneResumetBtn:ElementFinder;
    activitymoduleOneRevisittBtn:ElementFinder;

    p_moduleActivitiesList: ElementArrayFinder;
    p_moduleActivityCompleteCheckMark: ElementFinder;
    p_moduleCompletionPageCompletedText: ElementFinder;
    p_moduleCompletionPageCompletedCheckIcon: ElementFinder;
    p_moduleCompletionPageScorePoints: ElementFinder;
    p_moduleCompletionPageTopBackArrow: ElementFinder;
    StartButtonModuleOne:ElementFinder;

    constructor() {
        
        this.myJourneyLinkLnk = element(By.xpath("//span[contains(.,'My Journey')]"));
        this.moduleOne = element(By.xpath("//h3[.='Participant  Login Module one']"));
        this.moduleTwo = element(By.xpath("//h3[.='Module two']"));
        this.journeyTitle = element(By.xpath("//h1[@class='page__heading-h1 ng-star-inserted']"));
        
        this.p_moduleStageTitle = element(By.xpath("//h2[@class='plugin-journey__stage-title']"));

        this.p_moduleTitle = element(By.xpath("//h2[contains(text(),'Opportunities and trends in the industry')]"));

      this.p_moduleActivities = element(By.xpath("//span[contains(text(),'3 Activities')]"));
        //this.p_moduleActivities = element(By.xpath("//h2[@ng-reflect-klass='plugin-module__title']"));

        
        this.StartButtonModuleOne = element(By.xpath("(//button[@name='Start'])[1]"));

        this.p_moduleMinutes = element(By.xpath("//span[.='30 Min']"));
        
        this.p_moduleDescription = element(By.xpath("//p[@class='plugin-module__dis']"));
        this.p_modulePoints = element(By.xpath("//span[contains(text(),'+30 Points')]"));

     //   this.oneActivityStartBtn = element(By.xpath("//span[@class='plugin-common__btn-start__text']"));
    //    this.oneActivityStartBtn = element(By.xpath("(//button[@class='plugin-common__btn-white justify-center mat-raised-button mat-button-base plugin-module__button-start ng-star-inserted'])[1]"));
        this.oneActivityStartBtn = element(By.xpath("//button[@name='start']"));
        this.activityContinuetBtn = element(By.xpath("//button[@name='Continue to Next Activity']"));
      //  this.activityContinuetBtn = element(By.xpath("//button[@name='Continue to Next Activity']"));
        
        this.activitymoduleOneResumetBtn = element(By.xpath("//span[@class='mat-button-wrapper']"));
        this.activitymoduleOneRevisittBtn = element(By.xpath("//span[@class='revisit-text']"));
        this.moduleCompletionPageLbl = element(By.xpath("//div[@class='plugin-completed__details d-flex flex-direction align-center']"));
        
        

     //   this.p_moduleActivitiesList = element.all(By.xpath("//div//child::mat-expansion-panel"));
        this.p_moduleActivitiesList = element.all(By.xpath("//h2[@ng-reflect-klass='plugin-module__title']"));
        this.p_moduleActivityCompleteCheckMark = element(By.xpath("//h3[contains(text(),'What is important in this industry to succeed')]//preceding-sibling::div//i[@class='pv-icon pv-icon-tick-fill']"));
        this.p_moduleCompletionPageCompletedText = element(By.xpath("//h1[contains(text(),'Opportunities and trends in the industry')]//parent::div//child::span[contains(text(),'Completed')]"));
        this.p_moduleCompletionPageCompletedCheckIcon = element(By.xpath("//h1[contains(text(),'Opportunities and trends in the industry')]//parent::div//preceding-sibling::div//i[@class='pv-icon pv-icon-tick-fill']"));
        this.p_moduleCompletionPageScorePoints = element(By.xpath("//a[contains(text(),'+ 75 Points')]"));
        this.p_moduleCompletionPageTopBackArrow = element(By.xpath("//i[@class='pv-icon pv-icon-left-arrow plugin-back']"));
    }
}