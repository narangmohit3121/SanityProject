import { ElementFinder, By, element } from "protractor";

export class ParticipantLoginPageLocate {

   participantLoginId: ElementFinder;
   participantPassword: ElementFinder;
   participantLoginBtn: ElementFinder;
   clientPageTitle: ElementFinder;
   mainPageTitle: ElementFinder;

   JourneyModuleOneName:ElementFinder;

   constructor() {

      this.participantLoginId = element(By.xpath("//input[@id='userEmail']"));
      this.participantPassword = element(By.xpath("//input[@id='password']"));
      this.participantLoginBtn = element(By.xpath("//button[@id='btnLogin']"));
      this.clientPageTitle = element(By.xpath("//h1[text()='My Journey']"));

      this.JourneyModuleOneName = element(By.xpath("//h2[@class='plugin-module-title ng-star-inserted']"));

   }

}