import { ElementFinder, By, element } from "protractor";

export class AuthoringSingleMultiComponentLocate {

  
    
    cntParticipantResponseblockContent:ElementFinder;
    lnkEditSelectionLink:ElementFinder;
    txtValue1:ElementFinder;
    txtValue2:ElementFinder;
    txtValue3:ElementFinder;
    btnSave:ElementFinder;
    
   
    constructor() {

         this.cntParticipantResponseblockContent = element(By.xpath("//div[6]//div[@class='master-collection__contentalign']/div[.='Participant Response Block']"));
         this.lnkEditSelectionLink = element(By.xpath("//button[contains(.,'Edit Selection')]"));
                                            
         this.txtValue1 = element(By.xpath("(//input[@placeholder='Item 1 Value'])[3]"));
         this.txtValue2 = element(By.xpath("(//input[@placeholder='Item 2 Value'])[3]"));
         this.txtValue3 = element(By.xpath("(//input[@placeholder='Item 3 Value'])[3]"));
         this.btnSave = element(By.xpath("//button[@name='done']"));

    }

}

