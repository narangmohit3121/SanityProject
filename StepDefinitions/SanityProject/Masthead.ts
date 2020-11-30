import { Given, Then, When } from "cucumber";
import { browser, By, element, ElementFinder, protractor } from "protractor";
import { AdminLandingPageLocate } from "../../PageObjects/AuthorApp POM/Home Page/AdminLandingPage";
import { MastheadPage } from "../../PageObjects/SanityProjectPages/MastheadPage";
import { CommonLocate } from "../../PageObjects/Common";
import { LoginPageLocate } from "../../PageObjects/AuthorApp POM/Login/LoginPage";

import chai = require("chai");
import { join } from 'path';
import fs from 'fs';
import { apiHelperFunctions } from "../apiHelperClass";

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
import testdata from "../../testData.json";
import { ILocation, WebElement } from "selenium-webdriver";
let apiHelper = new apiHelperFunctions();
Given("user resets a user via apiHelperClass", async function(){
    let response:any = await apiHelper.resetUser(testdata.AdminLogin.Username,testdata.AdminLogin.Password,"bts",testdata.apiBuildVersion,
    "5d82323fd9b8ca499403e5bd","AutoUserDiscussionThread1@petronas.com","bd913f8dd8b8d1f246fd");
    console.log(response);

})

Then("Client tab should be displayed", async function () {
    await browser.driver.setScreenOrientation("LANDSCAPE");
    await admlandpage.tabClient.isDisplayed().then(async function (tabVisible) {
        expect(tabVisible).to.be.true;
    });
    await browser.sleep(2000);
    //(await admlandpage.tabClient.getLocation()).x;
    await browser.touchActions().tap(admlandpage.tabClient).perform();
    //await browser.touchActions().move({x:200,y:300})
    await browser.sleep(5000);
})

When("User scrolls to the bottom of the page", async function(){
    await browser.waitForAngularEnabled(false);
    let windowSize = await browser.manage().window().getSize();
    console.log(windowSize);
    //await browser.driver.touchActions().tap().perform();
    let firstActivityTitle:WebElement = await element(By.xpath("(//div[contains(@class,'panel-view')]//div[contains(@class,'title')])[1]")).getWebElement();
    let firstActivityLocation:ILocation = await firstActivityTitle.getLocation();
    let firstActivityX:number = Math.floor(firstActivityLocation.x as number);
    let firstActivityY:number = Math.floor(firstActivityLocation.y as number);
    let firstActivityCoordinates = {x:firstActivityX, y:firstActivityY}
    console.log(firstActivityLocation);
    console.log(firstActivityCoordinates);
    let lastActivityTitle:ElementFinder = await element(By.xpath("(//div[contains(@class,'panel-view')]//div[contains(@class,'title')])[last()]"));
    let lastActivityLocation:ILocation = await lastActivityTitle.getLocation();
    let lastActivityCoordinates = {x:Math.floor(lastActivityLocation.x as number),y:Math.floor(lastActivityLocation.y as number)};
    console.log(lastActivityCoordinates);
    await browser.driver.touchActions().tapAndHold(firstActivityCoordinates).perform();
    await browser.sleep(5000);
    //await browser.driver.touchActions().scrollFromElement(firstActivityTitle,{ x: 45, y: 700 }).perform();
    //await browser.driver.touchActions().move(lastActivityLocation).perform();
    await browser.driver.touchActions().scroll({ x: 45, y: 700 }).perform();
    console.log("Scrolled");
    await browser.sleep(5000);
    await browser.waitForAngularEnabled(true);

});