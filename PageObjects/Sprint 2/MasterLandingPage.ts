import { ElementFinder, ElementArrayFinder, By, element } from "protractor";

export class MasterLandingPageLocate {

    masterTab: ElementFinder;
    masterCollectionLeadership: ElementFinder;
    masterCollectionListArrow: ElementFinder;
    masterCollectionFolderTitle: ElementFinder;
    masterCollectionJourneysTitle: ElementFinder;
    masterCollectionContentTitle: ElementFinder;
    masterCollectionLandingTitle: ElementFinder;
    masterCollectionConfiguration: ElementFinder;
    masterCollectionConfigurationHeader: ElementFinder;
    masterCollectionLandingSections: ElementFinder;
    masterCollectionFolders: ElementArrayFinder;
    masterCollectionSections: ElementArrayFinder;
    masterCollectionLeftNavigationPanel: ElementArrayFinder;

    constructor() {

        this.masterTab = element(By.xpath("//div[@id='mat-tab-label-0-0']"));
        this.masterCollectionLeadership = element(By.xpath("//span[contains(text(),'Leadership')]"));
        this.masterCollectionLandingTitle = element(By.xpath("//h3[contains(text(),'Master Collection')]"));

        // Leadership WebElements
        this.masterCollectionFolderTitle = element(By.xpath("//h4[contains(text(),'Folder')]"));
        this.masterCollectionJourneysTitle = element(By.xpath("//h4[contains(text(),'Journeys')]"))
        this.masterCollectionContentTitle = element(By.xpath("//h4[contains(text(),'Content')]"));
        this.masterCollectionLandingSections = element(By.xpath("//h4[@class='master-collection__title']"))

        //Left Panel WebElements
        this.masterCollectionListArrow = element(By.xpath("//div[@class='mat-tree-node']//button[2]"));
        this.masterCollectionLeftNavigationPanel = element.all(By.xpath("//li[@class='mat-tree-node ng-star-inserted']//div[@class='mat-tree-title']"));

        //Body Area WebElements
        this.masterCollectionSections = element.all(By.xpath("//h4[@class='master-collection__title']"));

        //Header WebElements
        this.masterCollectionConfiguration = element(By.css('button.master-collection__setting'));
        this.masterCollectionConfigurationHeader = element(By.xpath("//h4[contains(text(),'BTS')]"));

        //Folders WebElements
        this.masterCollectionFolders = element.all(By.xpath("//div[@class='main-container__box master-collection']//div//section//p[@class='master-collection__box-text']"))
    }
}