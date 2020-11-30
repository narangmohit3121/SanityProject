import { ElementFinder, element, By, browser } from "protractor";

export class LinkActivityPageLocate {

    fldAutomationLinkActivity: ElementFinder;
    fldQACollectionLnkAct: ElementFinder;
    jrnLinkActivity: ElementFinder;
    btnSelectTemp_SanityLnkAct: ElementFinder;
    fldSprint16LnkAct: ElementFinder;
    fldLink_Activity_AMLnkAct: ElementFinder;
    btnSelectCntColLnkAct: ElementFinder;
    btnSelectSrcCntColLnkAct: ElementFinder;
    btnSelectMstColLnkAct: ElementFinder;
    btnSelectTempSantLnkAct: ElementFinder;
    tabMastColLnkAct: ElementFinder;
    ClientCollectionLbl:ElementFinder;
    btnSelectClientCollectionContent:ElementFinder;

    jrnMaster_Collection_Jrn: ElementFinder;
    jrnClient_Collection_Jrn: ElementFinder;
    jrnClient_Collection_Search_Jrn: ElementFinder;
    MasterCollectionSearchTxt:ElementFinder;
    MasterCollectionSearchICON:ElementFinder;
    srcLinkActivity: ElementFinder;
    txtJourneyName:ElementFinder;
    iconcloseLinkActivity:ElementFinder;
    tabPetronasLnkAct:ElementFinder;
    fldDoNotDeleteLnkAct:ElementFinder;

    constructor() {

        this.fldAutomationLinkActivity = element(By.xpath("//p[contains(text(),'Automation_Link_Activity_AM')]"));
        this.fldQACollectionLnkAct = element(By.xpath("//span[text()='QA Collection ']"));
      
        this.tabPetronasLnkAct=element(By.xpath("//div[contains(text(),'petronas')]"));
        this.fldDoNotDeleteLnkAct=element(By.xpath("//span[contains(text(),' Automation Folder_DONOT DELETE ')]"));
        this.jrnLinkActivity = element(By.xpath("//p[contains(text(),'Jrn_LinkActivity')]"));
        this.btnSelectTemp_SanityLnkAct = element(By.xpath("(//span[contains(text(),'Temp_Sanity_Cnt ')]//following::button[contains(text(),'Select ')])[1]"));
        this.fldSprint16LnkAct = element(By.xpath("//span[contains(text(),' Sprint 16 ')]"));
        this.fldLink_Activity_AMLnkAct = element(By.xpath("//span[contains(text(),' Automation_Link_Activity_AM ')]"));
        this.ClientCollectionLbl = element(By.xpath("//div[contains(text(),'Client Collection')]"));

        this.btnSelectCntColLnkAct = element(By.xpath("(//span[contains(text(),'Client_Collection ')]//following::button[contains(text(),'Select ')])[1]"));
        this.btnSelectSrcCntColLnkAct = element(By.xpath("(//span[contains(text(),'Client_Collection_Search ')]//following::button[contains(text(),'Select ')])[1]"));
        this.btnSelectMstColLnkAct = element(By.xpath("(//h2[contains(text(),'Master_Collection_Cnt ')]//following::button[contains(text(),'Select ')])[1]"));
        this.tabMastColLnkAct = element(By.xpath("//div[contains(text(),'Master Collection')]"));
        
 //   this.btnSelectTempSantLnkAct = element(By.xpath("(//span[contains(text(),'Temp_Sanity_Cnt ')]//following::button[contains(text(),'Select ')])[1]"));
        this.btnSelectTempSantLnkAct = element(By.xpath("(//span[contains(text(),'Temp_Sanity_Cnt')]//following::button[contains(text(),'Select')])[1]"));
        this.btnSelectClientCollectionContent = element(By.xpath("(//span[contains(text(),'Client_Collection')]//following::button[contains(text(),'Select')])"));
        this.jrnMaster_Collection_Jrn = element(By.xpath("//p[contains(text(),'Master_Collection')]"));
        this.jrnClient_Collection_Jrn = element(By.xpath("//p[contains(text(),'Client_Collection')]"));
        this.jrnClient_Collection_Search_Jrn = element(By.xpath("//p[contains(text(),'Client_Collection_Search')]"));
        this.MasterCollectionSearchTxt = element(By.xpath("//input[@name='search collection']"));
        this.MasterCollectionSearchICON = element(By.xpath("//i[@class='author-icon icon-search']"));
        

        this.srcLinkActivity = element(By.xpath("//input[@placeholder='Search Collection Here']"));
        this.txtJourneyName= element(By.xpath("//h2[@class='journey-selection__description']"));
        this.iconcloseLinkActivity=element(By.xpath("//div[@class='client-header__close fr-modal-close']"));
    }
}