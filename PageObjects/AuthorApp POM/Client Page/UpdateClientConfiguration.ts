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
        this.icnSettingPetronas=element(By.xpath("//button[contains(text(),' Configure Client ')]"));
        this.tabPasswordSetup=element(By.xpath("//div[contains(text(),'Password Setup')]"));
        this.txtMinLength=element(By.xpath("//input[@placeholder='Min Length']"));
        this.txtMaxLength=element(By.xpath("//input[@placeholder='Max Length']"));
        this.txtMinLowerCase=element(By.xpath("//input[@placeholder='Min LowerCase']"));
        this.txtMaxLowerCase=element(By.xpath("//input[@placeholder='Max LowerCase']"));
        this.txtMinUpperCase=element(By.xpath("//input[@placeholder='Min UpperCase']"));
        this.txtMaxUpperCase=element(By.xpath("//input[@placeholder='Max UpperCase']"));
        this.txtMinNumberic=element(By.xpath("//input[@placeholder='Min Numeric']"));
        this.txtMaxNumberic=element(By.xpath("//input[@placeholder='Max Numeric']"));
        this.txtAllowedSpecialChars=element(By.xpath("//input[@placeholder='Special Characters Allowed (e.g. #$%^)']"));
        this.txtCheckPreviousPassword=element(By.xpath("//input[@placeholder='No Of Passwords To Keep In History']"));
        this.txtForcePasswordChange=element(By.xpath("//input[@placeholder='Password Expiry (Days)']"));
        this.btnSaveConfiguration=element(By.xpath("//button[@name='save']"));
        this.jrnUpdateClientConf=element(By.xpath("//span[contains(text(),'Automation Standard Journey')]"));
        this.chUpdateClientConf=element(By.xpath("//button[contains(text(),' Cohort Test Title ')]"));
        //this.ttlEntryPage=element(By.xpath("//span[contains(text(),'Select an industry:')]"));
        this.ttlEntryPage=element(By.xpath("//p[@class='plugin-entrypage__disc-label']"));
        
    }
}