import { ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "protractor";

export class ParticipantModulePageLocate {

    p_moduleTitle: ElementFinder;
    p_moduleStageTitle: ElementFinder;
    p_moduleDescription: ElementFinder;
    p_modulePoints: ElementFinder;
    p_moduleActivities: ElementFinder;
    p_moduleMinutes: ElementFinder;
    p_moduleActivitiesList: ElementArrayFinder;
    p_moduleActivityCompleteCheckMark: ElementFinder;
    p_moduleCompletionPageCompletedText: ElementFinder;
    p_moduleCompletionPageCompletedCheckIcon: ElementFinder;
    p_moduleCompletionPageScorePoints: ElementFinder;
    p_moduleCompletionPageTopBackArrow: ElementFinder;

    constructor() {
        this.p_moduleTitle = element(By.xpath("//h2[contains(text(),'Opportunities and trends in the industry')]"));
        this.p_moduleStageTitle = element(By.xpath("//h1[contains(text(),'Episode 1: Know the Industry Executive Mindset')]"));
        this.p_moduleDescription = element(By.xpath("//p[@class='plugin-module__dis']"));
        this.p_modulePoints = element(By.xpath("//span[contains(text(),'+30 Points')]"));
        this.p_moduleActivities = element(By.xpath("//span[contains(text(),' 4 Activities')]"));
        this.p_moduleMinutes = element(By.xpath("//span[contains(text(),'40 Minutes')]"));
        this.p_moduleActivitiesList = element.all(By.xpath("//div//child::mat-expansion-panel"));
        this.p_moduleActivityCompleteCheckMark = element(By.xpath("//h3[contains(text(),'What is important in this industry to succeed')]//preceding-sibling::div//i[@class='pv-icon pv-icon-tick-fill']"));
        this.p_moduleCompletionPageCompletedText = element(By.xpath("//h1[contains(text(),'Opportunities and trends in the industry')]//parent::div//child::span[contains(text(),'Completed')]"));
        this.p_moduleCompletionPageCompletedCheckIcon = element(By.xpath("//h1[contains(text(),'Opportunities and trends in the industry')]//parent::div//preceding-sibling::div//i[@class='pv-icon pv-icon-tick-fill']"));
        this.p_moduleCompletionPageScorePoints = element(By.xpath("//a[contains(text(),'+ 75 Points')]"));
        this.p_moduleCompletionPageTopBackArrow = element(By.xpath("//i[@class='pv-icon pv-icon-left-arrow plugin-back']"));
    }
}