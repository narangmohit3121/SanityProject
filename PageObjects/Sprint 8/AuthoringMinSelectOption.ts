import { ElementFinder, By, element } from "protractor";

export class AuthoringMinSelectOptionLocate{

    btnminusMinSelect:ElementFinder;
    btnplusMinSelect:ElementFinder;
    ttlMinNum:ElementFinder;
    btnSelectionSave:ElementFinder;
    countMinNumber:ElementFinder;

    constructor(){
        this.btnminusMinSelect=element(By.xpath("(//label[contains(text(),'Min Number of Items to Select')])[2]//following::button[@data-type='minus']"));
        this.btnplusMinSelect=element(By.xpath("(//label[contains(text(),'Min Number of Items to Select')])[2]//following::button[@data-type='plus']"));
        this.ttlMinNum=element(By.xpath("(//label[contains(text(),'Min Number of Items to Select')])[2]"));
        this.btnSelectionSave = element(By.xpath("//button[@name='done']"));
        this.countMinNumber = element(By.xpath("(//input[@class='modal-common__count-input mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine'])[4]"));
    }
}