import { ElementFinder, element, By } from "protractor";

export class UserMappingPageLocate{

    jrn1643_1:ElementFinder;
    jrn1643_2:ElementFinder;
    ch1643_1:ElementFinder;
    ch1643_2:ElementFinder;
    btnCreateUser:ElementFinder;
    btnAddUser:ElementFinder;
    txtFirstName:ElementFinder;
    txtLastName:ElementFinder;
    txtEmail:ElementFinder;
    txtPassword:ElementFinder;
    btnCreate:ElementFinder;
    txtSearchUsers:ElementFinder;
    btnAddUserCancel:ElementFinder;
    btnViewMore:ElementFinder;

    constructor(){

        this.jrn1643_1=element(By.xpath("//span[contains(text(),'MoM-1643_1')]"));
        this.jrn1643_2=element(By.xpath("//span[contains(text(),'MoM-1643_2')]"));
        this.ch1643_1=element(By.xpath("//td[contains(text(),' Cohort_1643_1 ')]"));
        this.ch1643_2=element(By.xpath("//td[contains(text(),' Cohort_1643_2 ')]"));
        this.btnCreateUser=element(By.xpath("//button[@name='Create User']"));
        this.btnAddUser=element(By.xpath("//button[@name='Add User']"));
        this.txtFirstName=element(By.xpath("//input[@placeholder='First Name']"));
        this.txtLastName=element(By.xpath("//input[@placeholder='Last Name']"));
        this.txtEmail=element(By.xpath("//input[@placeholder='Email']"));
        this.txtPassword=element(By.xpath("//input[@placeholder='Password']"));
        this.btnCreate=element(By.xpath("//button[contains(text(),'CREATE')]"));
        this.txtSearchUsers=element(By.xpath("(//input[@placeholder='Search Users'])[2]"));
        this.btnAddUserCancel=element(By.xpath("//button[contains(text(),'CANCEL')]"));
        this.btnViewMore=element(By.xpath("//button[contains(text(),'View more')]"));
    }
}