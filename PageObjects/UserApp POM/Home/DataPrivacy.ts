import { ElementFinder, element } from "protractor";
import { By } from "selenium-webdriver";

export class DataPrivacyPageLocate{

    tabDataPrivacyAgreement:ElementFinder;
    tglDataPrivacy:ElementFinder;
    txtPolicyTxt:ElementFinder;
    txtAcceptBtn:ElementFinder;
    txtDeclineBtn:ElementFinder;
    txtDeclinemsg:ElementFinder;
    txtYesBtn:ElementFinder;
    txtNoBtn:ElementFinder;
    cntPolicy:ElementFinder;
    btnDecline:ElementFinder;
    btnAccept:ElementFinder;
    btnNo:ElementFinder;
    btnYes:ElementFinder;
    cntDeny:ElementFinder;
    btnLogin:ElementFinder;
    moduleDataPrivacy:ElementFinder;

    constructor(){

        this.tabDataPrivacyAgreement=element(By.xpath("//div[contains(text(),'Data Privacy Agreement')]"));
        this.tglDataPrivacy=element(By.xpath("//div[@class='mat-slide-toggle-thumb']"));
        this.txtPolicyTxt=element(By.xpath("(//span[@class='fr-placeholder'])[1]"));
        this.txtAcceptBtn=element(By.xpath("//input[@name='Accept button text']"));
        this.txtDeclineBtn=element(By.xpath("//input[@name='Decline button text']"));
        this.txtDeclinemsg=element(By.xpath("(//span[@class='fr-placeholder'])[2]"));
        this.txtYesBtn=element(By.xpath("//input[@name='Decline modal yes button text']"));
        this.txtNoBtn=element(By.xpath("//input[@name='Decline modal no button text']"));
        this.cntPolicy=element(By.xpath("//p[contains(text(),'I hereby declare that the information given in this application is true and correct to the best of my knowledge and belief. In case any information given in this application proves to be false or incorrect, I shall be responsible for the consequences.')]"));
        this.btnDecline=element(By.xpath("//button[@name='I Decline']"));
        this.btnAccept=element(By.xpath("//button[@name='I Accept']"));
        this.btnNo=element(By.xpath("//button[@name='NO']"));
        this.btnYes=element(By.xpath("//button[@name='YES']"));
        this.cntDeny=element(By.xpath("//p[contains(text(),'I deny the Agreement')]"));
        this.btnLogin=element(By.xpath("//button[@name='Login']"));
        this.moduleDataPrivacy=element(By.xpath("//h2[contains(text(),'DataPrivacy Module1')]"));
    }
}