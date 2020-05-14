import { ElementFinder, element, By } from "protractor";

export class UpdateClientConfigurationPageLocate{

    icnSettingPetronas:ElementFinder;
    tabPasswordSetup:ElementFinder;
    txtMinLength:ElementFinder;
    txtMaxLength:ElementFinder;
    txtMinLowerCase:ElementFinder;
    txtMaxLowerCase:ElementFinder;
    txtMinUpperCase:ElementFinder;
    txtMaxUpperCase:ElementFinder;
    txtMinNumberic:ElementFinder;
    txtMaxNumberic:ElementFinder;
    txtAllowedSpecialChars:ElementFinder;
    txtCheckPreviousPassword:ElementFinder;
    txtForcePasswordChange:ElementFinder;
    btnSaveConfiguration:ElementFinder;
    jrnUpdateClientConf:ElementFinder;
    chUpdateClientConf:ElementFinder;
    ttlEntryPage:ElementFinder;

    constructor(){
        this.icnSettingPetronas=element(By.xpath("//i[@class='author-icon icon-setting master-collection__setting']"));
        this.tabPasswordSetup=element(By.xpath("//div[contains(text(),'Password Setup')]"));
        this.txtMinLength=element(By.xpath("//input[@placeholder='Min Length']"));
        this.txtMaxLength=element(By.xpath("//input[@placeholder='Max Length']"));
        this.txtMinLowerCase=element(By.xpath("//input[@placeholder='Min LowerCase']"));
        this.txtMaxLowerCase=element(By.xpath("//input[@placeholder='Max LowerCase']"));
        this.txtMinUpperCase=element(By.xpath("//input[@placeholder='Min UpperCase']"));
        this.txtMaxUpperCase=element(By.xpath("//input[@placeholder='Max UpperCase']"));
        this.txtMinNumberic=element(By.xpath("//input[@placeholder='Min Numeric']"));
        this.txtMaxNumberic=element(By.xpath("//input[@placeholder='Max Numeric']"));
        this.txtAllowedSpecialChars=element(By.xpath("//input[@placeholder='Allowed Special Characters']"));
        this.txtCheckPreviousPassword=element(By.xpath("//input[@placeholder='Check Previous Password']"));
        this.txtForcePasswordChange=element(By.xpath("//input[@placeholder='Force Password Change']"));
        this.btnSaveConfiguration=element(By.xpath("//button[@name='save']"));
        this.jrnUpdateClientConf=element(By.xpath("//span[contains(text(),'Update Client Configuration')]"));
        this.chUpdateClientConf=element(By.xpath("//td[contains(text(),' Update Client Conf Cohort ')]"));
        this.ttlEntryPage=element(By.xpath("//h1[contains(text(),'Welcome to Sales Skills: Insights to Outcomes!')]"));
    }
}