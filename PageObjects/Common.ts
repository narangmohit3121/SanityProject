import { ElementFinder, By, element } from "protractor";

export class CommonLocate {

    momentaLogo: ElementFinder;
    clientTab: ElementFinder;
    helloText: ElementFinder;
    automationFolder: ElementFinder;
    folderSprint16: ElementFinder;
    sanityFolder: ElementFinder;
    myJourneyPage: ElementFinder;
    shimmerLoadActivity: ElementFinder;
    btnContinue: ElementFinder;

    constructor() {

        this.momentaLogo = element(By.xpath("//h3[contains(text(),'Momenta')]"));
        this.clientTab = element(By.id("mat-tab-label-1-1"));
        this.helloText = element(By.xpath("//b[contains(text(),'Hello,')]"));
        this.automationFolder = element(By.xpath("//p[contains(text(),'Automation Folder_DONOT DELETE')]/../../.."));
        this.folderSprint16 = element(By.xpath("//p[contains(text(),'Sprint 16')]/../../.."));
        this.sanityFolder = element(By.xpath("//p[contains(text(),'Individual Content')]/../../.."));
        this.myJourneyPage = element(By.xpath("//span[text()='My Journey']//ancestor::a[@aria-label='My Journey']"));
        this.shimmerLoadActivity = element(By.xpath("//h3[contains(@class,'animate')]"));
        this.btnContinue = element(By.xpath("//button[contains(@name,'Continue')]"));
    }
}