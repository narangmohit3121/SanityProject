import { ElementFinder, By, element } from "protractor";

export class AccountReset{
    clientEmail:ElementFinder;
    clientPassword:ElementFinder;
    loginButton:ElementFinder;
    profileImage:ElementFinder;
    createPassword:ElementFinder;
    currentPassword:ElementFinder;
    submitButton:ElementFinder;
    firstPasswordTextbox:ElementFinder
    secondPasswordTextbox:ElementFinder;

    //validation message
    passwordNotMatched:ElementFinder;
    passwordVerified:ElementFinder;
    PasswordRequired:ElementFinder
    passwordValidation:ElementFinder
    specialCharacterRequired:ElementFinder
    enteredOldPassword: ElementFinder
    enterpasswordLower: ElementFinder;
    enterPasswordSpecial: ElementFinder;
    succcessThumb:ElementFinder


    constructor(){
        this.clientEmail=element(By.id("userEmail"))
        this.clientPassword=element(By.id("password"))
        this.profileImage=element(By.className('profile__progress'));
        this.loginButton=element(By.id('btnLogin'))
        this.createPassword=element(By.xpath('//span[contains(text()," Create a new password")]'))
        this.currentPassword=element(By.id('password__field'))
        this.submitButton=element(By.name('submit'));
        this.firstPasswordTextbox=element(By.xpath("//app-change-password/div/div[2]/div[1]/div[1]/div/div/input"))
        this.secondPasswordTextbox=element(By.xpath("//app-change-password/div/div[2]/div[1]/div[2]/div/div/input"))

        


        //validationmessage
        this.passwordNotMatched=element(By.xpath('//div[contains(text()," Password mismatch ")]'))
        this.passwordVerified=element(By.xpath('//div[contains(text()," Password Verified")]'))
        this.PasswordRequired=element(By.xpath('//div[contains(text()," Please enter password")]'))
        this.passwordValidation=element(By.xpath('//div[contains(text()," Password must have minimum 2 and maximum 25 character long ")]'))
        this.specialCharacterRequired=element(By.xpath('//div[contains(text()," Password must have minimum 1 special character ")]'))
        this.enterpasswordLower = element(By.xpath('//div[contains(text(),"minimum 2 and maximum 4 lowercase")]'))
        this.enterPasswordSpecial = element(By.xpath('//div[contains(text(),"$,% special characters")]'))
        this.enteredOldPassword = element(By.xpath('//div[contains(text(),"User password already used")]'))
        this.succcessThumb= element(By.xpath('//span[contains(text()," thumb_up ")]'))



    }

}