import {When, Then} from "cucumber";
import { ConditionalActivityPageLocate } from "../../../PageObjects/UserApp POM/Home/ConditionalActivityPage";
import { browser } from "protractor";
import chai = require("chai");
var expect = chai.expect;
let conditionalactivitypage = new ConditionalActivityPageLocate();

When('User clicks on Conditional Activity content block under CONTENT section', async function () {
    await conditionalactivitypage.cntConditionalActivityPage.isDisplayed().then(async function(){
        await conditionalactivitypage.cntConditionalActivityPage.click();
    })
  });

  When('User clicks on Content Tab', async function () {
    await conditionalactivitypage.tabContent.isDisplayed().then(async function(){
        await conditionalactivitypage.tabContent.click().then(async function(){
            browser.sleep(3000);
        })
    })
  });

  When('User click on Sprint9 folder', async function () {
    await conditionalactivitypage.fldSprint9.isDisplayed().then(async function(){
      await conditionalactivitypage.fldSprint9.click();
    })
  });

  When('User clicks on Edit Page to open Page Divider', async function () {
    await conditionalactivitypage.btnlnkEditPage1.isDisplayed().then(async function(){
        await conditionalactivitypage.btnlnkEditPage1.click().then(async function(){
            browser.sleep(3000);
        })
    })
  });

  When('User enters value as {string}', async function (string) {
    await conditionalactivitypage.txtUserRole.isDisplayed().then(async function(){
      await conditionalactivitypage.txtUserRole.clear().then(async function(){
        await conditionalactivitypage.txtUserRole.sendKeys(string);
      })
    })
  });

  When('User clicks on Save button to save Page Divider', async function () {
    await conditionalactivitypage.btnSavePageDivider.isDisplayed().then(async function(){
        await conditionalactivitypage.btnSavePageDivider.click();
    })
  });

  When('Participant selects Single Select option', async function () {
    await conditionalactivitypage.rdSingleSelect.isDisplayed().then(async function(){
      await conditionalactivitypage.rdSingleSelect.click();
    })
  });

  When('Participant click on GoToNextModule button', async function () {
    await conditionalactivitypage.btnGoToNxtModule.isDisplayed().then(async function(){
      await conditionalactivitypage.btnGoToNxtModule.click().then(async function(){
        browser.sleep(2000);
      })
    })
  });

  When('Participant starts Security Alert Activity', async function () {
    await conditionalactivitypage.btnSecurityAlertStart.isDisplayed().then(async function(){
      await conditionalactivitypage.btnSecurityAlertStart.click();
    })
  });

  Then('Participant validates Conditional Module Title', async function () {
    await conditionalactivitypage.ttlConditionalModule.isDisplayed().then(async function(){
      await conditionalactivitypage.ttlConditionalModule.getText().then(async function(txtModuleTitle){
        expect(txtModuleTitle).to.be.eql("Conditional Module");
      })
    })
  });

  Then('Participant clicks on Continue button for Conditional Activity', async function () {
    await conditionalactivitypage.btnContinue.isDisplayed().then(async function(){
      await conditionalactivitypage.btnContinue.click().then(async function(){
        browser.sleep(3000);
      })
    })
  });