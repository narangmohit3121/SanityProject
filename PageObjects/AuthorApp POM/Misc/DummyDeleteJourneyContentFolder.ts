import { ElementFinder, element, By } from "protractor";

export class DeleteJourneyContentFldPageLocate{

fldSprint15:ElementFinder;
fldDelete_Jrn_Cnt_Fld:ElementFinder;
btnFolderPlus:ElementFinder;
btnContentPlus:ElementFinder;


    constructor(){
        this.fldSprint15=element(By.xpath("//p[contains(text(),'Sprint 15')]"));
        this.btnFolderPlus=element(By.xpath("(//i[@class='author-icon icon-plus master-collection__header--plus'])[1]"));
        this.btnContentPlus=element(By.xpath("(//i[@class='author-icon icon-plus master-collection__header--plus'])[3]"));
        this.fldDelete_Jrn_Cnt_Fld=element(By.xpath("//p[contains(text(),'Automation_Delete_Jrn_Cnt_Fld_AM')]"));
    }
}