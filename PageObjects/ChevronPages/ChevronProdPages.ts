 import { ElementFinder, By, element, ElementArrayFinder } from "protractor";


 
export class ParticipantAssessment{
    learningPath:ElementFinder;
    startBtn:ElementFinder;
    pageTitle:ElementFinder;
    fullName:ElementFinder;
    emailTextBox:ElementFinder;
    emailField:ElementFinder;
    continueBtn:ElementFinder;
    pwdField:ElementFinder;
    loginBtn:ElementFinder;
    drpdn1:ElementFinder;
    drpdn2:ElementFinder;
    drpdn3:ElementFinder;
    pgTitle1:ElementFinder;
    pgTitle2:ElementFinder;
    pageTitleOfAssessment:ElementFinder;
    panel_1:ElementFinder;
    panel_2:ElementFinder;
    panel_3:ElementFinder;
    panel_4:ElementFinder;
    journeyDropdown:ElementFinder;
    selectOption:ElementFinder;
    TranscriptionPanel:ElementFinder;
    tabName1:ElementFinder;
    tabName2:ElementFinder;
    tabName3:ElementFinder;
    tabName4:ElementFinder;
    imageName:ElementFinder;
    TranscriptPanel: ElementFinder;
    CompetitivePanel:ElementFinder;
    pageTitle1:ElementFinder;
    pageTitle2:ElementFinder;
    pageTitle3:ElementFinder;
    pageTitle4:ElementFinder;
    pageTitle5:ElementFinder;
    pageTitle5_1:ElementFinder;
    pageTitle6:ElementFinder;
    pageTitle7:ElementFinder;
    pageTitle8:ElementFinder;
    pageTitle9:ElementFinder;
    pageTitle10:ElementFinder;
    pageTitle11:ElementFinder;
    pageTitle12:ElementFinder;
    pageTitle13:ElementFinder;
    pageTitle14:ElementFinder;
    pageTitle15:ElementFinder;
    pageTitle16:ElementFinder;
    pageTitle17:ElementFinder;
    pageTitle18:ElementFinder;
    pageTitle19:ElementFinder;
    pageTitle20:ElementFinder;
    pageTitle21:ElementFinder;
    pageTitle22:ElementFinder;
    pageTitle23:ElementFinder;
    pageTitle24:ElementFinder;
    pageTitle25:ElementFinder;
    pageTitle26:ElementFinder;
    pageTitle27:ElementFinder;
    pageTitle28:ElementFinder;
    pageTitle29:ElementFinder;
    pageTitle30:ElementFinder;
    pageTitle31:ElementFinder;
    pageTitle32:ElementFinder;
    pageTitle33:ElementFinder;
    pageTitle34:ElementFinder;
    pageTitle35:ElementFinder;
    pageTitle36:ElementFinder;
    pageTitle37:ElementFinder;
    pageTitle38:ElementFinder;
    pageTitle39:ElementFinder;
    pageTitle40:ElementFinder;
    pageTitle41:ElementFinder;
    pageTitle42:ElementFinder;
    pageTitle43:ElementFinder;
    pageTitle44:ElementFinder;
    pageTitle45:ElementFinder;
    pageTitle46:ElementFinder;
    pageTitle47:ElementFinder;
    pageTitle48:ElementFinder;
    pageTitle49:ElementFinder;
    commentBox:ElementFinder;
    commentBtn:ElementFinder;
    commentText:ElementFinder;
    goToNextStageBtn:ElementFinder;
    goToNextModuleBtn:ElementFinder;
    goToNextModuleBtn_s3:ElementFinder;
    goToNextModuleBtn_s4:ElementFinder;
    goToNextModuleBtn_s5:ElementFinder;
    pgTitle:ElementFinder;




