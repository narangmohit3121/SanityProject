import { When, Then } from "cucumber";
import { AuthoringVariableGridPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/AuthoringVariableGrid";
import { browser } from "protractor";
import { ActivityAuthoringPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";
import { HelperFunctions } from "../../../HelperClass";
import chai = require('chai');

var expect = chai.expect;
let authoringvariablegrid = new AuthoringVariableGridPageLocate();
let helper = new HelperFunctions();
let activityAuthorPage = new ActivityAuthoringPageLocate();


When('User should click on Radio Button Matrix Content', async function () {
  await authoringvariablegrid.cntVariableGrid.isDisplayed().then(async function () {
    await authoringvariablegrid.cntVariableGrid.click();
  })
});

Then('User should check Radio Button Matrix block is present under CMS', async function () {
  await authoringvariablegrid.blkVariableGrid.isDisplayed().then(async function (isBlockVisible) {
    expect(isBlockVisible).to.be.true;
  })
  await activityAuthorPage.exitEditor.click().then(async function () {
    await helper.continueWithoutSavingChanges();
    await browser.sleep(2000);
  })
});

When('User clicks on Edit Radio Button Matrix', async function () {
  await authoringvariablegrid.btnlnkEditVariableGrid.isDisplayed().then(async function () {
    await authoringvariablegrid.btnlnkEditVariableGrid.click();
  })
});

When('User enters value in Journey Script ID as {string}', async function (string) {
  await authoringvariablegrid.txtJourneyScriptID.isDisplayed().then(async function () {
    await authoringvariablegrid.txtJourneyScriptID.clear().then(async function () {
      await authoringvariablegrid.txtJourneyScriptID.sendKeys(string);
    })
  })
});

When('User enters value in Type Description as {string}', async function (string) {
  await authoringvariablegrid.txtTypeDescription.isDisplayed().then(async function () {
    await authoringvariablegrid.txtTypeDescription.clear().then(async function () {
      await authoringvariablegrid.txtTypeDescription.sendKeys(string);
    })
  })
});

When('User enters value in Type Question Title as {string}', async function (string) {
  await authoringvariablegrid.txtTypeQuesTitle.isDisplayed().then(async function () {
    await authoringvariablegrid.txtTypeQuesTitle.clear().then(async function () {
      await authoringvariablegrid.txtTypeQuesTitle.sendKeys(string);
    })
  })
});

When("User enters Question Title as {string}", async function (questionTitle) {
  await authoringvariablegrid.txtQuesName.isDisplayed().then(async function () {
    await authoringvariablegrid.txtQuesName.clear().then(async function () {
      await authoringvariablegrid.txtQuesName.sendKeys(questionTitle);
    })
  })
})

Then('User clicks on Save button of Radio Button Matrix', async function () {
  await authoringvariablegrid.btnSaveVariableGrid.isDisplayed().then(async function () {
    await authoringvariablegrid.btnSaveVariableGrid.click();
  })
  await activityAuthorPage.exitEditor.click().then(async function () {
    //await helper.continueWithoutSavingChanges();
    await browser.sleep(2000);
  })
});

When('User clicks on Add Option of Radio Button Matrix', async function () {
  await authoringvariablegrid.btnAddOpt.isDisplayed().then(async function () {
    await authoringvariablegrid.btnAddOpt.click();
  })
  await helper.cancelCMSChangesAndExit();
});

When('User clicks on Add Question of Radio Button Matrix', async function () {
  await authoringvariablegrid.btnAddQues.isDisplayed().then(async function () {
    await authoringvariablegrid.btnAddQues.click();
  })
  await helper.cancelCMSChangesAndExit();
});

When('User click on Sprint 14 folder', async function () {
  await authoringvariablegrid.fldSprint14.isDisplayed().then(async function () {
    await authoringvariablegrid.fldSprint14.click().then(async function () {
      await browser.sleep(2000);
    })
  })
});