import { Then, When } from "cucumber";
import { browser, protractor, ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "protractor";
import { AddDescriptionPageLocate } from "../../PageObjects/Sprint 8/AddDescriptionPage";
import { AdminLandingPageLocate } from "../../PageObjects/Sprint 2/AdminLandingPage";
import { CommonLocate } from "../../PageObjects/Common";
import { LoginPageLocate } from "../../PageObjects/Sprint 1/LoginPage";
import { ParticipantActivityPageLocate } from "../../PageObjects/Sprint 4/ParticipantActivityPage";
import config from "../config.json"
import chai = require("chai");
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



When('User selects the Journey named {string}', async function (journeyName) {
    let selectedJourneyXpath: string = "//p[contains(text(),'" + journeyName + "')]/ancestor::a[contains(@class,'master-collection')]";
    await element(By.xpath(selectedJourneyXpath)).click().then(function () {
        browser.sleep(3000);
    })

})

When("user edits Description for the Module {string}", async function (moduleName) {
    let editModuleBtnXpath: string = "//p[contains(text(),'" + moduleName + "')]/ancestor::mat-panel-title/following-sibling::mat-panel-description//button";
    await element(By.xpath(editModuleBtnXpath)).click().then(async function () {
        await addDescriptionPage.btnOptionEditModule.click().then(async function () {
            //console.log('here1');
            await addDescriptionPage.txtModuleDescription.click().then(async function () {
                await addDescriptionPage.txtModuleDescription.clear().then(async function () {
                    await addDescriptionPage.txtModuleDescription.sendKeys(" ");

                    await addDescriptionPage.btnSaveModuleEdits.click().then(async function () {
                        await browser.wait(EC.presenceOf(addDescriptionPage.errorToast)).then(async function () {
                            await addDescriptionPage.errorToast.isDisplayed().then(async function (result) {
                                expect(result).to.be.true;
                                await browser.driver.findElement(By.xpath("//div[contains(@class,'toast-error')]")).click().then(async function () {
                                    await addDescriptionPage.txtModuleDescription.sendKeys(latestModuleDescription).then(async function () {
                                        //console.log('here2');
                                        await addDescriptionPage.btnSaveModuleEdits.click();
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

})

When("user saves and publishes the journey", async function () {
    await addDescriptionPage.btnJourneySave.click().then(async function () {
        // await browser.sleep(2000).then(async function(){

        // })
        await browser.wait(EC.presenceOf(element(By.xpath("//div[@id='toast-container']")))).then(async function () {
            await browser.wait(EC.visibilityOf(element(By.xpath("//div[@id='toast-container']"))));
        })


        await browser.driver.findElement(By.xpath("//div[@id='toast-container']")).click().then(async function () {
            await browser.sleep(2000);
            await addDescriptionPage.btnJourneyPublish.click().then(async function () {
                //    await browser.wait(EC.elementToBeClickable(addDescriptionPage.btnCancelJourney));
                await browser.wait(EC.presenceOf(element(By.xpath("//div[@id='toast-container']"))));
                await browser.driver.findElement(By.xpath("//div[@id='toast-container']")).click().then(async function () {
                    await browser.sleep(2000);
                    await addDescriptionPage.btnCancelJourney.click().then(async function () {
                        await browser.wait(EC.presenceOf(addDescriptionPage.btnAddJourney));

                    })
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

Then("the updated module description should be displayed", async function () {
    await addDescriptionPage.txtModuleDescription.getAttribute("ng-reflect-model").then(async function (moduleDescription) {
        expect(moduleDescription).to.equal(latestModuleDescription);
    })
})

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