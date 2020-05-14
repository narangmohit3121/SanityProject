import { ElementFinder, ElementArrayFinder, element, By } from "protractor";

export class AuthoringCohortListingPageLocate{

    lnkCohortName:ElementFinder;
    tglEnabled:ElementFinder;
    columnTest:ElementFinder;
    lstUsers:ElementArrayFinder;
    arrwUsers:ElementFinder;

    constructor(){
        this.lnkCohortName=element(By.xpath("//td[contains(text(),'Cohort Test Title')]"));
        this.tglEnabled=element(By.xpath("(//td[contains(text(),'Cohort Test Title')]//following::div[@class='mat-slide-toggle-thumb-container'])[1]"));
        this.columnTest=element(By.xpath("(//td[contains(text(),'Cohort Test Title')]//following::td[contains(text(),'true')])[1]"));
        this.lstUsers=element.all(By.xpath(""));
        this.arrwUsers=element(By.xpath("(//div[@class='mat-sort-header-pointer-right ng-trigger ng-trigger-rightPointer'])[1]"));

    }
}