import { When, Then } from "cucumber";
import { browser, protractor, element, By, ElementFinder } from "protractor";
import { async } from "q";
import chai = require('chai');



export class MyInsightPageLocate {

    configureClientBtn:ElementFinder;
    rightsideArrow:ElementFinder;
    myInsightsLbl:ElementFinder;
    enableMyInsightsLbl:ElementFinder;
    myInsightsExportTemplatLnke:ElementFinder;
    cancelBtn:ElementFinder;
    enableMyInsightToggleBtn:ElementFinder
    fileUploadTab:ElementFinder
    attchedFileIconWithText:ElementFinder
    saveBtn:ElementFinder
    myInsightInLeftPanenlWithEyeIcon:ElementFinder
    noInsightsAvailable:ElementFinder;
    homeIcon:ElementFinder;
    startBtn:ElementFinder;
    addInsighttBtn:ElementFinder;
    addInsighttEditorTxt:ElementFinder;
    insightSaveBtn:ElementFinder;
    oneActivityinsightText:ElementFinder;
    deleteBtn:ElementFinder;


    oneActivityResumeBtn:ElementFinder;
    editBtn:ElementFinder;
    updateInsightEditorTxtfield:ElementFinder;
    EditedOneActivityInsighttTxt:ElementFinder;
    YesDeleteBtn:ElementFinder;

    insightOneLbl:ElementFinder;

    ContinueButtonOfActivityBtn:ElementFinder;

    firstActivityInsight:ElementFinder;
    secondtActivityInsight:ElementFinder;
    threeActivityInsight:ElementFinder;
    filterInsightTxt:ElementFinder;

    ToggleTxt:ElementFinder;


    constructor() {
        this.configureClientBtn = element(By.xpath("//button[@name='Configure Client']"));
        this.rightsideArrow = element(By.xpath("(//div[@class='mat-tab-header-pagination-chevron'])[4]"));
        this.myInsightsLbl = element(By.xpath("(//div[@class='mat-tab-label-content'])[11]"));
        this.enableMyInsightsLbl = element(By.xpath("//label[.='Enable My Insights']"));
        this.myInsightsExportTemplatLnke = element(By.xpath("//a[contains(text(),'My Insights Export Template')]"));
        this.cancelBtn = element(By.xpath("//button[@name='cancel']"));
        this.enableMyInsightToggleBtn = element(By.xpath("//div[@class='mat-slide-toggle-thumb']"));

      //  this.fileUploadTab = element(By.xpath("//input[@name='upload file']"));
        this.fileUploadTab = element(By.xpath("//input[@type='file' and @accept='doc,.docx']"));
        
        this.attchedFileIconWithText = element(By.xpath("//input[@id='file-name-input']"));
        this.myInsightInLeftPanenlWithEyeIcon = element(By.xpath("(//span[contains(.,'My Insights')])[1]"));
       
       this.saveBtn = element(By.xpath("//button[@name='save']"));
       this.noInsightsAvailable = element(By.xpath("//div[@class='no-content ng-star-inserted']"));
       this.homeIcon = element(By.xpath("//a[2]//span[@class='plugin-sidenav__item-text']"));
       this.startBtn = element(By.xpath("//span[@class='plugin-common__btn-start__text']"));
       this.addInsighttBtn = element(By.xpath("//button[@name='Add an Insight']"));
       this.addInsighttEditorTxt = element(By.xpath("//div[@class='fr-element fr-view']/p[1]"));
      
     //   this.addInsighttEditorTxt = element(By.xpath("//span[@class='fr-placeholder']"));
     //  this.addInsighttEditorTxt = element(By.xpath("//div[@role='application']"));
  //     this.addInsighttEditorTxt = element(By.xpath("//div[@class='fr-element fr-view']//p"));
       this.insightSaveBtn = element(By.xpath("//button[@name='Save Insight']"));
       this.oneActivityinsightText = element(By.xpath("//p[.='This is first insight in automation test for momenta of sanity test.']"));


      // Edit Insight 
       this.oneActivityResumeBtn = element(By.xpath("//span[@class='plugin-common__btn-start__text']"));
       this.editBtn = element(By.xpath("//button[@name='Edit insight']"));
       this.updateInsightEditorTxtfield = element(By.xpath("//div[@class='fr-element fr-view']/p[1]"));
       this.EditedOneActivityInsighttTxt = element(By.xpath("//div[@id='journey-insight']"));

       // Delete Insight 
       this.deleteBtn = element(By.xpath("//button[@name='Delete insight']"));
       this.YesDeleteBtn = element(By.xpath("//button[@name='Cancel']"));

       
       this.insightOneLbl = element(By.xpath("//mat-card[1]//div[@id='insight']"));

       //Add Insights for all Activities
       this.ContinueButtonOfActivityBtn = element(By.xpath("//span[@class='plugin-common__btn-continue__text']"));

       this.firstActivityInsight = element(By.xpath("//p[contains(text(),'This is first insight in automation test for momenta of sanity test.')]"));

       this.secondtActivityInsight = element(By.xpath("//p[contains(text(),'This is second insight for two activity in automation test for momenta of sanity test.')]"));

       this.threeActivityInsight = element(By.xpath("//p[contains(text(),'This is three insight for two activity in automation test for momenta of sanity test.')]"));

       this.filterInsightTxt = element(By.xpath("//input[@name='Filter Insights']"));

       this.ToggleTxt = element(By.xpath("//span[@class='ng-star-inserted']"));




       
    }
}