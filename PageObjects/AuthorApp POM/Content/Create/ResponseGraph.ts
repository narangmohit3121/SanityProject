import { ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "selenium-webdriver";

export class ResponseGraphPageLocate{

    lnkEditResponseGraphHeader: ElementFinder;
    ttlResponseGraphWindow: ElementFinder;
    drpQuestionID:ElementFinder;
    //drpQuestionIDarrow: ElementFinder;
    drpQuestionIDOptOne: ElementFinder;
    drpQuestionIDOptTwo: ElementFinder;
    lstQuestionIDoptions: ElementArrayFinder;
    btnResponseGraphCancel: ElementFinder;
    btnResponseGraphSave: ElementFinder;
    cntResponseGraphBlock:ElementFinder;

    constructor(){

        this.lnkEditResponseGraphHeader=element(By.xpath("//button[contains(text(),'Edit Response Graph')]"));
        this.ttlResponseGraphWindow=element(By.css("div[class*='responsegraph-header']  h2"));
        //this.drpQuestionIDarrow=element(By.xpath("//h2[contains(text(),'Poll Results')]//following::div[@class='mat-select-arrow']"));
        this.drpQuestionID=element(By.xpath("//input[contains(@name,'ID of response')]"));
        //this.drpQuestionIDarrow=element(By.xpath("(//div[@class='mat-select-arrow'])[2]"));
        this.drpQuestionIDOptOne=element(By.xpath("(//div[contains(@class,'mat-autocomplete')]//mat-option)[1]"));
        this.drpQuestionIDOptTwo=element(By.xpath("(//div[contains(@class,'mat-autocomplete')]//mat-option)[2]"));
        this.lstQuestionIDoptions=element.all(By.xpath("//span[@class='mat-option-text']"));
        this.btnResponseGraphCancel=element(By.xpath("//button[contains(text(),'Cancel')]"));
        this.btnResponseGraphSave=element(By.xpath("//button[contains(text(),'Save')]"));
        this.cntResponseGraphBlock=element(By.xpath("//p[contains(text(),'Automation Response Graph')]"));


    }
}