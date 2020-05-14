import { Given, Then, When } from "cucumber";
import { browser, By, element, ElementFinder, protractor } from "protractor";
import { AdminLandingPageLocate } from "../../PageObjects/Sprint 2/AdminLandingPage";
import { MastheadPage } from "../../PageObjects/SanityProjectPages/MastheadPage";
import { CommonLocate } from "../../PageObjects/Common";
import { LoginPageLocate } from "../../PageObjects/Sprint 1/LoginPage";

import chai = require("chai");
import { join } from 'path';
import fs from 'fs';

// var remote = require("../../node_modules/protractor/built/selenium-webdriver/remote") ;
// browser.setFileDetector(new remote.setFileDetector());

var expect = chai.expect;
var EC = protractor.ExpectedConditions;
var driver = browser.driver;
let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let mastheadPage = new MastheadPage();
let commonObjects = new CommonLocate();

let today: Date = new Date();
let dd: string = String(today.getDate()).padStart(2, '0');
let mm: string = String(today.getMonth() + 1).padStart(2, '0');
let year: number = today.getFullYear();
let hours: number = today.getHours();
let minutes: number = today.getMinutes();

let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + ':' + minutes;

// When("User navigates to an activity having Masthead Block", async function(){
//     await mastheadPage.editMastheadActivity.click();
// })

// When('User clicks on Edit Masthead button', async function () {
//     browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'loader_container')]"))), 30 * 1000);
//     await mastheadPage.editMastheadActivity.click();
// });

// When("User selects the Header Type as Full Screen", async function(){
//     await mastheadPage.ddHeaderType.click().then(async function(){
//         await mastheadPage.headerTypeFullScreen.click();
//     })
// });

// let mastheadAutomationContent: string = "Masthead Automation Content:" + currentDateTime;
// let mastheadAutomationHeading: string = "Masthead Automation Heading:" + currentDateTime;
// When("User updates Masthead Content and Heading", async function () {
//     await browser.executeScript(`arguments[0].innerText = '${mastheadAutomationContent}'`, mastheadPage.mastheadContentLastPara).then(async function () {
//         await mastheadPage.mastheadContentLastPara.click().then(async function () {
//             browser.sleep(2000);
//         })
//     });
//     await browser.executeScript(`arguments[0].innerText = '${mastheadAutomationHeading}'`, mastheadPage.mastheadHeading).then(async function () {
//         await mastheadPage.mastheadHeading.click().then(async function () {
//             browser.sleep(2000);
//         })
//     });

// });


// Then("the edits done to Masthead should get saved", async function(){
//     await mastheadPage.editMastheadActivity.click().then(async function () {
//     //     let textAndImageTypeDescription: string = await activityAuthorPage.imageAndTextTypeInput.getText();
//     //     expect(textAndImageTypeDescription).to.contain(latestImageDescription);
//     // });
//     })
    
// })

