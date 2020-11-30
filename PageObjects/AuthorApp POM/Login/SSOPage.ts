import { ElementFinder, element, By } from "protractor";

export class SSOLocate{
    oneLoginUserId: ElementFinder;
    oneLoginContinueBtn: ElementFinder;
    oneLoginPwd: ElementFinder;
    oneLoginAdminTab: ElementFinder;
    oneLoginApplicatonsTab: ElementFinder;
    oneLoginClientApp: ElementFinder;
    clientConfigTab: ElementFinder;
    clientSSOLoginURL: ElementFinder;
    clientSSOConsumerURL: ElementFinder;
    clientSSOValidatorURL: ElementFinder;
    saveConfigBtn: ElementFinder;
    oneLoginLogoutBtn:ElementFinder;
    btnLoginWithSSO: ElementFinder;
    launchClientApp: ElementFinder;
    participantAppHomeBtn: ElementFinder;
    oneLoginMenu: ElementFinder;
    authorAppEmail: ElementFinder;
    authorAppNextBtn: ElementFinder;
    oneLoginDesktopMenu: ElementFinder;
    skipOneLoginExtensionBtn: ElementFinder;
    launchAuthortApp: ElementFinder;
    authorAppMasterTab: ElementFinder;
    oneLoginAdminApp: ElementFinder;
    oneLoginMenuExpanded: ElementFinder;


    constructor(){
        this.oneLoginUserId = element(By.id("username"));
        this.oneLoginContinueBtn = element(By.xpath("//button[@type='submit']"));
        this.oneLoginPwd = element(By.id("password"));
        this.oneLoginAdminTab = element(By.xpath("//span[contains(text(),'Administration')]/ancestor::a"));
        this.oneLoginApplicatonsTab = element(By.xpath("//li[contains(@id,'mainnav')]/a[contains(text(),'Applications')]"));
        this.oneLoginClientApp = element(By.xpath("//h4[contains(text(),'Client')]/.."));
        this.oneLoginAdminApp = element(By.xpath("//h4[contains(text(),'BTS')]/.."));
        this.clientConfigTab = element(By.xpath("//span[contains(text(),'Configuration')]/.."));
        this.clientSSOLoginURL = element(By.xpath("//div[contains(@data-param-label,'Login URL')]//input"));
        this.clientSSOConsumerURL = element(By.xpath("(//div[contains(@data-param-label,'(Consumer) URL')]//input)[1]"));
        this.clientSSOValidatorURL = element(By.xpath("//div[contains(@data-param-label,'Validator')]//input"));
        this.saveConfigBtn = element(By.xpath("//div[@class='dropdown']/following-sibling::input[@type='submit']"));
        this.skipOneLoginExtensionBtn = element(By.xpath("//button[contains(text(),'skip')]"));
        this.oneLoginDesktopMenu = element(By.xpath("//div[contains(@class,'desktop-menu')]")); 
        this.btnLoginWithSSO  = element(By.xpath("//button[@id='btnLoginSSO']"));
        this.launchClientApp = element(By.xpath("//div[contains(text(),'Client')]/ancestor::a[contains(@href,'apps')]"));
        this.launchAuthortApp = element(By.xpath("//div[contains(text(),'BTS')]/ancestor::a[contains(@href,'apps')]"));
        this.participantAppHomeBtn = element(By.xpath("//span[contains(text(),'Home')]/ancestor::a[contains(@class,'sidenav')]"));
        //this.oneLoginLogoutBtn = element(By.xpath("//a[contains(text(),'Log Out')]"));
        this.oneLoginLogoutBtn = element(By.xpath("//span[contains(text(),'Log out')]/../.."));
        this.oneLoginMenu = element(By.xpath("//button[contains(@role,'menuitem')]"));
        this.oneLoginMenuExpanded = element(By.xpath("//button[contains(@role,'menuitem')][@aria-expanded = 'true']"));
        this.authorAppEmail = element(By.xpath("//span[contains(text(),'Email')]/ancestor::span/preceding-sibling::input"));
        this.authorAppNextBtn = element(By.xpath("//button[contains(@name,'next')]"));
        this.authorAppMasterTab = element(By.xpath("//div[contains(text(),'Master')]/.."));
    }
}