import {When, Then} from "cucumber";
import chai = require('chai');
import { ResetJourneyPageLocate } from "../../PageObjects/Sprint 9/ResetJourney";
import { browser } from "protractor";
var expect = chai.expect;
let resetjourney = new ResetJourneyPageLocate();


When('User clicks on any Journey under Journeys list to Reset Journey', async function () {
    await resetjourney.lnkResetourney.isDisplayed().then(async function(){
        await resetjourney.lnkResetourney.click();
    })
  });

  When('User clicks on any cohort name to Reset Journey', async function () {
    await resetjourney.lnkQATestersCohort.isDisplayed().then(async function(){
        await resetjourney.lnkQATestersCohort.click();
    })
  });

  When('User clicks on any User to Reset Journey', async function () {
    await resetjourney.lnkipadtestUser.isDisplayed().then(async function(){
        await resetjourney.lnkipadtestUser.click();
    })
  });

  When('User clicks on Journeys Tab to Reset Journey', async function () {
    await resetjourney.tabJourneys.isDisplayed().then(async function(){
        await resetjourney.tabJourneys.click();
    })
  });

  When('User clicks on Reset Journey Data button', async function () {
    await resetjourney.btnResetJourneyData.isDisplayed().then(async function(){
        await resetjourney.btnResetJourneyData.click().then(async function(){
            await browser.sleep(4000).then(async function(){
                console.log("Reset Journey Successfully");
            })
        })
    })
  });