    constructor(){
        
        this.emailField= element(By.xpath('//input[@id="userEmail"]'))
        this.pwdField= element(By.xpath('//input[@id="password"]'))
        this.loginBtn= element(By.xpath('//button[@id="btnLogin"]'))

        this.fullName = element(By.xpath('//div[@id="fullname"]'))
        this.emailTextBox= element(By.xpath('//div[@id="email"]'))

        this.drpdn1 = element(By.xpath('//select[@name="Tenure with Chevron"]'))
        this.drpdn2 = element(By.xpath('//select[@name="Region"]'))
        this.drpdn3 = element(By.xpath('//select[@name="Role"]'))
        
        this.learningPath= element(By.xpath('//span[contains(text(),"My Learning Path")]'))
        this.startBtn= element(By.xpath('//span[@class="plugin-common__btn-start__text"]'))
        this.pageTitle = element(By.xpath('//h1[@class="co__page__title ng-star-inserted"]'))     
        this.continueBtn = element(By.xpath('//span[@class="plugin-common__btn-continue__text"]'))
        this.pgTitle1 = element(By.xpath('//h1[@class="plugin-activity__module-title"]')) 
        this.pgTitle2 = element(By.xpath('//h2[@class="plugin-activity-subtitle ng-star-inserted"]')) 
        this.pageTitleOfAssessment = element(By.xpath('//h3[@class="co__page__title ng-star-inserted"]')) 
        this.panel_1 = element(By.xpath('//mat-expansion-panel-header[@id="mat-expansion-panel-header-0"]'))
        this.panel_2 = element(By.xpath('//mat-expansion-panel-header[@id="mat-expansion-panel-header-1"]'))
        this.panel_3 = element(By.xpath('//mat-expansion-panel-header[@id="mat-expansion-panel-header-2"]'))
        this.panel_4 = element(By.xpath('//mat-expansion-panel-header[@id="mat-expansion-panel-header-3"]'))
        this.journeyDropdown= element(By.xpath('//div[@class="mat-form-field-infix"]'))
        this.selectOption = element(By.xpath('//*[@id="mat-input-5"]/option[3]'))
        //this.selectOption = element(By.xpath('//option[contains(text(),"Aspiring Leader Learning Path")]'))
        this.TranscriptionPanel = element(By.xpath('//p[contains(text(),"Transcription")]'))                                               
        this.tabName1 = element(By.xpath('//div[contains(text(),"align and inspire")]'))
        this.tabName2 = element(By.xpath('//div[contains(text(),"build relationships")]'))
        this.tabName3 = element(By.xpath('//div[contains(text(),"grow capabilities")]'))
        this.tabName4 = element(By.xpath('//div[contains(text(),"deliver results")]'))
        this.imageName = element(By.xpath('//img[@class="img-small"]'))
        this.TranscriptPanel = element(By.xpath('//p[contains(text(),"Transcript")]'))
        this.CompetitivePanel = element(By.xpath('//h3[contains(text(),"Competitive Performance")]'))
        this.pageTitle1 = element(By.xpath('//span[contains(text(),"Explore your learning path as an aspiring leader!")]'))
        this.pageTitle2 = element(By.xpath('//span[contains(text(),"Our reality")]'))
        this.pageTitle3 = element(By.xpath('//span[contains(text(),"So as an aspiring leader, what does this all mean to you?")]'))
        this.pageTitle4 = element(By.xpath('//p[contains(text(),"People are our greatest asset, which is why we hop")]'))
        this.pageTitle5 = element(By.xpath('//h3'))
        this.pageTitle5_1 = element(By.xpath('//h3'))
        this.pageTitle6 = element(By.xpath('//h3'))
        this.pageTitle7 = element(By.xpath('//h3'))
        this.pageTitle8 = element(By.xpath('//h3'))
        this.pageTitle9 = element(By.xpath('//h3'))
        this.pageTitle10 = element(By.xpath('//h3'))
        this.pageTitle11 = element(By.xpath('//p[contains(text(),"Congratulations! You have completed this learning")]'))
        this.pageTitle12 = element(By.xpath('//span[contains(text(),"Lead with your own sense of intent and model the C")]'))
        this.pageTitle13 = element(By.xpath('//h3'))
        this.pageTitle14 = element(By.xpath('//h3'))
        this.pageTitle15 = element(By.xpath('//span[contains(text(),"Self-awareness is the first step in becoming a lea")]'))
        this.pageTitle16 = element(By.xpath('//strong[contains(text(),"Becoming a leader who can align and inspire")]'))
        this.pageTitle17 = element(By.xpath('//h3'))
        this.pageTitle18 = element(By.xpath('//h3'))
        this.pageTitle19 = element(By.xpath('//h3[@class="plugin-single__title activity__title"]'))
        this.pageTitle20 = element(By.xpath('//h3'))
        this.pageTitle21 = element(By.xpath('//h3'))
        this.pageTitle22 = element(By.xpath('//span[contains(text(),"Core values guide everything one does.")]'))
        this.pageTitle23 = element(By.xpath('//strong[contains(text(),"Think of the people who inspire you the most...")]'))
        this.pageTitle24 = element(By.xpath('//h3'))
        this.pageTitle25 = element(By.xpath('//h3'))
        this.pageTitle26 = element(By.xpath('//h3'))
        this.pageTitle27 = element(By.xpath('//h3'))
        this.pageTitle28 = element(By.xpath('//h3'))
        this.pageTitle29 = element(By.xpath('//h3'))
        this.pageTitle30 = element(By.xpath('//h3'))
        this.pageTitle31 = element(By.xpath('//h3'))
        this.pageTitle32 = element(By.xpath('//h3'))
        this.pageTitle33 = element(By.xpath('//h3'))
        this.pageTitle34 = element(By.xpath('//h3'))
        this.pageTitle35 = element(By.xpath('//h3'))
        this.pageTitle36 = element(By.xpath('//h3'))
        this.pageTitle37 = element(By.xpath('//h3'))
        this.pageTitle38 = element(By.xpath('//h3'))
        this.pageTitle39 = element(By.xpath('//h3'))
        this.pageTitle40 = element(By.xpath('//h3'))
        this.pageTitle41 = element(By.xpath('//h3'))
        this.pageTitle42 = element(By.xpath('//h3'))
        this.pageTitle43 = element(By.xpath('//h3'))
        this.pageTitle44 = element(By.xpath('//h3'))
        this.pageTitle45 = element(By.xpath('//h3'))
        this.pageTitle46 = element(By.xpath('//h3'))
        this.pageTitle47 = element(By.xpath('//h3'))
        this.pageTitle48 = element(By.xpath('//h3'))
        this.pageTitle49 = element(By.xpath('//span[contains(text(),"Interested in exploring align and inspire even fur")]'))
        this.commentBox = element(By.xpath('//input[@aria-label="Enter your comment"]'))
        this.commentBtn = element(By.xpath('//div[@class="comment-field"]//span[@class="mat-button-wrapper"][contains(text(),"Comment")]'))
        this.commentText = element(By.xpath('//p[contains(text(),"this is nice one")]'))
        this.goToNextStageBtn = element(By.xpath('//*[contains(text(),"Go to Next Stage")]'))
        this.goToNextModuleBtn = element(By.xpath('//button[@name="Go to Next Season"]'))
        this.goToNextModuleBtn_s3 = element(By.xpath('//span[contains(text(),"Go to Next Module")]'))
        this.goToNextModuleBtn_s4 = element(By.xpath('//button[@name="Go to Next Season"]'))
        this.goToNextModuleBtn_s5 = element(By.xpath('//span[contains(text(),"Go to Next Stage")]'))
        this.pgTitle = element(By.xpath('//h2[@class="plugin-module-title ng-star-inserted"]'))

    }


}






