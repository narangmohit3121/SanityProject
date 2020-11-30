import { ElementFinder, element, By } from "protractor";

export class DeleteJourneyContentFldPageLocate{

fldSprint15:ElementFinder;
fldDelete_Jrn_Cnt_Fld:ElementFinder;
btnFolderPlus:ElementFinder;
btnJourneyPlus:ElementFinder;
btnContentPlus:ElementFinder;
mnuCreateNewFld:ElementFinder;
mnuCreateNewJrn:ElementFinder;
mnuNewAct:ElementFinder;
txtEnterFldName:ElementFinder;
btnSaveAddFld:ElementFinder;
btnSaveAddJrn:ElementFinder;
txtEnterJrnTitle:ElementFinder;
txtEnterJrnDesc:ElementFinder;
txtEnterActTitle:ElementFinder;
txtEnterActDesc:ElementFinder;
btnCreateAct:ElementFinder;
tabPetronasLnkAct:ElementFinder;
fldDoNotDeleteLnkAct:ElementFinder;
fldSprint15LnkAct:ElementFinder;
fldDlt_Jrn_Cnt_FldLnkAct:ElementFinder;
fldCnt_1LnkAct:ElementFinder;
btnSelectLnkAct:ElementFinder;
threeDotsJrn1:ElementFinder;
threeDotsJrn2:ElementFinder;
threeDotsFld:ElementFinder;
threeDotsCnt1:ElementFinder;
threeDotsCnt2:ElementFinder;
jrnJrn_1:ElementFinder;
cntCnt_1:ElementFinder;
icnPlusAddModule:ElementFinder;
txtEnterMdTitle:ElementFinder;
txtEnterMdSname:ElementFinder;
btnSaveModule:ElementFinder;
threeDotsNewModule:ElementFinder;
btnAddActivity:ElementFinder;
drpActivityType:ElementFinder;
optContentObj:ElementFinder;
txtEnterActName:ElementFinder;
btnSaveNewAct:ElementFinder;
moduleHeader:ElementFinder;
threeDotsNewActivity:ElementFinder;
btnLinkActivity:ElementFinder;
btnDeleteFJC:ElementFinder;
btnYesAlrFldCnt:ElementFinder;
btnDeleteJrnCnt:ElementFinder;
btnDeleteJrn:ElementFinder;
btnSaveJrn:ElementFinder;
btnPublishJrn:ElementFinder;
btnCancelJrn:ElementFinder;
btnLeaveAlrt:ElementFinder;
ddModuleScroll:ElementFinder;
btnDeleteCn2:ElementFinder;
btnDeleteYescn2:ElementFinder;
threeDotnewCnt2:ElementFinder;

