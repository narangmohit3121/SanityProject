import { ExpectedConditions, browser, element, By } from "protractor";
import { FogetPassword } from "../../PageObjects/coreFunctionality/forgotPassword";
import { Given, Then } from "cucumber";
import { DriverProvider } from "protractor/built/driverProviders";
import chai = require('chai');
let EC= ExpectedConditions;
let forget=new FogetPassword()
var expect = chai.expect;

Then('I will click on forgot password link', async function(){
   await browser.wait(EC.visibilityOf(forget.forgotPasswordLink),15000)
    await forget.forgotPasswordLink.click()
})

Then('I will click on email recovery button', async function(){
    await browser.wait(EC.visibilityOf(forget.emailRecoveryLinkButton),15000)
    await forget.emailRecoveryLinkButton.click()
})

Then('I will check the error message is displayed',async function(){
    await browser.wait(EC.visibilityOf(forget.emailFormatErrorMessgae),15000)
    await forget.emailFormatErrorMessgae.isDisplayed().then(async function(bool){
        await expect(bool).to.be.true;
    })
})

Then('I will enter email on forgot password textbox {string}',async function(email){
    await browser.wait(EC.visibilityOf(forget.emailidTextBox),15000)
    await forget.emailidTextBox.click();
    await forget.emailidTextBox.clear();
    await forget.emailidTextBox.sendKeys(email);
})

Then('I will check the error message is displayed for user does not exist',async function(){
    await browser.wait(EC.visibilityOf(forget.userNotFound),15000)
    await forget.userNotFound.isDisplayed().then(async function(bool){
        await expect(bool).to.be.true;
    })
})

Then('I will open the new tab and check for the emails', async function(){
    let url = "https://www.mailinator.com/";
    await browser.executeScript("return window.open(arguments[0], '_blank')", url);
    await browser.getAllWindowHandles().then((handles) => {
         browser.switchTo().window(handles[1]);   
    })
    await browser.waitForAngularEnabled(false)
    await element(By.id('addOverlay')).click();
    await element(By.id('addOverlay')).sendKeys('tushartest1');
    await element(By.id('go-to-public')).click();
    await element(By.xpath('//td[contains(text(),"noreply")]')).get(1).click();
    var link=await element(By.xpath('//body[contains(text(),"Hello Test User")]')).getText();
    var updatedLink=await link.toString().replace("Hello Test User , Please use the link to update password : ","")
    await browser.get(updatedLink)    


})

Then('I will click on submit button of forgot password popup',async function(){
    await browser.wait(EC.visibilityOf(forget.submitButton),15000)
    await forget.submitButton.click();
})

Then('I will check the error is displayed on error',async function(){
    await browser.wait(EC.visibilityOf(forget.enterPasswordMessage),15000)
    await forget.enterPasswordMessage.isDisplayed().then(async function(bool){
        await expect(bool).to.be.true;
    })
})
Then('I will enter first password in forget password as {string}',async function(password1){
    await browser.wait(EC.visibilityOf(forget.newPasswordTextBox),15000)
    await forget.newPasswordTextBox.click();
    await forget.newPasswordTextBox.clear();
    await forget.newPasswordTextBox.sendKeys(password1);

})
Then('I will enter confirm password in forget password as {string}',async function(password1){
    await browser.wait(EC.visibilityOf(forget.newConfirmPasswordTextBox),15000)
    await forget.newConfirmPasswordTextBox.click();
    await forget.newConfirmPasswordTextBox.clear();
    await forget.newConfirmPasswordTextBox.sendKeys(password1);

})