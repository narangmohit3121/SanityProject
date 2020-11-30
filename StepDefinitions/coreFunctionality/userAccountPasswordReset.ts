import {Given, When, Then} from "cucumber";
import { browser, ExpectedConditions, element, By } from "protractor";
import config from "../config.json"
import chai = require('chai');
// import {LoginClientScreen} from "../../PageObjects/coreFunctionality/loginClientScreen"
import { Alert } from "selenium-webdriver";
import { AccountReset } from "../../PageObjects/coreFunctionality/userAccountPasswordReset";
import { futimes } from "fs";
let EC= ExpectedConditions;
let resetAccount=new AccountReset()
var expect = chai.expect;

Then('I will click on profile image',async function(){
    await browser.waitForAngularEnabled(false)
    await browser.wait(EC.invisibilityOf(element(By.className('loader'))),25000)
    // await browser.wait(EC.invisibilityOf(element(By.className(''))))
    await browser.wait(EC.visibilityOf(resetAccount.profileImage),15000)
    await resetAccount.profileImage.click();
})

Then('I will click on create new password button',async function(){
    await browser.wait(EC.visibilityOf(resetAccount.createPassword),15000)
    await resetAccount.createPassword.click();

})

Then('I will click on submit button on create new password popup',async function(){
    await browser.wait(EC.visibilityOf(resetAccount.submitButton),15000)
    await resetAccount.submitButton.click();
    
})
Then('I will check the validation message is displayed for User Account Password mandatory field',async function(){
    await browser.wait(EC.visibilityOf(resetAccount.PasswordRequired),15000)
   await  resetAccount.PasswordRequired.isDisplayed().then(async function(bool){
    await expect(bool).to.be.true

   })

})
Then('I will check the validation message is displayed for password format',async function(){
    await browser.wait(EC.visibilityOf(resetAccount.passwordValidation),15000)
   await  resetAccount.passwordValidation.isDisplayed().then(async function(bool){
    await expect(bool).to.be.true

   })

})
Then('I will check the validation message is displayed for User Account Password mismatch',async function(){
    await browser.wait(EC.visibilityOf(resetAccount.passwordNotMatched),15000)
   await  resetAccount.passwordNotMatched.isDisplayed().then(async function(bool){
    await expect(bool).to.be.true

   })

})
Then('I will check the validation message is displayed for User Account Password match',async function(){
    await browser.wait(EC.visibilityOf(resetAccount.passwordVerified),15000)
   await  resetAccount.passwordVerified.isDisplayed().then(async function(bool){
    await expect(bool).to.be.true

   })

})
Then('I will check the validation message is displayed for password lower case',async function(){
    await browser.wait(EC.visibilityOf(resetAccount.enterpasswordLower),15000)
   await  resetAccount.enterpasswordLower.isDisplayed().then(async function(bool){
    await expect(bool).to.be.true

   })

})
Then('I will check the validation message is displayed for special character',async function(){
    await browser.wait(EC.visibilityOf(resetAccount.specialCharacterRequired),15000)
   await  resetAccount.specialCharacterRequired.isDisplayed().then(async function(bool){
    await expect(bool).to.be.true

   })

})
Then('I will check the validation message is displayed for Specific special character',async function(){
    await browser.wait(EC.visibilityOf(resetAccount.enterPasswordSpecial),15000)
   await  resetAccount.enterPasswordSpecial.isDisplayed().then(async function(bool){
    await expect(bool).to.be.true

   })

})
// Then('I will check error is shown for used password',async function(){
//     await browser.wait(EC.visibilityOf(resetAccount.enteredOldPassword),15000)
//    await  resetAccount.enteredOldPassword.isDisplayed().then(async function(bool){
//     await expect(bool).to.be.true

//    })

// })
Then('I will check the success message is displayed',async function(){
    await browser.wait(EC.visibilityOf(resetAccount.succcessThumb),15000)
   await  resetAccount.succcessThumb.isDisplayed().then(async function(bool){
    await expect(bool).to.be.true

   })

})

Then('I will enter password for User Account Password as {string}',async function(password){
    await browser.wait(EC.visibilityOf(resetAccount.currentPassword),15000)
    await resetAccount.currentPassword.click();
    await resetAccount.currentPassword.clear();
    await resetAccount.currentPassword.sendKeys(password);
})

// Then('I will click on submit button on create new password popup',async function(){
//     await browser.wait(EC.visibilityOf(resetAccount.submitButton),15000)
//     await resetAccount.submitButton.click();
    
// })
Then('I will enter password for User Account Second Password as {string}',async function(password){
    await browser.wait(EC.visibilityOf(resetAccount.secondPasswordTextbox),15000)
    await resetAccount.secondPasswordTextbox.click();
    await resetAccount.secondPasswordTextbox.clear();
    await resetAccount.secondPasswordTextbox.sendKeys(password);
})
Then('I will enter password for User Account First Password as {string}',async function(password){
    await browser.wait(EC.visibilityOf(resetAccount.firstPasswordTextbox),15000)
    await resetAccount.firstPasswordTextbox.click();
    await resetAccount.firstPasswordTextbox.clear();
    await resetAccount.firstPasswordTextbox.sendKeys(password);
})