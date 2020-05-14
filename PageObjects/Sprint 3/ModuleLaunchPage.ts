import { ElementFinder, ElementArrayFinder, By, element } from "protractor";

export class ModuleLaunchPageLocate {

    moduleLaunchTitle: ElementFinder;
    moduleLaunchBackArrow : ElementFinder;
    moduleLaunchActivitiesList : ElementArrayFinder;
    moduleLaunchActivitiesDuration : ElementArrayFinder;

    constructor() {

        this.moduleLaunchTitle = element(By.xpath("//h2[@class='plugin-module-title']"));
        this.moduleLaunchBackArrow = element(By.xpath("//i[@class='pv-icon pv-icon-left-arrow plugin-back']"));
        this.moduleLaunchActivitiesList = element.all(By.xpath("//mat-panel-title[@class='plugin-module__pannel-title mat-expansion-panel-header-title']"));
        this.moduleLaunchActivitiesDuration = element.all(By.xpath("//div[@class='plugin-module__pvwatch']"))

    }
}