import {When,Then, Before} from "cucumber";
import { browser, element, ElementFinder, protractor } from "protractor";
import { By } from "protractor";
import chai = require("chai");
import { DiscussionsPageLocate } from "../../../PageObjects/AuthorApp POM/Journey/DiscussionsPage";
import { HelperFunctions } from "../../HelperClass";
import { ParticipantDisscussionThreadBlockLocate } from "../../../PageObjects/UserApp POM/My Journey/ParticipantDiscussionThreadBlock";
import { apiHelperFunctions } from "../../apiHelperClass";
import Testdata from "../../../testData.json";
let expect = chai.expect;
var EC = protractor.ExpectedConditions;
let discussion = new DiscussionsPageLocate();
let helperclass = new HelperFunctions();
let exptxtTitle:string = "Discussion_Title_01";
let expCntTitle:string = "Social Forum_001";

When('User clicks on {string} Tab from left Panel of Content', async function (discussion) {
    let DisTab: ElementFinder = element(By.xpath("//div[contains(text(),'" + discussion + "')]"));
    await DisTab.click();
});

When('User clicks on Add Discussion button', async function () {
    await browser.wait(EC.visibilityOf(discussion.btnAddDiscussions)).then(async function(){
        await discussion.btnAddDiscussions.click();
    })
});

When('User fills Discussion Journey Script id as {string} Discussion Title as {string} Discussion Statement as {string} Scope as {string} and clicks on Create', async function (scriptid,title,stm,scope) {
    await browser.wait(EC.visibilityOf(discussion.txtDiscussionJrnSptId)).then(async function(){
        await discussion.txtDiscussionJrnSptId.isDisplayed().then(async function(){
            await discussion.txtDiscussionJrnSptId.sendKeys(scriptid);
        })
    })
    await browser.wait(EC.visibilityOf(discussion.txtDiscusstionTtl)).then(async function(){
        await discussion.txtDiscusstionTtl.sendKeys(title)
    })
    await browser.wait(EC.visibilityOf(discussion.txtDiscussionStm)).then(async function(){
        await discussion.txtDiscussionStm.sendKeys(stm)
    })
    await browser.wait(EC.visibilityOf(discussion.drpScope)).then(async function(){
        await discussion.drpScope.click().then(async function(){
            let opt: ElementFinder = element(By.xpath("//option[contains(text(),'" + scope + "')]"));
                await opt.click();
        })
    }) 
    await browser.wait(EC.visibilityOf(discussion.btnCreateAddDiscussion)).then(async function(){
        await discussion.btnCreateAddDiscussion.click();
    })
});

Then('User should be able to view created Discussion as {string}', async function (discussionTtl) {
    let DisTitle: ElementFinder = element(By.xpath("//div[contains(text(),'" + discussionTtl + "')]"));
    await DisTitle.getText().then(async function(acttxtTitle){
        expect(acttxtTitle).to.be.eql(exptxtTitle);
    })
});

Then('User should be able to view created Content as {string}', async function (cntTtl) {
    let CntTitle: ElementFinder = element(By.xpath("//div[contains(text(),'" + cntTtl + "')]"));
    await CntTitle.getText().then(async function(actCntTitle){
        expect(actCntTitle).to.be.eql(expCntTitle);
    })
});

Then('User clicks on Exit & Unlock', async function () {
    await discussion.btnExitUnLock.isDisplayed().then(async function(){
        await discussion.btnExitUnLock.click().then(async function(){
            await browser.sleep(2000);
        })
    })
});

Then('User adds Activity to Module and Links it to Content', async function () {
    await helperclass.addActivityToModule('SocialForum Module 1', 'SocialForum Activity 1', 'SocialForum Cnt 1');
});

Then('User Saves and Publishes Journey Flow', async function () {
    await helperclass.saveAndPublishOnJourneyFlow();
});

Then('User Saves and Publishes Discussions Tab', async function () {
    await helperclass.saveAndPublishOnDiscussions();
});

When('User deletes activity under Module', async function () {
    await helperclass.deleteActivityFromModule('SocialForum Module 1','SocialForum Activity 1');
});