    constructor(){
        this.fldSprint15=element(By.xpath("//p[contains(text(),'Sprint 15')]"));
        this.btnFolderPlus=element(By.xpath("(//i[@class='author-icon icon-plus master-collection__header--plus'])[1]"));
        this.btnJourneyPlus=element(By.xpath("(//i[@class='author-icon icon-plus master-collection__header--plus'])[2]"));
        this.btnContentPlus=element(By.xpath("//button[contains(@name,'add-content')]"));
        this.fldDelete_Jrn_Cnt_Fld=element(By.xpath("//p[contains(text(),'Automation_Delete_Jrn_Cnt_Fld_AM')]"));
        this.mnuCreateNewFld=element(By.xpath("//span[contains(text(),'Create New Folder')]"));
        this.mnuCreateNewJrn=element(By.xpath("//span[contains(text(),'Create New Journey')]"));
        this.mnuNewAct=element(By.xpath("//span[contains(text(),'New Activity')]/.."));
        this.txtEnterFldName=element(By.xpath("//input[@placeholder='Enter Folder Name']"));
        this.btnSaveAddFld=element(By.xpath("//button[contains(text(),'ADD')]"));
        this.btnSaveAddJrn=element(By.xpath("//button[contains(text(),'SAVE')]"));
        this.txtEnterJrnTitle=element(By.xpath("//input[@placeholder='Enter Journey Title']"));
        this.txtEnterJrnDesc=element(By.xpath("//textarea[@placeholder='Enter Journey Description']"));
       // this.txtEnterActTitle=element(By.xpath("//input[@placeholder='Enter activity title']"));
        this.txtEnterActTitle=element(By.xpath("//input[@name='Activity Title']"));
      //  this.txtEnterActDesc=element(By.xpath("//textarea[@placeholder='Enter activity description']"));
        this.txtEnterActDesc=element(By.xpath("//textarea[@name='Activity Description']"));
      //  this.btnCreateAct=element(By.xpath("//button[contains(text(),'CREATE ACTIVITY')]"));
        this.btnCreateAct=element(By.xpath("//button[@name='create activity']"));
        this.tabPetronasLnkAct=element(By.xpath("//div[contains(text(),'petronas')]"));
        this.fldDoNotDeleteLnkAct=element(By.xpath("//span[contains(text(),' Automation Folder_DONOT DELETE ')]"));
        this.fldSprint15LnkAct=element(By.xpath("//span[contains(text(),' Sprint 15 ')]"));
        this.fldDlt_Jrn_Cnt_FldLnkAct=element(By.xpath("//span[contains(text(),' Automation_Delete_Jrn_Cnt_Fld_AM ')]"));
        this.fldCnt_1LnkAct=element(By.xpath("//span[contains(text(),'Cnt_1 ')]"));
        this.btnSelectLnkAct=element(By.xpath("(//span[contains(text(),'Cnt_1 ')]//following::button[contains(text(),'Select ')])[1]"));
        this.threeDotsJrn1=element(By.xpath("(//h2[contains(text(),'Journeys')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));
        this.threeDotsJrn2=element(By.xpath("(//h2[contains(text(),'Journeys')]//following::i[@class='author-icon icon-dots master-collection__icon'])[2]"));
        this.threeDotsFld=element(By.xpath("(//h2[contains(text(),'Folders')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));
        this.threeDotsCnt1=element(By.xpath("(//h2[contains(text(),'Content')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));
        this.threeDotsCnt2=element(By.xpath("(//h2[contains(text(),'Content')]//following::i[@class='author-icon icon-dots master-collection__icon'])[2]"));
        this.jrnJrn_1=element(By.xpath("//p[contains(text(),'Jrn_1')]"));
        this.cntCnt_1=element(By.xpath("//p[contains(text(),' Cnt_1 ')]"));
        this.icnPlusAddModule=element(By.xpath("//i[@class='author-icon icon-plus journey__add']"));
        this.txtEnterMdTitle=element(By.xpath("//input[@placeholder='Enter title here']"));
        this.txtEnterMdSname=element(By.xpath("//input[@placeholder='Enter short name here']"));
        this.btnSaveModule=element(By.xpath("//button[contains(text(),'Save')]"));
        this.threeDotsNewModule=element(By.xpath("//p[contains(text(),'Module_1')]//following::i[@class='author-icon icon-dots master-collection__icon']"));
        this.btnAddActivity=element(By.xpath("//button[@name='add-activity']"));
        this.drpActivityType=element(By.xpath("//select[@name='Activity Type']"));
        this.optContentObj=element(By.xpath("//option[contains(text(),'Content Object')]"));
        this.txtEnterActName=element(By.xpath("//input[@placeholder='Enter title here']"));
        this.btnSaveNewAct=element(By.xpath("//button[contains(text(),'Save')]"));
        this.moduleHeader=element(By.xpath("//mat-panel-title[@class='mat-expansion-panel-header-title']"));
        //this.threeDotsNewActivity=element(By.xpath("//p[contains(text(),'Activity_1')]//following::i[@class='author-icon icon-dots master-collection__icon']"));
        this.threeDotsNewActivity=element(By.xpath("(//button[@aria-label='menu'])[4]"));
        this.btnLinkActivity=element(By.xpath("//button[contains(text(),' Link Activity')]"))
        this.btnDeleteFJC=element(By.xpath("//button[@name='delete']"));
        this.btnYesAlrFldCnt=element(By.xpath("//button[contains(text(),'Delete')]"));
        this.btnDeleteJrnCnt=element(By.xpath("//button[contains(text(),'Delete')]"));
        this.btnDeleteJrn=element(By.xpath("//button[text()='Delete']"));
        this.btnSaveJrn=element(By.xpath("//button[contains(text(),'SAVE')]"));
        this.btnPublishJrn=element(By.xpath("//button[contains(text(),'PUBLISH')]"));
        this.btnCancelJrn=element(By.xpath("//button[contains(text(),'EXIT')]"));
        this.btnLeaveAlrt=element(By.xpath("//button[@name='Leave']"));
        this.ddModuleScroll=element(By.xpath("//i[text()='arrow_drop_down']"));
        //this.ddModuleScroll=element(By.xpath("//i[text()='arrow_drop_up']"));
        this.btnDeleteCn2=element(By.xpath("//button[@aria-label='delete']"));
        this.btnDeleteYescn2=element(By.xpath("//button[text()='Delete']"));
        this.threeDotnewCnt2=element(By.xpath("//div[@class='user-common__more ng-star-inserted']//button[@name='menu']"));
    }
}