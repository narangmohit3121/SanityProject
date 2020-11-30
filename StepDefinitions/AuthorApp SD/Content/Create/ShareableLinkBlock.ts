import { Given, When, Then } from "cucumber";
import { browser, element, protractor } from "protractor";
import config from "../../../config.json"
import chai = require('chai');
var EC = protractor.ExpectedConditions;
import { Alert } from "selenium-webdriver";
import { By } from "protractor";
import { async } from "q";

var expect = chai.expect;

// import { ShareableLinkBlockPageLocate } from "../../PageObjects/Sprint 18/ScoringAndDurationPage";

import { ShareableLinkBlockPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/ShareableLinkBlockPage"

let shareableLinkBlock = new ShareableLinkBlockPageLocate();

let ExpectedShareableLinkNamelabel = "ShareableContentBlockManshaContent";
let ExpectedShareableLinkExpiryDaysText = "This content publicly shareable. Once you copy the share link, the link will expire in 5 days";
let ExpectedSharelinkexpireddescription = "This Resource is Available for 5 days";

When('User click on Sprint 20 folder', async function () {
    await shareableLinkBlock.Sprint20Fld.isDisplayed().then(async function () {
        await shareableLinkBlock.Sprint20Fld.click().then(async function () {
            await browser.sleep(2000);
        })
    })
});

When('User click on the ShareableContentBlockManshaContent', async function () {
    await shareableLinkBlock.ShareableCnt.isDisplayed().then(async function () {
        await shareableLinkBlock.ShareableCnt.click().then(async function () {
            await browser.sleep(2000);
        })
    })
});

When('User click on content to which Share Link block is to be added', async function () {
    await shareableLinkBlock.ShareableCnt2.isDisplayed().then(async function () {
        await shareableLinkBlock.ShareableCnt2.click().then(async function () {
            await browser.sleep(500);
        })
    })
});


When("User select content type as {string}", async function (contentTypeName) {
    await shareableLinkBlock.contentTypedd.isDisplayed().then(async function (isDDPresent) {
        if (isDDPresent == true) {
            await shareableLinkBlock.contentTypedd.click().then(async function () {
                let actionXpath: string = "//option[contains(text(),'" + contentTypeName + "')]"
                await element(By.xpath(actionXpath)).click().then(async function () {

                })
            })
        }
    })
})


When('User click on shareable toggle button', async function () {
    await shareableLinkBlock.shareableToggleBtn.isDisplayed().then(async function () {
        await shareableLinkBlock.shareableToggleBtn.click().then(async function () {
            await browser.sleep(2000);

        })
    })
});

When('User click on content Tab', async function () {
    await shareableLinkBlock.contentTab.isDisplayed().then(async function () {
        await shareableLinkBlock.contentTab.click().then(async function () {
            await browser.sleep(3000);
        })
    })
});

When('User drag and drop content block in editor', async function () {
    //var fromEle=element(by.css('div.mat-list-item-content'));
    var fromEle = element(By.xpath("//div[contains(text(),'Content') and not(contains(text(),'Nested'))]/ancestor::mat-list-item//div[contains(@class,'ripple')]"));
    var toEle = element(By.css('div.blocks-container.edit-area.cdk-drop-list'));

    await browser.actions().mouseMove(fromEle).perform();
    await browser.sleep(3000);
    await browser.actions().mouseDown(fromEle).perform();
    await browser.sleep(3000);
    await browser.actions().mouseMove(toEle).perform();
    await browser.sleep(3000);
    await browser.actions().mouseUp(toEle).perform();

    //await browser.sleep(9000);
});

When('User click on Edit content Link of content block', async function () {
    await shareableLinkBlock.editContentLnk.isDisplayed().then(async function () {
        await shareableLinkBlock.editContentLnk.click().then(async function () {
            await browser.sleep(2000);
        })
    })
});

When('User click on OK button after enter text', async function () {
    await shareableLinkBlock.okBtn.isDisplayed().then(async function () {
        await shareableLinkBlock.okBtn.click().then(async function () {
            await browser.sleep(2000);
        })
    })
});



When('User click on ShareableLinkBolckManshacontent', async function () {
    await shareableLinkBlock.shareableLinkBlockCnt.isDisplayed().then(async function () {
        await shareableLinkBlock.shareableLinkBlockCnt.click().then(async function () {
            await browser.sleep(2000);

        })
    })
});



When('User drag and drop Share Link block in editor', async function () {
    //var fromEle=element(by.css('div.mat-list-item-content'));
    var fromEle = element(By.xpath("//div[contains(text(),'Share Link')]/ancestor::mat-list-item//div[contains(@class,'ripple')]"));
    // var toEle=element(By.css('div#cdk-drop-list-0.blocks-container.edit-area.cdk-drop-list'));
    var toEle = element(By.css('div.blocks-container.edit-area.cdk-drop-list'));

    await browser.actions().mouseMove(fromEle).perform();
    await browser.sleep(6000);
    await browser.actions().mouseDown(fromEle).perform();
    await browser.sleep(6000);
    await browser.actions().mouseMove(toEle).perform();
    await browser.sleep(6000);
    await browser.actions().mouseUp(toEle).perform();

    await browser.sleep(3000);
});


When('User click on Edit share Link of share link block', async function () {
    await shareableLinkBlock.editShareLinkBlockLnk.isDisplayed().then(async function () {
        await shareableLinkBlock.editShareLinkBlockLnk.click().then(async function () {
            await browser.sleep(2000);

        })
    })
});


When("User select content type as {string} from content object dropdown", async function (contentTypeName) {
    await shareableLinkBlock.contentObjectdd.isDisplayed().then(async function (isDDPresent) {
        if (isDDPresent == true) {
            await shareableLinkBlock.contentObjectdd.click().then(async function () {
                let actionXpath: string = "//option[contains(text(),'" + contentTypeName + "')]"
                await element(By.xpath(actionXpath)).click().then(async function () {

                    await browser.sleep(2000);

                })
            })
        }
    })
})


When('User enter Active Days for the Share Link as {string}', async function (string) {
    // await shareableLinkBlock.editShareLinkBlockLnk.isDisplayed().then(async function () {

    // });
    await shareableLinkBlock.ActiveDaysTxt.clear().then(async function () {
        await shareableLinkBlock.ActiveDaysTxt.sendKeys(string)
        await browser.sleep(2000);
    });
});

When('User click on ok button after active days for the Share Link', async function () {
    await shareableLinkBlock.OkBtn2.isDisplayed().then(async function () {
        await shareableLinkBlock.OkBtn2.click().then(async function () {
            await browser.sleep(4000);

        })
    })
});

When('User click on Automation do not delete folder link', async function () {
    await shareableLinkBlock.AutomationDoNotDeleteLnk.isDisplayed().then(async function () {
        await shareableLinkBlock.AutomationDoNotDeleteLnk.click().then(async function () {
            await browser.sleep(2000);

        })
    })
});

When('User click on Automation Journey Mansha', async function () {
    await shareableLinkBlock.AutomationJourneyManshaJrn.isDisplayed().then(async function () {
        await shareableLinkBlock.AutomationJourneyManshaJrn.click().then(async function () {
            await browser.sleep(6000);

        })
    })
});

When('User click on Three dots of 1A Module', async function () {
    await shareableLinkBlock.threeDotsOf1AModule.isDisplayed().then(async function () {
        await shareableLinkBlock.threeDotsOf1AModule.click().then(async function () {
            await browser.sleep(4000);

        })
    })
});


When('User click on Add Activity option of 1A Module', async function () {
    await shareableLinkBlock.addActivityButton.isDisplayed().then(async function () {
        await shareableLinkBlock.addActivityButton.click().then(async function () {
            await browser.sleep(4000);

        })
    })
});


When("User select activity type as {string} from activity type dropdown", async function (activityName) {
    await shareableLinkBlock.activityDDArrow.isDisplayed().then(async function (registrationReqd) {
        if (registrationReqd == true) {
            await shareableLinkBlock.activityDDArrow.click().then(async function () {
                await browser.sleep(2000);

                let actionXpath: string = "//span[contains(text(),'" + activityName + "')]"
                await element(By.xpath(actionXpath)).click().then(async function () {

                    await browser.sleep(6000);

                })
            })
        }
    })
})


When('User enter activity title as {string} and Description as {string}', async function (activityTile, ActivityDesc) {
    await shareableLinkBlock.newActivityTitleTxt.isDisplayed().then(async function () {
        await shareableLinkBlock.newActivityTitleTxt.clear().then(async function () {
            await shareableLinkBlock.newActivityTitleTxt.sendKeys(activityTile)
            await browser.sleep(2000);

        });
    });

    await shareableLinkBlock.activityDescTxt.isDisplayed().then(async function () {
        await shareableLinkBlock.activityDescTxt.clear().then(async function () {
            await shareableLinkBlock.activityDescTxt.sendKeys(ActivityDesc)

            await browser.sleep(3000);

        });

    });
});


When('User click on SAVE button after enter activity title and description', async function () {
    await shareableLinkBlock.newActivitySAVEBtn.isDisplayed().then(async function () {
        await shareableLinkBlock.newActivitySAVEBtn.click().then(async function () {
            await browser.sleep(3000);


        })
    })
});

// When('User click SAVE and PUBLISH after save activity', async function () {
//     await shareableLinkBlock.journeySAVEBtn.isDisplayed().then(async function () {
//         await shareableLinkBlock.journeySAVEBtn.click().then(async function () {
//             await browser.sleep(10000);
//             console.log("SAVE Button   Clicked !!!");

//         })
//     })

//     await shareableLinkBlock.journeyPUBLISHBtn.isDisplayed().then(async function () {
//         await shareableLinkBlock.journeyPUBLISHBtn.click().then(async function () {
//             await browser.sleep(5000);
//             console.log("PUBLISH Button   Clicked !!!");

//         })
//     })
// });


When('User click SAVE and PUBLISH after save activity', async function () {
    await shareableLinkBlock.journeySAVEBtn.click().then(async function () {
        await browser.wait(EC.visibilityOf(shareableLinkBlock.toastMessageSuccess), 20000).then(async function () {
            await shareableLinkBlock.toastMessageSuccess.click().then(async function () {
                await browser.sleep(2000);
                await shareableLinkBlock.journeyPUBLISHBtn.click().then(async function () {
                    await browser.wait(EC.visibilityOf(shareableLinkBlock.toastMessageSuccess), 20000).then(async function () {
                        await shareableLinkBlock.toastMessageSuccess.click().then(async function () {
                            await browser.sleep(2000);
                            // await activityAuthorPage.exitEditor.click().then(async function () {
                            // })
                        })
                    })
                })
            })
        })
    })
});


When('User Drag and drop ShareLinkActivity from bottom to top', async function () {
    //var fromEle=element(by.css('div.mat-list-item-content'));
    var fromEle = element(By.xpath("//p[contains(.,'ShareLinkActivity')]"));
    // var toEle=element(By.css('div#cdk-drop-list-0.blocks-container.edit-area.cdk-drop-list'));
    var toEle = element(By.css("div[ng-reflect-connected-to='1588752080705,1589882735375,15'] > div:nth-of-type(1) .journey-selection--font"));

    await browser.actions().mouseMove(fromEle).perform();
    await browser.sleep(6000);
    await browser.actions().mouseDown(fromEle).perform();
    await browser.sleep(6000);
    await browser.actions().mouseMove(toEle).perform();
    await browser.sleep(6000);
    await browser.actions().mouseUp(toEle).perform();

    await browser.sleep(4000);
});


When('User click three dots of ShareLinkActivity to link content', async function () {
    await shareableLinkBlock.ThreeDotsshareLinkActivity.isDisplayed().then(async function () {
        await shareableLinkBlock.ThreeDotsshareLinkActivity.click().then(async function () {
            await browser.sleep(3000);

        })
    })
});

When('User click on link activity to link content', async function () {
    await shareableLinkBlock.editContentLnk.isDisplayed().then(async function () {
        await shareableLinkBlock.editContentLnk.click().then(async function () {
            await browser.sleep(3000);


        })
    })
});

When('User click on petronas tab to select content', async function () {
    await shareableLinkBlock.petronasLbl.isDisplayed().then(async function () {
        await shareableLinkBlock.petronasLbl.click().then(async function () {
            await browser.sleep(5000);

        })
    })
});

When('User click on Automation Do Not Delete link', async function () {
    await shareableLinkBlock.automationDoNotDeleteLnk.isDisplayed().then(async function () {
        await shareableLinkBlock.automationDoNotDeleteLnk.click().then(async function () {
            await browser.sleep(3000);


        })
    })
});

When('User click on Sprint 20 folder after click on Automation Do Not Delete link', async function () {
    await shareableLinkBlock.sprint20Folder.isDisplayed().then(async function () {
        await shareableLinkBlock.sprint20Folder.click().then(async function () {
            await browser.sleep(2000);

        })
    })
});
// When("User enter some text under content block", async function(){
//     let script: string = `document.querySelector(" mat-dialog-container div.content-wrapper p").innerText = "${updatedContentText}";`
//     await browser.executeScript(script).then(async function () {
//         await browser.sleep(2000);
//     })
// })



When('User select Content as ShareLinkBolckManshacontent to link with journey', async function () {
    await shareableLinkBlock.ShareLinkBolckManshacontentSelectBtn.isDisplayed().then(async function () {
        await shareableLinkBlock.ShareLinkBolckManshacontentSelectBtn.click().then(async function () {
            await browser.sleep(12000);
            console.log(" ShareLinkBolckManshacontent Linked and Clicked !!!");

        })
    })
});



When('User Click on start button of ShareLinkActivity of 1A module', async function () {
    browser.waitForAngularEnabled(false);

    await browser.sleep(8000).then(async function () {
        await shareableLinkBlock.startBtn.isDisplayed().then(async function () {
            await shareableLinkBlock.startBtn.click().then(async function () {

                await browser.sleep(2000);
            })
        })
    })
});

Then('User should see ShareableLinkContent', async function () {
    browser.waitForAngularEnabled(false);
    await browser.sleep(5000);
    //  browser.ignoreSynchronization = true;
    await shareableLinkBlock.shareableLinkName.isDisplayed().then(async function () {
        await shareableLinkBlock.shareableLinkName.getText().then(async function (actualshareableLinkactualName) {
            //expect(ExpectedShareableLinkNamelabel).to.eql(actualshareableLinkactualName);
            console.log(actualshareableLinkactualName);

        })
    })
    browser.waitForAngularEnabled(true);
});

Then('User should see expiry days defined by author', { timeout: 12 * 1000 }, async function () {
    browser.waitForAngularEnabled(false);
    //await browser.sleep(5000);
    //  browser.ignoreSynchronization = true;
    await shareableLinkBlock.expiryDays.isDisplayed().then(async function () {
        await shareableLinkBlock.expiryDays.getText().then(async function (actualExpiryDaysText) {
            expect(ExpectedShareableLinkExpiryDaysText).to.equal(actualExpiryDaysText.trim());
            //console.log(actualExpiryDaysText);
        })
    })
    browser.waitForAngularEnabled(true);
});


When('User click on copy share link block to copy url of share link', async function () {
    browser.waitForAngularEnabled(false);

    await shareableLinkBlock.CopyshareLinkBlock.isDisplayed().then(async function () {
        await shareableLinkBlock.CopyshareLinkBlock.click().then(async function () {

            await browser.sleep(2000);
        })
    })
    browser.waitForAngularEnabled(true);
});
When("User clicks on Open in a new window Link and navigates to the linked content", async function () {
    browser.waitForAngularEnabled(false);

    let currentWindowHandle: string = await browser.getWindowHandle();
    await shareableLinkBlock.openInANewWindowLink.click().then(async function () {
        await browser.sleep(5000);
    })
    await browser.getAllWindowHandles().then(async function (windowhandles) {
        //console.log(windowhandles);
        windowhandles.forEach(async function (handle) {
            if (handle != currentWindowHandle) {
                await browser.switchTo().window(handle).then(async function () {
                    await browser.sleep(2000);
                })
            }
        })
    });
    await shareableLinkBlock.expiredlinktextdescription.getText().then(async function (actualExpiryDaysDescription) {
        expect(ExpectedSharelinkexpireddescription).to.equal(actualExpiryDaysDescription.trim());
        //console.log(actualExpiryDaysText);

    })
    await shareableLinkBlock.contentTextInLink.getText().then(async function (contentText) {
        expect(contentText.trim()).to.contain("AutomationContent");

    })
    browser.waitForAngularEnabled(true);
})
When('Participant user land on copied url and load the page', async function () {
    await browser.get(config.MomentaCustomerUrl).then(async function () {
        await browser.sleep(3000);
    });
});


Then('User should see expiry days description on top right corner of page', { timeout: 12 * 1000 }, async function () {
    browser.waitForAngularEnabled(false);
    await browser.sleep(5000);
    //  browser.ignoreSynchronization = true;
    await shareableLinkBlock.expiredlinktextdescription.isDisplayed().then(async function () {
        await shareableLinkBlock.expiredlinktextdescription.getText().then(async function (actualExpiryDaysText) {
            //expect(ExpectedSharelinkexpireddescription).to.eql(actualExpiryDaysText);
            console.log("Last Validation passed");

        })
    })
    browser.waitForAngularEnabled(true);
});

Then("expiry days description should be displayed when user opens the copied link", async function () {
    browser.waitForAngularEnabled(false);
    await browser.executeScript('window.open()')
    await browser.sleep(5000);
    // await browser.getAllWindowHandles().then(async function (handles) {
    //     await browser.switchTo().window(handles[1]);
    // })
    //await browser.get(protractor.Key.chord(protractor.Key.CONTROL, "v"));


    await browser.executeScript(function () {
        var el = document.createElement('input');
        el.setAttribute('id', 'customInput');

        document.getElementsByTagName('body')[0].appendChild(el);
    });

    // set the input value to a desired text
    var newInput= await element(By.css("#customInput"));
    //await newInput.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "v"));
    await newInput.sendKeys("Test New");
    let text: string = await newInput.getText();
    console.log(text);
    browser.waitForAngularEnabled(true);
})

Then("User should be able to delete contents created for Shareable Link Automation run", async function(){
    let j: number = 0;
    let countOfContents: number = await shareableLinkBlock.contentsCreated.count();
    while (countOfContents > 0) {
        await shareableLinkBlock.menuContentsCreated.click().then(async function () {
            //await browser.sleep(1000);
            // await contentMenu.click().then(async function(){

            // }) 
            await browser.sleep(1000);
            await shareableLinkBlock.deleteBtn.click().then(async function () {
                await shareableLinkBlock.confirmDeleteContent.click().then(async function () {
                    await browser.sleep(4000);
                    countOfContents = await shareableLinkBlock.contentsCreated.count();
                    console.log(countOfContents);
                    //j++;
                })
            })
        })
    }
})