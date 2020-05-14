import { Given, Then, When } from "cucumber";
import { browser, By, element, ElementFinder, protractor } from "protractor";
import { AdminLandingPageLocate } from "../../PageObjects/Sprint 2/AdminLandingPage";
import { SupportPageLocate } from "../../PageObjects/Sprint 7/SupportPage";
import { CommonLocate } from "../../PageObjects/Common";
import { LoginPageLocate } from "../../PageObjects/Sprint 1/LoginPage";

import chai = require("chai");
var dragAndDrop = require('html-dnd').code;
const support = require('protractor-firefox-support');
var expect = chai.expect;
var listExists = true;
var EC = protractor.ExpectedConditions;
var driver = browser.driver;
let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let supportPage = new SupportPageLocate();
let commonObjects = new CommonLocate();
let allContentTypeOptions: Array<string> = ['Select', 'Action', 'Moment', 'Concept', 'Insight', 'Exercise', 'Go-Do', 'Tool', 'Video', 'Image', 'Document', 'MBA Report', 'Support', 'Registration'];
let exppanellist: Array<string> = [];
var actpanellist = ['Journey Flow', 'Journey Configuration', 'Resources', 'Leader Board', 'Journey Script', 'Notifications', 'Reports', 'Support', 'Registration'];

Given('User is on CMS - Activity Authoring Editing Page for Support Page', async function () {
    let currentUrl = await browser.getCurrentUrl();
    if (!currentUrl.includes("contenteditor")) {
        if (currentUrl.includes('home/admin')) {
            await admlandpage.tabClient.isDisplayed().then(async function () {
                await admlandpage.tabClient.click().then(async function () {
                    await admlandpage.colPetronas.click().then(async function () {
                        await browser.sleep(2000);
                    })

                });

            })
        }

        await supportPage.sampleContent.click().then(function () {
            browser.sleep(2000);
        });

    }
})


When('User can view list of content type options and can select Support option', async function () {
    let contentTypeOptions: Array<string> = [];

    await supportPage.contentTypeAllOptions.each(async function (element: ElementFinder) {
        let currentOption: string = await element.getText();
        contentTypeOptions.push(currentOption);

    });
    browser.sleep(5000);
    expect(contentTypeOptions).to.have.members(allContentTypeOptions);
    await supportPage.contentTypeFirstOption.click();

})


Then("User can see 'Support' option selected", async function () {
    await supportPage.contentTypeSupportOption.isDisplayed().then(function (result) {
        expect(result).to.be.true;
    })
});


When('User clicks on Support Journey and landed to Journey Authoring page', async function () {
    await supportPage.journeyName.isDisplayed().then(async function () {
        await supportPage.journeyName.click().then(async function () {
            browser.sleep(2000);
        })
    })
});



When('User should be able to view left side panel with Support Option and click on it', async function () {
    await supportPage.journeyauthStaticOpts.each(function (element) {
        element.getText().then(function (txt) {
            exppanellist.push(txt);

        })
    })

    expect(actpanellist).to.include.members(exppanellist);
    await supportPage.supportpagelnk.click().then(async function () {
        browser.sleep(2000);
    })
});


Then("User lands on Support Link Page", async function () {
    await supportPage.supportpagetitle.isDisplayed().then(function (result) {
        expect(result).to.be.true;
    })
});


When('User clicks on link activity icon', async function () {
    await supportPage.lnksupportactivity.isDisplayed().then(async function () {
        await supportPage.lnksupportactivity.click().then(async function () {
            browser.sleep(2000);
        })
    })
});



When('user selects from current collection content list for Support Page', async function () {
    await supportPage.linkContentDropDown.isEnabled().then(async function () {
        await supportPage.linkContentDropDown.click().then(async function () {
            await supportPage.linkContnetDropDownSelection.isPresent().then(async function () {
                await supportPage.linkContnetDropDownSelection.click()
            })
        })
    })
})


When('user click on attachement icon to link content for Support Page', async function () {
    await supportPage.linkContentIcon.click()
});

Then('user should be able to view linked Activity for Support Page', async function () {
    await supportPage.linkedContentLabel.isDisplayed().then(async function () {
        await supportPage.linkedContentLabel.getText().then(function (label) {
            expect(label).to.be.eql("Support Page CMS Automation")
        })
    })
});


When('User can SAVE and PUBLISH Support Page', async function () {
    await supportPage.btnSavelinkSupport.isDisplayed().then(async function () {
        await supportPage.btnSavelinkSupport.click().then(async function () {
            await browser.sleep(5000);
            // await browser.actions().mouseMove(supportPage.btnSavelinkSupport, {x: 0, y:-100}).click().perform();

             await browser.driver.findElement(By.xpath("//div[contains(text(),'Journey Saved Successfully')]")).click().then(function(){
                 browser.sleep(1000);
             })

        })
    })
    await supportPage.btnPublishlinkSupport.isDisplayed().then(async function () {
        await supportPage.btnPublishlinkSupport.click().then(async function () {
            browser.sleep(2000);
        })
    })
});