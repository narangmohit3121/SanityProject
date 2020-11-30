import { ElementFinder, ElementArrayFinder, element, By } from "protractor";

export class ShareableLinkBlockPageLocate {
    
    
    Sprint20Fld:ElementFinder
    ShareableCnt:ElementFinder
    contentTypedd:ElementFinder
    shareableToggleBtn:ElementFinder
    contentTab:ElementFinder
    contentBlk:ElementFinder
    editContentLnk:ElementFinder
    addContentTxt:ElementFinder
    okBtn:ElementFinder
// we take saveDraft and publish code from scoring 

// second content
   shareableLinkBlockCnt:ElementFinder
   shareLinkBlk:ElementFinder
   editShareLinkBlockLnk:ElementFinder
   contentObjectdd:ElementFinder
   ActiveDaysTxt:ElementFinder
   OkBtn2:ElementFinder
   AutomationDoNotDeleteLnk:ElementFinder
   AutomationJourneyManshaJrn:ElementFinder

   threeDotsOf1AModule:ElementFinder
   addActivityButton:ElementFinder
   activityDDArrow:ElementFinder
   newActivityAddButton:ElementFinder
   newActivityTitleTxt:ElementFinder
   activityDescTxt:ElementFinder
   newActivitySAVEBtn:ElementFinder
   journeySAVEBtn:ElementFinder
   journeyPUBLISHBtn:ElementFinder
   toastMessageSuccess:ElementFinder
   shareLinkActivity:ElementFinder
   ThreeDotsshareLinkActivity:ElementFinder
   petronasLbl:ElementFinder
   searchCollectionTxt:ElementFinder
   automationDoNotDeleteLnk:ElementFinder
   sprint20Folder:ElementFinder
   ShareLinkBolckManshacontentSelectBtn:ElementFinder
   startBtn:ElementFinder
   shareableLinkName:ElementFinder
   expiryDays:ElementFinder
   CopyshareLinkBlock:ElementFinder
   expiredlinktextdescription:ElementFinder
    ShareableCnt2: ElementFinder;
    openInANewWindowLink: ElementFinder;
    contentsCreated: ElementArrayFinder;
    menuContentsCreated: ElementFinder;
    deleteBtn: ElementFinder;
    confirmDeleteContent: ElementFinder;
    contentTextInLink: ElementFinder;

    
 
