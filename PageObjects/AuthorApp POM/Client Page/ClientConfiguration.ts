import { ElementFinder, ElementArrayFinder, element, By } from "protractor";

export class ClientConfigurationLocate {
    
    //General
    tabConfiguration: ElementFinder;
    tabLogoFonts: ElementFinder;
    tabColorPalette: ElementFinder;
    tabMessaging:ElementFinder;
    tabPasswordSetup:ElementFinder;
    tabLMS:ElementFinder;
    tabThemes:ElementFinder;
    tabMyInsights:ElementFinder;
    matDialogContainer: ElementFinder;

    //Configuration TAB
    icoClientConfig: ElementFinder;
    icoClientConfigClose: ElementFinder;
    lblSelectIndustry: ElementFinder;
    ddlSelectIndustryArrow: ElementFinder;
    ddlSelectIndustryOption: ElementFinder;
    lblEnterDomainLocation: ElementFinder;
    txtDomainLocation: ElementFinder;
    lblAwsRegion: ElementFinder;
    txtAwsRegionDisabled: ElementFinder;
    btnClientConfSave: ElementFinder;
    btnClientConfCancel: ElementFinder;

    //Logo Fonts TAB
    lblSelectFontFamily: ElementFinder;
    ddlSelectFontFamilyArrow: ElementFinder;
    ddlSelectFontFamilyOption: ElementFinder;
    lblPositiveLogo: ElementFinder;
    lnkPositiveLogoBrowse: ElementFinder;
    lblNegativeLogo: ElementFinder;
    lnkNegativeLogoBrowse: ElementFinder;
    
    //Color Palette TAB
    lblPrimaryColorPalette: ElementFinder;
    cptPrimaryFirstColor: ElementFinder;
    cptPrimaryFirstColorUpdated: ElementFinder;
    cptSecondaryFirstColor: ElementFinder;
    clpSecondaryColorPicker: ElementFinder;
    lblExtendedAccents: ElementFinder;
    cptStatusIndicatorFirstColor: ElementFinder;
    lblColorNeutrals: ElementFinder;
    cptNeutralsFirstColor: ElementFinder;
    clpNeutralsColorPicker: ElementFinder;
    cptExtendedAccentsList: ElementArrayFinder;
    cptNeutralsOnWhiteList: ElementArrayFinder;
    btnDDOtherClientColor:ElementFinder;
    btnDDNeutralColor:ElementFinder;

    //Logout
    tabMoreMenuLeftPanel:ElementFinder;
    btnLogout:ElementFinder;

