import { ElementFinder, element, By } from "protractor" ;

export class TagContentObjectToThemePageLocate{

    icnSprintFolder:ElementFinder;
    btnConfigureClient: ElementFinder;
    arwDD:ElementFinder;
    tabTheme:ElementFinder;
    icnAddTheme:ElementFinder;
    txtEnterThemeTittle:ElementFinder;
    btnAddTheme:ElementFinder;
    btnSaveClientConfig:ElementFinder;
    btnAddContent:ElementFinder;
    btnNewActivity:ElementFinder;
    txtEnterActivityTittle:ElementFinder;
    tglResourceOn:ElementFinder;
    ddSelectTheme:ElementFinder;
    checkbxTheme1:ElementFinder;
    checkbxTheme2:ElementFinder;
    btnCreateActivity:ElementFinder;
    tabStandard:ElementFinder;
    actvtyPage:ElementFinder;
    tabGeneral:ElementFinder;
    ddSelectTheme2:ElementFinder;
    tabContent:ElementFinder;
    ddSelectContent:ElementFinder;
    btnSaveDraft:ElementFinder;
    ddselectContentType:ElementFinder;
    rmvTheme:ElementFinder;
    btnExitEditor:ElementFinder;
    publishBtn: ElementFinder;
    toastMessageSuccess: ElementFinder;
    btnDeleteTheme1:ElementFinder;
    btnDelteTheme2:ElementFinder;
    btnThreeDotDeleteActivity:ElementFinder;
    btnDeleteActivity:ElementFinder;
    btnDeleteActivityPopup:ElementFinder;
    btnDeleteThemePopup:ElementFinder;
    constructor(){
        this.icnSprintFolder = element(By.xpath("//p[contains(text(),'Sprint 20')]/ancestor::mat-card"));
        this.btnConfigureClient=element(By.xpath("//button[@name='Configure Client']"));
        this.arwDD=element(By.xpath("(//div[@class='client__card-content']//following::div[1])[9]"));
        this.tabTheme=element(By.xpath("(//div[@class='client__card-content']//following::div[16])[1]"));
        this.icnAddTheme=element(By.xpath("//button[@name='Add Theme']"));
        this.txtEnterThemeTittle=element(By.xpath("//input[@placeholder='Enter theme title']"));
        this.btnAddTheme=element(By.xpath("//button[contains(text(),'Add Theme')]"));
        this.btnSaveClientConfig=element(By.xpath("//button[@name='save']"));
        this.btnAddContent=element(By.xpath("//button[@name='add-content']"));
        this.btnNewActivity=element(By.xpath("//button[@aria-label='New Activity']"));
        this.txtEnterActivityTittle=element(By.xpath("//input[@aria-label='Activity Title']"));
        this.tglResourceOn=element(By.xpath("//mat-slide-toggle[@name='Resource']//div[@class='mat-slide-toggle-thumb']"));
        this.ddSelectTheme=element(By.xpath("//mat-select[@name='activityTheme']"));
        this.checkbxTheme1=element(By.xpath("//span[contains(text(),'TCOTTheme Automation1')]/preceding-sibling::mat-pseudo-checkbox"));
        this.checkbxTheme2=element(By.xpath("//span[contains(text(),'TCOTTheme Automation2')]/preceding-sibling::mat-pseudo-checkbox"));
        this.btnCreateActivity=element(By.xpath("//button[text()='CREATE']"));
        this.tabStandard=element(By.xpath("//button[@aria-label='Standard']"));
        this.actvtyPage=element(By.xpath("//p[contains(text(),' TagContentObjectTo Theme ')]"));
        this.tabGeneral=element(By.xpath("//div[contains(text(),'General')]"));
        this.ddSelectTheme2=element(By.xpath("//mat-select[@placeholder='Select theme']"));
        this.tabContent=element(By.xpath("(//div[contains(text(),'Content')])[2]"));
        this.ddSelectContent=element(By.xpath("//select[@aria-label='Content Type']"));
        this.ddselectContentType=element(By.xpath("//option[contains(text(),'Action')]"))
        this.btnSaveDraft=element(By.xpath("//button[@name='save draft']"));
        this.rmvTheme=element(By.xpath("//mat-chip[contains(text(),' Tcottheme Automation1 ')]/mat-icon[contains(text(),'cancel')]"));
        this.btnExitEditor=element(By.xpath("//button[@name='exit editor']"));
        this.publishBtn = element(By.xpath("//span[contains(text(),'PUBLISH ')]/.."));
        this.toastMessageSuccess = element(By.xpath("//div[@id='toast-container']//div[contains(text(),'success')]"));
        this.btnDeleteTheme1 = element(By.xpath("//div[contains(text(),' TCOTTheme Automation1 ')]/ancestor::tr//button[contains(@name,'Delete')]"));
        this.btnDelteTheme2 = element(By.xpath("//div[contains(text(),' TCOTTheme Automation2 ')]/ancestor::tr//button[contains(@name,'Delete')]"));
        this.btnThreeDotDeleteActivity = element(By.xpath("//p[contains(text(),' Tag Content Theme ')]/ancestor::mat-card//button[contains(@name,'menu')]"));
        this.btnDeleteActivity = element(By.xpath("//button[@aria-label='delete']"));
        this.btnDeleteActivityPopup = element(By.xpath("//button[@aria-label='Delete']"));
        this.btnDeleteThemePopup = element(By.xpath("//button[contains(text(),'Delete')]"));
    }
    






}