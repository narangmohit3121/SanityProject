import { ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "selenium-webdriver";
import { ElementAccessExpression } from "typescript";

export class UploadDocumentPageLocate{

    jrnScriptID:ElementFinder;
    drpFileType:ElementFinder;
    optFileType:ElementFinder;
    maxFileSize:ElementFinder;
    onOff:ElementFinder;
    txtInstruction:ElementFinder;
    toggle:ElementFinder;
    moveFocus:ElementFinder;
    btnOkUploadDoc:ElementFinder;
    arrwCollapse:ElementArrayFinder;
    btnBrowse:ElementFinder;
    uploadedDoc:ElementFinder;
    errMsgUpload:ElementFinder;
    btnTryAgain:ElementFinder;
    btnDeleteDoc:ElementArrayFinder;

    constructor(){

        this.jrnScriptID=element(By.xpath("//input[@aria-label='Journey Script ID']"));
        this.drpFileType=element(By.xpath("//span[contains(text(),'Select File Type')]"));
        this.optFileType=element(By.xpath("//span[contains(text(),'Word')]"));
        this.maxFileSize=element(By.xpath("//input[@aria-label='Max File Size']"));
        this.onOff=element(By.xpath("//span[@class='ng-star-inserted']"));
        this.txtInstruction=element(By.xpath("//div[@class='fr-element fr-view']//p"));
        this.toggle=element(By.xpath("//div[@class='mat-slide-toggle-thumb']"));
        //this.moveFocus=element(By.xpath("(//mat-label[@class='modal-common-label'])[1]"));
        this.moveFocus=element(By.xpath("(//div[@class='cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing'])[1]"));
        this.btnOkUploadDoc=element(By.xpath("//button[@class='btn-common btn-fill']"));
        this.arrwCollapse=element.all(By.xpath("//span[@style='transform: rotate(180deg);']"));
        this.btnBrowse=element(By.xpath("//input[@type='file']"));
        this.uploadedDoc=element(By.xpath("//span[contains(text(),'Interview_Question_Set.docx')]"));
        this.errMsgUpload=element(By.xpath("//span[contains(text(),'2 MB max file size')]"));
        this.btnTryAgain=element(By.xpath("//button[contains(text(),'Try again')]"));
        this.btnDeleteDoc=element.all(By.xpath("//span[@class='momenta-icon author-icon icon-delete']"));
    }
}