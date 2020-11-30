import { ElementFinder, By, element } from "protractor";

export class FogetPassword{
    forgotPasswordLink:ElementFinder;
    emailidTextBox:ElementFinder;
    emailRecoveryLinkButton:ElementFinder;
    cancelButton:ElementFinder;
    returnToLoginButton:ElementFinder;
    resendLink:ElementFinder;
    newPasswordTextBox:ElementFinder
    submitButton:ElementFinder;
    newConfirmPasswordTextBox:ElementFinder


    //Error message
    emailFormatErrorMessgae:ElementFinder;
    userNotFound:ElementFinder
    enterPasswordMessage:ElementFinder;
    enterPasswordNotMatch:ElementFinder;
    specialCharacter:ElementFinder;
    successfulUpdate:ElementFinder;




    constructor(){
        this.forgotPasswordLink= element(By.linkText("Forgot Password?"));
        this.emailidTextBox= element(By.xpath('//input[@aria-label="Enter your Email"]'))
        this.emailRecoveryLinkButton= element(By.xpath('//button[@aria-label="Email recovery link"]'))
        this.newPasswordTextBox= element(By.name('Enter New Password'))
        this.newConfirmPasswordTextBox= element(By.name("Enter New Password Again"))
        this.submitButton= element(By.id('btnsubmit'))
        this.enterPasswordMessage= element(By.xpath('//mat-error[contains(text()," Please enter New Password ")]'))
        this.enterPasswordNotMatch= element(By.xpath('//mat-error[contains(text()," do not match ")]'))
        this.specialCharacter= element(By.xpath('//div[contains(text(),"special Character ")]'))
        this.successfulUpdate= element(By.xpath('//div[contains(text(),"successfully")]'))
        this.userNotFound= element(By.xpath('//div[contains(text(),"User not found")]'))


    }


}