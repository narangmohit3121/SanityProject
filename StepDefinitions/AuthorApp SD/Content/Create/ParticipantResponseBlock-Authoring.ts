import { When, Then, Given } from "cucumber";
import { ParticipantResponseBlockPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/ParticipantResponseBlock-Authoring";
import { async } from "q";
import chai = require('chai');
import { browser, element,By } from "protractor";
//import { config } from "../cucumberConfig";
import config from "../../../config.json"
import { HelperFunctions } from "../../../HelperClass";
import { ActivityAuthoringPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";
var expect = chai.expect;
//import { AssertionError } from "assert";
let expJourneyScriptID = ['Journey No 1', 'Journey No 2'];
let actJourneyScriptID: any = [];
let expwinText = 'Participant Response';
let participantresponseblock = new ParticipantResponseBlockPageLocate();
let helper = new HelperFunctions();
let activityAuthorPage = new ActivityAuthoringPageLocate();

Given('Author should login in with {string} and {string}', async function (string, string2) {
  await browser.get(config.MomentaUserUrl).then(async function () {
    await participantresponseblock.txtLoginEmailId.sendKeys(string).then(async function () {
      await participantresponseblock.btnNext.click();
    })
  })
  await participantresponseblock.txtLoginPassword.sendKeys(string2).then(async function () {
    await participantresponseblock.btnLogin.click();
  })
})

When('User search for particular client having Participant Response block and clicks on it', async function () {
  await participantresponseblock.colPetronas.isDisplayed().then(async function () {
    await participantresponseblock.colPetronas.click();
  })
});

When('User navigates to any Content block having Participant Response block', async function () {
  await participantresponseblock.cntParticipantResponseBlock.isDisplayed().then(async function () {
    await participantresponseblock.cntParticipantResponseBlock.click();
  })
});

When('User clicks on Edit Participant Response header', async function () {
  await participantresponseblock.lnkEditParticipantResponseHeader.isDisplayed().then(async function () {
    await participantresponseblock.lnkEditParticipantResponseHeader.click();
  })
});

Then('User should be able to view Participant Response heading on top of dialog box', async function () {
  await participantresponseblock.ttlParticipantResponseWindow.isDisplayed().then(async function () {
    await participantresponseblock.ttlParticipantResponseWindow.getText().then(async function (actwinText) {
      expect(actwinText).to.equal(expwinText);
    })
  })
});

//Need to Re-check
Then('User should be able to select option from Journey Script ID', async function () {
  await participantresponseblock.drpJourneyScriptID.isDisplayed().then(async function () {
    await participantresponseblock.drpJourneyScriptID.click().then(async function(){
      await browser.sleep(4000).then(async function(){
        await participantresponseblock.drpJourneyScriptOptTwo.click();
        // .then(async function () {
        //   await browser.sleep(4000).then(async function(){
        //     await participantresponseblock.drpJourneyScriptOptOne.isSelected().then(async function (optionSelected) {
        //       expect(optionSelected).to.be.true;
        //     })
        //   })
        // })
      })
    });
  })
  await helper.cancelCMSChangesAndExit();
});

Then('User should be able to switch Show Excerise Label', async function () {
  await participantresponseblock.selectDrpJourneyScriptOptTwo.isPresent().then(async function(isPresent){
    if(isPresent){
      await participantresponseblock.selectDrpJourneyScriptOptTwo.click();
      await browser.sleep(1000);
    }   

  })
  await participantresponseblock.tglShowExcerciseLabel.isDisplayed().then(async function () {
    await participantresponseblock.tglShowExcerciseLabel.click();
  })
  await helper.cancelCMSChangesAndExit();
});

When('User clicks on Journey Script ID option', async function () {
  await participantresponseblock.drpJourneyScriptID.isDisplayed().then(async function () {
    await participantresponseblock.drpJourneyScriptID.click();
  })
});

Then('User should view list of all published activities of Single Select and Multi Select', async function () {
  await participantresponseblock.lstJourneyScriptIDoptions.each(async function (element) {
    await element.getText().then(function (scriptOpts) {
      actJourneyScriptID.push(scriptOpts);      
    })
    //console.log(actJourneyScriptID);
  })
  expect(actJourneyScriptID).to.include.members(expJourneyScriptID);
  await helper.cancelCMSChangesAndExit();
});

Then('User should click on Cancel button to close Participant Response window', async function () {
  await participantresponseblock.btnParticipantResponseCancel.isDisplayed().then(async function () {
    await participantresponseblock.btnParticipantResponseCancel.click();
  });
  await activityAuthorPage.exitEditor.click().then(async function () {
    await helper.continueWithoutSavingChanges();
    await browser.sleep(2000);
})
});