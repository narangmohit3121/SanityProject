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
    cohortResJSID: ElementFinder;
    deleteCohortResRelatedContentBlock: ElementFinder;
    cohortResRelatedContentJSId: ElementFinder;
    cohortResShowExerciseStatus: ElementFinder;
    cohortResShowExerciseLabel: ElementFinder;
    textInputBtn: ElementFinder;
    textInputJSID: ElementFinder;
    textInputLabel: ElementFinder;
    textInputPlaceholderText: ElementFinder;
    textInputCharacterLimit: ElementFinder;
    textInputSaveChanges: ElementFinder;
    participantResRelatedContentJSId: ElementFinder;
    participantResShowExerciseLabel: ElementFinder;
    participantResShowExerciseStatus: ElementFinder;
    radioSizeMedium: ElementFinder;
    sizeCurrentlySelected: ElementFinder;
    radioAlignmentCenter: ElementFinder;
    alignmentSelected: ElementFinder;
    frontContentAllCards: ElementArrayFinder;
    backContentAllCards: ElementArrayFinder;
    wordCloudJSID: ElementFinder;
    wordCloudScopeCohort: ElementFinder;
    selectedWordCloudScope: ElementFinder;
    tglIsMandatoryGenDoc: ElementFinder;
    txtIsMandatoryGenDoc: ElementFinder;
    selectContentObjDD: ElementFinder;
    firstOptionContentObjDD: ElementFinder;
    numberOfActiveDays: ElementFinder;
    increaseNumberOfActiveDays: ElementFinder;
    decreaseNumberOfActiveDays: ElementFinder;
    linkedContentObjNameInPreview: ElementFinder;
    shareLinkExpireText: ElementFinder;
    nestedContentTypeAccordion: ElementFinder;
    accordionDescriptionsInPreview: ElementArrayFinder;
    accordionHeadingsInPreview: ElementArrayFinder;
    calloutTypeDD: ElementFinder;
    calloutTypeFloatRight40: ElementFinder;
    calloutContentInPreview: ElementFinder;
    calloutFloatTextInPreview: ElementFinder;
    calloutFloatText: ElementFinder;
    calloutContentText: ElementFinder;
    storylineHeight: ElementFinder;
    tglCompletionMandatory: ElementFinder;
    uploadStoryLineFileInputBox: ElementFinder;
    storylineURLInPreview: ElementFinder;
    storylineHeightInPreview: ElementFinder;
    completionMandatoryInPreview: ElementFinder;
    tglCompletionIsChecked: ElementFinder;
    completionMandatoryCurrentValue: ElementFinder;
    btnBrowseImage: ElementFinder;
    imageFolderAutomationRegSuite: ElementFinder;
    mediaFolderInRegSuiteFolder: ElementFinder;
    imagesInMediaFolder: ElementArrayFinder;
    selectFirstImageInMediaFolder: ElementFinder;
    firstImageName: ElementFinder;
    btnInsertImage: ElementFinder;
    firstImageAltText: ElementFinder;
    uploadedImageFileName: ElementFinder;
    uploadedImageAltText: ElementFinder;
    uploadedImage: ElementFinder;


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
        //Cohort Response
        this.cohortResJSID = element(By.xpath("//input[@id='journeyId']"));
        this.deleteCohortResRelatedContentBlock = element(By.xpath("//mat-dialog-container//button[contains(@name,'delete')]"));
        this.cohortResRelatedContentJSId = element(By.xpath("//mat-dialog-container//input[contains(@name,'ID of response')]"));
        this.cohortResShowExerciseLabel = element(By.xpath("//mat-dialog-container//input[contains(@id,'mat-slide-toggle')]/ancestor::label"));
        this.cohortResShowExerciseStatus = element(By.xpath("//mat-dialog-container//input[contains(@id,'mat-slide-toggle')]"));
        //Text-Input
        this.textInputBtn = element(By.xpath("//mat-dialog-container//button[contains(@id,'textAreaInput')]"));
        this.textInputJSID = element(By.xpath("//h4[contains(text(),'Add Text Field ')]//following::input[contains(@name,'Journey Script ID')]"));
        this.textInputLabel = element(By.xpath("//input[contains(@name,'Question Text')]"));
        this.textInputPlaceholderText = element(By.xpath("//input[contains(@name,'Placeholder Text')]"));
        this.textInputCharacterLimit = element(By.xpath("//input[contains(@name,'Limit')]"));
        this.textInputSaveChanges = element(By.xpath("//input[contains(@name,'Limit')]//following::button[contains(@name,'Ok')]"));
        //Participant Response
        this.participantResRelatedContentJSId = element(By.xpath("//mat-dialog-container//input[contains(@name,'ID of response')]"));
        this.participantResShowExerciseLabel = element(By.xpath("//mat-dialog-container//input[contains(@id,'mat-slide-toggle')]/ancestor::label"));
        this.participantResShowExerciseStatus = element(By.xpath("//mat-dialog-container//input[contains(@id,'mat-slide-toggle')]"));
        //Cards
        this.radioSizeMedium = element(By.xpath("//span[contains(text(),'Medium')]/ancestor::label"));
        this.sizeCurrentlySelected = element(By.xpath("//mat-radio-group[contains(@name,'size')]//mat-radio-button[contains(@class,'checked')]"));
        this.radioAlignmentCenter = element(By.xpath("//span[contains(text(),'Center')]/ancestor::label"));
        this.alignmentSelected = element(By.xpath("//mat-radio-group[contains(@name,'alignment')]//mat-radio-button[contains(@class,'checked')]"));
        this.frontContentAllCards = element.all(By.xpath(`(//label[contains(text(),'Card Front')]//following-sibling::app-input//p)`));
        this.backContentAllCards = element.all(By.xpath(`(//label[contains(text(),'Card Back')]//following-sibling::app-input//p)`));
        //Wordcloud
        this.wordCloudJSID = element(By.xpath("//mat-dialog-container//input[contains(@name,'ID of response')]"));
        this.wordCloudScopeCohort = element(By.xpath("//mat-dialog-container//span[contains(text(),'Cohort')]/ancestor::label"));
        this.selectedWordCloudScope = element(By.xpath("//mat-radio-group[contains(@aria-labelledby,'scope')]//mat-radio-button[contains(@class,'checked')]"));

        //Generate Document
        this.tglIsMandatoryGenDoc = element(By.css("div[class*='modal-common-row']:nth-last-child(2) div[class$='thumb']"));
        this.txtIsMandatoryGenDoc = element(By.css("mat-dialog-container div[class*='modal-common-row']:nth-last-child(2) span[class*='toggle-content'] span[class]"));
        //Share Link
        this.selectContentObjDD = element(By.css("mat-dialog-container select[name*='content-object']"));
        this.firstOptionContentObjDD = element(By.css("mat-dialog-container select[name*='content-object'] > option:nth-child(2)"));
        this.numberOfActiveDays = element(By.css("mat-dialog-container input[name*='activeDays']"));
        this.increaseNumberOfActiveDays = element(By.css("mat-dialog-container button[name*='increment']"));
        this.decreaseNumberOfActiveDays = element(By.css("mat-dialog-container button[name*='decrement']"));
        this.linkedContentObjNameInPreview = element(By.xpath("//div[contains(@class,'link-preview')]//div[contains(@class,'header-text')]//mat-card-title"));
        this.shareLinkExpireText = element(By.xpath("//div[contains(@class,'link-preview')]//mat-card-content//p"));
        //Nested Content
        this.nestedContentTypeAccordion = element(By.xpath("//mat-dialog-container//span[contains(text(),'Accordion')]/ancestor::label"));
        this.accordionHeadingsInPreview = element.all(By.xpath("//mat-expansion-panel//div[contains(@class,'accordion__title')]"));
        this.accordionDescriptionsInPreview = element.all(By.xpath("//mat-expansion-panel//div[contains(@class,'accordion__para')]/p"));
        //Callout
        this.calloutTypeDD = element(By.css("select[name*='-type']"));
        this.calloutTypeFloatRight40 = element(By.xpath("//option[contains(text(),'right 40%')]"));
        this.calloutFloatText = element(By.xpath("(//app-block-editor//div[contains(@class,'callout-')]//p)"));
        this.calloutContentText = element(By.xpath("(//app-block-editor//div[contains(@class,'secondary')]//p)"));
        this.calloutContentInPreview = element(By.xpath("(//mat-expansion-panel//div[contains(@class,'secondary')]//div[contains(@class,'fr-wrapper')]//p)"));
        this.calloutFloatTextInPreview = element(By.xpath("(//mat-expansion-panel//div[contains(@class,'callout-')]//div[contains(@class,'fr-wrapper')]//p)"));
        //Storyline
        this.storylineHeight = element(By.css("input[name*='blockHeight']"));
        this.tglCompletionMandatory = element(By.css("mat-slide-toggle[id*='Mandatory'] label"));
        this.tglCompletionIsChecked = element(By.css("mat-slide-toggle[id*='Mandatory']"));
        this.uploadStoryLineFileInputBox = element(By.css("#file-input-zip"));
        this.storylineURLInPreview = element(By.xpath("//label[contains(text(),'url')]/.."));
        this.storylineHeightInPreview = element(By.xpath("//label[contains(text(),'Height')]/.."));
        this.completionMandatoryInPreview = element(By.xpath("//label[contains(text(),'mandatory')]/following-sibling::mat-slide-toggle"));
        this.completionMandatoryCurrentValue = element(By.css("mat-slide-toggle[id*='Mandatory'] span[class*='star']"));
        //Image
        this.btnBrowseImage = element(By.css("button[name='choose-image']"));
        this.imageFolderAutomationRegSuite = element(By.xpath("//div[contains(@class,'breadcrumb')]//a[contains(text(),'Individual Content')]"));
        this.mediaFolderInRegSuiteFolder = element(By.xpath("//div[contains(text(),'Media')]/ancestor::button"));
        this.imagesInMediaFolder = element.all(By.xpath("//button[contains(@name,'thumbnail')]"));
        this.selectFirstImageInMediaFolder = element(By.xpath("(//button[contains(@name,'thumbnail')])[1]"));
        this.firstImageName = element(By.xpath("(//button[contains(@name,'thumbnail')])[1]//div[contains(@class,'name')]"));
        this.firstImageAltText = element(By.xpath("(//button[contains(@name,'thumbnail')])[1]//img"));
        this.btnInsertImage = element(By.xpath("//button[contains(@name,'Insert')]"));
        this.uploadedImageFileName = element(By.css("span[class*='fileName']"));
        this.uploadedImageAltText = element(By.css("input[name*='altText']"));
        this.uploadedImage = element(By.css("mat-dialog-container app-cdn-image img"));
        
    }

}