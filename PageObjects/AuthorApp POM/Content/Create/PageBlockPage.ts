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
  contentTab: ElementFinder;
  pageTitleInPreview: ElementFinder;



    constructor() {

        this.txtClientSearch = element(By.xpath("//input[@placeholder='Filter Collections']"));
        this.colPetronas = element(By.xpath("//span[text()='petronas']"));
        this.cntPageBlockAutomation = element(By.xpath("//p[contains(text(),'Automation Page Block')]"));
        this.contentTab = element(By.xpath("//div[contains(text(),'Content') and contains(@class,'label-content')]"));
        this.blkPage = element(By.xpath("//mat-list//div[contains(text(),'Page')]"));
        this.lnkEditPage = element(By.xpath("//button[contains(text(),'Edit Page')]"));
        this.lblPageDividerLabel = element(By.xpath("//div[contains(@class,'page-edit')]//h2"));
        this.txtPageTitle = element(By.id("pageTitle"));
        this.btnSavePageTitle = element(By.xpath("//div[contains(@class,'submit')]//button[not(contains(@class,'create-field')) and contains(text(),'Ok')]"));
        this.txtPageTitleTxtfieldAfterSaveButton = element(By.xpath("//div[contains(@class,'page')]//input[contains(@id,'mat-input')]"));
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
        this.btnCancelPageTitle = element(By.css("mat-dialog-container div:nth-child(3) button[name='cancel']"));
        this.btnPreview = element(By.xpath("//button[@name='preview']"));
        this.pageTitleInPreview = element(By.css("div[class*='co__header'] h3"));
    }

}