import {  ElementFinder, element, By} from "protractor";

export class completionBadgesPageLocate{
    tabProgressScoring:ElementFinder;
    tglMyProgress:ElementFinder;
    tglCompletionPercentMeter:ElementFinder;
    tglMyPoint:ElementFinder;
    tglTopPoint:ElementFinder;
    tglAverage:ElementFinder;
    radiobtnCohort:ElementFinder;
    tglMyAccomplishment:ElementFinder;
    btnAddAccomplishment:ElementFinder;
    txtInputBadgeId:ElementFinder;
    txtInputAccomplishmentTitle:ElementFinder;
    ddCompletionTrigger:ElementFinder;
    ddCTActvty1:ElementFinder;
    ddCTStage1:ElementFinder;
    ddCTStage2:ElementFinder;
    btnSaveAccomplishment: ElementFinder;
    icnEditCB1: ElementFinder;
    icnEditCB2:ElementFinder;
    icnDeleteCB1:ElementFinder;
    icnDeleteCB2:ElementFinder;
    btnDeletePopupCB:ElementFinder;
    headerHomePage:ElementFinder;
    headerMyProgress:ElementFinder;
    headerPercentageBar:ElementFinder;
    headerMyPoints:ElementFinder;
    headerTopPoints:ElementFinder
    headerAveragePoints:ElementFinder;
    headerMyAccomplishment:ElementFinder;
    valueMyPoints:ElementFinder;
    valueTopPoints:ElementFinder;
    valueAveragePoints:ElementFinder;
    myPointsaftrJCmpltd:ElementFinder;
    topPointsaftrJCmpltd:ElementFinder;
    avgPointsaftrJCmpltd:ElementFinder;
    imgNotAwarededCB1:ElementFinder;
    imgNotAwarededCB2:ElementFinder;
    imgAwardedCB1:ElementFinder;
    imgAwaredeCB2:ElementFinder;
    btnStartAcvt:ElementFinder;
    btnCntNxtAcvt:ElementFinder;
    btnGoToNxtModule:ElementFinder;
    btnGotoNxtStage:ElementFinder;
    txtJrnyCmplMsg:ElementFinder;
    btnHomePage:ElementFinder;
    //---------------------Browse Image
    btnBrowseNA:ElementFinder;
    btnBrowseA:ElementFinder;
    icnMediaFolder:ElementFinder;
    imgNotAwardedSG:ElementFinder;
    imgAwardedSG:ElementFinder;
    imgNotAwardedSS:ElementFinder;
    imgAwardedSS:ElementFinder;
    btnInsertImg:ElementFinder;
    selectSize:ElementFinder;




