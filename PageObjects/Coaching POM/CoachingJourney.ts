import { element, ElementFinder } from "protractor";
import { By } from "selenium-webdriver";

export class CoachingJourneyPage{

    btnAccept:ElementFinder;
    entry1:ElementFinder;
    entry2:ElementFinder;
    entry3:ElementFinder;
    entry4:ElementFinder;
    entry5:ElementFinder;
    entry6:ElementFinder;
    entry7:ElementFinder;
    drpResults:ElementFinder;
    opt:ElementFinder;

    drpLabel1:ElementFinder;
    optLabel1:ElementFinder;

    drpLabel2:ElementFinder;
    optLabel2:ElementFinder;

    drpLabel3:ElementFinder;
    optLabel3:ElementFinder;

    drpLabel4:ElementFinder;
    optLabel4:ElementFinder;

    drpLabel5:ElementFinder;
    optLabel5:ElementFinder;

    cardSortLaunch:ElementFinder;
    startCardSort:ElementFinder;
    btnStrength:ElementFinder;
    xClose:ElementFinder;
    btnSubmitMBIR:ElementFinder;
    
    constructor(){
        this.btnAccept=element(By.xpath("//button[@name='Accept']"));
        this.entry1=element(By.xpath("(//textarea[@placeholder='Type your entry here'])[1]"));
        this.entry2=element(By.xpath("(//textarea[@placeholder='Type your entry here'])[2]"));
        this.entry3=element(By.xpath("(//textarea[@placeholder='Type your entry here'])[3]"));
        this.entry4=element(By.xpath("(//textarea[@placeholder='Type your entry here'])[4]"));
        this.entry5=element(By.xpath("(//textarea[@placeholder='Type your entry here'])[5]"));
        this.entry6=element(By.xpath("(//textarea[@placeholder='Type your entry here'])[6]"));
        this.entry7=element(By.xpath("(//textarea[@placeholder='Type your entry here'])[7]"));
        this.drpResults=element(By.xpath("//select[@aria-label='Result']"));
        this.opt=element(By.xpath("//option[contains(text(),' Increased efficiency ')]"));

        this.drpLabel1=element(By.xpath("//select[@name='My leadership shift']"));
        this.optLabel1=element(By.xpath("//option[contains(text(),' I have experienced significant change ')]"));

        this.drpLabel2=element(By.xpath("//select[@name='Mindset']"));
        this.optLabel2=element(By.xpath("(//option[contains(text(),'Significant change ')])[1]"));

        this.drpLabel3=element(By.xpath("//select[@name='Behaviour']"));
        this.optLabel3=element(By.xpath("(//option[contains(text(),'Significant change ')])[2]"));

        this.drpLabel4=element(By.xpath("//select[@name='Impact']"));
        this.optLabel4=element(By.xpath("(//option[contains(text(),'Significant change ')])[3]"));

        this.drpLabel5=element(By.xpath("//select[@name='Result']"));
        this.optLabel5=element(By.xpath("(//option[contains(text(),'Significant change ')])[4]"));


        this.cardSortLaunch=element(By.xpath("//button[@aria-label='Launch Card Sort']"));
        this.startCardSort=element(By.xpath("//a[contains(text(),'Start Card Sort Process')]"));
        this.btnStrength=element(By.xpath("//input[@value='Strength']"));
        this.xClose=element(By.xpath("//i[@class='pv-icon pv-icon-delete plugin-icon']"));
        this.btnSubmitMBIR=element(By.xpath("//span[contains(text(),'Submit')]"));
    }
}