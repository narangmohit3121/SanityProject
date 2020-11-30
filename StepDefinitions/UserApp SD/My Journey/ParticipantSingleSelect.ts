import {Given, When, Then,Before} from "cucumber";
import { ParticipantActivityPageLocate } from "../../../PageObjects/UserApp POM/My Journey/ParticipantActivityPage";
import { ParticipantActivitySingleSelectPageLocate } from "../../../PageObjects/UserApp POM/My Journey/ParticipantSingleSelectPage";
import { browser } from "protractor";
import config from "../../config.json"
import chai = require('chai');
import { async } from "q";
import { apiHelperFunctions } from "../../apiHelperClass";
import Testdata from "../../../testData.json"

var expect = chai.expect;
let expjourneypagetitle = "My Journey";
let expactvitiytitle = "Round 1: Opportunities and trends in the industry";
let expmoduletitle = "Opportunities and trends in the industry";

let participantactivitypage = new ParticipantActivityPageLocate();
let participantactivitysingleselectpage = new ParticipantActivitySingleSelectPageLocate();

let apiHelper = new apiHelperFunctions();


Before({tags:"@SingalSelect1"},async function(){
  await apiHelper.resetUser("qa_momenta@bts.com","ABab12$","bts",Testdata.apiBuildVersion,"5d82323fd9b8ca499403e5bd","single_n_multiselect@petronas.com","feb066622bc0f9064a23")
console.log("API Called SingleSelect!!!");
})



When("Participant navigates to activity and select delhi as city", async function () {
     await browser.sleep(3000);
       await participantactivitysingleselectpage.delhiRadiobuttonBtn.isDisplayed().then(async function(){
        await participantactivitysingleselectpage.delhiRadiobuttonBtn.click().then(async function(){
            await browser.sleep(1000);
        })
    })
  });


  Then('The selected option should be highlighted of single select activity', async function () {
    await participantactivitysingleselectpage.delhisingleSelectCheckedOption.getAttribute("class").then(async function(resultString){
      expect(resultString).to.contain("mat-radio-checked");
      
      await browser.sleep(5000);
   });

  });



  When("Participant  click continue button and navigate on next activity page", async function () {
    await browser.sleep(3000);
      await participantactivitysingleselectpage.activityContinueBtn.isDisplayed().then(async function(){
       await participantactivitysingleselectpage.activityContinueBtn.click().then(async function(){
           await browser.sleep(1000);
       })
   })
 });


 
 When("Participant select Momenta and its description as long single select option", async function () {
  await browser.sleep(3000);
    await participantactivitysingleselectpage.momentaRadioOptonAndDescriptionBtn.isDisplayed().then(async function(){
     await participantactivitysingleselectpage.momentaRadioOptonAndDescriptionBtn.click().then(async function(){
         await browser.sleep(1000);
     })
 })
});


Then("User should see all single select long option", async function () {
  await participantactivitysingleselectpage.momentaText.getText().then(function (text) {
      expect(text).to.be.eql("Momenta")
  });
  await participantactivitysingleselectpage.momentaTextDescription.getText().then(function (text) {
    expect(text).to.be.eql("Momenta is customized product")
});

});


Then("The selected option should be highlighted of long option single select activity", async function () {
  
  await browser.sleep(3000);
  await participantactivitysingleselectpage.momentaRadioOptonAndDescriptionBtn.getAttribute("class").then(async function(resultString){
    expect(resultString).to.contain("mat-radio-label");
    await browser.sleep(3000);
 });

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
