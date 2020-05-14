import {When, Then} from "cucumber";
import {browser} from "protractor";
import { DeleteJourneyContentFldPageLocate } from "../PageObjects/DeleteJourneyContentFolder";

let deletejrncntfld = new DeleteJourneyContentFldPageLocate();

Then('User should check if plus icon is present besides Folders and click on it', async function () {
    await deletejrncntfld.btnFolderPlus.isDisplayed().then(async function () {
        await deletejrncntfld.btnFolderPlus.click().then(async function () {
            await deletejrncntfld.mnuCreateNewFld.isDisplayed().then(async function () {
                await deletejrncntfld.mnuCreateNewFld.click().then(async function () {
                    await browser.driver.switchTo().activeElement().then(function () {
                        browser.sleep(2000);
                    })
                })
            })
        })
    })
});

Then('User should check if plus icon is present besides Content and click on it', async function () {
    await deletejrncntfld.btnContentPlus.isDisplayed().then(async function () {
        await deletejrncntfld.btnContentPlus.click().then(async function () {
            await deletejrncntfld.mnuNewAct.isDisplayed().then(async function () {
                await deletejrncntfld.mnuNewAct.click().then(async function () {
                    await browser.driver.switchTo().activeElement().then(function () {
                        browser.sleep(2000);
                    })
                })
            })
        })
    })
});