    constructor(){
        this.tabProgressScoring = element(By.xpath("//div[contains(text(),'Progress & Scoring')]"));
        this.tglMyProgress = element(By.xpath("//mat-slide-toggle[@name='progressAndScoringEnabled']"));
        this.tglCompletionPercentMeter =element(By.xpath("//mat-slide-toggle[@name='completionPercentMeter']"));
        this.tglMyPoint = element(By.xpath("//mat-slide-toggle[@name='myPoints']"));
        this.tglTopPoint = element(By.xpath("//mat-slide-toggle[@name='topPoints']"));
        this.tglAverage = element(By.xpath("//mat-slide-toggle[@name='average']"));
        this.radiobtnCohort = element(By.xpath("//mat-radio-button[@name='Cohort']"));
        this.tglMyAccomplishment = element(By.xpath("//mat-slide-toggle[@name='myAccomplishments']"));
        this.btnAddAccomplishment = element(By.xpath("//button[@class='add-accomplishment-btn']"));
        this.txtInputBadgeId = element(By.xpath("//input[@name='Accomplishment Badge Id']"));
        this.txtInputAccomplishmentTitle = element(By.xpath("//input[@name='Accomplishment Title']"));
        this.ddCompletionTrigger = element(By.xpath("//span[contains(text(),'Not Selected')]"));
        this.ddCTActvty1 = element(By.xpath("//span[contains(text(),'Completion_Badge_Activity1')]"));
        this.ddCTStage1 = element(By.xpath("//button[contains(text(),'Completion_Badge_Stage1')]"));
        this.ddCTStage2 = element(By.xpath("//button[contains(text(),'Completion_Badge_Stage2')]"));
        this.btnSaveAccomplishment = element(By.xpath("//div[@class='block-submit text-right']/button[contains(text(),'SAVE')]"));
        this.icnEditCB1 = element(By.xpath("//div[contains(text(),'Completion Badge 1')]/ancestor::tr//i[contains(@class,'author-icon icon-edit')]"));
        this.icnEditCB2 = element(By.xpath("//div[contains(text(),'Completion Badge 2')]/ancestor::tr//i[contains(@class,'author-icon icon-edit')]"));
        this.icnDeleteCB1 = element(By.xpath("//div[contains(text(),'Completion Badge 1')]/ancestor::tr//i[contains(@class,'author-icon icon-delete')]"));
        this.icnDeleteCB2 = element(By.xpath("//div[contains(text(),'Completion Badge 2')]/ancestor::tr//i[contains(@class,'author-icon icon-delete')]"));
        this.btnDeletePopupCB = element(By.xpath("//button[contains(text(),'Delete')]"));
        this.headerHomePage = element(By.xpath("//h1[contains(text(),'Get started')]"));
        this.headerMyProgress = element(By.xpath("//h1[contains(text(),'My progress')]"));
        this.headerPercentageBar = element(By.xpath("//h2[contains(text(),'of your journey complete')]"));
        this.headerMyPoints = element(By.xpath("//span[contains(text(),'My points')]"));
        this.headerTopPoints = element(By.xpath("//span[contains(text(),'Top points')]"));
        this.headerAveragePoints = element(By.xpath("//span[contains(text(),'Average points')]"));
        this.headerMyAccomplishment = element(By.xpath("//h2[contains(text(),'My accomplishments')]"));
        this.valueMyPoints = element(By.xpath("//div[@class='weight-600 board-item__three d-flex']"));
        this.valueTopPoints = element(By.xpath("(//div[@class='weight-600 board-item__three'])[1]"));
        this.valueAveragePoints = element(By.xpath("(//div[@class='weight-600 board-item__three'])[2]"));
        this.imgNotAwarededCB1 = element(By.xpath("//img[@src='https://momentacontenttest.btsmomenta.com/uploads/d9a50799-8612-406f-9731-ea4822da45da.svg']"));
        this.imgAwardedCB1 = element(By.xpath("//img[@src='https://momentacontenttest.btsmomenta.com/uploads/b24b2ee0-6df9-47ef-bcc7-1d7e78a54f7c.svg']"));
        this.imgNotAwarededCB2 = element(By.xpath("//img[@src='https://momentacontenttest.btsmomenta.com/uploads/a0d1ee9f-12a8-499f-b3c5-394f5cac3e66.svg']"));
        this.imgAwaredeCB2 = element(By.xpath("//img[@src='https://momentacontenttest.btsmomenta.com/uploads/a4fb8a5f-4941-4e53-a5c1-a109b0299a9f.svg']"));
        this.btnStartAcvt = element(By.xpath("//button[@aria-label='Current Status Start']"));
        this.btnCntNxtAcvt = element(By.xpath("//span[contains(text(),'Continue')]"));
        this.btnGoToNxtModule = element(By.xpath("//button[@aria-label='Go to Next Module']"));
        this.btnGotoNxtStage = element(By.xpath("//button[@name='Go to Next Stage']"));
        this.txtJrnyCmplMsg = element(By.xpath("//p[contains(text(),'Congratulations, you’ve successfully completed this module of your journey.')]"));
        this.btnHomePage = element(By.xpath("//a[@aria-label='Home']"));
        //---------------------Browse Image
        this.btnBrowseNA = element(By.xpath("//div[@class='add-badge__notawarded']/child::div/child::button[text()='Browse']"));
        this.btnBrowseA = element(By.xpath("//div[@class='add-badge__awarded']/child::div/child::button[text()='Browse']"));
        this.icnMediaFolder = element(By.xpath("//mat-icon[contains(text(),'folder')]"));
        this.selectSize = element(By.xpath("//select[@name='Select image size']/child::option[@value='img-small']"));
        this.imgNotAwardedSG = element(By.xpath("//img[@alt='star gold not awarded']"));
        this.imgAwardedSG = element(By.xpath("//img[@alt='Star gold awarded']"));
        this.imgNotAwardedSS = element(By.xpath("//img[@alt='star silver not awarded']"));
        this.imgAwardedSS = element(By.xpath("//img[@alt='star silver awarded']"));
        this.btnInsertImg = element(By.xpath("//button[text()=' Insert image ']"));
        
    }
}