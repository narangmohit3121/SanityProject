import {Given, When, Then} from "cucumber";
import { ParticipantModulePageLocate } from "../../PageObjects/Sprint 4/ParticipantModulePage";
import { async } from "q";
import { browser } from "protractor";
import chai = require('chai');
var expect = chai.expect;
let participantmodulepage = new ParticipantModulePageLocate();
let expstagetitle = "Episode 1: Know the Industry Executive Mindset";
let expmoduletitle = "Opportunities and trends in the industry";
let expmoduledescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
let expmodulepoints = "+30 Points";
let expmoduleactivities = "4 Activities";
let expmoduleminutes = "40 Minutes";
var numberofactivites:any;
let expcompletedText = "Completed";
let expmodulescorepts = "+ 75 Points";

Then('Participant should be landed to Module Page', async function () {
    await participantmodulepage.p_moduleTitle.isDisplayed().then(async function(){
        await participantmodulepage.p_moduleTitle.getText().then(async function(actmoduletitle){
            expect(expmoduletitle).to.equal(actmoduletitle);
        })
    })
  });

  Then('Participant should verify Stage Title, Module Title, Module Description, Points, Activity count, Time and SVG icon', async function () {
    await participantmodulepage.p_moduleTitle.isDisplayed().then(async function(){
        await participantmodulepage.p_moduleTitle.getText().then(async function(actmoduletitle){
            console.log(actmoduletitle);
            expect(expmoduletitle).to.equal(actmoduletitle);
        })
    })
    await participantmodulepage.p_moduleStageTitle.isDisplayed().then(async function(){
        await participantmodulepage.p_moduleStageTitle.getText().then(async function(actstagetitle){
            console.log(actstagetitle);
            expect(expstagetitle).to.equal(actstagetitle);
        })
    })
    await participantmodulepage.p_moduleDescription.isDisplayed().then(async function(){
        await participantmodulepage.p_moduleDescription.getText().then(async function(actmoduledescription){
            console.log(actmoduledescription);
            expect(expmoduledescription).to.equal(actmoduledescription);
        })
    })
    await participantmodulepage.p_modulePoints.isDisplayed().then(async function(){
        await participantmodulepage.p_modulePoints.getText().then(async function(actmodulepoints){
            console.log(actmodulepoints);
            expect(expmodulepoints).to.equal(actmodulepoints);
        })
    })
    await participantmodulepage.p_moduleActivities.isDisplayed().then(async function(){
        await participantmodulepage.p_moduleActivities.getText().then(async function(actmoduleactivities){
            console.log(actmoduleactivities);
            expect(expmoduleactivities).to.equal(actmoduleactivities);
        })
    })
    await participantmodulepage.p_moduleMinutes.isDisplayed().then(async function(){
        await participantmodulepage.p_moduleMinutes.getText().then(async function(actmoduleminutes){
            console.log(actmoduleminutes);
            expect(expmoduleminutes).to.equal(actmoduleminutes);
        })
    })
  });

  Then('Participant should compare count of activities in header with activities in Module Page', async function () {
      var numberofactivites1:any;
    await participantmodulepage.p_moduleActivities.isDisplayed().then(async function(){
        await participantmodulepage.p_moduleActivities.getText().then(async function(actmoduleactivities:any){
            //console.log(actmoduleactivities);
             numberofactivites1 = actmoduleactivities.charAt(0);
             //console.log("first character is "+numberofactivites1);
             console.log(actmoduleactivities.charAt(0));
        })
    })
    numberofactivites = numberofactivites1;
    console.log(numberofactivites);
    await participantmodulepage.p_moduleActivitiesList.count().then(async function(actcount:any){
        console.log(actcount);
        expect(numberofactivites).to.equal(actcount);
        
    })
  });

  Then('Participant should see the completed activities with check icon', async function () {
    await participantmodulepage.p_moduleActivityCompleteCheckMark.isDisplayed().then(async function(){
        //await browser.sleep(2000);
    })
    //browser.ignoreSynchronization=true;
    browser.waitForAngularEnabled(false);
  });

  When('Participant clicks on Back Top Arrow', async function () {
    await participantmodulepage.p_moduleCompletionPageTopBackArrow.isDisplayed().then(async function(){
        await participantmodulepage.p_moduleCompletionPageTopBackArrow.click().then(async function(){
            await browser.sleep(2000);
        })
    })
  });

  Then('Participant should see the module completion page along with check icon and completed status', async function () {
      await participantmodulepage.p_moduleCompletionPageCompletedText.getText().then(async function(actcompletedText){
        expect(actcompletedText).to.equal(expcompletedText);
    }) 
      await participantmodulepage.p_moduleCompletionPageCompletedCheckIcon.isDisplayed().then(async function(isIconPresent){
        expect(isIconPresent).to.be.true;
      })
      await participantmodulepage.p_moduleCompletionPageScorePoints.getText().then(async function(actmodulescorepts){
        expect(actmodulescorepts).to.equal(expmodulescorepts);
      })
  });