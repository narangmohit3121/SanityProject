import { ElementFinder, By,element } from "protractor";

export class ParticipantHomePageDiveBackInLocate{

iconHamberg:ElementFinder;
menuHome:ElementFinder;
ttlDiveBackIn:ElementFinder;
ttlStageTitle:ElementFinder;
ttlModuleTitle:ElementFinder;

    constructor(){

        this.iconHamberg=element(By.xpath("//i[contains(text(),'menu')]"));
        this.menuHome=element(By.xpath("//span[contains(text(),'Home')]"));
        this.ttlDiveBackIn=element(By.xpath("//h1[contains(text(),'Dive back in')]"));
        this.ttlStageTitle=element(By.xpath("//h2[contains(text(),'New Module 1A')]"));
        this.ttlModuleTitle=element(By.xpath("//p[contains(text(),'New Module 1A')]"));
    }
}