import { Given, When, Then } from "cucumber";
import { browser, element } from "protractor";
import config from "../../../config.json"
import chai = require('chai');
import { Alert } from "selenium-webdriver";
import { ParticipantLoginPageLocate } from "../../../../PageObjects/UserApp POM/Login/ParticipantLoginPage.js";
import { async } from "q";
import { PageblockPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/PageBlockPage";
import { HelperFunctions } from "../../../HelperClass";
import { ActivityAuthoringPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";

var expect = chai.expect;

let pageblockpage = new PageblockPageLocate();
let helper = new HelperFunctions();
let activityAuthorPage = new ActivityAuthoringPageLocate();

// When('User should click on petronas folder', async function () {
//     await pageblockpage.txtClientSearch.sendKeys("petronas").then(async function () {
//         await pageblockpage.colPetronas.isDisplayed().then(async function () {
//             await pageblockpage.colPetronas.click().then(function () {
//                 browser.sleep(2000)

//             })
//         })
//     })
// });


// When('User creates a new Cohort to the Sanity Journey and creates a new user under that cohort', async function () {
//     await pageblockpage.cntPageBlockAutomation.isDisplayed().then(async function () {
//         await pageblockpage.cntPageBlockAutomation.click().then(function () {
//             browser.sleep(2000)

//         })
//     })

// });

When("User navigate to Page Block Automation content", async function(){
    await pageblockpage.cntPageBlockAutomation.click();
    await browser.sleep(5000);
})

Then('page block should be displayed to the user', async function () {
    await pageblockpage.contentTab.click();
    await pageblockpage.blkPage.isDisplayed().then(async function (result) {
        expect(result).to.be.true;
        await browser.sleep(2000)
    });
    await activityAuthorPage.exitEditor.click().then(async function () {
        await helper.continueWithoutSavingChanges();
        await browser.sleep(2000);
    })
});


When('user click on edit page link', async function () {

    await pageblockpage.lnkEditPage.isDisplayed().then(async function () {
        await pageblockpage.lnkEditPage.click().then(function () {
            browser.sleep(2000)


        })
    })

});


When('user should be able to see page content editable window', async function () {
    await pageblockpage.lblPageDividerLabel.isDisplayed().then(async function (result) {
        expect(result).to.be.true;
        await browser.sleep(2000);
    });
});


let pageBlockTitle:string = "";
When('user enter page title in alphanumeric format as {string}', async function (string) {
    pageBlockTitle = string;
    await pageblockpage.txtPageTitle.clear().then(async function () {
    });
    await pageblockpage.txtPageTitle.sendKeys(string);
    await browser.sleep(2000)
});


When('user click on save button of page divider', async function () {

    await pageblockpage.btnSavePageTitle.isDisplayed().then(async function () {
        await pageblockpage.btnSavePageTitle.click().then(function () {
            browser.sleep(2000)

        })
    })
});

// 
Then('user should see page title data in title textfield', async function () {
    var pageBlockTitleText;
    await pageblockpage.txtPageTitleTxtfieldAfterSaveButton.getAttribute("ng-reflect-model").then(async function (pageBlockTitleText) {
        expect(pageBlockTitleText).to.equal(pageBlockTitle);
        await browser.sleep(2000);
    });
    await activityAuthorPage.exitEditor.click().then(async function () {
        await helper.continueWithoutSavingChanges();
        await browser.sleep(2000);
    })
});

When('user click toggle button of points', async function () {

    await pageblockpage.tglNumberOfPiontToggleButton.isDisplayed().then(async function () {
        await pageblockpage.tglNumberOfPiontToggleButton.click().then(function () {
            browser.sleep(2000)

        })
    })
});


When('user enter numeric text points as {string}', async function (string) {

    await pageblockpage.txtNumberOfpoints.clear().then(async function () {
    });
    await pageblockpage.txtNumberOfpoints.sendKeys(string);
    browser.sleep(2000)
});

// save button will be clicked 

Then('user should see number of Point in point textfield', async function () {
    var pointcompletion;
    await pageblockpage.txtPoint.getAttribute("ng-reflect-model").then(async function (pointcompletion) {
        expect(pointcompletion).to.equal;
        browser.sleep(2000)

    });
});

When('user enter numeric text time duration as {string}', async function (string) {

    await pageblockpage.txtNumberOfTimeDuration.clear().then(async function () {
    });
    await pageblockpage.txtNumberOfTimeDuration.sendKeys(string);
    browser.sleep(2000)
});



When('user click toggle button of time duration', async function () {

    await pageblockpage.tglNumberOfTimesDurationToggleButton.isDisplayed().then(async function () {
        await pageblockpage.tglNumberOfTimesDurationToggleButton.click().then(function () {
            browser.sleep(2000)

        })
    })
});


When('user enter numeric text for expected time duration as {string}', async function (string) {
    await pageblockpage.txtExpectedTimeDuraton.sendKeys(string);
    browser.sleep(2000)
});

Then('user should see number of expected time duraton in time textfield', async function () {
    var timecompletion;
    await pageblockpage.txtTime.getAttribute("ng-reflect-model").then(async function (timecompletion) {
        expect(timecompletion).to.equal;
        browser.sleep(2000)
    });
});


When('user click on plus icon of points to increase points', async function () {

    await pageblockpage.icnPluseToIcreasePoints.isDisplayed().then(async function () {
        await pageblockpage.icnPluseToIcreasePoints.click().then(function () {
            browser.sleep(2000)
        })
    })
});

When('user click 5 times to increase the points', async function () {

    await pageblockpage.txtNumberOfpoints.clear().then(async function () {

    });
    await pageblockpage.icnPluseToIcreasePoints.isDisplayed().then(async function () {

    });
    for (let i = 0; i < 5; i++) {
        await pageblockpage.icnPluseToIcreasePoints.click().then(async function () {
            browser.sleep(2000)
            console.log("console button clicked !!!!!!!!!!!!!!!");
            console.log("Block statement execution no." + i);

        });
    }

});

Then('user should see valid point value increased by user', async function () {
    var pointincreased;
    await pageblockpage.txtNumberOfpoints.getAttribute("mat-input-82").then(async function (pointincreased) {
        expect(pointincreased).to.equal;
        browser.sleep(2000)
        console.log("validation for increament is passed !!!!");
    });
});


When('user click 3 times to decrease the point', async function () {
    browser.sleep(2000)
    await pageblockpage.icnMinusToDicreasePoints.isDisplayed().then(async function () {
    });
    for (let i = 3; i > 0; i--) {
        await pageblockpage.icnMinusToDicreasePoints.click().then(async function () {
            browser.sleep(2000)
            console.log("Points Decreased !!!!!!!!!!!!!!!!!");

        });
    }

});

Then('user should see valid point value dicreased by user', async function () {
    var pointdicreased;
    await pageblockpage.txtNumberOfpoints.getAttribute("mat-input-82").then(async function (pointdicreased) {
        expect(pointdicreased).to.equal;
        browser.sleep(2000)

        console.log("validation for dicreased is passed !!!!");
    });
});

When('Save and cancel button should be displayed to the user', async function () {
    await pageblockpage.btnSavePageTitle.isDisplayed().then(async function (result) {
        expect(result).to.be.true;
        await browser.sleep(2000)
        console.log("Save button validated !!!!");
    });

    await pageblockpage.btnCancelPageTitle.isDisplayed().then(async function (result) {
        expect(result).to.be.true;
        browser.sleep(2000)
        console.log("Cancel  button validated !!!!");
    });
    await helper.cancelCMSChangesAndExit();
});


When('user click on preview button after save', async function () {

    await pageblockpage.btnPreview.isDisplayed().then(async function () {
        await pageblockpage.btnPreview.click().then(async function () {
            await browser.sleep(2000)

        })
    })
});

Then('user should get page block title in new opened window', async function () {
    //let pageblockTitle = "Page block";
    let parentWindowHandle: string = await browser.getWindowHandle();
    //console.log("Window handel name is " + parentWindowHandle);
    let windowHandles: Array<string> = await browser.getAllWindowHandles();
    console.log(windowHandles);

    windowHandles.forEach(async function (handle) {
        if (!(handle === parentWindowHandle)) {
            await browser.switchTo().window(handle).then(async function () {
                console.log('switched to new window');
                let newtWindowHandle: string = await browser.getWindowHandle();
                console.log("Window handel name is " + newtWindowHandle);
                await browser.sleep(3000);
                //  await browser.wait(EC.visibilityOf(activityLaunchPage.firstModulePreview));
                //await browser.sleep(8000)
            });
        }
    });
    await pageblockpage.pageTitleInPreview.getText().then(function(titleInPreview){
        expect(titleInPreview).to.equal(pageBlockTitle)
    })
    await browser.switchTo().window(parentWindowHandle);
    await activityAuthorPage.exitEditor.click().then(async function () {
        await helper.continueWithoutSavingChanges();
        await browser.sleep(2000);
    })
})

Then('user should see blank textfield for points and time duration', async function () {


    await pageblockpage.txtNumberOfpoints.getAttribute("ng-reflect-model").then(async function (timecompletion) {
        //  expect(timecompletion).to.equal;
        expect(timecompletion).to.empty;
        browser.sleep(2000)
    });

    await pageblockpage.txtExpectedTimeDuraton.getAttribute("ng-reflect-model").then(async function (timecompletion) {
        //  expect(timecompletion).to.equal;
        browser.sleep(2000)
        expect(timecompletion).to.empty;

    });
});