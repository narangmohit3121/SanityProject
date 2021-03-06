import { Then, When } from "cucumber";
import { browser, protractor } from "protractor";
import chai = require('chai');
import { AuthoringMinSelectOptionLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/AuthoringMinSelectOption";
import { ActivityAuthoringPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";
import { HelperFunctions } from "../../../HelperClass";
var expect = chai.expect;

let authoringminselectoption = new AuthoringMinSelectOptionLocate();
let activityAuthorPage = new ActivityAuthoringPageLocate();
let helper = new HelperFunctions();

Then('User checks if Min Select Option is displayed', async function () {
    await authoringminselectoption.ttlMinNum.isDisplayed().then(async function () {
        await authoringminselectoption.ttlMinNum.getText().then(async function (text) {
            console.log(text)
        })
    })
});

Then('User clicks on plus symbol to increase the count', async function () {
    await authoringminselectoption.btnplusMinSelect.isDisplayed().then(async function () {
        await authoringminselectoption.btnplusMinSelect.click().then(async function () {
            browser.sleep(4000);
        })
    })
    await authoringminselectoption.countMinNumber.getAttribute('ng-reflect-model').then(async function (attvalue) {
        expect(attvalue).to.be.eql("2");
        console.log("count increased");
    })
});

Then('User clicks on minus symbol to decrease the count', async function () {
    await authoringminselectoption.btnminusMinSelect.isDisplayed().then(async function () {
        await authoringminselectoption.btnminusMinSelect.click().then(async function () {
            browser.sleep(4000);
        })
    })
    await authoringminselectoption.countMinNumber.getAttribute('ng-reflect-model').then(async function (attvalue) {
        expect(attvalue).to.be.eql("1");
        console.log("count decreased");
    })
});

Then('User clicks on Save to save Min Select value', async function () {
    await authoringminselectoption.btnSelectionSave.isDisplayed().then(async function () {
        await authoringminselectoption.btnSelectionSave.click();
    })
    await activityAuthorPage.exitEditor.click().then(async function () {
        await helper.continueWithoutSavingChanges();
        await browser.sleep(2000);
    })
    
});