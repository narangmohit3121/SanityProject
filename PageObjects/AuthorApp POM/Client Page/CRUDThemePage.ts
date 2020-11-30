import { ElementFinder, element, By } from "protractor";

export class CRUDThemePageLocate{

    icnSettingPetronas:ElementFinder;
    arwDD:ElementFinder;
    tabTheme:ElementFinder;
    icnAddTheme:ElementFinder;
    txtEnterThemeTittle:ElementFinder;
    btnAddTheme:ElementFinder;
    btnSaveClientConfig:ElementFinder;
    icnEditTheme:ElementFinder;
    txtEditThemeTittle:ElementFinder;
    btnSaveEditTheme:ElementFinder;
    icnDeleteTheme:ElementFinder;
    btnDeleteTheme:ElementFinder;
    txtThemeNameAdded:ElementFinder;
    txtThemeNameEdit:ElementFinder;
    icoClientConfig:ElementFinder;
    msgThemeAddSuccess:ElementFinder;
    msgThemeDelete:ElementFinder;
   
    constructor(){
        this.icnSettingPetronas=element(By.xpath("//div[@class='client-collection__mslogo ng-star-inserted']//i[@class='author-icon icon-setting master-collection__setting']"));
       // this.arwDD=element(By.xpath("(//div[@class='client__card-content']//following::div[1])[9]"));
        this.arwDD=element(By.xpath("(//div[@class='mat-tab-header-pagination-chevron'])[4]"));
        this.tabTheme=element(By.xpath("//div[text()='Themes']")); //(//div[@class='client__card-content']//following::div[16])[1]")
        this.icnAddTheme=element(By.xpath("//button[@name='Add Theme']"));
        this.txtEnterThemeTittle=element(By.xpath("//input[@placeholder='Enter theme title']"));
        this.btnAddTheme=element(By.xpath("//button[contains(text(),'Add Theme')]"));
        this.btnSaveClientConfig=element(By.xpath("//button[@name='save']"));
        this.icnEditTheme=element(By.xpath("//div[contains(text(),'Automation Theme')]/ancestor::tr//button[contains(@name,'Edit')]"));
        this.txtEditThemeTittle=element(By.xpath("//input[@name='Theme title']"));
        this.btnSaveEditTheme=element(By.xpath("(//button[@class='btn-common btn-fill'])"));
        this.icnDeleteTheme=element(By.xpath("//div[contains(text(),'Automation Theme')]/ancestor::tr//button[contains(@name,'Delete')]"));
        this.btnDeleteTheme=element(By.xpath("(//button[@class='btn-common btn-fill'])"));
        this.txtThemeNameAdded=element(By.xpath("//tbody[contains(@class,'tbl-body')]//div[contains(text(),'Automation Theme')]"));
        this.txtThemeNameEdit=element(By.xpath("//tbody[contains(@class,'tbl-body')]//div[contains(text(),'Automation Theme1')]"));
        this.icoClientConfig = element(By.xpath("//button[contains(text(),' Configure Client ')]"));
        // this.checkbxSelectTheme=element(By.xpath("(//div[@class='mat-select-panel-wrap ng-tns-c24-3510 ng-trigger ng-trigger-transformPanelWrap ng-star-inserted']//following::div[1])[1]"));
        // this.checkbxSelectTheme2=element(By.xpath("(//div[@class='mat-select-panel-wrap ng-tns-c24-3510 ng-trigger ng-trigger-transformPanelWrap ng-star-inserted']//following::div[1])[2]"));
        this.msgThemeAddSuccess = element(By.xpath("//div[contains(text(),' Theme Added Successfully ')]"));
        this.msgThemeDelete = element(By.xpath("//div[contains(text(),' Theme Deleted Successfully ')]"));
    }
}