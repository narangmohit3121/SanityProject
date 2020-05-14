import { element, ElementFinder, ElementArrayFinder } from "protractor";
import { By } from "protractor";
import config from "../../StepDefinitions/config.json";
import sanityTestData from "../../SanityTestData.json";

export class MastheadPage{
    btnEditMasthead: ElementFinder;
    editMastheadActivity: ElementFinder;
    ddHeaderType: ElementFinder;
    headerTypeFullScreen: ElementFinder;
    chooseFileBtn: ElementFinder;
    mastheadIcon: ElementFinder;
    mastheadContentLastPara: ElementFinder;
    mastheadHeading: ElementFinder;
    cancelEdit: ElementFinder;
    saveBtn: ElementFinder;
    mastheadPreviewContentLastPara: ElementFinder;
    mastheadPreviewHeading: ElementFinder;


    constructor(){
        this.btnEditMasthead = element(By.xpath("//button[contains(text(),'Edit Masthead')]"));
        this.editMastheadActivity = element(By.xpath(`//p[contains(text(),'${sanityTestData.mastheadBlock}')]/../..`));
        this.ddHeaderType = element(By.xpath("//select[@name='Header Type']"));
        this.headerTypeFullScreen = element(By.xpath("//select[@name='Header Type']/option[contains(text(),'Full Screen')]"));
        this.chooseFileBtn = element(By.xpath("input#fileInput"));
        this.mastheadIcon   = element(By.xpath("//select[@name='Icon']"));
        this.mastheadContentLastPara = element(By.xpath("//mat-dialog-container//mat-label[contains(text(),'| Insight |')]/following-sibling::app-input//p[last()]"));
        this.mastheadHeading = element(By.xpath("//mat-dialog-container//mat-label[contains(text(),'Heading')]/following-sibling::app-input//h1"));
        this.cancelEdit = element(By.xpath("//button[contains(text(),'Cancel')]"));
        this.saveBtn = element(By.xpath("//button[contains(text(),'Save')]"));
        this.mastheadPreviewContentLastPara = element(By.xpath("//app-input[contains(@name,'Exercise')]//div[contains(@class,'fr-wrapper')]//p[last()]"));
        this.mastheadPreviewHeading = element(By.xpath("//app-input[contains(@name,'Heading')]//div[contains(@class,'fr-wrapper')]//h1"));


        if(config.suiteType == "sanity"){
            this.editMastheadActivity = element(By.xpath(`//p[contains(text(),'${sanityTestData.mastheadBlock}')]/../..`));
        }
    }
}