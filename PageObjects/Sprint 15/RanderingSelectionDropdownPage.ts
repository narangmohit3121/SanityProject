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


   

   constructor() {

      this.participantLoginId = element(By.xpath("//input[@id='userEmail']"));
      this.participantPassword = element(By.xpath("//input[@id='password']"));
      this.participantLoginBtn = element(By.xpath("//span[text()='Login']"));
      this.industryDDArrow = element(By.xpath("//select[@name='Select your industry']"));
      this.continueBtn = element(By.xpath("//span[text()='Continue']"));
      this.selectRegionText = element(By.xpath("//h1[contains(text(),'Please select your region')]"));
      this.manageAccText = element(By.xpath("//h1[text()='Do you manage accounts?']"));
      this.ActivityTxt = element(By.xpath("//h2[@class='plugin-activity-subtitle ng-star-inserted']"));
      this.StartBtn = element(By.xpath("//span[@class='plugin-common__btn-start__text']"));
      this.BTSProductTxt = element(By.xpath("//p[text()='BTS Products']"));
      this.BtsProductsDDArrow =element(By.xpath("//select[@name='BTS Products']"));
      this.cityMumbaird = element(By.xpath("//label[contains(.,'Mumbai')]"));

   

      this.selectedMomentaDrp=element(By.xpath("//option[contains(text(),'Momenta')]"));
   }

}