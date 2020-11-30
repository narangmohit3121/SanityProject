import { element, ElementFinder, ElementArrayFinder } from "protractor";
import { By } from "protractor";

export class SupportPageLocate {

    sampleContent: ElementFinder;
    contentTypeSupportOption:ElementFinder;
    journeyName:ElementFinder;
    journeyauthStaticOpts: ElementArrayFinder;
    supportpagelnk:ElementFinder;
    lnksupportactivity:ElementFinder;
    linkContentDropDown: ElementFinder;
    linkContnetDropDownSelection: ElementFinder;
    linkContentIcon: ElementFinder;
    linkedContentLabel: ElementFinder;
    btnSavelinkSupport:ElementFinder;
    btnPublishlinkSupport:ElementFinder;
    padding:ElementFinder;

    supportLabelLbl:ElementFinder;
    petronasLabelLbl:ElementFinder;
    searchCollectionTxt:ElementFinder
    JourneyConfigurationLink:ElementFinder;
    navigationgationLbl:ElementFinder;
    supportToggleBtn:ElementFinder;
    JourneyConfigurationSAVEBtn:ElementFinder;
    JourneyConfigurationPUBLISHBtn:ElementFinder;


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
    contentImage: ElementFinder;
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
    supportpagetitle:ElementFinder;
    toastmsg: ElementFinder;
    toastMessageSuccess:ElementFinder;
    SupportJourneySAVEBtn:ElementFinder;
    SupportJourneyPUBLISHBtn:ElementFinder;

    supportLinkOptionLnk:ElementFinder;
    supportPageAutomationSelectBtn:ElementFinder;
    searchIcon:ElementFinder;

    
    


