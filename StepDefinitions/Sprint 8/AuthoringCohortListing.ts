import {When, Then} from "cucumber";
import { AuthoringCohortListingPageLocate } from "../../PageObjects/Sprint 8/AuthoringCohortListing";
import { AuthoringCreateCohortPageLocate } from "../../PageObjects/Sprint 8/AuthoringCreateCohort";
import { browser } from "protractor";
let authoringcohortlisting = new AuthoringCohortListingPageLocate();
let authoringcreatecohort = new AuthoringCreateCohortPageLocate();

When('User clicks on any Journey under Journeys list to land to cohort listing page', async function () {
    await authoringcreatecohort.lnkTestJourney.isDisplayed().then(async function(){
        await authoringcreatecohort.lnkTestJourney.click();
    })
  });

  Then('User should land to Cohort Listing Page', async function () {
    await authoringcohortlisting
  });

  When('User clicks on any cohort name', async function () {
    await authoringcohortlisting.lnkCohortName.isDisplayed().then(async function(){
        await authoringcohortlisting.lnkCohortName.click();
    })
  });

  Then('User should be able to view user list under that cohort', function () {
    
  });

  Then('User should be able to view Test section', async function () {
    await authoringcohortlisting.columnTest.isDisplayed().then(async function(){
        await authoringcohortlisting.columnTest.getText().then(async function(textofTest){
            console.log(textofTest);
        })
    })
  });

  When('User clicks on icon next to the labels in the header', async function () {
    await authoringcohortlisting.arrwUsers.isDisplayed().then(async function(){
        await authoringcohortlisting.arrwUsers.click();
    })
  });

  Then('User should be able to sort the header', function () {
    
  });

  Then('User should be able to toggle Enabled on and off under Cohort List', async function () {
    await authoringcohortlisting.tglEnabled.isDisplayed().then(async function(){
      await authoringcohortlisting.tglEnabled.click().then(async function(){
        console.log("Enabled Turned off");
      })
    })
    await authoringcohortlisting.tglEnabled.isDisplayed().then(async function(){
      await authoringcohortlisting.tglEnabled.click().then(async function(){
        console.log("Enabled Turned on");
      })
    })
  });