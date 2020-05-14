import { Then, When } from "cucumber";
import { browser, protractor, ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "protractor";
import { NewLeaderboardPageLocate } from "../../PageObjects/Sprint 15/NewLeaderboardPage";
import { AdminLandingPageLocate } from "../../PageObjects/Sprint 2/AdminLandingPage";
import { CommonLocate } from "../../PageObjects/Common";
import { LoginPageLocate } from "../../PageObjects/Sprint 1/LoginPage";
import { ParticipantActivityPageLocate } from "../../PageObjects/Sprint 4/ParticipantActivityPage";
import config from "../config.json"
import chai = require("chai");
var expect = chai.expect;
import { async } from "q";
var EC = protractor.ExpectedConditions;

let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let commonObjects = new CommonLocate();
let newLeaderboardPage = new NewLeaderboardPageLocate();
let participantactivitypage = new ParticipantActivityPageLocate();

// let today: Date = new Date();
// let dd: string = String(today.getDate()).padStart(2, '0');
// let mm: string = String(today.getMonth() + 1).padStart(2, '0');
// let year: number = today.getFullYear();
// let hours: number = today.getHours();
// let minutes: number = today.getMinutes();

// let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + ':' + minutes;

let seasonOptionsLeaderBoard: string[] = [ 'S1:round 1','S1:round 2','S1:round 3','S1:round 4','S2:round 1','S2:round 2','S2:round 3',
'S2:round 4','S3:round 1','S3:round 2','S3:round 3','S3:round 4' ];
let industryOptionsLeaderBoard: string[] = ['Qaleaderboard_one_healthcare','Qaleaderboard_two_education','Qaleaderboard_three_automotive'];
let regionOptionsLeaderBoard: string[] = ['All','asia','EMEA','americas'];

When("User navigates to Home page", async function () {
    browser.waitForAngularEnabled(false);
    await browser.wait(EC.invisibilityOf(newLeaderboardPage.shimmerLoadActivity), 5000).then(async function () {
        await browser.wait(EC.elementToBeClickable(newLeaderboardPage.participantNaviationMenu), 5000);
    })

    //browser.wait(EC.elementToBeClickable(newLeaderboardPage.participantNaviationMenu),5000);
    await newLeaderboardPage.participantNaviationMenu.click().then(async function () {
        console.log('Clicked on Menu');
        await browser.sleep(3000).then(async function () {
            await newLeaderboardPage.optionHomeInMenu.click().then(function () {
                browser.sleep(4000);
            })
        })
    })

    browser.waitForAngularEnabled(true);
})

When("user clicks on Filter by Season dropdown", async function () {
    browser.waitForAngularEnabled(false);
    await browser.wait(EC.elementToBeClickable(newLeaderboardPage.ddFilterBySeason), 5000).then(async function () {
        await newLeaderboardPage.ddFilterBySeason.click().then(function () {
            browser.sleep(3000);
        })
    })
    browser.waitForAngularEnabled(true);
})

Then("the list of sims, regions, Journeys displayed should be correct", async function () {
    browser.waitForAngularEnabled(false);
    let seasonOptions: Array<string> = [];
    let industryOptions:Array<string> = [];
    let regionOptions:Array<string> = []; 
    await newLeaderboardPage.ddOptionsSeason.each(async function (option) {
        let optionText: string = (await option.getText()).trim();
        seasonOptions.push(optionText);
    }).then(function () {
        //console.log(seasonOptions);
        expect(seasonOptionsLeaderBoard).to.have.members(seasonOptions);
    });

    await newLeaderboardPage.ddOptionsIndustry.each(async function (industry) {
        let industryName: string =  (await industry.getText()).trim();
        industryOptions.push(industryName);
    }).then(function () {
        //console.log(industryOptions);
        expect(industryOptions).to.include.members(industryOptionsLeaderBoard);
    });

    await newLeaderboardPage.ddOptionsRegion.each(async function (region) {
        let regionName: string =  (await region.getText()).trim();
        regionOptions.push(regionName);
    }).then(function () {
        //console.log(regionOptions);
        expect(regionOptionsLeaderBoard).to.have.members(regionOptions);
    });

    browser.waitForAngularEnabled(true);
})

//-------------------------------------------------------------------------------------------------------------

When("User selects the Season as {string}", async function(seasonName){
    let seasonXpath:string = "//select[@name='select rounds']/option[contains(text(),'"+ seasonName + "')]";

    browser.waitForAngularEnabled(false);
    await browser.wait(EC.elementToBeClickable(newLeaderboardPage.ddFilterBySeason), 5000).then(async function () {
        await newLeaderboardPage.ddFilterBySeason.click().then(async function () {
            let seasonOption:ElementFinder =  await element(By.xpath(seasonXpath));
            await seasonOption.click();
        })
    })
    browser.waitForAngularEnabled(true);

})

When("User selects the Industry as {string}", async function(industryName){
    let industryXpath:string = "//select[@name='select industry']/option[contains(text(),'"+ industryName + "')]";

    browser.waitForAngularEnabled(false);
    await browser.wait(EC.elementToBeClickable(newLeaderboardPage.ddFilterByIndustry), 5000).then(async function () {
        await newLeaderboardPage.ddFilterByIndustry.click().then(async function () {
            let industryOption:ElementFinder =  await element(By.xpath(industryXpath));
           await industryOption.click();
        })
    })
    browser.waitForAngularEnabled(true);

})

When("User selects the region as {string}", async function(regionName){
    let regionXpath:string = "//select[@name='select region']/option[contains(text(),'"+ regionName + "')]";
    browser.waitForAngularEnabled(false);
    await newLeaderboardPage.ddFilterByRegion.getAttribute("ng-reflect-model").then(async function(currentRegion){
        if(!(regionName == "All")){
            await browser.wait(EC.elementToBeClickable(newLeaderboardPage.ddFilterByRegion), 5000).then(async function () {
                await newLeaderboardPage.ddFilterByRegion.click().then(async function () {
                    let regionOption:ElementFinder =  await element(By.xpath(regionXpath));
                    await regionOption.click().then(async function(){
                        await browser.sleep(1500);
                    })
                })
            })
        }
    })    
    
    browser.waitForAngularEnabled(true);

})

When("User clicks on Apply button", async function(){
    browser.waitForAngularEnabled(false);
    await newLeaderboardPage.btnApplyFilter.click().then(async function(){
        await browser.sleep(5000);
    })
    browser.waitForAngularEnabled(true);
})

Then("the rank of the user for the sim should be {string}",async function( particpantRank){
    browser.waitForAngularEnabled(false);
    console.log(particpantRank);
    await newLeaderboardPage.participantRank.getText().then(function(rank){
        expect(rank).to.equal(particpantRank);
    })
    browser.waitForAngularEnabled(true);
})

Then("the score of the user for the sim should be {string}",async function(particpantScore){
    console.log(particpantScore);
    browser.waitForAngularEnabled(false);
    await newLeaderboardPage.participantScore.getAttribute("value").then(function(score){
        expect(score).to.equal(particpantScore);
    })
    browser.waitForAngularEnabled(true);
})


Then("the top score for the sim should be {string}", async function(topScore){
    console.log(topScore);
    browser.waitForAngularEnabled(false);
    await newLeaderboardPage.topScore.getText().then(function(score){
        expect(score).to.equal(topScore);
    })
    browser.waitForAngularEnabled(true);
})

Then("the median score for the sim should be {string}", async function(medianScore){
    console.log(medianScore);
    browser.waitForAngularEnabled(false);
    await newLeaderboardPage.medianScore.getAttribute("value").then(function(score){
        expect(score).to.equal(medianScore);
    })
    browser.waitForAngularEnabled(true);
})

//-----------------------------------------------------------------------------------
Then("the Current Round, Rank, User Score, Top Score, Median under the Dive Back In section should be {string}, {string}, {string}, {string}, {string}",async function(userRound, userRank, userScore, highScore, medianScore){
    browser.waitForAngularEnabled(false);
  //  console.log(userRound, userRank, userScore, highScore, medianScore)
    await newLeaderboardPage.diveBackInCurrentRound.getText().then(function(currentRound){
        expect(currentRound).to.equal(userRound);
    });

    await newLeaderboardPage.diveBackInRank.getText().then(function(rank){
        //rank.replace("Your Rank:","").trim();
        expect(rank.replace("Your Rank:","").trim()).to.equal(userRank);
    });
    
    await newLeaderboardPage.diveBackInUserScore.getText().then(function(score){        
        expect(score.replace("Your Score:","").trim()).to.equal(userScore);
    })

    await newLeaderboardPage.diveBackInTopScore.getText().then(function(topScore){       
        expect(topScore.replace("Top Score:","").trim()).to.equal(highScore);
    })

    await newLeaderboardPage.diveBackInMedian.getText().then(function(median){        
        expect(median.replace("Median Score:","").trim()).to.equal(medianScore);
    })
    browser.waitForAngularEnabled(true);
})

Then("the See detailed results link should be displayed", async function(){
    browser.waitForAngularEnabled(false);
    await newLeaderboardPage.btnSeeDetailedResults.getText().then(async function(buttonName){
        expect(buttonName).to.equal("See detailed results");
        await newLeaderboardPage.btnSeeDetailedResults.click();
    })
    browser.waitForAngularEnabled(true);
})

// When("User navigates to another module", async function(){
//     browser.waitForAngularEnabled(false);
//     await newLeaderboardPage.linkJourneyPage.click().then(async function(){
//         await browser.sleep(2000).then(async function(){
//             browser.wait(EC.elementToBeClickable(newLeaderboardPage.btnNextModule));
//             await newLeaderboardPage.btnNextModule.click();
//         })
//     })
//     browser.waitForAngularEnabled(true);
// })