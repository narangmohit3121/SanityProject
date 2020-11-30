import { Given, When, Then } from "cucumber";
import { browser, by, element, By, protractor, ExpectedConditions, Browser, ElementFinder, ElementArrayFinder } from "protractor";
import {ParticipantAssessment} from "../../PageObjects/PolarisProjectPages/ParticipantPage";
import config from "../config.json"
import chai from "chai";
import { async } from "q";
//import _ from "lodash";
//import { Driver } from "selenium-webdriver/ie";
var expect = chai.expect;
//declare var require: any;
let EC = ExpectedConditions;
let pa = new ParticipantAssessment();
//let path = require("path");

//var Excel = require('xlsx');
//var {setDefaultTimeout} = require('cucumber');

var {setDefaultTimeout} = require('cucumber');

setDefaultTimeout(60 * 1000);



Given('I will navigate to participant page and login with {string} and {string}', async (email, password) => {
  
  await browser.get(config.ParticipantPetronasUrl)
  await browser.sleep(2000)
  await browser.wait(EC.visibilityOf(pa.emailField),15000)
  await pa.emailField.sendKeys(email)
  await browser.wait(EC.visibilityOf(pa.pwdField),15000)
  await pa.pwdField.sendKeys(password)
  await pa.loginBtn.click()
  await browser.sleep(2000)  

    });


    Then ('I select {string} from dropdown', async (value) => {
      await browser.waitForAngularEnabled(false)
      await browser.wait(EC.visibilityOf(pa.journeyDropdown),15000)
      await pa.journeyDropdown.click()
      await browser.wait(EC.visibilityOf(pa.select),15000)
      await pa.select.click()
      await browser.waitForAngularEnabled(true)


});


 
Then('I click on Start button and initialise assessment', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.wait(EC.visibilityOf(pa.startBtn),15000)
  await pa.startBtn.click()
  await browser.waitForAngularEnabled(true)
});

Then('I will check the Title is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
 // await browser.wait(EC.invisibilityOf(element(by.className('loader'))), 25000)
   await pa.pageTitle.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
     // var tr = element(by.tagName('h3'))
     // await browser.wait(EC.visibilityOf(tr), 10000)
   await expect(title).to.equal(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the Percentage is {string}', async function (percentage) {
  await browser.waitForAngularEnabled(false)
  await pa.percentage.getText().then(async function (text) { 
  await console.log("the Percentage is ==>  " + text)
  await expect(percentage).to.equal(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will click on Next button', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.wait(EC.visibilityOf(pa.nextBtn), 5000)
  await browser.wait(EC.elementToBeClickable(pa.nextBtn), 5000)
  await pa.nextBtn.click()
  await browser.sleep(3000)
  await browser.waitForAngularEnabled(true)

});


Then('I will click on Reject button', async function () {
    await browser.waitForAngularEnabled(false)  
    await pa.rejectBtn;
    await browser.wait(EC.visibilityOf(pa.rejectBtn), 20000)
    await browser.wait(EC.elementToBeClickable(pa.rejectBtn), 20000)
    await pa.rejectBtn.click();
    await browser.waitForAngularEnabled(true)

});


    Then('I will check i am on participant page', async function () {
            browser.waitForAngularEnabled(false)
            await browser.getCurrentUrl().then(function (text) {
                expect(text).to.equal("https://petronastest.btsmomenta.com/#/auth/login")
        
            })
        });


        Then('I will click on Accept button', async function () {
          await browser.waitForAngularEnabled(false)  
          await pa.acceptBtn;
          await browser.wait(EC.visibilityOf(pa.acceptBtn), 20000)
          await browser.wait(EC.elementToBeClickable(pa.acceptBtn), 20000)
          await pa.acceptBtn.click();
          await browser.waitForAngularEnabled(true)
      
      });

  Then('I will fillout the user profile form', async function () {
    await browser.waitForAngularEnabled(false) 
    await pa.userprofileUsername.sendKeys("tester");
    await browser.sleep(1000)
    await pa.userprofileEmail.sendKeys("tester@bts.com");
    await browser.sleep(1000)
    await element(By.xpath('//select[@aria-label="Your age"]')).sendKeys("20-30");
    await browser.sleep(1000)
    await element(By.xpath('//select[@aria-label="Your gender"]')).sendKeys("Male");
    await browser.sleep(1000)
    await element(By.xpath('//select[@aria-label="Your race/ethnic identification"]')).sendKeys("Asian");
    await browser.sleep(1000)
    await browser.waitForAngularEnabled(true) 

});

Then('I will fillout the Single Horizontal form', async function () {
  await browser.waitForAngularEnabled(false)   
  await browser.sleep(2000)
  await element(By.xpath('//div[@class="mat-radio-outer-circle"]')).click();
  await browser.sleep(2000)
  await browser.waitForAngularEnabled(true)

});


Then('I will check the question is {string}', async function (question) {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(2000)
  await pa.question.getText().then(async function (text) { 
  await console.log("the Question is ==>  " + text)
  await expect(question).to.equal(text)
  await browser.sleep(2000)
  await browser.waitForAngularEnabled(true)

  })
});


Then('I will check error message', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.executeScript("arguments[0].scrollIntoView(true);", pa.nextBtn);
  await browser.sleep(2000)
  await pa.nextBtn.click()
  await browser.sleep(2000)
  await browser.executeScript("arguments[0].scrollIntoView(true);", pa.errorMsg);
  await pa.errorMsg.getText().then(async function (text) { 
  await console.log("the Error Message is ==>  " + text)
  await expect(text).to.equal("This question is mandatory")
  await browser.sleep(2000)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will fillout the Single Vertical form', async function () {

  await browser.waitForAngularEnabled(false)
  await element(By.xpath('//div[contains(text(),"I enjoy having the challenge")]')).click();
  await browser.sleep(2000)
  var elem = element(By.xpath('//div[contains(text(),"30-40 times")]'));
  await browser. executeScript("arguments[0]. click()",elem);
   await browser.sleep(2000)
  await browser.waitForAngularEnabled(true)


});


Then('I will fillout the texts form', async function () {

  await browser.waitForAngularEnabled(false)
  await browser.sleep(1000)
  element(By.xpath('//div[@class="mat-form-field-infix"]')).sendKeys("Testing Data")
   await browser.sleep(1000)
  await browser.waitForAngularEnabled(true)

});


Then('I will fillout the polar form', async function () {

  await browser.waitForAngularEnabled(false)
  await browser.sleep(1000)
  var elem = element(By.xpath('//mat-icon[contains(text(),"chevron_left")]'));
  await browser. executeScript("arguments[0]. click()",elem);
   await browser.sleep(1000)
  await browser.waitForAngularEnabled(true)

});

Then('I will fillout the Variable Grid form', async function () {

  await browser.waitForAngularEnabled(false)
  await browser.sleep(1000)
  var elem = element(By.xpath('//mat-icon[contains(text(),"chevron_left")]'));
  await browser. executeScript("arguments[0]. click()",elem);
   await browser.sleep(1000)
  await browser.waitForAngularEnabled(true)

});