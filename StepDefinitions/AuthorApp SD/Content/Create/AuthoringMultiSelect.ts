import { Then, When } from "cucumber";
import { browser, protractor } from "protractor";
import chai = require('chai');
import { AuthoringMultiSelectLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/AuthoringMultiSelect";
import { HelperFunctions } from "../../../HelperClass";
import { ActivityAuthoringPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";
var expect = chai.expect;
let EC = protractor.ExpectedConditions;
let helper = new HelperFunctions();

let authoringmultiselect = new AuthoringMultiSelectLocate();
let activityAuthorPage = new ActivityAuthoringPageLocate();

When('User clicks on MultipleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor', async function () {
    await authoringmultiselect.cntMultiSelect.isDisplayed().then(async function () {
        await authoringmultiselect.cntMultiSelect.click().then(async function () {
            await helper.unlockContent();
            await authoringmultiselect.txtCmsContentTitle.getAttribute("ng-reflect-model").then(function (titleText) {
                //console.log(titleText)
                expect(titleText).to.contain("Multi Select")
            })
        })
    })
})


Then('User should able to view SELECTION content block under Add Content List for Multiple Select', async function () {
    await authoringmultiselect.blkSelection.isPresent().then(async function (isMultiSelectPresent) {
        expect(isMultiSelectPresent).to.be.true;
    })
    await activityAuthorPage.exitEditor.click().then(async function () {
        await helper.continueWithoutSavingChanges();
        await browser.sleep(2000);
    })
})

When('User clicks on Edit Multi-Select link under CMS editor', async function () {
    await authoringmultiselect.lnkEditSelection.isDisplayed().then(async function () {
        await authoringmultiselect.lnkEditSelection.click()
    })
})

Then('Selection Model window should popup with SELECTION as title for Multiple Select', async function () {
    await authoringmultiselect.ttlSelectionTitle.isDisplayed().then(async function () {
        await authoringmultiselect.ttlSelectionTitle.getText().then(function (popTitle) {
            expect(popTitle).to.equal("Selection")
        })
    })
    await helper.cancelCMSChangesAndExit();
})

Then('Single Select and Multiple Select tabs should be displayed for Multiple Select', async function () {
    await authoringmultiselect.ttlSingleSelectTab.isDisplayed().then(async function () {
        await authoringmultiselect.ttlSingleSelectTab.getText().then(function (singleSelectTitle) {
            console.log(singleSelectTitle)
            expect(singleSelectTitle).to.equal("Single Select")
        })
    })
    await authoringmultiselect.ttlMultipleSelectTab.isDisplayed().then(async function () {
        await authoringmultiselect.ttlMultipleSelectTab.getText().then(function (multiSelectTitle) {
            console.log(multiSelectTitle)
            expect(multiSelectTitle).to.equal("Multiple Select")
        })
    })
    await helper.cancelCMSChangesAndExit();
})

When('User views content-type radio buttons for Multiple Select', async function () {
    await authoringmultiselect.rdoShortButton.isDisplayed().then(async function (radioShortDisplayed) {
        expect(radioShortDisplayed, "Radio button for Multi Select Type short not displayed").to.be.true;
        await authoringmultiselect.rdoShortButton.getText().then(function (rdoButtonShort) {
            expect(rdoButtonShort).to.equal("Short")
        })
    })
    await authoringmultiselect.rdoLongButton.isDisplayed().then(async function (radioLongDisplayed) {
        expect(radioLongDisplayed, "Radio button for Multi Select Type Long not displayed").to.be.true;
        await authoringmultiselect.rdoLongButton.getText().then(function (rdoButtonLong) {
            expect(rdoButtonLong).to.equal("Long")
        })
    })

})

Then('User should able to toggle between Short and Long content-type radio buttons for Multiple Select', async function () {
    await authoringmultiselect.rdoLongButton.isDisplayed().then(async function () {
        await authoringmultiselect.rdoLongButton.click().then(async function () {
            await authoringmultiselect.rdoShortButton.click().then(async function () {
                await authoringmultiselect.rdoLongButton.click();
            })
        })
    })
    await helper.cancelCMSChangesAndExit();
})

When('User enters {string} text in Type Selection Title for Multiple Select and clicks on save', async function (string) {
    await authoringmultiselect.txtTypeSelectionTitle.isDisplayed().then(async function () {
        await authoringmultiselect.txtTypeSelectionTitle.clear().then(async function () {
            await authoringmultiselect.txtTypeSelectionTitle.sendKeys(string).then(async function () {
                await authoringmultiselect.btnSelectionSave.isEnabled().then(async function () {
                    await authoringmultiselect.btnSelectionSave.click()
                })
            })
        })
    })
})

Then('Type Selection Title for Multiple Select should get saved successfully', async function () {
    await authoringmultiselect.btnSaveDraft.isEnabled().then(async function () {
        await authoringmultiselect.btnSaveDraft.click().then(async function () {
            await authoringmultiselect.lnkEditSelection.isDisplayed().then(async function () {
                await authoringmultiselect.lnkEditSelection.click().then(async function () {
                    await browser.sleep(2000)
                    await authoringmultiselect.txtTypeSelectionTitle.getAttribute("ng-reflect-model").then(function (TypeSelectionTitle) {
                        expect(TypeSelectionTitle).to.equal("Multi Select Question")
                    })
                })
            })
        })
    })
})

When('User enters {string} text in Item 1 Title for Multiple Select and clicks on save', async function (string) {
    await authoringmultiselect.txtItemTitle1.isDisplayed().then(async function () {
        await authoringmultiselect.txtItemTitle1.clear().then(async function () {
            await authoringmultiselect.txtItemTitle1.sendKeys(string).then(async function () {
                await authoringmultiselect.btnSelectionSave.isEnabled().then(async function () {
                    await authoringmultiselect.btnSelectionSave.click()
                })
            })
        })
    })
})

Then('Item 1 Title for Multiple Select should get saved successfully', async function () {
    await authoringmultiselect.btnSaveDraft.isEnabled().then(async function () {
        await authoringmultiselect.btnSaveDraft.click().then(async function () {
            await authoringmultiselect.lnkEditSelection.isDisplayed().then(async function () {
                await authoringmultiselect.lnkEditSelection.click().then(async function () {
                    browser.sleep(2000)
                    await authoringmultiselect.txtItemTitle1.getAttribute("ng-reflect-model").then(function (ItemTitle) {
                        expect(ItemTitle).to.equal("MS Option 1")
                    })
                })
            })
        })
    })
})

When('User enters {string} text in Item 1 Description for Multiple Select and clicks on save', async function (string) {
    await authoringmultiselect.rdoLongButton.isDisplayed().then(async function () {
        await authoringmultiselect.rdoLongButton.click();
    })
    await authoringmultiselect.txtItemDescription.isDisplayed().then(async function () {
        await authoringmultiselect.txtItemDescription.clear().then(async function () {
            await authoringmultiselect.txtItemDescription.sendKeys(string).then(async function () {
                await authoringmultiselect.btnSelectionSave.isEnabled().then(async function () {
                    await authoringmultiselect.btnSelectionSave.click()
                })
            })
        })
    })
})

Then('Item 1 Description for Multiple Select should get saved successfully', async function () {
    await authoringmultiselect.btnSaveDraft.isEnabled().then(async function () {
        await authoringmultiselect.btnSaveDraft.click().then(async function () {
            await authoringmultiselect.lnkEditSelection.isDisplayed().then(async function () {
                await authoringmultiselect.lnkEditSelection.click().then(async function () {
                    browser.sleep(2000)
                    await authoringmultiselect.txtItemDescription.getAttribute("ng-reflect-model").then(function (ItemDescription) {
                        expect(ItemDescription).to.equal("MS Option 1 Long Description")
                    })
                })
            })
        })
    })
    await helper.cancelCMSChangesAndExit();
})


When('User clicks on copy icon besides Edit Multi-Select under CMS editor', async function () {
    await authoringmultiselect.btnCopyIcon.isDisplayed().then(async function () {
        await authoringmultiselect.btnCopyIcon.click();
    })
})


Then('Copied Multiple Selection block should get displayed under CMS editor', async function () {
    await authoringmultiselect.lnkDuplicateEditSelection.isDisplayed().then(async function (copiedBlock) {
        expect(copiedBlock).to.be.true;
    })
    await activityAuthorPage.exitEditor.click().then(async function () {
        await helper.continueWithoutSavingChanges();
        await browser.sleep(2000);
    })

})


When('User clicks on delete icon besides Edit Multi-Select under CMS editor', async function () {
    await authoringmultiselect.btnDeleteIcon.isDisplayed().then(async function () {
        await authoringmultiselect.btnDeleteIcon.click();
    })
    await authoringmultiselect.btnAlertYes.isDisplayed().then(async function () {
        await authoringmultiselect.btnAlertYes.click();
    })
})

Then('Multiple Selection block should get deleted under CMS editor', async function () {
    await authoringmultiselect.lnkDuplicateEditSelection.isPresent().then(async function (copiedBlockStillPresent) {
        expect(copiedBlockStillPresent).to.be.false;
    })
    await activityAuthorPage.exitEditor.click().then(async function () {
        await helper.continueWithoutSavingChanges();
        await browser.sleep(2000);
    })
})