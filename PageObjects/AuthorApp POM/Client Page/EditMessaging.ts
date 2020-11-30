import { ElementFinder, element, By } from "protractor";

export class EditMessagingPageLocate{

    icnSettingPetronas:ElementFinder;
    tabEditMessaging:ElementFinder;
    txtCancel:ElementFinder;
    txtContinue:ElementFinder;
    txtCreateNewPwd:ElementFinder;
    txtEmailRecoveryLnk:ElementFinder;
    txtLogin:ElementFinder;
    txtSubmit:ElementFinder;
    txtsubmitbtnUpateUserpwd:ElementFinder;
    txtEmailRecoveryLnkFailure:ElementFinder;

    txtEnterNewPassword:ElementFinder;
    txtEmailRecoveryLnkSuccess:ElementFinder;
    txtForcePasswordChange:ElementFinder;
    btnSaveConfiguration:ElementFinder;
    jrnUpdateClientConf:ElementFinder;
    chUpdateClientConf:ElementFinder;
    ttlEntryPage:ElementFinder;

    constructor(){
        this.icnSettingPetronas=element(By.xpath("//button[contains(text(),' Configure Client ')]"));
        this.tabEditMessaging=element(By.xpath("//div[contains(text(),'Messaging')]"));
        this.txtCancel=element(By.xpath("//textarea[@ng-reflect-name='message-input-0-0']"));
        this.txtContinue=element(By.xpath("//textarea[@ng-reflect-name='message-input-0-1']"));
        this.txtCreateNewPwd=element(By.xpath("//textarea[@ng-reflect-name='message-input-0-2']"));
        this.txtEmailRecoveryLnk=element(By.xpath("//textarea[@ng-reflect-name='message-input-0-3']"));
        this.txtLogin=element(By.xpath("//textarea[@ng-reflect-name='message-input-0-4']"));
        this.txtSubmit=element(By.xpath("//textarea[@ng-reflect-name='message-input-0-7']"));
        this.txtsubmitbtnUpateUserpwd=element(By.xpath("//textarea[@ng-reflect-name='message-input-0-8']"));

        this.txtEmailRecoveryLnkFailure=element(By.xpath("//textarea[@ng-reflect-name='message-input-7-7']"));
        this.txtEmailRecoveryLnkSuccess=element(By.xpath("//textarea[@ng-reflect-name='message-input-7-8']"));
        this.txtEnterNewPassword=element(By.xpath("//textarea[@ng-reflect-name='message-input-7-9']"));
        this.txtForcePasswordChange=element(By.xpath("//input[@placeholder='Password Expiry (Days)']"));
        this.btnSaveConfiguration=element(By.xpath("//button[@name='save']"));
        this.jrnUpdateClientConf=element(By.xpath("//span[contains(text(),'Automation Standard Journey')]"));
        this.chUpdateClientConf=element(By.xpath("//button[contains(text(),' Cohort Test Title ')]"));
        //this.ttlEntryPage=element(By.xpath("//span[contains(text(),'Select an industry:')]"));
        this.ttlEntryPage=element(By.xpath("//p[@class='plugin-entrypage__disc-label']"));
        
    }
}