    constructor() {

        //General
        this.tabConfiguration = element(By.xpath("//div[contains(text(),'Configuration')]"));
        this.tabLogoFonts = element(By.xpath("(//div[contains(text(),'Logo')])[1]"));  ////div[contains(text(),'Logo Fonts')]
        this.tabColorPalette = element(By.xpath("//div[contains(text(),'Color Palette')]"));
        this.tabMessaging=element(By.xpath("//div[contains(text(),'Messaging')]"));
        this.tabPasswordSetup=element(By.xpath("//div[contains(text(),'Password Setup')]"));
        this.tabLMS=element(By.xpath("//div[contains(text(),'LMS')]"));
        this.tabThemes=element(By.xpath("//div[contains(text(),'Themes')]"));
        this.tabMyInsights=element(By.xpath("//div[contains(text(),'My Insights')]"));
        this.matDialogContainer = element(By.id('mat-dialog-5'));

        //Configuration
        this.icoClientConfig = element(By.xpath("//button[contains(text(),' Configure Client ')]"));
        this.icoClientConfigClose = element(By.xpath("//button[@name='Close']"));
        this.ddlSelectIndustryArrow = element(By.xpath("(//div[@class='mat-select-arrow'])[1]"));
        this.ddlSelectIndustryOption = element(By.xpath("//span[contains(text(),'Finance')]"));
        this.lblSelectIndustry = element(By.xpath("//mat-label[contains(text(),'Select Industry')]"));
        this.lblEnterDomainLocation = element(By.xpath("//mat-label[contains(text(),'Enter Domain Location')]"));
        this.txtDomainLocation = element(By.xpath("//input[@name='domain']"));
        this.lblAwsRegion = element(By.xpath("//mat-label[contains(text(),'Enter AWS Region')]"));
        this.txtAwsRegionDisabled = element(By.xpath("(//mat-select)[2]"));
        this.btnClientConfSave = element(By.xpath("//button[contains(text(),'SAVE')]"));
        this.btnClientConfCancel = element(By.xpath("//button[contains(text(),'CANCEL')]"));

        //Logo Fonts
        this.lblSelectFontFamily = element(By.xpath("//mat-label[contains(text(),'Select Font Family')]"));
        this.lblPositiveLogo = element(By.xpath("//span[contains(text(),'Positive Logo')]"));
        this.lnkPositiveLogoBrowse = element(By.xpath("(//div[@class='common-drag-drop default-font-family ani width-100'])[1]"));
        this.lblNegativeLogo = element(By.xpath("//span[contains(text(),'Negative Logo')]"));
        this.lnkNegativeLogoBrowse = element(By.xpath("(//div[@class='common-drag-drop default-font-family ani width-100'])[2]"));
        this.ddlSelectFontFamilyArrow = element(By.xpath("//div[@class='mat-select-arrow']"));
        this.ddlSelectFontFamilyOption = element(By.xpath("//span[contains(text(),' Open Sans ')]"));

        //Color Palette
        this.lblPrimaryColorPalette = element(By.xpath("//mat-panel-title[contains(text(),'Primary Color Palette')]"));
        this.cptPrimaryFirstColor = element(By.xpath("//mat-tab-body/div[1]/div[1]/form[1]/mat-accordion[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]")); //div[@class='client__color-block ng-star-inserted'][1]//child::div[@class='client__color-Palette ng-star-inserted'][1]
        this.cptPrimaryFirstColorUpdated = element(By.xpath("//div[@class='hue-alpha box']"));
        this.cptSecondaryFirstColor = element(By.xpath("(//label[contains(text(),'Secondary Color')]/following::div[@class='client__color-Palette ng-star-inserted'])[1]")); //(//div[@class='d-flex ng-star-inserted'])[2]//child::div[@class='client__color-block ng-star-inserted'][1]
        this.clpSecondaryColorPicker = element(By.xpath("//div[@class='color-picker open']//div[@class='hue-alpha box']"));
        this.lblExtendedAccents = element(By.xpath("//mat-tab-body/div[1]/div[1]/form[1]/mat-accordion[1]/mat-expansion-panel[2]/div[1]/div[1]/div[2]/div[2]/div[1]")); ////mat-panel-title[contains(text(),'Extended Accents Color Palette')]
        this.cptStatusIndicatorFirstColor = element(By.xpath("//div[@class='color-picker open']//div[@class='hue-alpha box']")); //(//div[@class='d-flex ng-star-inserted'])[4]//child::div[@class='client__color-block ng-star-inserted'][1]
        this.lblColorNeutrals = element(By.xpath("//mat-tab-body/div[1]/div[1]/form[1]/mat-accordion[1]/mat-expansion-panel[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]")); ////mat-panel-title[contains(text(),'Neutrals on White')]
        this.cptNeutralsFirstColor = element(By.xpath("//mat-tab-body/div[1]/div[1]/form[1]/mat-accordion[1]/mat-expansion-panel[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]"));  //(//div[@class='d-flex ng-star-inserted'])[5]//child::div[@class='client__color-block ng-star-inserted'][1]
        this.clpNeutralsColorPicker = element(By.xpath("//div[@class='color-picker open']//div[@class='hue-alpha box']"));
        this.cptExtendedAccentsList = element.all(By.xpath("//mat-tab-body/div[1]/div[1]/form[1]/mat-accordion[1]/mat-expansion-panel[2]/div[1]/div[1]/div[2]"));  //((//div[@class='mat-expansion-panel-body']/child::div[@class='client__shades-row ng-star-inserted'])[4])//child::div[@class='client__color-block ng-star-inserted']
        this.cptNeutralsOnWhiteList = element.all(By.xpath("((//div[@class='mat-expansion-panel-body']/child::div[@class='d-flex ng-star-inserted'])[5])//child::div[@class='client__color-block ng-star-inserted']//p[@class='client__Palette-details']"));
        this.btnDDOtherClientColor = element(By.xpath("//mat-panel-title[contains(text(),'Other Client Color')]"));
        this.btnDDNeutralColor = element(By.xpath("//mat-panel-title[contains(text(),'Neutral Color')]"));
    }

}