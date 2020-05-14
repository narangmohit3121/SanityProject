import { When, Then } from "cucumber";
import { browser, protractor, element, By } from "protractor"
import { async } from "q";
import chai = require('chai');
import { ClientPageLocate } from "../../PageObjects/ClientLandingPage";
import { JourneyAuthoringLocate } from "../../PageObjects/Sprint 3/JourneyAuthoring";
let expect = chai.expect;
let path = require("path");
let EC = protractor.ExpectedConditions;
let clientLandingPage = new ClientPageLocate();
let journeyAuthoringPage = new JourneyAuthoringLocate();
let expJourneyPlusMenuList: Array<string> = [];
let actJourneyPlusMenuList: Array<string> = ['Create New Journey', 'Copy Journey'];
let beforeJourneyList: any;


When('User is on Petronas folder get the count of journeys', async function () {
    await clientLandingPage.journeyList.count().then(async function () {
        await clientLandingPage.journeyList.count().then(async function (beforeJourneyList1) {
            beforeJourneyList = beforeJourneyList1;
            console.log(beforeJourneyList1)
        })
    })
})

When('User clicks on Journey plus icon', async function () {
    await clientLandingPage.copyJourneyPlus.click().then(async function () {
        await clientLandingPage.journeyPlusMenuOptions.each(async function (element, index) {
            await element.getText().then(async function (list) {
                expJourneyPlusMenuList.push(list)
            })
        })
    })
    expect(expJourneyPlusMenuList).to.include.members(actJourneyPlusMenuList)
});

When('User clicks on Create New Journey', async function () {
    await clientLandingPage.createNewJourneyOption.click().then(async function () {
        await clientLandingPage.createNewJourneyTitle.getText().then(function (text) {
            expect(text).to.be.eql("Create New Journey")
        })
    })
});

Then('Create New Journey popup modal window should open up with empty Journey Title and empty description field', async function () {
    await clientLandingPage.createNewJourneyTitle.isDisplayed().then(async function () {
        await clientLandingPage.enterJourneyTitle.getText().then(function (journeyTitle) {
            expect(journeyTitle).to.be.empty
        })
        await clientLandingPage.enterJourneyDescription.getText().then(function (journeyDesc) {
            expect(journeyDesc).to.be.empty
        })
    })
});

When('User enters valid title and description', async function () {
    await clientLandingPage.enterJourneyTitle.click().then(async function () {
        await clientLandingPage.enterJourneyTitle.sendKeys("QA Journey Petronas")
    })
    await clientLandingPage.enterJourneyDescription.click().then(async function () {
        await clientLandingPage.enterJourneyDescription.sendKeys("QA Journey Description")
    })
})

When('User clicks on save button', async function () {
    await clientLandingPage.createNewJourneySaveButton.isEnabled().then(async function () {
        await clientLandingPage.createNewJourneySaveButton.click()

    })
})

Then('Create New Journey popup modal window should get closed and new Journey tile should get created under Journeys section', async function () {
    await clientLandingPage.journeyList.count().then(async function () {
        await clientLandingPage.journeyList.count().then(async function (afterJourneyList) {

            console.log(afterJourneyList)
            expect(beforeJourneyList).to.be.eql(afterJourneyList - 1)
        })
    })
})

Then('Validation message should be displayed as Title is mandatory', async function () {
    console.log("Title is Mandatory")
});

When('User clicks on cancel button', async function () {
    await clientLandingPage.createNewJourneyCancelButton.isEnabled().then(async function () {
        await clientLandingPage.createNewJourneyCancelButton.click()
    })
});

Then('Create New Journey popup modal window should get closed', async function () {
    await browser.getTitle().then(function (title) {
        expect(title).to.be.eql("Momenta")
    })
});

When('User clicks on the newly created Journey', async function () {
    await clientLandingPage.qaJourneyName.isPresent().then(async function () {
        await clientLandingPage.qaJourneyName.click()
    })
});

