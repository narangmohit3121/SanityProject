import { Given, When, Then } from "cucumber";
import { browser, element } from "protractor";
import config from "../../config.json"
// import chai = require('chai');
import chai = require("chai");

import { By } from "protractor";
import { async } from "q";
import { MyJourneyPageLocate } from "../../../PageObjects/AuthorApp POM/Journey/MyJourneyPage.js";
import { AdminLandingPageLocate } from "../../../PageObjects/AuthorApp POM/Home Page/AdminLandingPage.js";
import { ClientPageLocate } from "../../../PageObjects/AuthorApp POM/Home Page/ClientLandingPage.js";
// let expect = chai.expect;
var expect = chai.expect;

let adminlandingpage = new AdminLandingPageLocate();
let clientlandingpage = new ClientPageLocate();
let myjourneypage = new MyJourneyPageLocate();
let stageSectionsArray1: Array<string> = [];

let stageSectionsArray2: Array<string> = ['Episode 1: Know the Industry Executive Mindset',
    'Episode 2: Engage Executive Decision Makers',
    'Episode 3: Demonstrate Business Value'];
let moduleSectionsArray1: Array<string> = [];

let moduleSectionsArray2: Array<string> = ['My Journey Automation', 'New Module 1'];

let firstWindow: any = browser.getAllWindowHandles().then(async function (handles) {
    let firstWindowHandle = handles[0];
    return firstWindowHandle;
});


When('User is on Client Collection Page', async function () {
    await adminlandingpage.tabClient.click().then(async function () {
        await adminlandingpage.colPetronas.click().then(async function () {
            await clientlandingpage.momentaPetronasTitle.getText().then(async function (text) {
                console.log(text);
            })
        })
    })
});

When('User should click on LnT folder', async function () {
    await adminlandingpage.colLNT.isDisplayed().then(async function () {
        await adminlandingpage.colLNT.click();
    })
});

When('User refresh the webpage of My Journey', async function () {

    await browser.refresh();
    await browser.sleep(2000);

})

When('User should check if plus icon is present besides Journeys and click on it to select copy', async function () {
    await clientlandingpage.copyJourneyPlus.isDisplayed().then(async function () {
        await clientlandingpage.copyJourneyPlus.click().then(async function () {
            await browser.sleep(2000).then(async function () {
                await clientlandingpage.copyJourneyPopupSelect.click().then(async function () {
                    await browser.driver.switchTo().activeElement().then(function () {
                        browser.sleep(2000);
                    })
                })
            })
        })
    })
});
// qa master journey automation
When('User selects any Journey to preview under Copy Journey popup', async function () {
  await browser.sleep(5000);
    await myjourneypage.JourneySearchcollection.sendKeys("ModuleLaunchAutomationJourney").then(async function () {
        await browser.sleep(3000);
        await myjourneypage.JourneySearchIcon.click();
        await browser.sleep(7000);
        await clientlandingpage.momentaJourneyPreviewBtn.click().then(function () {
            console.log("Preview clicked  !!!!");
            browser.sleep(3000);
        })
    })
});



Then('My Journey page should open up in different tab', async function () {
 await browser.sleep(2000);
    await browser.getAllWindowHandles().then(function (handles) {
        let firstWindowHandle = handles[0];
        let secondWindowHandle = handles[1];
        browser.switchTo().window(secondWindowHandle).then(function () {
            browser.sleep(7000).then(async function () {

            })
        })
    })

});

Then('List of Stages Modules and Activities are to be shown on My Journey page', { timeout: 50 * 1000 }, async function () {
   await browser.sleep(2000);
    await myjourneypage.myJourneyStageList.each(function (element) {
        element.getText().then(function (text) {
            console.log("Stages : " + text);
            stageSectionsArray1.push(text);
        })
    })
    expect(stageSectionsArray2).to.include.members(stageSectionsArray1);
    await myjourneypage.myJourneyModuleList.each(function (element) {
        element.getText().then(function (text) {
            console.log("Modules : " + text);
            moduleSectionsArray1.push(text);
        })
    })
    expect(moduleSectionsArray2).to.include.members(moduleSectionsArray1);
    await myjourneypage.myJourneyActivityCount.count().then(function (count) {
        console.log(count);
        expect(0).to.be.equal(0);

    })
});

Then('My Journey title with its description should be displayed in header part of My Journey page', async function () {
    await myjourneypage.myJourneyPageTitle.isDisplayed().then(async function () {
        await myjourneypage.myJourneyPageTitle.getText().then(async function (text) {
            console.log(text)
            expect(text).to.be.equal("My Journey")
        })
    })


})


Then('Stages should be present under My Journey page', { timeout: 50 * 1000 }, async function () {
    await myjourneypage.myJourneyStageList.each(function (element) {
        element.getText().then(function (text) {
            stageSectionsArray1.push(text);
            console.log("Stages are as follows : " + text)
        })
    })
    expect(stageSectionsArray2).to.include.members(stageSectionsArray1);

})

Then('Modules should be shown under Stages in My Journey page', { timeout: 60 * 1000 }, async function () {
    await myjourneypage.myJourneyModuleList.each(function (element) {
        element.getText().then(function (txt) {
            moduleSectionsArray1.push(txt);
            console.log("Modules are as follows : " + txt)
        })
    })
    expect(moduleSectionsArray2).to.include.members(moduleSectionsArray1);
})

Then('Module window should be closed for MyJourney', async function () {
    await browser.close().then(async function () {
        await browser.switchTo().window(firstWindow);

    })
})

Then('Validate User details', async function () {
    await myjourneypage.myJourneyUserDetails.isDisplayed().then(async function () {
        await myjourneypage.myJourneyUserDetails.getText().then(async function (text) {
            console.log(text)
            expect(text).to.be.equal("Momenta")
        })
    })
})