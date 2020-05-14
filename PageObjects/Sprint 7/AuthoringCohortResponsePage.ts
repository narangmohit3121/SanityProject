import { element, ElementFinder, ElementArrayFinder } from "protractor";
import { By } from "protractor";

export class AuthoringCohortResponsePage {

    cohortResponseContent: ElementFinder;
    btnEditCohortResponse: ElementFinder;
    txtCohortResBlockId: ElementFinder;
    txtCohortResBlockTitle: ElementFinder;
    ddArrowSelectionContentIds: ElementFinder;
    txtCohortNextResponseLabel: ElementFinder;
    btnCohortResAddItem:ElementFinder;
    btnCohortResDeleteItem:ElementFinder;
    tabAllowCommenting:ElementFinder;
    tabConfiguration:ElementFinder;
    btnCohortResSave:ElementFinder;
    btnCohortResCancel:ElementFinder;
    ddOptionSSJourneyScriptId:ElementFinder;
    ddOptionMSJourneyScriptId: ElementFinder;
    txtCommentButtonTxt:ElementFinder;
    btnParticipantCommentCR:ElementFinder;
    participantCommentBtnTxt:ElementFinder;
    tabAllowCommentingPreview: ElementFinder;
    tabConfigurationPreview: ElementFinder;
    txtCRIdPreview:ElementFinder;
    txtCRBlockTitlePreview: ElementFinder;
    cohortResLinkedIdPreview: ElementFinder;
    tglEnableComments:ElementFinder;
    btnRevisitModuleSprint7:ElementFinder;
    btnRevisitActivityCohortRes:ElementFinder;
    participantNextResponseBtnName:ElementFinder;
    btnParticipantNextResponse: ElementFinder;
    cohortResponseText:ElementFinder;
    //jrnyScrptIdDDArrow: ElementFinder;
    txtJrnyScrptId:ElementFinder;
    jrnyScrptIdDDArrowPreview: ElementFinder;
    btnCancelEditCohortRes:ElementFinder;    
    btnCohortResSaveDraft:ElementFinder;
    btnExitEditor: ElementFinder;
    btnPublish: ElementFinder;

