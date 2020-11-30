import { element, ElementFinder, ElementArrayFinder } from "protractor";
import { By } from "protractor";

export class TextEntryPageLocate {
    textEntryContent: ElementFinder;
    btnEditContent: ElementFinder;
    btnTextInput: ElementFinder;
    txtInputId: ElementFinder;    
    btnIncreaseNumberOfRows: ElementFinder;
    btnDecreaseNumberOfRows: ElementFinder;
    txtInputLabel: ElementFinder;
    txtPlaceholderText: ElementFinder;
    txtCharacterLimit: ElementFinder;
    tglMandatory:ElementFinder;
    btnTextEntrySave:ElementFinder;
    btnTextEntryCancel:ElementFinder;
    contentSave: ElementFinder;
    contentCancel: ElementFinder;

    prtcpntTextEntryAreaLatest: ElementFinder;
    prtcpntTextEntryLabelLatest: ElementFinder;
    textEntryActivity: ElementFinder;
    myJourneyPage: ElementFinder;
    btnBackToMyJourney:ElementFinder;
    editContentArea: ElementFinder;
    textEntryInputLabel: ElementFinder;
    prtcpntTextEntryMaxChar: ElementFinder;


        

    constructor(){
        this.textEntryContent = element(By.xpath("//p[contains(text(),'Automation TextEntry')]/../.."));
        this.btnEditContent = element(By.xpath("//button[contains(text(),'Edit Content')]"));
        this.btnTextInput = element(By.xpath("//div[@id='froala-toolbar']//span[contains(text(),'Text Input')]/.."));
        this.txtInputId = element(By.xpath("//div[not(contains(@class,'wrapper'))]/div[contains(@class,'fr-modal-wrapper')]//input[contains(@class,'input-block-id')]"));
        this.btnIncreaseNumberOfRows = element(By.xpath("//div[contains(@class,'detail-right')]//span[text()='+']/.."));
        this.btnDecreaseNumberOfRows = element(By.xpath("//div[contains(@class,'detail-right')]//span[text()='-']/.."));
        this.txtInputLabel = element(By.xpath("//div[@class='textAreaInput-modal']//input[contains(@placeholder,'Type Question Text')]"));
        this.txtPlaceholderText = element(By.xpath("//div[@class='textAreaInput-modal']//input[contains(@class,'input-block-placeholder')]"));
        this.txtCharacterLimit = element(By.xpath("//div[@class='textAreaInput-modal']//input[contains(@class,'input characterlimit')]"));
        this.tglMandatory = element(By.xpath("//input[contains(@name,'mandatory')]//ancestor::label[@class = 'modal-details__switch']"));
        this.btnTextEntryCancel = element(By.xpath("//div[not(contains(@class,'wrapper'))]/div[contains(@class,'fr-modal-wrapper')]//button[text()='Cancel']"));
       // this.btnTextEntrySave = element(By.xpath("//div[@class='textAreaInput-modal']//button[contains(text(),'Save')]"));
        this.btnTextEntrySave = element(By.xpath("//div[not(contains(@class,'wrapper'))]/div[contains(@class,'fr-modal-wrapper')]//button[contains(text(),'Ok')]"));
        this.contentCancel = element(By.xpath("//mat-dialog-container//button[@name='cancel' and not(contains(@class,'close'))]"));
        this.contentSave = element(By.xpath("//div[contains(@class,'submit')]//button[not(contains(@class,'create-field')) and contains(text(),'Ok')]"));
        this.editContentArea = element(By.xpath("//mat-dialog-container//div[contains(@class,'fr-view')][@contenteditable]"));
        this.textEntryInputLabel = element(By.xpath("//mat-dialog-container//p[contains(@class,'labelVal')]//span"));
        
        this.myJourneyPage = element(By.xpath("//span[text()='My Journey']//ancestor::a[@aria-label='My Journey']"));
        this.textEntryActivity = element(By.xpath("//*[contains(text(),'TextEntry')]//ancestor::div[contains(@class,'module__block')]//button[contains(@name,'start') or contains(@name,'resume') or contains(@name,'revisit')]"));
        //this.prtcpntTextEntryLabelLatest = element(By.xpath("(//label)[last()]"));
        this.prtcpntTextEntryLabelLatest = element(By.xpath("//p[contains(@class,'labelVal')]//span"));
        this.prtcpntTextEntryAreaLatest = element(By.xpath("//div[contains(@class,'itc__text')]"));
        this.btnBackToMyJourney = element(By.xpath("//button[@name='Back']"));
        this.prtcpntTextEntryMaxChar = element(By.css("div[data-charcount] span"))


    }
};
