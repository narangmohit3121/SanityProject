import { ElementFinder, By, element } from "protractor";

export class AuthoringRegistrationFlowPageLocate{

    cntRegistrationFlow:ElementFinder;
    ttlContentType:ElementFinder;
    drpContentType:ElementFinder;
    drpContentTypeRegistrationOption:ElementFinder;
    btnSaveDraft:ElementFinder;
    btnPublish:ElementFinder;
    btnExitEditor:ElementFinder;

    jrnConditionalActivity:ElementFinder;
    lnkRegistration:ElementFinder;
    ttlLinkRegistration:ElementFinder;
    icnRegistration:ElementFinder;
    drpArrowRegistration:ElementFinder;
    drpRegistrationOption:ElementFinder;
    icnRegistration2:ElementFinder;

    constructor(){

        this.cntRegistrationFlow=element(By.xpath("//p[contains(text(),'Registration_Flow')]"));
        this.ttlContentType=element(By.xpath("//div[contains(text(),'Content Type')]"));
        //this.drpContentType=element(By.xpath("//select[@class='content-select ng-pristine ng-valid ng-touched']"));
        this.drpContentType=element(By.xpath("//select[contains(@class,'content-select')]"));
        this.drpContentTypeRegistrationOption=element(By.xpath("//option[contains(text(),'Registration')]"));
        this.btnSaveDraft=element(By.xpath("//span[contains(text(),'SAVE DRAFT')]"));
        this.btnPublish=element(By.xpath("//span[contains(text(),'PUBLISH')]"));
        this.btnExitEditor=element(By.xpath("//span[contains(text(),'EXIT EDITOR')]"));

        this.jrnConditionalActivity=element(By.xpath("//p[contains(text(),'Conditional Activity Testing')]"));
        this.lnkRegistration=element(By.xpath("//div[contains(text(),' Registration ')]"));
        this.ttlLinkRegistration=element(By.xpath("//span[contains(text(),'Journey: Link Registration')]"));
        this.icnRegistration=element(By.xpath("(//i[contains(text(),'link')])[2]"));
        //this.drpArrowRegistration=element(By.xpath("(//div[@class='mat-select-arrow'])[1]"));
        this.drpArrowRegistration=element(By.xpath("(//div[contains(@class,'mat-select-arrow')])[1]"));
        this.drpRegistrationOption=element(By.xpath("//span[contains(text(),'Registration_Flow (petronas) ')]"));
        this.icnRegistration2=element(By.xpath("(//i[contains(text(),'link')])[3]"));
    }
}