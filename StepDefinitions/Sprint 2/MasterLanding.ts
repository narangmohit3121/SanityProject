import { Given, When, Then } from "cucumber";
import { browser, element } from "protractor";
import config from "../config.json"
import chai = require('chai');
import { Alert, WebElement } from "selenium-webdriver";
import { By } from "protractor";
import { LoginPageLocate } from "../../PageObjects/Sprint 1/LoginPage";
import { MasterLandingPageLocate } from "../../PageObjects/Sprint 2/MasterLandingPage.js";
import { async } from "q";
import { exec } from "child_process";
import { CommonLocate } from "../../PageObjects/common.js";
let expect = chai.expect;
let admloginpage = new LoginPageLocate();
let masterLandingpage = new MasterLandingPageLocate();
let common = new CommonLocate();
let sectionsArray1: Array<string> = [];
let sectionsArray2: Array<string> = ['FOLDERS', 'JOURNEYS', 'CONTENT'];
//let foldersArray1: Array<string> = [];
let foldersArray2: Array<string> = ['Frontline Leader', 'Leader of Leaders', 'Executive Leadership'];
let LnpArray1: Array<string> = [];
//let LNPArray2: Array<string> = ['Frontline Leader', 'Leader of Leaders', 'Executive Leadership'];

Given('User should login in with {string} and {string}', { timeout: 150 * 1000 }, async function (string, string2) {
    await browser.getCapabilities().then(async function (caps) {
        let browserName: string = caps.get("browserName");
        console.log(browserName);
        if (browserName === 'internet explorer' || browserName === 'Safari') {
            browser.resetUrl = 'about:blank';
        }
    })
    await browser.get(config.MomentaUserUrl);
    await admloginpage.txtEmail.sendKeys(string);
    await admloginpage.btnNextPwd.click();
    await admloginpage.txtPassword.sendKeys(string2);
    await admloginpage.btnLogin.click().then(function () {
        browser.sleep(3000);
    })
});

When('User clicks on Master tab', { timeout: 70 * 1000 }, async function () {
    await masterLandingpage.masterTab.isDisplayed().then(async function () {
        await masterLandingpage.masterTab.click().then(async function () {
            await browser.sleep(3000);
        });
    })
});

When('User clicks on any one of the collection under master tab', async function () {
    await masterLandingpage.masterTab.isDisplayed().then(async function () {
        await masterLandingpage.masterCollectionLeadership.click();
    })
});


Then('User is on Master Collection Landing Page', { timeout: 50 * 1000 }, async function () {
    await masterLandingpage.masterCollectionLandingTitle.isDisplayed().then(async function () {
        await masterLandingpage.masterCollectionLandingTitle.getText().then(function (title) {
            expect(title).to.equal("Master Collection");
        })
    })
});

Then('Number of folders and name of folders should match with side bar content and body content', { timeout: 50 * 1000 }, async function () {
    await masterLandingpage.masterCollectionFolders.each(function (element) {
        element.getText().then(function (text) {
            foldersArray2.push(text);
        })
    })
    await masterLandingpage.masterCollectionLeftNavigationPanel.each(function (element) {
        element.getText().then(function (text) {
            LnpArray1.push(text);
        })
    })
    expect(foldersArray2).to.include.members(LnpArray1);
});

When('Settings icon is loaded with BTS title besides it', async function () {
    await masterLandingpage.masterCollectionConfiguration.isDisplayed().then(async function () {
        await masterLandingpage.masterCollectionLandingTitle.getText().then(function (title) {
            console.log("Whats the Title displayed = " + title)
            expect(title).to.equal("Master Collection");
        })
    })
});

Then('Settings icon should be present and clickable', async function () {
    await masterLandingpage.masterCollectionConfiguration.isDisplayed().then(async function () {
        await masterLandingpage.masterCollectionConfiguration.click();
    })
});


When('User clicks on logo', async function () {
    await common.momentaLogo.isDisplayed().then(async function () {
        await common.momentaLogo.click();
    })

});

Then('User should be redirected to Admin Landing Page', async function () {
    await common.helloText.isDisplayed().then(async function (boo) {
        expect(boo).to.be.true;
    })
});

Then('User should view Folders, Journeys and Content Sections', async function () {
    await masterLandingpage.masterCollectionSections.each(function (element) {
        element.getText().then(function (text) {
            sectionsArray1.push(text);
        })
    })
    expect(sectionsArray2).to.include.members(sectionsArray1);

})