import { ElementFinder, By, element } from "protractor";

export class AdminColorStageLocate {
    
   txtClientSearchMicro:ElementFinder
   tleJourneycolorstage:ElementFinder;
   tleFolderautomation:ElementFinder;
   tleFolderAuthorApp:ElementFinder;
   tleFolderJourney:ElementFinder;
   tleJourneyMicrosoft:ElementFinder;
   dotStage1:ElementFinder;
   btnEditStage:ElementFinder;
   imgExistingColorPallettePurple:ElementFinder;
   txtInputColorHexValue:ElementFinder;
   btnDone:ElementFinder;
   btnSAVE:ElementFinder;
   imgActualedRedColor:ElementFinder;
   btnCANCEL:ElementFinder;
   lblEditContent:ElementFinder;
   lblRedColorBox:ElementFinder;
   


    constructor() {

       
        this.txtClientSearchMicro = element(By.xpath("//input[@placeholder='Filter Collections']"));
        this.tleJourneycolorstage = element(By.xpath("//p[.='Journey Color Stages']"));
        this.tleFolderautomation=element(By.xpath("//p[.='Automation Folder_DONOT DELETE']"));
        this.tleFolderAuthorApp=element(By.xpath("//p[.='AuthorApp']"));
        this.tleFolderJourney=element(By.xpath("//p[.='Journey']"));
        this.dotStage1 = element(By.xpath("(//span[@class='mat-button-wrapper']//i[@class='author-icon icon-dots master-collection__icon journey-section__fontcolor'])"));
        this.btnEditStage = element(By.xpath("//button[@name='edit']"));
        this.imgExistingColorPallettePurple = element(By.xpath("//div[@class='journey__color-block']"));
        this.imgActualedRedColor = element(By.xpath("//input[@ng-reflect-model='#850000']"));
        this.lblRedColorBox = element("//input[@class='journey__color-Palette ng-pristine ng-valid ng-touched']");
        this.txtInputColorHexValue = element(By.xpath("//div[@class='hex-text ng-star-inserted']//input[1]"));
        this.btnDone = element(By.xpath("//button[text()='Save']"));
        this.btnSAVE = element(By.xpath("//span[text()='SAVE']"));
        this.lblEditContent = element(By.xpath("//h3[@class='modal-common__title generic-border']"));
        this.btnCANCEL = element(By.xpath("//button[text()='CANCEL']"));
      
    }

}