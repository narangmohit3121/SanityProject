import { ElementFinder, By, element, ElementArrayFinder } from "protractor";

export class MoveUsers{
    clientTab:ElementFinder;
    searchTextBox:ElementFinder;
    selectPetronasClient:ElementFinder;
    clickCohort:ElementFinder;
    searchTextBoxJourney:ElementFinder;
    clickOnAutomationJourneyPramod:ElementFinder;
    clickOnCohort:ElementFinder;
    clickOnUser:ElementFinder;
    clickOnTeams:ElementFinder;
    clickOnMoveButton:ElementFinder;
    getCurrentValueDropDown:ElementFinder;
    selectAnotherCohort:ElementFinder;
    selectTeam:ElementFinder;
    moveCohortBtn:ElementFinder;



    constructor(){
       
        this.clientTab= element(By.xpath('//div[contains(text(),"Client")]'))
        this.searchTextBox= element(By.xpath('//input[@placeholder="Filter Collections"]'))
        this.selectPetronasClient= element(By.xpath('//span[@class="search-bar-title"]'))
        this.clickCohort= element(By.xpath('//div[contains(text(),"Cohorts")]'))
        this.searchTextBoxJourney= element(By.xpath('//input[@placeholder="Filter Journeys"]'))
        this.clickOnAutomationJourneyPramod= element(By.xpath('//span[@class="search-bar-title"]'))
        this.clickOnCohort= element(By.xpath('//tr[2]//td[2]//button[1]'))
        this.clickOnUser= element(By.xpath('//button[@name="User Click"]'))
        this.clickOnTeams= element(By.xpath('//div[contains(text(),"Teams")]'))
        this.clickOnMoveButton= element(By.xpath('//button[@name="move"]'))
        this.getCurrentValueDropDown= element(By.xpath('//select[@name="Cohort"]'))
        this.selectAnotherCohort= element(By.cssContainingText('option', 'cohort pramod test second'))
        this.selectTeam= element(By.cssContainingText('option','Testing Team4'))
        this.moveCohortBtn= element(By.xpath('//button[@name="move cohort"]'))
       

       





    }


}