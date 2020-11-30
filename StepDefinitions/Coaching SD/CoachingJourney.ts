import { Given, Then, When } from "cucumber";
import { browser, By, element, ElementFinder, protractor } from "protractor";
import { ClientCopyJourneyPageLocate } from "../../PageObjects/AuthorApp POM/Journey/CopyJourneyPage";
import { CoachingJourneyPage } from "../../PageObjects/Coaching POM/CoachingJourney";
import { HelperFunctions } from "../HelperClass";

let clientCopyJourney = new ClientCopyJourneyPageLocate();
let helperclass = new HelperFunctions();
let coachingjourney = new CoachingJourneyPage();

When('User should click on Chevron folder', async function () {
    await clientCopyJourney.txtClientSearch.sendKeys("chevron").then(async function () {
        await clientCopyJourney.colChevron.isDisplayed().then(async function () {
            await clientCopyJourney.colChevron.click().then(async function(){
                await browser.sleep(6000);
            })
        })
    })
});

When('User clicks on folder {string}', async function (folderName) {
    let fld : string = "//p[contains(text(),'"+folderName+"')]"
    await element(By.xpath(fld)).click();
});

When('Participant accepts Privacy Policy', async function () {
    
});

When('User links {string} activity to Module', async function (actType) {
    helperclass.addActivitywithoutLink('Coaching Journey Module','Coaching Journey Activity',actType);
});

When('User toggles on My Coaching under Naviagation Tab', async function () {
    helperclass.setMyCoachingSetting(true);
});

Then('User Saves and Publish', async function () {
    helperclass.saveAndPublishAndExitOnJourneyFlow();
});