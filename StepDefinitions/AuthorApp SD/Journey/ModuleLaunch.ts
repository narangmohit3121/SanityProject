import { Given, When, Then } from "cucumber";
import { browser, element, protractor  } from "protractor";
import config from "../../config.json"
import chai = require('chai');
import { By } from "protractor";
import { async } from "q";
import { MyJourneyPageLocate } from "../../../PageObjects/AuthorApp POM/Journey/MyJourneyPage.js";
import { ModuleLaunchPageLocate } from "../../../PageObjects/AuthorApp POM/Journey/ModuleLaunchPage.js";
let expect = chai.expect;

var EC = protractor.ExpectedConditions;
let myjourneypage = new MyJourneyPageLocate();
let modulelaunchpage = new ModuleLaunchPageLocate();
// let ModuleTitle = "Module Launch Automation";
let ModuleTitle = "Module one";
let MyJourneyTitle = "My Journey";
let activitiesArray1: Array<string> = [];
let activitiesArray2: Array<string> = ['New Activity 1',
    'New Activity 2'];

let firstWindow:any = browser.getAllWindowHandles().then(async function(handles){
    let firstWindowHandle = handles[0];
    return firstWindowHandle;
});
let secondWindow:any = browser.getAllWindowHandles().then(async function(handles){
    let secondWindowHandle = handles[1];
    return secondWindowHandle;
});


When('User clicks on preview button', async function () {
    await browser.sleep(5000);
    await modulelaunchpage.moduleLaunchPreviewbtn.isDisplayed().then(async function () {
        await modulelaunchpage.moduleLaunchPreviewbtn.click();
        await browser.sleep(5000).then(async function () {
    })
})
});

Then('Module page to be displayed with Module Title', async function () {
    await browser.sleep(2000);
    await browser.wait(EC.visibilityOf(modulelaunchpage.moduleLaunchTitle),100000).then(async function(){
        await modulelaunchpage.moduleLaunchTitle.getText().then(async function (txt) {
            expect(txt).to.be.equal(ModuleTitle);  
          //  await browser.quit();     
            
        })

    })
   
})

When('User clicks on back navigation arrow', async function () {
    await browser.sleep(2000);
    await modulelaunchpage.moduleLaunchBackArrow.isDisplayed().then(async function () {
        await modulelaunchpage.moduleLaunchBackArrow.click();
    })
});

Then('User should be landed back to My Journey Page', async function () {
    await modulelaunchpage.myJourneyLbl.isDisplayed().then(async function () {
        await modulelaunchpage.myJourneyLbl.getText().then(async function (txt) {
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
            console.log("Duration of activities are"+count);
            expect(count).to.be.equal(0);
        })
    })
});

When('My Journey page should open up in different tab for Module Launch', async function () {
    await browser.sleep(5000);
    await browser.getAllWindowHandles().then(async function (handles) {
        let firstWindowHandle = handles[0];
        let secondWindowHandle = handles[1];
        await browser.switchTo().window(secondWindowHandle).then(async function () {
            await browser.sleep(5000).then(async function () {
                await browser.sleep(4000);
               // await myjourneypage.myJourneyPageTitle.isDisplayed().then(async function () {
                 //   await myjourneypage.myJourneyPageTitle.getText().then(async function (text) {
                        //console.log(text)
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
  //  })
//})
 

Then('Module window should be closed', async function () {
    await browser.close().then(async function(){
        await browser.switchTo().window(firstWindow);
    })
})


When("User click on start button of Module one", async function () {
    await browser.sleep(1000);
    await modulelaunchpage.moduleOnestartBtn.isDisplayed().then(async function () {
        await modulelaunchpage.moduleOnestartBtn.click();
   
})
});

