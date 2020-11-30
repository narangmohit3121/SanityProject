import { ElementFinder, element } from "protractor";
import { By } from "selenium-webdriver";

export class StoryLinePageLocate{

    fldSprint21:ElementFinder;
    cntStoryLineAuto:ElementFinder;
    btnEditStoryLine:ElementFinder;
    btnBrowse:ElementFinder;
    btnOkStoryLine:ElementFinder;
    txtStoryLineZip:ElementFinder;
    storylineURLInPreview: ElementFinder;

    constructor(){

        this.fldSprint21=element(By.xpath("//p[contains(text(),'Sprint 21')]"));
        this.cntStoryLineAuto=element(By.xpath("//p[contains(text(),'Story Line Auto Cnt')]"));
        this.btnEditStoryLine=element(By.xpath("(//button[@name='edit'])[2]"));
        this.btnBrowse=element(By.xpath("//button[@name='Browse']"));
        this.btnOkStoryLine=element(By.xpath("(//button[@name='Ok'])[1]"));
        //this.txtStoryLineZip=element(By.xpath("//input[@placeholder='Storyline .zip folder']"));
        this.txtStoryLineZip=element(By.xpath("//input[@type='file']"));
        this.storylineURLInPreview = element(By.xpath("//label[contains(text(),'url')]/.."));
    }
}