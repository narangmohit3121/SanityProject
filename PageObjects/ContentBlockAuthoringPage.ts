import { ElementFinder, By, element } from "protractor";

export class ContentblockPageAuthoringLocate {

    cntContentBlockAutomation:ElementFinder;
    blkContent:ElementFinder;
    lnkEditContent:ElementFinder;
    lnkAForAddTextWindow:ElementFinder;
    txtJourneyScriptId:ElementFinder;
    txtInputLabel:ElementFinder;
    txtInputPlaceHolder:ElementFinder;
    txtCharecterLimit:ElementFinder
    btnSave:ElementFinder;
    btnSaveTextEntryEditer:ElementFinder;
    lblInputLable:ElementFinder;
    lblTextfilefPlacefolder:ElementFinder;
    txtForInputPlaceHolder:ElementFinder;
    icoForCopyEditContentBar:ElementFinder;

    
    
   // colPetronas: ElementFinder;
   // cntPageBlockAutomation: ElementFinder;

    constructor() {

        this.cntContentBlockAutomation = element(By.xpath("//div[6]/a[5]//i[@class='author-icon icon-content master-collection__card--journey ng-star-inserted']"));
       this.blkContent = element(By.xpath("//mat-list-item[3]/div[@class='mat-list-item-content']"));
      // this.lnkEditContent = element(By.xpath("//mat-expansion-panel-header[@class='mat-expansion-panel-header ng-tns-c26-54 ng-trigger ng-trigger-expansionHeight mat-expanded ng-star-inserted']//button[@name='edit']"));
      this.lnkEditContent = element(By.xpath("//button[@name='edit']"));
      this.lnkAForAddTextWindow = element(By.xpath("//div[@class='fr-toolbar fr-desktop fr-top']/button[@class='fr-command fr-btn fr-btn-font_awesome']/i[@class='fa fa-font']"));
      this.txtJourneyScriptId = element(By.xpath("//input[@class='modal-details-input input-block-id']"));
      this.txtInputLabel = element(By.xpath("//input[@class='modal-details-input row-input-container-section-input-label']"));
      this.txtInputPlaceHolder = element(By.xpath("//input[@class='modal-details-input input-block-placeholder']"));
      this.txtCharecterLimit= element(By.xpath("//input[@class='modal-details-input characterlimit']"));
      this.btnSave= element(By.xpath("//button[@class='btn btn-fill create-field']"));
      this.btnSaveTextEntryEditer= element(By.xpath("//button[@name='done']"));
      this.lblInputLable=element(By.xpath("//label[text()='User Id']"));
      this.lblTextfilefPlacefolder =element(By.xpath("//div[@class='fr-element fr-view fr-disabled']/p[1]/textarea[@class='form-control']"));
      this.txtForInputPlaceHolder = element(By.xpath("//textarea[@placeholder='Please enter your user id here']"));
      this.icoForCopyEditContentBar=element(By.xpath("//mat-expansion-panel-header[@class='mat-expansion-panel-header ng-tns-c27-150 ng-trigger ng-trigger-expansionHeight mat-expanded ng-star-inserted']//span[@class='momenta-icon author-icon icon-copy']"));
      
      
    }

}