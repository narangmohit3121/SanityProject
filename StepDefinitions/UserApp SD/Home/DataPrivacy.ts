import {When, Then} from "cucumber"
import {browser, protractor, element} from "protractor"
import chai = require('chai');
import { By } from "selenium-webdriver";
import { DataPrivacyPageLocate } from "../../../PageObjects/UserApp POM/Home/DataPrivacy";
let expect = chai.expect;
var EC = protractor.ExpectedConditions;

var TextPolicy : string = "I hereby declare that the information given in this application is true and correct to the best of my knowledge and belief. In case any information given in this application proves to be false or incorrect, I shall be responsible for the consequences.";
var TextDeny : string = "I deny the Agreement";
let expText : string = "DataPrivacy Module1";
let dataprivacy = new DataPrivacyPageLocate();

When('User click on {string} of Journey Configuration Tab', async function (tabName) {
    let tabNm: string = "//div[contains(text(),'"+ tabName +"')]"
    await element(By.xpath(tabNm)).click();
});

When('User toggles On Data Privacy Agreement to make it {string}', async function (tglStatus) {
    await browser.wait(EC.visibilityOf(dataprivacy.tglDataPrivacy)).then(async function(){
        await dataprivacy.tglDataPrivacy.click();
    })
});

When('User fills Policy Text', async function () {
    await browser.wait(EC.visibilityOf(dataprivacy.txtPolicyTxt)).then(async function(){
        await dataprivacy.txtPolicyTxt.sendKeys(TextPolicy)
    })
});

When('User enters Accept Button Text as {string}', async function (txtAccept) {
    await browser.wait(EC.visibilityOf(dataprivacy.txtAcceptBtn)).then(async function(){
        await dataprivacy.txtAcceptBtn.sendKeys(txtAccept)
    })
});

When('User enters Decline Button Text as {string}', async function (txtDecline) {
    await browser.wait(EC.visibilityOf(dataprivacy.txtDeclineBtn)).then(async function(){
        await dataprivacy.txtDeclineBtn.sendKeys(txtDecline)
    })
});

When('User fills Decline Modal Message', async function () {
    await browser.wait(EC.visibilityOf(dataprivacy.txtDeclinemsg)).then(async function(){
        await dataprivacy.txtDeclinemsg.sendKeys(TextDeny)
    })
});

When('User enters Decline Yes Button Text as {string}', async function (txtYes) {
    await browser.wait(EC.visibilityOf(dataprivacy.txtYesBtn)).then(async function(){
        await dataprivacy.txtYesBtn.sendKeys(txtYes)
    })
});

When('User enters Decline No Button Text as {string}', async function (txtNo) {
    await browser.wait(EC.visibilityOf(dataprivacy.txtNoBtn)).then(async function(){
        await dataprivacy.txtNoBtn.sendKeys(txtNo)
    })
});

When('Participant should be able to view Data Privacy Agreement Text', async function () {
    browser.waitForAngularEnabled(false);
    await browser.wait(EC.visibilityOf(dataprivacy.cntPolicy)).then(async function(){
        await dataprivacy.cntPolicy.getText().then(async function(actText){
            expect(actText).to.be.eql(TextPolicy);
        })
    })
    browser.waitForAngularEnabled(true);
});

When('Participant clicks on {string} button of Data Privacy Agreement', async function (btnAcceptDecline) {
    browser.waitForAngularEnabled(false);
    let DecAccButton: string = "//button[@name='" + btnAcceptDecline + "']"
        await element(By.xpath(DecAccButton)).click().then(async function(){
            await browser.sleep(2000);
        })
        browser.waitForAngularEnabled(true);
});

When('Participant clicks on {string} button of Decline Window', async function (btnYesNo) {
    browser.waitForAngularEnabled(false);
    let YesNoBtn: string = "//button[@name='" + btnYesNo + "']"
        await element(By.xpath(YesNoBtn)).click().then(async function(){
            await browser.sleep(2000);
        })
        browser.waitForAngularEnabled(true);
});

Then('Participant should be landed to Data Privacy Page itself', async function () {
    browser.waitForAngularEnabled(false);
    await browser.wait(EC.visibilityOf(dataprivacy.cntPolicy)).then(async function(){
        await dataprivacy.cntPolicy.getText().then(async function(actText){
            expect(actText).to.be.eql(TextPolicy);
        })
    })
    browser.waitForAngularEnabled(true);
});

Then('Participant should be landed to Login Page', async function () {
    browser.waitForAngularEnabled(false);
    await dataprivacy.btnLogin.isDisplayed().then(async function(){
        console.log("Participant should land to login Page");
    })
    browser.waitForAngularEnabled(true);
});

Then('Participant should land to Home Page', async function () {
    browser.waitForAngularEnabled(false);
    await browser.wait(EC.visibilityOf(dataprivacy.moduleDataPrivacy)).then(async function(){
        await dataprivacy.moduleDataPrivacy.getText().then(async function(actText){
            expect(actText).to.be.eql(expText);
        })
    })
    browser.waitForAngularEnabled(true);
});