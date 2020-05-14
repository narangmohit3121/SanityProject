import { When, Then } from "cucumber";
import { browser, protractor, element, By } from "protractor"
import { async } from "q";
import chai = require('chai');
import { ClientPageLocate } from "../../PageObjects/ClientLandingPage";
import { JourneyAuthoringLocate } from "../../PageObjects/Sprint 3/JourneyAuthoring";
import { AdminLandingPageLocate } from "../../PageObjects/Sprint 2/AdminLandingPage";
let expect = chai.expect;
let path = require("path");
let EC = protractor.ExpectedConditions;
let clientLandingPage = new ClientPageLocate();
//let adminLandingPage = new AdminLandingPageLocate();
//let journeyAuthoringPage = new JourneyAuthoringLocate();
let stageLongName = "Stage Security is freedom from, or resilience against, potential harm caused by others. Beneficiaries of security may be of persons and social groups, objects and institutions, ecosystems or any other entity or phenomenon vulnerable to unwanted change."
let moduleLongName = "Module Security is freedom from, or resilience against, potential harm caused by others. Beneficiaries of security may be of persons and social groups, objects and institutions, ecosystems or any other entity or phenomenon vulnerable to unwanted change."
let activityLongName = "Activity Security is freedom from, or resilience against, potential harm caused by others. Beneficiaries of security may be of persons and social groups, objects and institutions, ecosystems or any other entity or phenomenon vulnerable to unwanted change."

When('User clicks on Edit option under Stage', async function () {
    await clientLandingPage.newStageMoreIcon.isDisplayed().then(async function () {
        await clientLandingPage.newStageMoreIcon.click().then(async function () {
            await clientLandingPage.moreIconEditOption.isDisplayed().then(async function () {
                await clientLandingPage.moreIconEditOption.click()
            })
        })
    })
});

When('user updates stage title', async function () {
    await clientLandingPage.editContentHeader.getText().then(function (text) {
        expect(text).to.be.eql("Edit content")
    })
    await clientLandingPage.editContentTitleInput.isDisplayed().then(async function () {
        await clientLandingPage.editContentTitleInput.sendKeys("New Stage Updated")
    })
});

When('user click on done button', async function () {
    await clientLandingPage.editContentDoneButton.isEnabled().then(async function () {
        await clientLandingPage.editContentDoneButton.click()
    })
});

Then('Stage title should get updated', async function () {
    await clientLandingPage.newStageUpdatedTitle.isDisplayed().then(async function () {
        await clientLandingPage.newStageUpdatedTitle.getText().then(function (NewStageTitle) {
            expect(NewStageTitle).to.be.eql("New Stage Updated")
        })
    })
});

When('User clicks on Edit option under Module', async function () {
    await clientLandingPage.newModuleMoreIcon.isDisplayed().then(async function () {
        await clientLandingPage.newModuleMoreIcon.click().then(async function () {
            await clientLandingPage.moreIconEditOption.isDisplayed().then(async function () {
                await clientLandingPage.moreIconEditOption.click()
            })
        })
    })
});

When('user updates module title', async function () {
    await clientLandingPage.editContentHeader.getText().then(function (text) {
        expect(text).to.be.eql("Edit content")
    })
    await clientLandingPage.editContentTitleInput.isDisplayed().then(async function () {
        await clientLandingPage.editContentTitleInput.sendKeys("New Module Updated")
    })
});


Then('Module title should get updated', async function () {
    await clientLandingPage.newModuleUpdatedTitle.isDisplayed().then(async function () {
        await clientLandingPage.newModuleUpdatedTitle.getText().then(function (NewModuleTitle) {
            expect(NewModuleTitle).to.be.eql("New Module Updated")
        })
    })
});

When('User clicks on Edit option under Activity', async function () {
    await clientLandingPage.newActivityMoreIcon.isDisplayed().then(async function () {
        await clientLandingPage.newActivityMoreIcon.click().then(async function () {
            await clientLandingPage.moreIconEditOption.isDisplayed().then(async function () {
                await clientLandingPage.moreIconEditOption.click()
            })
        })
    })
});

When('user updates activity title', async function () {
    await clientLandingPage.editContentHeader.getText().then(function (text) {
        expect(text).to.be.eql("Edit content")
    })
    await clientLandingPage.editContentTitleInput.isDisplayed().then(async function () {
        await clientLandingPage.editContentTitleInput.clear().then(async function () {
            await clientLandingPage.editContentTitleInput.sendKeys("New Activity Updated 1")
        })
    })
});

Then('Activity title should get updated', async function () {
    await clientLandingPage.newActivityUpdatedTitle.isDisplayed().then(async function () {
        await clientLandingPage.newActivityUpdatedTitle.getText().then(function (NewActivityTitle) {
            expect(NewActivityTitle).to.be.eql("New Activity Updated 1")
        })
    })
});

