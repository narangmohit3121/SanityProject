import { Then, When } from "cucumber";
import { browser, By, element, protractor } from "protractor";
import { FileDownloadAuthoringPage } from "../../PageObjects/Sprint 7/AuthoringFileDownloadPage";
import chai = require('chai');
let expect = chai.expect;
let path = require("path");
var EC = protractor.ExpectedConditions;
let authoringFileDownloadPage = new FileDownloadAuthoringPage();


When("User selects the File Download Content", async function () {
    await authoringFileDownloadPage.cntAuthorFileDownload.click().then(function () {
        browser.sleep(2000);
    })
})


When("User click on 'Edit Download' link", async function () {
    await authoringFileDownloadPage.lnkEditFileDownload.click().then(function () {
        browser.sleep(5000);
    })
})

When("User clicks on 'x' icon", async function () {
    await authoringFileDownloadPage.icoCrossEditFileDownload.isDisplayed().then(async function () {
        await authoringFileDownloadPage.icoCrossEditFileDownload.click().then(async function () {
            await browser.sleep(3000);
        })
    })
})

When("User selects 'External Link' radio button", async function () {
    await authoringFileDownloadPage.rdoBoxesAuthorFileDownload.get(0).isPresent().then(async function (result1) {
        await authoringFileDownloadPage.rdoBoxesAuthorFileDownload.get(0).click().then(async function () {

            await browser.sleep(3000);
        })
    })
})

When("When User enters Document link under 'Document Link' text box", async function () {
    await authoringFileDownloadPage.rdoBoxesAuthorFileDownload.get(0).isPresent().then(async function (result1) {
        await authoringFileDownloadPage.rdoBoxesAuthorFileDownload.get(0).click().then(async function () {

            await browser.sleep(3000);
        })
    })
})


Then('Download file window should be displayed', async function () {
    await authoringFileDownloadPage.ttlEditFileDownload.isDisplayed().then(function (result) {
        expect(result).to.be.true;
    })
});

Then('Download file window should get closed', async function () {
    await authoringFileDownloadPage.lnkEditFileDownload.isDisplayed().then(function (result) {
        expect(result).to.be.true;
    })
});

Then('User should see Download as title and Document as sub title', async function () {
    await authoringFileDownloadPage.ttlEditFileDownload.isDisplayed().then(async function (result1) {

        await authoringFileDownloadPage.subttlEditFileDownload.isDisplayed().then(async function (result2) {

            expect(result1).to.be.true;
            expect(result2).to.be.true;


        })
    });
})

Then("User can toggle between 'External Link' and 'Momenta Content Doc' options", async function () {
    await authoringFileDownloadPage.rdoBoxesAuthorFileDownload.get(0).isPresent().then(async function (result1) {
        await authoringFileDownloadPage.rdoBoxesAuthorFileDownload.get(0).click().then(async function () {

            await browser.sleep(5000);
            await authoringFileDownloadPage.rdoBoxesAuthorFileDownload.get(1).isPresent().then(async function (result2) {
                await authoringFileDownloadPage.rdoBoxesAuthorFileDownload.get(1).click().then(async function () {

                    await browser.sleep(5000);
                    expect(result1).to.be.true;
                    expect(result2).to.be.true;


                })
            });
        })
    })
})


Then("User can enter some texts in 'Document Link','Prehead - Optional' and 'Heading' options", async function () {
    await authoringFileDownloadPage.ttlEditFileDownload.isDisplayed().then(async function (result1) {

        await authoringFileDownloadPage.subttlEditFileDownload.isDisplayed().then(async function (result2) {

            expect(result1).to.be.true;
            expect(result2).to.be.true;


        })
    });
})