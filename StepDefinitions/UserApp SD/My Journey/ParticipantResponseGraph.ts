import {Given,When,Then} from "cucumber";
import { ParticipantResponseGraphPageLocate } from "../../../PageObjects/UserApp POM/My Journey/ParticipantResponseGraph";
import { $, browser, By } from "protractor";
import chai = require('chai');
var expect = chai.expect;

let participantresponsegraph = new ParticipantResponseGraphPageLocate();
import {createWriteStream} from 'fs'
var fs = require('fs')

When('Participant clicks on any Module containing Response Graph', async function () {
    await participantresponsegraph.btnStartModule2.isDisplayed().then(async function(){
        await participantresponsegraph.btnStartModule2.click();
    })
  });

  
  When('Participant clicks on any Activity containing Response Graph', async function () {
    await participantresponsegraph.btnStartActivityResponseGraph.isDisplayed().then(async function(){
        await participantresponsegraph.btnStartActivityResponseGraph.click();
    })
  });

  Then('Participant should be landed to Response Graph page', async function () {
    await participantresponsegraph.ttlActivityPageResponseGraph.isDisplayed().then(async function(){
        await participantresponsegraph.ttlActivityPageResponseGraph.getText().then(async function(responsegraphtext){
            console.log(responsegraphtext);
        })
    })
  });

  When('Participant should be able to view Single Select Question correctly',  async function () {
    browser.ignoreSynchronization = true;
    //await browser.waitForAngularEnabled(false);
    await browser.sleep(4000).then(async function(){
        await participantresponsegraph.singleSelectQuestion.isDisplayed().then(async function(){
            await participantresponsegraph.singleSelectQuestion.getText().then(async function(singleselectquestiontext){
                console.log(singleselectquestiontext);
            })
        })
    })
  });

  When('Participant should be able to select appropriate option correclty', async function () {
    browser.ignoreSynchronization=true;
     await participantresponsegraph.singleSelectOption.click().then(async function(){
         browser.sleep(3000);
     })
  });

  Then('Participant should be able to view Response Graph correctly', async function () {
     await browser.takeScreenshot().then(async function(fullpage){
        var stream = fs.createWriteStream('./Screenshots/fullpage.png');
        stream.write(new Buffer(fullpage,'base64'));
        stream.end();
     })

     browser.protractorImageComparison.saveFullPageScreen('Response_Graph_Image.png');
     //expect(browser.protractorImageComparison.checkElement(landing.registerButton, 'imageB')).to.equal('Response_Graph_Image.png');
     expect(browser.protractorImageComparison.checkFullPageScreen('fullpage.png')).to.equal('Response_Graph_Image.png')
});