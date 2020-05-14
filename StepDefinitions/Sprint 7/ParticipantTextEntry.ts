import { Given, When, Then } from "cucumber";
import { browser, element } from "protractor";
import config from "../config.json"
import chai = require('chai');
import { Alert } from "selenium-webdriver";
import { ParticipantLoginPageLocate } from "../../PageObjects/Sprint 4/ParticipantLoginPage.js";
import { async } from "q";
import { ParticipantTextEntryPageLocate } from "../../PageObjects/Sprint 7/ParticipantTextEntryPage.js";
let txt1:any = "I exhibit this behavior with my team on large scale."
let txt2:any = "It have high level impact on each scenario."
let txt3:any = "I would choose three option for my journey those are Stage,Module and Activity."

var expect = chai.expect;

let participantTextEntryPage = new ParticipantTextEntryPageLocate();



When('Navigate to Create a reframe module in my journey page and click Revisit Button', async function () {
    
    
    await participantTextEntryPage.revisitBtnJourneyPage.isDisplayed().then(async function () {
        await participantTextEntryPage.revisitBtnJourneyPage.click().then(function () {
          console.log("Create frame revisit button clicked");
          browser.sleep(5000);
        })
      })
    
  });

  When('Navigate to Create a reframe module in module page and click revisit button', async function () {
    
    await participantTextEntryPage.revisitBtnModulePage.isDisplayed().then(async function () {
        await participantTextEntryPage.revisitBtnModulePage.click().then(function () {
          
        })
      })
  });


  When('user enter input for exhibit this behavior with your team as {string}', async function (string) {
    browser.ignoreSynchronization=true;
    browser.sleep(5000);
    await participantTextEntryPage.exhibitBehaviorTxt.isDisplayed().then(async function () {
        await participantTextEntryPage.exhibitBehaviorTxt.clear().then(async function(){
            await participantTextEntryPage.exhibitBehaviorTxt.sendKeys(string);
        })
        
      })

  });

  When('user enter input for impact as {string}', async function (string) {
    browser.ignoreSynchronization=true;
    browser.sleep(5000);
    await participantTextEntryPage.impactTxt.isDisplayed().then(async function () {
        await participantTextEntryPage.impactTxt.clear().then(async function(){
            await participantTextEntryPage.impactTxt.sendKeys(string);
        })
        
      })

  });


  When('user enter input for option choose as {string}', async function (string) {
    browser.ignoreSynchronization=true;
    browser.sleep(5000);
    await participantTextEntryPage.optionYouChooseTxt.isDisplayed().then(async function () {
        await participantTextEntryPage.optionYouChooseTxt.clear().then(async function(){
            await participantTextEntryPage.optionYouChooseTxt.sendKeys(string);
        })
        browser.sleep(5000);
      })

  });

  
  When('user click on continue button', async function () {
    browser.sleep(5000);
    await participantTextEntryPage.continueBtn.isDisplayed().then(async function () {
        await participantTextEntryPage.continueBtn.click().then(function () {
          
        })
      })
  });


  
  When('user click on back arrow on module completion page', async function () {
    
    await participantTextEntryPage.backarrow.isDisplayed().then(async function () {
        await participantTextEntryPage.backarrow.click().then(function () {
          browser.sleep(5000);
        })
      })
  });


  When('user navigate Activities after click back arrow', async function () {
    await participantTextEntryPage.activitiesTitle.isDisplayed().then(async function(result){
      expect(result).to.be.true;
      console.log("User is able to see activities after click back arrow ");
      browser.sleep(5000);
    });
  });

  Then('user should see existing all input which user provided before click back arrow', async function () {
    await participantTextEntryPage.exhibitBehaviorTxt.getText().then(async function(exhText){
      expect(exhText).not.to.be.null;
      console.log(exhText);
    })
    await participantTextEntryPage.impactTxt.getText().then(async function(impText){
      expect(impText).not.to.be.null;
     console.log(impText);
    })
    await participantTextEntryPage.optionYouChooseTxt.getText().then(async function(optText){
      expect(optText).not.to.be.null;
      console.log(optText);
    })
  });
  


//   When('Participant user enters valid Password as {string}', async function (string) {
//     //   await participantloginpage.participantPassword.clear().then(async function () {
//     //     await participantloginpage.participantPassword.sendKeys(string)
//     //   })
//     // });

//   When('user enter input for exhibit this behavior with your team as {string}', {timeout:10*10000}, async function (string) {
//        browser.ignoreSynchronization=true;
//     await participantTextEntryPage.exhibitBehaviorTxt.isDisplayed().then(async function () {
//         await participantTextEntryPage.exhibitBehaviorTxt.clear().then(async function(){
//             await participantTextEntryPage.exhibitBehaviorTxt.sendKeys(string);
//         })
//         browser.sleep(5000);
//       })
//   });




