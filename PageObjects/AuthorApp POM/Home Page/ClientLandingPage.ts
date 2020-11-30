import { ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "protractor";


export class ClientPageLocate {

    //Client WebElements
    momentaPetronasTitle: ElementFinder;
    copyJourneyPlus: ElementFinder;
    copyJourneyButton: ElementFinder;
    journeyList: ElementArrayFinder;
    journeyPlusMenuOptions: ElementArrayFinder;
    copyJourneyPopupSelect: ElementFinder;
    qaJourneyName: ElementFinder;

    //Copy Journey Popup WebElements
    momentaDialogContainer: ElementFinder;
    momentaJourneyTitle: ElementFinder;
    momentaJourneyDescription: ElementFinder;
    momentaJourneySaveBtn: ElementFinder;
    momentaJourneySearch: ElementFinder;
    momentaJourneyPreviewBtn: ElementFinder;

    //Create New Journey Popup WebElements
    createNewJourneyOption: ElementFinder;
    createNewJourneyTitle: ElementFinder;
    enterJourneyTitle: ElementFinder;
    enterJourneyDescription: ElementFinder;
    createNewJourneySaveButton: ElementFinder;
    createNewJourneyCancelButton: ElementFinder;

    //Journey WebElements
    newQaJourneyTitle: ElementFinder;
    newQaJourneyDesc: ElementFinder;
    addStageButton: ElementFinder;
    addModuleButton: ElementFinder;
    newStageAdded: ElementFinder;
    newStageUpdatedTitle: ElementFinder;
    newStageUpdatedLongTitle: ElementFinder;
    newStageMoreIcon: ElementFinder;
    newModuleAdded: ElementFinder;
    newModuleUpdatedTitle: ElementFinder;
    newModuleUpdatedLongTitle: ElementFinder;
    newModuleMoreIcon: ElementFinder;
    newActivityAdded: ElementFinder;
    newActivityUpdatedTitle: ElementFinder;
    newActivityUpdatedTitleDragIcon: ElementFinder;
    newActivityUpdatedLongTitle: ElementFinder;
    newActivityMoreIcon: ElementFinder;
    automationActivityoneMoreIcon:ElementFinder;
    AutomationActivityTwoMoreIcon:ElementFinder;
    PetronasLinkLnk:ElementFinder;

    newJourneyCancelButton: ElementFinder;
    newJourneySaveButton: ElementFinder;
    newJourneySuccessToast: ElementFinder;
    newJourneyPreviewButton: ElementFinder;
    newJourneyPreviewPage: ElementFinder;
    newJourneyPublishButton: ElementFinder;
    newJourneyPublishToast: ElementFinder;
    moreIconEditOption: ElementFinder;
    moreIconAddModuleOption: ElementFinder;
    moreIconAddActivityOption: ElementFinder;
    moreIconDeleteOption: ElementFinder;
    moreIconLinkActivityOption: ElementFinder;
    editContentHeader: ElementFinder;
    editContentCancelButton: ElementFinder;

    editContentSaveButton: ElementFinder;

    editContentTitleInput: ElementFinder;
    linkContentPopupTitle: ElementFinder;
    linkContentDropDown: ElementFinder;
    linkContnetDropDownSelection: ElementFinder;
    linkContentLinkButton: ElementFinder;
    linkContentIcon: ElementFinder;
    linkedContentLabel: ElementFinder;


    constructor() {

        //Client WebElements
        this.momentaPetronasTitle = element(By.xpath("//h4[contains(text(),'Petronas')]"));
        this.copyJourneyPlus = element(By.xpath("(//i[@class='author-icon icon-plus master-collection__header--plus'])[2]"));
        this.copyJourneyButton = element(By.xpath("(//button[contains(text(),'Copy')])[1]"));
        this.journeyList = element.all(By.xpath("//div[@class='master-collection__cards ng-star-inserted'][2]//child::a"));
        this.journeyPlusMenuOptions = element.all(By.xpath("//div[@class='mat-menu-content']//button[@tabindex='0']"));
        this.copyJourneyPopupSelect = (element(By.xpath("//div[@class='mat-menu-content']//button[2]")));
        this.qaJourneyName = element(By.xpath("//p[contains(text(),'QA Journey Petronas')]"))

        //Copy Journey WebElements
        this.momentaDialogContainer = element(By.css('.mat-dialog-container ng-tns-c23-11 ng-trigger ng-trigger-dialogContainer ng-star-inserted'));
        this.momentaJourneyTitle = element(By.id('mat-input-2'));
        this.momentaJourneyDescription = element(By.id('mat-input-3'));
        this.momentaJourneySaveBtn = element(By.xpath("//button[contains(text(),'SAVE')]"));
        this.momentaJourneySearch = element(By.xpath("//input[@name='Search journey']"));
        this.momentaJourneyPreviewBtn = element(By.buttonText('Preview'));

        //Create New Journey WebElements
        this.createNewJourneyOption = element(By.xpath("//span[contains(text(),'Create New Journey')]"));
        this.createNewJourneyTitle = element(By.xpath("//h3[@class='journey-list__headertext']"));
        this.enterJourneyTitle = element(By.xpath("//div[@class='mat-form-field-infix']//input[@ng-reflect-model]"));
        this.enterJourneyDescription = element(By.xpath("//textarea[@placeholder='Enter Journey description']"));
        this.createNewJourneySaveButton = element(By.buttonText('SAVE'));
        this.createNewJourneyCancelButton = element(By.buttonText('CANCEL'));


        //Newly Created Client Journey WebElements
        this.newQaJourneyTitle = element(By.xpath("//span[@class='journey-selection__inno']"))
        this.newQaJourneyDesc = element(By.xpath("//mat-card-subtitle[@class='mat-card-subtitle']"))
        this.addStageButton = element(By.xpath("//button[@name='add stage']"))
        this.addModuleButton = element(By.xpath("//button[@name='add module']"))
        this.newStageAdded = element(By.xpath("//p[contains(text(),'New Stage')]"))
        this.newStageMoreIcon = element(By.xpath("//span[@class='mat-button-wrapper']//i[@class='author-icon icon-dots master-collection__icon journey-section__fontcolor']"))
        this.newModuleAdded = element(By.xpath("//p[contains(text(),'New Module')]"))
        this.newModuleMoreIcon = element(By.xpath("(//i[@class='author-icon icon-dots master-collection__icon'])[2]"))
        
        this.newActivityAdded = element(By.xpath("//p[contains(text(),'New Activity')]"))
        this.newActivityUpdatedTitle = element(By.xpath("//p[contains(text(),'New Activity Updated 1')]"))
        this.newActivityUpdatedTitleDragIcon = element(By.xpath("//p[contains(text(),'New Activity Updated 1')]//preceding::i[1]"))

     //   this.newActivityMoreIcon = element(By.xpath("(//div[@class='cdk-drop-list' and 'journey-selection__delete']//button)[1]"))
        this.newActivityMoreIcon = element(By.xpath("(//i[@class='author-icon icon-dots master-collection__icon'])[5]"))

        this.AutomationActivityTwoMoreIcon = element(By.xpath("(//i[@class='author-icon icon-dots master-collection__icon'])[4]"));
        

        this.automationActivityoneMoreIcon = element(By.xpath("(//i[@class='author-icon icon-dots master-collection__icon'])[3]"));

        this.PetronasLinkLnk = element(By.xpath("(//div[@class='mat-tab-label-content'])[4]"));

        this.newJourneyCancelButton = element(By.xpath("//span[contains(text(),'CANCEL')]"))
        this.newJourneySaveButton = element(By.xpath("//span[contains(text(),'SAVE')]"))
        this.newJourneySuccessToast = element(By.xpath("//div[@id='toast-container']//following::div[1][contains(text(),' Journey Saved Successfully ')]"))
        this.newJourneyPreviewButton = element(By.xpath("//span[contains(text(),'PREVIEW')]"))
        this.newJourneyPublishButton = element(By.xpath("//span[contains(text(),'PUBLISH')]"))
        this.newJourneyPreviewPage = element(By.xpath("//h1[@class='plugin-journey__title'][contains(text(),'My Journey')]"))
        this.newJourneyPublishToast = element(By.xpath("//div[@id='toast-container']//following::div[1][contains(text(),' Journey Published Successfully ')]"))
        this.moreIconEditOption = element(By.xpath("//button[@name='edit']"))
        this.moreIconAddModuleOption = element(By.xpath("//button[@name='add-module']"))
        this.moreIconAddActivityOption = element(By.xpath("//button[@name='add-activity']"))
  //    this.moreIconDeleteOption = element(By.xpath("//button[@name='delete']"));
        this.moreIconDeleteOption = element(By.xpath("//button[@aria-label='delete']"));

        this.moreIconLinkActivityOption = element(By.xpath("//button[contains(text(),'Link Activity')]"))

     //   this.editContentHeader = element(By.xpath("//h3[@class='journey-list__headertext']"))
        this.editContentHeader = element(By.xpath("//input[@id='mat-input-1']"))
        
        this.editContentCancelButton = element(By.xpath("//button[@name='journey-save']//span[@class='mat-button-wrapper'][contains(text(),'CANCEL')]"))
        this.editContentSaveButton = element(By.xpath("//button[@name='journey-save' and contains(text(),'Save')]"))
    //    this.editContentTitleInput = element(By.xpath("(//input[@ng-reflect-model])[1]"))

        this.editContentTitleInput = element(By.xpath("//input[@name='title']"))


        this.linkContentPopupTitle = element(By.xpath("//h3[@class='journey-list__headertext']"))
        this.linkContentDropDown = element(By.xpath("//mat-select[@id='mat-select-27']//div[@class='mat-select-value']"))
        this.linkContnetDropDownSelection = element(By.xpath("//mat-option[@id='mat-option-750']//span[@class='mat-option-text'][contains(text(),'Testing')]"))
        this.linkContentLinkButton = element(By.xpath("//button[@class='journey-activity__link-btn activelink']//i[@class='material-icons'][contains(text(),'link')]"))
        this.linkContentIcon = element(By.xpath("//div[@class='journey-edit']//div[1]//div[2]//button[1]//i[1]"))
        this.linkedContentLabel = element(By.xpath("//p[@class='journey-selection--subtitle']"))
        this.newStageUpdatedTitle = element(By.xpath("//h3[@class='journey-selection--font journey-section__fontcolor']"))

        this.newModuleUpdatedTitle = element(By.xpath("//p[.='Module One Updated']"))

        this.newStageUpdatedLongTitle = element(By.xpath("//mat-expansion-panel-header[@id='mat-expansion-panel-header-220']//div[@class='journey-selection'"))
        this.newModuleUpdatedLongTitle = element(By.xpath("//mat-expansion-panel-header[@id='mat-expansion-panel-header-221']//p[@class='journey-selection--font']"))
        this.newActivityUpdatedLongTitle = element(By.xpath("//p[contains(text(),'Activity Security is freedom from, or resilience against, potential harm caused by others. Beneficiaries of security may be of persons and social groups, objects and institutions, ecosystems or any other entity or phenomenon vulnerable to unwanted change.')]"))


    }
}