When('user click on Link Activity option', async function () {
    await clientLandingPage.newActivityMoreIcon.isDisplayed().then(async function () {
        await clientLandingPage.newActivityMoreIcon.click().then(async function () {
            await clientLandingPage.moreIconLinkActivityOption.isDisplayed().then(async function () {
                await clientLandingPage.moreIconLinkActivityOption.click()
            })
        })
    })
});

When('user views Link content to activity popup window', async function () {
    await clientLandingPage.linkContentPopupTitle.isDisplayed().then(async function () {
        await clientLandingPage.linkContentPopupTitle.getText().then(function (title) {
            expect(title).to.be.eql("Link content to activity")
        })
    });

    When('user selects from current collection content list', async function () {
        await clientLandingPage.linkContentDropDown.isEnabled().then(async function () {
            await clientLandingPage.linkContentDropDown.click().then(async function () {
                await clientLandingPage.linkContnetDropDownSelection.isPresent().then(async function () {
                    await clientLandingPage.linkContnetDropDownSelection.click()
                })
            })
        })
    })
});

When('user click on attachement icon to link content', async function () {
    await clientLandingPage.linkContentIcon.click()
});

Then('user should be able to view linked Activity', async function () {
    await clientLandingPage.linkedContentLabel.isDisplayed().then(async function () {
        await clientLandingPage.linkedContentLabel.getText().then(function (label) {
            expect(label).to.be.eql(" Test Content ")
        })
    })
});

When('user click on cancel button under link content', async function () {
    await clientLandingPage.editContentCancelButton.isEnabled().then(async function () {
        await clientLandingPage.editContentCancelButton.click()
    })
});

Then('user should not view linked Activity', async function () {
    await clientLandingPage.linkedContentLabel.isDisplayed().then(async function () {
        await clientLandingPage.linkedContentLabel.getText().then(function (label) {
            expect(label).to.be.null
        })
    })
});

When('user updates stage with huge title', async function () {
    await clientLandingPage.editContentTitleInput.isDisplayed().then(async function () {
        await clientLandingPage.editContentTitleInput.sendKeys(stageLongName)
    })

})

When('user updates module with huge title', async function () {
    await clientLandingPage.editContentTitleInput.isDisplayed().then(async function () {
        await clientLandingPage.editContentTitleInput.sendKeys(moduleLongName)
    })

})

When('user updates activity with huge title', async function () {
    await clientLandingPage.editContentTitleInput.isDisplayed().then(async function () {
        await clientLandingPage.editContentTitleInput.sendKeys(activityLongName)
    })
})

When('user clicks on Journey save button', async function () {
    await clientLandingPage.newJourneySaveButton.isEnabled().then(async function () {
        await clientLandingPage.newJourneySaveButton.click()
    })
})

When('user click on Journey cancel button', async function () {
    await clientLandingPage.newJourneyCancelButton.isEnabled().then(async function () {
        await clientLandingPage.newJourneyCancelButton.click()
    })
})


Then('Stage Module and Activity title should get updated', async function () {
    await clientLandingPage.newStageUpdatedLongTitle.getText().then(function (sln) {
        expect(sln).to.be.eql(stageLongName)
    })
    await clientLandingPage.newModuleUpdatedLongTitle.getText().then(function (mln) {
        expect(mln).to.be.eql(moduleLongName)
    })
    await clientLandingPage.newActivityUpdatedLongTitle.getText().then(function (aln) {
        expect(aln).to.be.eql(activityLongName)
    })

})

When('User clicks on Add Activity option multiple times under Module', async function () {
    await clientLandingPage.newModuleMoreIcon.click().then(async function () {
        await clientLandingPage.moreIconAddActivityOption.click().then(async function () {
            await clientLandingPage.newModuleMoreIcon.click().then(async function () {
                await clientLandingPage.moreIconAddActivityOption.click().then(async function () {
                    await clientLandingPage.newModuleMoreIcon.click().then(async function () {
                        await clientLandingPage.moreIconAddActivityOption.click().then(function () {
                            console.log("Added Multiple Activities")
                        })
                    })
                })
            })
        })
    })
})

When('User clicks on updated activity name and drags within module', async function () {
    await clientLandingPage.newActivityUpdatedTitleDragIcon.click()
})

When('User clicks on updated activity name and drags within stage', async function () {
    await clientLandingPage.newActivityUpdatedTitleDragIcon.click()
})

