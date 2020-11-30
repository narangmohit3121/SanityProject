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
dtpCalenderEndDate:ElementFinder;
lstCohortTitle:ElementArrayFinder;
lstUserName:ElementArrayFinder;

    constructor(){

        this.tabUsers=element(By.xpath("//div[@role='tab'][2]"));
        this.lnkTestJourney=element(By.xpath("//span[contains(text(),'Automation Standard Journey')]"));
        this.btnCreateCohort=element(By.xpath("//button[contains(text(),' Create Cohort ')]"));
        this.ttlCreateCohortWindow=element(By.xpath("//h2[contains(text(),'Cohort Settings')]"));
        this.txtCohortTitle=element(By.xpath("//input[@placeholder='Enter Cohort Title']"));
        this.dtpCalenderStartDate=element(By.xpath("(//button[@aria-label='Open calendar'])[1]"));
        this.dtpCalenderEndDate=element(By.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/app-create-cohort-modal/div/div[2]/mat-tab-group/div/mat-tab-body[1]/div/div/div/div[3]/div/mat-form-field[2]/div/div[1]/div[2]/mat-datepicker-toggle/button'))
        this.dtpCalenderMonth=element(By.xpath("//td[@class='mat-calendar-body-cell mat-calendar-body-active ng-star-inserted']"));
        this.dtpCalenderDay=element(By.xpath("//td[@class='mat-calendar-body-cell mat-calendar-body-active ng-star-inserted']"));
        this.btnCreateCohortCANCEL=element(By.xpath("//button[contains(text(),'CANCEL')]"));
        this.btnCreateCohortDONE=element(By.xpath("//button[contains(text(),'Save')]"));
        this.tglTestCohort=element(By.xpath("(//div//mat-label[contains(text(),'Test Cohort')]//following::div[@class='mat-slide-toggle-thumb-container'])[1]"));
        this.tglSuppressAnalytics=element(By.xpath("(//div//mat-label[contains(text(),'Suppress Analytics')]//following::div[@class='mat-slide-toggle-thumb-container'])[1]"));
        this.tglEnabled=element(By.xpath("(//div//mat-label[contains(text(),'Enabled')]//following::div[@class='mat-slide-toggle-thumb-container'])[1]"));
        this.tglExcludeFromDashboard=element(By.xpath("(//div//mat-label[contains(text(),'Exclude From Dashboard')]//following::div[@class='mat-slide-toggle-thumb-container'])[1]"));
        this.tglUserExpiry=element(By.xpath("(//div//mat-label[contains(text(),'User Expiry?')]//following::div[@class='mat-slide-toggle-thumb-container'])[1]"));
        this.symPlusUserExpiry=element(By.xpath("//span[contains(text(),'+')]"));
        this.lnkCohortName=element(By.xpath("//button[contains(text(),'Cohort Test Title')]"));
        this.lstCohortTitle=element.all(By.xpath("//button[@name='Cohort Title']"));
        this.lstUserName=element.all(By.xpath("//button[@name='User Click']"));
    }
}