import { ElementFinder, By, element, browser, ExpectedConditions } from "protractor";
let EC = ExpectedConditions

export class RegistrationAdmin {
    adminEmail: ElementFinder;
    adminNextButton: ElementFinder;
    adminPassword: ElementFinder;
    adminLoginButton: ElementFinder;
    adminSearchbox: ElementFinder;
    adminUsersTab: ElementFinder;
    adminClientTab: ElementFinder;
    adminCollectionSearch: ElementFinder;
    cohortOfTestUnverified: ElementFinder;
    cohortUnverifiedEmail: ElementFinder;
    resetPasswordButton: ElementFinder;
    newPasswordTextbox: ElementFinder;
    newConfirmPasswordTextbox: ElementFinder;
    updatePasswordButton: ElementFinder;
    resetLink: ElementFinder;
    chevronEmail:ElementFinder;
    chevronPassword:ElementFinder;
    chevronLogin:ElementFinder;
    chevronJourneySelect:ElementFinder;

    //Validation
    enterPasswordMessage: ElementFinder;
    enterConfirmPasswordMessage: ElementFinder;
    enterPasswordMismatch: ElementFinder;
    enteredOldPassword: ElementFinder
    enterpasswordLower: ElementFinder;
    enterPasswordSpecial: ElementFinder;
    successfulUpdate: ElementFinder;




    constructor() {
        this.adminEmail = element(By.xpath('//input[@placeholder="Email"]'))
        this.adminNextButton = element(By.name('next'))
        this.adminPassword = element(By.xpath('//input[@type="password"]'))
        this.adminLoginButton = element(By.name('login'))
        this.adminSearchbox = element(By.xpath('//input[@type="text"]'))
        this.adminClientTab = element(By.xpath('//div[contains(text(),"Client")]'))
        this.adminUsersTab = element(By.xpath('//div[contains(text(),"Users")]'))
        this.adminCollectionSearch = element(By.xpath('//input[@placeholder="Filter Journeys"]'))
        this.cohortOfTestUnverified = element(By.xpath('//td[contains(text()," test user without email verification ")]'))
        this.cohortUnverifiedEmail = element(By.xpath('//td[contains(text(),"tushartest2@mailinator.com")]/preceding-sibling::td[contains(text(),"Test")]'))
        this.resetPasswordButton = element(By.xpath('//button[contains(text(),"Reset Password")]'))
        this.newPasswordTextbox = element(By.xpath('//input[@placeholder="New Password"]'))
        this.newConfirmPasswordTextbox = element(By.xpath('//input[@placeholder="Confirm Password"]'))
        this.updatePasswordButton = element(By.xpath('//button[contains(text(),"Update Password")]'))
        this.resetLink = element(By.xpath('//button[contains(text(),"Reset Link")]'))
        this.chevronEmail=element(By.id('userEmail'))
        this.chevronPassword=element(By.id('password'))
        this.chevronLogin=element(By.xpath('//span[contains(text(),"Login")]'))
        this.chevronJourneySelect=element(By.xpath('//h1[contains(text(),"Dive back in")]'))



        // Validation message
        this.enterPasswordMessage = element(By.xpath('//div[contains(text(),"Please enter password")]'))
        this.enterConfirmPasswordMessage = element(By.xpath('//div[contains(text(),"Please enter confirm password")]'))
        this.enterPasswordMismatch = element(By.xpath('//div[contains(text(),"Password do not match.")]'))
        this.enterpasswordLower = element(By.xpath('//div[contains(text(),"minimum 2 and maximum 4 lowercase")]'))
        this.enterPasswordSpecial = element(By.xpath('//div[contains(text(),"$,% special characters")]'))
        this.enteredOldPassword = element(By.xpath('//div[contains(text(),"User password already used")]'))
        this.successfulUpdate = element(By.xpath('//div[contains(text()," Password reset successfully for this user. ")]'))





    }

}