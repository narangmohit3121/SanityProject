import { element, ElementFinder, ElementArrayFinder } from "protractor";
import { By } from "protractor";
import config from "../../StepDefinitions/config.json";
import sanityTestData from "../../SanityTestData.json";

export class CreateAllContentsLocate{
    btnCreateActivity: ElementFinder;
    btnCreateContent: ElementFinder;
    activityTitle: ElementFinder;
    btnStandardActivity: ElementFinder;
    activityDescription: ElementFinder;
    btnCreateNewActivity: ElementFinder;
    tabContent: ElementFinder;
    videoSizeMedium: ElementFinder;
    contentTypeAction: ElementFinder;
    ddContentType: ElementFinder;
    singleSelectJS_Id: ElementFinder;
    multiSelJS_Id: ElementFinder;
    singleSelectTitle: ElementFinder;
    radioTypeSelected: ElementFinder;
    dropdownTypeSelected: ElementFinder;
    ssLongOptionsDescriptionInPreview: ElementArrayFinder;
    multiSelectTitle: ElementFinder;
    btnIncreaseMaxSelections: ElementFinder;
    maxSelectionsCount: ElementFinder;
    btnIncreaseMinSelections: ElementFinder;
    minSelectionsCount: ElementFinder;
    checkboxTypeSelected: ElementFinder;
    multiLongOptionDescriptionsInPreview: ElementArrayFinder;
    varGridJSId: ElementFinder;
    varGridDescription: ElementFinder;
    varGridTitle: ElementFinder;
    varGridAddOption: ElementFinder;
    btnVarGridAddQuestion: ElementFinder;
    numberOfComments: ElementFinder;
    titleDiscusThread: ElementFinder;
    graphTypeBar: ElementFinder;
    graphDescription: ElementFinder;
    graphInterval: ElementFinder;
    rgJSId: ElementFinder;
    rgLinkedJSId: ElementFinder;
    myVoteLegendText: ElementFinder;
    othersVoteLegendText: ElementFinder;
    linkedSSIdOption: ElementFinder;
    downloadPrehead: ElementFinder;
    downloadJSId: ElementFinder;
    downloadHeading: ElementFinder;
    tglIsMandatory: ElementFinder;
    txtMandatorySelection: ElementFinder;


    constructor(){
        this.btnCreateContent = element(By.xpath("//button[contains(@name,'add-content')]"));
        this.btnCreateNewActivity = element(By.xpath("//span[contains(text(),'New Activity')]/.."));
        this.activityTitle = element(By.xpath(""));
        this.activityTitle = element(By.xpath("//input[contains(@name,'Activity Title')]"));
        this.activityDescription = element(By.xpath("//textarea[contains(@name,'Activity Description')]"));
        this.btnStandardActivity = element(By.xpath("//*[contains(text(),'Standard')]/.."));
        this.btnCreateActivity = element(By.xpath("//button[contains(@name,'create activity')]"));
        this.ddContentType = element(By.xpath("//select[@name='type']"));
        this.contentTypeAction = element(By.xpath("//select[contains(@name,'type')]//option[contains(text(),'Action')]"));
        this.tabContent = element(By.xpath("//div[contains(text(),'Content')]/parent::div[@role='tab']"));
        //VideoBlock
        this.videoSizeMedium = element(By.xpath("//span[contains(text(),'Medium')]/ancestor::label[@class='mat-radio-label']"));
        //Single Select
        this.singleSelectJS_Id = element(By.xpath("//input[contains(@name,'Title')]/preceding::input[contains(@name,'Journey Script ID')]"));
        this.singleSelectTitle = element(By.xpath("//input[contains(@name,'Selection Title')]"));
        this.radioTypeSelected = element(By.xpath("//span[contains(text(),'Radio')]//ancestor::mat-radio-button[contains(@class,'checked')]"));
        this.dropdownTypeSelected = element(By.xpath("//span[contains(text(),'Dropdown')]//ancestor::mat-radio-button[contains(@class,'checked')]"));
        this.ssLongOptionsDescriptionInPreview = element.all(By.xpath("//div[contains(@class,'content_preview')]//mat-radio-group/div//span[contains(@class,'text-title')]/following-sibling::p"));
        //Multi Select
        this.multiSelJS_Id = element(By.xpath("//button[contains(@name,'increment')]/preceding::input[contains(@name,'Journey Script ID')]"));
        this.multiSelectTitle = element(By.xpath("//input[contains(@name,'Selection Title')]"));
        this.btnIncreaseMaxSelections = element(By.xpath("//input[contains(@aria-label,'Max Number')]/../following-sibling::span//button[contains(@name,'increment')]"));
        this.maxSelectionsCount = element(By.xpath("//input[contains(@aria-label,'Max Number')]"));
        this.btnIncreaseMinSelections = element(By.xpath("//input[contains(@aria-label,'Min Number')]/../following-sibling::span//button[contains(@name,'increment')]"));
        this.minSelectionsCount = element(By.xpath("//input[contains(@aria-label,'Min Number')]"));
        this.checkboxTypeSelected  = element(By.xpath("//span[contains(text(),'Checkbox')]//ancestor::mat-radio-button[contains(@class,'checked')]"));
        this.multiLongOptionDescriptionsInPreview = element.all(By.xpath("//div[contains(@class,'content_preview')]//div[contains(@class,'multiple__row content')]/div//span[contains(@class,'text-title')]/following-sibling::p"));
        // Variable Grid
        this.varGridJSId = element(By.xpath("//mat-dialog-container//input[contains(@name,'Defined Journey Script ID')]"));
        this.varGridDescription = element(By.xpath("//mat-dialog-container//input[contains(@name,'Description')]"));
        this.varGridTitle = element(By.xpath("//mat-dialog-container//button[@name='Add Option']/preceding::input[contains(@name,'Question Title')]"));
        this.varGridAddOption = element(By.xpath("//button[@name='Add Option']"));
        this.btnVarGridAddQuestion = element(By.xpath("//button[@name='Add Question']"));
        //Discussion Thread
        this.numberOfComments = element(By.id("pageLength"));
        this.titleDiscusThread = element(By.id("blockTitle"));
        //Response Graph
        this.graphTypeBar = element(By.xpath("//mat-dialog-container//span[contains(text(),'Bar')]/ancestor::label"));
        this.graphDescription = element(By.xpath("//mat-dialog-container//input[contains(@name,'Description')]"));
        this.graphInterval = element(By.xpath("//mat-dialog-container//input[contains(@name,'Interval')]"));
        this.rgLinkedJSId = element(By.xpath("//mat-dialog-container//input[contains(@name,'ID of response')]"));
        this.rgJSId = element(By.xpath("//mat-dialog-container//input[contains(@name,'Block ID')]"));
        this.myVoteLegendText = element(By.xpath("//mat-dialog-container//input[contains(@name,'My Vote')]"));
        this.othersVoteLegendText = element(By.xpath("//mat-dialog-container//input[contains(@name,'Other Votes')]"));
        this.linkedSSIdOption = element(By.xpath("//mat-option[1]"));
        //Download
        this.downloadPrehead = element(By.xpath("//input[@name='Prehead']"));
        this.downloadJSId = element(By.xpath("//mat-dialog-container//input[contains(@name,'Heading')]/preceding::input[contains(@name,'ID')]"));
        this.downloadHeading = element(By.xpath("//mat-dialog-container//input[contains(@name,'Heading')]"));
        this.tglIsMandatory = element(By.css("mat-dialog-container div[class$='thumb']"));
        this.txtMandatorySelection = element(By.css("mat-dialog-container span[class*='toggle-content'] span[class]"));
    }

}