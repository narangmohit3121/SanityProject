import { Given, When, Then } from "cucumber";
import { ParticipantActivityPageLocate } from "../../../PageObjects/UserApp POM/My Journey/ParticipantActivityPage";
import { browser } from "protractor";
import config from "../../config.json"
import chai = require('chai');
import { async } from "q";
var expect = chai.expect;
let expjourneypagetitle = "My Journey";
let expactvitiytitle = "What is important in this industry to succeed";
let expmoduletitle = "Opportunities and trends in the industry";

let participantactivitypage = new ParticipantActivityPageLocate();




When("Participant landed on Module one page", async function () {
    await browser.sleep(3000);
});


Then("Participant should see first activity below of module with start button", { timeout: 12 * 1000 }, async function () {

    browser.ignoreSynchronization = true;

    await participantactivitypage.activityOneLbl.getText().then(async function (actmActivitytitle) {
        expect("Activity one").to.equal(actmActivitytitle);
    })

    await participantactivitypage.activityStartBtn.getText().then(async function (actactvitiyButtonName) {
        expect("Start").to.equal(actactvitiyButtonName);
    })
});



When("user click start button of one activity and landed on Activity one page", async function () {
    await participantactivitypage.activityStartBtn.isDisplayed().then(async function () {
        await participantactivitypage.activityStartBtn.click().then(async function () {
            await browser.sleep(3000);
            
        })
    })
});



Then("user should see activity should be displayed below of module one", { timeout: 12 * 1000 }, async function () {

    browser.ignoreSynchronization = true;
    await browser.sleep(4000);
    await participantactivitypage.moduleOneabl.getText().then(async function (actModuletitle) {
        expect("Participant Login Module one").to.equal(actModuletitle);
    })

    await participantactivitypage.activityOneabl.getText().then(async function (actactvitiyTitle) {

        expect("Activity one").to.equal(actactvitiyTitle);
    })
});










Given('Participant should login in with {string} and {string}', { timeout: 12 * 10000 }, async function (string, string2) {
    browser.ignoreSynchronization = false;
    await browser.getCapabilities().then(async function (caps) {
        let browserName: string = caps.get("browserName");
        //console.log(browserName);
        if (browserName === 'internet explorer' || browserName === 'Safari') {
            browser.resetUrl = 'about:blank';
        }
    })
    await browser.get(config.MomentaParticipant).then(async function () {
        //await browser.refresh().then(async function () {
        //})
        await participantactivitypage.p_emailID.sendKeys(string);
        await participantactivitypage.p_password.sendKeys(string2).then(async function () {
            await participantactivitypage.p_loginButton.click().then(async function () {
                await browser.sleep(8000);
            })
        })
    });
    //await browser.refresh();
});

When('Participant should be landed on My Journey Page', async function () {
    await participantactivitypage.p_myJourneyTitle.getText().then(async function (actjourneypagetitle) {
        expect(expjourneypagetitle).to.equal(actjourneypagetitle);
    })
});

When('Participant clicks on any Module', async function () {
    await participantactivitypage.p_moduleStartButton.isDisplayed().then(async function () {
        await participantactivitypage.p_moduleStartButton.click().then(async function () {
            await browser.sleep(3000);
        })
    })
});

When('Participant clicks on any Activity of Module', async function () {
    await participantactivitypage.p_activityStartButton.isDisplayed().then(async function () {
        await participantactivitypage.p_activityStartButton.click().then(async function () {
            await browser.sleep(3000);
        })
    })
});

Then('Participant should see the Activity Title below Module name', { timeout: 12 * 1000 }, async function () {

    browser.ignoreSynchronization = true;

    await participantactivitypage.p_activitymoduleTitle.getText().then(async function (actmoduletitle) {
        expect(expmoduletitle).to.equal(actmoduletitle);
    })

    await participantactivitypage.p_activityTitle.getText().then(async function (actactvitiytitle) {
        expect(expactvitiytitle).to.equal(actactvitiytitle);
    })
});

Then('Participant clicks on Continue button', async function () {
    browser.ignoreSynchronization = true;
    await participantactivitypage.p_continueButton.isDisplayed().then(async function () {
        //     await participantactivitypage.p_continueButton.click().then(async function(){
        //         await browser.sleep(3000);
        //     })
        // })
        //await browser.actions().mouseMove(participantactivitypage.p_continueButton).perform().then(async function(){
        await participantactivitypage.p_continueButton.click().then(async function () {
            await browser.sleep(3000);
        })
    });
});

Then('Participant clicks on Back button', async function () {
    await participantactivitypage.p_backButton.isDisplayed().then(async function () {
        await participantactivitypage.p_backButton.click().then(async function () {
            await browser.sleep(3000);
        })
    })
});

Then('Participant should click on Logout button', async function () {
    await participantactivitypage.p_logoutButton.isDisplayed().then(async function () {
        await participantactivitypage.p_logoutButton.click().then(async function () {
            await browser.sleep(3000);

        })
    })
});