import { ElementFinder, ElementArrayFinder, element, By } from "protractor";

export class AuthoringCohortListingPageLocate{

    lnkCohortName:ElementFinder;
    tglTestCohort:ElementFinder;
    tglEnabled:ElementFinder;
    columnTest:ElementFinder;
    lstUsers:ElementArrayFinder;
    arrwUsers:ElementFinder;
    ttlCohort:ElementFinder;
    btnCohortConfiguration:ElementFinder;
    tglOn:ElementFinder;
    tglOff:ElementFinder;

    constructor(){
        this.lnkCohortName=element(By.xpath("//button[contains(text(),'Cohort Test Title')]"));
        this.tglTestCohort=element(By.xpath("(//mat-label[contains(text(),'Test Cohort')]//following::div[@class='mat-slide-toggle-thumb-container'])[1]"));
        this.tglEnabled=element(By.xpath("(//mat-label[contains(text(),'Enabled')]//following::div[@class='mat-slide-toggle-thumb-container'])[1]"));
        this.columnTest=element(By.xpath("(//button[contains(text(),'CohortListing1')]//following::span[contains(text(),'True')])[1]"));
        this.lstUsers=element.all(By.xpath("//td[@role='gridcell'][2]"));
        this.arrwUsers=element(By.xpath("(//div[@class='mat-sort-header-pointer-right ng-trigger ng-trigger-rightPointer'])[1]"));
        this.ttlCohort=element(By.xpath("//button[@aria-label='Change sorting for title']"));
        this.btnCohortConfiguration=element(By.xpath("//button[contains(text(),'Cohort Test Title')]//following::button[@name='Cohort Setting'][1]"));
        this.tglOn=element(By.xpath("//mat-label[contains(text(),'Test Cohort')]//following::span[contains(text(),'On')][1]"));
        this.tglOff=element(By.xpath("//mat-label[contains(text(),'Test Cohort')]//following::span[contains(text(),'Off')][1]"));
    }
}