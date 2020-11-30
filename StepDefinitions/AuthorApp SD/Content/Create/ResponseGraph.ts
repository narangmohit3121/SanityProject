import { Given, When, Then } from "cucumber";
import { async } from "q";
import chai = require('chai');
var expect = chai.expect;
import { ResponseGraphPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/ResponseGraph";
import { ParticipantResponseBlockPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/ParticipantResponseBlock-Authoring";
import { browser } from "protractor";
import { protractor } from "protractor/built/ptor";
import { HelperFunctions } from "../../../HelperClass";
let expwinText = 'Response Graph';
let actQuestionID: Array<string> = [];

let expQuestionID: Array<string> = ['RGAuto_001', 'RGAuto_002'];
var EC = protractor.ExpectedConditions;
let responsegraphpage = new ResponseGraphPageLocate();
let participantresponseblock = new ParticipantResponseBlockPageLocate();
let helper = new HelperFunctions();

When('User search for particular client having Response Graph and clicks on it', async function () {
  await participantresponseblock.colPetronas.isDisplayed().then(async function () {
    await participantresponseblock.colPetronas.click();
  })
});

When('User navigates to any Content block having Response Graph', async function () {
  await responsegraphpage.cntResponseGraphBlock.isDisplayed().then(async function () {
    await responsegraphpage.cntResponseGraphBlock.click();
  })
});

When('User clicks on Edit Response Graph header', async function () {
  await responsegraphpage.lnkEditResponseGraphHeader.isDisplayed().then(async function () {
    await responsegraphpage.lnkEditResponseGraphHeader.click();
  })
});

Then('User should be able to view Response Graph heading on top of dialog box', async function () {
  await responsegraphpage.ttlResponseGraphWindow.isDisplayed().then(async function () {
    await responsegraphpage.ttlResponseGraphWindow.getText().then(async function (actwinText) {
      expect(actwinText).to.equal(expwinText);
    })
  })
});

Then('User should click on Cancel button to close Response Graph window', async function () {
  // await responsegraphpage.btnResponseGraphCancel.isDisplayed().then(async function () {
  //   await responsegraphpage.btnResponseGraphCancel.click();
  // })
  await helper.cancelCMSChangesAndExit();
});

Then('User should be able to select option from Question ID', async function () {
  await responsegraphpage.drpQuestionID.isDisplayed().then(async function () {
    await responsegraphpage.drpQuestionID.click().then(async function () {
      await browser.sleep(3000);
    });
  })

  await responsegraphpage.drpQuestionIDOptOne.isDisplayed().then(async function () {
    await responsegraphpage.drpQuestionIDOptOne.click().then(async function () {
      await browser.sleep(3000).then(async function () {
        //     await responsegraphpage.drpQuestionIDOptOne.isSelected().then(async function(optionSelected){
        //     expect(optionSelected).to.be.true;
        // })
      });
    })
  });
  await helper.cancelCMSChangesAndExit();
});

When('User clicks on Question ID option', async function () {
  await responsegraphpage.drpQuestionID.isDisplayed().then(async function () {
    await responsegraphpage.drpQuestionID.click().then(async function () {
      await browser.sleep(1000);
    });
  })
});

Then('User should view list of all published activities of Single Select and Multi Select on Response Graph', async function () {
  // await responsegraphpage.drpQuestionID.isDisplayed().then(async function () {
  //   await responsegraphpage.drpQuestionID.click().then(async function () {
  //     await browser.sleep(3000);
  //   });
  // })

  await responsegraphpage.lstQuestionIDoptions.each(async function (element, index) {
    await element.getText().then(async function (questionIdopts) {
      actQuestionID.push(questionIdopts);
    })
  })
  expect(actQuestionID).to.include.members(expQuestionID);
  await helper.cancelCMSChangesAndExit();
})


    // browser.wait(EC.elementToBeClickable(responsegraphpage.drpQuestionIDarrow), 5000).then(async function(){
    //     await responsegraphpage.lstQuestionIDoptions.each(function (element){
    //         element.getText().then(function(questionIdopts){
    //             actQuestionID.push(questionIdopts);
    //             expect(actQuestionID).to.eql(expQuestionID)
    //         })
    //     })
    // });
