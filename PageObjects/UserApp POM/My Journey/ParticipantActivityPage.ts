import { ElementFinder, element } from "protractor";
import { By } from "protractor";

export class ParticipantActivityPageLocate {

    p_emailID: ElementFinder;
    p_password: ElementFinder;
    p_loginButton: ElementFinder;
    p_myJourneyTitle: ElementFinder;
    p_moduleStartButton: ElementFinder;
    p_activityStartButton: ElementFinder;
    p_activitymoduleTitle: ElementFinder;
    p_activityTitle: ElementFinder;
    p_continueButton: ElementFinder;
    p_backButton: ElementFinder;
    p_logoutButton: ElementFinder;

    activityOneLbl:ElementFinder;
    activityStartBtn:ElementFinder;
    activityOneabl:ElementFinder;
    moduleOneabl:ElementFinder;

    


    constructor() {
        this.p_emailID = element(By.id('userEmail'));
        this.p_password = element(By.id('password'));
        this.p_loginButton = element(By.xpath("//button[@id ='btnLogin']"));
        this.p_myJourneyTitle = element(By.xpath("//h1[contains(text(),'My Journey')]"));
        this.p_moduleStartButton = element(By.xpath("//h3[contains(text(),'Opportunities and trends in the industry')]//parent::div//parent::div//following-sibling::div[@class='plugin-journey__right']//button"));
        this.p_activityStartButton = element(By.xpath("//h3[contains(text(),'What is important in this industry to succeed')]//following::div[@class='flex-view'][1]//button"));
        this.p_activitymoduleTitle = element(By.xpath("//h1[contains(text(),'Opportunities and trends in the industry')]"));
        this.p_activityTitle = element(By.xpath("//h2[contains(text(),'What is important in this industry to succeed')]"));
        this.p_continueButton = element(By.xpath("//span[contains(text(),'Continue')]"));
        this.p_backButton = element(By.xpath("//span[contains(text(),'Back')]"));
        this.p_logoutButton = element(By.xpath("//span[contains(text(),'Logout')]"));

        this.activityOneLbl = element(By.xpath("//h3[contains(text(),' Activity one ')]"));
        this.activityStartBtn = element(By.xpath("//button[@name='start']"));

        this.moduleOneabl = element(By.xpath("//h1[@class='plugin-activity__module-title weight-600']"));
        this.activityOneabl = element(By.xpath("//h2[@class='plugin-activity-subtitle ng-star-inserted']"));


    }
}