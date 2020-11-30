import { ElementFinder, element, By } from "protractor";


export class ResetJourneyPageLocate{

    srcFilterJourneys:ElementFinder;
    lnkResetourney:ElementFinder;
    verticalDDArrow:ElementFinder;
    lnkQATestersCohort:ElementFinder;
    lnkipadtestUser:ElementFinder;
    tabJourneys:ElementFinder;
    drpJrnLst:ElementFinder;
    optJrnLst:ElementFinder;
    btnResetJourneyData:ElementFinder;
    ttlVertical1:ElementFinder;
    ttlVertical2:ElementFinder;
    btnStart:ElementFinder;
    btnRevisit:ElementFinder;
    btnContinue:ElementFinder;
    jrnDrpSearch:ElementFinder;

    constructor(){

        this.srcFilterJourneys=element(By.xpath("//input[@placeholder='Filter Journeys']"));
        this.lnkResetourney=element(By.xpath("//span[contains(text(),'QA Automation Reset 1 Journey')]"));
        this.verticalDDArrow = element(By.xpath("//select[@name='Vertical available for Automation Reset Journey Industry industry']"));
        //this.lnkResetourney=element(By.xpath("//span[contains(text(),'QA Automation Reset Journey')]"));
        this.lnkQATestersCohort=element(By.xpath("//button[contains(text(),'Reset Journey Cohort')]"));
        this.lnkipadtestUser=element(By.xpath("(//button[contains(text(),'reset')])[1]"));
        this.tabJourneys=element(By.xpath("//div[contains(text(),'Journeys')]"));
        this.drpJrnLst=element(By.xpath("//i[contains(text(),'arrow_drop_down')]"));
        this.optJrnLst=element(By.xpath("//span[contains(text(),'QA Automation Reset 1 Journey')]"));
        this.btnResetJourneyData=element(By.xpath("//button[contains(text(),'Reset Journey Data ')]"));
        this.ttlVertical1=element(By.xpath("//h2[contains(text(),'New Module Vertical 1')]"));
        this.ttlVertical2=element(By.xpath("//h2[contains(text(),'New Module Vertical 2')]"));
        this.btnStart=element(By.xpath("//span[contains(text(),'Start')]"));
        this.btnRevisit=element(By.xpath("//span[contains(text(),'Revisit')]"));
        this.btnContinue=element(By.xpath("//span[contains(text(),'Continue')]"));
        this.jrnDrpSearch=element(By.xpath("//input[@name='Search Journey']"));
    }
}