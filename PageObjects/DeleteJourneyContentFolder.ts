import { ElementFinder, element, By } from "protractor";

export class DeleteJourneyContentFldPageLocate{

fldSprint15:ElementFinder;
fldDelete_Jrn_Cnt_Fld:ElementFinder;
btnFolderPlus:ElementFinder;
btnContentPlus:ElementFinder;
mnuCreateNewFld:ElementFinder;
mnuNewAct:ElementFinder;
txtEnterFldName:ElementFinder;
btnSaveAddFld:ElementFinder;
txtEnterJrnTitle:ElementFinder;
txtEnterJrnDesc:ElementFinder;
txtEnterActTitle:ElementFinder;
txtEnterActDesc:ElementFinder;
btnCreateAct:ElementFinder;

    constructor(){
        this.fldSprint15=element(By.xpath("//p[contains(text(),'Sprint 15')]"));
        this.btnFolderPlus=element(By.xpath("(//i[@class='author-icon icon-plus master-collection__header--plus'])[1]"));
        this.btnContentPlus=element(By.xpath("(//i[@class='author-icon icon-plus master-collection__header--plus'])[3]"));
        this.fldDelete_Jrn_Cnt_Fld=element(By.xpath("//p[contains(text(),'Automation_Delete_Jrn_Cnt_Fld_AM')]"));
        this.mnuCreateNewFld=element(By.xpath("//span[contains(text(),'Create New Folder')]"));
        this.mnuNewAct=element(By.xpath("//span[contains(text(),'New Activity')]"));
        this.txtEnterFldName=element(By.xpath("//input[@placeholder='Enter Folder Name']"));
        this.btnSaveAddFld=element(By.xpath("//button[contains(text(),'SAVE')]"));
        this.txtEnterJrnTitle=element(By.xpath("//input[@placeholder='Enter Journey title']"));
        this.txtEnterJrnDesc=element(By.xpath("//textarea[@placeholder='Enter Journey description']"));
        this.txtEnterActTitle=element(By.xpath("//input[@placeholder='Enter activity title']"));
        this.txtEnterActDesc=element(By.xpath("//textarea[@placeholder='Enter activity description']"));
        this.btnCreateAct=element(By.xpath("//button[contains(text(),'CREATE ACTIVITY')]"));
    }
}