import { Given, Then, When } from "cucumber";
import { browser, By, element, protractor } from "protractor";
import { AdminLandingPageLocate } from "../../../PageObjects/AuthorApp POM/Home Page/AdminLandingPage";
import { LoginPageLocate } from "../../../PageObjects/AuthorApp POM/Login/LoginPage";
import { ClientCopyJourneyPageLocate } from "../../../PageObjects/AuthorApp POM/Journey/CopyJourneyPage";
import { ActivityLaunchLocate } from "../../../PageObjects/AuthorApp POM/Journey/ActivityLaunchPage";


let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let activityLaunchPage = new ActivityLaunchLocate();
let clientCopyJourney = new ClientCopyJourneyPageLocate();


import config from "../../config.json";
import chai = require('chai');
var expect = chai.expect;
var listexists = true;
var EC = protractor.ExpectedConditions;



When('User should click on Client Tab', async function () {
    await clientCopyJourney.tabClient.isDisplayed().then(async function () {
        await clientCopyJourney.tabClient.click();
        
    })
});

When('User should click on Petronas folder', async function () {
    await clientCopyJourney.txtClientSearch.sendKeys("petronas").then(async function () {
        await clientCopyJourney.colPetronas.isDisplayed().then(async function () {
            await clientCopyJourney.colPetronas.click().then(async function(){
                await browser.sleep(6000);
            })
        })
    })
});


Then('User should check if plus icon is present besides Journeys and click on it', async function () {
    await browser.sleep(1000);
    await clientCopyJourney.btnJourneyPlus.isDisplayed().then(async function () {
        await clientCopyJourney.btnJourneyPlus.click().then(async function () {
            await clientCopyJourney.mnuCopyJourney.isDisplayed().then(async function () {
                await clientCopyJourney.mnuCopyJourney.click().then(async function () {
                    await browser.sleep(5000);
                    await browser.driver.switchTo().activeElement().then(async function () {
                      await  browser.sleep(5000);
                    })
                })
            })
        })
    })
});


When("User should give Journey Title as {string} to copy from master", async function (string) {
    await browser.sleep(5000);
    await clientCopyJourney.SearchCollectionTxt.clear().then(async function () {
        await clientCopyJourney.SearchCollectionTxt.sendKeys(string).then(async function () {
            await browser.sleep(1000);
            })
    })

    await clientCopyJourney.SearchCollectionICON.isEnabled().then(async function () {
        await clientCopyJourney.SearchCollectionICON.click().then(async function () {
            await browser.sleep(5000);
        })
    })
});


When("User click on select button of AutomationCopyJourney journey to copy from master", async function () {
    await browser.sleep(500);
    await clientCopyJourney.AutomationCopyJourneySelectBtn.isDisplayed().then(async function () {
        await clientCopyJourney.AutomationCopyJourneySelectBtn.click();
        
    })
});


When("User provide Journey Title as {string}", async function(journeyName){
    await clientCopyJourney.txtJourneyTitle.click().then(async function(){
        await browser.sleep(500);
        await clientCopyJourney.txtJourneyTitle.clear();
        await browser.sleep(300);
        await clientCopyJourney.txtJourneyTitle.sendKeys(journeyName);
       await browser.sleep(500);
        await clientCopyJourney.btnJourneyAuthSave.click();
        await browser.sleep(5000);
        
    })
})


Then("User should see AutomationCopyJourneyTest is copied with tag of copied from master", async function () {
    await browser.sleep(1000);
    await clientCopyJourney.AutomationCopyJourneyTestCopied.isDisplayed().then(async function (journeyCopied) {
        expect(journeyCopied).to.be.true;  
    })

})

Then('User should click on Copy button under Copy Journey dialog box', async function () {
    await clientCopyJourney.btnCopyCopyJourney.isDisplayed().then(async function () {
        await clientCopyJourney.btnCopyCopyJourney.click().then(async function () {
            await browser.sleep(4000);
        })
    })
});

Then('User should give Journey Title as {string} and Journey Description as {string}', async function (string, string2) {
    await clientCopyJourney.txtJourneyTitle.clear().then(async function () {
        await clientCopyJourney.txtJourneyTitle.sendKeys(string).then(async function () {
            await clientCopyJourney.txtJourneyDescription.clear().then(async function () {
                await clientCopyJourney.txtJourneyDescription.sendKeys(string2).then(async function () {
                    await browser.sleep(4000);
                })
            })
        })
    })
});


Then('User should click on Save button of Journey Configuration', async function () {
    await clientCopyJourney.btnJourneyAuthSave.isEnabled().then(async function () {
        await clientCopyJourney.btnJourneyAuthSave.click().then(async function () {
            await browser.sleep(5000);
        })
    })
});     

Then('User should give blank Journey Title as {string} and blank Journey Description as {string}', async function (string, string2) {
    await clientCopyJourney.txtJourneyTitle.clear().then(async function () {
        await clientCopyJourney.txtJourneyTitle.sendKeys(string).then(async function () {
            await clientCopyJourney.txtJourneyDescription.clear().then(async function () {
                await clientCopyJourney.txtJourneyDescription.sendKeys(string2).then(async function () {
                    await browser.sleep(4000);
                })
            })
        })
    })
});


Then('User should click on Save button after filing blank data for journey name and journey description', async function () {
    await clientCopyJourney.btnJourneyAuthSave.isEnabled().then(async function () {
        await clientCopyJourney.btnJourneyAuthSave.click().then(async function () {
            await browser.sleep(5000);
            
        })
    })
});     

//////////////////////////////
Then('User should see validation message as Title is mandatory', async function () {
        await browser.wait(EC.visibilityOf(clientCopyJourney.toastMessageTitleismandatory), 500).then(async function () {
             await clientCopyJourney.toastMessageTitleismandatory.isDisplayed().then(async function(result){
                expect(result).to.be.true;
             });

        })
})