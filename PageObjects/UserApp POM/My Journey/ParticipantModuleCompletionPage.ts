import { ElementFinder, element } from "protractor";
import { By } from "protractor";

export class ParticipantModuleCompletionPageLocate {

    p_moduleCompletionCircleIcon: ElementFinder;
    p_moduleCompletionGoToNxtBtn: ElementFinder;
    p_moduleCompletionDescription: ElementFinder;
    p_nxtModuleTitle: ElementFinder;


    startOneActivityBtn:ElementFinder;
    moduleCompletionLogoImg:ElementFinder;

    constructor() {
        this.p_moduleCompletionCircleIcon = element(By.xpath("//img[@src='assets/icons/complete.svg']"));
        this.p_moduleCompletionGoToNxtBtn = element(By.xpath("//span[contains(text(),'Go to Next Module')]"));
        this.p_moduleCompletionDescription = element(By.xpath("//h3[contains(text(),'You all finished, Great job!')]"));
        this.p_nxtModuleTitle = element(By.xpath("//h2[contains(text(),'Experience executive decision making')]"));

        
        this.startOneActivityBtn = element(By.xpath("//button[@class='plugin-common__btn-white mat-raised-button mat-button-base ng-star-inserted plugin-module__button-start']"));
       this.moduleCompletionLogoImg = element(By.xpath("//img[@src='assets/icons/complete.svg']"));
    
    }
}