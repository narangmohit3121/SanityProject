import {Given, When, Then} from "cucumber";
import { browser, ExpectedConditions, element, By } from "protractor";
import config from "../config.json"
import chai = require('chai');
import {LoginClientScreen} from "../../PageObjects/coreFunctionality/loginClientScreen"
import { RegistrationAdmin } from "../../PageObjects/coreFunctionality/resetPasswordAdmin";
import { Alert } from "selenium-webdriver";
let EC= ExpectedConditions;
let chevtonclient=new LoginClientScreen()
let registration=new RegistrationAdmin()
var expect = chai.expect;

Given('I navigate to cohort details page in admin and check {string} in the text',async function(testnum){
    await browser.get(config.momentaAuthor)
    await browser.wait(EC.visibilityOf(registration.adminEmail),15000)
    await registration.adminEmail.click();
    await registration.adminEmail.sendKeys("neha.seth@bts.com")
    await registration.adminNextButton.click()
    await browser.wait(EC.visibilityOf(registration.adminPassword),15000)
    await registration.adminPassword.sendKeys("ABab12$")
    await registration.adminLoginButton.click()
    await browser.sleep(6000)
    await browser.wait(EC.invisibilityOf(element(By.className('loader_container'))),30000)
    await browser.wait(EC.visibilityOf(registration.adminClientTab),15000)
    await registration.adminClientTab.click();
    await registration.adminSearchbox.sendKeys('chevron')
    await element(By.xpath('//span[contains(text(),"Chevron")]')).click();
    await browser.wait(EC.invisibilityOf(element(By.className('loader_container'))),30000)
    await registration.adminUsersTab.click();
    await browser.wait(EC.invisibilityOf(element(By.className('loader_container'))),30000)
    await browser.executeScript("arguments[0].scrollIntoView(true);", registration.adminCollectionSearch);
    await registration.adminCollectionSearch.click();
    await registration.adminCollectionSearch.sendKeys("New Test")
    await element(By.xpath('//span[contains(text(),"New Test")]')).click();
    await browser.wait(EC.invisibilityOf(element(By.className('loader_container'))),30000)
    await chevtonclient.unverifiedCohort.getText().then(async function(string){
        await expect(string).to.equal(testnum)
    })
    
});
Given('I will navigate to chevron client', async function(){
    await browser.get(config.chevronclient);
})

Then('I will click on Register new account',async function(){
    await browser.wait(EC.visibilityOf(chevtonclient.registerLink),15000)
    await chevtonclient.registerLink.click();
})
Then('I will enter journey code as {string}',async function(journeycode){
    await browser.wait(EC.visibilityOf(chevtonclient.journeycodeField),15000)
    await chevtonclient.journeycodeField.click();
    await chevtonclient.journeycodeField.clear();
    await chevtonclient.journeycodeField.sendKeys(journeycode);
})
Then('I will click on submit button',async function(){
    await browser.wait(EC.visibilityOf(chevtonclient.submitButton),15000)
    await chevtonclient.submitButton.click();

})
Then('I will click on continue button',async function(){
    await browser.wait(EC.visibilityOf(chevtonclient.continueButton),15000)
    await chevtonclient.continueButton.click();

})
Then('I will click on logout link',async function(){
    await browser.wait(EC.visibilityOf(chevtonclient.logoutlink),15000)
    await chevtonclient.logoutlink.click();

})
Then('I will click on log button',async function(){
    await browser.wait(EC.visibilityOf(chevtonclient.continueButton),15000)
    await chevtonclient.continueButton.click();

})
Then('I will enter email as {string}',async function(emailaddress){
    await browser.wait(EC.visibilityOf(chevtonclient.emailAddressTextBox),15000)
    await chevtonclient.emailAddressTextBox.click();
    await chevtonclient.emailAddressTextBox.clear();
    await chevtonclient.emailAddressTextBox.sendKeys(emailaddress);
})
Then('I will enter first name as {string}',async function(name){
    await browser.wait(EC.visibilityOf(chevtonclient.firstNameTextBox),15000)
    await chevtonclient.firstNameTextBox.click();
    await chevtonclient.firstNameTextBox.clear();
    await chevtonclient.firstNameTextBox.sendKeys(name);
})
Then('I will enter last name as {string}',async function(lastname){
    await browser.wait(EC.visibilityOf(chevtonclient.lastNameTextBox),15000)
    await chevtonclient.lastNameTextBox.click();
    await chevtonclient.lastNameTextBox.clear();
    await chevtonclient.lastNameTextBox.sendKeys(lastname);
})
Then('I will enter password as {string}',async function(password){
    await browser.wait(EC.visibilityOf(chevtonclient.enterPassword),15000)
    await chevtonclient.enterPassword.click();
    await chevtonclient.enterPassword.clear();
    await chevtonclient.enterPassword.sendKeys(password);
})
Then('I will enter confirm password as {string}',async function(confirmpassword){
    await browser.wait(EC.visibilityOf(chevtonclient.enterConfirmPassword),15000)
    await chevtonclient.enterConfirmPassword.click();
    await chevtonclient.enterConfirmPassword.clear();
    await chevtonclient.enterConfirmPassword.sendKeys(confirmpassword);
})

Then('I will check mandatory error message is displayed for first name',async function(){
    await browser.wait(EC.visibilityOf(chevtonclient.mandatoryFieldFirstName),15000)
    await expect(chevtonclient.mandatoryFieldFirstName.isDisplayed()).to.be.true;

})
Then('I will check mandatory error message for last name',async function(){
    await browser.wait(EC.visibilityOf(chevtonclient.mandatoryFieldLastName),15000)
    await expect(chevtonclient.mandatoryFieldLastName.isDisplayed()).to.be.true;

})
Then('I will check mandatory error message is displayed for password',async function(){
    await browser.wait(EC.visibilityOf(chevtonclient.mandatoryPassword),15000)
   await expect(chevtonclient.mandatoryPassword.isDisplayed()).to.be.true;

})
Then('I will check mandatory error message is displayed for confirm password',async function(){
    await browser.wait(EC.visibilityOf(chevtonclient.mandatoryConfirmPassword),15000)
   await expect(chevtonclient.mandatoryConfirmPassword.isDisplayed()).to.be.true;

})
Then('I will check mandatory error message is displayed for Terms and Condition',async function(){
    await browser.wait(EC.visibilityOf(chevtonclient.mandatoryCheckbox),15000)
    expect(chevtonclient.mandatoryCheckbox.isDisplayed()).to.be.true;

})
Then('I will check for validation message for password criteria',async function(){
    await browser.wait(EC.visibilityOf(chevtonclient.passwordValidationUpper),15000)
    expect(chevtonclient.passwordValidationUpper.isDisplayed()).to.be.true;

})
Then('I will check for validation message for password criteria special character',async function(){
    await browser.wait(EC.visibilityOf(chevtonclient.passwordSpecial),15000)
    expect(chevtonclient.passwordSpecial.isDisplayed()).to.be.true;

})
Then('I will check for validation message for password mismatch',async function(){
    await browser.wait(EC.visibilityOf(chevtonclient.passwordMismatch),15000)
    expect(chevtonclient.passwordMismatch.isDisplayed()).to.be.true;

})
Then('I will click on Terms and Condition Box',async function(){
    await browser.wait(EC.visibilityOf(chevtonclient.termsCheckbox),15000)
    await chevtonclient.termsCheckbox.click();

})