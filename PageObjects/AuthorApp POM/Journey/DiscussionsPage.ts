import { element, ElementFinder } from "protractor";
import { By } from "selenium-webdriver";

export class DiscussionsPageLocate{

    tabDiscussions: ElementFinder;
    btnAddDiscussions: ElementFinder;
    txtDiscussionJrnSptId: ElementFinder;
    txtDiscusstionTtl: ElementFinder;
    txtDiscussionStm: ElementFinder;
    drpScope: ElementFinder;
    optScope: ElementFinder;
    btnCreateAddDiscussion: ElementFinder;
    txtCommentBox:ElementFinder;
    btnComment:ElementFinder;
    ttlDiscussion:ElementFinder;
    ttlContent:ElementFinder;
    btnDelete:ElementFinder;
    btnDeleteDiscussion:ElementFinder;
    btnExitUnLock:ElementFinder;

    constructor(){
        this.tabDiscussions=element(By.xpath("//div[contains(text(),' Discussions ')]"));
        this.btnAddDiscussions=element(By.xpath("//span[contains(text(),'Add Discussion')]"));
        this.txtDiscussionJrnSptId=element(By.xpath("//input[@aria-label='Discussion Journey Script Id']"));
        this.txtDiscusstionTtl=element(By.xpath("//input[@aria-label='Discussion Title']"));
        this.txtDiscussionStm=element(By.xpath("//input[@aria-label='Discussion Statement']"));
        this.drpScope=element(By.xpath("//select[@aria-label='Discussion Scope']"));
        this.optScope=element(By.xpath("//option[contains(text(),'Journey')]"));
        this.btnCreateAddDiscussion=element(By.xpath("//button[contains(text(),'CREATE')]"));
        this.txtCommentBox=element(By.xpath("//textarea[@aria-label='Enter your comment']"));
        this.btnComment=element(By.xpath("(//button[@aria-label='Comment'])[1]"));
        this.ttlDiscussion=element(By.xpath("(//div[@class='thread-title'])[1]"));
        this.ttlContent=element(By.xpath("(//div[@class='thread-title'])[2]"));
        this.btnDelete=element(By.xpath("//button[@aria-label='Discussion delete']"));
        this.btnDeleteDiscussion=element(By.xpath("//button[@aria-label='Delete Discussion']"));
        this.btnExitUnLock=element(By.xpath("//button[contains(text(),'EXIT & UNLOCK ')]"));
    }
}