import {Given, When, Then} from "cucumber";
import { ParticipantModuleCompletionPageLocate } from "../../PageObjects/Sprint 4/ParticipantModuleCompletionPage";
import { ParticipantModulePageLocate } from "../../PageObjects/Sprint 4/ParticipantModulePage";
import chai = require('chai');
import { async } from "q";
import { browser } from "protractor";
var expect = chai.expect;
let expcompletedText = "Completed";
let expnxtmodule = "Experience executive decision making";
let participantmodulecompletionpage = new ParticipantModuleCompletionPageLocate();
let participantmodulepage = new ParticipantModulePageLocate();

Then('Participant should be able to see Module completion Page with completed status and circle icon checked', async function () {
    await participantmodulepage.p_moduleCompletionPageCompletedText.getText().then(async function(actcompletedText){
        expect(actcompletedText).to.equal(expcompletedText);
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