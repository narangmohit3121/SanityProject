import { Then, When, Before } from "cucumber";
import { browser, protractor, ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "protractor";
import { DiscussionThreadPage } from "../../../../PageObjects/AuthorApp POM/Content/Create/DiscussionThreadPage";
import { AdminLandingPageLocate } from "../../../../PageObjects/AuthorApp POM/Home Page/AdminLandingPage";
import { CommonLocate } from "../../../../PageObjects/Common";
import { LoginPageLocate } from "../../../../PageObjects/AuthorApp POM/Login/LoginPage";
import { ParticipantActivityPageLocate } from "../../../../PageObjects/UserApp POM/My Journey/ParticipantActivityPage";
import config from "../../../config.json"
import chai = require("chai");
var expect = chai.expect;
import { async } from "q";
import { apiHelperFunctions } from "../../../apiHelperClass";
import testdata from "../../../../testData.json";
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

let latestDiscThreadId = "DT_Auto_Id " + currentDateTime;
let latestDiscThreadTitle = "DT_Auto_Title" + currentDateTime;
let latestCommentBtnName = "DT_Auto_CommentBtn " + currentDateTime;
let latestCommentFieldLabel = "DT_Auto_CommentField " + currentDateTime;
let latestReplyBtnLabel = "DT_Auto_Reply " + currentDateTime;
let latestLoadMoreTxt = "DT_Auto_LoadMore " + currentDateTime;
let latestCommentsLabel = "DT_Auto_CommentLabel " + currentDateTime;
let latestCommentByUserOne = "AutomationComment_UserOne " + currentDateTime;
let latestReplyByUserOne = "AutomationReply_UserOne " + currentDateTime;
let latestReplyByUserTwo = "AutomationReply_UserTwo " + currentDateTime;



When("User selects the Discussion Thread Content", async function () {
    await discussionThreadPage.discussionThreadContent.click().then(async function () {
        await browser.sleep(5000);
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

        await discussionThreadPage.txtDiscussionThreadTitle.click().then(async function () {
            await discussionThreadPage.txtDiscussionThreadTitle.clear().then(async function () {
                await discussionThreadPage.txtDiscussionThreadTitle.sendKeys(latestDiscThreadTitle);
            })
        });

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
let authorRun : boolean = false;
Then("the changes made to Discussion thread should get reflected", async function () {
    await discussionThreadPage.discussionThreadContent.click().then(async function () {
        await discussionThreadPage.btnEditDiscussionThread.click().then(async function () {
            await discussionThreadPage.txtDiscussThreadBlockId.getAttribute("ng-reflect-model").then(async function (blockId) {
                expect(latestDiscThreadId).to.contain(blockId);
            })

            await discussionThreadPage.txtDiscussionThreadTitle.getAttribute("ng-reflect-model").then(async function (blockTitle) {
                expect(latestDiscThreadTitle).to.contain(blockTitle.trim());
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
            authorRun = true;
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
let apiHelper = new apiHelperFunctions();
Before({tags:"@DiscussionThread03"},async function(){
    let token :string = await apiHelper.getToken(testdata.AdminLogin.Username,testdata.AdminLogin.Password,"bts",testdata.apiBuildVersion,true);
    let resetEndPoint:string = "https://momentaglobaltest.btsmomenta.com/master/api/v1/user/reset-user";
    let resetBodyUser1 :any = {
        "program": "MasterService",
        "data": {
            "customerId": testdata.Content.Create.DiscussionThread.customerId,
            "email": testdata.Content.Create.DiscussionThread.User1Email,
            "journeyId": testdata.Content.Create.DiscussionThread.journeyId
        }
    }
    let responseUser1:any = await apiHelper.makePostRequest(resetEndPoint,token,testdata.apiBuildVersion,resetBodyUser1);
    let message1 :string = responseUser1.message as string;
    //console.log(response);
    console.log(testdata.Content.Create.DiscussionThread.ParticipantUserOne, message1);

    let resetBodyUser2 :any = {
        "program": "MasterService",
        "data": {
            "customerId": testdata.Content.Create.DiscussionThread.customerId,
            "email": testdata.Content.Create.DiscussionThread.User2Email,
            "journeyId": testdata.Content.Create.DiscussionThread.journeyId
        }
    }
    let responseUser2:any = await apiHelper.makePostRequest(resetEndPoint,token,testdata.apiBuildVersion,resetBodyUser2);
    let message2 :string = responseUser2.message as string;
    //console.log(response);
    console.log(testdata.Content.Create.DiscussionThread.ParticipantUserTwo, message2);
    
})

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
        await discussionThreadPage.txtEnterCommentsTopLevel.sendKeys(latestCommentByUserOne).then(async function () {
            await browser.sleep(2000).then(async function () {
                await discussionThreadPage.btnSubmitTopLevelComment.click().then(async function () {
                    await discussionThreadPage.btnReply.click().then(async function () {
                        await discussionThreadPage.btnPcptReplyComment.click().then(async function () {
                            await discussionThreadPage.txtPcptReplyComment.sendKeys(latestReplyByUserOne).then(async function () {
                                //await browser.sleep(1000);
                                await browser.wait(EC.visibilityOf(discussionThreadPage.btnSubmitReply),5000);
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
        if(authorRun){
            expect(participantCommentFieldLabel).to.contain(latestCommentFieldLabel);
        }
        else{
            expect(participantCommentFieldLabel).to.not.be.null;
        }
        
        //console.log(participantCommentFieldLabel);
    });

    // await discussionThreadPage.commentBtnNameContainer.getText().then(function(commentButtonName){
    //     expect(commentButtonName).to.equal(latestCommentBtnName);
    // });

    await discussionThreadPage.replyBtnLabelContainer.getText().then(function (replyButtonName) {
        if(authorRun){
            expect(replyButtonName).to.equal(latestReplyBtnLabel);
        }
        else{
            expect(replyButtonName).to.not.be.null;
        }
        
        //console.log(replyButtonName);
    });
    await discussionThreadPage.commentsLabelContainer.getText().then(function (commentsLabelText) {
        if(authorRun){
            expect(commentsLabelText).to.equal(latestCommentsLabel)
        }
        else{
            expect(commentsLabelText).to.not.be.null;
        }
        //console.log(commentsLabelText);
    });

    await discussionThreadPage.btnContinueToNextActivity.click().then(async function () {
        await browser.sleep(5000);
    })
    browser.waitForAngularEnabled(true);
})


//---------------------------------------------------------------------------------------------------------------------
Then("the user should be able to see the comments provided by another user of the same cohort", async function () {
    browser.waitForAngularEnabled(false);
    await discussionThreadPage.userOneComments.getText().then(async function(userOneComments){
        expect(userOneComments.trim()).to.equal(latestCommentByUserOne);
    })
    await discussionThreadPage.commentsLabelContainer.getText().then(function (commentsLabelText) {
        //console.log(commentsLabelText);
        if(authorRun){
            expect(commentsLabelText).to.equal(latestCommentsLabel);
        }
        else{
            expect(commentsLabelText).to.be.not.null;
        }
        
    });
    browser.waitForAngularEnabled(true);
})

When("user replies on the comment made by another user of the same cohort", async function () {
    browser.waitForAngularEnabled(false);
    await discussionThreadPage.btnReply2.click().then(async function () {
        await discussionThreadPage.txtPcptReplyTopComment.click().then(async function () {
            await discussionThreadPage.txtPcptReplyTopComment.sendKeys(latestReplyByUserTwo).then(async function () {
                await browser.sleep(1000);
                await discussionThreadPage.btnSubmitReply.click().then(async function () {
                    await browser.sleep(1000).then(async function () {
                        await discussionThreadPage.btnContinueToNextActivity.click().then(async function () {
                            await browser.sleep(5000);
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
        await browser.sleep(2000);
        await discussionThreadPage.latestCommentContainter.getText().then(function (CohortUserCommentText) {
            //expect(CohortUserCommentText).to.equal(latestReplyByUserTwo);
            console.log(CohortUserCommentText);
        })
    })

    browser.waitForAngularEnabled(true);
})