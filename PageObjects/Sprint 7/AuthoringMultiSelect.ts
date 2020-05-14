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

        this.btnSaveDraft = element(By.xpath("//span[contains(text(),'SAVE DRAFT')]"));
        this.ttlMultipleSelectTab = element(By.xpath("(//div[@class='mat-tab-label-content'])[4]"));
        this.txtCmsContentTitle = element(By.xpath("//input[@ng-reflect-model='Multi Select']"));
        this.cntMultiSelect=element(By.xpath("//p[@class='master-collection__box-text'][contains(text(),'Multi Select')]"));
        this.lnkEditSelection = element(By.xpath("(//button[contains(text(),'Edit multi-select')])[1]"));
        this.lnkDuplicateEditSelection=element(By.xpath("(//button[contains(text(),'Edit multi-select')])[2]"));
        this.btnCopyIcon=element(By.xpath("(//button[@name='copy'])[2]"));
        this.btnDeleteIcon=element(By.xpath("(//button[@name='delete'])[3]"));
        this.btnAlertYes=element(By.xpath("(//button[@name='yes'])"));
        this.ttlSingleSelectTab=element(By.xpath("(//div[@class='mat-tab-label-content'])[3]"));

        this.ttlSelectionTitle = element(By.xpath("//div[@class='modal-tabs__header']"))
        this.icoSelectionCross = element(By.xpath("//span[@class='fr-modal-close']"));
        this.rdoShortButton = element(By.xpath("(//h2[@class='modal-common__radio-title'][contains(text(),'Short')])[2]"));
        this.rdoLongButton = element(By.xpath("(//h2[@class='modal-common__radio-title'][contains(text(),'Long')])[2]"));
        this.txtJourneyScriptID = element(By.xpath("(*//input[@placeholder='Journey Script ID'])[2]"));
        this.txtTypeSelectionTitle = element(By.xpath("(*//input[@placeholder='Type Selection Title'])[2]"));
        this.txtItemTitle1 = element(By.xpath("(//input[@placeholder='Item 1 Title'])[2]"));
        this.txtItemTitle2 = element(By.xpath("//input[@placeholder='Item 2 Title']"));
        this.blkSelection = element(By.xpath("(//div[@class='mat-list-item-content']//child::span[@class='digitalICO'])[13]"));
        this.txtItemDescription = element(By.xpath("(//textarea[@placeholder='Item 1 Description'])[2]"));
        this.btnSelectionAddItem = element(By.xpath("//button[@name='cancel']"));
        this.btnSelectionSave = element(By.xpath("//button[@name='done']"));
        this.btnSelectionCancel = element(By.xpath("//button[@name='cancel-edit']"));
        this.txtItemTitleBlock = element.all(By.xpath("//div[@class='modal-common__content ng-star-inserted']//div[@class='modal-common__subcontent ng-star-inserted']"));
    }
}