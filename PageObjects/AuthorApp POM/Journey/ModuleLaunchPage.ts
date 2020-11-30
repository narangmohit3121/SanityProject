import { ElementFinder, ElementArrayFinder, By, element } from "protractor";

export class ModuleLaunchPageLocate {

    moduleLaunchTitle: ElementFinder;
    moduleLaunchBackArrow : ElementFinder;
    moduleLaunchPreviewbtn:ElementFinder;
    moduleLaunchActivitiesList : ElementArrayFinder;
    moduleLaunchActivitiesDuration : ElementArrayFinder;
    myJourneyLbl:ElementFinder;
    moduleOnestartBtn:ElementFinder;

    constructor() {

        this.moduleLaunchTitle = element(By.xpath("//h3[text()='Module one']"));
//      this.moduleLaunchPreviewbtn=element(By.xpath("//button[@class='plugin-common__btn-white plugin-common__btn-outline mat-raised-button mat-button-base ng-star-inserted']"));
        this.moduleLaunchPreviewbtn=element(By.xpath("//span[text()='Preview']"));
        this.moduleLaunchBackArrow = element(By.xpath("//button[@class='plugin__header-btn plugin-back mat-button mat-button-base ng-star-inserted']"));
        this.moduleLaunchActivitiesList = element.all(By.xpath("//div[@class='plugin-module__block module-mobile-view ng-star-inserted']"));
        this.moduleLaunchActivitiesDuration = element.all(By.xpath("//div[@class='plugin-module__pvwatch']"))
        this.myJourneyLbl=element(By.xpath("//h2[contains(text(),'My Journey')]"));

        this.moduleOnestartBtn=element(By.xpath("//button[@class='plugin-common__btn-white plugin-module__button-start justify-center mat-raised-button mat-button-base ng-star-inserted']"));

    }
}