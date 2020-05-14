import { Then, When } from "cucumber";
import { browser, protractor, ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "protractor";
import { DiscussionThreadPage } from "../../PageObjects/Sprint 7/DiscussionThreadPage";
import { AdminLandingPageLocate } from "../../PageObjects/Sprint 2/AdminLandingPage";
import { CommonLocate } from "../../PageObjects/Common";
import { LoginPageLocate } from "../../PageObjects/Sprint 1/LoginPage";
import { ParticipantActivityPageLocate } from "../../PageObjects/Sprint 4/ParticipantActivityPage";
import config from "../config.json"
import chai = require("chai");
var expect = chai.expect;
import { async } from "q";
var EC = protractor.ExpectedConditions;

let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let commonObjects = new CommonLocate();
let discussionThreadPage = new DiscussionThreadPage();
let participantactivitypage = new ParticipantActivityPageLocate();

let today: Date = new Date();
let dd: string = String(today.getDate()).padStart(2, '0');
let mm: string = String(today.getMonth() + 1).padStart(2, '0');
let year: number = today.getFullYear();
let hours: number = today.getHours();
let minutes: number = today.getMinutes();

let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + ':' + minutes;

let latestDiscThreadId = "Id " + currentDateTime;
let latestCommentBtnName = "CommentBtn " + currentDateTime;
let latestCommentFieldLabel = "CommentField " + currentDateTime;
let latestReplyBtnLabel = "Reply " + currentDateTime;
let latestLoadMoreTxt = "LoadMore " + currentDateTime;
let latestCommentsLabel = "CommentLabel " + currentDateTime;
let latestCommentByUserMohitN = "AutomationComment_MohitN " + currentDateTime;
let latestReplyByUserMohitN = "AutomationReply_MohitN " + currentDateTime;
let latestReplyByCohortUser = "AutomationReply_CohortU" + currentDateTime;



When("User selects the Discussion Thread Content", async function () {
    await discussionThreadPage.discussionThreadContent.click().then(function () {
        browser.sleep(5000);
    })
})

When("User clicks on Edit Discussion Thread Button", async function () {
    await discussionThreadPage.btnEditDiscussionThread.click();

});

When("User enters data in Discussion thread fields", async function () {
    await discussionThreadPage.txtDiscussThreadBlockId.click().then(async function () {
        await discussionThreadPage.txtDiscussThreadBlockId.clear().then(async function () {
            await discussionThreadPage.txtDiscussThreadBlockId.sendKeys(latestDiscThreadId).then(function () {
                browser.sleep(1000);
            });
        })
        // await browser.executeScript("arguments[0].click()", discussionThreadPage.txtCommentButtonTxt).then(async function(){
        //     await browser.executeScript("arguments[0].innerText='" + latestCommentBtnName + "'", discussionThreadPage.txtCommentButtonTxt).then(async function () {
        //         await browser.executeScript("arguments[0].click()", discussionThreadPage.txtCommentButtonTxt);
        //     })
        // })      

        await discussionThreadPage.txtCommentButtonTxt.click().then(async function () {
            await discussionThreadPage.txtCommentButtonTxt.clear().then(async function () {
                await discussionThreadPage.txtCommentButtonTxt.sendKeys(latestCommentBtnName);
            })
        });

        await discussionThreadPage.txtCommentFieldLabel.click().then(async function () {
            await discussionThreadPage.txtCommentFieldLabel.clear().then(async function () {
                await discussionThreadPage.txtCommentFieldLabel.sendKeys(latestCommentFieldLabel);
            })
        });

        await discussionThreadPage.txtReplyLabel.click().then(async function () {
            await discussionThreadPage.txtReplyLabel.clear().then(async function () {
                await discussionThreadPage.txtReplyLabel.sendKeys(latestReplyBtnLabel);
            })
        });

        await discussionThreadPage.txtLoadMore.click().then(async function () {
            await discussionThreadPage.txtLoadMore.clear().then(async function () {
                await  discussionThreadPage.txtLoadMore.sendKeys(latestLoadMoreTxt);
            })
        });

        await discussionThreadPage.txtCommentsLabel.click().then(async function () {
            await discussionThreadPage.txtCommentsLabel.clear().then(async function () {
                await  discussionThreadPage.txtCommentsLabel.sendKeys(latestCommentsLabel);
            })
        });
    });

    // await discussionThreadPage.txtCommentButtonTxt.click().then(async function () {
    //     await discussionThreadPage.txtCommentButtonTxt.clear().then(async function () {
    //         discussionThreadPage.txtCommentButtonTxt.sendKeys(latestCommentBtnName);
    //     })
    // });

})

When("User clicks on SAVE button of Discussion Thread Block", async function () {

    await discussionThreadPage.btnDiscussionThreadSave.click();

});

Then("the changes made to Discussion Thread fields should get saved and changes should be reflected at Participant side", async function () {
    console.log("Done");

})
//---------------------------------------------------------------------------------------

Then("the changes made to Discussion thread should get reflected", async function () {
    await discussionThreadPage.discussionThreadContent.click().then(async function () {
        await discussionThreadPage.btnEditDiscussionThread.click().then(async function () {
            await discussionThreadPage.txtDiscussThreadBlockId.getAttribute("ng-reflect-model").then(async function (blockId) {
                expect(latestDiscThreadId).to.contain(blockId);
            })

            await discussionThreadPage.txtCommentFieldLabel.getAttribute("ng-reflect-model").then(async function (fieldLabel) {
                expect(latestCommentFieldLabel).to.contain(fieldLabel);
            })

            await discussionThreadPage.txtReplyLabel.getAttribute("ng-reflect-model").then(async function (replyLabel) {
                expect(latestReplyBtnLabel).to.contain(replyLabel);
            })

            await discussionThreadPage.txtLoadMore.getAttribute("ng-reflect-model").then(async function (loadMoreText) {
                expect(latestLoadMoreTxt).to.contain(loadMoreText);
            });

            await discussionThreadPage.txtCommentsLabel.getAttribute("ng-reflect-model").then(async function (commentsLabel) {
                expect(latestCommentsLabel).to.contain(commentsLabel);
            });
        })
    })
    await discussionThreadPage.btnCancelEditDiscussion.click().then(async function () {
        await discussionThreadPage.btnExitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });

})

//---------------------------------------------------------------------------------------------
When("user clicks on Cancel button of Discussion Thread Content", async function () {
    await discussionThreadPage.btnCancelEditDiscussion.click();
})

Then("the changes should not get saved", async function () {
    await discussionThreadPage.btnEditDiscussionThread.click();

    await discussionThreadPage.txtDiscussThreadBlockId.getAttribute("ng-reflect-model").then(async function (blockId) {
        expect(blockId).to.not.equal(latestDiscThreadId);
    })

    await discussionThreadPage.txtCommentFieldLabel.getAttribute("ng-reflect-model").then(async function (fieldLabel) {
        expect(fieldLabel).to.not.equal(latestCommentFieldLabel);
    })

    await discussionThreadPage.txtReplyLabel.getAttribute("ng-reflect-model").then(async function (replyLabel) {
        expect(replyLabel).to.not.equal(latestReplyBtnLabel);
    })

    await discussionThreadPage.txtLoadMore.getAttribute("ng-reflect-model").then(async function (loadMoreText) {
        expect(loadMoreText).to.not.equal(latestLoadMoreTxt);
    });

    await discussionThreadPage.txtCommentsLabel.getAttribute("ng-reflect-model").then(async function (commentsLabel) {
        expect(commentsLabel).to.not.equal(latestLoadMoreTxt);
    });

    await discussionThreadPage.btnCancelEditDiscussion.click().then(async function () {
        await discussionThreadPage.btnExitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
})

//----------------------------------------------------------------------------------------------------------
When("User clicks on Discussion Thread activity", async function () {
    browser.waitForAngularEnabled(false);
    await discussionThreadPage.myJourneyPage.click();
    await browser.sleep(3000);
    await discussionThreadPage.btnRevisitActivityDiscussion.click();
    await browser.sleep(5000);
    browser.waitForAngularEnabled(true);
});

When("User enters comments and replies", async function () {
    browser.waitForAngularEnabled(false);
    await discussionThreadPage.txtEnterCommentsTopLevel.click().then(async function () {
        await discussionThreadPage.txtEnterCommentsTopLevel.sendKeys(latestCommentByUserMohitN).then(async function () {
            await browser.sleep(2000).then(async function () {
                await discussionThreadPage.btnSubmitTopLevelComment.click().then(async function () {
                    await discussionThreadPage.btnReply.click().then(async function () {
                        await discussionThreadPage.btnPcptReplyComment.click().then(async function () {
                            await discussionThreadPage.txtPcptReplyComment.sendKeys(latestReplyByUserMohitN).then(async function () {
                                //await browser.sleep(1000);
                                EC.visibilityOf(discussionThreadPage.btnSubmitReply);
                                await discussionThreadPage.btnSubmitReply.click();

                                // await browser.sleep(1000).then(async function(){
                                //     await discussionThreadPage.btnSubmitReply.click();
                                // })

                            })
                        })
                    })
                })
            })
        })
    })
    browser.waitForAngularEnabled(true);
})

Then("the changes made by the author to the Discussion Thread Fields should be reflected on the Participant UI", async function () {
    browser.waitForAngularEnabled(false);
    await discussionThreadPage.txtEnterCommentsTopLevel.getAttribute("placeholder").then(function (participantCommentFieldLabel) {
        expect(participantCommentFieldLabel).to.contain(latestCommentFieldLabel);
    });

    // await discussionThreadPage.commentBtnNameContainer.getText().then(function(commentButtonName){
    //     expect(commentButtonName).to.equal(latestCommentBtnName);
    // });

    await discussionThreadPage.replyBtnLabelContainer.getText().then(function (replyButtonName) {
        expect(replyButtonName).to.equal(latestReplyBtnLabel);
    });
    await discussionThreadPage.commentsLabelContainer.getText().then(function (commentsLabelText) {
        expect(commentsLabelText).to.equal(latestCommentsLabel);
    });
    await discussionThreadPage.btnContinueToNextActivity.click().then(function () {
        browser.sleep(5000);
    })
    browser.waitForAngularEnabled(true);
})


//---------------------------------------------------------------------------------------------------------------------
Then("the user should be able to see the comments provided by another user of the same cohort", async function () {
    browser.waitForAngularEnabled(false);
    await discussionThreadPage.commentsLabelContainer.getText().then(function (commentsLabelText) {
        //console.log(commentsLabelText);
        expect(commentsLabelText).to.equal(latestCommentsLabel);
    });
    browser.waitForAngularEnabled(true);
})

When("user replies on the comment made by another user of the same cohort", async function () {
    browser.waitForAngularEnabled(false);
    await discussionThreadPage.btnReply2.click().then(async function () {
        await discussionThreadPage.txtPcptReplyTopComment.click().then(async function () {
            await discussionThreadPage.txtPcptReplyTopComment.sendKeys(latestReplyByCohortUser).then(async function () {
                await discussionThreadPage.btnSubmitReply.click().then(async function () {
                    await browser.sleep(1000).then(async function () {
                        await discussionThreadPage.btnContinueToNextActivity.click().then(function () {
                            browser.sleep(5000);
                        })
                    })
                })

            })
        })
    })
    browser.waitForAngularEnabled(true);
})

When('Participant user logs in with {string} and {string}', { timeout: 12 * 10000 }, async function (string, string2) {
    browser.ignoreSynchronization = false;
    await browser.get(config.MomentaParticipant).then(async function () {
        await browser.refresh().then(async function () {
            await participantactivitypage.p_emailID.sendKeys(string);
            await participantactivitypage.p_password.sendKeys(string2).then(async function () {
                await participantactivitypage.p_loginButton.click().then(async function () {
                    await browser.sleep(3000);
                })
            })
        })
    });
    //await browser.refresh();
});

Then('the reply provided by the cohortUser should be visible', async function () {
    browser.waitForAngularEnabled(false);
    await discussionThreadPage.viewRepliesOnLatestComment.click().then(async function () {
        await discussionThreadPage.latestCommentContainter.getText().then(function (CohortUserCommentText) {
            expect(CohortUserCommentText).to.equal(latestReplyByCohortUser);
        })
    })

    browser.waitForAngularEnabled(true);
})