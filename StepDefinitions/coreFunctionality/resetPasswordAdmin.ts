import {Given, When, Then} from "cucumber";
import { browser, ExpectedConditions, element, By } from "protractor";
import config from "../config.json"
import chai = require('chai');
// import {LoginClientScreen} from "../../PageObjects/coreFunctionality/loginClientScreen"
import { Alert } from "selenium-webdriver";
import { RegistrationAdmin } from "../../PageObjects/coreFunctionality/resetPasswordAdmin";
let EC= ExpectedConditions;
let registration=new RegistrationAdmin()
var expect = chai.expect;


Given('I navigate to user details page in admin',async function(){
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
    await registration.adminCollectionSearch.sendKeys("practice journey2")
    await element(By.xpath('//span[contains(text(),"Practice Journey2")]')).click();
    await browser.wait(EC.invisibilityOf(element(By.className('loader_container'))),30000)
    await registration.cohortOfTestUnverified.click()
    await browser.wait(EC.invisibilityOf(element(By.className('loader_container'))),30000)
    await registration.cohortUnverifiedEmail.click()
    await browser.wait(EC.invisibilityOf(element(By.className('loader_container'))),30000)



});

Then('I will click on Reset Password Button',async function(){
    await browser.wait(EC.visibilityOf(registration.resetPasswordButton),15000)
    await registration.resetPasswordButton.click();   
      
})

Then('I will click on update password button',async function(){
    await browser.wait(EC.visibilityOf(registration.updatePasswordButton),15000)
    await registration.updatePasswordButton.click();   
      
})
Then('I will enter password in reset password admin as {string}',async function(password){
    await browser.wait(EC.visibilityOf(registration.newPasswordTextbox),15000)
    await registration.newPasswordTextbox.click();
    await registration.newPasswordTextbox.clear();
    await registration.newPasswordTextbox.sendKeys(password)
})
Then('I will enter confirm password in reset password admin as {string}',async function(password){
    await browser.wait(EC.visibilityOf(registration.newConfirmPasswordTextbox),15000)
    await registration.newConfirmPasswordTextbox.click();
    await registration.newConfirmPasswordTextbox.clear();
    await registration.newConfirmPasswordTextbox.sendKeys(password)
})
Then('I will check mandatory field error is shown for password',async function(){
    await browser.wait(EC.visibilityOf(registration.enterPasswordMessage),15000)
    await registration.enterPasswordMessage.isDisplayed().then(function(bool){
        expect(bool).to.be.true
    })
    

})
Then('I will check mandatory field error is shown for confirm password',async function(){
    await browser.wait(EC.visibilityOf(registration.enterConfirmPasswordMessage),15000)
    await registration.enterConfirmPasswordMessage.isDisplayed().then(function(bool){
        expect(bool).to.be.true
    })
})
Then('I will check error is shown for password mismatch',async function(){
    await browser.wait(EC.visibilityOf(registration.enterPasswordMismatch),15000)
    await registration.enterPasswordMismatch.isDisplayed().then(function(bool){
        expect(bool).to.be.true
        registration.enterPasswordMismatch. click();
    })
})
Then('I will check error is shown for password pattern',async function(){
    await browser.wait(EC.visibilityOf(registration.enterpasswordLower),15000)
    await registration.enterpasswordLower.isDisplayed().then(function(bool){
        expect(bool).to.be.true
        registration.enterpasswordLower.click();
    })
})
Then('I will check error is shown for special character',async function(){
    await browser.wait(EC.visibilityOf(registration.enterPasswordSpecial),15000)
    await registration.enterPasswordSpecial.isDisplayed().then(function(bool){
        expect(bool).to.be.true
    })
})
Then('I will check error is shown for used password',async function(){
    await browser.wait(EC.visibilityOf(registration.enteredOldPassword),15000)
    await registration.enteredOldPassword.isDisplayed().then(function(bool){
        expect(bool).to.be.true
    })

})
Then('I will check success message for password updation',async function(){
    await browser.wait(EC.visibilityOf(registration.successfulUpdate),15000)
    await registration.successfulUpdate.isDisplayed().then(function(bool){
        expect(bool).to.be.true
    })
})
Then('I will enter email id on chevron as {string}',async function(password){
    await browser.wait(EC.visibilityOf(registration.chevronEmail),15000)
    await registration.chevronEmail.click();
    await registration.chevronEmail.clear();
    await registration.chevronEmail.sendKeys(password)
})
Then('I will enter password on chevron as {string}',async function(password){
    await browser.wait(EC.visibilityOf(registration.chevronPassword),15000)
    await registration.chevronPassword.click();
    await registration.chevronPassword.clear();
    await registration.chevronPassword.sendKeys(password)
})
Then('I will click on login button',async function(){
    await browser.wait(EC.visibilityOf(registration.chevronLogin),15000)
    await registration.chevronLogin.click(); 
    await browser.sleep(5000)  
      
})
Then('I will check journey dropdown displayed',async function(){
    await browser.wait(EC.invisibilityOf(element(By.className('loader'))),25000)
    // await browser.waitForAngularEnabled(false)
    await browser.wait(EC.visibilityOf(registration.chevronJourneySelect),15000)
    await registration.chevronJourneySelect.isDisplayed().then(async function(bool){
       await expect(bool).to.be.true;
    })  
      
})