    constructor() {

        this.Sprint20Fld = element(By.xpath("//p[contains(text(),'Sprint 20')]"));
        this.ShareableCnt = element(By.xpath("//p[contains(text(),'ShareableContentBlockManshaContent')]"));
        this.ShareableCnt2 = element(By.xpath("//p[contains(text(),'ShareLinkBlockManshaContent2')]"));
        this.contentTypedd = element(By.xpath("//select[@name='type']"));
        this.shareableToggleBtn = element(By.xpath("//mat-slide-toggle[contains(@name,'Shareable')]//label"));
        this.contentTab = element(By.xpath("//div[@class='mat-tab-label-content'][contains(text(),'Content')]"));
        this.contentBlk = element(By.xpath("//div[contains(text(),'Content') and not(contains(text(),'Nested'))]/ancestor::mat-list-item/div"));
        this.editContentLnk = element(By.xpath("//button[contains(text(),'Edit Content')]"));
        this.addContentTxt = element(By.xpath("//div[@class='fr-element fr-view']/p[1]"));
       // this.addContentTxt = element(By.xpath("(//p)[7]"));
        this.okBtn = element(By.xpath("//button[@class='btn-common btn-fill']"));

       // we take saveDraft and publish code from scoring 
       // second content
     //  this.shareableLinkBlockCnt = element(By.xpath("//mat-card[2]//i[@class='author-icon icon-content master-collection__card--journey ng-star-inserted']"));
       this.shareableLinkBlockCnt = element(By.xpath("//mat-card[1]//div[@class='master-collection__contentalign']/div[contains(.,'ShareLinkBolckManshacontent')]"));
       this.shareLinkBlk = element(By.xpath("//mat-list-item[21]/div[@class='mat-list-item-content']"));
       this.editShareLinkBlockLnk = element(By.xpath("//button[contains(text(),'Edit Share')]"));
      // this.contentObjectdd = element(By.xpath("//select[@name='type']"));
       this.contentObjectdd = element(By.xpath("//select[@name='content-object']"));
       
       this.ActiveDaysTxt = element(By.xpath("//input[@name='activeDays']"));
       this.OkBtn2 = element(By.xpath("(//button[@name='Ok'])[1]"));
       this.AutomationDoNotDeleteLnk = element(By.xpath("//mat-tree//div[contains(text(),'Automation Folder')]"));
       this.AutomationJourneyManshaJrn = element(By.xpath("//p[text()='Automation Journey Mansha']/.."));      
        

        this.threeDotsOf1AModule = element(By.xpath("//p[contains(text(),'1A Module')]/ancestor::mat-expansion-panel-header//button[contains(@name,'menu')]"));

        this.addActivityButton = element(By.xpath("//button[@name='add-activity']"));

        this.activityDDArrow = element(By.xpath("//div[@class='mat-select-arrow']"));

       // this.newActivityAddButton = element(By.xpath("//div[@class='mat-select-arrow']"));

        this.newActivityTitleTxt = element(By.xpath("//input[@name='activity title']"));

        this.activityDescTxt = element(By.xpath("//textarea[@name='activity-description']"));

       // this.newActivitySAVEBtn = element(By.xpath("//button[@class='btn-common btn-fill']"));

        this.newActivitySAVEBtn = element(By.xpath("(//button[@name='journey-save'])[2]"));

        this.journeySAVEBtn = element(By.xpath("//button[@name='save']"));

        this.journeyPUBLISHBtn = element(By.xpath("//button[@name='publish']"));

        this.toastMessageSuccess = element(By.xpath("//div[@id='toast-container']"));

        this.shareLinkActivity = element(By.xpath("//p[contains(.,'ShareLinkActivity')]"));

        this.ThreeDotsshareLinkActivity = element(By.xpath("(//i[@class='author-icon icon-dots master-collection__icon'])[3]"));

        this.petronasLbl = element(By.xpath("(//div[@class='mat-tab-label-content'])[4]"));

        this.searchCollectionTxt = element(By.xpath("//input[@name='Search Collection']"));

        this.automationDoNotDeleteLnk = element(By.xpath("//span[contains(.,'Automation Folder_DONOT DELETE')]"));

        this.sprint20Folder = element(By.xpath("//span[contains(.,'Sprint 20')]"));

        this.ShareLinkBolckManshacontentSelectBtn = element(By.xpath("//div[@class='link-activity__content-block']/div[2]//button[@name='select activity']"));
        
        this.startBtn = element(By.xpath("//span[@class='plugin-common__btn-start__text']"));

        this.shareableLinkName = element(By.xpath("//mat-card-title[contains(@class,'mat-card-title')]"));

        this.expiryDays = element(By.xpath("//mat-card-content//p"));

        this.CopyshareLinkBlock = element(By.xpath("//button[@name='copy-share-link']/span[@class='mat-button-wrapper']/span[.='Copy Share Link']"));
        this.openInANewWindowLink = element(By.css("button[name*='open'][name*='window']"));

        this.expiredlinktextdescription = element(By.xpath("//img/following-sibling::p"));
        this.contentTextInLink = element(By.css("div[class*='text__container'] p"));
        this.contentsCreated = element.all(By.xpath("//p[contains(text(),'ManshaContent')]/ancestor::a[contains(@name,'content details')]//button[@name='menu']"));
        this.menuContentsCreated = element(By.xpath("(//p[contains(text(),'ManshaContent')]/ancestor::a[contains(@name,'content details')]//button[@name='menu'])[1]"));
        this.deleteBtn = element(By.css("button[name = 'delete']"));
        this.confirmDeleteContent = element(By.css("mat-dialog-container button[name='Delete']"));
    }
}