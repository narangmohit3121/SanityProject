import { Then, When } from "cucumber";
import { browser, protractor, ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "protractor";
//import { CommonLocate } from "../PageObjects/Common";
import { LoginPageLocate } from "../../PageObjects/Sprint 1/LoginPage";
import { RegistrationFlowPageLocate } from "../../PageObjects/Sprint 9/RegistrationFlowPage"
import { ParticipantActivityPageLocate } from "../../PageObjects/Sprint 4/ParticipantActivityPage";
import config from "../config.json"
import chai = require("chai");
var expect = chai.expect;
import { async } from "q";
var EC = protractor.ExpectedConditions;

let admloginpage = new LoginPageLocate();
//let commonObjects = new CommonLocate();
let participantactivitypage = new ParticipantActivityPageLocate();
let registrationFlowPage = new RegistrationFlowPageLocate();

When("user selects the the industry as {string}", async function (industryName) {
    await registrationFlowPage.industryDDArrow.isDisplayed().then(async function (registrationReqd) {
        if (registrationReqd == true) {
            await registrationFlowPage.industryDDArrow.click().then(async function () {
                let industryXpath: string = "//option[contains(text(),'" + industryName + "')]"
                await element(By.xpath(industryXpath)).click().then(async function () {
                    await registrationFlowPage.continueBtn.click().then(function () {
                        browser.sleep(8000);
                    })

                })
            })
        }
    })
})

When("User selects gender as {string}", async function (gender) {

    browser.waitForAngularEnabled(false);

    await registrationFlowPage.selectGenderText.isDisplayed().then(async function (genderSelectionReqd) {
        if (genderSelectionReqd == true) {
            let radioBtntnGenderXpath = "//span[contains(text(),'" + gender + "')]/ancestor::mat-radio-button[contains(@class,'common__radio')]";
            await element(By.xpath(radioBtntnGenderXpath)).click().then(async function () {
                await registrationFlowPage.continueBtn.click().then(function () {
                    browser.sleep(3000);
                })

            })
        }
    })
    browser.waitForAngularEnabled(true);
})

When("User enters the age as {string}", async function (age) {
    browser.waitForAngularEnabled(false);

    /*await registrationFlowPage.txtEnterAge.isDisplayed().then(async function (ageReqd) {
        console.log(ageReqd);
        if (ageReqd == true) {
            await registrationFlowPage.txtEnterAge.clear().then(async function () {
                //await browser.sleep(2000).then(async function(){
                    await registrationFlowPage.txtEnterAge.sendKeys(age).then(async function () {
                        await registrationFlowPage.continueBtn.click().then(function () {
                            browser.sleep(3000);
                        })
                    })
                //})
                
            })
        }
    })*/
    await registrationFlowPage.continueBtn.click().then(function () {
        browser.sleep(3000);
    })
    browser.waitForAngularEnabled(true);
})


When("User selects technical as {string}", async function (isTechnical) {
    let radioBtnTechnicalXapth: string = "//span[contains(text(),'" + isTechnical + "')]/ancestor::mat-radio-button[contains(@value,'technical')]";
    await element(By.xpath(radioBtnTechnicalXapth)).isDisplayed().then(async function (techSelectionReqd) {
        if (techSelectionReqd == true) {
            await element(By.xpath(radioBtnTechnicalXapth)).click().then(async function () {
                await registrationFlowPage.continueBtn.click().then(function () {
                    browser.sleep(1000);
                })
            })
        }
    })
})

When("user selects the region as {string}", async function (regionName) {
    browser.waitForAngularEnabled(false);
    await registrationFlowPage.selectRegionText.isDisplayed().then(async function (regionSelectionReqd) {
        if (regionSelectionReqd == true) {
            let radioBtnRegionXpath = "//span[contains(text(),'" + regionName + "')]/ancestor::mat-radio-button[contains(@value,'region_item1')]";
            await element(By.xpath(radioBtnRegionXpath)).click().then(async function () {
                await registrationFlowPage.continueBtn.click().then(function () {
                    browser.sleep(3000);
                })

            })
        }
    })
    browser.waitForAngularEnabled(true);
})

When("user selects {string} for manage accounts", async function (manageAccount) {
    browser.waitForAngularEnabled(false);
    browser.wait(EC.visibilityOf(registrationFlowPage.manageAccText));
    let radioBtnManageAccXapth: string = "//span[contains(text(),'" + manageAccount + "')]/ancestor::mat-radio-button[contains(@value,'role_item1')]";
    await registrationFlowPage.manageAccText.isDisplayed().then(async function (result) {
        if (result == true) {
            await element(By.xpath(radioBtnManageAccXapth)).click().then(async function () {
                await registrationFlowPage.continueBtn.click().then(function () {
                    browser.sleep(5000);
                })

            })
        }
    })
    browser.waitForAngularEnabled(true);
})

Then("Participant user should be taken to the Home page", async function () {
    await registrationFlowPage.leftNavigationMenu.isDisplayed().then(async function (result) {
        expect(result).to.be.true;
    })
})