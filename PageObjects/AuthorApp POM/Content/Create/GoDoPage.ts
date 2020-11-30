import { ElementFinder, ElementArrayFinder, By, element } from "protractor";
import { timeStamp } from "console";

export class GoDoLocators {
    goDoToastMessage: ElementFinder;
    btnEditGoDo: ElementFinder;
    contentGoDo: ElementFinder;
    p_btnCreateAction: ElementFinder;
    btnCreateAction: ElementFinder;
    selectTheme: ElementFinder;
    ddOptionNewTheme: ElementFinder;
    actionTitle: ElementFinder;
    actionDescription: ElementFinder;
    actionDueDate: ElementFinder;
    saveAction: ElementFinder;
    actionStatusDD: ElementFinder;
    statusOptions: ElementArrayFinder;
    saveActionDetails: ElementFinder;
    instructionsTab: ElementFinder;
    instructionsObjectText: ElementFinder;
    resultsTab: ElementFinder;
    resultsObjectText: ElementFinder;
    actionTitleOnPage: ElementFinder;
    themeNameOnPage: ElementFinder;
    firstOptionInThemeDD: ElementFinder;
    goDoActivityTitle: ElementFinder;
    goDoActivityDescription: ElementFinder;
    goDoActivityInstructions: ElementFinder;
    goDoPrefilledDueDate: ElementFinder;
    btnCommitGoDo: ElementFinder;

    constructor() {
        this.goDoToastMessage = element(By.css("div[class*='toast-message']"));
        this.btnEditGoDo = element(By.xpath("//button[contains(text(),'Edit Go-Do')]"));
        this.contentGoDo = element(By.xpath("//p[contains(text(),'Automation_GoDo')]/../../.."));
        //Participant Actions Tab
        this.btnCreateAction = element(By.css("button[name*='Create Action']"));
        this.selectTheme = element(By.css("mat-dialog-container select[name*='theme']"));
        this.firstOptionInThemeDD = element(By.css("mat-dialog-container select[name*='theme'] option:nth-child(2)"));
        this.ddOptionNewTheme = element(By.css("option[value*='AutoTheme 1443']"));
        this.actionTitle = element(By.css("mat-dialog-container input[name*='Title']"));
        this.actionDescription = element(By.css("mat-dialog-container textarea[name*='Description']"));
        this.actionDueDate = element(By.css("mat-dialog-container input[name*='Due']"));
        this.saveAction = element(By.css("mat-dialog-container button[name*='Save']"));
        this.actionTitleOnPage = element(By.css("h1[class*='heading']"));
        this.themeNameOnPage = element(By.css("mat-basic-chip"));
        this.actionStatusDD = element(By.css("select[name*='Status']"));
        this.statusOptions = element.all(By.css("select[name*='Status'] option"));
        this.saveActionDetails = element(By.css("button[name*='Save Action']"));
        this.instructionsTab = element(By.xpath("//div[contains(text(),'Instructions')]/.."));
        this.instructionsObjectText = element(By.css("div[class*='content-wrapper'] p"));
        this.resultsTab = element(By.xpath("//div[contains(text(),'Results')]/.."));
        this.resultsObjectText = element(By.css("div[class*='content-wrapper'] p"));
        this.goDoActivityTitle = element(By.css("span[class*='title-text']"));
        this.goDoActivityDescription = element(By.css("mat-card-content > span"));
        this.goDoActivityInstructions = element(By.css("mat-card-content  span[class*='message'] p"));
        this.goDoPrefilledDueDate = element(By.css("input[name*='Completion Date'][ng-reflect-model]"));
        this.btnCommitGoDo = element(By.css("button[name*='Commit']"));
    }
}