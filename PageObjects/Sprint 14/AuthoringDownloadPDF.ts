import { ElementFinder, element, By } from "protractor";
export class AuthoringDownloadPDFPageLocate{

    cntScreenGrab:ElementFinder;
    blkScreenGrab:ElementFinder;
    btnlnkEditScreenGrab:ElementFinder;
    ttlScreenGrab:ElementFinder;

    constructor(){
        this.cntScreenGrab=element(By.xpath("//p[contains(text(),'Screen Grab Test')]"));
        this.blkScreenGrab=element(By.xpath("(//div[contains(text(),'Screen Grab')])[3]"));
        this.btnlnkEditScreenGrab=element(By.xpath("//button[contains(text(),'Edit Screen Grab')]"));
        this.ttlScreenGrab=element(By.xpath("//h2[contains(text(),'Screen Grab')]"));


    }
}