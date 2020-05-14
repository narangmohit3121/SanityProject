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


        

    constructor(){
        this.textEntryContent = element(By.xpath("//p[contains(text(),'Automation TextEntry')]/../.."));
        this.btnEditContent = element(By.xpath("//button[contains(text(),' Edit Content')]"));
        this.btnTextInput = element(By.xpath("//div[@id='froala-toolbar']//span[contains(text(),'Text Input')]/.."));
        this.txtInputId = element(By.xpath("//div[@class='textAreaInput-modal']//input[contains(@class,'input-block-id')]"));
        this.btnIncreaseNumberOfRows = element(By.xpath("//div[@class='textAreaInput-modal']//span[text()='+']/.."));
        this.btnDecreaseNumberOfRows = element(By.xpath("//div[@class='textAreaInput-modal']//span[text()='-']/.."));
        this.txtInputLabel = element(By.xpath("//div[@class='textAreaInput-modal']//input[@placeholder = 'Type Question Text']"));
        this.txtPlaceholderText = element(By.xpath("//div[@class='textAreaInput-modal']//input[contains(@class,'input-block-placeholder')]"));
        this.txtCharacterLimit = element(By.xpath("//div[@class='textAreaInput-modal']//input[contains(@class,'input characterlimit')]"));
        this.tglMandatory = element(By.xpath("//div[@class='textAreaInput-modal']//label[@class = 'modal-details__switch']"));
        this.btnTextEntryCancel = element(By.xpath("//div[@class='textAreaInput-modal']//button[text()='Cancel']"));
       // this.btnTextEntrySave = element(By.xpath("//div[@class='textAreaInput-modal']//button[contains(text(),'Save')]"));
        this.btnTextEntrySave = element(By.xpath("//div[@class='fr-modal-wrapper']//button[contains(text(),'Save')]"));
        //this.contentCancel = element(By.xpath("//div[@class='modal-content']//button[contains(text(),'Cancel')]"));
        this.contentCancel = element(By.xpath("//div[@class='cdk-overlay-pane']//button[contains(text(),'Cancel')]"));
        //this.contentSave = element(By.xpath("//div[@class='modal-content']//button[contains(text(),'Save')]"));
        this.contentSave = element(By.xpath("//div[@class='cdk-overlay-pane']//button[contains(text(),'Save')]"));
        
        this.myJourneyPage = element(By.xpath("//span[text()='My Journey']//ancestor::a[@aria-label='My Journey']"));
        this.textEntryActivity = element(By.xpath("//*[contains(text(),'Automation_TextEntry')]//ancestor::div[contains(@class,'module__block')]//button[contains(@name,'Start') or contains(@name,'Resume') or contains(@name,'Revisit')]"));
        this.prtcpntTextEntryLabelLatest = element(By.xpath("(//label)[last()]"));
        this.prtcpntTextEntryAreaLatest = element(By.xpath("(//label)[last()]/following-sibling::textarea"));
        this.btnBackToMyJourney = element(By.xpath("//button[@name='Back']"));


    }
};
