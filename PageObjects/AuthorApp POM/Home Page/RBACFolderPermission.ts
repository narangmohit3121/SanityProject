import { ElementFinder, ElementArrayFinder, By, element } from "protractor";

export class RBACFolderPermissionLocate {

    btnmanagepermissions: ElementFinder;
    btncreateuser: ElementFinder;
    btnadduser: ElementFinder;
    txtfirstname: ElementFinder;
    txtlastname: ElementFinder;
    txtemailId: ElementFinder;
    btnrbacuserone: ElementFinder;
    btnaddnewpermission: ElementFinder;
    collections: ElementFinder;
    chkboxcollectionowner: ElementFinder;
    btnsave: ElementFinder;
    txtfolderpermissionforQAcollection: ElementFinder;
    txtrolepermissionforcollectionowner: ElementFinder;
    tbnsavepermissionpage: ElementFinder;
    chkboxauthor: ElementFinder;
    tabclientpermissionpage: ElementFinder;
    txtfolderpermissionforPetronaswithrbacfolder: ElementFinder;
    txtfolderpermissionforqacollectionwithfolder:ElementFinder;
    txtrolepermissionforauthor: ElementFinder;
    chkboxcollectionadmin:ElementFinder;
    txtrolepermissionforcollectionadmin:ElementFinder;
    txtClientSearch:ElementFinder;
    tabadminpermissions:ElementFinder;
    chkboxglobalsystemadmin:ElementFinder;
    txtfolderpermissionforBTS:ElementFinder;
    txtrolepermissionforglobalsystemadmin:ElementFinder;
    chkboxglobaldeveloper:ElementFinder;
    txtrolepermissionforglobaldeveloper:ElementFinder;
    chkboxjsm: ElementFinder;
    txtrolepermissionforjsm:ElementFinder;
    txtfolderpermissionforleadership:ElementFinder;
    txtfolderpermissionforsales:ElementFinder;
    txtfolderpermissionforoilgas:ElementFinder;
    txtfolderpermissionforinnovation:ElementFinder;
    deletepermission:ElementFinder;
    btndelete:ElementFinder;
    btnclientlanding:ElementFinder;
    btnconfigureclient:ElementFinder;
    iconplus:ElementArrayFinder;
    btncreatecohort:ElementFinder;


    masterCollectionFolderTitle: ElementFinder;
    masterCollectionJourneysTitle: ElementFinder;
    masterCollectionContentTitle: ElementFinder;
    masterCollectionLandingTitle: ElementFinder;
    tabMasterCollectionTitleAsBTS: ElementFinder
    masterCollectionArrowTab: ElementFinder;
    masterCollectionConfiguration: ElementFinder;
    masterCollectionConfigurationHeader: ElementFinder;
    clientConfigurationBtn: ElementFinder
    ManagePermissionBtn: ElementFinder

    masterCollectionLandingSections: ElementFinder;
    masterCollectionFolders: ElementArrayFinder;
    masterCollectionSections: ElementArrayFinder;
    masterCollectionLeftNavigationPanel: ElementArrayFinder;



