import { ElementFinder, By, element } from "protractor";

export class MultiSelectDropdownPageLocate {

    
   LongTextDDArrow: ElementFinder;
   ContinueBtn:ElementFinder;
   selecteddActualoption:ElementFinder;
   lotofoptionLbl:ElementFinder;
   maximumthreeOptionDD:ElementFinder;
   functionalTestingddoption:ElementFinder;
   automationddoption:ElementFinder;
   apiddoption:ElementFinder;
   QtpddOption:ElementFinder;
   lotofoptionLbl_2:ElementFinder;
   ContinueBtn2:ElementFinder;

   constructor() {
   

      
      
      this.LongTextDDArrow = element(By.xpath("//select[@name='Long Text Options Dropdown ']"));
   //  this.LongTextDDArrow = element(By.xpath("//select[@id='mat-input-3']"));
   //    this.LongTextDDArrow = element(By.xpath("//div[@class='mat-form-field-infix']/select[1]"));
       this.ContinueBtn = element(By.xpath("//span[text()='Continue']"));
       this.selecteddActualoption = element(By.xpath("//select[@name='Long Text Options Dropdown ']/option[text()='BTS Momenta Strategy Partner  and people connecton of online training for indusrial bas people']"));
      //this.selecteddActualoption=element(By.xpath("//option[contains(text(),'BTS Momenta Strategy Partner  and people connecton of online training for indusrial bas people')]"));
       this.lotofoptionLbl = element(By.xpath("//p[text()='Lot of options in the multi select dropdown ']"));
       this.maximumthreeOptionDD = element(By.xpath("//div[@class='mat-select-arrow-wrapper']"));
       // this.functionalTestingddoption = element(By.xpath("(//mat-pseudo-checkbox[@class='mat-option-pseudo-checkbox mat-pseudo-checkbox ng-star-inserted'])[1]"));
        this.functionalTestingddoption = element(By.xpath("//span[text()=' Functional Test ']"));
    //   this.automationddoption = element(By.xpath("(//mat-pseudo-checkbox[@class='mat-option-pseudo-checkbox mat-pseudo-checkbox ng-star-inserted'])[2]"));
    this.automationddoption = element(By.xpath("//span[text()=' Automation ']"));
    //  this.apiddoption = element(By.xpath("(//mat-pseudo-checkbox[@class='mat-option-pseudo-checkbox mat-pseudo-checkbox ng-star-inserted'])[3]"));
    this.apiddoption = element(By.xpath("//span[text()=' Api ']"));
    this.QtpddOption = element(By.xpath("//span[contains(.,'Qtp')]"));
    this.lotofoptionLbl_2 = element(By.xpath("//p[@class='plugin-multiple__title activity-header__title-container activity__title']"));
    this.ContinueBtn2 = element(By.xpath("//button[@name='Continue to Next Activity']"));
  
   }

}