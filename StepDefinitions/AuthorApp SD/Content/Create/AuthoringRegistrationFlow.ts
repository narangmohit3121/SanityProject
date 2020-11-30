import { When, Then, Before } from 'cucumber';
import chai = require('chai');
var expect = chai.expect;
import { AuthoringRegistrationFlowPageLocate } from '../../../../PageObjects/AuthorApp POM/Content/Create/AuthoringRegistrationFlow';
import { browser,element,By } from 'protractor';
import { HelperFunctions } from '../../../HelperClass';
import { CommonLocate } from '../../../../PageObjects/Common';
import { apiHelperFunctions } from '../../../apiHelperClass';
import Testdata from "../../../../testData.json";
import { CreateAllContentsLocate } from '../../../../PageObjects/SanityProjectPages/CreateAllContentPage';

let authoringregistrationflow = new AuthoringRegistrationFlowPageLocate();
let helper = new HelperFunctions();

When('User clicks on Registration Flow content block under CONTENT section', async function () {
    await authoringregistrationflow.cntRegistrationFlow.isDisplayed().then(async function () {
        await authoringregistrationflow.cntRegistrationFlow.click();
        await helper.unlockContent();
    })
});

When('User checks if Registration option is present under Content type', async function () {
    await authoringregistrationflow.ttlContentType.isDisplayed().then(async function () {
        await authoringregistrationflow.ttlContentType.getText().then(async function (contenttext) {
            expect(contenttext).to.be.eql('Content Type');
        })

    })
    await authoringregistrationflow.drpContentType.isDisplayed().then(async function () {
        await authoringregistrationflow.drpContentType.click().then(async function () {
            await browser.sleep(2000);
        })
    })
    await authoringregistrationflow.drpContentTypeRegistrationOption.click().then(async function () {
        await browser.sleep(2000);
    })
});

Then('User clicks on Save and PUBLISH on Registration Page', async function () {
    await helper.saveAndPublishAndCancelOnRegistration();
});

When('User click on Journey with Registration Flow', async function () {
    await authoringregistrationflow.jrnConditionalActivity.isDisplayed().then(async function () {
        await authoringregistrationflow.jrnConditionalActivity.click();
    })
});

When('User checks for Registration left hand option and clicks on it', async function () {
    await authoringregistrationflow.lnkRegistration.isDisplayed().then(async function () {
        await authoringregistrationflow.lnkRegistration.click();
    })
    await authoringregistrationflow.ttlLinkRegistration.isDisplayed().then(async function () {
        await authoringregistrationflow.ttlLinkRegistration.getText().then(async function (linktext) {
            expect(linktext).to.be.eql("Journey: Registration Flow");
        })
    })
});

When('User clicks on link registration icon', async function () {
    await authoringregistrationflow.icnRegistration.isDisplayed().then(async function () {
        await authoringregistrationflow.icnRegistration.click().then(async function () {
            await browser.sleep(2000).then(async function () {
                console.log("clicked on registration icon");
            })
        })
    })
});
let commonObjects = new CommonLocate();
let createAllContentsPage = new CreateAllContentsLocate();
When('User selects appropriate content to link', async function () {
    //browser.ignoreSynchronization = true;
    await browser.sleep(2000);
    await createAllContentsPage.linkActivityPetronasTab.click();
    await browser.sleep(2000);
    await commonObjects.searchActivityToBeLinkedInput.click()
    await commonObjects.searchActivityToBeLinkedInput.clear();
    await commonObjects.searchActivityToBeLinkedInput.sendKeys("Registration_Flow");

    await commonObjects.searchIcon.click();
    await element(By.xpath(`//span[contains(text(),'Registration_Flow')]/ancestor::div[contains(@class,'journey-list')]//button[contains(@name,'select')]`)).click();
    await browser.sleep(2000);
    //await helper.saveAndPublishAndCancelOnRegistration();
    // await authoringregistrationflow.drpArrowRegistration.isDisplayed().then(async function () {
    //     await authoringregistrationflow.drpArrowRegistration.click().then(async function () {
    //         await browser.sleep(2000);
    //     })
    // })
});

let apiHelper = new apiHelperFunctions();
Before({tags:"@AuthoringRegistrationFlow3"}, async function(){
    await apiHelper.resetAllJourneys(Testdata.AdminLogin.Username,Testdata.AdminLogin.Password,"bts",Testdata.apiBuildVersion,
    "5d82323fd9b8ca499403e5bd","AutomationRegistration1@petronas.com");
})