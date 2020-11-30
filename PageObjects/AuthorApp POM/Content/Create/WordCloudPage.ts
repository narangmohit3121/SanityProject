import { element, ElementFinder, ElementArrayFinder } from "protractor";
import { By } from "protractor";
import testData from "../../../../testData.json";
import config from "../../../../StepDefinitions/config.json";
import sanityTestData from "../../../../SanityTestData.json";

export class WordCloudPageLocate {
    textEntryContent: ElementFinder;
    btnEditContent: ElementFinder;
    editActivitywordcloud: ElementFinder;
    btnEditWordcloud: ElementFinder;
    btnDecreaseNumberOfWords: ElementFinder;
    btnIncreaseNumberOfWords: ElementFinder;
    currentNumberOfWords: ElementFinder;
    currentWordFormat: ElementFinder;
    wordFormatUppercase: ElementFinder;
    wordFormatLowercase: ElementFinder;
    textInputContainer: ElementFinder;
    wordsInWordcloud: ElementArrayFinder;
    selectedWordCount: ElementFinder;



    constructor() {
        this.editActivitywordcloud = element(By.xpath(`//p[contains(text(),'${testData.Sprint7.WordCloudBlock}')]/../..`));
        this.btnEditWordcloud = element(By.xpath("//button[contains(text(),'Edit Wordcloud')]"));
        this.btnDecreaseNumberOfWords = element(By.xpath("//mat-dialog-container//button[@name='decrement']"));
        this.btnIncreaseNumberOfWords = element(By.xpath("//mat-dialog-container//button[@name='increment']"));
        this.currentNumberOfWords = element(By.xpath("//mat-dialog-container//button[@name='increment']/../preceding-sibling::div/input"));
        this.wordFormatUppercase = element(By.xpath("//mat-dialog-container//span[contains(text(),'Uppercase')]/../../.."));
        this.currentWordFormat = element(By.xpath("//mat-dialog-container//mat-radio-group[@aria-labelledBy='caseFormatting']/mat-radio-button[contains(@class,'radio-checked')]//span[contains(@class,'title')]"));
        this.wordFormatLowercase = element(By.xpath("//mat-dialog-container//span[contains(text(),'Lowercase')]/../../.."));
        this.textInputContainer = element(By.xpath("//div[contains(@class,'itc__text')]"));
        this.wordsInWordcloud = element.all(By.xpath("//*[contains(@class,'highcharts-tracker')]/*[contains(text(),'')]"));
        this.selectedWordCount = element(By.xpath("//*[contains(@class,'highcharts-tooltip')]//*[contains(text(),'weight:')]/following-sibling::*[contains(@style,'font-weight')]"));

        if (config.suiteType == "sanity") {
            this.editActivitywordcloud = element(By.xpath(`//p[contains(text(),'${sanityTestData.wordcloudBlock}')]/../..`));
        }


    }
};
