import { element, ElementFinder, ElementArrayFinder } from "protractor";
import { By } from "protractor";
import testData from "../../testData.json";
import config from "../../StepDefinitions/config.json";
import sanityTestData from "../../SanityTestData.json";

export class ActivityAuthoringPageLocate {

    sampleContent: ElementFinder;
    activityTitle: ElementFinder;
    activityDescription: ElementFinder;
    contentTypeDDArrow: ElementFinder;
    contentTypeFirstOption: ElementFinder;
    contentTypeAllOptions: ElementArrayFinder;
    addContentVideo: ElementFinder;
    saveDraftBtn: ElementFinder;
    contentDropArea: ElementFinder;
    exitEditor: ElementFinder;
    clientCollectionHeader: ElementFinder;
    contentCollapsableFolder: ElementFinder;
    samplePublishedContent: ElementFinder;
    contentVideo: ElementFinder;
    animateInToggleBtn: ElementFinder;
    sampleContentEditVideo: ElementFinder;
    editVideoBtn: ElementFinder;
    videoSizeDD: ElementFinder;
    uploadVideoBtn: ElementFinder;
    cancelEditVideo: ElementFinder;
    editDoneButton: ElementFinder;
    uploadedVideoSource: ElementFinder;
    editVideoPopUp: ElementFinder;
    sampleContentDelete: ElementFinder;
    contentItems: ElementArrayFinder;
    deleteButtons: ElementArrayFinder;
    deleteButtonFirstContent: ElementFinder;
    deleteConfirmationNoBtn: ElementFinder;
    deleteConfirmationYesBtn: ElementFinder;
    allCollapsableArrows: ElementArrayFinder;
    copyFirstContentBtn: ElementFinder;
    contentContainerFirstContent: ElementFinder;
    contentContainerLastContent: ElementFinder;
    sampleContentScroll: ElementFinder;
    textInFirstContent: ElementFinder;
    firstContentEditButton: ElementFinder;
    numberOfColDD: ElementFinder;
    contentColValueTwo: ElementFinder;
    backgroundBtn: ElementFinder;
    chooseImageBtn: ElementFinder;
    chooseColor: ElementFinder;
    placementRadioBtnCenter: ElementFinder;
    columnTextWrappers: ElementArrayFinder;
    cancelEditedContentBtn: ElementFinder;
    editImageAndTextBtn: ElementFinder;
    imageFloatDD: ElementFinder;
    imageFloatLeftOption: ElementFinder;
    imageDescriptionBox: ElementFinder;
    imageAndTextTypeInput: ElementFinder;
    editImageBtn: ElementFinder;
    imgInContentTypeImage: ElementFinder;
    editCardsBtn: ElementFinder;
    cardSizeDD: ElementFinder;
    cardAlignmentDD: ElementFinder;
    cardFrontTextInput: ElementFinder;
    cardBackTextInput: ElementFinder;
    cardFrontText: ElementFinder;
    cardFlipBtn: ElementFinder;
    cardBackText: ElementFinder;
    cardSizeElement: ElementFinder;
    cardSizeSmall: ElementFinder;
    cardAlignmentCenter: ElementFinder;
    addCardBtn: ElementFinder;
    newCardFrontInput: ElementFinder;
    newCardBackInput: ElementFinder;
    sampleContentUpdate: ElementFinder;
    cardFrontContainers: ElementArrayFinder;
    publishBtn: ElementFinder;
    //edited onwards 04-07-2020
    automationFolder:ElementFinder;
    folderSprint3:ElementFinder;
    deleteContentBlockActivity: ElementFinder;
    editContentBlockActivity: ElementFinder;
    editCardBlockActivity: ElementFinder;
    deleteLastCard: ElementFinder;
    contentWordCloud: ElementFinder;
    directVideoURL: ElementFinder;
    videoIsSecure: ElementFinder;
    videoAutonavigate: ElementFinder;
    videoAutoplay: ElementFinder;
    videoShowFullScreen: ElementFinder;
    isSecureCurrentSetting: ElementFinder;
    autonavigateCurrentSetting: ElementFinder;
    autoplayCurrentSetting: ElementFinder;
    showFullScreenCurrentSetting: ElementFinder;
    editTextImageActivity: ElementFinder;
    browseImageBtn: ElementFinder;
    imageList : ElementArrayFinder;
    toastMessageSuccess:ElementFinder;
    backgroundColorContainer: ElementFinder;
    editImageBlockActivity: ElementFinder;
    buttonEditImage: ElementFinder;
    petronasImageCollection: ElementFinder;


