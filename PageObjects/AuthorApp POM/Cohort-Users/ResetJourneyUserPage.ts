import { ElementFinder, ElementArrayFinder, element, By } from "protractor";

export class ResetJourneyUserPageLocate{

    cohortUserLbl:ElementFinder
    filterjourneyTxt:ElementFinder
    AutomatioJourneyManshaJrny:ElementFinder
    ResetJounreyCohortBtn:ElementFinder
    AutomationResetBtn:ElementFinder
    JounreyDataLbl:ElementFinder
    ResetJourneyDataBtn:ElementFinder
    UserDashBoardLbl:ElementFinder
    AutomationJourneyMohitJrny:ElementFinder
    ResetJounreyProgreessCohortBtn:ElementFinder
    AutomationReset2Btn:ElementFinder
    NextBtn:ElementFinder
    IndustryDDArrow:ElementFinder
    ContinueBtn:ElementFinder
    LogoutLnk:ElementFinder

    constructor() {

        this.cohortUserLbl = element(By.xpath("(//div[@class='mat-tab-label-content'])[2]"));
        this.filterjourneyTxt = element(By.xpath("//input[@class='search-bar__input']"));
        this.AutomatioJourneyManshaJrny = element(By.xpath("//span[text()='Automation Journey Mansha']"));
      //  this.filterjourneyTxt = element(By.xpath("(//button[@name='Cohort Title'])[1]"));
        this.ResetJounreyCohortBtn = element(By.xpath("(//button[@name='Cohort Title'])[1]"));
        this.AutomationResetBtn = element(By.xpath("//button[@name='User Click']"));
        this.JounreyDataLbl = element(By.xpath("(//div[@class='mat-tab-label-content'])[4]"));
        this.ResetJourneyDataBtn = element(By.xpath("//button[@name='reset journey data']"));
        this.UserDashBoardLbl = element(By.xpath("//div[text()=' User Dashboard']"));
        this.AutomationJourneyMohitJrny = element(By.xpath("//span[text()='Automation Journey Mohit']"));
        this.ResetJounreyProgreessCohortBtn = element(By.xpath("//button[text()=' ResetJourneyProgressCohort ']"));
        this.AutomationReset2Btn = element(By.xpath("//button[text()='AutomationReset']"));
        this.NextBtn = element(By.xpath("//span[text()='Next']"));
        this.IndustryDDArrow = element(By.xpath("//select[@name='Select your industry']"));
        this.ContinueBtn = element(By.xpath("//span[@class='plugin-common__btn-continue__text']"));
        this.LogoutLnk = element(By.xpath("//span[text()='Logout']"));
        
       
    }
}