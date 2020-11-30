import { ElementFinder, element, By } from "protractor";

export class JourneyScriptPageLocate{

    fldJourneyScript:ElementFinder;
    jrnJourneyScriptOne:ElementFinder;
    threedotsJ1EditStage1:ElementFinder;
    btnEdit:ElementFinder;
    txtScriptEditStageActivity:ElementFinder;
    btnDone:ElementFinder;
    threedotsJ1EditModule1:ElementFinder;
    txtScriptEditModule:ElementFinder;
    threedotsJ1EditActivity1:ElementFinder;
    threedotsJ1EditActivity2:ElementFinder;
    threedotsJ1EditStage2:ElementFinder;
    threedotsJ1EditModule2:ElementFinder;
    threedotsJ1EditActivity3:ElementFinder;
    threedotsJ1EditStage3:ElementFinder;
    threedotsJ1EditModule3:ElementFinder;
    threedotsJ1EditActivity4:ElementFinder;
    threedotsJ1EditActivity5:ElementFinder;
    threedotsJ1EditModule4:ElementFinder;

    jrnJourneyScriptTwo:ElementFinder;
    threedotsJ2EditStage1:ElementFinder;
    threedotsJ2EditModule1:ElementFinder;
    threedotsJ2EditActivity1:ElementFinder;
    threedotsJ2EditActivity2:ElementFinder;
    threedotsJ2EditStage2:ElementFinder;
    threedotsJ2EditModule2:ElementFinder;
    threedotsJ2EditActivity3:ElementFinder;
    threedotsJ2EditStage3:ElementFinder;
    threedotsJ2EditModule3:ElementFinder;
    threedotsJ2EditActivity4:ElementFinder;
    threedotsJ2EditActivity5:ElementFinder;

    //Participant side

    btnStartJ1Act1:ElementFinder;
    ttlJ1Module1:ElementFinder;

    rdbtnMumbai:ElementFinder;

    constructor(){

        this.fldJourneyScript=element(By.xpath("//p[contains(text(),'Journey Script')]"));
        this.jrnJourneyScriptOne=element(By.xpath("//p[contains(text(),'Journey Script One')]"));
        this.jrnJourneyScriptTwo=element(By.xpath("//p[contains(text(),'Journey Script Two')]"));
        this.threedotsJ1EditStage1=element(By.xpath("(//h3[contains(text(),'J1 Stage1')]//following::i[@class='author-icon icon-dots master-collection__icon journey-section__fontcolor'])[1]"));
        this.btnEdit=element(By.xpath("//button[@name='edit']"));
        this.txtScriptEditStageActivity=element(By.xpath("//textarea[contains(@id,'mat-input')]"));
        this.btnDone=element(By.xpath("//button[contains(text(),'Save')]")); //  //button[contains(text(),'Done')]
        this.threedotsJ1EditModule1=element(By.xpath("(//p[contains(text(),'J1 Module1')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));
        this.txtScriptEditModule=element(By.xpath("(//textarea[contains(@id,'mat-input')])[2]"));
        this.threedotsJ1EditActivity1=element(By.xpath("(//p[contains(text(),'J1 Activity1')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));
        this.threedotsJ1EditActivity2=element(By.xpath("(//p[contains(text(),'J1 Activity2')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));
        this.threedotsJ1EditStage2=element(By.xpath("(//h3[contains(text(),'J1 Stage2')]//following::i[@class='author-icon icon-dots master-collection__icon journey-section__fontcolor'])[1]"));
        this.threedotsJ1EditModule2=element(By.xpath("(//p[contains(text(),'J1 Module2')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));
        this.threedotsJ1EditActivity3=element(By.xpath("(//p[contains(text(),'J1 Activity3')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));
        this.threedotsJ1EditStage3=element(By.xpath("(//h3[contains(text(),'J1 Stage3')]//following::i[@class='author-icon icon-dots master-collection__icon journey-section__fontcolor'])[1]"));
        this.threedotsJ1EditModule3=element(By.xpath("(//p[contains(text(),'J1 Module3')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));
        this.threedotsJ1EditActivity4=element(By.xpath("(//p[contains(text(),'J1 Activity4')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));
        this.threedotsJ1EditActivity5=element(By.xpath("(//p[contains(text(),'J1 Activity5')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));
        this.threedotsJ1EditModule4=element(By.xpath("(//p[contains(text(),'J1 Module4')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));

        this.threedotsJ2EditStage1=element(By.xpath("(//h3[contains(text(),'J2 Stage1')]//following::i[@class='author-icon icon-dots master-collection__icon journey-section__fontcolor'])[1]"));
        this.threedotsJ2EditModule1=element(By.xpath("(//p[contains(text(),'J2 Module1')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));
        this.threedotsJ2EditActivity1=element(By.xpath("(//p[contains(text(),'J2 Activity1')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));
        this.threedotsJ2EditActivity2=element(By.xpath("(//p[contains(text(),'J2 Activity2')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));
        this.threedotsJ2EditStage2=element(By.xpath("(//h3[contains(text(),'J2 STAGE2')]//following::i[@class='author-icon icon-dots master-collection__icon journey-section__fontcolor'])[1]"));
        this.threedotsJ2EditModule2=element(By.xpath("(//p[contains(text(),'J2 Module2')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));
        this.threedotsJ2EditActivity3=element(By.xpath("(//p[contains(text(),'J2 Activity3')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));
        this.threedotsJ2EditStage3=element(By.xpath("(//h3[contains(text(),'J2 Stage3')]//following::i[@class='author-icon icon-dots master-collection__icon journey-section__fontcolor'])[1]"));
        this.threedotsJ2EditModule3=element(By.xpath("(//p[contains(text(),'J2 Module3')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));
        this.threedotsJ2EditActivity4=element(By.xpath("(//p[contains(text(),'J2 Activity4')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));
        this.threedotsJ2EditActivity5=element(By.xpath("(//p[contains(text(),'J2 Activity5')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));
    
        //Participant side

        this.btnStartJ1Act1=element(By.xpath("(//h3[contains(text(),'J1 Activity1')]//following::span[contains(text(),'Start')])[1]"));
        this.ttlJ1Module1=element(By.xpath("//h2[contains(text(),'J1 Module1')]"));

        this.rdbtnMumbai=element(By.xpath("//span[contains(text(),'Mumbai')]"));
    }
}