    constructor() {

        this.sampleContent = element(By.xpath("//p[contains(text(),'Test Activity_MN')]/../.."));
        this.activityTitle = element(By.xpath("//input[contains(@placeholder ,'Title')]"));
        this.activityDescription = element(By.xpath("//div[contains(@class,'description')]//textarea"));
        this.contentTypeDDArrow = element(By.xpath("//select[contains(@class,'content-select')]"));
        this.contentTypeFirstOption = element(By.css("select[class*='content-select'] > option:nth-child(2)"));
       // this.contentTypeAllOptions = element.all(By.css("div[class*='mat-select-panel'] > div > mat-option"));
        this.contentTypeAllOptions = element.all(By.css("select[name = 'type'] > option"));
        this.addContentVideo = element(By.xpath("//div[@class='block-drag']//div[contains(text(), 'Video')]/.."));
        this.saveDraftBtn = element(By.xpath("//span[contains(text(),'SAVE DRAFT')]/.."));
        this.contentDropArea = element(By.xpath("//div[contains(@class,'cdk-drop')]"));
        this.exitEditor = element(By.name("exit"));
        this.clientCollectionHeader = element(By.xpath("//*[text()=' Client Collection']/.."));
        //this.contentCollapsableFolder = element(By.xpath("//button[@name='icon']/following-sibling::div[contains(@class,'mat-tree-title')]"));
        this.contentCollapsableFolder = element(By.xpath("//button[@name='icon']/following-sibling::div[contains(@class,'mat-tree-title') and contains(text(),'petronas')]"));  
        this.samplePublishedContent = element(By.xpath("//div[contains(text(),'WordCloud Four')]"));
        this.contentWordCloud = element(By.xpath("//button[contains(text(),'Edit Wordcloud')]"));
        this.contentVideo = element(By.xpath("//img[@alt='CDN Image']"));
        this.animateInToggleBtn = element(By.xpath("//label[@class='mat-slide-toggle-label']"));
        this.sampleContentEditVideo = element(By.xpath("//p[contains(text(),'Automation_Edit Video')]/../.."));
        this.editVideoBtn = element(By.xpath("//button[contains(text(),'Edit Video')]"));
        this.editVideoPopUp = element(By.xpath("//div[@class = 'modal-content']"));
        this.videoSizeDD = element(By.xpath("//mat-radio-group[@name='Video Size']"));
        this.uploadVideoBtn = element(By.xpath("//span[contains(text(),'Upload Video')]/.."));
        this.directVideoURL = element(By.xpath("//span[contains(text(),'Upload Video')]/preceding::input[contains(@name,'Direct URL')]"));
        this.cancelEditVideo = element(By.xpath("//button[contains(text(),'Cancel')]"));
        //this.editDoneButton = element(By.xpath("//button[contains(text(),'Done')]"));
        this.editDoneButton = element(By.xpath("//mat-dialog-container//button[contains(text(),'Save')]"));        
        this.uploadedVideoSource = element(By.xpath("//video/source"));
        this.sampleContentDelete = element(By.xpath("//p[contains(text(),'Automation_Delete')]/../.."));
        this.sampleContentUpdate = element(By.xpath("//p[contains(text(),'Automation_Update')]/../.."));
        this.deleteContentBlockActivity = element(By.xpath("//p[contains(text(),'Automation_Delete Content Block')]/../.."));
        this.contentItems = element.all(By.tagName("mat-expansion-panel-header"));
        this.deleteButtons = element.all(By.xpath("//mat-expansion-panel-header//button[@name = 'delete']"));
        this.deleteButtonFirstContent = element(By.xpath("(//mat-expansion-panel-header//button[@name = 'delete'])[1]"));
        this.deleteConfirmationNoBtn = element(By.name("no"));
        this.deleteConfirmationYesBtn = element(By.name("yes"));
        this.allCollapsableArrows = element.all(By.xpath("//span[contains(@class,'mat-expansion-indicator')]"));
        this.copyFirstContentBtn = element(By.xpath("(//span[contains(@class,'author-icon icon-copy')]/..)[1]"));
        this.contentContainerFirstContent = element(By.xpath("(//div[@class='content-wrapper'])[1]"));
        this.contentContainerLastContent = element(By.css("mat-expansion-panel:last-child  div.content-wrapper"));
        this.sampleContentScroll = element(By.xpath("//p[contains(text(),'Automation_All Content')]/../.."));
        this.textInFirstContent = element(By.xpath("(//div[@class = 'content-wrapper']//div[@class='fr-wrapper']/div/p)[1]"));
        //this.firstContentEditButton = element(By.xpath("(//button[@name='edit'])[1]"));
        this.firstContentEditButton = element(By.xpath("(//button[contains(text(),'Edit Content')])[1]"));
        this.numberOfColDD = element(By.xpath("//label[contains(text(),'Number of Columns')]/following-sibling::select"));
        //this.contentColValueTwo = element(By.xpath("//label[contains(text(),'Number of Columns')]/following-sibling::select/option[@value = 2]"));
        this.contentColValueTwo = element(By.xpath("//mat-radio-group[@name='number of columns']/mat-radio-button[@value='2']/label"));
        //this.backgroundBtn = element(By.xpath("//button[contains(text(),'Background')]"));
        this.backgroundBtn = element(By.xpath("//label[contains(text(),'Background')]/following-sibling::mat-slide-toggle/label"));
        this.chooseImageBtn = element(By.xpath("//div[@class='browse-image']/preceding-sibling::button[@name='choose-image']"));
        this.browseImageBtn = element(By.xpath("//input[@placeholder='Choose image' and @type = 'file']"));
        this.backgroundColorContainer = element(By.xpath("//div[@name='Background Color']"));
       // this.chooseColor = element(By.xpath("//input[contains(@placeholder,'Choose color')]"));
        this.chooseColor = element(By.xpath("//div[contains(@class,'hex-text')]//input"));
        this.placementRadioBtnCenter = element(By.xpath("//mat-radio-button[@ng-reflect-value='center']"));
        this.columnTextWrappers = element.all(By.css("app-block-editor div.content-wrapper  app-input p"));
        //this.cancelEditedContentBtn = element(By.name("cancel"));
        this.cancelEditedContentBtn = element(By.css("mat-dialog-container  button[name='cancel']"));
        this.editImageAndTextBtn = element(By.xpath("//button[contains(text(),'Edit Text & Image')]"));
        this.imageFloatDD = element(By.xpath("//label[contains(text(),'Image Block')]/following-sibling::select"));
        this.imageFloatLeftOption = element(By.xpath("//label[contains(text(),'Image Block')]/following-sibling::select/option[contains(text(),'image left')]"));
        this.imageDescriptionBox = element(By.xpath("(//app-block-editor//div[@class='block-input text_and_image']//app-input//p)"));
        this.imageAndTextTypeInput = element(By.xpath("//mat-expansion-panel[contains(@class,'text_and_image')]//div[@class='input-container']//div[@class='fr-wrapper']//p"));
        this.editImageBtn = element(By.xpath("//button[contains(text(),'Edit Image')]"));
        this.buttonEditImage = element(By.xpath("//button[contains(text(),'Edit Image')]"));
        this.imgInContentTypeImage = element(By.xpath("//mat-expansion-panel[contains(@class,'block image')]//app-image//img"));
        this.editCardsBtn = element(By.xpath("//button[contains(text(),'Edit Cards')]"));
        this.cardSizeDD = element(By.xpath("//label[contains(text(),'Card size')]/following-sibling::select"));
        this.cardSizeSmall = element(By.xpath("//label[contains(text(),'Card size')]/following-sibling::select/option[contains(text(),'Small')]"));
        this.cardAlignmentDD = element(By.xpath("//label[contains(text(),'Card Back')]/following-sibling::select"));
        this.cardAlignmentCenter = element(By.xpath("//label[contains(text(),'Card Back')]/following-sibling::select/option[contains(text(),'Center')]"));
        this.cardFrontTextInput = element(By.xpath("//label[contains(text(),'Card Front')]/following-sibling::app-input//p"));
        this.cardBackTextInput = element(By.xpath("//label[contains(text(),'Card Back')]/following-sibling::app-input//p"));
        this.cardFrontText = element(By.xpath("//div[@class='card_header__content']/app-input//div[@class='fr-wrapper']"));
        this.cardFlipBtn = element(By.xpath("//div[@class='card_header__content']/following-sibling::div[@class='co-cards__items--icon']"));
        this.cardBackText = element(By.xpath("//div[contains(@class,'card_description__content')]/app-input//div[@class='fr-wrapper']"));
        this.cardSizeElement = element(By.xpath("//app-input[@class='co-cards__headerItem']/../../.."));
        this.addCardBtn = element(By.name("add-card"));
        this.newCardFrontInput = element(By.xpath("(//label[contains(text(),'Card Front')]//following-sibling::app-input//p)[last()]"));
        this.newCardBackInput = element(By.xpath("(//label[contains(text(),'Card Back')]//following-sibling::app-input//p)[last()]"));
        this.cardFrontContainers = element.all(By.css("div.co__cards__heading"));
        this.publishBtn = element(By.xpath("//span[contains(text(),'PUBLISH ')]/.."));
        this.automationFolder = element(By.xpath("//p[contains(text(),'Automation Folder_DONOT DELETE')]/../../.."));
        this.folderSprint3 = element(By.xpath("//p[contains(text(),'Sprint 3')]/../../.."));
        this.editContentBlockActivity = element(By.xpath("//p[contains(text(),'Automation_Edit Content Block')]/../.."));
        this.editCardBlockActivity = element(By.xpath("//p[contains(text(),'Automation_Edit Card Block')]/../.."));
        this.editTextImageActivity = element(By.xpath(`//p[contains(text(),'${testData.Sprint3.EditTextAndImage.nameActivityEdit}')]/../..`));
        this.deleteLastCard = element(By.xpath("(//div[contains(@class,'cardsEdit')]//button[@name='delete'])[last()]"));
        this.videoShowFullScreen = element(By.css("#fullScreen > label"));
        this.videoAutoplay = element(By.css("#autoplay > label"));
        this.videoAutonavigate = element(By.css("#autonavigate > label"));
        this.videoIsSecure = element(By.css("#isSecure > label"));
        this.showFullScreenCurrentSetting = element(By.css("#fullScreen"));
        this.autoplayCurrentSetting = element(By.css("#autoplay"));
        this.autonavigateCurrentSetting = element(By.css("#autonavigate"));
        this.isSecureCurrentSetting = element(By.css("#isSecure"));
        this.petronasImageCollection = element(By.xpath("//mat-tree-node[contains(text(),'petronas')]//button"));
        //this.imageList = element.all(By.xpath("//app-image-chooser//div[@class='image-list']/div")) ;
        this.imageList = element.all(By.xpath("//app-image-chooser//img"));
        this.toastMessageSuccess = element(By.xpath("//div[@id='toast-container']//div[contains(text(),'success')]"));
        this.editImageBlockActivity = element(By.xpath(`//p[contains(text(),'${sanityTestData.imageBlock}')]/../..`))

        if(config.suiteType == "sanity"){
            //this.sampleContent = element(By.xpath("//p[contains(text(),'Test Activity_MN')]/../.."));
            this.sampleContentEditVideo = element(By.xpath(`//p[contains(text(),'${sanityTestData.videoBlock}')]/../..`));
            this.deleteContentBlockActivity = element(By.xpath("//p[contains(text(),'Automation_Delete Content Block')]/../.."));
            this.editContentBlockActivity = element(By.xpath(`//p[contains(text(),'${sanityTestData.contentBlock}')]/../..`));
            this.editCardBlockActivity = element(By.xpath(`//p[contains(text(),'${sanityTestData.cardsBlock}')]/../..`));
            this.editTextImageActivity = element(By.xpath(`//p[contains(text(),'${sanityTestData.textAndImageBlock}')]/../..`));
            this.editImageBlockActivity = element(By.xpath(`//p[contains(text(),'${sanityTestData.imageBlock}')]/../..`))
        }
        
    }
}