    constructor() {
        this.cohortResponseContent = element(By.xpath("//p[contains(text(),'CohortResponse')]/../.."));
        this.btnEditCohortResponse = element(By.xpath("//button[contains(text(),' Edit Cohort Response')]"));
        this.txtCohortResBlockId = element(By.xpath("//div[@class = 'modal-content']//input[@id='journeyId']"));
        this.txtCohortResBlockTitle = element(By.xpath("//div[@class = 'modal-content']//input[@id='blockTitle']"));
        this.txtCohortNextResponseLabel = element(By.xpath("//div[@class = 'modal-content']//input[@id='nextResponse']"));
        this.ddArrowSelectionContentIds = element(By.xpath("//div[@class = 'modal-content']//div[@class='mat-select-arrow-wrapper']"));
        //this.btnCohortResAddItem = element(By.xpath("//div[@class = 'modal-content']//button[@name='add item']"));
        this.btnCohortResDeleteItem = element(By.xpath("//button[@name='delete' and contains(@class,'btn-common-delete')]"));
        this.btnCohortResAddItem = element(By.xpath("//button[@name='add item']"));
        //this.btnCohortResAddItem = element(By.xpath("//mat-label[contains(text(),'Show Excerise Label')]/../following-sibling::button"));
        this.tabAllowCommenting = element(By.xpath("//div[@class = 'modal-content']//div[contains(text(),'Allow Commenting')]/.."));
        this.tabConfiguration = element(By.xpath("//div[@class = 'modal-content']//div[contains(text(),'Configuration')]/.."));
        this.btnCohortResSave = element(By.xpath("//div[@class = 'modal-content']//button[@name='done']"));
        this.btnCohortResCancel = element(By.xpath("//div[@class = 'modal-content']//button[@name='cancel-edit']"));
        this.txtJrnyScrptId = element(By.xpath("//div[@class = 'modal-content']//input[contains(@id,'mat-input') and contains(@class,'mat-autocomplete')]"))
        //this.jrnyScrptIdDDArrow = element(By.xpath("//div[@class = 'modal-content']//div[contains(@class,'mat-select-arrow-wrapper')]"));
        this.ddOptionSSJourneyScriptId = element(By.xpath("//span[contains(text(),'SS_CR_001')]/parent::mat-option[contains(@id,'mat-option')]"));
        this.ddOptionMSJourneyScriptId = element(By.xpath("//span[contains(text(),'MS_CR_001')]/parent::mat-option[contains(@id,'mat-option')]"));
        this.txtCommentButtonTxt = element(By.xpath("//span[contains(text(),'Comment button text')]/preceding::input[@id = 'commentText']"));
        this.btnParticipantCommentCR = element(By.xpath("//div[@class='comments-block-content']//button[contains(@class,'mat-button-base')]"));
        this.participantCommentBtnTxt = element(By.xpath("//div[@class='comments-block-content']//button[contains(@class,'mat-button-base')]/span"));
        this.tabAllowCommentingPreview = element(By.xpath("//mat-expansion-panel[contains(@class,'cohort-response')]//div[contains(text(),'Allow Commenting')]/.."));        
        this.tabConfigurationPreview = element(By.xpath("//mat-expansion-panel[contains(@class,'cohort-response')]//div[contains(text(),'Configuration')]/.."));
        this.txtCRIdPreview = element(By.xpath("//mat-expansion-panel[contains(@class,'cohort-response')]//input[@id='journeyId']"));
        this.txtCRBlockTitlePreview = element(By.xpath("//mat-expansion-panel[contains(@class,'cohort-response')]//input[@id='blockTitle']"));
        //this.cohortResLinkedIdPreview= element(By.xpath("//mat-expansion-panel[contains(@class,'cohort-response')]//mat-select[contains(@id,'mat-select')]"));
        this.cohortResLinkedIdPreview= element(By.xpath("//mat-expansion-panel[contains(@class,'cohort-response')]//input[contains(@id,'mat-input') and contains(@class,'mat-autocomplete')]"));
        this.tglEnableComments = element(By.xpath("//input[@id = 'commentsToggle-input']"));
        this.btnRevisitModuleSprint7 = element(By.xpath("//*[contains(text(),'Automation_Mohit')]//ancestor::div[contains(@class,'_content')]//button[contains(@aria-label,'Sprint 7')]"));
        this.btnRevisitActivityCohortRes = element(By.xpath("//*[contains(text(),' CohortResponse_01')]//ancestor::div[contains(@class,'module__block')]//button[contains(@name,'Revisit')]"));
        this.btnParticipantNextResponse = element(By.xpath("//button[contains(@class,'res-btn')]"));
        this.participantNextResponseBtnName = element(By.xpath("//button[contains(@class,'res-btn')]/span"));
        //this.btnParticipantNextResponse = element(By.xpath("//button[contains(@class,'res-btn')]/div[@ng-reflect-disabled]"));
        this.cohortResponseText = element(By.xpath("//div[contains(@class,'cohort-response-block')]//div[contains(@class,'answer')]/span[2]"));
        this.btnCancelEditCohortRes = element(By.xpath("//button[@name='cancel-edit']"));
        this.jrnyScrptIdDDArrowPreview = element(By.xpath("//div[@class='mat-select-arrow']"));
        this.btnCohortResSaveDraft = element(By.xpath("//span[contains(text(),'SAVE DRAFT')]/.."));
        this.btnExitEditor = element(By.xpath("//span[contains(text(),'EXIT EDITOR')]/.."));
        this.btnPublish = element(By.xpath("//span[contains(text(),'PUBLISH ')]/.."));
    }


}