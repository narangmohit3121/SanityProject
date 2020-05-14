import { ElementFinder, By, element } from "protractor";

export class ParticipantLoginPageLocate {

   participantLoginId: ElementFinder;
   participantPassword: ElementFinder;
   participantLoginBtn: ElementFinder;
   clientPageTitle: ElementFinder;
   mainPageTitle: ElementFinder;

   constructor() {

      this.participantLoginId = element(By.id('mat-input-0'));
      this.participantPassword = element(By.id('password__field'));
      this.participantLoginBtn = element(By.xpath("//span[text()='Login']"));
      this.clientPageTitle = element(By.xpath("//h1[text()='My Journey']"));

   }

}