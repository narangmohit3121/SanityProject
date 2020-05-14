import { ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "protractor";

export class AuthoringCreateCohortPageLocate{

tabUsers:ElementFinder;
lnkTestJourney:ElementFinder;
btnCreateCohort:ElementFinder;
ttlCreateCohortWindow:ElementFinder;
txtCohortTitle:ElementFinder;
dtpCalenderStartDate:ElementFinder;
dtpCalenderMonth:ElementFinder;
dtpCalenderDay:ElementFinder;
btnCreateCohortCANCEL:ElementFinder;
btnCreateCohortDONE:ElementFinder;
tglTestCohort:ElementFinder;
tglSuppressAnalytics:ElementFinder;
tglEnabled:ElementFinder;
tglExcludeFromDashboard:ElementFinder;
tglUserExpiry:ElementFinder;
symPlusUserExpiry:ElementFinder;
lnkCohortName:ElementFinder;

    constructor(){

        this.tabUsers=element(By.xpath("//div[contains(text(),'Users')]"));
        this.lnkTestJourney=element(By.xpath("//span[contains(text(),'Petronas_QA_Journey')]"));
        this.btnCreateCohort=element(By.xpath("//button[contains(text(),' Create Cohort ')]"));
        this.ttlCreateCohortWindow=element(By.xpath("//h3[contains(text(),'Create Cohort')]"));
        this.txtCohortTitle=element(By.xpath("//input[@placeholder='Cohort Title']"));
        this.dtpCalenderStartDate=element(By.xpath("//button[@aria-label='Open calendar']"));
        this.dtpCalenderMonth=element(By.xpath("//div[contains(text(),'DEC')]"));
        this.dtpCalenderDay=element(By.xpath("//div[contains(text(),'28')]"));
        this.btnCreateCohortCANCEL=element(By.xpath("//button[contains(text(),'CANCEL')]"));
        this.btnCreateCohortDONE=element(By.xpath("//button[contains(text(),'Done')]"));
        this.tglTestCohort=element(By.xpath("(//div//mat-label[contains(text(),'Test Cohort')]//following::div[@class='mat-slide-toggle-thumb-container'])[1]"));
        this.tglSuppressAnalytics=element(By.xpath("(//div//mat-label[contains(text(),'Suppress Analytics')]//following::div[@class='mat-slide-toggle-thumb-container'])[1]"));
        this.tglEnabled=element(By.xpath("(//div//mat-label[contains(text(),'Enabled')]//following::div[@class='mat-slide-toggle-thumb-container'])[1]"));
        this.tglExcludeFromDashboard=element(By.xpath("(//div//mat-label[contains(text(),'Exclude From Dashboard')]//following::div[@class='mat-slide-toggle-thumb-container'])[1]"));
        this.tglUserExpiry=element(By.xpath("(//div//mat-label[contains(text(),'User Expiry?')]//following::div[@class='mat-slide-toggle-thumb-container'])[1]"));
        this.symPlusUserExpiry=element(By.xpath("//span[contains(text(),'+')]"));
        this.lnkCohortName=element(By.xpath("//td[contains(text(),'Cohort Test Title')]"));
    }
}