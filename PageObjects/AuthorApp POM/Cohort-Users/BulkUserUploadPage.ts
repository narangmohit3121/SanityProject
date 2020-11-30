import { ElementFinder, element } from "protractor";
import { By } from "selenium-webdriver";

var userEmail1 = "bulkuserupload" + Math.floor(Math.random()*100000) + "@nestle.com";

export class BulkUserPageLocate{

    userEmail1:string;
    jrnBulkUpload:ElementFinder;
    fldSprint21:ElementFinder;
    btnImport:ElementFinder;
    txtBrowserFile:ElementFinder;
    chkboxRandomize:ElementFinder;
    btnUpload:ElementFinder;
    msgImportSucess:ElementFinder;
    msgCohortadded:ElementFinder;
    msgUseradded:ElementFinder;
    btnContinueImportSuccess:ElementFinder;
    chrtBulkUpload:ElementFinder;
    tabTeams:ElementFinder;
    teamTitle:ElementFinder;


    constructor(){
        this.userEmail1 = "bulkuserupload" + Math.floor(Math.random()*100000) + "@nestle.com";
        this.jrnBulkUpload=element(By.xpath("//span[contains(text(),'Bulk Upload Auto Jrn')]"));
        this.fldSprint21=element(By.xpath("//p[contains(text(),'Sprint 21')]"));
        this.btnImport=element(By.xpath("//button[@name='Import']"));
        this.txtBrowserFile=element(By.xpath("//input[@name='Browse for file on your computer']"));
        this.chkboxRandomize=element(By.xpath("//div[@class='mat-checkbox-inner-container']"));
        this.btnUpload=element(By.xpath("//button[@name='Upload']"));
        this.msgImportSucess=element(By.xpath("//div[contains(text(),' Great, all looks good! Continue on. ')]"));
        this.msgCohortadded=element(By.xpath("//span[contains(text(),'1 cohort added.')]"));
        this.msgUseradded=element(By.xpath("//span[contains(text(),'1 user added.')]"));
        this.btnContinueImportSuccess=element(By.xpath("//button[@name='Continue']"));
        this.chrtBulkUpload=element(By.xpath("//button[contains(text(),' Bulk Upload Auto Chrt ')]"));
        this.tabTeams=element(By.xpath("//div[contains(text(),'Teams')]"));
        this.teamTitle=element(By.xpath("//span[contains(text(),'TestCohortTeam1')]"));
    }
}