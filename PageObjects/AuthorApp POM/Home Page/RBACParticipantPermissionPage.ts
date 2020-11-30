import { ElementFinder, ElementArrayFinder, By, element } from "protractor";

export class RBACParticipantPermissionLocate {
    ParticipantPermissionBtn:ElementFinder

    
    ManagePermissionBtn:ElementFinder;
    ParticipantCheckBox:ElementFinder;
    ViewAssessmentReportsChckIcon:ElementFinder;
    ReadDiscussionsChckIcon:ElementFinder;
    EditDiscussionsChckIcon:ElementFinder;

    ReportReviewerCheckBox:ElementFinder;
    SponsordashboardCheckBox:ElementFinder;
    ParticipantTeamLeadCheckBox:ElementFinder;
    ModeratediscussionsCheckBox:ElementFinder;
    TestUserCheckBox:ElementFinder;
    UATUserCheckBox:ElementFinder;
    FacilitatorCheckBox:ElementFinder;
    FacilitatorPermissionCheckBox:ElementFinder;


    constructor() {

    this.ParticipantPermissionBtn = element(By.xpath("(//div[@class='mat-tab-label-content'])[6]"));
    this.ParticipantCheckBox = element(By.xpath("(//div[@class='mat-checkbox-inner-container'])[1]")); 

    this.ViewAssessmentReportsChckIcon = element(By.xpath("(//i[contains(text(),'Will be able to view the assessment reports linked to a journey')]//following::mat-icon)[1]"));
    this.ReadDiscussionsChckIcon = element(By.xpath("(//i[contains(text(),'Will be able to read the discussions')]//following::mat-icon)[1]"));
    this.EditDiscussionsChckIcon = element(By.xpath("(//i[contains(text(),'Will be able to edit and add comments on the discussions')]//following::mat-icon)[1]"));     
    
    this.ReportReviewerCheckBox = element(By.xpath("(//div[@class='mat-checkbox-inner-container'])[2]"));
    this.SponsordashboardCheckBox = element(By.xpath("(//i[contains(text(),'Will enable you to login to sponsor dashboards and do reporting')]//following::mat-icon)[1]"));

    this.ParticipantTeamLeadCheckBox = element(By.xpath("(//div[@class='mat-checkbox-inner-container'])[3]"));
    this.ModeratediscussionsCheckBox = element(By.xpath("(//i[contains(text(),'Will be able to moderate the discussions')]//following::mat-icon)[1]"));

    this.TestUserCheckBox = element(By.xpath("(//div[@class='mat-checkbox-inner-container'])[4]"));
    this.UATUserCheckBox = element(By.xpath("(//div[@class='mat-checkbox-inner-container'])[5]"));
    this.FacilitatorCheckBox = element(By.xpath("(//div[@class='mat-checkbox-inner-container'])[6]"));
    this.FacilitatorPermissionCheckBox = element(By.xpath("(//i[contains(text(),'Will enable you to login to facilitator dashboards and do reporting')]//following::mat-icon)[1]"));



    }
}