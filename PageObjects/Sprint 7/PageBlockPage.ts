import { ElementFinder, By, element } from "protractor";

export class PageblockPageLocate {

    txtClientSearch: ElementFinder;
    colPetronas: ElementFinder;
    cntPageBlockAutomation: ElementFinder;
    blkPage: ElementFinder;
    lnkEditPage: ElementFinder;
    lblPageDividerLabel: ElementFinder;
    txtPageTitle: ElementFinder;
    btnSavePageTitle: ElementFinder;
    txtPageTitleTxtfieldAfterSaveButton: ElementFinder;
    tglNumberOfPiontToggleButton: ElementFinder;
    txtNumberOfpoints: ElementFinder;
    txtPoint: ElementFinder;
    txtNumberOfTimeDuration: ElementFinder;
    tglNumberOfTimesDurationToggleButton: ElementFinder;
    txtExpectedTimeDuraton: ElementFinder;
    txtTime: ElementFinder;
    icnPluseToIcreasePoints: ElementFinder;
    icnMinusToDicreasePoints: ElementFinder;
    btnCancelPageTitle: ElementFinder;
    btnPreview: ElementFinder;



    constructor() {

        this.txtClientSearch = element(By.xpath("//input[@placeholder='Filter Collections']"));
        this.colPetronas = element(By.xpath("//span[text()='petronas']"));
        this.cntPageBlockAutomation = element(By.xpath("//p[text()='Page Block Automation']"));
        this.blkPage = element(By.xpath("(//div[@class='mat-list-item-content']//child::span[@class='digitalICO'])[1]"));
        this.lnkEditPage = element(By.xpath("(//button[@class='btn btn-action edit']//child::i[@class='momenta-icon author-icon icon-edit bts-icon icon-edit-outline'])[1]"));
        this.lblPageDividerLabel = element(By.xpath("//h2[@class='modal-common__title generic-border']"));
        this.txtPageTitle = element(By.id("pageTitle"));
        this.btnSavePageTitle = element(By.name("done"));
        this.txtPageTitleTxtfieldAfterSaveButton = element(By.xpath("//div[contains(@class,'page')]//input[contains(@id,'mat-input') and @placeholder='Title']"));
        this.tglNumberOfPiontToggleButton = element(By.xpath("//mat-slide-toggle[@id='pointsToggle']"));
        this.txtNumberOfpoints = element(By.xpath("//div[@class='modal-common__count-row']/input"));
        this.txtPoint = element(By.xpath("//input[@ng-reflect-placeholder='Points']"));
        this.tglNumberOfTimesDurationToggleButton = element(By.xpath("//mat-slide-toggle[@id='durationToggle']"));
        this.txtExpectedTimeDuraton = element(By.xpath("(//div[@class='modal-common__count-row']/input)[2]"));
        this.txtTime = element(By.xpath("//input[@ng-reflect-placeholder='Time']"));
        //   this.btnSavePageTitle=element(By.xpath("(//span[text()='+'])[1]"));
        this.icnPluseToIcreasePoints = element(By.xpath("(//span[text()='+'])[1]"));
        
        this.icnMinusToDicreasePoints = element(By.xpath("//div[@class='points-duration-wrapper']//div[@class='form-field-input counter-field']/div[1]//button[.='-']"));
      // this.icnMinusToDicreasePoints = element(By.xpath("//label[contains(text(),'Points for Completion')]/../..//button[@data-type='minus']/span"));
        this.btnCancelPageTitle = element(By.name("cancel-edit"));
        this.btnPreview = element(By.xpath("//button[@name='preview']"));







    }

}