import { ElementFinder, By, element } from "protractor";

export class AuthoringSingleMultiComponentLocate {

  
    
    cntParticipantResponseblockContent:ElementFinder;
    lnkEditSelectionLink:ElementFinder;
    txtValue1:ElementFinder;
    txtValue2:ElementFinder;
    txtValue3:ElementFinder;
    btnSave:ElementFinder;
    
   
    constructor() {

         this.cntParticipantResponseblockContent = element(By.xpath("//p[contains(text(),'Participant Response Block')]/../../.."));
         this.lnkEditSelectionLink = element(By.xpath("//button[contains(text(),'Edit Single Select')]"));
                                            
         this.txtValue1 = element(By.xpath("(//input[contains(@placeholder,'item value')])[1]"));
         this.txtValue2 = element(By.xpath("(//input[contains(@placeholder,'item value')])[2]"));
         this.txtValue3 = element(By.xpath("(//input[contains(@placeholder,'item value')])[3]"));
         this.btnSave = element(By.xpath("//div[contains(@class,'submit')]//button[not(contains(@class,'create-field')) and contains(text(),'Ok')]"));

    }

}

