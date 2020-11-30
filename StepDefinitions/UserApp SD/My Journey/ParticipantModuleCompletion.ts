import {Given, When, Then} from "cucumber";
import { ParticipantModuleCompletionPageLocate } from "../../../PageObjects/UserApp POM/My Journey/ParticipantModuleCompletionPage";
import { ParticipantModulePageLocate } from "../../../PageObjects/UserApp POM/My Journey/ParticipantModulePage";

import chai = require('chai');
import { async } from "q";
import { browser } from "protractor";
var expect = chai.expect;
let expcompletedText = "Completed";
let expnxtmodule = "Experience executive decision making";
let participantmodulecompletionpage = new ParticipantModuleCompletionPageLocate();
let participantmodulepage = new ParticipantModulePageLocate();

Then('Participant should be able to see Module completion Page with completed status and circle icon checked', async function () {
    await participantmodulepage.moduleCompletionPageLbl.isPresent().then(async function(falg){
        expect(falg).to.be.true;
        await browser.sleep(2000);
    })
    
    await participantmodulecompletionpage.p_moduleCompletionCircleIcon.isDisplayed().then(async function(iconVisible){
        expect(iconVisible).to.be.true;
    })
    await participantmodulecompletionpage.p_moduleCompletionGoToNxtBtn.isDisplayed().then(async function(){
        await participantmodulecompletionpage.p_moduleCompletionGoToNxtBtn.click().then(async function(){
            await browser.sleep(3000);
        });
    })
    await participantmodulecompletionpage.p_nxtModuleTitle.getText().then(async function(actnxtmodule){
        expect(actnxtmodule).to.equal(expnxtmodule);
    })
});




  
When("Participant clicks on start button of module one to complete all activiites", async function () {
 
    await browser.sleep(2000);
    browser.waitForAngularEnabled(false);

    await participantmodulecompletionpage.startOneActivityBtn.isDisplayed().then(async function(){
        await participantmodulecompletionpage.startOneActivityBtn.click().then(async function(){
            await browser.sleep(2000);
            console.log("Start button click")

        })
    })
  });



  When("Participant user complete all activiites of module one", async function () {
 
    await browser.sleep(5000);
    browser.waitForAngularEnabled(false);
          
    await participantmodulepage.activityContinuetBtn.isDisplayed().then(async function(){
        await participantmodulepage.activityContinuetBtn.click().then(async function(){
            await browser.sleep(2000);
            console.log("Activity continue 1 button click");
        })
    })

   // browser.waitForAngularEnabled(false);
   await browser.sleep(4000);
    await participantmodulepage.activityContinuetBtn.isDisplayed().then(async function(){
        await participantmodulepage.activityContinuetBtn.click().then(async function(){
            await browser.sleep(2000);
            console.log("Activity continue 2 button click");
        })
    })

  //  browser.waitForAngularEnabled(false);
  await browser.sleep(4000);
    await participantmodulepage.activityContinuetBtn.isDisplayed().then(async function(){
        await participantmodulepage.activityContinuetBtn.click().then(async function(){
            await browser.sleep(2000);
            console.log("Activity continue 3 button click");
        })
    })


  });



//   Then('Participant should be able to see Module completion Page with completed status and circle icon checked', async function () {
//     await participantmodulecompletionpage.moduleCompletionLogoImg.isPresent().then(async function(flag){
//         expect(flag).to.be.true;
//     }) 
//     await participantmodulepage.moduleCompletionPageLbl.isPresent().then(async function(falg){
//         expect(falg).to.be.true;
//         await browser.sleep(2000);
//     })
   
// });


