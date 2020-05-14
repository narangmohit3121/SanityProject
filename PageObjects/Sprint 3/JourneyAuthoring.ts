import { ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "selenium-webdriver";

export class JourneyAuthoringLocate {

    tleJourneyName: ElementFinder;
    hdgMomentaLogo: ElementFinder;
    btnAddStage: ElementFinder;
    btnAddModule: ElementFinder;
    btnJourneyAuthSave: ElementFinder;
    btnJourneyAuthPreview: ElementFinder;
    imgClientLogo: ElementFinder;
    lstLeftPanelTreeItem: ElementArrayFinder;
    ttlNewStage: ElementFinder;
    dotAddModuleInStage: ElementFinder;
    dotAddActivityInStage: ElementFinder;
    dotEditStage: ElementFinder;
    journeyStageTextBox: ElementFinder;
    journeyStageDonebtn: ElementFinder;
    journeyModuleAddActivity: ElementFinder;
    journeyNameText: ElementFinder;
    journeyStageMoreIcon: ElementFinder;
    journeyStageMoreOptions: ElementArrayFinder;
    journeyStageNewModule: ElementFinder;
    journeyStageNewActivity: ElementFinder;
    journeyModuleMoreIcon: ElementFinder;
    journeyActivityMoreIcon: ElementFinder;
    previewMyJourney: ElementFinder;


    constructor() {

        this.tleJourneyName = element(By.xpath("//p[contains(text(),'Journey Name')]"));
        this.btnJourneyAuthSave = element(By.xpath("//span[contains(text(),'SAVE')]"));
        this.btnJourneyAuthPreview = element(By.xpath("//span[contains(text(),'PREVIEW')]"));
        this.btnAddStage = element(By.xpath("//button[@name='add stage']"));
        this.btnAddModule = element(By.xpath("//button[@name='add module']"));
        this.lstLeftPanelTreeItem = element.all(By.xpath("(//mat-tree-node[@class='mat-tree-node ng-star-inserted'])"));
        this.imgClientLogo = element(By.xpath("//img[@alt='Client Logo']"));
        this.ttlNewStage = element(By.xpath("//p[contains(text(),'New Stage')]"));
        this.dotAddModuleInStage = element(By.xpath("//button[@name='add-module']"));
        this.dotAddActivityInStage = element(By.xpath("//button[@name='add-activity']"));
        this.dotEditStage = element(By.xpath("//button[@name='edit']"));
        this.journeyStageTextBox = element(By.xpath("//input[@type='text']"));
        this.journeyStageDonebtn = element(By.xpath("//span[contains(text(),'Done')]"));
        this.journeyModuleAddActivity = element(By.xpath("//button[@name='add-activity']"));
        this.journeyNameText = element(By.xpath("//span[@class='journey-selection__inno']"));
        this.journeyStageMoreIcon = element(By.xpath("(//span//i[@class='author-icon icon-dots master-collection__icon journey-section__fontcolor'])[1]"));
        this.journeyStageMoreOptions = element.all(By.xpath("//div[@class='mat-menu-content']"));
        this.journeyStageNewModule = element(By.xpath("//p[contains(text(),'New Module')]"));
        this.journeyStageNewActivity = element(By.xpath("//p[contains(text(),'New Activity')]"));
        this.journeyModuleMoreIcon = element(By.xpath("(//span//i[@class='author-icon icon-dots master-collection__icon journey-section__fontcolor']//parent::span//parent::button//parent::div//parent::mat-panel-description//parent::span//parent::mat-expansion-panel-header//following-sibling::div//child::div//child::mat-accordion//child::mat-expansion-panel//child::mat-expansion-panel-header//child::span//child::div//child::mat-panel-title//following::mat-panel-description//child::div//child::button)[1]"));
        this.journeyActivityMoreIcon = element(By.xpath("(//span//i[@class='author-icon icon-dots master-collection__icon journey-section__fontcolor']//parent::span//parent::button//parent::div//parent::mat-panel-description//parent::span//parent::mat-expansion-panel-header//following::div[@class='journey-selection__delete'][3])[1]"));
        this.previewMyJourney = element(By.xpath("//h1[@class='plugin-journey__title']"));
    }
}