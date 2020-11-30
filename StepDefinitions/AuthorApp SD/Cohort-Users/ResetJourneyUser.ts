import { Given, When, Then } from "cucumber";
import { browser, element, protractor } from "protractor";
import config from "../../config.json"
import chai = require('chai');
var EC = protractor.ExpectedConditions;
import { Alert } from "selenium-webdriver";
import { By } from "protractor";
import { async } from "q";

// import { ResetJourneyUserPageLocate } from "../../PageObjects/Sprint 1 to 20/Sprint 20/ResetJourneyUserPageLocate"
import { ResetJourneyUserPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/ResetJourneyUserPage"

var expect = chai.expect;

let resetJourneyUser = new ResetJourneyUserPageLocate();




When('User click on Cohort and User label from left panel', async function () {
    await resetJourneyUser.cohortUserLbl.isDisplayed().then(async function () {
        await resetJourneyUser.cohortUserLbl.click().then(async function () {
            await browser.sleep(2000);
            
        })
    })
});

When('User search journey as {string} and click on the jounrey', async function (journeyName) {
    await resetJourneyUser.filterjourneyTxt.isDisplayed().then(async function () {
        await resetJourneyUser.filterjourneyTxt.clear().then(async function () {
            await resetJourneyUser.filterjourneyTxt.sendKeys(journeyName)
            await browser.sleep(6000);
        });
    });

    await resetJourneyUser.AutomatioJourneyManshaJrny.isDisplayed().then(async function () {
        await resetJourneyUser.AutomatioJourneyManshaJrny.click().then(async function () {
            await browser.sleep(2000);
        })
    })
});

When('User click ResetJourneyCohort', async function () {
    await resetJourneyUser.ResetJounreyCohortBtn.isDisplayed().then(async function () {
        await resetJourneyUser.ResetJounreyCohortBtn.click().then(async function () {
            await browser.sleep(2000);
            
        })
    })
});

When('User click on first name as AutomationReset of Automation Jounrey Mansha', async function () {
    await resetJourneyUser.AutomationResetBtn.isDisplayed().then(async function () {
        await resetJourneyUser.AutomationResetBtn.click().then(async function () {
            await browser.sleep(2000);
            
        })
    })
});


When('User click on Journeys Data tab', async function () {
    await resetJourneyUser.JounreyDataLbl.isDisplayed().then(async function () {
        await resetJourneyUser.JounreyDataLbl.click().then(async function () {
            await browser.sleep(2000);
            console.log("Jounrey Data clicked !!!");
            
        })
    })
});

When('User click on Journeys Data button to reset journey', async function () {
    await resetJourneyUser.ResetJourneyDataBtn.isDisplayed().then(async function () {
        await resetJourneyUser.ResetJourneyDataBtn.click().then(async function () {
            await browser.sleep(2000);
        })
    })
});


When('User click on User Dashboard to switch on Automation Journey Mohit journey', async function () {
    await resetJourneyUser.UserDashBoardLbl.isDisplayed().then(async function () {
        await resetJourneyUser.UserDashBoardLbl.click().then(async function () {
            await browser.sleep(2000);
            console.log("Dashboard clicked !!!");
            
        })
    })
});

When('User search journey as {string} and click on the same jounrey', async function (journeyName) {
    await resetJourneyUser.filterjourneyTxt.isDisplayed().then(async function () {
        await resetJourneyUser.filterjourneyTxt.clear().then(async function () {
            await resetJourneyUser.filterjourneyTxt.sendKeys(journeyName)
            await browser.sleep(2000);
        });
    });

    await resetJourneyUser.AutomationJourneyMohitJrny.isDisplayed().then(async function () {
        await resetJourneyUser.AutomationJourneyMohitJrny.click().then(async function () {
            await browser.sleep(2000);
        })
    })

});

When('User click ResetJourneyProgressCohort for Automation Journey Mohit', async function () {
    await resetJourneyUser.ResetJounreyProgreessCohortBtn.isDisplayed().then(async function () {
        await resetJourneyUser.ResetJounreyProgreessCohortBtn.click().then(async function () {
            await browser.sleep(2000);
            console.log("ResetJourneyProgressCohort clicked")
            
        })
    })
});


When('User click on first name as AutomationReset of Automation Journey Mohit', async function () {
    await resetJourneyUser.AutomationReset2Btn.isDisplayed().then(async function () {
        await resetJourneyUser.AutomationReset2Btn.click().then(async function () {
            await browser.sleep(2000);
            console.log("First name as Automation Reset clicked")
            
        })
    })
});

When('Participant user click NEXT button after enter email', async function () {
    await resetJourneyUser.NextBtn.isDisplayed().then(async function () {
        await resetJourneyUser.NextBtn.click().then(async function () {
            await browser.sleep(2000);
            console.log("NEXT Button clicked")
            
        })
    })
});


When("User select an industry as {string} from industry vertical and click CONTINUE button", async function (industryName) {
    console.log("YYYYYYYYYYYYYYYYYYYYY");
    browser.waitForAngularEnabled(false);
    await resetJourneyUser.IndustryDDArrow.isDisplayed().then(async function (registrationReqd) {
        if (registrationReqd == true) {
            await resetJourneyUser.IndustryDDArrow.click().then(async function () {
                await browser.sleep(2000);
                let actionXpath: string = "//option[contains(text(),'" + industryName + "')]"
                await browser.sleep(2000);
                await element(By.xpath(actionXpath)).click().then(async function () {
                    await browser.sleep(12000);
                    console.log("ZZZZZZZZZZZZZZZZZZZZZZ");

                })
            })
        }
    })
      await resetJourneyUser.ContinueBtn.isDisplayed().then(async function () {
        await resetJourneyUser.ContinueBtn.click().then(async function () {
            await browser.sleep(3000);
           
            
        })
    })
})


When('User click CONTINUE button after finishing ManshaSharelinkContentobject1', async function () {
    browser.waitForAngularEnabled(false);
    await browser.sleep(4000);
    await resetJourneyUser.ContinueBtn.isDisplayed().then(async function () {
        await resetJourneyUser.ContinueBtn.click().then(async function () {
            await browser.sleep(12000);
        })
    })
});

When('User click on Logout link', async function () {
    browser.waitForAngularEnabled(false);
    await browser.sleep(4000);
    await resetJourneyUser.LogoutLnk.isDisplayed().then(async function () {
        await resetJourneyUser.LogoutLnk.click().then(async function () {
            await browser.sleep(2000);
            
            
        })
    })
});

When('User click CONTINUE button after finishing DownloadActivity', async function () {
    browser.waitForAngularEnabled(false);
    await browser.sleep(4000);
    await resetJourneyUser.ContinueBtn.isDisplayed().then(async function () {
        await resetJourneyUser.ContinueBtn.click().then(async function () {
            await browser.sleep(12000);
            console.log("DownloadActivity  clicked")
        })
    })
});


