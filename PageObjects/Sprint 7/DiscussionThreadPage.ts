import { element, ElementFinder, ElementArrayFinder } from "protractor";
import { By } from "protractor";
import config from "../../StepDefinitions/config.json";
import sanityTestData from "../../SanityTestData.json";

export class DiscussionThreadPage {

    discussionThreadContent: ElementFinder;
    btnEditDiscussionThread: ElementFinder;
    txtDiscussThreadBlockId: ElementFinder;
    txtCommentButtonTxt:ElementFinder;
    txtCommentFieldLabel: ElementFinder;
    txtReplyLabel: ElementFinder;
    txtLoadMore: ElementFinder;
    txtNumberOfComments: ElementFinder;

    btnSubmitTopLevelComment:ElementFinder;
    txtCommentsLabel: ElementFinder;    
    txtEnterCommentsTopLevel: ElementFinder;
    commentsLabelContainer: ElementFinder;
    btnCommentsLabel:ElementFinder;
    txtPcptReplyComment: ElementFinder;
    commentBtnNameContainer: ElementFinder; 
    latestCommentContainter: ElementFinder;   

    txtCohortNextResponseLabel: ElementFinder;
    btnCohortResAddItem:ElementFinder;
    btnCohortResDeleteItem:ElementFinder;
    btnDiscussionThreadSave:ElementFinder;
           
    replyBtnLabelContainer: ElementFinder;
    btnReply: ElementFinder;
        
    btnRevisitModuleSprint7:ElementFinder;
    btnRevisitActivityDiscussion:ElementFinder;
    btnCancelEditDiscussion:ElementFinder;    
    btnCohortResSaveDraft:ElementFinder;
    btnExitEditor: ElementFinder;
    btnPublish: ElementFinder;              
    myJourneyPage: ElementFinder;
    btnPcptReplyComment: ElementFinder;
    btnSubmitReply: ElementFinder;
    btnContinueToNextActivity: ElementFinder;
    btnReply2: ElementFinder;
    
    txtPcptReplyTopComment: ElementFinder;
    viewRepliesOnLatestComment: ElementFinder;
    txtDiscussionThreadTitle: ElementFinder;
    
    