    constructor() {

        this.btnmanagepermissions = element(By.xpath("//button[@name='Manage Permissions']"));
        this.btncreateuser = element(By.xpath("//button[@name='Create User']"));
        this.btnadduser = element(By.xpath("//button[@name='Add User']"));
        this.txtfirstname = element(By.xpath("//button[@aria-label='Change sorting for fname']"));
        this.txtlastname = element(By.xpath("//button[@aria-label='Change sorting for lname']"));
        this.txtemailId = element(By.xpath("//button[@aria-label='Change sorting for email']"));
        this.btnrbacuserone = element(By.xpath("//button[contains(text(),'RBAC Automation')]"));
        this.btnaddnewpermission = element(By.xpath("//button[contains(text(),' Add new Permission')]"));
        this.collections = element(By.xpath("//select[@name='collections']"));
        this.chkboxcollectionowner = element(By.xpath("//mat-checkbox[@ng-reflect-value='owner']//div[@class='mat-checkbox-inner-container']"));
        this.btnsave = element(By.xpath("//div[@class='block-submit common-btn-row mr-tp data-loaded-buttons']//button[contains(text(),' Save ')]"));
        this.txtfolderpermissionforQAcollection = element(By.xpath("//tr[@class='ng-star-inserted']//td[contains(text(),' QA Collection ')]"));
        this.txtrolepermissionforcollectionowner = element(By.xpath("//tr[@class='ng-star-inserted']//td[contains(text(),' Collection Owner ')]"));
        this.tbnsavepermissionpage = element(By.xpath("//div[@class='block-submit common-btn-row data-loaded-buttons']//button[contains(text(),' Save ')]"));
        this.chkboxauthor = element(By.xpath("//mat-checkbox[@ng-reflect-value='author']//div[@class='mat-checkbox-inner-container']"));
        this.tabclientpermissionpage = element(By.xpath("//div[contains(@id,'mat-tab-label')]//div[contains(text(),'Client')]"));
        this.txtfolderpermissionforPetronaswithrbacfolder = element(By.xpath("//tr[@class='ng-star-inserted']//td[contains(text(),' petronas > RBAC Folder Permission Automation DND ')]"));
        this.txtfolderpermissionforqacollectionwithfolder=element(By.xpath("//tr[@class='ng-star-inserted']//td[contains(text(),' QA Collection > RBAC Folder Permission QA collection ')]"));
        this.txtrolepermissionforauthor = element(By.xpath("//tr[@class='ng-star-inserted']//td[contains(text(),' Author ')]"));
        this.chkboxcollectionadmin=element(By.xpath("//mat-checkbox[@ng-reflect-value='collection-admin']//div[@class='mat-checkbox-inner-container']"));
        this.txtrolepermissionforcollectionadmin=element(By.xpath("//tr[@class='ng-star-inserted']//td[contains(text(),' Collection Administrator ')]"));
        this.txtClientSearch=element(By.xpath("//input[@placeholder='Filter Collections']"));
        this.tabadminpermissions=element(By.xpath("//div[contains(text(),'Admin Permissions')]"));
        this.chkboxglobalsystemadmin=element(By.xpath("//mat-checkbox[@ng-reflect-value='system-admin']//div[@class='mat-checkbox-inner-container']"));
        this.txtfolderpermissionforBTS = element(By.xpath("//tr[@class='ng-star-inserted']//td[contains(text(),' BTS ')]"));
        this.txtrolepermissionforglobalsystemadmin = element(By.xpath("//tr[@class='ng-star-inserted']//td[contains(text(),' Global System Administrator ')]"));
        this.chkboxglobaldeveloper=element(By.xpath("//mat-checkbox[@ng-reflect-value='developer']//div[@class='mat-checkbox-inner-container']"));
        this.txtrolepermissionforglobaldeveloper=element(By.xpath("//tr[@class='ng-star-inserted']//td[contains(text(),' Global Developer (Production Support) ')]"));
        this.chkboxjsm=element(By.xpath("//mat-checkbox[@ng-reflect-value='jsm']//div[@class='mat-checkbox-inner-container']"));
        this.txtrolepermissionforjsm=element(By.xpath("//tr[@class='ng-star-inserted']//td[contains(text(),' Journey Success Manager ')]"));
        this.txtfolderpermissionforleadership = element(By.xpath("//tr[@class='ng-star-inserted']//td[contains(text(),' Leadership ')]"));
        this.txtfolderpermissionforsales=element(By.xpath("//tr[@class='ng-star-inserted']//td[contains(text(),' Sales ')]"));
        this.txtfolderpermissionforoilgas=element(By.xpath("//tr[@class='ng-star-inserted']//td[contains(text(),' Oil & Gas ')]"));
        this.txtfolderpermissionforinnovation=element(By.xpath("//tr[@class='ng-star-inserted']//td[contains(text(),' Innovation ')]"));
        this.deletepermission=element(By.xpath("//button[@class='bts-btn-edit']//mat-icon[contains(text(),'delete')]"));
        this.btndelete=element(By.xpath("//button[contains(text(),' Delete ')]"));
        this.btnclientlanding=element(By.xpath("//span[contains(text(),' Client Collection')]"));
        this.btnconfigureclient=element(By.xpath("//button[contains(text(),' Configure Client ')]"));
        this.iconplus=element.all(By.xpath("//i[@class='author-icon icon-plus master-collection__header--plus']"));
        this.btncreatecohort=element(By.xpath("//button[@name='Create Cohort']"));
        




        this.tabMasterCollectionTitleAsBTS = element(By.xpath("//h1[@class='master-collection__inno common-page-title']"));
        this.masterCollectionArrowTab = element(By.xpath("//span[@class='client-collection__title']"));

        // Leadership WebElements
        this.masterCollectionFolderTitle = element(By.xpath("//h4[contains(text(),'Folder')]"));
        this.masterCollectionJourneysTitle = element(By.xpath("//h4[contains(text(),'Journeys')]"))
        this.masterCollectionContentTitle = element(By.xpath("//h4[contains(text(),'Content')]"));
        this.masterCollectionLandingSections = element(By.xpath("//h4[@class='master-collection__title']"))

        //Left Panel WebElements
        //this.masterCollectionListArrow = element(By.xpath("//div[@class='mat-tree-node']//button[2]"));
        this.masterCollectionLeftNavigationPanel = element.all(By.xpath("//li[@class='mat-tree-node ng-star-inserted']//div[@class='mat-tree-title']"));

        //Body Area WebElements
        this.masterCollectionSections = element.all(By.xpath("//h4[@class='master-collection__title']"));

        //Header WebElements
        this.masterCollectionConfiguration = element(By.css('button.master-collection__setting'));
        this.masterCollectionConfigurationHeader = element(By.xpath("//h4[contains(text(),'BTS')]"));
        this.clientConfigurationBtn = element(By.xpath("//button[text()=' Configure Client ']"));
        this.ManagePermissionBtn = element(By.xpath("//button[@name='Manage Permissions']"));

        //Folders WebElements
        //this.masterCollectionFolders = element.all(By.xpath("//div[@class='main-container__box master-collection']//div//section//p[@class='master-collection__box-text']"))
        this.masterCollectionFolders = element.all(By.xpath("//div[@class='main-container__box master-collection']//div//p[@class='master-collection__box-text']"));
    }
}