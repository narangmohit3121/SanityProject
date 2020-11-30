import { element, ElementFinder, ElementArrayFinder } from "protractor";
import { By } from "protractor";
import testData from "../../../../testData.json";
import config from "../../../../StepDefinitions/config.json";
import sanityTestData from "../../../../SanityTestData.json";

export class DownloadBlockLocate {
    editActivityDownload: ElementFinder;
    btnEditDownload: ElementFinder;
    radioBtnExternalLink: ElementFinder;
    radioBtnMomentaContentDoc: ElementFinder;
    uploadFileInputBox: ElementFinder;
    uploadedFileName: ElementFinder;
    externalDocumentLink: ElementFinder;
    downloadHeading: ElementFinder;
    downloadBtn: ElementFinder;
    downloadTitle: ElementFinder;
    loaderContainer: ElementFinder;


    constructor() {
        this.editActivityDownload = element(By.xpath(`//p[contains(text(),'${testData.Sprint14.DownloadBlock}')]/../..`));
        this.btnEditDownload = element(By.xpath("//button[contains(text(),'Edit Download')]"));
        this.radioBtnExternalLink = element(By.xpath("//mat-radio-group[@aria-labelledBy='documentId']//span[contains(text(),'External Link')]/../../.."));
        this.radioBtnMomentaContentDoc = element(By.xpath("//mat-radio-group[@aria-labelledBy='documentId']//span[contains(text(),'Content Doc')]/../../.."));
        this.uploadFileInputBox = element(By.css("#file-input"));
        this.uploadedFileName = element(By.xpath("//input[@name='Uploaded File']"));
        this.externalDocumentLink = element(By.xpath("//input[@name='Document Link']"));
        this.downloadHeading = element(By.xpath("//input[@name='Heading']"));
        this.downloadBtn = element(By.xpath("//div[contains(@class,'download-btn')]"));
        this.downloadTitle = element(By.xpath("//*[contains(@class,'download-title')]"));
        this.loaderContainer = element(By.xpath("//div[contains(@class,'loader_container')]"));

        if (config.suiteType == "sanity") {
            this.editActivityDownload = element(By.xpath(`//p[contains(text(),'${sanityTestData.downloadBlock}')]/../..`));
        }
    }
};
