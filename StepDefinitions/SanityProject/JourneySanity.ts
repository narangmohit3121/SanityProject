import { Given, Then, When } from "cucumber";
import { browser, By, element, ElementFinder, protractor, WebElement } from "protractor";
import config from "../../StepDefinitions/config.json";
import { CommonLocate } from "../../PageObjects/Common";
import { AuthorSanityPage } from "../../PageObjects/SanityProjectPages/AuthorSanityPage";

import chai = require("chai");
var expect = chai.expect;
var EC = protractor.ExpectedConditions;
import { join } from 'path';
import fs from 'fs';
import { HelperFunctions } from "../HelperClass";
import { CreatedContents } from "./CreateAllContents";
import { JourneySanityPageObjects } from "../../PageObjects/SanityProjectPages/JourneySanityPage";


let commonObjects = new CommonLocate();
let authorSanityPage = new AuthorSanityPage();
let helper = new HelperFunctions();
let journeyPageObjects = new JourneySanityPageObjects();

let today: Date = new Date();
let dd: string = String(today.getDate()).padStart(2, '0');
let mm: string = String(today.getMonth() + 1).padStart(2, '0');
let year: number = today.getFullYear();
let hours: number = today.getHours();
//let minutes: number = today.getMinutes();
let minutes: string = today.getMinutes().toString().padStart(2, '0');
let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + ':' + minutes;
let currentDateInMomentaFormat: string = mm + '/' + (String)(today.getDate()) + '/' + (String)(today.getFullYear());
let cohortEndDateInMomentaFormat = mm + '/' + (String)(today.getDate()) + '/' + (String)(today.getFullYear() + 1);

let arr: string[] = []
When("User links the contents created for Sanity Suite to the the {string} module of above journey", async function (moduleName) {
    //arr = ['XAPIVideo4', 'XAPIVideo5'];
    console.log('List of Contents Created: ', CreatedContents.sanityContents);
    arr = CreatedContents.sanityContents;
    //let i: number = 1;
    for (var activity of arr) {
        // await helper.addActivityToModule(moduleName, `Activity${i}`, activity);
        // i++;
        await helper.addActivityToModule(moduleName, activity, activity);
    }
})

When("User navigates to the {string} Journey", async function (journeyName) {
    await element(By.xpath(`//p[contains(text(),'${journeyName}')]/../../..`)).click();
});

When("User updates General Settings under Journey Configuration", async function () {
    //await helper.setAllJourneyToggles(false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false);
    await helper.setDisableVideoForwardingSetting(true);
    await helper.setHasEntryPageSetting(false);
    await helper.setSkipJourneyDetailScreenSetting(true);
    await helper.setHideLeaderBoardSetting(true);
    await helper.setDisableLocksSetting(true);

})
let newJourneyName: string = `SanityJourney ${currentDateTime}`
When("User creates a new journey for Sanity and navigates to the same", async function () {
    await journeyPageObjects.btnCreateNewJourney.click().then(async function () {
        await journeyPageObjects.btnCreateNewJourneyOptionInMenu.click().then(async function () {
            await journeyPageObjects.newJourneyTitle.sendKeys(newJourneyName);
            await journeyPageObjects.btnSaveJourney.click();
        })
    })
    await element(By.xpath(`//p[contains(text(),'${newJourneyName}')]/../../..`)).click();

})

Then("the contents should get linked to the Sanity journey", async function () {
    await element(By.xpath(`//p[contains(text(),'${newJourneyName}')]/../../..`)).click();
    let linkedActivityNames: string[] = []
    await journeyPageObjects.linkedActivityNames.each(async function (linkedActivityName) {
        linkedActivityNames.push(await linkedActivityName.getText());
    })
    await commonObjects.journeyFlowExithBtn.click();
    await browser.sleep(1000);
    expect(linkedActivityNames, "Some activities did get not linked to Journey").to.include.members(arr);
})

let cohortName: string = `SanityCohort ${Math.floor(Math.random() * 10000)}`;
export let emailNewSanityUserOne: string = `AutomationUser${Math.floor(Math.random() * 10000000)}@petronas.com`;
export let emailNewSanityUserTwo: string = `AutomationUser${Math.floor(Math.random() * 10000000)}@petronas.com`;
export let passwordNewUser: string = 'ABab12$';
while(emailNewSanityUserOne == emailNewSanityUserTwo){
    emailNewSanityUserTwo = `AutomationUser${Math.floor(Math.random() * 10000000)}@petronas.com`;
}

When("User adds a new Cohort to the Sanity Journey and creates a new user under that cohort", async function () {
    await helper.createCohortInJourney(newJourneyName, cohortName, currentDateInMomentaFormat, cohortEndDateInMomentaFormat);
    await journeyPageObjects.openNewlyAddedCohort.click();
    await helper.createUserInCohort('Automation', 'SanityUser', emailNewSanityUserOne, passwordNewUser);
    await helper.createUserInCohort('Automation', 'SanityUser', emailNewSanityUserTwo, passwordNewUser);
})

When("user deletes the sanity Journey", async function () {
    await element(By.xpath(`//p[contains(text(),'${newJourneyName}')]/ancestor::mat-card//button[contains(@name,'menu')]`)).click();
    await element(By.css("button[name*='delete']")).click().then(async function () {
        await browser.sleep(1000);
        await element(By.css("button[name*='Delete']")).click();
    })
    await browser.sleep(2000);

})

Then("the sanity Journey should be deleted successfully", async function () {
    await element(By.xpath(`//p[contains(text(),'${newJourneyName}')]/ancestor::mat-card//button[contains(@name,'menu')]`)).isPresent().then(async function (isJourneyPresent) {
        expect(isJourneyPresent, "Sanity Journey not deleted").to.be.false;
    })

})