import {When, Then} from "cucumber";
import { ParticipantDisscussionThreadBlockLocate } from "../../PageObjects/Sprint 6/ParticipantDiscussionThreadBlock";
import { async } from "q";
import chai = require('chai');
import { browser, element } from "protractor";
import { protractor } from "protractor/built/ptor";
var expect = chai.expect;
var EC = protractor.ExpectedConditions;

let participantdiscussionthread = new ParticipantDisscussionThreadBlockLocate();
let participantabbreviaiton:any="JJ";
let participantfullname:any="Joe Jones";


When('Participant clicks on any Module having Discussion Thread Block', async function () {
    await participantdiscussionthread.p_moduleStartButton.isDisplayed().then(async function(){
        await participantdiscussionthread.p_moduleStartButton.click();
    })
  });


When('Participant clicks on any Activity of Module having Discussion Thread Block', async function () {
    await participantdiscussionthread.p_activityStartButton.isDisplayed().then(async function(){
        await participantdiscussionthread.p_activityStartButton.click();
    })
  });

  Then('Participant should be able to view View another response tab', async function () {
      browser.ignoreSynchronization = true;
    await participantdiscussionthread.p_viewAnotherResponseButton.isPresent().then(async function(anotherrespbtn){
        console.log(anotherrespbtn);
        expect(anotherrespbtn).to.be.false;
    })
  });

  Then('COMMENT button should be disabled', async function () {
    browser.ignoreSynchronization = true;
    await participantdiscussionthread.p_commentButton.isPresent().then(async function(cmtbtnenabled){
        console.log(cmtbtnenabled);
        expect(cmtbtnenabled).to.be.false;
    })
    //expect(participantdiscussionthread.p_commentButton.isEnabled()).to.be.false;
  });

  When('Participant should enter text in the Write a comment text box', async function () {
    await participantdiscussionthread.p_writeACommentTextBox.isDisplayed().then(async function(){
        await participantdiscussionthread.p_writeACommentTextBox.clear().then(async function(){
            await participantdiscussionthread.p_writeACommentTextBox.sendKeys("Testing Test").then(async function(){
                browser.sleep(2000);
            })
        })
    })
  });

  Then('Write a comment text box should accept text input', async function () {
    
  });

  Then('Participant full name should be displayed and abbreviated form of full name should be visible', async function () {
    await participantdiscussionthread.p_fullName.isPresent().then(async function(){
      await participantdiscussionthread.p_fullName.getText().then(async function(fullname){
        expect(fullname).to.contains(participantfullname);
    })
  })
  
  await participantdiscussionthread.p_nameAbbreviation.isPresent().then(async function(){
    await participantdiscussionthread.p_nameAbbreviation.getText().then(async function(abbreviation){
      expect(abbreviation).to.equal(participantabbreviaiton);
  })
})
});

When('Participant scrolls down', async function() {
  browser.ignoreSynchronization = true;
  await browser.driver.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function(){
     console.log("Scroll down");
    await browser.sleep(3000);
    
     //browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
  })
})

  When('Participant clicks on Reply button', async function () {
    browser.ignoreSynchronization = true;
    await participantdiscussionthread.p_replyButton.isPresent().then(async function(rpyPresent){
      console.log(rpyPresent);
        await participantdiscussionthread.p_replyButton.click();
    })
  });

  Then('Comment text box should open with comment button disabled', async function () {
    await participantdiscussionthread.p_writeACommentTextBoxJJ.isDisplayed().then(async function(boxdisplayed){
      console.log(boxdisplayed);
        expect(boxdisplayed).to.be.true;
    })
    await participantdiscussionthread.p_commentButtonJJ.isEnabled().then(async function(btnenabled){
      console.log(btnenabled);
        expect(btnenabled).to.be.false;
    })
  });

  Then('Participant should be able to view Load More Comments tab', async function(){
    await participantdiscussionthread.p_loadMoreComments.isDisplayed().then(async function(loadcomments){
      expect(loadcomments).to.be.true;
    })

    await participantdiscussionthread.p_loadMoreComments.isEnabled().then(async function(loadcommentsfunctional){
      expect(loadcommentsfunctional).to.be.true;
    })
  })

  Then('Participant should be able to view Continue button', async function(){
    await participantdiscussionthread.p_continueButton.isDisplayed().then(async function(continuebtndisplay){
      expect(continuebtndisplay).to.be.true;
    })
  })