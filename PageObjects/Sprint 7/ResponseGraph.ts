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
        this.ttlResponseGraphWindow=element(By.xpath("//h2[contains(text(),'Poll Results')]"));
        //this.drpQuestionIDarrow=element(By.xpath("//h2[contains(text(),'Poll Results')]//following::div[@class='mat-select-arrow']"));
        this.drpQuestionID=element(By.xpath("(//span[contains(text(),'Question ID')]//preceding::input[@ng-reflect-placeholder='Question ID'])[2]"));
        //this.drpQuestionIDarrow=element(By.xpath("(//div[@class='mat-select-arrow'])[2]"));
        this.drpQuestionIDOptOne=element(By.xpath("//span[contains(text(),' Response Graph Single Select ')]"));
        this.drpQuestionIDOptTwo=element(By.xpath("//span[contains(text(),' Response Graph Multi Select ')]"));
        this.lstQuestionIDoptions=element.all(By.xpath("//span[@class='mat-option-text']"));
        this.btnResponseGraphCancel=element(By.xpath("//button[contains(text(),'Cancel')]"));
        this.btnResponseGraphSave=element(By.xpath("//button[contains(text(),'Save')]"));
        this.cntResponseGraphBlock=element(By.xpath("//p[contains(text(),'Response Graph')]"));


    }
}