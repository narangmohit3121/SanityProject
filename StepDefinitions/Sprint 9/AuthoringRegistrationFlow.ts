import {When,Then} from 'cucumber';
import chai = require('chai');
var expect = chai.expect;
import { AuthoringRegistrationFlowPageLocate } from '../../PageObjects/Sprint 9/AuthoringRegistrationFlow';
import { browser } from 'protractor';

let authoringregistrationflow = new AuthoringRegistrationFlowPageLocate();

When('User clicks on Registration Flow content block under CONTENT section', async function () {
    await authoringregistrationflow.cntRegistrationFlow.isDisplayed().then(async function(){
        await authoringregistrationflow.cntRegistrationFlow.click();
    })
  });

  When('User checks if Registration option is present under Content type', async function () {
    await authoringregistrationflow.ttlContentType.isDisplayed().then(async function(){
        await authoringregistrationflow.ttlContentType.getText().then(async function(contenttext){
            expect(contenttext).to.be.eql('Content Type');
        })
        
    })
    await authoringregistrationflow.drpContentType.isDisplayed().then(async function(){
        await authoringregistrationflow.drpContentType.click().then(async function(){
            browser.sleep(4000);
        })
    })
    await authoringregistrationflow.drpContentTypeRegistrationOption.click().then(async function(){
        browser.sleep(4000);
    })
  });

  Then('User clicks on Save and PUBLISH', async function () {
    await authoringregistrationflow.btnSaveDraft.isDisplayed().then(async function(){
        await authoringregistrationflow.btnSaveDraft.click().then(async function(){
            browser.sleep(4000);
        })
    })
    await authoringregistrationflow.btnPublish.isDisplayed().then(async function(){
        await authoringregistrationflow.btnPublish.click().then(async function(){
            browser.sleep(4000);
        })
    })
  });

  When('User click on Journey with Registration Flow', async function () {
    await authoringregistrationflow.jrnConditionalActivity.isDisplayed().then(async function(){
        await authoringregistrationflow.jrnConditionalActivity.click();
    })
  });

  When('User checks for Registration left hand option and clicks on it', async function () {
    await authoringregistrationflow.lnkRegistration.isDisplayed().then(async function(){
        await authoringregistrationflow.lnkRegistration.click();
    })
    await authoringregistrationflow.ttlLinkRegistration.isDisplayed().then(async function(){
        await authoringregistrationflow.ttlLinkRegistration.getText().then(async function(linktext){
            expect(linktext).to.be.eql("Journey: Link Registration");
        })
    })
  });

  When('User clicks on link registration icon', async function () {
    await authoringregistrationflow.icnRegistration.isDisplayed().then(async function(){
        await authoringregistrationflow.lnkRegistration.click().then(async function(){
            await browser.sleep(4000).then(async function(){
                console.log("clicked on registration icon");
            })
        })
    })
  });

  When('User selects appropriate content to link', async function () {
    browser.ignoreSynchronization=true;
    await authoringregistrationflow.drpArrowRegistration.isDisplayed().then(async function(){
        await authoringregistrationflow.drpArrowRegistration.click().then(async function(){
            await browser.sleep(4000);
        })
    })
    // await authoringregistrationflow.drpRegistrationOption.click().then(async function(){
    //     await browser.sleep(4000);
    // })
  });