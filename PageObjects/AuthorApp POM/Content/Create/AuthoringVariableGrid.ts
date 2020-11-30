import { ElementFinder, element, By } from "protractor";

export class AuthoringVariableGridPageLocate{

    cntVariableGrid:ElementFinder;
    blkVariableGrid:ElementFinder;
    btnlnkEditVariableGrid:ElementFinder;
    ttlVariableGrid:ElementFinder;
    txtJourneyScriptID:ElementFinder;
    txtTypeDescription:ElementFinder;
    txtTypeQuesTitle:ElementFinder;
    btnAddOpt:ElementFinder;
    txtTypeOpt:ElementFinder;
    txtTypeOpt2:ElementFinder;
    btnAddQues:ElementFinder;
    txtQuesTitle:ElementFinder;
    txtQuesName:ElementFinder;
    btnSaveVariableGrid:ElementFinder;

    fldSprint14:ElementFinder;


    constructor(){
        this.cntVariableGrid=element(By.xpath("//p[contains(text(),'Variable Grid Test')]"));
        this.blkVariableGrid=element(By.xpath("//button[contains(text(),'Edit Radio Button')]"));
        this.btnlnkEditVariableGrid=element(By.xpath("//button[contains(text(),'Edit Radio Button')]"));
        this.ttlVariableGrid=element(By.xpath("//h4[contains(text(),'Variable Grid')]"));
        this.txtJourneyScriptID=element(By.xpath("//input[contains(@placeholder,'Journey Script ID') and not(contains(@class,'modal'))]"));
        this.txtTypeDescription=element(By.xpath("//mat-dialog-container//div[contains(@class,'fr-element')]"));
        this.txtTypeQuesTitle=element(By.xpath("(//input[@placeholder='Type Question Title'])[1]"));
        this.btnAddOpt=element(By.xpath("//button[contains(text(),'Add Option')]"));
        this.txtTypeOpt=element(By.xpath("(//input[@placeholder='Type Option'])[1]"));
        this.txtTypeOpt2=element(By.xpath("(//input[@placeholder='Type Option'])[2]"));
        this.btnAddQues=element(By.xpath("//button[contains(text(),'Add Question')]"));
        this.txtQuesTitle=element(By.xpath("//input[contains(@placeholder,'Question Title')]"));
        this.txtQuesName=element(By.xpath("//button[contains(@name,'Add Option')]/preceding::input[contains(@name,'Question Title')]"));
        this.btnSaveVariableGrid=element(By.xpath("//div[contains(@class,'submit')]//button[not(contains(@class,'create-field')) and contains(text(),'Ok')]"));
        this.fldSprint14=element(By.xpath("//p[contains(text(),'Sprint 14')]"));
    }
}