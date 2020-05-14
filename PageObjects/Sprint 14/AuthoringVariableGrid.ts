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
        this.blkVariableGrid=element(By.xpath("(//div[contains(text(),'Variable Grid')])[3]"));
        this.btnlnkEditVariableGrid=element(By.xpath("//button[contains(text(),'Edit Variable Grid')]"));
        this.ttlVariableGrid=element(By.xpath("//h2[contains(text(),'Variable Grid')]"));
        this.txtJourneyScriptID=element(By.xpath("//input[@placeholder='Type Journey Script ID']"));
        this.txtTypeDescription=element(By.xpath("//input[@placeholder='Type Description']"));
        this.txtTypeQuesTitle=element(By.xpath("(//input[@placeholder='Type Question Title'])[1]"));
        this.btnAddOpt=element(By.xpath("//button[contains(text(),'Add Option')]"));
        this.txtTypeOpt=element(By.xpath("(//input[@placeholder='Type Option'])[1]"));
        this.txtTypeOpt2=element(By.xpath("(//input[@placeholder='Type Option'])[2]"));
        this.btnAddQues=element(By.xpath("//button[contains(text(),'Add Question')]"));
        this.txtQuesTitle=element(By.xpath("//input[@placeholder='Question Title']"));
        this.txtQuesName=element(By.xpath("//input[@placeholder='Question Name']"));
        this.btnSaveVariableGrid=element(By.xpath("//button[contains(text(),'Save')]"));

        this.fldSprint14=element(By.xpath("//p[contains(text(),'Sprint 14')]"));
    }
}