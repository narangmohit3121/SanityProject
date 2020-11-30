import { ElementFinder, element } from "protractor";
import { By } from "protractor";

export class RBACEnhancementPageLocate{

    colBTS:ElementFinder;
    tabCohortUser:ElementFinder;
    jrnBTSTest:ElementFinder;
    chrtBTSAdmins:ElementFinder;
    usrautomation:ElementFinder;
    tabPermissions:ElementFinder;

    constructor(){

        this.colBTS=element(By.xpath("//span[contains(text(),'BTS')]"));
        this.tabCohortUser=element(By.xpath("//div[contains(text(),'Cohorts/Users')]"));
        this.jrnBTSTest=element(By.xpath("//span[contains(text(),'BTS Test')]"));
        this.chrtBTSAdmins=element(By.xpath("//button[contains(text(),' BTSAdmins ')]"));
        this.usrautomation=element(By.xpath("//button[contains(text(),'rbacautomation')]"));
        this.tabPermissions=element(By.xpath("//div[contains(text(),'Permissions')]"));
    }
}