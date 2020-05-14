import { ElementFinder, element, By } from "protractor";


export class ResetJourneyPageLocate{

    lnkResetourney:ElementFinder;
    lnkQATestersCohort:ElementFinder;
    lnkipadtestUser:ElementFinder;
    tabJourneys:ElementFinder;
    btnResetJourneyData:ElementFinder;

    constructor(){

        
        this.lnkResetourney=element(By.xpath("//span[contains(text(),'QA Automation Reset Journey')]"));
        this.lnkQATestersCohort=element(By.xpath("//td[contains(text(),'Reset Journey Cohort')]"));
        this.lnkipadtestUser=element(By.xpath("(//td[contains(text(),'reset')])[1]"));
        this.tabJourneys=element(By.xpath("//div[contains(text(),'Journeys')]"));
        this.btnResetJourneyData=element(By.xpath("//button[contains(text(),'Reset Journey Data ')]"));
    }
}