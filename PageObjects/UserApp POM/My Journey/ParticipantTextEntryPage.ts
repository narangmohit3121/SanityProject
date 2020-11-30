import { ElementFinder, By, element } from "protractor";

export class ParticipantTextEntryPageLocate {

   revisitBtnJourneyPage: ElementFinder;
   revisitBtnModulePage: ElementFinder;
   exhibitBehaviorTxt: ElementFinder;
   impactTxt: ElementFinder;
   optionYouChooseTxt: ElementFinder;
   continueBtn: ElementFinder;
   backarrow: ElementFinder;
   activitiesTitle: ElementFinder;

   constructor() {

      this.revisitBtnJourneyPage = element(By.xpath("(//span[text()='Revisit'])[4]"));
      this.revisitBtnModulePage = element(By.xpath("//span[text()=' Revisit ']"));
      this.exhibitBehaviorTxt = element(By.xpath("//p//following::strong[contains(text(),'Q. How do you exhibit this behavior with your team?')]//following::textarea[1]"));
      this.impactTxt = element(By.xpath("//p//following::strong[contains(text(),'Q. How do you exhibit this behavior with your team?')]//following::textarea[2]"));
      this.optionYouChooseTxt = element(By.xpath("//p//following::strong[contains(text(),'Q. How do you exhibit this behavior with your team?')]//following::textarea[3]"));
      this.continueBtn = element(By.xpath("//span[text()='Continue']"));
      this.backarrow = element(By.xpath("//i[@class='pv-icon pv-icon-left-arrow plugin-back']"));
      this.activitiesTitle = element(By.xpath("//h2[text()='Create a reframe']"));


   }

}