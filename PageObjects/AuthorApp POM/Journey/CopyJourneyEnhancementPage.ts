import { ElementFinder, element, By } from "protractor";
import { TouchSequence } from "selenium-webdriver";

export class CopyFeatureEnhancementPageLocate{

    fldSprint18:ElementFinder;
    fldCopyFeatureEnhancement:ElementFinder;
    srcCopyJourney:ElementFinder;
    btnsrchCollection:ElementFinder;
    symcopiedfrommasterJrn:ElementFinder;
    srcLinkActivity:ElementFinder;
    threedotsEditActivity:ElementFinder;
    btnCustomize:ElementFinder;
    srcCustomizeCopyContent:ElementFinder;
    txtEnterJrnDesc:ElementFinder;
    btnSaveCopyCnt:ElementFinder;
    btnCancelJrnAuth:ElementFinder;
    fldCopyFeature:ElementFinder;
    cntCnt1974:ElementFinder;
    symcopiedfrommasterCnt:ElementFinder;
    btnCopyHereCopyCnt:ElementFinder;
    jrnJRNConfig:ElementFinder;
    btnCopyCopyJrn:ElementFinder;
    btnAddStage:ElementFinder;
    threedotsNewStage:ElementFinder;
    btnAddModule:ElementFinder;
    btnSelectCnt1974:ElementFinder;
    icnSearch:ElementFinder;
    btnSaveCopyJrn:ElementFinder;
    txtStageTittle:ElementFinder;
    //Newly added locator
    btnAddNewModule:ElementFinder;
    txtModuleTittle:ElementFinder;
    btnSaveModule:ElementFinder;
    btnThreeDotOfModule:ElementFinder;
    btnAddNewActivity:ElementFinder;
    ddSelectActivityType:ElementFinder;
    ddselectContentObject:ElementFinder;
    txtActivityTittle:ElementFinder;
    btnSaveActivity:ElementFinder;
    btnThreeDotOfActivity:ElementFinder;
    btnLinkActivity:ElementFinder;
    ddModuleScroll:ElementFinder;
    txtSearchCollection:ElementFinder;
    icnSearchFolder:ElementFinder;
    icnThreedotActivity:ElementFinder;
    btnDelete:ElementFinder;
    btnPopupDelete:ElementFinder;
    btnDeleteModule:ElementFinder;

    constructor(){
        this.fldSprint18=element(By.xpath("//p[contains(text(),'Sprint 18')]"));
        this.fldCopyFeatureEnhancement=element(By.xpath("//p[contains(text(),'CopyFeatureEnhancement')]"));
        this.srcCopyJourney=element(By.xpath("//input[@placeholder='Search Collections']"));
        this.btnsrchCollection = element(By.xpath("//i[@class='author-icon icon-search']"));
        this.symcopiedfrommasterJrn=element(By.xpath("//p[contains(text(),'JRN Config')]//following::p[contains(text(),' [ Copied from master ] ')]"));
        this.srcLinkActivity=element(By.xpath("//input[@placeholder='Search Collection Here']"));
        this.threedotsEditActivity=element(By.xpath("(//button[@name='menu'])[4]"));
        this.btnCustomize=element(By.xpath("//button[contains(text(),'Customize')]"));
        this.srcCustomizeCopyContent=element(By.xpath("//input[@placeholder='Search Collections']"));
        this.txtEnterJrnDesc=element(By.xpath("//textarea[@placeholder='Enter Journey description']"));
        this.btnSaveCopyCnt=element(By.xpath("(//button[contains(text(),'SAVE')])[2]"));
        this.btnCancelJrnAuth=element(By.xpath("//button[contains(text(),'CANCEL ')]"));
        this.fldCopyFeature=element(By.xpath("//p[contains(text(),'FLD Copy Feature')]"));
        this.cntCnt1974=element(By.xpath("//p[contains(text(),' Cnt 1974 ')]"));
        //this.symcopiedfrommasterCnt=element(By.xpath("//p[contains(text(),'Cnt 1974')]//following::p[contains(text(),' [ Copied from master ] ')]"));
        this.symcopiedfrommasterCnt=element(By.xpath("//p[contains(text(),' [ Copied from master ] ')]"));
        this.btnCopyHereCopyCnt=element(By.xpath("//span[contains(text(),'FLD Copy Feature ')]/following::div[@class='modal-common-btn-row ng-star-inserted']//button[@aria-label='journey copy']"));
        this.jrnJRNConfig=element(By.xpath("//p[contains(text(),'JRN Config')]"));
        //this.btnCopyCopyJrn=element(By.xpath("//button[contains(text(),' Copy')]"));
        this.btnCopyCopyJrn=element(By.xpath("//button[contains(text(),'Select')]"));  //(//div//h2[contains(text(),'JRN Config')]//following::button[@name='journey-copy'])[1]
        this.btnAddStage=element(By.xpath("//button[@name='add stage']"));
        this.txtStageTittle=element(By.xpath("//input[@placeholder='Enter title here']"));
        //this.threedotsNewStage=element(By.xpath("(//h3[contains(text(),'New Stage')]//following::i[@class='author-icon icon-dots master-collection__icon journey-section__fontcolor'])[1]"));
        this.threedotsNewStage=element(By.xpath("//div[@class='journey-selection__delete journey-panel__font-color ng-star-inserted']//span[@class='mat-button-wrapper']"));
        this.btnAddModule=element(By.xpath("//button[@name='add-module']"));
        this.btnSelectCnt1974=element(By.xpath("//span[contains(text(),'CNT 1974 ')]//following::button[contains(text(),'Select ')]"));
        this.icnSearch=element(By.xpath("(//i[@class='author-icon icon-search'])[1]"));
        this.btnSaveCopyJrn=element(By.xpath("//button[contains(text(),'SAVE')]"));
        //Newly Added
        this.btnAddNewModule=element(By.xpath("//button[@name='add module']"));
        this.txtModuleTittle=element(By.xpath("//input[@ng-reflect-placeholder='Enter title here']"));
        this.btnSaveModule=element(By.xpath("//button[text()='Save']"));
        this.btnThreeDotOfModule=element(By.xpath("//p[contains(text(),'Module tittle')]/following::div[@class='journey-selection__delete journey-module__spacer']//i[@class='author-icon icon-dots master-collection__icon']"));
        this.btnAddNewActivity=element(By.xpath("//button[@aria-label='add-activity']"));
        this.ddSelectActivityType=element(By.xpath("//select[@aria-label='Activity Type']"));
        this.ddselectContentObject=element(By.xpath("//option[contains(text(),'Content Object')]"));
        this.txtActivityTittle=element(By.xpath("//input[@ng-reflect-placeholder='Enter title here']"));
        this.btnSaveActivity=element(By.xpath("//button[text()='Save']"));
        //this.ddModuleScroll=element(By.xpath("//i[text()='arrow_drop_down']"));
        this.txtSearchCollection=element(By.xpath("//input[@aria-label='Search Collection']"));
        this.icnSearchFolder = element(By.xpath("//i[@class='author-icon icon-search']"));
        this.icnThreedotActivity = element(By.xpath("//p[contains(text(),' CNT 1974 ')]/ancestor::mat-card//button[@name='menu']"));
        this.btnDelete = element(By.xpath("//span[contains(text(),'Delete')]"));
        this.btnPopupDelete = element(By.xpath("//button[contains(text(),'Delete')]"));
        this.btnDeleteModule = element(By.xpath("//button[@aria-label='delete']"));
    }
}