import { ElementFinder, ElementArrayFinder,element } from "protractor";
import { By } from "protractor";

export class FileDownloadAuthoringPage {

    cntAuthorFileDownload: ElementFinder;
    lnkEditFileDownload:ElementFinder;
    rdoEditFileDownload:ElementFinder;
    ttlEditFileDownload:ElementFinder;
    subttlEditFileDownload:ElementFinder;
    icoCrossEditFileDownload:ElementFinder;
    rdoBoxesAuthorFileDownload:ElementArrayFinder;

    constructor() {
        this.cntAuthorFileDownload = element(By.xpath("//p[contains(text(),'Automation_File_Download')]/../.."));
        this.lnkEditFileDownload = element(By.xpath(("//button[contains(text(),'Edit Download')]")));
        this.ttlEditFileDownload= element(By.xpath(("//div[@class='modal-download-header']")));
        this.subttlEditFileDownload=element(By.xpath(("//mat-dialog-container//*[contains(text(),'Document')]")));
        this.rdoEditFileDownload=element(By.xpath(("//mat-dialog-container//*[contains(text(),'Momenta Content Doc')]")));
        this.icoCrossEditFileDownload=element(By.xpath(("//mat-dialog-container//i[@class='momenta-icon author-icon icon-plus']")));
        this.rdoBoxesAuthorFileDownload = element.all(By.xpath("//mat-dialog-container//mat-radio-button[contains(@class,'modal-common__radio mat-radio-button mat-accent')]"));
    }
}