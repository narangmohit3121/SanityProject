import {When, Then} from "cucumber";
import chai = require("chai");
var expect = chai.expect;
import { AuthoringCreateCohortPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/AuthoringCreateCohort";
import { browser, element, By, protractor } from "protractor";
var EC = protractor.ExpectedConditions;
let authoringcreatecohort = new AuthoringCreateCohortPageLocate();
let chrWindowTxt:string = "Cohort Settings";

function generateRandomWord(length: number): string {
  let result: string = "";
  let selectionPool: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let len: number = selectionPool.length;
  for (let i = 0; i < length; i++) {
    result = result + selectionPool.charAt(Math.floor(Math.random() * len));
  }
  //console.log(result);
  return result;
}

let randomWord: string = generateRandomWord(6);
let cohortname: string = "cohort" + randomWord;

When('User clicks on Users Tab', async function () {
  await browser.sleep(3000).then(async function(){
    await browser.wait(EC.visibilityOf(authoringcreatecohort.tabUsers)).then(async function(){
      await authoringcreatecohort.tabUsers.click();
  })
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
            expect(txtwindow).to.be.eql(chrWindowTxt);
        })
    })
  });

  When('User enters Title as {string} and Journey Code as {string} and Start date as {string} and End date as {string}', async function (cohortTitle, jrnCode, startdate, enddate) {
    browser.wait(EC.visibilityOf(authoringcreatecohort.txtCohortTitle)).then(async function(){
      await authoringcreatecohort.txtCohortTitle.sendKeys
    })
  });

  When('User enters Title in Cohort Title', async function () {
    await authoringcreatecohort.txtCohortTitle.isDisplayed().then(async function(){
        await authoringcreatecohort.txtCohortTitle.sendKeys(cohortname);
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
  When('User selects End Date', async function () {
    await authoringcreatecohort.dtpCalenderEndDate.isDisplayed().then(async function(){
        await authoringcreatecohort.dtpCalenderEndDate.click().then(async function(){
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
        await browser.sleep(5000)
    })
  });

  Then('User should be able to view the newly added Cohort in Cohort list', async function () {
     var elm=element(By.xpath("//button[contains(text(),'"+cohortname+"')]"))
     await elm.isPresent().then(async function(cohortPresent){
      expect(cohortPresent).to.be.true;
    })
  });


