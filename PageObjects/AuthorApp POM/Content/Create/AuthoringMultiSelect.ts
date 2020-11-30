import { element, ElementFinder, ElementArrayFinder, browser } from "protractor";
import { By } from "protractor";

export class AuthoringMultiSelectLocate{

    ttlSelectionTitle: ElementFinder;
    lnkEditSelection: ElementFinder;
    lnkDuplicateEditSelection:ElementFinder;
    btnCopyIcon:ElementFinder;
    btnDeleteIcon:ElementFinder;
    btnAlertYes:ElementFinder;

    icoSelectionCross: ElementFinder;
    rdoShortButton: ElementFinder;
    rdoLongButton: ElementFinder;
    txtJourneyScriptID: ElementFinder;
    txtTypeSelectionTitle: ElementFinder;
    txtItemTitle1: ElementFinder;
    txtItemTitle2: ElementFinder;
    txtItemDescription: ElementFinder;
    btnSelectionAddItem: ElementFinder;
    btnSelectionSave: ElementFinder;
    btnSelectionCancel: ElementFinder;
    icoCollapseExpand: ElementFinder;
    blkSelection: ElementFinder;
    cntMultiSelect: ElementFinder;
    txtCmsContentTitle: ElementFinder;
    ttlSingleSelectTab: ElementFinder;
    ttlMultipleSelectTab: ElementFinder;
    btnSaveDraft: ElementFinder;
    txtItemTitleBlock: ElementArrayFinder;

    constructor(){

        this.btnSaveDraft = element(By.xpath("//button[contains(text(),'SAVE DRAFT')]"));
        this.ttlMultipleSelectTab = element(By.xpath("(//mat-dialog-container//div[@class='mat-tab-label-content'])[2]"));
        this.txtCmsContentTitle = element(By.xpath("//mat-toolbar//*[contains(@name,'Activity Title')]"));
        this.cntMultiSelect=element(By.xpath("//p[text() =' Multi Select ']/../../.."));
        this.lnkEditSelection = element(By.xpath("(//button[contains(text(),'Edit Multiple')])[1]"));
        this.lnkDuplicateEditSelection=element(By.xpath("(//button[contains(text(),'Edit Multiple')])[2]"));
        this.btnCopyIcon=element(By.xpath("(//button[contains(text(),'Multiple Select')]/ancestor::div[contains(@class,'controls')]//button[@name='copy'])[1]"));
        this.btnDeleteIcon=element(By.xpath("(//button[contains(text(),'Multiple Select')])[last()]/ancestor::div[contains(@class,'controls')]//button[@name='delete']"));
        this.btnAlertYes=element(By.xpath("(//button[@name='yes'])"));
        this.ttlSingleSelectTab=element(By.xpath("(//mat-dialog-container//div[@class='mat-tab-label-content'])[1]"));
        this.ttlSelectionTitle = element(By.xpath("//div[@class='modal-tabs__header']"));
        this.icoSelectionCross = element(By.xpath("//span[@class='fr-modal-close']"));
        this.rdoShortButton = element(By.xpath("(//mat-radio-group[contains(@name,'Multiselect Type')]//span[@class='modal-common__radio-title'])[1]"));
        this.rdoLongButton = element(By.xpath("(//mat-radio-group[contains(@name,'Multiselect Type')]//span[@class='modal-common__radio-title'])[2]"));
        this.txtJourneyScriptID = element(By.xpath("//button[contains(@name,'increment')]/preceding::input[contains(@name,'Journey Script ID')]"));
        this.txtTypeSelectionTitle = element(By.xpath("//input[contains(@name,'selection title')]"));
        this.txtItemTitle1 = element(By.xpath("(//input[contains(@name,'Item Title')])[1]"));
        this.txtItemTitle2 = element(By.xpath("(//input[contains(@name,'Item Title')])[2]"));
        this.blkSelection = element(By.xpath(" //button[contains(text(),'Multiple Select')]"));
        this.txtItemDescription = element(By.xpath("(//textarea[contains(@name,'Description')])[1]"));
        //this.btnSelectionAddItem = element(By.xpath("//button[@name='cancel']"));
        this.btnSelectionSave = element(By.xpath("//div[contains(@class,'submit')]//button[not(contains(@class,'create-field')) and contains(text(),'Ok')]"));
        this.btnSelectionCancel = element(By.xpath("//button[@name='cancel-edit']"));
        this.txtItemTitleBlock = element.all(By.xpath("//div[@class='modal-common__content ng-star-inserted']//div[@class='modal-common__subcontent ng-star-inserted']"));
    }
}