import { When, Then } from "cucumber";
import { browser,protractor } from "protractor";
import chai = require("chai");
var expect = chai.expect;
let path = require("path");
var EC = protractor.ExpectedConditions;
import { AuthoringCohortListingPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/AuthoringCohortListing";
import { AuthoringCreateCohortPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/AuthoringCreateCohort";

import { CommonLocate } from "../../../PageObjects/Common";
let authoringcohortlisting = new AuthoringCohortListingPageLocate();
let authoringcreatecohort = new AuthoringCreateCohortPageLocate();
let explistofUsers: Array<string> = [];
let actlistofUser: Array<string> = ['ABCD', 'Cohort Test Title', 'cohortqskoUf', 'sd'];
let explistofCohorts: Array<string> = [];
let actlistofCohorts: Array<string> = ['CohortListing1', 'CohortListing2', 'CohortListing3', 'CohortListing4','CohortListing5'];
let expUserName: Array<string> = [];
let actUserName: Array<string> = ['cohortlist4', 'cohortlist3', 'cohortlist2', 'cohortlist1'];

let expbeforeSortList: Array<string> = [];
let actbeforeSortList: Array<string> = ['CohortListing1', 'CohortListing2', 'CohortListing3', 'CohortListing4','CohortListing5'];

let expafterSortList: Array<string> = [];
let actafterSortList: Array<string> = ['CohortListing5', 'CohortListing4', 'CohortListing3', 'CohortListing2','CohortListing1'];

When('User clicks on any Journey under Journeys list to land to cohort listing page', async function () {
  await authoringcreatecohort.lnkTestJourney.isDisplayed().then(async function () {
    await authoringcreatecohort.lnkTestJourney.click();
  })
});

Then('User should land to Cohort Listing Page', async function () {
  await authoringcreatecohort.lstCohortTitle.each(async function(element){
    element.getText().then(async function(listCohorts){
      explistofCohorts.push(listCohorts);
    })
  })
  expect(explistofCohorts).to.be.eql(actlistofCohorts)
});

When('User clicks on any cohort name', async function () {
  await authoringcohortlisting.lnkCohortName.isDisplayed().then(async function () {
    await authoringcohortlisting.lnkCohortName.click();
  })
});

Then('User should be able to view user list under that cohort', async function () {
  await authoringcreatecohort.lstUserName.each(async function(element){
    element.getText().then(async function(listUsers){
      expUserName.push(listUsers);
    })
  })
  console.log(expUserName);
  expect(expUserName).to.be.eql(actUserName)
});

Then('User should be able to view Test section', async function () {
  await authoringcohortlisting.columnTest.isDisplayed().then(async function () {
    await authoringcohortlisting.columnTest.getText().then(async function (textofTest) {
      console.log(textofTest);
      expect(textofTest).to.be.eql('True');
    })
  })
});

When('User validates the Cohort list before sorting', async function () {
  await authoringcohortlisting.lstUsers.each(function (element, index) {
    element.getText().then(async function (listofUsers) {
      console.log(listofUsers);
      expbeforeSortList.push(listofUsers);
    })
  })
  expect(expbeforeSortList).to.be.eql(actbeforeSortList);
  console.log("Before Sorting List validated");
});

When('User clicks on arrow icon next to the Cohort header', async function () {
    await browser.actions().mouseMove(authoringcohortlisting.ttlCohort).perform().then(async function(){
      await browser.wait(EC.visibilityOf(authoringcohortlisting.arrwUsers)).then(async function(){
        await browser.actions().mouseMove(authoringcohortlisting.arrwUsers).click().perform().then(async function(){
          await browser.actions().mouseMove(authoringcohortlisting.arrwUsers).click().perform();
        })
      })
    })
});

Then('User should be able to sort the header', async function () {
  await authoringcohortlisting.lstUsers.each(function(element){
    element.getText().then(async function(listofUsers){
      expafterSortList.push(listofUsers)
    })
  })
  expect(expafterSortList).to.be.eql(actafterSortList);
  console.log("After Sorting List validated");
});

Then('User should be able to toggle Enabled on and off under Cohort List', async function () {
  await authoringcohortlisting.tglEnabled.isDisplayed().then(async function () {
    await authoringcohortlisting.tglEnabled.click().then(async function () {
      await authoringcohortlisting.tglOff.getText().then(async function (txtOff) {
        expect(txtOff).to.be.eql('Off');
        console.log("Enabled Turned off");
      })
    })
  })
  await authoringcohortlisting.tglEnabled.isDisplayed().then(async function () {
    await authoringcohortlisting.tglEnabled.click().then(async function () {
      await authoringcohortlisting.tglOn.getText().then(async function (txtOn) {
        expect(txtOn).to.be.eql('On');
        console.log("Enabled Turned on");
      })
    })
  })

  await authoringcohortlisting.tglTestCohort.isDisplayed().then(async function () {
    await authoringcohortlisting.tglTestCohort.click().then(async function () {
      await authoringcohortlisting.tglOff.getText().then(async function (txtOff) {
        expect(txtOff).to.be.eql('Off');
        console.log("Test Cohort Turned off");
      })
    })
  })
  await authoringcohortlisting.tglTestCohort.isDisplayed().then(async function () {
    await authoringcohortlisting.tglTestCohort.click().then(async function () {
      await authoringcohortlisting.tglOn.getText().then(async function (txtOn) {
        expect(txtOn).to.be.eql('On');
        console.log("Test Cohort Turned on");
      })
    })
  })
});