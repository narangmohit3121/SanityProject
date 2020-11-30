import { ElementFinder, By, element } from "protractor";

export class LoginClientScreen {

    

    //self registration
    registerLink:ElementFinder
    forgotPasswordLink:ElementFinder;
    journeycodeField:ElementFinder
    submitButton:ElementFinder;
    cancelButton:ElementFinder;
    emailAddressTextBox:ElementFinder;
    firstNameTextBox:ElementFinder;
    lastNameTextBox:ElementFinder;
    enterPassword:ElementFinder;
    enterConfirmPassword:ElementFinder;
    termsCheckbox:ElementFinder;
    continueButton:ElementFinder;
    logoutlink:ElementFinder;
    unverifiedCohort:ElementFinder;
    


    //Validations
    invalidErrorMsg: ElementFinder;
    blankErrorMsg: ElementFinder;
    mandatoryFieldFirstName:ElementFinder;
    mandatoryFieldLastName:ElementFinder;
    mandatoryPassword:ElementFinder;
    mandatoryConfirmPassword:ElementFinder;
    mandatoryCheckbox:ElementFinder;
    passwordMismatch:ElementFinder;
    passwordValidationUpper:ElementFinder;
    emailalreadyExist:ElementFinder;
    passwordSpecial:ElementFinder;
    wrongValidation:ElementFinder
    invalidmsgstr: ElementFinder;



    constructor() {

        

        //Validations
        this.invalidErrorMsg = element(By.xpath("//div[@aria-label='Check email failed']"));
        this.blankErrorMsg = element(By.className('toast-message ng-star-inserted'));
        this.mandatoryFieldFirstName=element(By.xpath('//div[contains(text(),"Please enter first name")]'))
        this.mandatoryFieldLastName=element(By.xpath('//div[contains(text(),"Please enter last name")]'))
        this.mandatoryPassword=element(By.xpath('//div[contains(text(),"Please enter password")]'))
        this.mandatoryConfirmPassword=element(By.xpath('//div[contains(text(),"Please enter confirm password")]'))
        this.mandatoryCheckbox=element(By.xpath('//div[contains(text(),"Please accept term and conditions")]'))
        this.passwordMismatch=element(By.xpath('//div[contains(text(),"Password and confirm password did not match")]'))
        this.mandatoryCheckbox=element(By.xpath('//div[contains(text(),"Please accept term and conditions")]'))
        this.passwordValidationUpper=element(By.xpath('//div[contains(text(),"Password must have minimum 2 and maximum 4")]'))
        this.passwordSpecial=element(By.xpath('//div[contains(text(),"Password only allowed $,% special characters")]'))
        this.wrongValidation=element(By.xpath('//div[contains(text(),"email must be a valid email")]'))
        this.emailalreadyExist=element(By.xpath('//div[contains(text(),"already")]'))
        this.unverifiedCohort=element(By.xpath('//td[contains(text(),"unverified")]/following-sibling::td'))




        //self registration
        this.registerLink= element(By.linkText("Register New Account"))
        this.forgotPasswordLink= element(By.linkText("Forgot Password?"))
        this.journeycodeField=element(By.name('Enter Journey Code'))
        this.submitButton=element(By.xpath('//span[contains(text(),"Submit")]'))
        this.cancelButton=element(By.xpath('//span[contains(text(),"Cancel")]'))
        this.emailAddressTextBox=element(By.name("Enter Email Address"))
        this.firstNameTextBox=element(By.name("Enter First Name"))
        this.lastNameTextBox=element(By.name("Enter Last Name"))
        this.enterPassword=element(By.xpath('//input[@placeholder="Enter your Password"]'))
        this.enterConfirmPassword=element(By.xpath('//input[@placeholder="Enter verify Password"]'))
        this.termsCheckbox=element(By.tagName('mat-checkbox'))
        this.continueButton=element(By.xpath('//span[contains(text(),"Continue")]'))
        this.logoutlink=element(By.xpath('//span[contains(text(),"Logout")]'))
        




    }
}