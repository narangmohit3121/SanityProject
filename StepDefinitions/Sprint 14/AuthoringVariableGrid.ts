import {When, Then} from "cucumber";
import { AuthoringVariableGridPageLocate } from "../../PageObjects/Sprint 14/AuthoringVariableGrid";
import { browser } from "protractor";
let authoringvariablegrid = new AuthoringVariableGridPageLocate();

When('User should click on Variable Grid Content', async function () {
    await authoringvariablegrid.cntVariableGrid.isDisplayed().then(async function(){
        await authoringvariablegrid.cntVariableGrid.click();
    })
  });

  Then('User should check Variable Grid block is present under CMS', async function () {
    await authoringvariablegrid.blkVariableGrid.isDisplayed().then(async function(){
        await authoringvariablegrid.blkVariableGrid.getText().then(async function(txt){

        })
    })
  });

  When('User clicks on Edit Variable Grid', async function () {
    await authoringvariablegrid.btnlnkEditVariableGrid.isDisplayed().then(async function(){
        await authoringvariablegrid.btnlnkEditVariableGrid.click();
    })
  });

  When('User enters value in Journey Script ID as {string}', async function (string) {
    await authoringvariablegrid.txtJourneyScriptID.isDisplayed().then(async function(){
        await authoringvariablegrid.txtJourneyScriptID.clear().then(async function(){
            await authoringvariablegrid.txtJourneyScriptID.sendKeys(string);
        })
    })
  });

  When('User enters value in Type Description as {string}', async function (string) {
    await authoringvariablegrid.txtTypeDescription.isDisplayed().then(async function(){
        await authoringvariablegrid.txtTypeDescription.clear().then(async function(){
            await authoringvariablegrid.txtTypeDescription.sendKeys(string);
        })
    })
  });

  When('User enters value in Type Question Title as {string}', async function (string) {
    await authoringvariablegrid.txtTypeQuesTitle.isDisplayed().then(async function(){
        await authoringvariablegrid.txtTypeQuesTitle.clear().then(async function(){
            await authoringvariablegrid.txtTypeQuesTitle.sendKeys(string);
        })
    })
  });

  Then('User clicks on Save button of Variable Grid', async function () {
    await authoringvariablegrid.btnSaveVariableGrid.isDisplayed().then(async function(){
        await authoringvariablegrid.btnSaveVariableGrid.click();
    })
  });

  When('User clicks on Add Option of Variable Grid', async function () {
    await authoringvariablegrid.btnAddOpt.isDisplayed().then(async function(){
        await authoringvariablegrid.btnAddOpt.click();
    })
  });

  When('User clicks on Add Question of Variable Grid', async function () {
    await authoringvariablegrid.btnAddQues.isDisplayed().then(async function(){
        await authoringvariablegrid.btnAddQues.click();
    })
  });

  When('User click on Sprint 14 folder', async function () {
    await authoringvariablegrid.fldSprint14.isDisplayed().then(async function(){
      await authoringvariablegrid.fldSprint14.click().then(async function(){
        await browser.sleep(2000);
      })
    })
  });