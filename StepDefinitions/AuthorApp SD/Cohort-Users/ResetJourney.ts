import {When, Then} from "cucumber";
import chai = require('chai');
import { ResetJourneyPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/ResetJourney";
import { browser, element, By, protractor } from "protractor";
import { RanderingSelectionDropdownPageLocate } from "../../../PageObjects/AuthorApp POM/Content/Create/RanderingSelectionDropdownPage";
var expect = chai.expect;
var EC = protractor.ExpectedConditions;
let exptxtVertical1:String = 'New Module Vertical 1';
let exptxtVertical2:String = 'New Module Vertical 2';
let resetjourney = new ResetJourneyPageLocate();

let randeringSelectionDropdownPage = new RanderingSelectionDropdownPageLocate();


When('User clicks on Journey {string} under Journeys list', async function (jrnName) {
  let JourneyName: string = "//span[contains(text(),'" + jrnName + "')]"
    await element(By.xpath(JourneyName)).click();
  });

  When('User clicks on cohort {string} to Reset Journey', async function (chrName) {
    let CohortName: string = "//button[contains(text(),'" + chrName + "')]"
    await element(By.xpath(CohortName)).click();
  });

  When('User searches Journey in Filter Journeys as {string}', async function (string) {
    
    await browser.wait(EC.visibilityOf(resetjourney.srcFilterJourneys)).then(async function(){
      await resetjourney.srcFilterJourneys.sendKeys(string);
      await browser.sleep(2000);
    })
  });


  When('User clicks on User {string} to Reset Journey', async function (usrName) {
    let UserName: string = "(//button[contains(text(),'" + usrName + "')])[1]"
    await element(By.xpath(UserName)).click();
    // await resetjourney.lnkipadtestUser.isDisplayed().then(async function(){
    //     await resetjourney.lnkipadtestUser.click();
    // })
  });

  When('User clicks on Journeys Tab to Reset Journey', async function () {
    await resetjourney.tabJourneys.isDisplayed().then(async function(){
        await resetjourney.tabJourneys.click();
    })
  });

  When('User clicks on Reset Journey Data button', async function () {
    await resetjourney.btnResetJourneyData.isDisplayed().then(async function(){
        await resetjourney.btnResetJourneyData.click().then(async function(){
            await browser.sleep(1000).then(async function(){
                console.log("Reset Journey Successfully");
            })
        })
    })
  });

  When('User selects dropdown from Journey List as {string}', async function (string) {
    await resetjourney.drpJrnLst.isDisplayed().then(async function(){
      await resetjourney.drpJrnLst.click().then(async function(){
        await resetjourney.jrnDrpSearch.isDisplayed().then(async function(){
          await resetjourney.jrnDrpSearch.sendKeys(string)
        })
      })
      let drpJourney: string = "//span[contains(text(),'" + string + "')]"
      await element(By.xpath(drpJourney)).click();
        // await resetjourney.optJrnLst.isDisplayed().then(async function(){
        //   await resetjourney.optJrnLst.click();
        // })
    })
  });

  When('user selects the the vertical as {string}', async function (verticalName) {
    browser.waitForAngularEnabled(false);
    await browser.sleep(4000).then(async function () {
      await resetjourney.verticalDDArrow.isDisplayed().then(async function (registrationReqd) {
        if (registrationReqd == true) {
            await resetjourney.verticalDDArrow.click().then(async function () {
                let industryXpath: string = "//option[contains(text(),'" + verticalName + "')]"
                await element(By.xpath(industryXpath)).click().then(async function () {
                    await randeringSelectionDropdownPage.continueBtn.click().then(function () {
                        browser.sleep(8000);
                    })
                })
            })
        }
    })
  })
  browser.waitForAngularEnabled(true);
  });

  When('user lands to home page of Automation Reset one Vertical', async function () {
    browser.ignoreSynchronization = true;
    await resetjourney.ttlVertical1.isDisplayed().then(async function(){
      await resetjourney.ttlVertical1.getText().then(async function(acttxtVertical1){
        expect(acttxtVertical1).to.be.eql(exptxtVertical1);
      })
    })
  });

  When('user lands to home page of Automation Reset two Vertical', async function () {
    browser.ignoreSynchronization = true;
    await resetjourney.ttlVertical2.isDisplayed().then(async function(){
      await resetjourney.ttlVertical2.getText().then(async function(acttxtVertical2){
        expect(acttxtVertical2).to.be.eql(exptxtVertical2);
      })
    })
  });

  When('user completes activity of Automation Reset one Vertical', async function () {
    browser.ignoreSynchronization = true;
    await browser.wait(EC.visibilityOf(resetjourney.btnStart)).then(async function(){
      await resetjourney.btnStart.click();
    })
    await browser.wait(EC.visibilityOf(resetjourney.btnContinue)).then(async function(){
      await resetjourney.btnContinue.click();
    })
  });

  When('user completes activity of Automation Reset two Vertical', async function () {
    browser.ignoreSynchronization = true;
    await browser.wait(EC.visibilityOf(resetjourney.btnStart)).then(async function(){
      await resetjourney.btnStart.click();
    })
    await browser.wait(EC.visibilityOf(resetjourney.btnContinue)).then(async function(){
      await resetjourney.btnContinue.click();
    })
  });

  When('user clicks on logout', function () {
    
  });

 When('first activity should be in Start', async function () {
    await resetjourney.btnStart.isDisplayed().then(async function(btnStr){
        expect(btnStr).to.be.true;
    })
  });

 When('first activity should be in Revisit', async function () {
    await resetjourney.btnRevisit.isDisplayed().then(async function(btnRvst){
        expect(btnRvst).to.be.true;
    })
  });