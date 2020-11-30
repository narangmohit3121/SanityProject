import{$,ElementFinder,ElementArrayFinder, element, By} from "protractor";

export class ResourceListingLocate{
    btnConfigureClient: ElementFinder;
    configPopUpNextTab: ElementFinder;
    tabThemes: ElementFinder;
    btnAddTheme: ElementFinder;
    themeTitle: ElementFinder;
    btnAddThemeInPopUp: ElementFinder;
    deleteTheme: ElementFinder;
    btnSaveChangesConfigTab: ElementFinder;
    btnDeleteConfirmPopUp: ElementFinder;
    tglResourceCMS: ElementFinder;
    selectThemeDD: ElementFinder;
    themesTabJourneyConfig: ElementFinder;
    journeyConfigTab: ElementFinder;
    selectedThemeCheckbox: ElementFinder;
    selectedThemeEnableResources: ElementFinder;
    selectedThemeEnableActions: ElementFinder;
    participantActRelatedResTypes: ElementArrayFinder;
    participantActRelatedActNames: ElementArrayFinder;
    relatedActThemeTags: ElementArrayFinder;
    textInContentActivity: ElementFinder;
    openRelatedContentBtns: ElementFinder;
    relatedCardsOnActivityPage: ElementArrayFinder;
    participantResourcesTab: ElementFinder;
    resourcesTabSelectThemeDD: ElementFinder;
    resourcesTabSelectTheme: ElementFinder;
    overlayElement: ElementFinder;
    automationFolder: ElementFinder;
    automationFolderOnLeftMenu: ElementFinder;
    tglShareable: ElementFinder;
    cancelThemeBtns: ElementArrayFinder;
    isTglResourceCMSChecked: ElementFinder;
    themeDisplayName: ElementFinder;
    confirmDeleteTheme: ElementFinder;
    
    
    constructor(){
        this.btnConfigureClient = element(By.xpath("//button[contains(text(),'Configure')]"));
        this.configPopUpNextTab = element(By.xpath("//mat-dialog-container//div[contains(@class,'mat-tab-label-container')]/following-sibling::div[contains(@class,'header-pagination')]"));
        this.tabThemes = element(By.xpath("//div[contains(text(),'Themes')]/.."));
        this.btnAddTheme = element(By.xpath("//button[@name = 'Add Theme']"));
        this.themeTitle = element(By.xpath("//input[contains(@name, 'Theme title')]"));
        this.themeDisplayName = element(By.css("input[name*='Display name']"));
        this.btnAddThemeInPopUp = element(By.xpath("//div[contains(@class,'footer')]//button[@name = 'Add Theme']"));
        this.deleteTheme = element(By.xpath("//div[contains(text(),'test')]/ancestor::tr//button[@name='Delete']"));
        this.btnDeleteConfirmPopUp = element(By.xpath("//mat-dialog-container//div[contains(@class,'block-submit')]//button[@name='Delete']"));
        this.btnSaveChangesConfigTab = element(By.xpath("//mat-dialog-container//button[@name='save']"));
        this.tglResourceCMS = element(By.xpath("//mat-slide-toggle[contains(@name,'Resource')]/label"));
        this.isTglResourceCMSChecked = element(By.xpath("//mat-slide-toggle[contains(@name,'Resource')]"));
        this.cancelThemeBtns = element.all(By.xpath("//mat-icon[contains(text(),'cancel')]"));
        //this.selectThemeDD = element(By.xpath("//mat-select[@name='theme']"));
        this.selectThemeDD = element(By.xpath("//mat-select[contains(@name,'theme')]//div[@class='mat-select-arrow']"));
        //this.selectThemeDD = element(By.xpath("//span[contains(text(),'test')]/preceding-sibling::mat-pseudo-checkbox"));
        this.journeyConfigTab = element(By.xpath("//div[contains(text(),' Journey Configuration')]"));
        this.themesTabJourneyConfig = element(By.xpath("//div[contains(text(),'Themes')]/.."));
        this.selectedThemeCheckbox = element(By.xpath("//span[contains(text(),'Science')]/ancestor::tr//label[contains(@class,'checkbox')]"));
        this.selectedThemeEnableResources = element(By.xpath("//span[contains(text(),'Science')]/ancestor::tr//mat-slide-toggle[contains(@name,'Resources')]//label"));
        this.selectedThemeEnableActions = element(By.xpath("//span[contains(text(),'Science')]/ancestor::tr//mat-slide-toggle[contains(@name,'Actions')]//label"));
        this.participantActRelatedResTypes = element.all(By.xpath("//div[contains(@class,'resource-cards')]//mat-card//mat-card-title"));
        this.participantActRelatedActNames = element.all(By.xpath("//div[contains(@class,'resource-cards')]//mat-card//mat-card-subtitle"));
        this.relatedActThemeTags = element.all(By.xpath("//div[contains(@class,'resource-cards')]//mat-card//div[contains(@class,'theme-tags')]"));
        this.textInContentActivity = element(By.xpath("//div[contains(@class,'content-wrapper')]//p"));
        this.relatedCardsOnActivityPage = element.all(By.xpath("//div[contains(@class,'resource-cards')]//mat-card"));
        this.openRelatedContentBtns = element(By.xpath("//div[contains(@class,'resource-cards')]//mat-card//button[@name='View Resource']"));
        this.participantResourcesTab = element(By.xpath("//span[contains(text(),'Resources')]//ancestor::a"));
        this.resourcesTabSelectThemeDD = element(By.xpath("//select[@name='Select Theme']"));
        this.resourcesTabSelectTheme = element(By.xpath("//option[contains(text(),'123456')]"));        
        this.overlayElement = element(By.xpath("//div[contains(@class,'cdk-overlay-container')]"));
        this.automationFolderOnLeftMenu = element(By.xpath("//div[contains(text(),' Automation Folder_DONOT')]"));
        this.tglShareable = element(By.xpath("//mat-slide-toggle[contains(@name,'Shareable')]//label"));
        this.confirmDeleteTheme = element(By.xpath("//div[contains(@class,'block-submit')]/button[contains(@name,'Delete')]"));
        
    }
}

