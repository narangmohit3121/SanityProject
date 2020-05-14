import { By, element, ElementFinder, ElementArrayFinder } from "protractor";
import testData from "../../testData.json";

export class AuthoringAddUserLocate {

    btnAddUser: ElementFinder
    txtSearchUsers: ElementFinder
    chkAutomationUser: ElementFinder
    btnAdd: ElementFinder
    btnCancel: ElementFinder
    btnXIcon: ElementFinder
    userList:ElementFinder;
    searchResults:ElementArrayFinder;
    chkBoxFirstUserInSearchResults:ElementFinder;
    //nameFirstUserInSearchResults:ElementFinder;
    firstUserInSearchResults_FName:ElementFinder;
    firstUserInSearchResults_Lname:ElementFinder;
    btnCreateUser:ElementFinder;
    txtFNameCreateUser:ElementFinder;
    txtLNameCreateUser:ElementFinder;
    txtEmailCreateuser:ElementFinder;
    txtPwdCreateUser:ElementFinder;
    btnCreate:ElementFinder;
    journeyPetronas_QA:ElementFinder;
    lnkCohortAutomationMohit:ElementFinder;
    lnkTestJourney: ElementFinder;
    lnkCohortName: ElementFinder;
    backToJourneyCohorts: ElementFinder;    
    journeyTwo: ElementFinder;
    journeyTwoCohort: ElementFinder;
    userDashboard: ElementFinder;
    cancelBtnAddUser: ElementFinder;


    constructor() {
        
        this.lnkTestJourney=element(By.xpath("//span[contains(text(),'"+ testData.Sprint9.AuthoringAddUser.journeyName +"')]"));
        this.lnkCohortName=element(By.xpath("//td[contains(text(),'"+ testData.Sprint9.AuthoringAddUser.cohort1Name + "')]"))
        //this.btnAddUser=element(By.xpath("//button[contains(text(),'Add User')]"))
        this.btnAddUser = element(By.buttonText('Add User'))
        //this.txtSearchUsers = element(By.xpath("//input[@id='mat-input-5']"))
        this.txtSearchUsers  = element(By.xpath("//mat-dialog-container//input[@placeholder = 'Search Users']"));
        this.chkAutomationUser = element(By.xpath("//mat-checkbox[@id='mat-checkbox-59']//span[@class='mat-checkbox-label']"))
        this.btnAdd = element(By.xpath("//button[contains(text(),'ADD')]"))
        this.btnCancel = element(By.xpath("//button[contains(text(),'CANCEL')]"))
        this.btnXIcon = element(By.xpath("//i[@class='momenta-icon author-icon icon-plus']"));
        this.userList = element(By.xpath("//div[@class='create-user-row']"));
        this.searchResults = element.all(By.xpath("//div[@class='create-user-row']//mat-checkbox"));
        this.chkBoxFirstUserInSearchResults = element(By.xpath("//div[@class='create-user-row']/div[1]/mat-checkbox"));
        //this.nameFirstUserInSearchResults = element(By.xpath("//div[@class='create-user-row']/div[1]/mat-checkbox//span[contains(@class,'label')]"));
        this.firstUserInSearchResults_FName = element(By.xpath("//div[@class='create-user-row']/div[1]/mat-checkbox//span[contains(@class,'label')]/span[2]"));
        this.firstUserInSearchResults_Lname = element(By.xpath("//div[@class='create-user-row']/div[1]/mat-checkbox//span[contains(@class,'label')]/span[3]"));
        this.btnCreateUser = element(By.xpath("//button[contains(text(),'Create User')]"));
        this.txtFNameCreateUser = element(By.xpath("//div[@class='create-user-dialog']//input[@placeholder = 'First Name']"));
        this.txtLNameCreateUser = element(By.xpath("//div[@class='create-user-dialog']//input[@placeholder = 'Last Name']"));
        this.txtEmailCreateuser = element(By.xpath("//div[@class='create-user-dialog']//input[@placeholder = 'Email']"));
        this.txtPwdCreateUser = element(By.xpath("//div[@class='create-user-dialog']//input[@placeholder = 'Password']"));
        this.btnCreate = element(By.xpath("//div[@class='create-user-dialog']//button[contains(text(),'CREATE')]"));
        this.journeyPetronas_QA = element(By.xpath("//div[contains(text(),'Petronas_QA_Journey')]"));
        this.backToJourneyCohorts = element(By.xpath("//div[contains(text(),'"+ testData.Sprint9.AuthoringAddUser.journeyName + "')]"));
        //this.lnkCohortAutomationMohit = element(By.xpath("//td[contains(text(),'Automation_Mohit')]"));
        this.lnkCohortAutomationMohit = element(By.xpath("//td[contains(text(),'"+ testData.Sprint9.AuthoringAddUser.cohort2Name + "')]"));
        this.journeyTwo=element(By.xpath("//span[contains(text(),'"+ testData.Sprint9.AuthoringAddUser.journeyTwo +"')]"));
        this.journeyTwoCohort=element(By.xpath("//td[contains(text(),'"+ testData.Sprint9.AuthoringAddUser.journeyTwoCohortName + "')]"))
        this.userDashboard = element(By.xpath("//div[contains(text(),' User Dashboard')]"));
        this.cancelBtnAddUser = element(By.xpath("//div[@class='create-user-dialog']//button[contains(text(),'CANCEL')]"));

    }
}