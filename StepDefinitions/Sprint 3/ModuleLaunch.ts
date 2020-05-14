import { Given, When, Then } from "cucumber";
import { browser, element } from "protractor";
import config from "../config.json"
import chai = require('chai');
import { By } from "protractor";
import { async } from "q";
import { MyJourneyPageLocate } from "../../PageObjects/Sprint 3/MyJourneyPage.js";
import { ModuleLaunchPageLocate } from "../../PageObjects/Sprint 3/ModuleLaunchPage.js";
let expect = chai.expect;
let myjourneypage = new MyJourneyPageLocate();
let modulelaunchpage = new ModuleLaunchPageLocate();
let ModuleTitle = "Welcome to Sales Skills Simulation";
let MyJourneyTitle = "My Journey";
let activitiesArray1: Array<string> = [];
let activitiesArray2: Array<string> = ['A Tale of Two Mindsets',
    'Six Leadership Skills for the unforeseeable future',
    'Critical Disruptors in the Oil & Gas Industry',
    'Where does Emergent Leadership fit for you?',
    'Emergent Leadership Assessment'];

let firstWindow:any = browser.getAllWindowHandles().then(async function(handles){
    let firstWindowHandle = handles[0];
    return firstWindowHandle;
});
let secondWindow:any = browser.getAllWindowHandles().then(async function(handles){
    let secondWindowHandle = handles[1];
    return secondWindowHandle;
});


When('User clicks on preview button', async function () {
    await myjourneypage.myJourneyPreviewButton.isDisplayed().then(async function () {
        await myjourneypage.myJourneyPreviewButton.click();
    })
})

Then('Module page to be displayed with Module Title', async function () {
    await modulelaunchpage.moduleLaunchTitle.getText().then(async function (txt) {
        console.log(txt)
        expect(txt).to.be.equal(ModuleTitle);
        //await browser.quit();
        
    })
})

When('User clicks on back navigation arrow', async function () {
    await modulelaunchpage.moduleLaunchBackArrow.isEnabled().then(async function () {
        await modulelaunchpage.moduleLaunchBackArrow.click();
    })
});

Then('User should be landed back to My Journey Page', async function () {
    await myjourneypage.myJourneyPageTitle.isDisplayed().then(async function () {
        await myjourneypage.myJourneyPageTitle.getText().then(async function (txt) {
            console.log(txt)
            expect(txt).to.be.equal(MyJourneyTitle)
        })
    })

});

Then('User should also view the list of acitivities mapped to that module under Module Launch page', { timeout: 50 * 1000 }, async function () {
    await modulelaunchpage.moduleLaunchActivitiesList.each(function (element) {
        element.getText().then(function (text) {
            console.log("Activities : " + text);
            activitiesArray1.push(text);

        })
    })
    expect(activitiesArray2).to.include.members(activitiesArray1);
});

Then('User should be able to see duration of all activities', async function () {
    await modulelaunchpage.moduleLaunchActivitiesDuration.isDisplayed().then(async function () {
        await modulelaunchpage.moduleLaunchActivitiesList.count().then(function (count) {
            console.log(count);
            expect(count).to.be.equal(5);
        })
    })
});

When('My Journey page should open up in different tab for Module Launch', async function () {
    await browser.getAllWindowHandles().then(async function (handles) {
        let firstWindowHandle = handles[0];
        let secondWindowHandle = handles[1];
        await browser.switchTo().window(secondWindowHandle).then(async function () {
            await browser.sleep(5000).then(async function () {
                await myjourneypage.myJourneyPageTitle.isDisplayed().then(async function () {
                    await myjourneypage.myJourneyPageTitle.getText().then(async function (text) {
                        console.log(text)
                        // await browser.close();
                        // browser.switchTo().window(firstWindowHandle).then(async function () {
                        //     await browser.sleep(3000).then(async function(){
                        //         //await browser.close();
                        //     });
                        // })
                    })
                })
            })
        })
    })
})
 

Then('Module window should be closed', async function () {
    await browser.close().then(async function(){
        await browser.switchTo().window(firstWindow);
    })
})