import { Then, When, Given, After, Before } from "cucumber";
import { browser, protractor, ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "protractor";
//import { NewLeaderboardPageLocate } from "../../PageObjects/Sprint 15/NewLeaderboardPage";
import { CommonLocate } from "../../../PageObjects/Common";
import { ParticipantActivityPageLocate } from "../../../PageObjects/UserApp POM/My Journey/ParticipantActivityPage";
import { ResourceListingLocate } from "../../../PageObjects/UserApp POM/Resource/ResourceListingPage";
import { ActivityAuthoringPageLocate } from "../../../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";

import chai = require("chai");
var expect = chai.expect;
import { async } from "q";
import { join } from "path";

var EC = protractor.ExpectedConditions;


Given("User launches html utility with the userId {string}", async function (userId) {
    browser.waitForAngularEnabled(false);
    let utilPath: string = join(process.cwd(), 'petronasTest_LMS_Bridge', 'MomentaLMSLaunch.HTML');
    console.log('Utility Path:', utilPath)
    //browser.get('C:/Users/Administrator/Desktop/petronasTest_LMS_Bridge/MomentaLMSLaunch.HTML');  
    browser.get(utilPath);
    await browser.sleep(5000);
    await element(By.xpath("//input[@id='email']")).clear();
    await element(By.xpath("//input[@id='email']")).sendKeys(userId);
    await element(By.xpath("//input[@id='submitlms']")).click();
    await browser.sleep(15000);
   
    browser.waitForAngularEnabled(true);
})

Then("User should be able to navigate to the User App", async function () {
    browser.waitForAngularEnabled(false);
    let homeBtn:ElementFinder = await element(By.xpath("//a[contains(@class,'myJourney')]/preceding-sibling::a//span[contains(@class,'sidenav')]"));
    await browser.wait(EC.visibilityOf(homeBtn),30000).then(null, function(error){
        if(error){
            console.log('Home Button not displayed after navigating from LMS');
            expect(true).to.be.false;
        }
    })
    await homeBtn.getText().then(async function(btnText){
        expect(btnText).to.contain("My Home Page");
    })
    // await element(By.xpath("//a[contains(@class,'myJourney')]//span[contains(@class,'sidenav__item')]")).getText().then(async function (journeyName) {
    //     console.log(journeyName);
    // })
    browser.waitForAngularEnabled(true);
})