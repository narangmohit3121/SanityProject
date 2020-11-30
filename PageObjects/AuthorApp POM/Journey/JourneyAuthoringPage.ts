import { ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "selenium-webdriver";

export class JourneyAuthoringLocate {

    QaAutomationJourneyName:ElementFinder;
    ThreeDotsAutomationQAJourneyJourneyName:ElementFinder;
    AutomationQAJourneyDeleteBtn:ElementFinder;
    AutomationQAJourneyAlertWindowDeleteBtn:ElementFinder;

    tleJourneyName: ElementFinder;


    hdgMomentaLogo: ElementFinder;
    btnAddStage: ElementFinder;
    btnAddModule: ElementFinder;
    moduleTitleTxt:ElementFinder;
    moduleShortNameTxt:ElementFinder;    
    moduleDescTxt:ElementFinder;

    activityDDArrow:ElementFinder;
    activityTitleTxt:ElementFinder;
    activityDescTxt:ElementFinder;

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
    TitleIsMandatoryForstageToastMsg:ElementFinder;
    activityTwoUnderModule:ElementFinder;
    AutomationActivitytwoMoreIcon:ElementFinder;
    editActivityOptionBtn:ElementFinder;

    constructor() {

        this.QaAutomationJourneyName = element(By.xpath("//p[contains(text(),'Automation QA Journey')]"));

        this.ThreeDotsAutomationQAJourneyJourneyName = element(By.xpath("//i[@class='author-icon icon-dots master-collection__icon']"));
        this.AutomationQAJourneyDeleteBtn = element(By.xpath("//span[.='Delete']"));
        this.AutomationQAJourneyAlertWindowDeleteBtn = element(By.xpath("//button[@name='Delete']"));


        this.tleJourneyName = element(By.xpath("//p[contains(text(),'Journey Name')]"));

        this.btnJourneyAuthSave = element(By.xpath("//button[@class='btn-common btn-fill']"));
        this.btnJourneyAuthPreview = element(By.xpath("//span[contains(text(),'PREVIEW')]"));
        this.btnAddStage = element(By.xpath("//i[@class='author-icon icon-plus']"));
        this.btnAddModule = element(By.xpath("//i[@class='author-icon icon-plus journey__add']"));
        this.moduleTitleTxt = element(By.xpath("//input[@name='title']"));
        this.moduleShortNameTxt = element(By.xpath("//input[@name='shortName']"));
        this.moduleDescTxt = element(By.xpath("//textarea[@name='description']"));
        this.activityDDArrow = element(By.xpath("//select[@name='Activity Type']"));

        this.activityTitleTxt = element(By.xpath("//input[@name='title']"));
        this.activityDescTxt = element(By.xpath("//textarea[@name='description']"));
        



        this.lstLeftPanelTreeItem = element.all(By.xpath("(//mat-tree-node[@class='mat-tree-node ng-star-inserted'])"));
        this.imgClientLogo = element(By.xpath("//img[@alt='Client Logo']"));
        this.ttlNewStage = element(By.xpath("//p[contains(text(),'New Stage')]"));
        this.dotAddModuleInStage = element(By.xpath("//button[@name='add-module']"));
        this.dotAddActivityInStage = element(By.xpath("//button[@name='add-activity']"));
        this.dotEditStage = element(By.xpath("//button[@name='edit']"));
        this.journeyStageTextBox = element(By.xpath("//input[@type='text']"));
        this.journeyStageDonebtn = element(By.xpath("//button[@class='btn-common btn-fill']"));
        this.journeyModuleAddActivity = element(By.xpath("//button[@name='add-activity']"));

        this.journeyNameText = element(By.xpath("//h1[@class='journey-selection__inno common-page-title']"));

        this.TitleIsMandatoryForstageToastMsg = element(By.xpath("(//div[@class='toast-message ng-star-inserted'])[1]"));

        this.activityTwoUnderModule = element(By.xpath("//p[@class='journey-selection--font']"));

        this.AutomationActivitytwoMoreIcon = element(By.xpath("(//i[@class='author-icon icon-dots master-collection__icon'])[5]"));

        this.editActivityOptionBtn = element(By.xpath("//button[@class='material-icons material-font-size mat-menu-item ng-star-inserted'][1]"));
        


        this.journeyStageMoreIcon = element(By.xpath("(//span//i[@class='author-icon icon-dots master-collection__icon journey-section__fontcolor'])[1]"));
       // this.journeyStageMoreOptions = element.all(By.xpath("//div[@class='mat-menu-content']"));
        this.journeyStageMoreOptions = element.all(By.xpath("//button[@role='menuitem']"));
        
        this.journeyStageNewModule = element(By.xpath("//p[@class='journey-selection__panelfont']"));
        this.journeyStageNewActivity = element(By.xpath("//p[.='Automation Activity one']"));
        this.journeyModuleMoreIcon = element(By.xpath("(//i[@class='author-icon icon-dots master-collection__icon'])[4]"));
        this.journeyActivityMoreIcon = element(By.xpath("(//i[@class='author-icon icon-dots master-collection__icon'])[5]"));
        this.previewMyJourney = element(By.xpath("//h1[@class='plugin-journey__title']"));
    }
}