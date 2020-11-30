import { Given, Then, When } from "cucumber";
import { browser, By, element, ElementFinder, protractor } from "protractor";
import { AdminLandingPageLocate } from "../../../../PageObjects/AuthorApp POM/Home Page/AdminLandingPage";
import { ActivityAuthoringPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";
import { CommonLocate } from "../../../../PageObjects/Common";
import { LoginPageLocate } from "../../../../PageObjects/AuthorApp POM/Login/LoginPage";
import { CreateUserPageLocate } from "../../../../PageObjects/AuthorApp POM/Cohort-Users/CretaUserPage";

import chai = require("chai");
import { EditUserPageLocate } from "../../../../PageObjects/AuthorApp POM/Cohort-Users/EditUserPage";
import { AdminColorStageLocate } from "../../../../PageObjects/AuthorApp POM/Journey/AdminColorStagePage";
import { AuthoringSingleMultiComponentLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/AuthoringSingleMultiComponentPage";
import { async } from "q";
import { HelperFunctions } from "../../../HelperClass";

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
let helper = new HelperFunctions();

let authoringSingleMultiComponentLocate = new AuthoringSingleMultiComponentLocate();

When('User click on ParticipantResponseBlock Content', async function () {

    await authoringSingleMultiComponentLocate.cntParticipantResponseblockContent.isDisplayed().then(async function () {
        await authoringSingleMultiComponentLocate.cntParticipantResponseblockContent.click().then(async function () {
            await browser.sleep(5000)

        })
    })

});


When('User click on Edit Selection link of Single and Multi Component', async function () {

    await authoringSingleMultiComponentLocate.lnkEditSelectionLink.isDisplayed().then(async function () {
        await authoringSingleMultiComponentLocate.lnkEditSelectionLink.click().then(async function () {
            await browser.sleep(5000)

        })
    })

});

Then('User should see 1,2 and 3 value for first three textfiled respectively by default', async function () {
    await authoringSingleMultiComponentLocate.txtValue1.isDisplayed().then(async function () {
        await authoringSingleMultiComponentLocate.txtValue1.getAttribute("ng-reflect-model").then(async function (defaultTxtValue_1) {
            expect(defaultTxtValue_1).to.equal("1");
            await browser.sleep(2000);
        });
    })

    await authoringSingleMultiComponentLocate.txtValue2.isDisplayed().then(async function () {
        await authoringSingleMultiComponentLocate.txtValue2.getAttribute("ng-reflect-model").then(async function (defaultTxtValue_2) {
            expect(defaultTxtValue_2).to.equal("2");
            await browser.sleep(2000).then(async function () {
                console.log("Second textfield  default value is " + defaultTxtValue_2);
            })
        });
    })

    await authoringSingleMultiComponentLocate.txtValue3.isDisplayed().then(async function () {
        await authoringSingleMultiComponentLocate.txtValue3.getAttribute("ng-reflect-model").then(async function (defaultTxtValue_3) {
            expect(defaultTxtValue_3).to.equal("3");
            await browser.sleep(2000);
        });
    })
    await helper.cancelCMSChangesAndExit();
})
let item1Value:string = "";
let item2Value:string = "";
let item3Value:string = "";
When('user edit default value of value1 as {string} value2 as {string} and value of value3 as {string} respectively', async function (val1, val2, val3) {

    item1Value = val1;
    item2Value = val2;
    item3Value = val3;
    await authoringSingleMultiComponentLocate.txtValue1.clear().then(async function () {
        await authoringSingleMultiComponentLocate.txtValue1.sendKeys(val1);

    });

    await authoringSingleMultiComponentLocate.txtValue2.clear().then(async function () {
        await authoringSingleMultiComponentLocate.txtValue2.sendKeys(val2);


    });

    await authoringSingleMultiComponentLocate.txtValue3.clear().then(async function () {
        await authoringSingleMultiComponentLocate.txtValue3.sendKeys(val3);


    });


});



When('User click on save button after edit value', async function () {

    await authoringSingleMultiComponentLocate.btnSave.isDisplayed().then(async function () {
        await authoringSingleMultiComponentLocate.btnSave.click().then(async function () {
            await browser.sleep(2000)

        })
    })

});


Then('User should see same values of value1,value2 and value3 respectively after save button', async function () {
    await authoringSingleMultiComponentLocate.txtValue1.isDisplayed().then(async function () {
        await authoringSingleMultiComponentLocate.txtValue1.getAttribute("ng-reflect-model").then(async function (defaultTxtValue_1) {
            console.log('Item value',defaultTxtValue_1 );
            expect(defaultTxtValue_1).to.equal(item1Value);
            await browser.sleep(2000).then(async function () {

            })
        });
    })

    await authoringSingleMultiComponentLocate.txtValue2.isDisplayed().then(async function () {
        await authoringSingleMultiComponentLocate.txtValue2.getAttribute("ng-reflect-model").then(async function (defaultTxtValue_2) {
            console.log('Item value',defaultTxtValue_2 );
            expect(defaultTxtValue_2).to.equal(item2Value);
            await browser.sleep(2000).then(async function () {

            })
        });
    })

    await authoringSingleMultiComponentLocate.txtValue3.isDisplayed().then(async function () {
        await authoringSingleMultiComponentLocate.txtValue3.getAttribute("ng-reflect-model").then(async function (defaultTxtValue_3) {
            console.log('Item value',defaultTxtValue_3 );
            expect(defaultTxtValue_3).to.equal(item3Value);
            await browser.sleep(2000).then(async function () {

            })
        });
    })
    await helper.cancelCMSChangesAndExit();
    // await activityAuthorPage.exitEditor.click().then(async function () {
    //     await helper.continueWithoutSavingChanges();
    //     await browser.sleep(2000);
    // })

})

