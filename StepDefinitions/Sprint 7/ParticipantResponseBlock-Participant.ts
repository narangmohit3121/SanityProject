import {When, Then, Given} from "cucumber";
import { async } from "q";
import chai = require('chai');
import { browser } from "protractor";
import config from "../config.json"
import { ParticipantResponseBlockUserPageLocate } from "../../PageObjects/Sprint 7/ParticipantResponseBlock-Participant.js";
var expect = chai.expect;
let expmultiquestiontext = 'Please select appropriate answer for Multiple Select';
let expsinglequestiontext = 'Please select appropriate answer for Single Select';
let expsingleselectans = 'Test Single Select 2';
let expmultiselectans = 'Test Multi Select 2';
let expresponseblocktitle = 'Participant_Response_Block_Abhijeet';

let participantresponseblockuserpage = new ParticipantResponseBlockUserPageLocate();

When('Participant clicks on any Module containing Participant Response Block', async function () {
    await participantresponseblockuserpage.btnStartModule.isDisplayed().then(async function(){
        await participantresponseblockuserpage.btnStartModule.click();
    })
  });

  When('Participant clicks on any Activity containing Participant Response Block', async function () {
      await participantresponseblockuserpage.btnStartActivity.isDisplayed().then(async function(){
          await participantresponseblockuserpage.btnStartActivity.click();
      })
  });

  When('Participant should be able to view multi select question correctly', async function () {
    browser.ignoreSynchronization = true;
    await browser.sleep(4000).then(async function(){
      await participantresponseblockuserpage.multiSelectQuestion.isDisplayed().then(async function(){
        await participantresponseblockuserpage.multiSelectQuestion.getText().then(async function(actmultiquestiontext){
          console.log(actmultiquestiontext);
            //expect(actmultiquestiontext).to.eql(expmultiquestiontext);
        })
    })
    })
  });

  Then('Participant should be able to select answer for multi select question', async function () {
    await participantresponseblockuserpage.multiSelectOption.isDisplayed().then(async function(){
        await participantresponseblockuserpage.multiSelectOption.click();
    })
  });

  When('Participant should be able to view single select question correctly', async function () {
    browser.ignoreSynchronization = true;
    await browser.sleep(4000).then(async function(){
      await participantresponseblockuserpage.singleSelectQuestion.isDisplayed().then(async function(){
        await participantresponseblockuserpage.singleSelectQuestion.getText().then(async function(actsinglequestiontext){
            console.log(actsinglequestiontext);
            //expect(actsinglequestiontext).to.eql(expsinglequestiontext);
        })
    })
    })
  });

  Then('Participant should be able to select answer for single select question', async function () {
    browser.ignoreSynchronization = true;
    await participantresponseblockuserpage.singleSelectOption.isDisplayed().then(async function(){
        await participantresponseblockuserpage.singleSelectOption.click();
    })
  });
  
  Then('Participant should view same answer selected for single and multi select questions', async function () {
    browser.ignoreSynchronization = true;
    await browser.sleep(4000).then(async function(){
      await participantresponseblockuserpage.singleSelectAnswerResponseBlockPage.getText().then(async function(actsingleselectans){
        expect(actsingleselectans).to.eql(expsingleselectans);
    })
    await participantresponseblockuserpage.multiSelectAnswerResponseBlockPage.getText().then(async function(actmultiselectans){
        expect(actmultiselectans).to.eql(expmultiselectans);
    })
    })
  });

  Then('Participant should be able to land Response Block Activity Page', async function () {
      browser.ignoreSynchronization = true;
    await participantresponseblockuserpage.ttlActivityPage.getText().then(async function(actresponseblocktitle){
        //console.log(actresponseblocktitle);
        expect(actresponseblocktitle).to.eql(expresponseblocktitle);
    })
  });

  Then('Participant clicks on Continue button from Participant Response Block', async function () {
    browser.ignoreSynchronization = true;
    await participantresponseblockuserpage.btnContinue.isDisplayed().then(async function(){
        await participantresponseblockuserpage.btnContinue.click();
    })
  });

