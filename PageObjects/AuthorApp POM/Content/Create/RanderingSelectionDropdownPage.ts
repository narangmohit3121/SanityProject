import { ElementFinder, By, element } from "protractor";

export class RanderingSelectionDropdownPageLocate {

   participantLoginId: ElementFinder;
   participantPassword: ElementFinder;
   participantLoginBtn: ElementFinder;
   industryDDArrow: ElementFinder;
   continueBtn: ElementFinder;
   selectRegionText: ElementFinder;
   manageAccText: ElementFinder;
   ActivityTxt:ElementFinder;
   StartBtn: ElementFinder;
   BTSProductTxt:ElementFinder;
   BtsProductsDDArrow:ElementFinder;
   cityMumbaird:ElementFinder;
   selectedMomentaDrp:ElementFinder;
   ddArrowMultiSelectCB: ElementFinder;
   cityBangalore: ElementFinder;


   

   constructor() {

      this.participantLoginId = element(By.xpath("//input[@id='userEmail']"));
   //  this.participantLoginId = element(By.xpath("//input[@id='mat-input-1']"));
   //   this.participantLoginId = element(By.xpath("//input[@ng-reflect-placeholder='Email']"));
    //  this.participantLoginId = element(By.xpath("//input[@class='mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-invalid ng-touched']"));

    //  this.participantPassword = element(By.xpath("//input[@name='password']"));
      this.participantPassword = element(By.xpath("//input[@id='password']"));
      this.participantLoginBtn = element(By.xpath("//button[@id='btnLogin']"));
     // this.participantLoginBtn = element(By.xpath("//span[contains(text(),'Login_1')]"));
     // this.participantLoginBtn = element(By.xpath("//span[text()='Login']"));
      this.industryDDArrow = element(By.xpath("//select[@name='Select an industry']"));
      this.continueBtn = element(By.xpath("//span[text()='Continue']"));
      this.selectRegionText = element(By.xpath("//h1[contains(text(),'Please select your region')]"));
      this.manageAccText = element(By.xpath("//h1[text()='Do you manage accounts?']"));
      this.ActivityTxt = element(By.xpath("//h2[@class='plugin-activity-subtitle ng-star-inserted']"));
      this.StartBtn = element(By.xpath("//span[@class='plugin-common__btn-start__text']"));
      this.BTSProductTxt = element(By.xpath("//p[contains(text(),'Long Text Options Dropdown')]"));
      this.BtsProductsDDArrow =element(By.xpath("//mat-form-field//select"));
      this.cityMumbaird = element(By.xpath("//span[contains(text(),'Mumbai')]/ancestor::mat-option"));
      this.cityBangalore = element(By.xpath("//span[contains(text(),'Banglore')]/ancestor::mat-option"));
      this.selectedMomentaDrp=element(By.xpath("//option[contains(text(),'BTS Momenta Strategy')]"));
      this.ddArrowMultiSelectCB = element(By.xpath("//div[contains(@class,'mat-select-arrow')]//div[contains(@class,'mat-select-arrow')]"));
   }

}