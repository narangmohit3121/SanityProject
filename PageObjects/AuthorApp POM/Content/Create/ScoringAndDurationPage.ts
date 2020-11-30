import { ElementFinder, ElementArrayFinder, element, By } from "protractor";

export class ScoringAndDurationPageLocate {
    
    
    Sprint18Fld:ElementFinder
    ScoreDurrationCnt:ElementFinder
    NumberOfPointsOffLbl:ElementFinder
    DurationOffLbl:ElementFinder
    NumberOfPointsOffBtn:ElementFinder
    DurationOffBtn:ElementFinder
    NumberOfPointsOffAfterclickBtn:ElementFinder
    DurationOffAfterclickBtn:ElementFinder
    PointsTextFieldTxt:ElementFinder
    DurationTextFieldTxt:ElementFinder
    PointsPlusBtn:ElementFinder
    DurationMinutesPlusBtn:ElementFinder
    SAVEDRAFTBtn:ElementFinder
    PUBLISHBtn:ElementFinder
    toastMessageSuccess:ElementFinder
    exitEditor:ElementFinder


    IndustryDDArrow:ElementFinder
    ContinueBtn:ElementFinder
    VerticalManshaRadioBtn:ElementFinder
    StartBtn:ElementFinder
    FivePoints:ElementFinder


    


    constructor() {

        this.Sprint18Fld = element(By.xpath("//p[contains(text(),'Sprint 18')]"));
        this.ScoreDurrationCnt = element(By.xpath("//p[contains(text(),'1957 Scoring and Duration content')]"));
        this.NumberOfPointsOffLbl = element(By.xpath("//mat-slide-toggle[contains(@name,'Completion')]//span[contains(@class,'ng-star')]"));
        this.DurationOffLbl = element(By.xpath("//mat-slide-toggle[contains(@name,'Duration')]//span[contains(@class,'ng-star')]"));
        this.NumberOfPointsOffBtn =element(By.xpath("//mat-slide-toggle[contains(@name,'Completion')]//label"));
       this.DurationOffBtn = element(By.xpath("//mat-slide-toggle[contains(@name,'Duration')]//label"));
       this.NumberOfPointsOffAfterclickBtn = element(By.xpath("//mat-slide-toggle[contains(@name,'Completion')]//span[contains(@class,'ng-star')]"))
       this.DurationOffAfterclickBtn = element(By.xpath("//mat-slide-toggle[contains(@name,'Duration')]//span[contains(@class,'ng-star')]"));

       this.PointsTextFieldTxt = element(By.xpath("//input[@name='Points']"));
       this.DurationTextFieldTxt = element(By.xpath("//input[@name='minutes']"));

       this.PointsPlusBtn = element(By.xpath("//button[@name='increase points']"));
       this.DurationMinutesPlusBtn = element(By.xpath("//button[@name='increase minutes']"));
       this.SAVEDRAFTBtn = element(By.xpath("//span[text()='SAVE DRAFT']"));
       this.PUBLISHBtn = element(By.xpath("//span[text()='PUBLISH ']"));
       this.toastMessageSuccess = element(By.xpath("//div[@id='toast-container']//div[contains(text(),'success')]"));
       this.exitEditor = element(By.name("exit"));

       this.IndustryDDArrow =element(By.xpath("//select[@name='Select an industry']"));
       this.ContinueBtn = element(By.xpath("//button[@name='Continue']"));
       this.VerticalManshaRadioBtn = element(By.xpath("//div[@class='mat-radio-inner-circle']"));
       this.StartBtn = element(By.xpath("//span[@class='plugin-common__btn-start__text']"));

       this.FivePoints = element(By.xpath("//span[contains(@class,'count-start')]/.."));

       
       
       
       

       

       
       
    }
}