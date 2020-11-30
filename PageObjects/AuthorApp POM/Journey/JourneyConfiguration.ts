import { By, element, ElementFinder } from "protractor";

export class JourneyConfigurationLocate {


    continueBtn: ElementFinder;
    ttlmyJourney: ElementFinder;
    btncontinuefirstactivity: ElementFinder;
    logosidemenu: ElementFinder;
    btnmyJourney:ElementFinder;
    btnstart:ElementFinder;
    btnvalidatedivebackin:ElementFinder;

    constructor() {

        this.continueBtn = element(By.xpath("//span[@class='mat-button-wrapper']//span[contains(text(),'Continue')]"));
       // this.ttlmyJourney=element(By.xpath("//a[@aria-label='My Journey']//br[@class='ng-star-inserted']"));
        this.ttlmyJourney=element(By.xpath("//a[@aria-label='My Journey']//following::span[contains(text(),'My Journey')]"));
        this.btncontinuefirstactivity=element(By.xpath("//button[@name='Continue to Next Activity']"));
        this.logosidemenu=element(By.xpath("//img[@alt='Client Logo']"));
        this.btnmyJourney=element(By.xpath("//button[@name='My journey Journey Configuration Module 1']"));
        this.btnstart=element(By.xpath("//span[@class='plugin-common__btn-start__text']"));
        this.btnvalidatedivebackin=element(By.xpath("//h1[@class='participant-home__main-title home-title-divback']"));


    }
}