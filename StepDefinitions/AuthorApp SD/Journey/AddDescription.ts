import { Then, When, Before } from "cucumber";
import { browser, protractor, ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "protractor";
import { AddDescriptionPageLocate } from "../../../PageObjects/AuthorApp POM/Journey/AddDescriptionPage";
import { AdminLandingPageLocate } from "../../../PageObjects/AuthorApp POM/Home Page/AdminLandingPage";
import { CommonLocate } from "../../../PageObjects/Common";
import { LoginPageLocate } from "../../../PageObjects/AuthorApp POM/Login/LoginPage";
import { ParticipantActivityPageLocate } from "../../../PageObjects/UserApp POM/My Journey/ParticipantActivityPage";
import config from "../../config.json"
import chai = require("chai");
import { cmsHelperFunctions } from "../../cmsHelperClass";
import { apiHelperFunctions } from "../../apiHelperClass";
import Testdata from "../../../testData.json";



var expect = chai.expect;
import { async } from "q";
import { DriverProvider } from "protractor/built/driverProviders";
var EC = protractor.ExpectedConditions;

let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let commonObjects = new CommonLocate();
let addDescriptionPage = new AddDescriptionPageLocate();
let participantactivitypage = new ParticipantActivityPageLocate();

let today: Date = new Date();
let dd: string = String(today.getDate()).padStart(2, '0');
let mm: string = String(today.getMonth() + 1).padStart(2, '0');
let year: number = today.getFullYear();
let hours: number = today.getHours();
let minutes: number = today.getMinutes();

let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + ':' + minutes;

let latestModuleDescription = "ModuleDesc " + currentDateTime;

let apiHelper = new apiHelperFunctions();


Before({tags:"@AddDescription01"}, async function(){
    await apiHelper.resetUser(Testdata.AdminLogin.Username,Testdata.AdminLogin.Password,"bts",Testdata.apiBuildVersion,
    "5d82323fd9b8ca499403e5bd","updatemodule@petronas.com","bf3b592de53652d37631");
    await console.log(" Reset Journey Data of updatemodule@petronas.com");
})



When('User selects the Journey named {string}', async function (journeyName) {
    let selectedJourneyXpath: string = "//p[contains(text(),'" + journeyName + "')]/ancestor::a[contains(@class,'master-collection')]";
    await element(By.xpath(selectedJourneyXpath)).click().then(function () {
        browser.sleep(3000);
    })

})


// When("User edits Description for the Module {string}", async function (moduleName) {
//     let editModuleBtnXpath: string = "//p[contains(text(),'" + moduleName + "')]/ancestor::mat-panel-title/following-sibling::mat-panel-description//button";
//     await element(By.xpath(editModuleBtnXpath)).click().then(async function () {
//         await addDescriptionPage.btnOptionEditModule.click().then(async function () {
//             //console.log('here1');
//             await addDescriptionPage.txtModuleDescription.click().then(async function () {
//                 await addDescriptionPage.txtModuleDescription.clear().then(async function () {
//                     await addDescriptionPage.txtModuleDescription.sendKeys(" ");

//                     await addDescriptionPage.btnSaveModuleEdits.click().then(async function () {
//                         await browser.wait(EC.presenceOf(addDescriptionPage.errorToast)).then(async function () {
//                             await addDescriptionPage.errorToast.isDisplayed().then(async function (result) {
//                                 expect(result).to.be.true;
//                                 await browser.driver.findElement(By.xpath("//div[contains(@class,'toast-error')]")).click().then(async function () {
//                                     await addDescriptionPage.txtModuleDescription.sendKeys(latestModuleDescription).then(async function () {
//                                         //console.log('here2');
//                                         await addDescriptionPage.btnSaveModuleEdits.click();
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })

// })


When('User edits Description for the Module {string}', async function (activityTitle) {
    await browser.sleep(1000);
    browser.waitForAngularEnabled(false);

    await addDescriptionPage.ThreeDotsOfNewModule1A.click().then(async function () {
        await browser.sleep(1000);
    })
    await addDescriptionPage.btnOptionEditModule.click().then(async function () {
        await addDescriptionPage.txtModuleDescription.clear();
        await addDescriptionPage.txtModuleDescription.sendKeys(latestModuleDescription)
        await browser.sleep(700);
    })

    await addDescriptionPage.btnSaveModuleEdits.click().then(async function () {
        await browser.sleep(1000);
    })

})


When("user saves and publishes the journey", async function () {
    await addDescriptionPage.btnJourneySave.click().then(async function () {
        // await browser.sleep(2000).then(async function(){

        // })

        // await browser.wait(EC.presenceOf(element(By.xpath("//div[@id='toast-container']")))).then(async function () {
        //     await browser.wait(EC.visibilityOf(element(By.xpath("//div[@id='toast-container']"))));
        // })

        await browser.driver.findElement(By.xpath("//div[@id='toast-container']")).click().then(async function () {
            await browser.sleep(2000);
    
            await addDescriptionPage.btnJourneyPublish.click().then(async function () {
                //    await browser.wait(EC.elementToBeClickable(addDescriptionPage.btnCancelJourney));
                await browser.wait(EC.presenceOf(element(By.xpath("//div[@class='toast-message ng-star-inserted']"))));
                await browser.driver.findElement(By.xpath("//div[@class='toast-message ng-star-inserted']")).click().then(async function () {
                    await browser.sleep(2000);
                    // await addDescriptionPage.btnCancelJourney.click().then(async function () {
                    //     await browser.wait(EC.presenceOf(addDescriptionPage.btnAddJourney));

                    // })
                })
                //browser.driver.wait(EC.invisibilityOf(element(By.xpath("//div[@id='toast-container']"))))

            })
        })
    })
})

When("user opens details of the Module {string}", async function (moduleName) {
    let editModuleBtnXpath: string = "//p[contains(text(),'" + moduleName + "')]/ancestor::mat-panel-title/following-sibling::mat-panel-description//button";
    await element(By.xpath(editModuleBtnXpath)).click().then(async function () {
        await addDescriptionPage.btnOptionEditModule.click().then(async function () {
            //console.log('here1');

        })
    })
})

When("Participant User navigate module panel to check the description", async function () {
     await browser.sleep(2000);
    browser.waitForAngularEnabled(false);
    console.log("Navigate");
})

Then('Updated module description should be displayed to the Participant', async function () {
    await addDescriptionPage.UpdatedmoduleDescriptionParticipant.isDisplayed().then(async function () {
        await addDescriptionPage.UpdatedmoduleDescriptionParticipant.getText().then(function (updatedmoduleDescriptionxt) {
            console.log("Updated decription is "+updatedmoduleDescriptionxt);
            expect(updatedmoduleDescriptionxt).to.be.eql(latestModuleDescription)
        })
    })
    
});


When("Participant user clicks on My Journey page", async function () {
    await addDescriptionPage.participantMyJourney.click().then(function () {
        browser.sleep(2000);
    })
})

When("Participant User clicks on Back to Journey page button", async function () {
    await addDescriptionPage.btnBackToJourney.click().then(function () {
        browser.sleep(3000);
    })
})

Then("the updated module description should be displayed to the Participant", async function () {
    await addDescriptionPage.moduleDescriptionParticipant.getText().then(function (latestModDescriptionMyJourneyPage) {
        expect(latestModDescriptionMyJourneyPage).to.equal(latestModuleDescription);
    })
})

When("Participant user clicks on Home page", async function () {
    await addDescriptionPage.participantHome.click().then(function () {
        browser.sleep(2000);
    })
})