    constructor() {

        this.sampleContent = element(By.xpath("//p[contains(text(),'Support Page CMS Automation')]/../.."));
        this.contentTypeSupportOption=element(By.css("select[class*='content-select'] > option:nth-child(13)"));
        this.journeyName = element(By.xpath("//p[contains(text(),'Support Page Automation')]"));
        this.journeyauthStaticOpts = element.all(By.xpath("(//mat-tree-node[@class='mat-tree-node ng-star-inserted'])"));
        this.supportpagelnk = element(By.xpath("(//mat-tree-node[@class='mat-tree-node ng-star-inserted'])[8]"));
        this.supportpagetitle=element(By.xpath("//span[contains(text(),'Journey: Link Support')]"));
        this.lnksupportactivity = element(By.xpath("//i[contains(@class,'material-icons jorney__edit-icon')]"));
      
        this.linkContentDropDown = element(By.xpath("//mat-select[starts-with(@id,'mat-select')]//div[@class='mat-select-trigger']"));
     
        this.linkContnetDropDownSelection = element(By.xpath("//span[@class='mat-option-text'][contains(text(),'Support Page CMS Automation ')]"));
        this.linkContentIcon = element(By.xpath("//div[@class='journey-edit']//div[1]//div[2]//button[1]//i[1]"));
        this.linkedContentLabel = element(By.xpath("//h1[contains(text(),'Journey: Support Page Automation')]"));

        this.btnSavelinkSupport=element(By.xpath("//span[contains(text(),'SAVE')]"));

        this.btnPublishlinkSupport=element(By.xpath("//i[contains(text(),'publish')]"));

        this.toastMessageSuccess = element(By.xpath("//div[@id='toast-container']"));

        this.JourneyConfigurationLink = element(By.xpath("//div[contains(text(),'Journey Configuration')]"));

     //   this.navigationgationLbl = element(By.xpath("(//div)[67]"));

        this.navigationgationLbl = element(By.xpath("(//div[@class='mat-tab-label-content'])[4]"));

     //   this.supportToggleBtn = element(By.xpath("(//div[@class='mat-slide-toggle-thumb-container'])[4]"));

        this.supportToggleBtn = element(By.xpath("(//div[@class='mat-slide-toggle-thumb-container'])[10]"));

        this.JourneyConfigurationSAVEBtn = element(By.xpath("//button[contains(text(),' Save ')]"));

        this.JourneyConfigurationPUBLISHBtn = element(By.xpath("//button[contains(text(),'Publish')]"));

        

        

        this.padding=element(By.xpath("//div[@class='journey__padding']"));
        this.toastmsg=element(By.xpath("//div[contains(text(),'Journey Saved Successfully')]"));

        this.supportLinkOptionLnk=element(By.xpath("//div[contains(text(),'Support')]"));
        this.supportLabelLbl=element(By.xpath("//p[contains(text(),'support')]"));
        this.petronasLabelLbl=element(By.xpath("//div[contains(text(),'petronas')]"));

        this.searchCollectionTxt=element(By.xpath("//input[@name='search collection']"));   


       // this.supportPageAutomationSelectBtn=element(By.xpath("//div[@class='link-activity__content-block']/div[1]//button[@name='select activity']"));
        this.supportPageAutomationSelectBtn=element(By.xpath("//div[@class='link-activity__content-block']/div[1]//button[@name='select activity']"));

        this.searchIcon=element(By.xpath("//i[@class='author-icon icon-search']"));

      //  this.SupportJourneySAVEBtn=element(By.xpath("//button[@class='journey-report__btn btn-generic mat-raised-button mat-button-base']"));
   
      this.SupportJourneySAVEBtn=element(By.xpath("//button[@name='save']"));
       
        this.SupportJourneyPUBLISHBtn=element(By.xpath("//button[@name='publish']"));

        




        this.activityTitle = element(By.xpath("//input[contains(@placeholder ,'Title')]"));
        this.activityDescription = element(By.xpath("//div[contains(@class,'description')]//textarea"));
        this.contentTypeDDArrow = element(By.xpath("//select[contains(@class,'content-select')]"));
        this.contentTypeFirstOption = element(By.css("select[class*='content-select'] > option:nth-child(2)"));
        this.contentTypeAllOptions = element.all(By.css("select[name= 'type'] > option"));
        this.addContentVideo = element(By.xpath("//div[@class='block-drag']//div[contains(text(), 'Video')]/.."));
        this.saveDraftBtn = element(By.xpath("//span[contains(text(),'SAVE DRAFT')]/.."));
        this.contentDropArea = element(By.xpath("//div[contains(@class,'cdk-drop')]"));
        this.exitEditor = element(By.name("exit"));
        this.clientCollectionHeader = element(By.xpath("//*[text()=' Client Collection']/.."));
        this.contentCollapsableFolder = element(By.xpath("//button[@name='icon']/following-sibling::div[contains(@class,'mat-tree-title')]"));
        this.samplePublishedContent = element(By.xpath("//div[contains(text(),'Automation CMS')]"));
        this.contentImage = element(By.xpath("//img[@alt='CDN Image']"));
        this.animateInToggleBtn = element(By.xpath("//label[@class='mat-slide-toggle-label']"));
        this.sampleContentEditVideo = element(By.xpath("//p[contains(text(),'Automation_Edit Video')]/../.."));
        this.editVideoBtn = element(By.xpath("//button[contains(text(),'Edit Video')]"));
        this.editVideoPopUp = element(By.xpath("//div[@class = 'modal-content']"));
        this.videoSizeDD = element(By.xpath("//span[contains(text(),'size')]/following-sibling::select"));
        this.uploadVideoBtn = element(By.xpath("//span[contains(text(),'Upload Video')]/.."));
        this.cancelEditVideo = element(By.xpath("//button[contains(text(),'Cancel Edit')]"));
        this.editDoneButton = element(By.xpath("//button[contains(text(),'Done')]"));
        this.uploadedVideoSource = element(By.xpath("//video/source"));
        this.sampleContentDelete = element(By.xpath("//p[contains(text(),'Automation_Delete')]/../.."));
        this.sampleContentUpdate = element(By.xpath("//p[contains(text(),'Automation_Update')]/../.."));
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
        this.firstContentEditButton = element(By.xpath("(//button[@name='edit'])[1]"));
        this.numberOfColDD = element(By.xpath("//span[contains(text(),'Number of Columns')]/following-sibling::select"));
        this.contentColValueTwo = element(By.xpath("//span[contains(text(),'Number of Columns')]/following-sibling::select/option[@value = 2]"));
        this.backgroundBtn = element(By.xpath("//button[contains(text(),'Background')]"));
        this.chooseImageBtn = element(By.xpath("//input[@placeholder ='Choose image']"));
        this.chooseColor = element(By.xpath("//input[contains(@placeholder,'Choose color')]"));
        this.placementRadioBtnCenter = element(By.xpath("//mat-radio-button[@ng-reflect-value='center']"));
        this.columnTextWrappers = element.all(By.css("app-block-editor div.content-wrapper > app-input p"));
        this.cancelEditedContentBtn = element(By.name("cancel-edit"));
        this.editImageAndTextBtn = element(By.xpath("//button[contains(text(),'Edit Text & Image')]"));
        this.imageFloatDD = element(By.xpath("//span[contains(text(),'Image Block')]/following-sibling::select"));
        this.imageFloatLeftOption = element(By.xpath("//span[contains(text(),'Image Block')]/following-sibling::select/option[contains(text(),'image left')]"));
        this.imageDescriptionBox = element(By.xpath("(//app-block-editor//div[@class='block-input text_and_image']//app-input//p)"));
        this.imageAndTextTypeInput = element(By.xpath("//mat-expansion-panel[contains(@class,'text_and_image')]//div[@class='input-container']//div[@class='fr-wrapper']//p"));
        this.editImageBtn = element(By.xpath("//button[contains(text(),'Edit Image')]"));
        this.imgInContentTypeImage = element(By.xpath("//mat-expansion-panel[contains(@class,'block image')]//app-image//img"));
        this.editCardsBtn = element(By.xpath("//button[contains(text(),'Edit Cards')]"));
        this.cardSizeDD = element(By.xpath("//span[contains(text(),'Card Back')]/preceding-sibling::select"));
        this.cardSizeSmall = element(By.xpath("//span[contains(text(),'Card Back')]/preceding-sibling::select/option[contains(text(),'Small')]"));
        this.cardAlignmentDD = element(By.xpath("//span[contains(text(),'Card Back')]/following-sibling::select"));
        this.cardAlignmentCenter = element(By.xpath("//span[contains(text(),'Card Back')]/following-sibling::select/option[contains(text(),'Center')]"));
        this.cardFrontTextInput = element(By.xpath("//span[contains(text(),'Card Front')]/../following-sibling::app-input//p"));
        this.cardBackTextInput = element(By.xpath("//span[contains(text(),'Card Back')]/../following-sibling::app-input//p"));
        this.cardFrontText = element(By.xpath("//div[@class='card_header__content']/app-input//div[@class='fr-wrapper']"));
        this.cardFlipBtn = element(By.xpath("//div[@class='card_header__content']/following-sibling::div[@class='co-cards__items--icon']"));
        this.cardBackText = element(By.xpath("//div[contains(@class,'card_description__content')]/app-input//div[@class='fr-wrapper']"));
        this.cardSizeElement = element(By.xpath("//app-input[@class='co-cards__headerItem']/../../.."));
        this.addCardBtn = element(By.name("add-card"));
        this.newCardFrontInput = element(By.xpath("(//span[contains(text(),'Card Front')]/../following-sibling::app-input//p)[last()]"));
        this.newCardBackInput = element(By.xpath("(//span[contains(text(),'Card Back')]/../following-sibling::app-input//p)[last()]"));
        


    }
}

