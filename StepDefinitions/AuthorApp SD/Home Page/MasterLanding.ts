import { Given, When, Then } from "cucumber";
import { browser, element } from "protractor";
import config from "../../config.json"
import chai = require('chai');
import { Alert, WebElement } from "selenium-webdriver";
import { By } from "protractor";
import { LoginPageLocate } from "../../../PageObjects/AuthorApp POM/Login/LoginPage";
import { MasterLandingPageLocate } from "../../../PageObjects/AuthorApp POM/Home Page/MasterLandingPage.js";
import { async } from "q";
import { exec } from "child_process";
import { CommonLocate } from "../../../PageObjects/Common";
import { protractor } from "protractor/built/ptor";
let expect = chai.expect;
let EC = protractor.ExpectedConditions;

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
        //console.log(browserName);
        if (browserName === 'internet explorer' || browserName === 'Safari') {
            browser.resetUrl = 'about:blank';
        }
    })
    if (browser.params.prodSanityRun) {
        await browser.get(config.momentaAuthorProd)
    }
    else {
        await browser.get(config.MomentaUserUrl);
    }
    await browser.wait(EC.visibilityOf(admloginpage.txtEmail), 20000).then(null, async function (err) {
        if (err) {
            console.log('Email button not visible on admin login');
        }
    })
    await admloginpage.txtEmail.sendKeys(string).then(async function () {
        await browser.wait(EC.visibilityOf(admloginpage.btnNextPwd), 20000).then(null, async function (err) {
            if (err) {
                console.log('User not taken to Password page');
            }
        });
        await admloginpage.btnNextPwd.click();
        await browser.sleep(3000);
    })
    await browser.wait(EC.visibilityOf(admloginpage.txtPassword), 20000).then(null, async function (err) {
        if (err) {
            console.log('Password button not visible on admin login. Clicking on Next again');
            await admloginpage.btnNextPwd.click();
        }
    })
    await admloginpage.txtPassword.sendKeys(string2).then(async function () {
        await admloginpage.btnLogin.click().then(async function () {
            await browser.sleep(3000);
        })
    })
    //------------------------------------------------------------------------
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
    await masterLandingpage.tabMasterCollectionTitleAsBTS.isDisplayed().then(async function () {
        await masterLandingpage.tabMasterCollectionTitleAsBTS.getText().then(function (title) {
            expect(title).to.equal("BTS");
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

// When('Settings icon is loaded with BTS title besides it', async function () {
//     await masterLandingpage.masterCollectionConfiguration.isDisplayed().then(async function () {
//         await masterLandingpage.masterCollectionLandingTitle.getText().then(function (title) {
//             console.log("Whats the Title displayed = " + title)
//             expect(title).to.equal("Master Collection");
//         })
//     })
// });

Then('Configure Client and Manage Permissions button should be present', async function () {
    await masterLandingpage.clientConfigurationBtn.isDisplayed().then(async function (clientConfigurationBtnresult) {
        expect(clientConfigurationBtnresult).to.be.true;
    });

    await masterLandingpage.ManagePermissionBtn.isDisplayed().then(async function (ManagePermissionBtnresult) {
        expect(ManagePermissionBtnresult).to.be.true;
    });
});


When('User clicks on Master Collection tab', async function () {
    await masterLandingpage.masterCollectionArrowTab.isDisplayed().then(async function () {
        await masterLandingpage.masterCollectionArrowTab.click();
    })

});

// Then('User should be redirected to Admin Landing Page', async function () {
//     await common.helloText.isDisplayed().then(async function (boo) {
//         expect(boo).to.be.true;
//         console.log("Last validastion passed !!");
//     })
// });

Then('User should be redirected to Admin Landing Page', async function () {
    await common.helloText.isDisplayed().then(async function (boo) {
        expect(boo).to.be.true;
        console.log("Last validastion passed !!");
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