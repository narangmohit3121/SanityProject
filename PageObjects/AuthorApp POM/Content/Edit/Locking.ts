import { ElementFinder, element, By } from "protractor";

export class LockingLocate{

    cntLockingContent:ElementFinder;
    lockedCntLockingContent:ElementFinder;
    alrtLocked:ElementFinder;
    btnViewReadOnly:ElementFinder;
    icnReadyOnly:ElementFinder;


    constructor(){

        this.cntLockingContent = element(By.xpath("//p[contains(text(),' Locking Content ')]"));
        this.lockedCntLockingContent = element(By.xpath("//p[contains(text(),'Locking Content')]//following::i[@class='author-icon icon-lock']"));
        this.alrtLocked = element(By.xpath("//h2[contains(text(),'Locked!')]"));
        this.btnViewReadOnly = element(By.xpath("//button[contains(text(),'View Read-only')]"));
        this.icnReadyOnly = element(By.xpath("//p[contains(text(),'Read Only')]//following::p[contains(text(),'(Locked by neha.seth@bts.com)')]"));
        
    }
}