When('User clicks on {string} Tab from left Panel of Content at Participant side', async function (discussion) {
    browser.ignoreSynchronization = true;
    let DisTab: ElementFinder = element(By.xpath("//span[contains(text(),'" + discussion + "')]"));
    await DisTab.click();
});

When('User validates Total Posts count as {string} under {string}', async function (count, ttl) {
    let ttlCount: ElementFinder = element(By.xpath("(//li[@name='Disscusiion Title: " + ttl + "']//following::div[@class='thread-total-posts font-size3 text-center'])[1]"));
    await ttlCount.getText().then(async function(actCount){
        expect(actCount).to.be.eql(count);
    })
});

When('User validates Discussion Title', async function () {
    browser.ignoreSynchronization = true;
    await browser.wait(EC.visibilityOf(discussion.ttlDiscussion)).then(async function(){
        await discussion.ttlDiscussion.getText().then(async function(actDistxtTitle){
            expect(actDistxtTitle).to.be.eql(exptxtTitle);
        })
    })
});

When('User validates Content Title', async function () {
    browser.ignoreSynchronization = true;
    await browser.wait(EC.visibilityOf(discussion.ttlContent)).then(async function(){
        await discussion.ttlContent.getText().then(async function(actCnttxtTitle){
            expect(actCnttxtTitle).to.be.eql(expCntTitle);
        })
    })
});

When('User clicks on {string} Title and Comments under it as {string}', async function (disTtl, cmt) {
    browser.ignoreSynchronization = true;
    let DisTitle: ElementFinder = element(By.xpath("//div[contains(text(),'" + disTtl + "')]"));
        await DisTitle.click().then(async function(){
            await discussion.txtCommentBox.isDisplayed().then(async function(){
                await discussion.txtCommentBox.clear().then(async function(){
                    await discussion.txtCommentBox.sendKeys(cmt).then(async function(){
                        await discussion.btnComment.click();
                    })
                })
            })
        })
    });

    When('User toggle Off for {string}', async function (ttl) {
        let tgl : ElementFinder=element(By.xpath("(//div[contains(text(),'" + ttl + "')]//following::div[@class='mat-slide-toggle-thumb'])[1]"));
            await tgl.click().then(async function(){
                await browser.sleep(2000);
            })
    });

    When('User should not able to view Discussion and Content Titles', async function () {
        browser.ignoreSynchronization = true;
        await discussion.ttlDiscussion.isPresent().then(async function(disPresent){
            expect(disPresent).to.be.false;
        })
        await discussion.ttlContent.isPresent().then(async function(cntPresent){
            expect(cntPresent).to.be.false;
        })
    });

    When('User deletes {string}', async function (string) {
        let disTtl: ElementFinder=element(By.xpath("//div[contains(text(),'" + string + "')]//following::mat-icon[contains(text(),'more_vert')]"));
        await disTtl.click().then(async function(){
            await discussion.btnDelete.isDisplayed().then(async function(){
                await discussion.btnDelete.click().then(async function(){
                    await discussion.btnDeleteDiscussion.isDisplayed().then(async function(){
                        await discussion.btnDeleteDiscussion.click().then(async function(){
                            await browser.sleep(2000).then(async function(){
                                console.log(string + "deleted");
                            })
                        })
                    })
                })
            })
        })
    });

    let apiHelper = new apiHelperFunctions();

    Before({tags:"@SocialForum1"}, async function(){
        await apiHelper.resetUser(Testdata.AdminLogin.Username,Testdata.AdminLogin.Password,"bts",Testdata.apiBuildVersion,
        "5d82323fd9b8ca499403e5bd","socialforumuser1@petronas.com","bfc782aea28e95ed7141");
        await console.log("Reset Journey Data of socialforumuser1@petronas.com");
    })

    Before({tags:"@SocialForum3"}, async function(){
    await apiHelper.resetUser(Testdata.AdminLogin.Username,Testdata.AdminLogin.Password,"bts",Testdata.apiBuildVersion,
    "5d82323fd9b8ca499403e5bd","socialforumuser2@petronas.com","bfc782aea28e95ed7141");
    await console.log("Reset Journey Data of socialforumuser2@petronas.com");
    })