When('User clicks on delete option under Stage', async function () {
    await clientLandingPage.newStageMoreIcon.isDisplayed().then(async function () {
        await clientLandingPage.newStageMoreIcon.click().then(async function () {
            await clientLandingPage.moreIconDeleteOption.isDisplayed().then(async function () {
                await clientLandingPage.moreIconDeleteOption.click().then(async function () {
                    browser.sleep(3000)
                    await clientLandingPage.newJourneySaveButton.isEnabled().then(async function () {
                        await clientLandingPage.newJourneySaveButton.click()
                    })
                })
            })
        })
    })
})

Then('Stage should get deleted successfully', async function () {
    await browser.refresh().then(async function () {
        await clientLandingPage.newStageAdded.isPresent().then(function (stageTitlePresent) {
            expect(stageTitlePresent).to.be.false
        })
    })
})

When('User clicks on delete option under Module', async function () {
    await clientLandingPage.newModuleMoreIcon.isDisplayed().then(async function () {
        await clientLandingPage.newModuleMoreIcon.click().then(async function () {
            await clientLandingPage.moreIconDeleteOption.isDisplayed().then(async function () {
                await clientLandingPage.moreIconDeleteOption.click().then(async function () {
                    browser.sleep(3000)
                    await clientLandingPage.newJourneySaveButton.isEnabled().then(async function () {
                        await clientLandingPage.newJourneySaveButton.click()
                    })
                })
            })
        })
    })
})

Then('Module should get deleted successfully', async function () {
    await browser.refresh().then(async function () {
        await clientLandingPage.newModuleAdded.isPresent().then(function (moduleTitlePresent) {
            expect(moduleTitlePresent).to.be.false
        })
    })
})

When('User clicks on delete option under Activity', async function () {
    await clientLandingPage.newActivityMoreIcon.isDisplayed().then(async function () {
        await clientLandingPage.newActivityMoreIcon.click().then(async function () {
            await clientLandingPage.moreIconDeleteOption.isDisplayed().then(async function () {
                await clientLandingPage.moreIconDeleteOption.click().then(async function () {
                    await clientLandingPage.newJourneySaveButton.isEnabled().then(async function () {
                        await clientLandingPage.newJourneySaveButton.click()
                    })
                })
            })
        })
    })
})

Then('Activity should get deleted successfully', async function () {
    await browser.refresh().then(async function () {
        await clientLandingPage.newActivityAdded.isPresent().then(function (activityTitlePresent) {
            expect(activityTitlePresent).to.be.false
        })
    })
})

When('User clicks on Add Stage icon', async function () {
    await clientLandingPage.addStageButton.isDisplayed().then(async function () {
        await clientLandingPage.addStageButton.click()
    })
})

When('User clicks on Add Module icon', async function () {
    await clientLandingPage.addModuleButton.isDisplayed().then(async function () {
        await clientLandingPage.addModuleButton.click()
    })

})

When('User clicks on Add Activity option under Module added', async function () {
    await clientLandingPage.newModuleMoreIcon.isDisplayed().then(async function () {
        await clientLandingPage.newModuleMoreIcon.click().then(async function () {
            await clientLandingPage.moreIconAddActivityOption.isDisplayed().then(async function () {
                await clientLandingPage.moreIconAddActivityOption.click()
            })
        })
    })

})

When('Stage gets added successfully', async function () {
    await clientLandingPage.newStageAdded.isDisplayed().then(async function () {
        await clientLandingPage.newStageAdded.getText().then(function (stageTitle) {
            expect(stageTitle).to.be.eql("New Stage")
        })
    })
});

When('Module gets added successfully', async function () {
    await clientLandingPage.newModuleAdded.isDisplayed().then(async function () {
        await clientLandingPage.newModuleAdded.getText().then(function (moduleTitle) {
            expect(moduleTitle).to.be.eql("New Module")
        })
    })
});

When('Activity gets added successfully under Module', async function () {
    await clientLandingPage.newActivityAdded.isDisplayed().then(async function () {
        await clientLandingPage.newActivityAdded.getText().then(function (activityTitle) {
            expect(activityTitle).to.be.eql(" New Activity ")
        })
    })
});

Then('Stage Module and Activity should get saved successfully', async function () {
    await clientLandingPage.newJourneySaveButton.isEnabled().then(async function () {
        await clientLandingPage.newJourneySaveButton.click().then(async function () {
            await browser.refresh().then(async function () {
                await clientLandingPage.newStageAdded.getText().then(function (stageTitle) {
                    expect(stageTitle).to.be.eql("New Stage")
                })
                await clientLandingPage.newModuleAdded.getText().then(function (moduleTitle) {
                    expect(moduleTitle).to.be.eql("New Module")
                })
                await clientLandingPage.newActivityAdded.getText().then(function (activityTitle) {
                    expect(activityTitle).to.be.eql(" New Activity ")
                })
            })
        })
    })

});
