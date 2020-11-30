import { Given, Then, When } from "cucumber";
import { browser, protractor } from "protractor";
import { ActivityLaunchLocate } from "../../../PageObjects/AuthorApp POM/Journey/ActivityLaunchPage";
import { AdminLandingPageLocate } from "../../../PageObjects/AuthorApp POM/Home Page/AdminLandingPage";
import { CommonLocate } from "../../../PageObjects/Common";
import { LoginPageLocate } from "../../../PageObjects/AuthorApp POM/Login/LoginPage";
import chai = require("chai");
import config from "../../config.json"

var expect = chai.expect;
var EC = protractor.ExpectedConditions;

let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let commonObjects = new CommonLocate();
let activityLaunchPage = new ActivityLaunchLocate();
var driver = browser.driver;

// Given('User should login in with {string} and {string}', { timeout: 10 * 10000 }, async function (string, string2) {
//     await browser.get(config.MomentaUserUrl);
//     await admloginpage.txtEmail.sendKeys(string);
//     await admloginpage.btnNextPwd.click();
//     await admloginpage.txtPassword.sendKeys(string2);
//     await admloginpage.btnLogin.click().then(function () {
//         browser.sleep(3000);
//     })
// });



When('User clicks on Plus Button to copy journey', async function () {
    await activityLaunchPage.btnJourneysPlus.click().then(function () {
        activityLaunchPage.mnuCopyJourney.click();
    })
})

When('User searches for the journey from master collection', async function(){
    await browser.sleep(3000);
        await activityLaunchPage.icnQACollection.isDisplayed().then(async function(){
            await activityLaunchPage.icnQACollection.click();
            await browser.sleep(3000);
            
        })
        // await activityLaunchPage.btnPreviewQAMasterJourneyAutomation.isDisplayed().then(async function(){
        //     await activityLaunchPage.btnPreviewQAMasterJourneyAutomation.click();
        //     console.log("Preview  button clicked !!!!!!");
        //     await browser.sleep(3000);
        // })
})

When('User selects any Journey to preview under Copy Journey popup to launch Activity', { timeout: 90 * 10000 }, async function () {
    browser.sleep(3000);
   // browser.ignoreSynchronization=true;
  //  browser.ignoreSynchronization=false;
    console.log("Before!!!!!!!!!!!!");
    await activityLaunchPage.btnFirstJourneyPreview.click().then(async function () {
      //  await activityLaunchPage.btnPreviewQAMasterJourneyAutomation.click().then(async function () {
        console.log("After !!!!!1");
        browser.sleep(3000);
        let parentWindowHandle: string = await browser.getWindowHandle();
        console.log(parentWindowHandle);
        let windowHandles: Array<string> = await browser.getAllWindowHandles();
        console.log("Window handel name is "+windowHandles);
        windowHandles.forEach(async function (handle) {
            if (!(handle === parentWindowHandle)) {
                await browser.switchTo().window(handle).then(async function () {
                    console.log('switched to new window');
                    await browser.sleep(5000);
                    await browser.wait(EC.visibilityOf(activityLaunchPage.btnFirstModulePreview));

                })
            }
        })
    })
})

When("User click on preview button of module", { timeout: 90 * 10000 }, async function () {
    //--
    await browser.waitForAngularEnabled(false);
    await activityLaunchPage.btnFirstModulePreview.isDisplayed().then(async function () {
        await activityLaunchPage.btnFirstModulePreview.click().then(async function () {
            await browser.waitForAngularEnabled(true);
        })

    })
})

When('user is able to see activity in module launch page', async function () {
    let moduleTitle: string = await activityLaunchPage.ttlModule.getText();
    expect(moduleTitle).to.be.not.null;
    console.log(moduleTitle);
    let firstActivityTitle: string = await activityLaunchPage.ttlFirstActivity.getText();
    expect(firstActivityTitle).to.be.not.null;
    console.log(firstActivityTitle);
});

When("user click start button of any activity under Module launch page", async function () {
    await activityLaunchPage.btnFirstActivityStart.click();
    await browser.sleep(1000);
})

//End of BackGround------------------------------------------------------------------------------

Then('Activity should get started and activity page should get displayed with activity title and content in it', async function () {
    let selectedActivityTitle = await activityLaunchPage.ttlActivityPage.getText();
    expect(selectedActivityTitle).to.be.not.null;
    // await browser.sleep(3000);
    //  await browser.close();
    //  console.log("1 tab colse");
    //  await browser.close();
    //  console.log("2 tab colse");
    //  await browser.close();
    //  console.log("3 tab colse");
})

//End of Scenario 1, Scenario 2-------------------------------------------------------------------




When("user go through the content",  async function () {
    //console.log("Come  on content page !!!");
    await activityLaunchPage.btnActivityContinue.isDisplayed().then(async function () {
        await activityLaunchPage.btnActivityContinue.click().then(function () {
           // console.log('Test Case 1,2 Passed');
            //browser.sleep(2000);
        })

    })
});

Then("Activity content should get displayed", async function () {
    await activityLaunchPage.pcoActivityPage.getText().then(async function (activityText) {
        //console.log(activityText);
        expect(activityText).to.be.not.null;
        //console.log('Test Case 3,4 Passed');
    });
})

//End of Scenario 3, Scenario 4-------------------------------------------------------------


When('user click on Back arrow button', async function () {
    browser.navigate().back().then(async function () {
        await browser.sleep(1000);
    })
})

Then("user should be able to go back on Module launch page", async function () {
    await activityLaunchPage.imgModuleProgress.isDisplayed().then(function (flag) {
        expect(flag).to.be.true;
        console.log("final Validation Passed !!!");
        browser.sleep(1000);
    })
});





Then("All browser tab should be closed", async function () {
    console.log("Before browser closed");
 await browser.sleep(2000);
  await driver.quit();
  console.log("After browser closed");
    
});
