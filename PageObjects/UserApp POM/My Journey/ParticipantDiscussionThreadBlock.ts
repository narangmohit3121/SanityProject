import { ElementFinder, element } from "protractor";
import { By } from "protractor";

export class ParticipantDisscussionThreadBlockLocate {

    p_moduleStartButton: ElementFinder;
    p_activityStartButton: ElementFinder;
    p_viewAnotherResponseButton: ElementFinder;
    p_writeACommentTextBox: ElementFinder;
    p_commentButton: ElementFinder;
    p_nameAbbreviation: ElementFinder;
    p_fullName: ElementFinder;
    p_loadMoreComments: ElementFinder;
    p_replyButton: ElementFinder;
    p_writeACommentTextBoxJJ: ElementFinder;
    p_commentButtonJJ: ElementFinder;
    p_continueButton: ElementFinder;

    constructor() {
        this.p_moduleStartButton = element(By.xpath("//h3[contains(text(),'Develop financial acumen')]//parent::div//parent::div//following-sibling::div[@class='plugin-journey__right']//button"));
        this.p_activityStartButton = element(By.xpath("//h3[contains(text(),'Financial Acumen')]//following::div[@class='flex-view'][1]//button"));
        this.p_viewAnotherResponseButton = element(By.xpath("//span[contains(text(),'View another response')]"));
        this.p_writeACommentTextBox = element(By.xpath("(//input[@ng-reflect-placeholder='Write a comment...'])[1]"));
        this.p_commentButton = element(By.xpath("(//span[contains(text(),'Comment')]//parent::button)[1]"));
        this.p_nameAbbreviation = element(By.xpath("//p[contains(text(),'JJ')]"));
        this.p_fullName = element(By.xpath("(//h3[@class='comment-author'])[1]"));
        this.p_loadMoreComments = element(By.xpath("(//span[contains(text(),' Load More Comments ')])"));
        this.p_replyButton = element(By.xpath("(//span[contains(text(),'Reply')]//parent::button//parent::div//parent::div//child::span[contains(text(),'Reply')])[1]"));
        this.p_writeACommentTextBoxJJ = element(By.xpath("(//h3[contains(text(),'Joe Jones')]//following::div//child::input[@ng-reflect-placeholder='Write a comment...'])[1]"));
        this.p_commentButtonJJ = element(By.xpath("(//h3[contains(text(),'Joe Jones')]//following::div//child::button//child::span[contains(text(),'Comment')]//parent::button)[1]"));
        this.p_continueButton = element(By.xpath("//span[contains(text(),'Continue')]"));
    }
}