    constructor() {
        this.discussionThreadContent = element(By.xpath("//p[contains(text(),'Discussion Thread_Automation 2')]/../.."));
        this.btnEditDiscussionThread = element(By.xpath("//button[contains(text(),'Discussion Thread')]"));
        // this.txtDiscussThreadBlockId = element(By.xpath("//div[@class = 'modal-content']//input[@id='blockId']"));  
        // this.txtCommentButtonTxt = element(By.xpath("//div[@class = 'modal-content']//input[@placeholder='Comment button text']"));
        // //this.txtCommentButtonTxt = element(By.xpath("//div[@class = 'modal-content']//input[@placeholder='Comment button text']/.."));
        // this.txtCommentFieldLabel = element(By.xpath("//div[@class = 'modal-content']//input[@id='commentLabel']"));
        // this.txtReplyLabel = element(By.xpath("//div[@class = 'modal-content']//input[@id='replyText']"));
        // this.txtLoadMore = element(By.xpath("//div[@class = 'modal-content']//input[@id='loadText']"));
        // this.txtNumberOfComments = element(By.xpath("//div[@class = 'modal-content']//input[@id='pageLength']"));
        // this.txtCommentsLabel = element(By.xpath("//div[@class = 'modal-content']//input[@placeholder='Comments label text']"));
        this.txtDiscussThreadBlockId = element(By.xpath("//div[@class = 'cdk-overlay-pane']//input[@id='blockId']"));  
        this.txtDiscussionThreadTitle = element(By.xpath("//div[@class = 'cdk-overlay-pane']//input[@id='blockTitle']"));
        this.txtCommentFieldLabel = element(By.xpath("//div[@class = 'cdk-overlay-pane']//input[@id='commentLabel']"));
        this.txtReplyLabel = element(By.xpath("//div[@class = 'cdk-overlay-pane']//input[@id='replyText']"));
        this.txtLoadMore = element(By.xpath("//div[@class = 'cdk-overlay-pane']//input[@id='loadText']"));
        this.txtNumberOfComments = element(By.xpath("//div[@class = 'cdk-overlay-pane']//input[@id='pageLength']"));
        this.txtCommentsLabel = element(By.xpath("//div[@class = 'cdk-overlay-pane']//input[contains(@name,'Comments label')]"));

        this.btnRevisitModuleSprint7 = element(By.xpath("//*[contains(text(),'Automation_Mohit')]//ancestor::div[contains(@class,'_content')]//button[contains(@aria-label,'Sprint 7')]"));
        this.myJourneyPage = element(By.xpath("//span[text()='My Journey']//ancestor::a[@aria-label='My Journey']"));
        this.btnRevisitActivityDiscussion = element(By.xpath("//*[contains(text(),'Automation_Discussion')]//ancestor::div[contains(@class,'module__block')]//button[contains(@name,'start') or contains(@name,'Resume') or contains(@name,'Revisit')]"));

        this.txtEnterCommentsTopLevel = element(By.xpath("(//div[@class='comment-field']/mat-form-field//input)[1]"));
        this.btnSubmitTopLevelComment = element(By.xpath("(//div[@class='comment-field']/mat-form-field/following-sibling::button[contains(@class,'submit-btn')])[1]"));
        this.commentBtnNameContainer= element(By.xpath("(//div[@class='comment-field']/mat-form-field/following-sibling::button[contains(@class,'submit-btn')])[1]/span"));
        //this.replyBtnLabelContainer = element(By.xpath("//h3[contains(text(),'frname ltname ')]/following-sibling::div//button/span"));
        this.replyBtnLabelContainer = element(By.xpath("//div[contains(text(),'Mohit Narang')]/following-sibling::div//button/span"));
        this.btnReply = element(By.xpath("//div[contains(text(),'Mohit Narang')]/following-sibling::div//button"));
        //this.btnReply = element(By.xpath("//h3[contains(text(),'frname ltname ')]/following-sibling::div//button"));
        this.btnReply2 = element(By.xpath("//div[contains(text(),'Mohit Narang')]/..//div[contains(@class,'comment-count')]"));
        this.txtPcptReplyComment = element(By.xpath("//div[contains(text(),'Mohit Narang')]/following::div[@class='comment-reply__field']//input"));
        this.txtPcptReplyTopComment = element(By.xpath("(//input[@name='Enter your comment'])[2]"));
        this.btnPcptReplyComment = element(By.xpath("//div[contains(text(),'Mohit Narang')]/following::button[contains(@class,'comment-reply')]"));
        //this.btnSubmitReply = element(By.xpath("//div[contains(text(),'')]/following::div[@class='comment-reply__field']//button[@ng-reflect-disabled = 'false']"));
        this.btnSubmitReply = element(By.xpath("//button[contains(@class,'submit-btn') and (@ng-reflect-disabled = 'disabled' or @ng-reflect-disabled='false') and not(@disabled)]"));
        this.commentsLabelContainer = element(By.xpath("(//div[contains(text(),'Mohit Narang')]/following-sibling::div//span[@class='comment-count']/following-sibling::span)[1]"));
        //this.commentsLabelContainer = element(By.xpath("(//h3[contains(text(),'frname ltname ')]/following-sibling::div//span[@class='comment-count']/following-sibling::span)[1]"));
        this.btnCommentsLabel = element(By.xpath("(//h3[contains(text(),'frname ltname ')]/following-sibling::div//div[contains(@class,'comment-count')])[1]"));
        this.viewRepliesOnLatestComment = element(By.xpath("//span[@class = 'comment-count'][1]/../.."));
        this.latestCommentContainter = element(By.xpath("(//div[@class = 'comment-author' and contains(text(),'Automation')]/following-sibling::p)[1]"));
       
        //this.btnCohortResAddItem = element(By.xpath("//mat-label[contains(text(),'Show Excerise Label')]/../following-sibling::button"));
        this.btnContinueToNextActivity = element(By.xpath("//button[@name='Continue to Next Activity']"));
        this.btnDiscussionThreadSave = element(By.xpath("//div[@class = 'cdk-overlay-pane']//button[@name='done']"));        
        this.txtCommentButtonTxt = element(By.xpath("//mat-label[contains(text(),'Comment button text')]/preceding::input[@id = 'commentText']"));        
        this.btnCancelEditDiscussion = element(By.xpath("//mat-dialog-container//div[contains(@class,'submit')]/button[@name='cancel']"));
        this.btnCohortResSaveDraft = element(By.xpath("//span[contains(text(),'SAVE DRAFT')]/.."));
        this.btnExitEditor = element(By.xpath("//span[contains(text(),'EXIT EDITOR')]/.."));
        this.btnPublish = element(By.xpath("//span[contains(text(),'PUBLISH ')]/.."));    
        
        if(config.suiteType == "sanity"){
            //this.sampleContent = element(By.xpath("//p[contains(text(),'Test Activity_MN')]/../.."));
            this.discussionThreadContent = element(By.xpath(`//p[contains(text(),'${sanityTestData.discussionThreadBlock}')]/../..`));     
        }       
    }
}