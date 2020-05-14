import{By,element,ElementFinder,ElementArrayFinder} from "protractor";
import testData from "../../testData.json"

export class MoveContentPage{
    contentNotLinkedToJourney: ElementFinder;
    contentLinkedToJourney: ElementFinder;
    journeyToBeMoved: ElementFinder;
    movedFolder: ElementFinder;
    sourceFolder: ElementFinder;
    sourceFolderForContent: ElementFinder;
    menu_contentNotLinked: ElementFinder;
    menu_contentLinked: ElementFinder;
    menu_journeyToBeMoved: ElementFinder;
    menu_movedFolder: ElementFinder;
    moveOptionInMenu: ElementFinder;
    loaderDot: ElementFinder;
    moveDialogSearchItems: ElementFinder;
    folderPaths: ElementArrayFinder;
    moveButtonforEachRow: ElementArrayFinder;
    moveButtonSourceFolder: ElementFinder;
    sourceFolderPath: ElementFinder;
    subFolderInMovedFolder: ElementFinder;
    moveButton_subFolderInMovedFolder: ElementFinder;
    closeMoveDialog: ElementFinder;
    sourceFolderName: ElementFinder;
    contentInMovedFolder: ElementFinder;
    moveButton_parentFolder: ElementFinder;  
    parentFolderLeftNavPanel: ElementFinder;



    constructor(){
        this.contentNotLinkedToJourney = element(By.xpath(`//p[contains(text(),'${testData.Sprint16.MoveContent.Content2}')]/../..`));
        this.contentLinkedToJourney = element(By.xpath(`//p[contains(text(),'${testData.Sprint16.MoveContent.Content1}')]/../..`));
        this.journeyToBeMoved = element(By.xpath(`//p[contains(text(),'${testData.Sprint16.MoveContent.Journey}')]/../..`));
        this.movedFolder= element(By.xpath(`//p[contains(text(),'${testData.Sprint16.MoveContent.Folder1}')]/../..`));
        this.sourceFolder= element(By.xpath(`//p[contains(text(),'${testData.Sprint16.MoveContent.Folder2}')]/../..`));
        this.sourceFolderForContent= element(By.xpath(`//p[contains(text(),'${testData.Sprint16.MoveContent.Folder3}')]/../..`));
        this.subFolderInMovedFolder= element(By.xpath(`//p[contains(text(),'${testData.Sprint16.MoveContent.Folder1_1}')]/../..`));
        this.menu_contentNotLinked = element(By.xpath(`//p[contains(text(),'${testData.Sprint16.MoveContent.Content2}')]/../../..//button[@name='menu']`));
        this.menu_contentLinked = element(By.xpath(`//p[contains(text(),'${testData.Sprint16.MoveContent.Content1}')]/../../..//button[@name='menu']`));
        this.menu_journeyToBeMoved= element(By.xpath(`//p[contains(text(),'${testData.Sprint16.MoveContent.Journey}')]/../../..//button[@name='menu']`));
        this.menu_movedFolder = element(By.xpath(`//p[contains(text(),'${testData.Sprint16.MoveContent.Folder1}')]/../../..//button[@name='menu']`));
        //this.menu_contentNotLinked = element(By.xpath(`//p[contains(text(),'${testData.Sprint16.MoveContent.Content2}')]/../../..//button[@name='menu']`));    
        this.moveOptionInMenu = element(By.xpath("//button[@name='move']"));    
        this.loaderDot = element(By.xpath("//div[@class='dot dot-3']"));
        this.moveDialogSearchItems = element(By.xpath("//app-move-dialog//input"));
        this.folderPaths = element.all(By.xpath("//app-move-dialog//div[contains(@class,'modal-common__content')]/div/div/p"));
        this.moveButtonforEachRow = element.all(By.xpath("//app-move-dialog//div[contains(@class,'modal-common__content')]//div[@class='modal-common-row']/div/button"));
        this.sourceFolderName = element(By.xpath(`//app-move-dialog//div[contains(@class,'modal-common__content')]//div[@class='modal-common-row']/h2[contains(text(),'${testData.Sprint16.MoveContent.Folder2}')]`))
        this.sourceFolderPath = element(By.xpath(`//app-move-dialog//h2[contains(text(),'${testData.Sprint16.MoveContent.Folder2}')]/following-sibling::p`));
        this.moveButtonSourceFolder = element(By.xpath(`//app-move-dialog//p[contains(text(),'${testData.Sprint16.MoveContent.Folder2}')]/../following-sibling::div//button`));
        this.moveButton_subFolderInMovedFolder = element(By.xpath(`//app-move-dialog//p[contains(text(),'${testData.Sprint16.MoveContent.Folder1_1}')]/../following-sibling::div//button`));
        //this.moveButton_parentFolder = element(By.xpath(`//app-move-dialog//p[contains(text(),'${testData.Sprint16.MoveContent.parentFolder}') and not(contains(text(),'${testData.Sprint16.MoveContent.parentFolder}/'))]/../following-sibling::div//button`));
        this.moveButton_parentFolder = element(By.xpath(`//app-move-dialog//h2[contains(text(),'${testData.Sprint16.MoveContent.parentFolder}')]/../following-sibling::div//button`))
        this.closeMoveDialog = element(By.css("app-move-dialog i[class*='icon-plus']"));
        this.contentInMovedFolder = element(By.xpath(`//p[contains(text(),'${testData.Sprint16.MoveContent.ContentInFolder1}')]/../..`));
        this.parentFolderLeftNavPanel = element(By.xpath(`//div[@class='client-collection__tree']//div[contains(text(),'${testData.Sprint16.MoveContent.parentFolder}')]`));
        

    }
}