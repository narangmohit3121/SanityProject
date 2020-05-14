import {When, Then} from "cucumber";
import chai = require("chai");
var expect = chai.expect;
import { AuthoringCreateCohortPageLocate } from "../../PageObjects/Sprint 8/AuthoringCreateCohort";
let authoringcreatecohort = new AuthoringCreateCohortPageLocate();

When('User clicks on Users Tab', async function () {
    await authoringcreatecohort.tabUsers.isDisplayed().then(async function(){
        await authoringcreatecohort.tabUsers.click();
    })
  });

  When('User clicks on any Journey under Journeys list to create a cohort', async function () {
    await authoringcreatecohort.lnkTestJourney.isDisplayed().then(async function(){
        await authoringcreatecohort.lnkTestJourney.click();
    })
  });

  When('User clicks on Create Cohort button', async function () {
    await authoringcreatecohort.btnCreateCohort.isDisplayed().then(async function(){
        await authoringcreatecohort.btnCreateCohort.click();
    })
  });

  Then('User validate Create Cohort Window Title', async function () {
    await authoringcreatecohort.ttlCreateCohortWindow.isDisplayed().then(async function(){
        await authoringcreatecohort.ttlCreateCohortWindow.getText().then(async function(txtwindow){
            console.log(txtwindow);
        })
    })
  });

  When('User enters Title as {string} in Cohort Title', async function (string) {
    await authoringcreatecohort.txtCohortTitle.isDisplayed().then(async function(){
        await authoringcreatecohort.txtCohortTitle.sendKeys(string);
    })
  });

  When('User selects Start Date', async function () {
    await authoringcreatecohort.dtpCalenderStartDate.isDisplayed().then(async function(){
        await authoringcreatecohort.dtpCalenderStartDate.click().then(async function(){
            await authoringcreatecohort.dtpCalenderMonth.click().then(async function(){
                await authoringcreatecohort.dtpCalenderDay.click();
            })
        })
    })
  });

  When('User clicks on Test Cohort to toggle on', async function () {
    await authoringcreatecohort.tglTestCohort.isDisplayed().then(async function(){
        await authoringcreatecohort.tglTestCohort.click();
    })
  });

  When('User clicks on Enabled to toggle on', async function () {
    await authoringcreatecohort.tglEnabled.isDisplayed().then(async function(){
        await authoringcreatecohort.tglEnabled.click();
    })
  });

  When('User clicks on User Expiry to toggle on', async function () {
    await authoringcreatecohort.tglUserExpiry.isDisplayed().then(async function(){
        await authoringcreatecohort.tglUserExpiry.click();
    })
  });

  When('User clicks on plus symbol', async function () {
    await authoringcreatecohort.symPlusUserExpiry.isDisplayed().then(async function(){
        await authoringcreatecohort.symPlusUserExpiry.click();
    })
  });

  Then('User clicks on Done button to Create a Cohort', async function () {
    await authoringcreatecohort.btnCreateCohortDONE.isDisplayed().then(async function(){
        await authoringcreatecohort.btnCreateCohortDONE.click();
    })
  });

  Then('User should be able to view the newly added Cohort in Cohort list', async function () {
    await authoringcreatecohort.lnkCohortName.isPresent().then(async function(cohortPresent){
      expect(cohortPresent).to.be.true;
    })
  });


