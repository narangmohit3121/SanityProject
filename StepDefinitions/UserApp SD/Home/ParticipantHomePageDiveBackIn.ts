import {When, Then} from "cucumber";
import { ParticipantHomePageDiveBackInLocate } from "../../../PageObjects/UserApp POM/Home/ParticipantHomePageDiveBackIn";
import { AssertionError } from "assert";
import { browser } from "protractor";
import chai = require('chai');
var expect = chai.expect;
let divebackin:string = "Dive back in";

let participanthomepagedivebackin = new ParticipantHomePageDiveBackInLocate();
When('Participant clicks on Hamberg menu', async function () {
    browser.waitForAngularEnabled(false);
    await participanthomepagedivebackin.iconHamberg.isDisplayed().then(async function(){
        await participanthomepagedivebackin.iconHamberg.click().then(async function(){
            browser.sleep(2000);
        })
    })
    browser.waitForAngularEnabled(true);
  });

  When('Participant clicks on Home menu', async function () {
    browser.waitForAngularEnabled(false);
    await participanthomepagedivebackin.menuHome.isDisplayed().then(async function(){
        await participanthomepagedivebackin.menuHome.click();
    })

    browser.waitForAngularEnabled(true);
  });

  Then('Participant should be able to see Dive Back In', async function () {
    browser.waitForAngularEnabled(false);
    await participanthomepagedivebackin.ttlDiveBackIn.isDisplayed().then(async function(){
        await participanthomepagedivebackin.ttlDiveBackIn.getText().then(async function(diveText){
            expect(diveText).to.be.eql(divebackin);
        })
    })
    browser.waitForAngularEnabled(true);
  });

  When('Participant verifies Stage Title in Home Page Dive Back In', async function () {
    browser.waitForAngularEnabled(false);
    await participanthomepagedivebackin.ttlStageTitle.isDisplayed().then(async function(){
        await participanthomepagedivebackin.ttlStageTitle.getText().then(async function(titleText){
            expect(titleText).to.be.eql("New Module 1A");
        })
    })
    browser.waitForAngularEnabled(true);
  });

  When('Participant verifies Module Title in Home Page Dive Back In', async function () {
    browser.waitForAngularEnabled(false);
    await participanthomepagedivebackin.ttlModuleTitle.isDisplayed().then(async function(){
        await participanthomepagedivebackin.ttlModuleTitle.getText().then(async function(moduleText){
            expect(moduleText).to.be.eql("New Module 1A");
        })
    })
    browser.waitForAngularEnabled(true);
  });