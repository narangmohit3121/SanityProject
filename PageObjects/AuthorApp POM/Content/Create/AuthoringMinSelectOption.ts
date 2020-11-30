import { ElementFinder, By, element } from "protractor";

export class AuthoringMinSelectOptionLocate{

    btnminusMinSelect:ElementFinder;
    btnplusMinSelect:ElementFinder;
    ttlMinNum:ElementFinder;
    btnSelectionSave:ElementFinder;
    countMinNumber:ElementFinder;

    constructor(){
        this.btnminusMinSelect=element(By.xpath("(//label[contains(text(),'Min Number of Items to Select')]//following::button[@data-type='minus'])[1]"));
        this.btnplusMinSelect=element(By.xpath("(//label[contains(text(),'Min Number of Items to Select')]//following::button[@data-type='plus'])[1]"));
        this.ttlMinNum=element(By.xpath("(//label[contains(text(),'Min Number of Items to Select')])"));
        this.btnSelectionSave = element(By.xpath("//div[contains(@class,'submit')]//button[not(contains(@class,'create-field')) and contains(text(),'Ok')]"));
        this.countMinNumber = element(By.xpath("//input[contains(@aria-label,'Min Number')]"));
    }
}