import { Then, When } from "cucumber";
import { browser, protractor } from "protractor";
import { AuthoringSingleSelectLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/AuthoringSingleSelect";
import chai = require('chai');
import { HelperFunctions } from "../../../HelperClass";
import { ActivityAuthoringPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";
var expect = chai.expect;
let listexists = true;
let EC = protractor.ExpectedConditions;
let authSingleSelectblock = new AuthoringSingleSelectLocate();
let helper = new HelperFunctions();
let activityAuthorPage = new ActivityAuthoringPageLocate();


When('User clicks on SingleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor', async function () {
    await authSingleSelectblock.cntSingleSelect.isDisplayed().then(async function () {
        await authSingleSelectblock.cntSingleSelect.click().then(async function () {
            await authSingleSelectblock.txtCmsContentTitle.getAttribute("ng-reflect-model").then(function (titleText) {
               // console.log(titleText)
                expect(titleText).to.be.eql("Automation Single Select")
            })
        })
    })
})

Then('User should able to view SELECTION content block under Add Content List', async function () {
    await authSingleSelectblock.contentTab.click();
    await authSingleSelectblock.blkSelection.isPresent().then(async function () {
        await authSingleSelectblock.blkSelection.getText().then(function (blkText) {
            browser.sleep(2000)
            console.log(blkText)
        })
    })
    await activityAuthorPage.exitEditor.click().then(async function () {
        await helper.continueWithoutSavingChanges();
        await browser.sleep(2000);
    })
})


When('User clicks on Edit Selection link under CMS editor', async function () {
    await authSingleSelectblock.lnkEditSelection.isDisplayed().then(async function () {
        await authSingleSelectblock.lnkEditSelection.click()
    })
})

Then('Selection Model window should popup with SELECTION as title', async function () {
    await authSingleSelectblock.ttlSelectionTitle.isDisplayed().then(async function () {
        await authSingleSelectblock.ttlSelectionTitle.getText().then(function (popTitle) {
            expect(popTitle).to.be.eql("Selection")
        })
    })
    await helper.cancelCMSChangesAndExit();
})

Then('Single Select and Multiple Select tabs should be displayed', async function () {
    await authSingleSelectblock.ttlSingleSelectTab.isDisplayed().then(async function () {
        await authSingleSelectblock.ttlSingleSelectTab.getText().then(function (singleSelectTitle) {
            console.log(singleSelectTitle)
            expect(singleSelectTitle).to.be.eql("Single Select")
        })
    })
    await authSingleSelectblock.ttlMultipleSelectTab.isDisplayed().then(async function () {
        await authSingleSelectblock.ttlMultipleSelectTab.getText().then(function (multiSelectTitle) {
            console.log(multiSelectTitle)
            expect(multiSelectTitle).to.be.eql("Multiple Select")
        })
    })
    await helper.cancelCMSChangesAndExit();
})

When('User views content-type radio buttons', async function () {
    await authSingleSelectblock.rdoShortButton.isDisplayed().then(async function () {
        await authSingleSelectblock.rdoLongButton.isDisplayed().then(async function () {
            await authSingleSelectblock.rdoShortButton.getText().then(function (rdoButtonShort) {
                expect(rdoButtonShort).to.be.eql("Short")
            })
            await authSingleSelectblock.rdoLongButton.getText().then(function (rdoButtonLong) {
                expect(rdoButtonLong).to.be.eql("Long")
            })
        })
    })

})

Then('User should able to toggle between Short and Long content-type radio buttons', async function () {
    await authSingleSelectblock.rdoLongButton.isDisplayed().then(async function () {
        await authSingleSelectblock.rdoLongButton.click().then(async function () {
            await authSingleSelectblock.rdoShortButton.click()
        })
    })
    await helper.cancelCMSChangesAndExit();
})


When('User enters {string} text in Journey Script Id and clicks on save', async function (string) {
    await authSingleSelectblock.txtJourneyScriptID.isDisplayed().then(async function () {
        await authSingleSelectblock.txtJourneyScriptID.clear().then(async function () {
            await authSingleSelectblock.txtJourneyScriptID.sendKeys(string).then(async function () {
                await authSingleSelectblock.btnSelectionSave.isEnabled().then(async function () {
                    await authSingleSelectblock.btnSelectionSave.click()
                })
            })
        })
    })
})

/*
Then('Single Selection block should get saved successfully', async function () {
    await authSingleSelectblock.btnSaveDraft.isEnabled().then(async function () {
        await authSingleSelectblock.btnSaveDraft.click().then(async function () {
            await authSingleSelectblock.lnkEditSelection.isDisplayed().then(async function () {
                await authSingleSelectblock.lnkEditSelection.click().then(function() {

                    if (expect(authSingleSelectblock.txtJourneyScriptID).not.to.be.null) {
                    
                    } else if (expect(authSingleSelectblock.txtTypeSelectionTitle).to.be.eql("Single Select Question")) {
                    
                    } else if (expect(authSingleSelectblock.txtItemTile).to.be.eql("SS Option 1")) {
                    
                    } else if (expect(authSingleSelectblock.txtItemDescription).to.be.eql("SS Option 1 Long Description")){

                    }
                })
            })
        })
    })
})
*/

Then('Journey Script ID should get saved successfully', async function () {
    await authSingleSelectblock.btnSaveDraft.isEnabled().then(async function () {
        await authSingleSelectblock.btnSaveDraft.click().then(async function () {
            await authSingleSelectblock.lnkEditSelection.isDisplayed().then(async function () {
                await authSingleSelectblock.lnkEditSelection.click().then(async function () {
                    await browser.sleep(2000)
                    await authSingleSelectblock.txtJourneyScriptID.getAttribute("ng-reflect-model").then(function (JourneyScriptID) {
                        expect(JourneyScriptID).not.to.be.null
                    })
                })
            })
        })
    })
    await helper.cancelCMSChangesAndExit();
})

When('User enters {string} text in Type Selection Title and clicks on save', async function (string) {
    await authSingleSelectblock.txtTypeSelectionTitle.isDisplayed().then(async function () {
        await authSingleSelectblock.txtTypeSelectionTitle.clear().then(async function () {
            await authSingleSelectblock.txtTypeSelectionTitle.sendKeys(string).then(async function () {
                await authSingleSelectblock.btnSelectionSave.isEnabled().then(async function () {
                    await authSingleSelectblock.btnSelectionSave.click()
                })
            })
        })
    })
})

Then('Type Selection Title should get saved successfully', async function () {
    await authSingleSelectblock.btnSaveDraft.isEnabled().then(async function () {
        await authSingleSelectblock.btnSaveDraft.click().then(async function () {
            await authSingleSelectblock.lnkEditSelection.isDisplayed().then(async function () {
                await authSingleSelectblock.lnkEditSelection.click().then(async function () {
                    browser.sleep(2000)
                    await authSingleSelectblock.txtTypeSelectionTitle.getAttribute("ng-reflect-model").then(function (TypeSelectionTitle) {
                        expect(TypeSelectionTitle).to.be.eql("Single Select Question")
                    })
                })
            })
        })
    })
})

When('User enters {string} text in Item 1 Title and clicks on save', async function (string) {
    await authSingleSelectblock.txtItemTitle1.isDisplayed().then(async function () {
        await authSingleSelectblock.txtItemTitle1.clear().then(async function () {
            await authSingleSelectblock.txtItemTitle1.sendKeys(string).then(async function () {
                await authSingleSelectblock.btnSelectionSave.isEnabled().then(async function () {
                    await authSingleSelectblock.btnSelectionSave.click()
                })
            })
        })
    })
})


Then('Item 1 Title should get saved successfully', async function () {
    await authSingleSelectblock.btnSaveDraft.isEnabled().then(async function () {
        await authSingleSelectblock.btnSaveDraft.click().then(async function () {
            await authSingleSelectblock.lnkEditSelection.isDisplayed().then(async function () {
                await authSingleSelectblock.lnkEditSelection.click().then(async function () {
                    browser.sleep(2000)
                    await authSingleSelectblock.txtItemTitle1.getAttribute("ng-reflect-model").then(function (ItemTitle) {
                        expect(ItemTitle).to.be.eql("SS Option 1")
                    })
                })
            })
        })
    })
})

When('User toggles radio button from Short to Long', async function () {
    await authSingleSelectblock.rdoLongButton.isDisplayed().then(async function () {
        await authSingleSelectblock.rdoLongButton.click();
    })
})

When('User enters {string} text in Item 1 Description and clicks on save', async function (string) {
    await authSingleSelectblock.txtItemDescription.isDisplayed().then(async function () {
        await authSingleSelectblock.txtItemDescription.clear().then(async function () {
            await authSingleSelectblock.txtItemDescription.sendKeys(string).then(async function () {
                await authSingleSelectblock.btnSelectionSave.isEnabled().then(async function () {
                    await authSingleSelectblock.btnSelectionSave.click()
                })
            })
        })
    })
})


Then('Item 1 Description should get saved successfully', async function () {
    await authSingleSelectblock.btnSaveDraft.isEnabled().then(async function () {
        await authSingleSelectblock.btnSaveDraft.click().then(async function () {
            await authSingleSelectblock.lnkEditSelection.isDisplayed().then(async function () {
                await authSingleSelectblock.lnkEditSelection.click().then(async function () {
                    await browser.sleep(2000)
                    await authSingleSelectblock.txtItemDescription.getAttribute("ng-reflect-model").then(function (ItemDescription) {
                        expect(ItemDescription).to.be.eql("SS Option 1 Long Description")
                    })
                })
            })
        })
    })
    await helper.cancelCMSChangesAndExit();
})


// When('User clicks on Add Item button multiple times and clicks on save', async function () {
// })
let currentOptionCount:number = 0;

When('User clicks on Add Item button multiple times', async function () {
    currentOptionCount = await authSingleSelectblock.optionContainers.count();
    await authSingleSelectblock.btnSelectionAddItem.isEnabled().then(async function () {
        await authSingleSelectblock.btnSelectionAddItem.click().then(async function () {
            await authSingleSelectblock.btnSelectionAddItem.click()
        })
    })
})

When('User enters {string} text in Item 2 Title and clicks on cancel', async function (string) {
    await authSingleSelectblock.txtItemTitle2.isDisplayed().then(async function () {
        await authSingleSelectblock.txtItemTitle2.clear().then(async function () {
            await authSingleSelectblock.txtItemTitle2.sendKeys(string).then(async function () {
                await authSingleSelectblock.btnSelectionCancel.isEnabled().then(async function () {
                    await authSingleSelectblock.btnSelectionCancel.click()
                })
            })
        })
    })
})


Then('Item 2 Title should not get saved successfully', async function () {
    await authSingleSelectblock.btnSaveDraft.isEnabled().then(async function () {
        await authSingleSelectblock.btnSaveDraft.click().then(async function () {
            await authSingleSelectblock.lnkEditSelection.isDisplayed().then(async function () {
                await authSingleSelectblock.lnkEditSelection.click().then(async function () {
                    browser.sleep(2000)
                    await authSingleSelectblock.txtItemTitleBlock.count().then(async function (value) {
                        expect(value).to.be.eql(currentOptionCount)
                    })
                })
            })
        })
    })
    await helper.cancelCMSChangesAndExit();
})


When('User enters {string} text in Item 2 Title', async function (string) {
    await authSingleSelectblock.txtItemTitle2.isDisplayed().then(async function () {
        await authSingleSelectblock.txtItemTitle2.clear().then(async function () {
            await authSingleSelectblock.txtItemTitle2.sendKeys(string)
        })
    })
})

When('User clicks on Multiple Select Tab and switches back to Single Select tab', async function () {
    await authSingleSelectblock.ttlMultipleSelectTab.isDisplayed().then(async function () {
        await authSingleSelectblock.ttlMultipleSelectTab.click().then(async function () {
            await authSingleSelectblock.ttlSingleSelectTab.isDisplayed().then(async function () {
                await authSingleSelectblock.ttlSingleSelectTab.click()
            })
        })
    })
})

Then('Newly added Single Select data should be retained even after switching', async function () {
    await authSingleSelectblock.txtItemTitle2.isPresent().then(async function (text) {
        expect(text).to.exist;
    })
    await helper.cancelCMSChangesAndExit();

})

//When User clicks on copy icon besides Edit Selection under CMS editor
//Then copied Single Selection block should get displayed under CMS editor

//When User clicks on delete icon besides Edit Selection under CMS editor
//Then Single Selection block should get deleted under CMS editor
When('User clicks on copy icon besides Edit Selection under CMS editor', async function () {
    await authSingleSelectblock.btnCopyIcon.isDisplayed().then(async function () {
        await authSingleSelectblock.btnCopyIcon.click();
    })
})


Then('Copied Single Selection block should get displayed under CMS editor', async function () {
    await authSingleSelectblock.lnkDuplicateEditSelection.isDisplayed().then(async function (copiedBlock) {
        expect(copiedBlock).to.be.true;
    })
    await activityAuthorPage.exitEditor.click().then(async function () {
        await helper.continueWithoutSavingChanges();
        await browser.sleep(2000);
    })
})


When('User clicks on delete icon besides Edit Selection under CMS editor', async function () {
    await authSingleSelectblock.btnDeleteIcon.isDisplayed().then(async function () {
        await authSingleSelectblock.btnDeleteIcon.click();
    })
    await authSingleSelectblock.btnAlertYes.isDisplayed().then(async function () {
        await authSingleSelectblock.btnAlertYes.click();
    })
})

Then('Single Selection block should get deleted under CMS editor', async function () {
    await authSingleSelectblock.lnkDuplicateEditSelection.isPresent().then(async function (copiedBlock) {
        expect(copiedBlock).to.be.false;
    })
    await activityAuthorPage.exitEditor.click().then(async function () {
        await helper.continueWithoutSavingChanges();
        await browser.sleep(2000);
    })
})