import { ElementFinder, By, element } from "protractor";

export class SearchUserAcrossJourneysPageLocate {

    searchUserTxt:ElementFinder;
    OneJourneyMapppedUser:ElementFinder;
    TwoJourneyMapppedUser:ElementFinder;
    JourneyName_1:ElementFinder;
    petronasLableNLogo:ElementFinder;
    DPA_status_Lbl:ElementFinder;
    OpenArrow:ElementFinder;
    DPAStatusNotApproved:ElementFinder;
    SearchUser_1Journey:ElementFinder;
    DPALabel:ElementFinder;
    DisableLabel:ElementFinder;
    DPAToggleBtn:ElementFinder;
    AcceptButtonTxt:ElementFinder;
    DeclineButtonTxt:ElementFinder;
    DeclineYESTxt:ElementFinder;
    DeclineNOTxt:ElementFinder;
    SAVEBtn:ElementFinder;
    LogOutBtn:ElementFinder;
    AcceptBtn:ElementFinder;
    DPA_Status_Availble:ElementFinder;



    constructor() {
                                            
        this.searchUserTxt = element(By.xpath("//input[@placeholder='Search Users']"));
        this.OneJourneyMapppedUser = element(By.xpath("//span[contains(text(),'Mansha Ansari - search_user_1_across_journey@petronas.com')]"));
        this.TwoJourneyMapppedUser = element(By.xpath("//span[contains(text(),'search user - search.user@bts.com')]"));
        this.JourneyName_1 = element(By.xpath("//h2[contains(text(),'SearchUserAcrossJourney_1')]"));
        this.petronasLableNLogo = element(By.xpath("(//img[@role='img'])[2]"));
        this.DPA_status_Lbl = element(By.xpath("//li[contains(text(),'DPA S')]"));
        this.OpenArrow = element(By.xpath("//i[contains(text(),'arrow_forward')]"));
        this.DPAStatusNotApproved = element(By.xpath("//div[@class='user-edit-row dpa']"));
        this.SearchUser_1Journey = element(By.xpath("//p[contains(text(),'SearchUserAcrossJourney_1')]"));
        this.DPALabel = element(By.xpath("(//div[@class='mat-tab-label-content'])[7]"));
      //  this.DPAToggle = element(By.xpath("//input[@name='showFullJourneyName']"));
     //   this.DPAToggle = element(By.xpath("//mat-slide-toggle[@class='modal-common-toggle pull-right mat-slide-toggle mat-accent ng-valid ng-dirty ng-touched']"));
     
       this.DisableLabel = element(By.xpath("//span[contains(text(),'Disabled')]"));
       this.DPAToggleBtn = element(By.xpath("//div[@class='mat-slide-toggle-bar']"));
       this.AcceptButtonTxt = element(By.xpath("//input[@name='Accept button text']"));
       this.DeclineButtonTxt = element(By.xpath("//input[@name='Decline button text']"));

       this.DeclineYESTxt = element(By.xpath("//input[@class='mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-touched']"));
       this.DeclineNOTxt = element(By.xpath("(//input[@class='mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-touched'])[2]"));
       this.SAVEBtn = element(By.xpath("//button[contains(text(),'Publish')]")); 
       this.LogOutBtn = element(By.xpath("//button[@name='menu']"));
       this.AcceptBtn = element(By.xpath("//button[@name='Accept']"));

       this.DPA_Status_Availble = element(By.xpath("//p[contains(text(),'Available')]"));

       

    }

}