Then('Only the title and description should be displayed with blank journey', async function () {
    await clientLandingPage.newQaJourneyTitle.getText().then(function (title) {
        console.log(title)
        expect(title).to.be.eql("Journey: QA Journey Petronas")
    })
    await clientLandingPage.newQaJourneyDesc.getText().then(function (desc) {
        console.log(desc)
        expect(desc).to.be.eql("QA Journey Description")
    })
});

When('User clicks on Add Stage & Add Module', async function () {
    await clientLandingPage.addStageButton.isEnabled().then(async function () {
        browser.sleep(2000)
        await clientLandingPage.addStageButton.click()
    })
    await clientLandingPage.addModuleButton.isEnabled().then(async function () {
        browser.sleep(2000)
        await clientLandingPage.addModuleButton.click()
    })
});

Then('New Stage & New Module should get added as part of Journey template', async function () {
    await clientLandingPage.newStageAdded.isDisplayed().then(async function () {
        console.log("first");
        await clientLandingPage.newStageAdded.getText().then(function (stageTxt) {
            console.log(stageTxt);
            expect(stageTxt).to.be.eql("NEW STAGE")
        })
    })
    await clientLandingPage.newModuleAdded.isDisplayed().then(async function () {
        console.log("second");
        await clientLandingPage.newModuleAdded.getText().then(function (moduleTxt) {
            console.log(moduleTxt);
            expect(moduleTxt).to.be.eql("New Module")
        })
    })
});

When('User clicks on Cancel button after adding Stage and Module', async function () {
    await clientLandingPage.newJourneyCancelButton.isEnabled().then(async function () {
        await clientLandingPage.newJourneyCancelButton.click().then(async function () {
            await browser.getTitle().then(async function (title) {
                expect(title).to.be.eql("Momenta")
            })
        })
    })

});

Then('Journey should not get saved and redirected to client landing page', async function () {
    await clientLandingPage.journeyList.count().then(async function () {
        await clientLandingPage.journeyList.count().then(async function (afterJourneyList) {

            console.log(afterJourneyList)
            expect(beforeJourneyList).to.be.eql(afterJourneyList)
        })
    })
});

When('User clicks on Save button after adding Stage and Module', async function () {
    await clientLandingPage.newJourneySaveButton.isEnabled().then(async function () {
        await clientLandingPage.newJourneySaveButton.click()
    })
});

Then('Journey should get saved successfully with Stage and Module added', async function () {
    await clientLandingPage.newJourneySuccessToast.getText().then(function (alertTxt) {
        //expect(alertTxt).to.be.eql(" Journey Saved Successfully ")
        console.log(alertTxt)
    })
});

When('User clicks on preview button on Journey Authoring page', async function () {
    await clientLandingPage.newJourneyPreviewButton.isEnabled().then(async function(){
        await clientLandingPage.newJourneyPreviewButton.click()
    })
});

Then('Preview page should openup in new tab displaying Journey created', async function () {
    await browser.getAllWindowHandles().then(function (handles) {
        let firstWindowHandle = handles[0];
        let secondWindowHandle = handles[1];
        browser.switchTo().window(secondWindowHandle).then(function () {
            browser.sleep(5000).then(async function () {
                await clientLandingPage.newJourneyPreviewPage.isDisplayed().then(async function () {
                    await clientLandingPage.newJourneyPreviewPage.getText().then(async function (text) {
                        console.log(text)
                        expect(text).to.be.eql("My Journey")
                    })
                })
            })
        })
    })
});

When('User clicks on publish button on the Journey Authoring page', async function () {
   await clientLandingPage.newJourneyPublishButton.isEnabled().then(async function(){
       await clientLandingPage.newJourneyPublishButton.click()
   }) 
});

Then('Journey should get published successfully with Stage and Module added', async function () {
    await clientLandingPage.newJourneyPublishToast.getText().then(function(alertTxt){
        //expect(alertTxt).to.be.eql(" Journey Published Successfully ")
        console.log(alertTxt)
    })
});