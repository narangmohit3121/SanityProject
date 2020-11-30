import { element, ElementFinder, ElementArrayFinder } from "protractor";
import { By } from "protractor";

export class AuthoringSingleSelectLocate {

    ttlSelectionTitle: ElementFinder;
    lnkEditSelection: ElementFinder;
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
    cntSingleSelect: ElementFinder;
    txtCmsContentTitle: ElementFinder;
    ttlSingleSelectTab: ElementFinder;
    ttlMultipleSelectTab: ElementFinder;
    btnSaveDraft: ElementFinder;
    txtItemTitleBlock: ElementArrayFinder;

    lnkDuplicateEditSelection:ElementFinder;
    btnCopyIcon:ElementFinder;
    btnDeleteIcon:ElementFinder;
    btnAlertYes:ElementFinder;
    contentTab: ElementFinder;
    optionContainers: ElementArrayFinder;


    constructor() {

        this.btnSaveDraft = element(By.xpath("//button[contains(text(),'SAVE DRAFT')]"))
        this.ttlSingleSelectTab = element(By.xpath("(//mat-dialog-container//div[@class='mat-tab-label-content'])[1]"))
        this.ttlMultipleSelectTab = element(By.xpath("(//mat-dialog-container//div[@class='mat-tab-label-content'])[2]"))
        this.txtCmsContentTitle = element(By.xpath("//mat-toolbar//*[contains(@name,'Activity Title')]"))
        this.cntSingleSelect = element(By.xpath("//p[contains(text(),'Automation Single Select')]/../../.."));
        this.contentTab = element(By.xpath("//div[contains(text(),'Content') and contains(@class,'label-content')]"));
        this.blkSelection = element(By.xpath("//div[contains(text(),'Selection')]"))
        this.ttlSelectionTitle = element(By.xpath("//div[@class='modal-tabs__header']"))
        this.lnkEditSelection = element(By.xpath("//button[contains(text(),'Edit Single Select')]"))
        this.icoSelectionCross = element(By.xpath("//span[@class='fr-modal-close']"))
        this.rdoShortButton = element(By.xpath("(//mat-radio-group[contains(@name,'Selection Type')]//span[@class='modal-common__radio-title'])[1]"))
        this.rdoLongButton = element(By.xpath("(//mat-radio-group[contains(@name,'Selection Type')]//span[@class='modal-common__radio-title'])[2]"))
        this.txtJourneyScriptID = element(By.xpath("//input[contains(@name,'Title')]/preceding::input[contains(@name,'Journey Script ID')]"))
        this.txtTypeSelectionTitle = element(By.xpath("//input[contains(@name,'selection title')]"))
        this.txtItemTitle1 = element(By.xpath("(//input[contains(@name,'Item Title')])[1]"))
        this.txtItemTitle2 = element(By.xpath("(//input[contains(@name,'Item Title')])[2]"))
        this.txtItemDescription = element(By.xpath("(//textarea[contains(@name,'Item Description')])[1]"))
        this.btnSelectionAddItem = element(By.xpath("//button[@name='Add Item']"))
        this.btnSelectionSave = element(By.xpath("//div[contains(@class,'submit')]//button[not(contains(@class,'create-field')) and contains(text(),'Ok')]"));
        this.btnSelectionCancel = element(By.xpath("//button[@name='cancel']"))
        this.txtItemTitleBlock = element.all(By.xpath("//div[contains(@class,'modal-common__subcontent')]"));

        this.lnkDuplicateEditSelection=element(By.xpath("(//button[contains(text(),'Edit Single Select')])[2]"));
        this.btnCopyIcon=element(By.xpath("(//button[contains(text(),'Single Select')]/ancestor::div[contains(@class,'controls')]//button[@name='copy'])[1]"));
        this.btnDeleteIcon=element(By.xpath("(//button[contains(text(),'Single Select')])[last()]/ancestor::div[contains(@class,'controls')]//button[@name='delete']"));
        this.btnAlertYes=element(By.xpath("(//button[@name='yes'])"));
        this.optionContainers = element.all(By.css("div[class*='common__subcontent']"));
     
    }
}