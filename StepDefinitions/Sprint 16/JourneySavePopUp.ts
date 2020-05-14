import{When,Then} from "cucumber";
import { JourneySavePopUpPageLocate } from "../../PageObjects/Sprint 16/JourneySavePopUp";
import { browser } from "protractor";
import chai = require('chai');
var expect = chai.expect;
let journeypopuppage = new JourneySavePopUpPageLocate();
let expjourenyttltext:string='Journey: Automation_Journey_Popup_AM';
let expRegLnkttltext:string='Journey: Link registration';

When('User click on Sprint 16 folder', async function () {
    await journeypopuppage.fldSprint16.isDisplayed().then(async function(){
        await journeypopuppage.fldSprint16.click().then(async function(){
            await browser.sleep(2000);
        })
    })
  });

When('User click on Automation Journey Pop Up folder', async function () {
    await journeypopuppage.fldAutoJrnPopUp.isDisplayed().then(async function(){
        await journeypopuppage.fldAutoJrnPopUp.click().then(async function(){
            await browser.sleep(2000);
        })
    })
});

When('User clicks three dots to edit Module', async function () {
    await journeypopuppage.threedotsEditModule.isDisplayed().then(async function(){
        await journeypopuppage.threedotsEditModule.click().then(async function(){
            await browser.sleep(3000);
        })
    })
    await journeypopuppage.btnEditModule.isDisplayed().then(async function(){
        await journeypopuppage.btnEditModule.click().then(async function(){
            await browser.sleep(3000);
        })
    })
  });

  When('User clicks on Cancel button of Edit Content window', async function () {
    await journeypopuppage.btnCancelEditCnt.isDisplayed().then(async function(){
        await journeypopuppage.btnCancelEditCnt.click().then(async function(){
            await browser.sleep(1000);
        })
    })
  });

  When('User clicks on STAY button of Journey Save pop up window', async function () {
    await journeypopuppage.btnStay.isDisplayed().then(async function(){
        await journeypopuppage.btnStay.click().then(async function(){
            await browser.sleep(2000);
        })
    })
  });

  When('User clicks on LEAVE button of Journey Save pop up window', async function () {
    await journeypopuppage.btnLeave.isDisplayed().then(async function(){
        await journeypopuppage.btnLeave.click().then(async function(){
            await browser.sleep(2000);
        })
    })
  });

  Then('User should stay on Journey Authoring Page', async function () {
    await journeypopuppage.ttlJourneyPopUp.isDisplayed().then(async function(){
        await journeypopuppage.ttlJourneyPopUp.getText().then(async function(actjourenyttltext){
            expect(actjourenyttltext).to.be.eql(expjourenyttltext);
        })
    })
  });

  When('User clicks on Support option on Left Panel items', async function () {
    await journeypopuppage.btnlnkSupport.isDisplayed().then(async function(){
        await journeypopuppage.btnlnkSupport.click().then(async function(){
            await browser.sleep(1000);
        })
    })
  });

  When('User clicks on Registration option on Left Panel items', async function () {
    await journeypopuppage.btnlnkRegistration.isDisplayed().then(async function(){
        await journeypopuppage.btnlnkRegistration.click().then(async function(){
            await browser.sleep(1000);
        })
    })
  });

  Then('User should land on Registration Link Page', async function () {
    await journeypopuppage.ttlJourneyRegistration.isDisplayed().then(async function(){
        await journeypopuppage.ttlJourneyRegistration.getText().then(async function(actRegLnkttltext){
            expect(actRegLnkttltext).to.be.eql(expRegLnkttltext);
        })
    })
  });