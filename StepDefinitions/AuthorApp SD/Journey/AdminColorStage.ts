import { Given, Then, When } from "cucumber";
import { browser, By, element, ElementFinder, protractor } from "protractor";
import { AdminLandingPageLocate } from "../../../PageObjects/AuthorApp POM/Home Page/AdminLandingPage";
import { ActivityAuthoringPageLocate } from "../../../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";
import { CommonLocate } from "../../../PageObjects/Common";
import { LoginPageLocate } from "../../../PageObjects/AuthorApp POM/Login/LoginPage";
import { CreateUserPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/CretaUserPage";

import chai = require("chai");
import { EditUserPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/EditUserPage";
import { AdminColorStageLocate } from "../../../PageObjects/AuthorApp POM/Journey/AdminColorStagePage";

var dragAndDrop = require('html-dnd').code;
var expect = chai.expect;
var listExists = true;
var EC = protractor.ExpectedConditions;
var driver = browser.driver;
let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let activityAuthorPage = new ActivityAuthoringPageLocate();
let commonObjects = new CommonLocate();
var expect = chai.expect;

let adminColorStageLocate = new AdminColorStageLocate();

let expectedTitle = "Momenta";
let expectedRedStageColor = "#850000";



When('User click on Journey Color Stages Journey', async function () {

    await adminColorStageLocate.tleJourneycolorstage.isDisplayed().then(async function () {
        await adminColorStageLocate.tleJourneycolorstage.click().then(async function () {

        })
    })

});

When('User clicks on automation folder', async function () {

    await adminColorStageLocate.tleFolderautomation.isDisplayed().then(async function () {
        await adminColorStageLocate.tleFolderautomation.click().then(async function () {

        })
    })

});

When('User clicks on AuthorApp folder', async function () {

    await adminColorStageLocate.tleFolderAuthorApp.isDisplayed().then(async function () {
        await adminColorStageLocate.tleFolderAuthorApp.click().then(async function () {

        })
    })

});

When('User clicks on Journey Folder', async function () {

    await adminColorStageLocate.tleFolderJourney.isDisplayed().then(async function () {
        await adminColorStageLocate.tleFolderJourney.click().then(async function () {

        })
    })

});


When('User click on three dots of STAGE', async function () {

    await adminColorStageLocate.dotStage1.isDisplayed().then(async function () {
        await adminColorStageLocate.dotStage1.click().then(async function () {

        })
    })

});

When('User click on Edit Stage button', async function () {

    await adminColorStageLocate.btnEditStage.isDisplayed().then(async function () {
        await adminColorStageLocate.btnEditStage.click().then(async function () {

        })
    })

});

Then('System should display edit stage window', async function () {

    await browser.getTitle().then(async function (actualpageTitle) {
        expect(actualpageTitle).to.eql(expectedTitle);

    })

});

Then('User  should see color pallette for edit stage color', async function () {
    await adminColorStageLocate.imgExistingColorPallettePurple.isDisplayed().then(async function (result) {
        expect(result).to.be.true;

    });
});

When('User click existing color pallette of purple color having #6E3095 hex value', async function () {

    await adminColorStageLocate.imgExistingColorPallettePurple.isDisplayed().then(async function () {
        await adminColorStageLocate.imgExistingColorPallettePurple.click().then(async function () {

        })
    })

});

When('User enter hex value as {string} of deep red color to edit exisiting color', async function (deppRedColor) {

    await adminColorStageLocate.txtInputColorHexValue.isDisplayed().then(async function () {
        await adminColorStageLocate.txtInputColorHexValue.clear().then(async function () {
            await adminColorStageLocate.txtInputColorHexValue.sendKeys(deppRedColor);

        })

    })

});


When('User click Done button after edit color hex value', async function () {

    await adminColorStageLocate.btnDone.isDisplayed().then(async function () {
        await adminColorStageLocate.btnDone.click().then(async function () {

        })
    })

});

When('User click on Save button for edit color hex value', async function () {

    await adminColorStageLocate.btnSAVE.isDisplayed().then(async function () {
        await adminColorStageLocate.btnSAVE.click().then(async function () {

        })
    })

});

When('User navigate stage color after save', async function () {

    await adminColorStageLocate.dotStage1.isDisplayed().then(async function () {
        await adminColorStageLocate.dotStage1.click().then(async function () {
            await adminColorStageLocate.btnEditStage.isDisplayed().then(async function () {
                await adminColorStageLocate.btnEditStage.click().then(async function () {

                })
            })
        })
    })
});

Then('User should see stage in deep red color', async function () {
    await adminColorStageLocate.imgActualedRedColor.isDisplayed().then(async function () {
    })
});

When('User enter hex value as {string} of deep red color to edit exisiting color to cancel action', async function (purpleColor) {


    await adminColorStageLocate.txtInputColorHexValue.isDisplayed().then(async function () {
        await adminColorStageLocate.txtInputColorHexValue.clear().then(async function () {
            await adminColorStageLocate.txtInputColorHexValue.sendKeys(purpleColor);

        })

    })

});


When('User click CANCEL button for cancel edit color operation', async function () {
    await adminColorStageLocate.btnCANCEL.isDisplayed().then(async function () {
        await adminColorStageLocate.btnCANCEL.click().then(async function () {

        })
    })
})


Then('User should see Journey authoring page after cancel button click', async function () {
    await browser.getTitle().then(async function (actualpageTitle) {
        expect(actualpageTitle).to.eql(expectedTitle);

    })

});






