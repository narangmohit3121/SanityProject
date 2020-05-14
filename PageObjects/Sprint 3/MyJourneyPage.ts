import { ElementFinder, ElementArrayFinder, By, element } from "protractor";

export class MyJourneyPageLocate {

    myJourneyPageTitle: ElementFinder;
    myJourneyPageList: ElementArrayFinder;
    myJourneyDescription: ElementFinder;
    myJourneyStageList: ElementArrayFinder;
    myJourneyModuleList: ElementArrayFinder;
    myJourneyActivityCount: ElementArrayFinder;
    myJourneyPreviewButton: ElementFinder;

    constructor() {

        this.myJourneyPageTitle = element(By.xpath("//h1[contains(text(),'My Journey')]"));
        this.myJourneyPageList = element.all(By.xpath("//div[@class='ng-star-inserted']/article[@data-index='0']"));
        this.myJourneyDescription = element(By.xpath("//p[@class='plugin-journey__disc']"))
        this.myJourneyStageList = element.all(By.xpath("//div/p[@class='plugin-journey__stage-title']"))
        this.myJourneyModuleList = element.all(By.xpath("//h6[@class='plugin-journey__jtitle']"))
        this.myJourneyActivityCount = element.all(By.xpath("//div[@class='plugin-journey__activity ng-star-inserted']//p[@class='plugin-journey__activity-para']"))
        this.myJourneyPreviewButton = element(By.xpath("//h3[contains(text(), 'Welcome to Sales Skills Simulation')]/following::div[5]"))
    }
}