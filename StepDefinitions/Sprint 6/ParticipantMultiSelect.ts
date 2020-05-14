import {Given, When, Then} from "cucumber";
import { ParticipantActivityPageLocate } from "../../PageObjects/Sprint 4/ParticipantActivityPage";
import { ParticipantActivityMultiSelectPageLocate } from "../../PageObjects/Sprint 6/ParticipantMultiSelect";
import { browser } from "protractor";
import config from "../config.json"
import chai = require('chai');
import { async } from "q";
var expect = chai.expect;
let expjourneypagetitle = "My Journey";
let expactvitiytitle = "What is important in this industry to succeed";
let expmoduletitle = "Opportunities and trends in the industry";

let participantactivitypage = new ParticipantActivityPageLocate();
let participantactivitymultiselectpage = new ParticipantActivityMultiSelectPageLocate();

When('Participant navigates to activity containing Multi Select', async function () {
    await participantactivitypage.p_activityStartButton.isDisplayed().then(async function(){
        await participantactivitypage.p_activityStartButton.click().then(async function(){
            await browser.sleep(3000);
        })
    })
  });


  When('Paritcipant tried to select any option by clicking anywhere in option area', async function () {
    browser.ignoreSynchronization = true;
    await participantactivitymultiselectpage.p_multiselectoptionframe1.isDisplayed().then(async function(){
        await participantactivitymultiselectpage.p_multiselectoptionframe1.click().then(async function(){

            await browser.sleep(3000);
    })
  });
  await participantactivitymultiselectpage.p_multiselectoptionframe2.isDisplayed().then(async function(){
    await participantactivitymultiselectpage.p_multiselectoptionframe2.click().then(async function(){

        await browser.sleep(3000);
})
});
})

  When('Paritcipant selects any options', async function () {
    browser.ignoreSynchronization = true;
    await participantactivitymultiselectpage.p_multiselectoption1.isDisplayed().then(async function(){
        await participantactivitymultiselectpage.p_multiselectoption1.click().then(async function(){

            await browser.sleep(3000);
    })
  });
  await participantactivitymultiselectpage.p_multiselectoption2.isDisplayed().then(async function(){
    await participantactivitymultiselectpage.p_multiselectoption2.click().then(async function(){

        await browser.sleep(3000);
})
});
})

  Then('The selected option should be highlighted', async function () {

  participantactivitymultiselectpage.p_multiselectclicked.count().then(async function(countofele){
    console.log(countofele);
   expect(countofele).to.equal(2);
  })
  });