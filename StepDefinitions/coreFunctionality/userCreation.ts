import {Given, When, Then} from "cucumber";
import { browser, ExpectedConditions, element, By } from "protractor";
import config from "../config.json"
import chai = require('chai');
// import {LoginClientScreen} from "../../PageObjects/coreFunctionality/loginClientScreen"
import { Alert } from "selenium-webdriver";
import { UserCreation } from "../../PageObjects/coreFunctionality/userCreation";
let EC= ExpectedConditions;
let userCreation=new UserCreation()
var expect = chai.expect;

Given('I navigate to cohort details page in admin',async function(){
    await browser.get(config.momentaAuthor)
    await browser.wait(EC.visibilityOf(userCreation.adminEmail),15000)
    await userCreation.adminEmail.click();
    await userCreation.adminEmail.sendKeys("neha.seth@bts.com")
    await userCreation.adminNextButton.click()
    await browser.wait(EC.visibilityOf(userCreation.adminPassword),15000)
    await userCreation.adminPassword.sendKeys("ABab12$")
    await userCreation.adminLoginButton.click()
    await browser.sleep(6000)
    await browser.wait(EC.invisibilityOf(element(By.className('loader_container'))),30000)
    await browser.wait(EC.visibilityOf(userCreation.adminClientTab),15000)
    await userCreation.adminClientTab.click();
    await userCreation.adminSearchbox.sendKeys('chevron')
    await element(By.xpath('//span[contains(text(),"Chevron")]')).click();
    await browser.wait(EC.invisibilityOf(element(By.className('loader_container'))),30000)
    await userCreation.adminUsersTab.click();
    await browser.wait(EC.invisibilityOf(element(By.className('loader_container'))),30000)
    await browser.executeScript("arguments[0].scrollIntoView(true);", userCreation.adminCollectionSearch);
    await userCreation.adminCollectionSearch.click();
    await userCreation.adminCollectionSearch.sendKeys("Practice Test 3")
    await element(By.xpath('//span[contains(text(),"Practice Test 3")]')).click();
    await browser.wait(EC.invisibilityOf(element(By.className('loader_container'))),30000)
    await userCreation.cohortOfTestUnverified.click()
    await browser.wait(EC.invisibilityOf(element(By.className('loader_container'))),30000)    

})

Then('I will click on create user',async function(){
    await browser.wait(EC.visibilityOf(userCreation.createUserButton),15000)
    await userCreation.createUserButton.click()
})
Then('I will enter first name to create user as {string}',async function(firstName){
   await browser.wait(EC.visibilityOf(userCreation.createUserFirstName),15000)
   await userCreation.createUserFirstName.click();
   await userCreation.createUserFirstName.clear()
   await userCreation.createUserFirstName.sendKeys(firstName);
})
Then('I will enter last name to create user as {string}',async function(lastName){
    await browser.wait(EC.visibilityOf(userCreation.createUserLastName),15000)
    await userCreation.createUserLastName.click();
    await userCreation.createUserLastName.clear()
    await userCreation.createUserLastName.sendKeys(lastName);
 })
 Then('I will enter email to create user as {string}',async function(email){   
    await browser.wait(EC.visibilityOf(userCreation.createUserEmail),15000)
    await userCreation.createUserEmail.click();
    await userCreation.createUserEmail.clear()
    await userCreation.createUserEmail.sendKeys(email);
 })
Then('I will click on generate password',async function(){
    await browser.executeScript("arguments[0].scrollIntoView(true);", userCreation.generatedPassword);
    await browser.wait(EC.visibilityOf(userCreation.generatedPassword),15000)
    await userCreation.generatedPassword.click()  
})
Then('I will click on create user button',async function(){
    await browser.wait(EC.visibilityOf(userCreation.createButton),15000)
    await userCreation.createButton.click()  
})
Then('I will check the success messagge is displayed',async function(){
    // await browser.wait(EC.visibilityOf(userCreation.succesMessage),15000)
    await userCreation.succesMessage.isDisplayed().then(async function(bool){
        await expect(bool).to.be.true;
    })
})