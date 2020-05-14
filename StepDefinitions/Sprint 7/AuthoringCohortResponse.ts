import { Then, When } from "cucumber";
import { browser, protractor, ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "protractor";
import { AuthoringCohortResponsePage } from "../../PageObjects/Sprint 7/AuthoringCohortResponsePage";
import { AdminLandingPageLocate } from "../../PageObjects/Sprint 2/AdminLandingPage";
import { CommonLocate } from "../../PageObjects/Common";
import { LoginPageLocate } from "../../PageObjects/Sprint 1/LoginPage";
import chai = require("chai");
var expect = chai.expect;
import { async } from "q";
var EC = protractor.ExpectedConditions;

let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let commonObjects = new CommonLocate();
let cohortResponsePage = new AuthoringCohortResponsePage();

let today: Date = new Date();
let dd: string = String(today.getDate()).padStart(2, '0');
let mm: string = String(today.getMonth() + 1).padStart(2, '0');
let year: number = today.getFullYear();
let hours: number = today.getHours();
let minutes: number = today.getMinutes();

let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + ':' + minutes;
let latestCohortBlockId = "CR_Automation_" + currentDateTime;
let latestCohortblockTitle = "CR_Title_Auto_" + currentDateTime;
let latestNextResponseLabel = "NR_Automation_" + currentDateTime;

// var latestCohortBlockId = "";
// var latestCohortblockTitle = "";
// var latestNextResponseLabel = "";

When("User selects the Cohort Response Content", async function () {
    await cohortResponsePage.cohortResponseContent.click().then(function () {
        browser.sleep(5000);
    })
})

When("User clicks on Edit Cohort Response Button", async function () {
    await cohortResponsePage.btnEditCohortResponse.click();

});

When("User enters Block Id, Block Title, Next Response Label", async function () {
    // let today: Date = new Date();
    // let dd: string = String(today.getDate()).padStart(2, '0');
    // let mm: string = String(today.getMonth() + 1).padStart(2, '0');
    // let year: number = today.getFullYear();
    // let hours: number = today.getHours();
    // let minutes: number = today.getMinutes();

    // let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + ':' + minutes;
    // let cohortBlockId = "CR_Automation_" + currentDateTime;
    // let cohortblockTitle = "CR_Title_Auto_" + currentDateTime;
    // let nextResponseLabel = "NR_Automation_" + currentDateTime;

    // cohortBlockId = latestCohortBlockId
    // latestCohortblockTitle = cohortblockTitle;
    // latestNextResponseLabel = nextResponseLabel;

    await cohortResponsePage.txtCohortResBlockId.click().then(async function () {
        await cohortResponsePage.txtCohortResBlockId.clear().then(async function () {
            cohortResponsePage.txtCohortResBlockId.sendKeys(latestCohortBlockId);
        })
    });

    await cohortResponsePage.txtCohortResBlockTitle.click().then(async function () {
        await cohortResponsePage.txtCohortResBlockTitle.clear().then(async function () {
            cohortResponsePage.txtCohortResBlockTitle.sendKeys(latestCohortblockTitle);
        })
    });

    await cohortResponsePage.txtCohortNextResponseLabel.click().then(async function () {
        await cohortResponsePage.txtCohortNextResponseLabel.clear().then(async function () {
            cohortResponsePage.txtCohortNextResponseLabel.sendKeys(latestNextResponseLabel);
        })
    })

})


When("User selects the JourneyScript Id of Single Select", async function () {
    await cohortResponsePage.txtJrnyScrptId.clear().then(async function () {
        await cohortResponsePage.txtJrnyScrptId.click().then(async function () {
            await cohortResponsePage.txtJrnyScrptId.sendKeys("SS_CR_001");
        })
    })

});

When("User clicks on SAVE button of Cohort Response Block", async function () {
    await cohortResponsePage.btnCohortResSave.click();
})


Then("the Single Select Id should get saved as the JourneyScript Id of Cohort Response", async function () {
    await cohortResponsePage.cohortResLinkedIdPreview.getAttribute("ng-reflect-model").then(function (linkedQuestionId) {
        expect(linkedQuestionId).to.equal("SS_CR_001");
    })
});

When("User saves the changes and exits the activity", async function () {
    await cohortResponsePage.btnCohortResSaveDraft.click().then(async function () {
        await browser.sleep(3000).then(async function () {
            await cohortResponsePage.btnPublish.click().then(async function () {
                await browser.sleep(4000);
                await cohortResponsePage.btnExitEditor.click().then(async function () {
                    await browser.sleep(3000);
                })

            })
        })
    })
});


Then("the changes made to Cohort Response fields should get saved", async function () {
    await cohortResponsePage.cohortResponseContent.click().then(function () {
        browser.sleep(3000);
    });
    await cohortResponsePage.txtCRIdPreview.getAttribute("ng-reflect-model").then(function (id) {
        //console.log(result);
        expect(id).to.equal(latestCohortBlockId);
    });

    await cohortResponsePage.txtCRBlockTitlePreview.getAttribute("ng-reflect-model").then(function (title) {
        //console.log(result);
        expect(title).to.equal(latestCohortblockTitle);
    })
})


// When("User selects the JourneyScript Id of Multi Select", async function () {
//     await cohortResponsePage.jrnyScrptIdDDArrow.click().then(async function () {
//         await cohortResponsePage.ddOptionMSJourneyScriptId.click();
//     });
// });

When("User selects the JourneyScript Id of Multi Select", async function () {
    await cohortResponsePage.txtJrnyScrptId.clear().then(async function () {
        await cohortResponsePage.txtJrnyScrptId.click().then(async function () {
            await cohortResponsePage.txtJrnyScrptId.sendKeys("MS_CR_001");
        })
    })

});

Then("the Multi Select Id should get saved as the JourneyScript Id of Cohort Response", async function () {
    await cohortResponsePage.cohortResLinkedIdPreview.getAttribute("ng-reflect-model").then(function (linkedQuestionId) {
        expect(linkedQuestionId).to.equal("MS_CR_001");
    });
});



//---------------------------------------------------------------------------------------------------------

When("User selects the Sprint 7 module under Automation_Mohit stage", async function () {
    await cohortResponsePage.btnRevisitModuleSprint7.click().then(async function () {
        browser.sleep(1000);
    })

})

When("User clicks on Cohort Response activity", async function () {
    cohortResponsePage.btnRevisitActivityCohortRes.click().then(function () {
        browser.sleep(5000);
    })
})

Then("the Next Response buttons should be displayed and its name should be correct", async function () {

    browser.ignoreSynchronization = true;


    await cohortResponsePage.btnParticipantNextResponse.isDisplayed().then(async function (btnVisibility) {
        expect(btnVisibility).to.be.true;
    })
    await cohortResponsePage.participantNextResponseBtnName.getText().then(async function (nextResponseBtnName) {
        console.log(nextResponseBtnName);
        expect(nextResponseBtnName).to.equal(latestNextResponseLabel);
    });
    browser.ignoreSynchronization = false;
})

Then("_the Cohort Responses should be displayed when user clicks on Next Response button", async function () {
    let cohortResponses: Array<string> = [];
    let nextResponseEnabled: boolean = await cohortResponsePage.btnParticipantNextResponse.isEnabled();
    while (nextResponseEnabled) {
        let responsePresent: boolean = await cohortResponsePage.cohortResponseText.isPresent();
        if (responsePresent) {
            let currentResponse: string = await cohortResponsePage.cohortResponseText.getText();
            cohortResponses.push(currentResponse);
            console.log(currentResponse);
        }

        let nextResponseButton: ElementFinder = cohortResponsePage.btnParticipantNextResponse;
        nextResponseEnabled = await nextResponseButton.isEnabled();
    };
    console.log(cohortResponses);

})

Then("the Cohort Responses should be displayed when user clicks on Next Response button", async function () {
    //browser.ignoreSynchronization = true;
    //let nextResponseButton:ElementFinder = cohortResponsePage.btnParticipantNextResponse;
    let cohortResponses: Array<string> = [];

    let responseElement = await browser.driver.findElement(By.xpath("//div[contains(@class,'cohort-response-block')]//div[contains(@class,'answer')]/span[2]"));
    if (responseElement != null) {
        let currentResponse: string = await browser.driver.findElement(By.xpath("//div[contains(@class,'cohort-response-block')]//div[contains(@class,'answer')]/span[2]")).getText();
        console.log(currentResponse);
        cohortResponses.push(currentResponse);
    }

    let isNextResponseEnabled: boolean = await browser.driver.findElement(By.xpath("//button[contains(@class,'res-btn')]")).isEnabled();
    while (isNextResponseEnabled) {
        await browser.driver.findElement(By.xpath("//button[contains(@class,'res-btn')]")).click().then(function () {
            browser.sleep(2000);
        });
        responseElement = await browser.driver.findElement(By.xpath("//div[contains(@class,'cohort-response-block')]//div[contains(@class,'answer')]/span[2]"));
        if (responseElement != null) {
            let currentResponse: string = await browser.driver.findElement(By.xpath("//div[contains(@class,'cohort-response-block')]//div[contains(@class,'answer')]/span[2]")).getText();
            console.log(currentResponse);
            cohortResponses.push(currentResponse);
        }
        isNextResponseEnabled = await browser.driver.findElement(By.xpath("//button[contains(@class,'res-btn')]")).isEnabled();
    }

    console.log(cohortResponses);
    expect(cohortResponses).to.have.members(['Austria', 'Italy']);

    //browser.ignoreSynchronization = false;
})


//----------------------------------------------------------------------------------------------------------

Then("Cohort Response inputs in disabled mode should be visible to the user in Preview mode", async function () {
    await cohortResponsePage.txtCRBlockTitlePreview.isDisplayed().then(function (result) {
        //console.log(result);
        expect(result).to.be.true;
    });

    await cohortResponsePage.txtCRIdPreview.isDisplayed().then(function (result) {
        //console.log(result);
        expect(result).to.be.true;
    });

    await cohortResponsePage.cohortResLinkedIdPreview.isDisplayed().then(function (result) {
        //console.log(result);
        expect(result).to.be.true;
    });

    // await cohortResponsePage.txtCRBlockTitlePreview.getAttribute("ng-reflect-model").then(function (blockTitle) {
    //     console.log(blockTitle);
    // })
})

//------------------------------------------------------------------------------------------------------------

Then("Add Item button and Delete icon should not be seen in preview mode", async function () {
    await cohortResponsePage.btnEditCohortResponse.click().then(async function () {
        await cohortResponsePage.btnCohortResAddItem.isDisplayed().then(async function (isBtnDisplayed) {
            if (isBtnDisplayed == true) {

                await cohortResponsePage.btnCohortResAddItem.click();
            }
            else {
                expect(true).to.be.false;
            }

        });
        await cohortResponsePage.btnCohortResDeleteItem.isDisplayed().then(function (isBtnDisplayed) {
            expect(isBtnDisplayed).to.be.true;
        });
        await cohortResponsePage.btnCancelEditCohortRes.click().then(function () {
            browser.sleep(1000);
        });

    })
    await cohortResponsePage.btnCohortResAddItem.isPresent().then(function (isBtnDisplayed) {
        expect(isBtnDisplayed).to.be.false;
    });
    await cohortResponsePage.btnCohortResDeleteItem.isPresent().then(function (isBtnDisplayed) {
        expect(isBtnDisplayed).to.be.false;
    });
});

Then("user can not edit details of Configuration and Allow Commenting tabs in preview mode", async function () {
    await cohortResponsePage.txtCRBlockTitlePreview.isEnabled().then(function (isBlockTitleEnabled) {
        expect(isBlockTitleEnabled).to.be.false;
        // console.log(isBlockTitleEnabled);
    });
    await cohortResponsePage.txtCRIdPreview.isEnabled().then(function (isCRIdEnabled) {
        expect(isCRIdEnabled).to.be.false;
        //console.log(isCRIdEnabled);
    });
    await cohortResponsePage.cohortResLinkedIdPreview.getAttribute("ng-reflect-is-disabled").then(function (isDDArrowDisabled) {
        expect(isDDArrowDisabled).to.equal("true");
    });
})