import { element, ElementFinder, ElementArrayFinder } from "protractor";
import { By } from "protractor";

export class NewLeaderboardPageLocate {
    participantNaviationMenu: ElementFinder;
    optionHomeInMenu: ElementFinder;
    txtLeaderboard:ElementFinder;
    ddFilterBySeason:ElementFinder;
    ddOptionsSeason:ElementArrayFinder;
    ddFilterByIndustry:ElementFinder;
    ddOptionsIndustry: ElementArrayFinder;
    ddFilterByRegion:ElementFinder;
    ddOptionsRegion: ElementArrayFinder;
    btnApplyFilter:ElementFinder;
    shimmerLoadActivity:ElementFinder;
    participantRank:ElementFinder;
    participantScore: ElementFinder;
    topScore: ElementFinder;
    medianScore: ElementFinder;
    diveBackInCurrentRound:ElementFinder;
    diveBackInRank: ElementFinder;
    diveBackInTopScore: ElementFinder;
    diveBackInMedian: ElementFinder;
    btnSeeDetailedResults: ElementFinder;
    diveBackInUserScore: ElementFinder;
    linkJourneyPage: ElementFinder;
    btnNextModule: ElementFinder;
    ddFilterByVertical: ElementFinder;
    


    constructor() {
        this.participantNaviationMenu = element(By.xpath("//div[contains(@class,'activity-header')]//button[@name='Open the menu']"));
        this.optionHomeInMenu = element(By.xpath("//mat-nav-list[@aria-label='main navigation']//a[@aria-label='Home']"));
        this.txtLeaderboard = element(By.xpath("//p[@class='participant-leaderboard__performance-title']"));
        this.ddFilterBySeason = element(By.xpath("//span[contains(text(),'Season')]/following-sibling::mat-form-field//select"));
        this.ddOptionsSeason = element.all(By.xpath("//span[contains(text(),'Season')]/following-sibling::mat-form-field//select/option"));
        this.ddFilterByIndustry = element(By.name("select industry"));
        this.ddOptionsIndustry = element.all(By.xpath("//select[@name='select industry']/option"));
        this.ddFilterByVertical = element(By.name("select vertical"));
        this.ddFilterByRegion = element(By.name("select region"));
        this.ddOptionsRegion = element.all(By.xpath("//select[@name='select region']/option"));
        this.btnApplyFilter = element(By.xpath("//button[text()='Apply']"));
        //this.shimmerLoadActivity = element(By.xpath("//div[contains(@class,'co__block__video')]"));
        this.shimmerLoadActivity = element(By.xpath("//h3[contains(@class,'animate')]"));
        this.participantRank = element(By.xpath("//div[contains(@class,'leaderboard_title')]/div[contains(@class,'progress')]"));
        this.participantScore = element(By.xpath("//span[contains(text(),'Your')]/../following-sibling::div/progress"));
        this.topScore = element(By.xpath("//span[contains(text(),'Top')]/../following-sibling::div/span"));
        this.medianScore = element(By.xpath("//span[contains(text(),'Median')]/../following-sibling::div/progress"));
        this.diveBackInCurrentRound = element(By.xpath("//div[contains(@class,'add-score')]//h4"));
        this.diveBackInRank = element(By.xpath("//div[contains(@class,'add-score__details')]/span[contains(text(),'Your Rank')]"));
        this.diveBackInTopScore = element(By.xpath("//div[contains(@class,'add-score__details')]/span[contains(text(),'Top Score')]"));
        this.diveBackInMedian = element(By.xpath("//div[contains(@class,'add-score__details')]/span[contains(text(),'Median')]"));
        this.btnSeeDetailedResults = element(By.xpath("//div[contains(@class,'add-score__details')]//button"));
        this.diveBackInUserScore = element(By.xpath("//div[contains(@class,'add-score__details')]/span[contains(text(),'Your Score')]"));
        this.linkJourneyPage = element(By.xpath("//span[contains(text(),'My Journey')]"));
        this.btnNextModule = element(By.name("Go to next module"));

    }
};
