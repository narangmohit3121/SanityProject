import { Then, When } from "cucumber";
import { browser, By, element, protractor } from "protractor";
//import { CommonLocate } from "../PageObjects/Common";
import { LoginPageLocate } from "../../../PageObjects/AuthorApp POM/Login/LoginPage";
import { RegistrationFlowPageLocate } from "../../../PageObjects/UserApp POM/Home/RegistrationFlowPage";
import { ParticipantActivityPageLocate } from "../../../PageObjects/UserApp POM/My Journey/ParticipantActivityPage";
import chai = require("chai");
var expect = chai.expect;
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

    await registrationFlowPage.selectGenderText.isPresent().then(async function (genderSelectionReqd) {
        if (genderSelectionReqd == true) {
            let radioBtntnGenderXpath = "//span[contains(text(),'" + gender + "')]/ancestor::mat-radio-button//label";
            await element(By.xpath(radioBtntnGenderXpath)).click().then(async function () {
                await registrationFlowPage.continueBtn.click().then(async function () {
                    await browser.sleep(3000);
                })

            })
        }
    })
    browser.waitForAngularEnabled(true);
})

When("User enters the age as {string}", async function (age) {
    browser.waitForAngularEnabled(false);

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
    await registrationFlowPage.selectRegionText.isPresent().then(async function (regionSelectionReqd) {
        if (regionSelectionReqd == true) {
            let radioBtnRegionXpath = "//span[contains(text(),'" + regionName + "')]/ancestor::mat-radio-button//label";
            await element(By.xpath(radioBtnRegionXpath)).click().then(async function () {
                await registrationFlowPage.continueBtn.click().then(async function () {
                    await browser.sleep(3000);
                })

            })
        }
    })
    browser.waitForAngularEnabled(true);
})

When("user selects {string} for manage accounts", async function (manageAccount) {
    browser.waitForAngularEnabled(false);

    let radioBtnManageAccXapth: string = "//span[contains(text(),'" + manageAccount + "')]/ancestor::mat-radio-button[contains(@value,'ACCOUNTS_item1')]";
    await registrationFlowPage.manageAccText.isPresent().then(async function (result) {
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