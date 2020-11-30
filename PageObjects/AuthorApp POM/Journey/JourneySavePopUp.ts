import { ElementFinder, By, element } from "protractor";
import { EEXIST } from "constants";

export class JourneySavePopUpPageLocate {

    fldSprint16: ElementFinder;
    fldAutoJrnPopUp: ElementFinder;
    ttlAlertWindow: ElementFinder;
    btnStay: ElementFinder;
    btnLeave: ElementFinder;
    btnlnkReports: ElementFinder;
    btnlnkSupport: ElementFinder;
    btnlnkRegistration: ElementFinder;
    threedotsEditModule: ElementFinder;
    btnEditModule: ElementFinder;
    btnCancelEditCnt: ElementFinder;
    ttlJourneyPopUp: ElementFinder;
    ttlJourneyRegistration: ElementFinder;
    logomomenta: ElementFinder;
    iconclose: ElementFinder;

    constructor() {
        this.fldSprint16 = element(By.xpath("//p[contains(text(),'Sprint 16')]"));
        this.fldAutoJrnPopUp = element(By.xpath("//p[contains(text(),'Automation_Journey_Popup_AM')]"));
        this.ttlAlertWindow = element(By.xpath("//h2[contains(text(),'Alert!')]"));
        this.btnStay = element(By.xpath("//button[contains(text(),'Stay')]"));
        this.btnLeave = element(By.xpath("//button[contains(text(),'Leave')]"));
        this.btnlnkReports = element(By.xpath("//div[contains(text(),' Assessment Reports ')]"));
        this.btnlnkSupport = element(By.xpath("//div[contains(text(),' Support ')]"));
        this.btnlnkRegistration = element(By.xpath("//div[contains(text(),' Registration ')]"));
        this.threedotsEditModule = element(By.xpath("(//p[contains(text(),'Journey pop up Module')]//following::i[@class='author-icon icon-dots master-collection__icon'])[1]"));
        this.btnEditModule = element(By.xpath("//button[contains(text(),' Edit Module')]"));
        this.btnCancelEditCnt = element(By.xpath("//button[contains(text(),'CANCEL')]"));
        this.ttlJourneyPopUp = element(By.xpath("//h2[@class='journey-selection__description']"));
        this.ttlJourneyRegistration = element(By.xpath("//p[@class='journey-selection--font']"));
        this.logomomenta = element(By.xpath("//img[@alt='Momenta logo']"));
        this.iconclose = element(By.xpath("//div[@class='journey-header__close fr-modal-close']"));
    }
}