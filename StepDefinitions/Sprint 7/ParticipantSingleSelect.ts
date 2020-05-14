import {Given, When, Then} from "cucumber";
import { ParticipantActivityPageLocate } from "../../PageObjects/Sprint 4/ParticipantActivityPage";
import { ParticipantActivitySingleSelectPageLocate } from "../../PageObjects/Sprint 7/ParticipantSingleSelect";
import { browser } from "protractor";
import config from "../config.json"
import chai = require('chai');
import { async } from "q";
var expect = chai.expect;
let expjourneypagetitle = "My Journey";
let expactvitiytitle = "Round 1: Opportunities and trends in the industry";
let expmoduletitle = "Opportunities and trends in the industry";

let participantactivitypage = new ParticipantActivityPageLocate();
let participantactivitysingleselectpage = new ParticipantActivitySingleSelectPageLocate();


When('Participant navigates to activity containing Single Select', async function () {
    await participantactivitysingleselectpage.p_activityStartButton.isDisplayed().then(async function(){
        await participantactivitysingleselectpage.p_activityStartButton.click().then(async function(){
            await browser.sleep(3000);
        })
    })
  });


  When('Paritcipant tried to select any option by clicking anywhere in option area of single select activity', async function () {
    browser.ignoreSynchronization=true;
    await participantactivitysingleselectpage.p_singleselectoptionframe1.isDisplayed().then(async function(){
        await participantactivitysingleselectpage.p_singleselectoptionframe1.click().then(async function(){

            await browser.sleep(3000);
    })
  });
  await participantactivitysingleselectpage.p_singleselectoptionframe2.isDisplayed().then(async function(){
    await participantactivitysingleselectpage.p_singleselectoptionframe2.click().then(async function(){

        await browser.sleep(3000);
})
});
})

  When('Paritcipant selects any options of that single select activity', async function () {
    browser.ignoreSynchronization=true;
    await participantactivitysingleselectpage.p_singleselectoption1.isDisplayed().then(async function(){
        await participantactivitysingleselectpage.p_singleselectoption1.click().then(async function(){

            await browser.sleep(3000);
    })
  });
  await participantactivitysingleselectpage.p_singleselectoption2.isDisplayed().then(async function(){
    await participantactivitysingleselectpage.p_singleselectoption2.click().then(async function(){

        await browser.sleep(3000);
})
});
})

  Then('The selected option should be highlighted of single select activity', async function () {

    
   
    await participantactivitysingleselectpage.p_singleSelectCheckedOption.getAttribute("class").then(async function(resultString){
      
      expect(resultString).to.contain("mat-radio-checked");
   });

  });